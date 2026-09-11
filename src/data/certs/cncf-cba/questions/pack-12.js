export const CNCF_CBA_QUESTIONS_12 = [
  {
    id: "cncf-cba-276",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Trust Between Backend Plugins: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Restrict inter-plugin traffic with a Kubernetes NetworkPolicy so that only backend pods can reach the plugin endpoints." },
      { id: 'B', text: "Forward the end user's own Backstage token on every inter-plugin request so that each plugin authorizes those requests as that user." },
      { id: 'C', text: "Share one static key across the backend plugins, injected through configuration as `${BACKEND_SECRET}`." },
      { id: 'D', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls. A NetworkPolicy proves which pod a call came from but not which plugin or on whose behalf, so a compromised plugin still reaches everything; forwarding the user token breaks scheduled and event-driven work, where there is no user in the request; and a shared static key authenticates the cluster as a whole rather than the individual caller, and rotating it means restarting every plugin at once.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication","Service Auth","Enterprise Portal"]
  },
  {
    id: "cncf-cba-277",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Trust Between Backend Plugins: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." },
      { id: 'B', text: "Forward the end user's own Backstage token on every inter-plugin request so that each plugin authorizes those requests as that user." },
      { id: 'C', text: "Restrict inter-plugin traffic with a Kubernetes NetworkPolicy so that only backend pods can reach the plugin endpoints." },
      { id: 'D', text: "Share one static key across the backend plugins, injected through configuration as `${BACKEND_SECRET}`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls. A NetworkPolicy proves which pod a call came from but not which plugin or on whose behalf, so a compromised plugin still reaches everything; forwarding the user token breaks scheduled and event-driven work, where there is no user in the request; and a shared static key authenticates the cluster as a whole rather than the individual caller, and rotating it means restarting every plugin at once.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication","Service Auth","High Scale Catalog"]
  },
  {
    id: "cncf-cba-278",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Trust Between Backend Plugins: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Restrict inter-plugin traffic with a Kubernetes NetworkPolicy so that only backend pods can reach the plugin endpoints." },
      { id: 'B', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." },
      { id: 'C', text: "Forward the end user's own Backstage token on every inter-plugin request so that each plugin authorizes those requests as that user." },
      { id: 'D', text: "Share one static key across the backend plugins, injected through configuration as `${BACKEND_SECRET}`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls. A NetworkPolicy proves which pod a call came from but not which plugin or on whose behalf, so a compromised plugin still reaches everything; forwarding the user token breaks scheduled and event-driven work, where there is no user in the request; and a shared static key authenticates the cluster as a whole rather than the individual caller, and rotating it means restarting every plugin at once.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication","Service Auth","Security And Governance"]
  },
  {
    id: "cncf-cba-279",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Trust Between Backend Plugins: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Restrict inter-plugin traffic with a Kubernetes NetworkPolicy so that only backend pods can reach the plugin endpoints." },
      { id: 'B', text: "Forward the end user's own Backstage token on every inter-plugin request so that each plugin authorizes those requests as that user." },
      { id: 'C', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." },
      { id: 'D', text: "Share one static key across the backend plugins, injected through configuration as `${BACKEND_SECRET}`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls. A NetworkPolicy proves which pod a call came from but not which plugin or on whose behalf, so a compromised plugin still reaches everything; forwarding the user token breaks scheduled and event-driven work, where there is no user in the request; and a shared static key authenticates the cluster as a whole rather than the individual caller, and rotating it means restarting every plugin at once.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication","Service Auth","Developer Onboarding"]
  },
  {
    id: "cncf-cba-280",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Trust Between Backend Plugins: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Share one static key across the backend plugins, injected through configuration as `${BACKEND_SECRET}`." },
      { id: 'B', text: "Restrict inter-plugin traffic with a Kubernetes NetworkPolicy so that only backend pods can reach the plugin endpoints." },
      { id: 'C', text: "Forward the end user's own Backstage token on every inter-plugin request so that each plugin authorizes those requests as that user." },
      { id: 'D', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls. A NetworkPolicy proves which pod a call came from but not which plugin or on whose behalf, so a compromised plugin still reaches everything; forwarding the user token breaks scheduled and event-driven work, where there is no user in the request; and a shared static key authenticates the cluster as a whole rather than the individual caller, and rotating it means restarting every plugin at once.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication","Service Auth","Resilience And Operations"]
  },
  {
    id: "cncf-cba-281",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Deciding What a User May Do: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'B', text: "Filter the entities returned by the catalog client inside each frontend plugin so users only see what their group owns, applying the same predicate on every page that lists entities." },
      { id: 'C', text: "Gate each backend route with Express middleware that checks group membership from the identity token before the handler runs." },
      { id: 'D', text: "Adopt the Backstage RBAC plugin's administrative UI and assign roles there without implementing a policy in code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules. Filtering in the frontend leaves the backend endpoints open to anyone who calls them directly; per-route middleware works but scatters the rules across plugins, so there is no single place to audit what is permitted; and the RBAC plugin is a genuine option that supplies its own policy implementation, but it administers roles rather than expressing conditional rules such as ownership of the specific entity being acted on.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework","Permissions","Enterprise Portal"]
  },
  {
    id: "cncf-cba-282",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Deciding What a User May Do: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Filter the entities returned by the catalog client inside each frontend plugin so users only see what their group owns, applying the same predicate on every page that lists entities." },
      { id: 'B', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'C', text: "Adopt the Backstage RBAC plugin's administrative UI and assign roles there without implementing a policy in code." },
      { id: 'D', text: "Gate each backend route with Express middleware that checks group membership from the identity token before the handler runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules. Filtering in the frontend leaves the backend endpoints open to anyone who calls them directly; per-route middleware works but scatters the rules across plugins, so there is no single place to audit what is permitted; and the RBAC plugin is a genuine option that supplies its own policy implementation, but it administers roles rather than expressing conditional rules such as ownership of the specific entity being acted on.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework","Permissions","High Scale Catalog"]
  },
  {
    id: "cncf-cba-283",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Deciding What a User May Do: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'B', text: "Gate each backend route with Express middleware that checks group membership from the identity token before the handler runs." },
      { id: 'C', text: "Filter the entities returned by the catalog client inside each frontend plugin so users only see what their group owns, applying the same predicate on every page that lists entities." },
      { id: 'D', text: "Adopt the Backstage RBAC plugin's administrative UI and assign roles there without implementing a policy in code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules. Filtering in the frontend leaves the backend endpoints open to anyone who calls them directly; per-route middleware works but scatters the rules across plugins, so there is no single place to audit what is permitted; and the RBAC plugin is a genuine option that supplies its own policy implementation, but it administers roles rather than expressing conditional rules such as ownership of the specific entity being acted on.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework","Permissions","Security And Governance"]
  },
  {
    id: "cncf-cba-284",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Deciding What a User May Do: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Adopt the Backstage RBAC plugin's administrative UI and assign roles there without implementing a policy in code." },
      { id: 'B', text: "Filter the entities returned by the catalog client inside each frontend plugin so users only see what their group owns, applying the same predicate on every page that lists entities." },
      { id: 'C', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'D', text: "Gate each backend route with Express middleware that checks group membership from the identity token before the handler runs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules. Filtering in the frontend leaves the backend endpoints open to anyone who calls them directly; per-route middleware works but scatters the rules across plugins, so there is no single place to audit what is permitted; and the RBAC plugin is a genuine option that supplies its own policy implementation, but it administers roles rather than expressing conditional rules such as ownership of the specific entity being acted on.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework","Permissions","Developer Onboarding"]
  },
  {
    id: "cncf-cba-285",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Deciding What a User May Do: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Adopt the Backstage RBAC plugin's administrative UI and assign roles there without implementing a policy in code." },
      { id: 'B', text: "Gate each backend route with Express middleware that checks group membership from the identity token before the handler runs." },
      { id: 'C', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'D', text: "Filter the entities returned by the catalog client inside each frontend plugin so users only see what their group owns, applying the same predicate on every page that lists entities." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules. Filtering in the frontend leaves the backend endpoints open to anyone who calls them directly; per-route middleware works but scatters the rules across plugins, so there is no single place to audit what is permitted; and the RBAC plugin is a genuine option that supplies its own policy implementation, but it administers roles rather than expressing conditional rules such as ownership of the specific entity being acted on.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework","Permissions","Resilience And Operations"]
  },
  {
    id: "cncf-cba-286",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Choosing Storage for a Scaled Deployment: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Run SQLite through the `better-sqlite3` driver with the database file kept on a persistent volume mounted into the pod." },
      { id: 'B', text: "Point the catalog at a managed MySQL instance and let Knex build the schema on first boot." },
      { id: 'C', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'D', text: "Keep PostgreSQL but disable the Knex migrations and apply each schema change manually with SQL at release time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence. A persisted SQLite file survives restarts but serialises writes and cannot be shared, so the backend cannot be scaled past one replica; MySQL is not among the databases the Backstage plugins' migrations support, so the schema will not build; and applying migrations by hand means the schema version and the deployed code can disagree, which is the failure Knex migrations exist to prevent.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture","Database Layer","Enterprise Portal"]
  },
  {
    id: "cncf-cba-287",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Choosing Storage for a Scaled Deployment: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Run SQLite through the `better-sqlite3` driver with the database file kept on a persistent volume mounted into the pod." },
      { id: 'B', text: "Point the catalog at a managed MySQL instance and let Knex build the schema on first boot." },
      { id: 'C', text: "Keep PostgreSQL but disable the Knex migrations and apply each schema change manually with SQL at release time." },
      { id: 'D', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence. A persisted SQLite file survives restarts but serialises writes and cannot be shared, so the backend cannot be scaled past one replica; MySQL is not among the databases the Backstage plugins' migrations support, so the schema will not build; and applying migrations by hand means the schema version and the deployed code can disagree, which is the failure Knex migrations exist to prevent.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture","Database Layer","High Scale Catalog"]
  },
  {
    id: "cncf-cba-288",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Choosing Storage for a Scaled Deployment: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Point the catalog at a managed MySQL instance and let Knex build the schema on first boot." },
      { id: 'B', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'C', text: "Keep PostgreSQL but disable the Knex migrations and apply each schema change manually with SQL at release time." },
      { id: 'D', text: "Run SQLite through the `better-sqlite3` driver with the database file kept on a persistent volume mounted into the pod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence. A persisted SQLite file survives restarts but serialises writes and cannot be shared, so the backend cannot be scaled past one replica; MySQL is not among the databases the Backstage plugins' migrations support, so the schema will not build; and applying migrations by hand means the schema version and the deployed code can disagree, which is the failure Knex migrations exist to prevent.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture","Database Layer","Security And Governance"]
  },
  {
    id: "cncf-cba-289",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Choosing Storage for a Scaled Deployment: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Point the catalog at a managed MySQL instance and let Knex build the schema on first boot." },
      { id: 'B', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'C', text: "Keep PostgreSQL but disable the Knex migrations and apply each schema change manually with SQL at release time." },
      { id: 'D', text: "Run SQLite through the `better-sqlite3` driver with the database file kept on a persistent volume mounted into the pod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence. A persisted SQLite file survives restarts but serialises writes and cannot be shared, so the backend cannot be scaled past one replica; MySQL is not among the databases the Backstage plugins' migrations support, so the schema will not build; and applying migrations by hand means the schema version and the deployed code can disagree, which is the failure Knex migrations exist to prevent.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture","Database Layer","Developer Onboarding"]
  },
  {
    id: "cncf-cba-290",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Choosing Storage for a Scaled Deployment: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Point the catalog at a managed MySQL instance and let Knex build the schema on first boot." },
      { id: 'B', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'C', text: "Keep PostgreSQL but disable the Knex migrations and apply each schema change manually with SQL at release time." },
      { id: 'D', text: "Run SQLite through the `better-sqlite3` driver with the database file kept on a persistent volume mounted into the pod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence. A persisted SQLite file survives restarts but serialises writes and cannot be shared, so the backend cannot be scaled past one replica; MySQL is not among the databases the Backstage plugins' migrations support, so the schema will not build; and applying migrations by hand means the schema version and the deployed code can disagree, which is the failure Knex migrations exist to prevent.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture","Database Layer","Resilience And Operations"]
  },
  {
    id: "cncf-cba-291",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Delivering Incoming Webhooks to Many Consumers: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Give each interested plugin its own webhook endpoint registered with the Git provider, processing each payload inline as it arrives." },
      { id: 'B', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'C', text: "Publish the payloads onto an external broker such as Kafka and have each plugin consume from a topic there." },
      { id: 'D', text: "Persist incoming payloads in a Backstage database table and have each plugin poll that table on a scheduled task." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously. One webhook per plugin means the Git provider has to be reconfigured whenever a plugin is added, and each endpoint reimplements signature verification; an external broker delivers the same decoupling at the cost of running and securing another system for traffic this size; and a polled table trades the push for latency and a cleanup problem.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System","Events System","Enterprise Portal"]
  },
  {
    id: "cncf-cba-292",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Delivering Incoming Webhooks to Many Consumers: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Persist incoming payloads in a Backstage database table and have each plugin poll that table on a scheduled task." },
      { id: 'B', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'C', text: "Give each interested plugin its own webhook endpoint registered with the Git provider, processing each payload inline as it arrives." },
      { id: 'D', text: "Publish the payloads onto an external broker such as Kafka and have each plugin consume from a topic there." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously. One webhook per plugin means the Git provider has to be reconfigured whenever a plugin is added, and each endpoint reimplements signature verification; an external broker delivers the same decoupling at the cost of running and securing another system for traffic this size; and a polled table trades the push for latency and a cleanup problem.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System","Events System","High Scale Catalog"]
  },
  {
    id: "cncf-cba-293",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Delivering Incoming Webhooks to Many Consumers: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Publish the payloads onto an external broker such as Kafka and have each plugin consume from a topic there." },
      { id: 'B', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'C', text: "Persist incoming payloads in a Backstage database table and have each plugin poll that table on a scheduled task." },
      { id: 'D', text: "Give each interested plugin its own webhook endpoint registered with the Git provider, processing each payload inline as it arrives." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously. One webhook per plugin means the Git provider has to be reconfigured whenever a plugin is added, and each endpoint reimplements signature verification; an external broker delivers the same decoupling at the cost of running and securing another system for traffic this size; and a polled table trades the push for latency and a cleanup problem.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System","Events System","Security And Governance"]
  },
  {
    id: "cncf-cba-294",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Delivering Incoming Webhooks to Many Consumers: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'B', text: "Give each interested plugin its own webhook endpoint registered with the Git provider, processing each payload inline as it arrives." },
      { id: 'C', text: "Persist incoming payloads in a Backstage database table and have each plugin poll that table on a scheduled task." },
      { id: 'D', text: "Publish the payloads onto an external broker such as Kafka and have each plugin consume from a topic there." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously. One webhook per plugin means the Git provider has to be reconfigured whenever a plugin is added, and each endpoint reimplements signature verification; an external broker delivers the same decoupling at the cost of running and securing another system for traffic this size; and a polled table trades the push for latency and a cleanup problem.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System","Events System","Developer Onboarding"]
  },
  {
    id: "cncf-cba-295",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Delivering Incoming Webhooks to Many Consumers: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Give each interested plugin its own webhook endpoint registered with the Git provider, processing each payload inline as it arrives." },
      { id: 'B', text: "Persist incoming payloads in a Backstage database table and have each plugin poll that table on a scheduled task." },
      { id: 'C', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'D', text: "Publish the payloads onto an external broker such as Kafka and have each plugin consume from a topic there." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously. One webhook per plugin means the Git provider has to be reconfigured whenever a plugin is added, and each endpoint reimplements signature verification; an external broker delivers the same decoupling at the cost of running and securing another system for traffic this size; and a polled table trades the push for latency and a cleanup problem.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System","Events System","Resilience And Operations"]
  },
  {
    id: "cncf-cba-296",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Finding Backend Endpoints at Runtime: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Read `backend.baseUrl` from the config API in the frontend and append the plugin id to it for the endpoints each of the plugins calls." },
      { id: 'B', text: "Address the backends by their in-cluster DNS names, such as `http://plugin-catalog.backstage.svc.cluster.local`." },
      { id: 'C', text: "Configure an ingress that rewrites the `/api/` plugin path prefix and use that relative path directly in the client, keeping the rules beside the deployment manifests." },
      { id: 'D', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments. Composing the URL from `backend.baseUrl` hardcodes the assumption that every plugin lives behind one host, which breaks the moment a plugin is split out; cluster DNS names are not resolvable from the user's browser at all; and a rewriting ingress works until the routing changes, at which point every plugin has to be updated rather than the discovery configuration.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API","Discovery API","Enterprise Portal"]
  },
  {
    id: "cncf-cba-297",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Finding Backend Endpoints at Runtime: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Address the backends by their in-cluster DNS names, such as `http://plugin-catalog.backstage.svc.cluster.local`." },
      { id: 'B', text: "Read `backend.baseUrl` from the config API in the frontend and append the plugin id to it for the endpoints each of the plugins calls." },
      { id: 'C', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." },
      { id: 'D', text: "Configure an ingress that rewrites the `/api/` plugin path prefix and use that relative path directly in the client, keeping the rules beside the deployment manifests." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments. Composing the URL from `backend.baseUrl` hardcodes the assumption that every plugin lives behind one host, which breaks the moment a plugin is split out; cluster DNS names are not resolvable from the user's browser at all; and a rewriting ingress works until the routing changes, at which point every plugin has to be updated rather than the discovery configuration.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API","Discovery API","High Scale Catalog"]
  },
  {
    id: "cncf-cba-298",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Finding Backend Endpoints at Runtime: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Configure an ingress that rewrites the `/api/` plugin path prefix and use that relative path directly in the client, keeping the rules beside the deployment manifests." },
      { id: 'B', text: "Read `backend.baseUrl` from the config API in the frontend and append the plugin id to it for the endpoints each of the plugins calls." },
      { id: 'C', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." },
      { id: 'D', text: "Address the backends by their in-cluster DNS names, such as `http://plugin-catalog.backstage.svc.cluster.local`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments. Composing the URL from `backend.baseUrl` hardcodes the assumption that every plugin lives behind one host, which breaks the moment a plugin is split out; cluster DNS names are not resolvable from the user's browser at all; and a rewriting ingress works until the routing changes, at which point every plugin has to be updated rather than the discovery configuration.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API","Discovery API","Security And Governance"]
  },
  {
    id: "cncf-cba-299",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Finding Backend Endpoints at Runtime: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Address the backends by their in-cluster DNS names, such as `http://plugin-catalog.backstage.svc.cluster.local`." },
      { id: 'B', text: "Read `backend.baseUrl` from the config API in the frontend and append the plugin id to it for the endpoints each of the plugins calls." },
      { id: 'C', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." },
      { id: 'D', text: "Configure an ingress that rewrites the `/api/` plugin path prefix and use that relative path directly in the client, keeping the rules beside the deployment manifests." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments. Composing the URL from `backend.baseUrl` hardcodes the assumption that every plugin lives behind one host, which breaks the moment a plugin is split out; cluster DNS names are not resolvable from the user's browser at all; and a rewriting ingress works until the routing changes, at which point every plugin has to be updated rather than the discovery configuration.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API","Discovery API","Developer Onboarding"]
  },
  {
    id: "cncf-cba-300",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Finding Backend Endpoints at Runtime: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Address the backends by their in-cluster DNS names, such as `http://plugin-catalog.backstage.svc.cluster.local`." },
      { id: 'B', text: "Configure an ingress that rewrites the `/api/` plugin path prefix and use that relative path directly in the client, keeping the rules beside the deployment manifests." },
      { id: 'C', text: "Read `backend.baseUrl` from the config API in the frontend and append the plugin id to it for the endpoints each of the plugins calls." },
      { id: 'D', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments. Composing the URL from `backend.baseUrl` hardcodes the assumption that every plugin lives behind one host, which breaks the moment a plugin is split out; cluster DNS names are not resolvable from the user's browser at all; and a rewriting ingress works until the routing changes, at which point every plugin has to be updated rather than the discovery configuration.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API","Discovery API","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_12;
