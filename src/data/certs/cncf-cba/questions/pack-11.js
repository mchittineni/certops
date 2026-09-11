export const CNCF_CBA_QUESTIONS_11 = [
  {
    id: "cncf-cba-251",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Structuring the Portal Codebase: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Split the frontend and backend into two separate repositories, each pinning its own range of `@backstage/*` package versions." },
      { id: 'B', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." },
      { id: 'C', text: "Keep a single `packages/app` workspace and import the backend routers straight into the React application at build time." },
      { id: 'D', text: "Publish every plugin as its own npm package and install them into an otherwise empty app at deploy time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers. Separate repositories let the two halves drift onto different `@backstage/*` versions, which the shared core packages do not tolerate; importing the backend into the React build would ship server credentials to the browser; and publishing every plugin separately turns a version bump into a release train.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo","Backstage Monorepo","Enterprise Portal"]
  },
  {
    id: "cncf-cba-252",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Structuring the Portal Codebase: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Publish every plugin as its own npm package and install them into an otherwise empty app at deploy time." },
      { id: 'B', text: "Split the frontend and backend into two separate repositories, each pinning its own range of `@backstage/*` package versions." },
      { id: 'C', text: "Keep a single `packages/app` workspace and import the backend routers straight into the React application at build time." },
      { id: 'D', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers. Separate repositories let the two halves drift onto different `@backstage/*` versions, which the shared core packages do not tolerate; importing the backend into the React build would ship server credentials to the browser; and publishing every plugin separately turns a version bump into a release train.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo","Backstage Monorepo","High Scale Catalog"]
  },
  {
    id: "cncf-cba-253",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Structuring the Portal Codebase: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." },
      { id: 'B', text: "Keep a single `packages/app` workspace and import the backend routers straight into the React application at build time." },
      { id: 'C', text: "Publish every plugin as its own npm package and install them into an otherwise empty app at deploy time." },
      { id: 'D', text: "Split the frontend and backend into two separate repositories, each pinning its own range of `@backstage/*` package versions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers. Separate repositories let the two halves drift onto different `@backstage/*` versions, which the shared core packages do not tolerate; importing the backend into the React build would ship server credentials to the browser; and publishing every plugin separately turns a version bump into a release train.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo","Backstage Monorepo","Security And Governance"]
  },
  {
    id: "cncf-cba-254",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Structuring the Portal Codebase: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." },
      { id: 'B', text: "Publish every plugin as its own npm package and install them into an otherwise empty app at deploy time." },
      { id: 'C', text: "Split the frontend and backend into two separate repositories, each pinning its own range of `@backstage/*` package versions." },
      { id: 'D', text: "Keep a single `packages/app` workspace and import the backend routers straight into the React application at build time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers. Separate repositories let the two halves drift onto different `@backstage/*` versions, which the shared core packages do not tolerate; importing the backend into the React build would ship server credentials to the browser; and publishing every plugin separately turns a version bump into a release train.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo","Backstage Monorepo","Developer Onboarding"]
  },
  {
    id: "cncf-cba-255",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Structuring the Portal Codebase: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Keep a single `packages/app` workspace and import the backend routers straight into the React application at build time." },
      { id: 'B', text: "Split the frontend and backend into two separate repositories, each pinning its own range of `@backstage/*` package versions." },
      { id: 'C', text: "Publish every plugin as its own npm package and install them into an otherwise empty app at deploy time." },
      { id: 'D', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers. Separate repositories let the two halves drift onto different `@backstage/*` versions, which the shared core packages do not tolerate; importing the backend into the React build would ship server credentials to the browser; and publishing every plugin separately turns a version bump into a release train.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo","Backstage Monorepo","Resilience And Operations"]
  },
  {
    id: "cncf-cba-256",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Composing Pages From Independent Teams: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Register each plugin's page component directly with the React Router `Routes` element, outside of `createApp` entirely, declaring each path as a string literal." },
      { id: 'B', text: "Import each plugin's `plugin.ts` and call `plugin.provide(...)` for every extension inside a `useEffect` hook." },
      { id: 'C', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'D', text: "List the plugins under a `frontend.plugins` key in `app-config.yaml` so the app mounts them at runtime." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`. Bypassing `createApp` with plain React Router loses the route refs that let plugins link to one another without knowing each other's paths; calling `provide` from an effect registers extensions after the first render, so the routes are missing on load; and the frontend has no runtime plugin loader reading `app-config.yaml`, since plugins are resolved at build time.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture","Frontend Architecture","Enterprise Portal"]
  },
  {
    id: "cncf-cba-257",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Composing Pages From Independent Teams: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Import each plugin's `plugin.ts` and call `plugin.provide(...)` for every extension inside a `useEffect` hook." },
      { id: 'B', text: "List the plugins under a `frontend.plugins` key in `app-config.yaml` so the app mounts them at runtime." },
      { id: 'C', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'D', text: "Register each plugin's page component directly with the React Router `Routes` element, outside of `createApp` entirely, declaring each path as a string literal." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`. Bypassing `createApp` with plain React Router loses the route refs that let plugins link to one another without knowing each other's paths; calling `provide` from an effect registers extensions after the first render, so the routes are missing on load; and the frontend has no runtime plugin loader reading `app-config.yaml`, since plugins are resolved at build time.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture","Frontend Architecture","High Scale Catalog"]
  },
  {
    id: "cncf-cba-258",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Composing Pages From Independent Teams: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'B', text: "List the plugins under a `frontend.plugins` key in `app-config.yaml` so the app mounts them at runtime." },
      { id: 'C', text: "Import each plugin's `plugin.ts` and call `plugin.provide(...)` for every extension inside a `useEffect` hook." },
      { id: 'D', text: "Register each plugin's page component directly with the React Router `Routes` element, outside of `createApp` entirely, declaring each path as a string literal." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`. Bypassing `createApp` with plain React Router loses the route refs that let plugins link to one another without knowing each other's paths; calling `provide` from an effect registers extensions after the first render, so the routes are missing on load; and the frontend has no runtime plugin loader reading `app-config.yaml`, since plugins are resolved at build time.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture","Frontend Architecture","Security And Governance"]
  },
  {
    id: "cncf-cba-259",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Composing Pages From Independent Teams: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "List the plugins under a `frontend.plugins` key in `app-config.yaml` so the app mounts them at runtime." },
      { id: 'B', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'C', text: "Import each plugin's `plugin.ts` and call `plugin.provide(...)` for every extension inside a `useEffect` hook." },
      { id: 'D', text: "Register each plugin's page component directly with the React Router `Routes` element, outside of `createApp` entirely, declaring each path as a string literal." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`. Bypassing `createApp` with plain React Router loses the route refs that let plugins link to one another without knowing each other's paths; calling `provide` from an effect registers extensions after the first render, so the routes are missing on load; and the frontend has no runtime plugin loader reading `app-config.yaml`, since plugins are resolved at build time.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture","Frontend Architecture","Developer Onboarding"]
  },
  {
    id: "cncf-cba-260",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Composing Pages From Independent Teams: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'B', text: "Import each plugin's `plugin.ts` and call `plugin.provide(...)` for every extension inside a `useEffect` hook." },
      { id: 'C', text: "Register each plugin's page component directly with the React Router `Routes` element, outside of `createApp` entirely, declaring each path as a string literal." },
      { id: 'D', text: "List the plugins under a `frontend.plugins` key in `app-config.yaml` so the app mounts them at runtime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`. Bypassing `createApp` with plain React Router loses the route refs that let plugins link to one another without knowing each other's paths; calling `provide` from an effect registers extensions after the first render, so the routes are missing on load; and the frontend has no runtime plugin loader reading `app-config.yaml`, since plugins are resolved at build time.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture","Frontend Architecture","Resilience And Operations"]
  },
  {
    id: "cncf-cba-261",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Wiring Backend Plugins and Their Dependencies: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Keep the legacy `index.ts` wiring, calling each plugin's `createRouter()` factory and mounting the result on an Express app." },
      { id: 'B', text: "Register the plugins by listing their package names in `app-config.yaml` so the backend resolves them during startup." },
      { id: 'C', text: "Run each backend plugin as its own Node.js process and route between them with an API gateway." },
      { id: 'D', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container. The legacy wiring works but every plugin's dependencies have to be constructed and threaded through by hand, which is exactly what the service container removes; the backend takes its plugin set from code rather than configuration; and splitting plugins across processes forfeits the shared database and discovery wiring for an operational burden the service container already handles in one process.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System","New Backend System","Enterprise Portal"]
  },
  {
    id: "cncf-cba-262",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Wiring Backend Plugins and Their Dependencies: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Register the plugins by listing their package names in `app-config.yaml` so the backend resolves them during startup." },
      { id: 'B', text: "Run each backend plugin as its own Node.js process and route between them with an API gateway." },
      { id: 'C', text: "Keep the legacy `index.ts` wiring, calling each plugin's `createRouter()` factory and mounting the result on an Express app." },
      { id: 'D', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container. The legacy wiring works but every plugin's dependencies have to be constructed and threaded through by hand, which is exactly what the service container removes; the backend takes its plugin set from code rather than configuration; and splitting plugins across processes forfeits the shared database and discovery wiring for an operational burden the service container already handles in one process.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System","New Backend System","High Scale Catalog"]
  },
  {
    id: "cncf-cba-263",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Wiring Backend Plugins and Their Dependencies: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." },
      { id: 'B', text: "Register the plugins by listing their package names in `app-config.yaml` so the backend resolves them during startup." },
      { id: 'C', text: "Run each backend plugin as its own Node.js process and route between them with an API gateway." },
      { id: 'D', text: "Keep the legacy `index.ts` wiring, calling each plugin's `createRouter()` factory and mounting the result on an Express app." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container. The legacy wiring works but every plugin's dependencies have to be constructed and threaded through by hand, which is exactly what the service container removes; the backend takes its plugin set from code rather than configuration; and splitting plugins across processes forfeits the shared database and discovery wiring for an operational burden the service container already handles in one process.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System","New Backend System","Security And Governance"]
  },
  {
    id: "cncf-cba-264",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Wiring Backend Plugins and Their Dependencies: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." },
      { id: 'B', text: "Run each backend plugin as its own Node.js process and route between them with an API gateway." },
      { id: 'C', text: "Keep the legacy `index.ts` wiring, calling each plugin's `createRouter()` factory and mounting the result on an Express app." },
      { id: 'D', text: "Register the plugins by listing their package names in `app-config.yaml` so the backend resolves them during startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container. The legacy wiring works but every plugin's dependencies have to be constructed and threaded through by hand, which is exactly what the service container removes; the backend takes its plugin set from code rather than configuration; and splitting plugins across processes forfeits the shared database and discovery wiring for an operational burden the service container already handles in one process.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System","New Backend System","Developer Onboarding"]
  },
  {
    id: "cncf-cba-265",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Wiring Backend Plugins and Their Dependencies: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." },
      { id: 'B', text: "Run each backend plugin as its own Node.js process and route between them with an API gateway." },
      { id: 'C', text: "Register the plugins by listing their package names in `app-config.yaml` so the backend resolves them during startup." },
      { id: 'D', text: "Keep the legacy `index.ts` wiring, calling each plugin's `createRouter()` factory and mounting the result on an Express app." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container. The legacy wiring works but every plugin's dependencies have to be constructed and threaded through by hand, which is exactly what the service container removes; the backend takes its plugin set from code rather than configuration; and splitting plugins across processes forfeits the shared database and discovery wiring for an operational burden the service container already handles in one process.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System","New Backend System","Resilience And Operations"]
  },
  {
    id: "cncf-cba-266",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Configuration That Differs Between Environments: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Maintain one complete `app-config.yaml` per environment and pass only that file to `--config`, repeating the shared keys in each of the environment files." },
      { id: 'B', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'C', text: "Read the credentials at runtime with `process.env` inside plugin code rather than through the configuration schema." },
      { id: 'D', text: "Keep the production values in the committed config and override them after startup by calling `configApi.set()`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime. A complete file per environment duplicates every shared key, so a change has to be made in each one and they drift; reading `process.env` directly skips the config schema, so the value is never validated and never appears in the frontend's filtered config; and the config is read-only once loaded, so there is no post-startup override to apply.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System","Config System","Enterprise Portal"]
  },
  {
    id: "cncf-cba-267",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Configuration That Differs Between Environments: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Keep the production values in the committed config and override them after startup by calling `configApi.set()`." },
      { id: 'B', text: "Maintain one complete `app-config.yaml` per environment and pass only that file to `--config`, repeating the shared keys in each of the environment files." },
      { id: 'C', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'D', text: "Read the credentials at runtime with `process.env` inside plugin code rather than through the configuration schema." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime. A complete file per environment duplicates every shared key, so a change has to be made in each one and they drift; reading `process.env` directly skips the config schema, so the value is never validated and never appears in the frontend's filtered config; and the config is read-only once loaded, so there is no post-startup override to apply.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System","Config System","High Scale Catalog"]
  },
  {
    id: "cncf-cba-268",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Configuration That Differs Between Environments: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Maintain one complete `app-config.yaml` per environment and pass only that file to `--config`, repeating the shared keys in each of the environment files." },
      { id: 'B', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'C', text: "Keep the production values in the committed config and override them after startup by calling `configApi.set()`." },
      { id: 'D', text: "Read the credentials at runtime with `process.env` inside plugin code rather than through the configuration schema." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime. A complete file per environment duplicates every shared key, so a change has to be made in each one and they drift; reading `process.env` directly skips the config schema, so the value is never validated and never appears in the frontend's filtered config; and the config is read-only once loaded, so there is no post-startup override to apply.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System","Config System","Security And Governance"]
  },
  {
    id: "cncf-cba-269",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Configuration That Differs Between Environments: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Maintain one complete `app-config.yaml` per environment and pass only that file to `--config`, repeating the shared keys in each of the environment files." },
      { id: 'B', text: "Read the credentials at runtime with `process.env` inside plugin code rather than through the configuration schema." },
      { id: 'C', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'D', text: "Keep the production values in the committed config and override them after startup by calling `configApi.set()`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime. A complete file per environment duplicates every shared key, so a change has to be made in each one and they drift; reading `process.env` directly skips the config schema, so the value is never validated and never appears in the frontend's filtered config; and the config is read-only once loaded, so there is no post-startup override to apply.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System","Config System","Developer Onboarding"]
  },
  {
    id: "cncf-cba-270",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Configuration That Differs Between Environments: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Maintain one complete `app-config.yaml` per environment and pass only that file to `--config`, repeating the shared keys in each of the environment files." },
      { id: 'B', text: "Read the credentials at runtime with `process.env` inside plugin code rather than through the configuration schema." },
      { id: 'C', text: "Keep the production values in the committed config and override them after startup by calling `configApi.set()`." },
      { id: 'D', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime. A complete file per environment duplicates every shared key, so a change has to be made in each one and they drift; reading `process.env` directly skips the config schema, so the value is never validated and never appears in the frontend's filtered config; and the config is read-only once loaded, so there is no post-startup override to apply.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System","Config System","Resilience And Operations"]
  },
  {
    id: "cncf-cba-271",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Establishing Who the Visitor Is: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Put an OAuth2 proxy in front of the portal and trust its forwarded identity header without a Backstage sign-in resolver, mapping that header onto a username in each plugin." },
      { id: 'B', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'C', text: "Enable the `guest` auth provider in production, mapping every visitor onto one shared Backstage user entity that owns nothing." },
      { id: 'D', text: "Configure the GitHub or Okta provider but resolve users by comparing email strings rather than by catalog `User` entity ref." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref. A proxy authenticates the request but issues no Backstage identity token, so the permission framework and ownership relations have no user to reason about; the guest provider collapses every visitor into one identity, which makes ownership and audit meaningless; and resolving on an email string skips the catalog, so group membership is unavailable to policies.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity","Authentication","Enterprise Portal"]
  },
  {
    id: "cncf-cba-272",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Establishing Who the Visitor Is: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Configure the GitHub or Okta provider but resolve users by comparing email strings rather than by catalog `User` entity ref." },
      { id: 'B', text: "Put an OAuth2 proxy in front of the portal and trust its forwarded identity header without a Backstage sign-in resolver, mapping that header onto a username in each plugin." },
      { id: 'C', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'D', text: "Enable the `guest` auth provider in production, mapping every visitor onto one shared Backstage user entity that owns nothing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref. A proxy authenticates the request but issues no Backstage identity token, so the permission framework and ownership relations have no user to reason about; the guest provider collapses every visitor into one identity, which makes ownership and audit meaningless; and resolving on an email string skips the catalog, so group membership is unavailable to policies.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity","Authentication","High Scale Catalog"]
  },
  {
    id: "cncf-cba-273",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Establishing Who the Visitor Is: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Configure the GitHub or Okta provider but resolve users by comparing email strings rather than by catalog `User` entity ref." },
      { id: 'B', text: "Put an OAuth2 proxy in front of the portal and trust its forwarded identity header without a Backstage sign-in resolver, mapping that header onto a username in each plugin." },
      { id: 'C', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'D', text: "Enable the `guest` auth provider in production, mapping every visitor onto one shared Backstage user entity that owns nothing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref. A proxy authenticates the request but issues no Backstage identity token, so the permission framework and ownership relations have no user to reason about; the guest provider collapses every visitor into one identity, which makes ownership and audit meaningless; and resolving on an email string skips the catalog, so group membership is unavailable to policies.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity","Authentication","Security And Governance"]
  },
  {
    id: "cncf-cba-274",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Establishing Who the Visitor Is: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Put an OAuth2 proxy in front of the portal and trust its forwarded identity header without a Backstage sign-in resolver, mapping that header onto a username in each plugin." },
      { id: 'B', text: "Enable the `guest` auth provider in production, mapping every visitor onto one shared Backstage user entity that owns nothing." },
      { id: 'C', text: "Configure the GitHub or Okta provider but resolve users by comparing email strings rather than by catalog `User` entity ref." },
      { id: 'D', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref. A proxy authenticates the request but issues no Backstage identity token, so the permission framework and ownership relations have no user to reason about; the guest provider collapses every visitor into one identity, which makes ownership and audit meaningless; and resolving on an email string skips the catalog, so group membership is unavailable to policies.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity","Authentication","Developer Onboarding"]
  },
  {
    id: "cncf-cba-275",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Establishing Who the Visitor Is: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Configure the GitHub or Okta provider but resolve users by comparing email strings rather than by catalog `User` entity ref." },
      { id: 'B', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'C', text: "Put an OAuth2 proxy in front of the portal and trust its forwarded identity header without a Backstage sign-in resolver, mapping that header onto a username in each plugin." },
      { id: 'D', text: "Enable the `guest` auth provider in production, mapping every visitor onto one shared Backstage user entity that owns nothing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref. A proxy authenticates the request but issues no Backstage identity token, so the permission framework and ownership relations have no user to reason about; the guest provider collapses every visitor into one identity, which makes ownership and audit meaningless; and resolving on an email string skips the catalog, so group membership is unavailable to policies.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity","Authentication","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_11;
