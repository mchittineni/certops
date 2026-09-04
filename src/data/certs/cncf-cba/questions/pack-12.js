export const CNCF_CBA_QUESTIONS_12 = [
  {
    id: "cncf-cba-276",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Service-to-Service Authentication and Backend Tokens: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Service Authentication to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Inter-plugin security using Backstage token manager and cryptographic service credentials is under consideration.",
    options: [
      { id: 'A', text: "Allow all internal network traffic to communicate without any authentication or authorization headers." },
      { id: 'B', text: "Embed static static long-lived database master credentials inside every HTTP GET query parameter." },
      { id: 'C', text: "Disable network firewalls between production and untrusted public networks." },
      { id: 'D', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication", "Service Auth", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-277",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Service-to-Service Authentication and Backend Tokens: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Service Authentication to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Inter-plugin security using Backstage token manager and cryptographic service credentials is under consideration.",
    options: [
      { id: 'A', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." },
      { id: 'B', text: "Embed static static long-lived database master credentials inside every HTTP GET query parameter." },
      { id: 'C', text: "Allow all internal network traffic to communicate without any authentication or authorization headers." },
      { id: 'D', text: "Disable network firewalls between production and untrusted public networks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication", "Service Auth", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-278",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Service-to-Service Authentication and Backend Tokens: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Service Authentication to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Inter-plugin security using Backstage token manager and cryptographic service credentials is under consideration.",
    options: [
      { id: 'A', text: "Allow all internal network traffic to communicate without any authentication or authorization headers." },
      { id: 'B', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." },
      { id: 'C', text: "Embed static static long-lived database master credentials inside every HTTP GET query parameter." },
      { id: 'D', text: "Disable network firewalls between production and untrusted public networks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication", "Service Auth", "Security And Governance"]
  },
  {
    id: "cncf-cba-279",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Service-to-Service Authentication and Backend Tokens: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Service Authentication to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Inter-plugin security using Backstage token manager and cryptographic service credentials is under consideration.",
    options: [
      { id: 'A', text: "Allow all internal network traffic to communicate without any authentication or authorization headers." },
      { id: 'B', text: "Embed static static long-lived database master credentials inside every HTTP GET query parameter." },
      { id: 'C', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." },
      { id: 'D', text: "Disable network firewalls between production and untrusted public networks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication", "Service Auth", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-280",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Service-to-Service Authentication and Backend Tokens: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Service Authentication to prevent unauthorized HTTP requests between internal Backstage backend plugins and external service endpoints.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Inter-plugin security using Backstage token manager and cryptographic service credentials is under consideration.",
    options: [
      { id: 'A', text: "Disable network firewalls between production and untrusted public networks." },
      { id: 'B', text: "Allow all internal network traffic to communicate without any authentication or authorization headers." },
      { id: 'C', text: "Embed static static long-lived database master credentials inside every HTTP GET query parameter." },
      { id: 'D', text: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the Backstage backend token manager to issue and verify signed JWT service tokens for inter-plugin RPC requests. The Backstage backend token manager issues signed JSON Web Tokens (JWTs) for service-to-service communication between backend plugins. Plugin routers validate these tokens to enforce mutual trust and prevent unauthorized intra-cluster calls.",
    referenceUrl: "https://backstage.io/docs/auth/service-to-service-auth",
    tags: ["Service Authentication", "Service Auth", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-281",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Permission Framework: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Permission Framework to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Fine-grained policy decision point using PermissionPolicy and authorize() checks is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'B', text: "Rely on client-side CSS `display: none` to hide sensitive production action buttons from unauthorized users." },
      { id: 'C', text: "Hardcode authorization logic into individual React button onClick event handlers." },
      { id: 'D', text: "Grant full administrative permissions to all authenticated users unconditionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework", "Permissions", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-282",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Permission Framework: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Permission Framework to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Fine-grained policy decision point using PermissionPolicy and authorize() checks is under consideration.",
    options: [
      { id: 'A', text: "Rely on client-side CSS `display: none` to hide sensitive production action buttons from unauthorized users." },
      { id: 'B', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'C', text: "Grant full administrative permissions to all authenticated users unconditionally." },
      { id: 'D', text: "Hardcode authorization logic into individual React button onClick event handlers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework", "Permissions", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-283",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Permission Framework: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Permission Framework to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Fine-grained policy decision point using PermissionPolicy and authorize() checks is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'B', text: "Hardcode authorization logic into individual React button onClick event handlers." },
      { id: 'C', text: "Rely on client-side CSS `display: none` to hide sensitive production action buttons from unauthorized users." },
      { id: 'D', text: "Grant full administrative permissions to all authenticated users unconditionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework", "Permissions", "Security And Governance"]
  },
  {
    id: "cncf-cba-284",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Permission Framework: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Permission Framework to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Fine-grained policy decision point using PermissionPolicy and authorize() checks is under consideration.",
    options: [
      { id: 'A', text: "Grant full administrative permissions to all authenticated users unconditionally." },
      { id: 'B', text: "Rely on client-side CSS `display: none` to hide sensitive production action buttons from unauthorized users." },
      { id: 'C', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'D', text: "Hardcode authorization logic into individual React button onClick event handlers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework", "Permissions", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-285",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Permission Framework: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Permission Framework to restrict access to sensitive catalog entities and scaffolder templates so only authorized team members can execute them.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Fine-grained policy decision point using PermissionPolicy and authorize() checks is under consideration.",
    options: [
      { id: 'A', text: "Grant full administrative permissions to all authenticated users unconditionally." },
      { id: 'B', text: "Hardcode authorization logic into individual React button onClick event handlers." },
      { id: 'C', text: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes." },
      { id: 'D', text: "Rely on client-side CSS `display: none` to hide sensitive production action buttons from unauthorized users." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `PermissionPolicy` in `@backstage/plugin-permission-backend` that evaluates incoming requests against entity ownership and role attributes. The Backstage Permission Framework provides a centralized Policy Decision Point (PDP). The `PermissionPolicy` receives authorization requests (`authorize()`) from plugins and returns `DEFINITIVE` (`ALLOW`/`DENY`) or `CONDITIONAL` decisions based on resource ownership rules.",
    referenceUrl: "https://backstage.io/docs/permissions/overview",
    tags: ["Permission Framework", "Permissions", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-286",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Database Persistence Layer: Knex.js and PostgreSQL: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Database Architecture to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Knex.js query builder with SQLite for local prototyping and PostgreSQL for enterprise production is under consideration.",
    options: [
      { id: 'A', text: "Save all relational database records into temporary local text files inside /tmp." },
      { id: 'B', text: "Store database rows in unindexed client browser local storage cookies." },
      { id: 'C', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'D', text: "Use ephemeral in-memory SQLite instances in production that lose all state upon container restart." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture", "Database Layer", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-287",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Database Persistence Layer: Knex.js and PostgreSQL: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Database Architecture to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Knex.js query builder with SQLite for local prototyping and PostgreSQL for enterprise production is under consideration.",
    options: [
      { id: 'A', text: "Save all relational database records into temporary local text files inside /tmp." },
      { id: 'B', text: "Store database rows in unindexed client browser local storage cookies." },
      { id: 'C', text: "Use ephemeral in-memory SQLite instances in production that lose all state upon container restart." },
      { id: 'D', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture", "Database Layer", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-288",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Database Persistence Layer: Knex.js and PostgreSQL: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Database Architecture to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Knex.js query builder with SQLite for local prototyping and PostgreSQL for enterprise production is under consideration.",
    options: [
      { id: 'A', text: "Store database rows in unindexed client browser local storage cookies." },
      { id: 'B', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'C', text: "Use ephemeral in-memory SQLite instances in production that lose all state upon container restart." },
      { id: 'D', text: "Save all relational database records into temporary local text files inside /tmp." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture", "Database Layer", "Security And Governance"]
  },
  {
    id: "cncf-cba-289",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Database Persistence Layer: Knex.js and PostgreSQL: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Database Architecture to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Knex.js query builder with SQLite for local prototyping and PostgreSQL for enterprise production is under consideration.",
    options: [
      { id: 'A', text: "Store database rows in unindexed client browser local storage cookies." },
      { id: 'B', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'C', text: "Use ephemeral in-memory SQLite instances in production that lose all state upon container restart." },
      { id: 'D', text: "Save all relational database records into temporary local text files inside /tmp." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture", "Database Layer", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-290",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Database Persistence Layer: Knex.js and PostgreSQL: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Database Architecture to persist software catalog entities, scaffolder task state, and user settings reliably in a high-availability production deployment.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Knex.js query builder with SQLite for local prototyping and PostgreSQL for enterprise production is under consideration.",
    options: [
      { id: 'A', text: "Store database rows in unindexed client browser local storage cookies." },
      { id: 'B', text: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations." },
      { id: 'C', text: "Use ephemeral in-memory SQLite instances in production that lose all state upon container restart." },
      { id: 'D', text: "Save all relational database records into temporary local text files inside /tmp." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a clustered PostgreSQL database backend in `app-config.production.yaml` managed through Knex.js migrations. Backstage uses Knex.js as an SQL abstraction layer. While SQLite is provided for rapid local development, production enterprise deployments require PostgreSQL to support clustering, concurrent catalog ingestion, and durable task state persistence.",
    referenceUrl: "https://backstage.io/docs/tutorials/quickstart-app-database",
    tags: ["Database Architecture", "Database Layer", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-291",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Event System and Event Broker: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Events System to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Asynchronous publish-subscribe messaging using EventsService and EventBroker is under consideration.",
    options: [
      { id: 'A', text: "Poll third-party Git APIs every 100 milliseconds with unauthenticated HTTP requests." },
      { id: 'B', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'C', text: "Execute synchronous blocking network calls that freeze the web server until long-running operations finish." },
      { id: 'D', text: "Write raw event payloads directly to disk without routing them to any listeners." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System", "Events System", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-292",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Event System and Event Broker: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Events System to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Asynchronous publish-subscribe messaging using EventsService and EventBroker is under consideration.",
    options: [
      { id: 'A', text: "Write raw event payloads directly to disk without routing them to any listeners." },
      { id: 'B', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'C', text: "Poll third-party Git APIs every 100 milliseconds with unauthenticated HTTP requests." },
      { id: 'D', text: "Execute synchronous blocking network calls that freeze the web server until long-running operations finish." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System", "Events System", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-293",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Event System and Event Broker: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Events System to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Asynchronous publish-subscribe messaging using EventsService and EventBroker is under consideration.",
    options: [
      { id: 'A', text: "Execute synchronous blocking network calls that freeze the web server until long-running operations finish." },
      { id: 'B', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'C', text: "Write raw event payloads directly to disk without routing them to any listeners." },
      { id: 'D', text: "Poll third-party Git APIs every 100 milliseconds with unauthenticated HTTP requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System", "Events System", "Security And Governance"]
  },
  {
    id: "cncf-cba-294",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Event System and Event Broker: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Events System to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Asynchronous publish-subscribe messaging using EventsService and EventBroker is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'B', text: "Poll third-party Git APIs every 100 milliseconds with unauthenticated HTTP requests." },
      { id: 'C', text: "Write raw event payloads directly to disk without routing them to any listeners." },
      { id: 'D', text: "Execute synchronous blocking network calls that freeze the web server until long-running operations finish." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System", "Events System", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-295",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Event System and Event Broker: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Events System to trigger automated catalog refreshes and workflow notifications whenever a webhook arrives from a GitHub or GitLab repository.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Asynchronous publish-subscribe messaging using EventsService and EventBroker is under consideration.",
    options: [
      { id: 'A', text: "Poll third-party Git APIs every 100 milliseconds with unauthenticated HTTP requests." },
      { id: 'B', text: "Write raw event payloads directly to disk without routing them to any listeners." },
      { id: 'C', text: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously." },
      { id: 'D', text: "Execute synchronous blocking network calls that freeze the web server until long-running operations finish." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Backstage `EventsService` and `EventBroker` to publish incoming webhook payloads to subscribing plugins asynchronously. The Backstage Events subsystem (`@backstage/plugin-events-node`) provides an `EventsService` and `EventBroker`. Ingress plugins (such as webhook receivers) publish CloudEvents onto topics, which subscribing plugins consume asynchronously.",
    referenceUrl: "https://backstage.io/docs/features/events/",
    tags: ["Events System", "Events System", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-296",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Discovery API and Service Endpoint Resolution: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Discovery API to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Resolving dynamic backend microservice URLs via DiscoveryApi is under consideration.",
    options: [
      { id: 'A', text: "Route all client traffic through unauthenticated public web proxies." },
      { id: 'B', text: "Require developers to recompile the frontend application whenever backend IP addresses change." },
      { id: 'C', text: "Hardcode static localhost URLs across all client-side JavaScript components." },
      { id: 'D', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API", "Discovery API", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-297",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Discovery API and Service Endpoint Resolution: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Discovery API to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Resolving dynamic backend microservice URLs via DiscoveryApi is under consideration.",
    options: [
      { id: 'A', text: "Require developers to recompile the frontend application whenever backend IP addresses change." },
      { id: 'B', text: "Route all client traffic through unauthenticated public web proxies." },
      { id: 'C', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." },
      { id: 'D', text: "Hardcode static localhost URLs across all client-side JavaScript components." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API", "Discovery API", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-298",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Discovery API and Service Endpoint Resolution: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Discovery API to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Resolving dynamic backend microservice URLs via DiscoveryApi is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static localhost URLs across all client-side JavaScript components." },
      { id: 'B', text: "Route all client traffic through unauthenticated public web proxies." },
      { id: 'C', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." },
      { id: 'D', text: "Require developers to recompile the frontend application whenever backend IP addresses change." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API", "Discovery API", "Security And Governance"]
  },
  {
    id: "cncf-cba-299",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Discovery API and Service Endpoint Resolution: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Discovery API to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Resolving dynamic backend microservice URLs via DiscoveryApi is under consideration.",
    options: [
      { id: 'A', text: "Require developers to recompile the frontend application whenever backend IP addresses change." },
      { id: 'B', text: "Route all client traffic through unauthenticated public web proxies." },
      { id: 'C', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." },
      { id: 'D', text: "Hardcode static localhost URLs across all client-side JavaScript components." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API", "Discovery API", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-300",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Discovery API and Service Endpoint Resolution: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Discovery API to enable frontend plugins to communicate with backend APIs without hardcoding hostnames, IP addresses, or ports.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Resolving dynamic backend microservice URLs via DiscoveryApi is under consideration.",
    options: [
      { id: 'A', text: "Require developers to recompile the frontend application whenever backend IP addresses change." },
      { id: 'B', text: "Hardcode static localhost URLs across all client-side JavaScript components." },
      { id: 'C', text: "Route all client traffic through unauthenticated public web proxies." },
      { id: 'D', text: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inject the `discoveryApi` utility into frontend plugins and call `await discoveryApi.getBaseUrl(pluginId)` to resolve endpoints dynamically. Backstage provides the `DiscoveryApi` (`@backstage/core-plugin-api`) on the frontend and `DiscoveryService` on the backend. Plugins use `discoveryApi.getBaseUrl('plugin-name')` to dynamically determine the correct URL for backend service endpoints across environments.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.discoveryapi",
    tags: ["Discovery API", "Discovery API", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_12;
