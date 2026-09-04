export const CNCF_CBA_QUESTIONS_13 = [
  {
    id: "cncf-cba-301",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Fetch API and Identity Token Forwarding: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Fetch API to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Authenticated HTTP transport via FetchApi and IdentityApi header decoration is under consideration.",
    options: [
      { id: 'A', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'B', text: "Use raw browser `window.fetch` without attaching authentication headers." },
      { id: 'C', text: "Send user passwords in plaintext URL query strings." },
      { id: 'D', text: "Disable CORS security checks and bypass backend authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API", "Fetch API", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-302",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Fetch API and Identity Token Forwarding: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Fetch API to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Authenticated HTTP transport via FetchApi and IdentityApi header decoration is under consideration.",
    options: [
      { id: 'A', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'B', text: "Use raw browser `window.fetch` without attaching authentication headers." },
      { id: 'C', text: "Send user passwords in plaintext URL query strings." },
      { id: 'D', text: "Disable CORS security checks and bypass backend authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API", "Fetch API", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-303",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Fetch API and Identity Token Forwarding: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Fetch API to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Authenticated HTTP transport via FetchApi and IdentityApi header decoration is under consideration.",
    options: [
      { id: 'A', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'B', text: "Use raw browser `window.fetch` without attaching authentication headers." },
      { id: 'C', text: "Send user passwords in plaintext URL query strings." },
      { id: 'D', text: "Disable CORS security checks and bypass backend authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API", "Fetch API", "Security And Governance"]
  },
  {
    id: "cncf-cba-304",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Fetch API and Identity Token Forwarding: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Fetch API to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Authenticated HTTP transport via FetchApi and IdentityApi header decoration is under consideration.",
    options: [
      { id: 'A', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'B', text: "Use raw browser `window.fetch` without attaching authentication headers." },
      { id: 'C', text: "Send user passwords in plaintext URL query strings." },
      { id: 'D', text: "Disable CORS security checks and bypass backend authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API", "Fetch API", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-305",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Fetch API and Identity Token Forwarding: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Fetch API to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Authenticated HTTP transport via FetchApi and IdentityApi header decoration is under consideration.",
    options: [
      { id: 'A', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'B', text: "Use raw browser `window.fetch` without attaching authentication headers." },
      { id: 'C', text: "Send user passwords in plaintext URL query strings." },
      { id: 'D', text: "Disable CORS security checks and bypass backend authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API", "Fetch API", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-306",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Error Handling and Alert Notifications: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Error & Alert APIs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Centralized user notification banner and error boundary tracking via ErrorApi and AlertApi is under consideration.",
    options: [
      { id: 'A', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'B', text: "Crash the entire browser window using unhandled JavaScript exceptions." },
      { id: 'C', text: "Display raw stack traces in modal alert popups that block user interaction indefinitely." },
      { id: 'D', text: "Silently suppress all application errors without logging or user notification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs", "Alert & Error APIs", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-307",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Error Handling and Alert Notifications: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Error & Alert APIs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Centralized user notification banner and error boundary tracking via ErrorApi and AlertApi is under consideration.",
    options: [
      { id: 'A', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'B', text: "Crash the entire browser window using unhandled JavaScript exceptions." },
      { id: 'C', text: "Display raw stack traces in modal alert popups that block user interaction indefinitely." },
      { id: 'D', text: "Silently suppress all application errors without logging or user notification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs", "Alert & Error APIs", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-308",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Error Handling and Alert Notifications: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Error & Alert APIs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Centralized user notification banner and error boundary tracking via ErrorApi and AlertApi is under consideration.",
    options: [
      { id: 'A', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'B', text: "Crash the entire browser window using unhandled JavaScript exceptions." },
      { id: 'C', text: "Display raw stack traces in modal alert popups that block user interaction indefinitely." },
      { id: 'D', text: "Silently suppress all application errors without logging or user notification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs", "Alert & Error APIs", "Security And Governance"]
  },
  {
    id: "cncf-cba-309",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Error Handling and Alert Notifications: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Error & Alert APIs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Centralized user notification banner and error boundary tracking via ErrorApi and AlertApi is under consideration.",
    options: [
      { id: 'A', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'B', text: "Crash the entire browser window using unhandled JavaScript exceptions." },
      { id: 'C', text: "Display raw stack traces in modal alert popups that block user interaction indefinitely." },
      { id: 'D', text: "Silently suppress all application errors without logging or user notification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs", "Alert & Error APIs", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-310",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Error Handling and Alert Notifications: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Error & Alert APIs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Centralized user notification banner and error boundary tracking via ErrorApi and AlertApi is under consideration.",
    options: [
      { id: 'A', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'B', text: "Crash the entire browser window using unhandled JavaScript exceptions." },
      { id: 'C', text: "Display raw stack traces in modal alert popups that block user interaction indefinitely." },
      { id: 'D', text: "Silently suppress all application errors without logging or user notification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs", "Alert & Error APIs", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-311",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Production Deployment Topology: Container Packaging: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Deployment Topology to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Multi-stage Docker build packaging frontend static assets and backend Node.js runtime is under consideration.",
    options: [
      { id: 'A', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'B', text: "Deploy the entire development repository including git history, test suites, and uncompiled source code into production containers." },
      { id: 'C', text: "Run Backstage directly inside a root developer workstation terminal connected via SSH." },
      { id: 'D', text: "Expose raw development servers running with hot-reloading enabled in production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology", "Docker Deployment", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-312",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Production Deployment Topology: Container Packaging: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Deployment Topology to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Multi-stage Docker build packaging frontend static assets and backend Node.js runtime is under consideration.",
    options: [
      { id: 'A', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'B', text: "Deploy the entire development repository including git history, test suites, and uncompiled source code into production containers." },
      { id: 'C', text: "Run Backstage directly inside a root developer workstation terminal connected via SSH." },
      { id: 'D', text: "Expose raw development servers running with hot-reloading enabled in production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology", "Docker Deployment", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-313",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Production Deployment Topology: Container Packaging: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Deployment Topology to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Multi-stage Docker build packaging frontend static assets and backend Node.js runtime is under consideration.",
    options: [
      { id: 'A', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'B', text: "Deploy the entire development repository including git history, test suites, and uncompiled source code into production containers." },
      { id: 'C', text: "Run Backstage directly inside a root developer workstation terminal connected via SSH." },
      { id: 'D', text: "Expose raw development servers running with hot-reloading enabled in production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology", "Docker Deployment", "Security And Governance"]
  },
  {
    id: "cncf-cba-314",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Production Deployment Topology: Container Packaging: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Deployment Topology to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Multi-stage Docker build packaging frontend static assets and backend Node.js runtime is under consideration.",
    options: [
      { id: 'A', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'B', text: "Deploy the entire development repository including git history, test suites, and uncompiled source code into production containers." },
      { id: 'C', text: "Run Backstage directly inside a root developer workstation terminal connected via SSH." },
      { id: 'D', text: "Expose raw development servers running with hot-reloading enabled in production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology", "Docker Deployment", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-315",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Production Deployment Topology: Container Packaging: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Deployment Topology to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Multi-stage Docker build packaging frontend static assets and backend Node.js runtime is under consideration.",
    options: [
      { id: 'A', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'B', text: "Deploy the entire development repository including git history, test suites, and uncompiled source code into production containers." },
      { id: 'C', text: "Run Backstage directly inside a root developer workstation terminal connected via SSH." },
      { id: 'D', text: "Expose raw development servers running with hot-reloading enabled in production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology", "Docker Deployment", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-316",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Observability, Health Checks, and Metrics: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Observability to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Liveness/readiness probes at /.backstage/health/v1 and Prometheus metrics export is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'B', text: "Ping the portal home page once daily over email." },
      { id: 'C', text: "Disable Kubernetes health probes to prevent restarting failed pods." },
      { id: 'D', text: "Rely exclusively on manual user bug reports to detect service outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability", "Observability", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-317",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Observability, Health Checks, and Metrics: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Observability to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Liveness/readiness probes at /.backstage/health/v1 and Prometheus metrics export is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'B', text: "Ping the portal home page once daily over email." },
      { id: 'C', text: "Disable Kubernetes health probes to prevent restarting failed pods." },
      { id: 'D', text: "Rely exclusively on manual user bug reports to detect service outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability", "Observability", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-318",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Observability, Health Checks, and Metrics: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Observability to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Liveness/readiness probes at /.backstage/health/v1 and Prometheus metrics export is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'B', text: "Ping the portal home page once daily over email." },
      { id: 'C', text: "Disable Kubernetes health probes to prevent restarting failed pods." },
      { id: 'D', text: "Rely exclusively on manual user bug reports to detect service outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability", "Observability", "Security And Governance"]
  },
  {
    id: "cncf-cba-319",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Observability, Health Checks, and Metrics: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Observability to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Liveness/readiness probes at /.backstage/health/v1 and Prometheus metrics export is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'B', text: "Ping the portal home page once daily over email." },
      { id: 'C', text: "Disable Kubernetes health probes to prevent restarting failed pods." },
      { id: 'D', text: "Rely exclusively on manual user bug reports to detect service outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability", "Observability", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-320",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Observability, Health Checks, and Metrics: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Observability to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Liveness/readiness probes at /.backstage/health/v1 and Prometheus metrics export is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'B', text: "Ping the portal home page once daily over email." },
      { id: 'C', text: "Disable Kubernetes health probes to prevent restarting failed pods." },
      { id: 'D', text: "Rely exclusively on manual user bug reports to detect service outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability", "Observability", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-321",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Search Architecture: Search Engine and Collator Pipeline: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Search Architecture to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Indexing documents via SearchEngine, Collators, and Decorators in @backstage/plugin-search-backend is under consideration.",
    options: [
      { id: 'A', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'B', text: "Perform sequential full-table scans across all database tables for every individual search keystroke." },
      { id: 'C', text: "Store search indices in plaintext memory without any indexing data structures." },
      { id: 'D', text: "Force users to manually browse hundreds of raw YAML files to find software documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture", "Search Architecture", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-322",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Search Architecture: Search Engine and Collator Pipeline: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Search Architecture to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Indexing documents via SearchEngine, Collators, and Decorators in @backstage/plugin-search-backend is under consideration.",
    options: [
      { id: 'A', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'B', text: "Perform sequential full-table scans across all database tables for every individual search keystroke." },
      { id: 'C', text: "Store search indices in plaintext memory without any indexing data structures." },
      { id: 'D', text: "Force users to manually browse hundreds of raw YAML files to find software documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture", "Search Architecture", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-323",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Search Architecture: Search Engine and Collator Pipeline: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Search Architecture to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Indexing documents via SearchEngine, Collators, and Decorators in @backstage/plugin-search-backend is under consideration.",
    options: [
      { id: 'A', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'B', text: "Perform sequential full-table scans across all database tables for every individual search keystroke." },
      { id: 'C', text: "Store search indices in plaintext memory without any indexing data structures." },
      { id: 'D', text: "Force users to manually browse hundreds of raw YAML files to find software documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture", "Search Architecture", "Security And Governance"]
  },
  {
    id: "cncf-cba-324",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Search Architecture: Search Engine and Collator Pipeline: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Search Architecture to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Indexing documents via SearchEngine, Collators, and Decorators in @backstage/plugin-search-backend is under consideration.",
    options: [
      { id: 'A', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'B', text: "Perform sequential full-table scans across all database tables for every individual search keystroke." },
      { id: 'C', text: "Store search indices in plaintext memory without any indexing data structures." },
      { id: 'D', text: "Force users to manually browse hundreds of raw YAML files to find software documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture", "Search Architecture", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-325",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Search Architecture: Search Engine and Collator Pipeline: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Search Architecture to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Indexing documents via SearchEngine, Collators, and Decorators in @backstage/plugin-search-backend is under consideration.",
    options: [
      { id: 'A', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'B', text: "Perform sequential full-table scans across all database tables for every individual search keystroke." },
      { id: 'C', text: "Store search indices in plaintext memory without any indexing data structures." },
      { id: 'D', text: "Force users to manually browse hundreds of raw YAML files to find software documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture", "Search Architecture", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_13;
