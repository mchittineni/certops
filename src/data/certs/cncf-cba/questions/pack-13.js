export const CNCF_CBA_QUESTIONS_13 = [
  {
    id: "cncf-cba-301",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Carrying the User's Identity to the Backend: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Call `identityApi.getCredentials()` and attach the returned token to a plain `fetch` call in every plugin." },
      { id: 'B', text: "Send the request through the backend `proxy` plugin so that the backend attaches credentials on the caller's behalf, with one proxy entry per upstream service." },
      { id: 'C', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'D', text: "Rely on the browser attaching the Backstage session cookie automatically to same-origin requests, with no header set by the client." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding. Fetching credentials by hand works but repeats the token handling in every plugin and will attach the header to third-party hosts unless each call site is careful; the proxy plugin exists for calling external services with shared credentials, not for authenticating the user to Backstage's own backends; and Backstage authenticates with a bearer token rather than a cookie, so nothing is attached automatically.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API","Fetch API","Enterprise Portal"]
  },
  {
    id: "cncf-cba-302",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Carrying the User's Identity to the Backend: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Rely on the browser attaching the Backstage session cookie automatically to same-origin requests, with no header set by the client." },
      { id: 'B', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'C', text: "Send the request through the backend `proxy` plugin so that the backend attaches credentials on the caller's behalf, with one proxy entry per upstream service." },
      { id: 'D', text: "Call `identityApi.getCredentials()` and attach the returned token to a plain `fetch` call in every plugin." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding. Fetching credentials by hand works but repeats the token handling in every plugin and will attach the header to third-party hosts unless each call site is careful; the proxy plugin exists for calling external services with shared credentials, not for authenticating the user to Backstage's own backends; and Backstage authenticates with a bearer token rather than a cookie, so nothing is attached automatically.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API","Fetch API","High Scale Catalog"]
  },
  {
    id: "cncf-cba-303",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Carrying the User's Identity to the Backend: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Rely on the browser attaching the Backstage session cookie automatically to same-origin requests, with no header set by the client." },
      { id: 'B', text: "Send the request through the backend `proxy` plugin so that the backend attaches credentials on the caller's behalf, with one proxy entry per upstream service." },
      { id: 'C', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'D', text: "Call `identityApi.getCredentials()` and attach the returned token to a plain `fetch` call in every plugin." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding. Fetching credentials by hand works but repeats the token handling in every plugin and will attach the header to third-party hosts unless each call site is careful; the proxy plugin exists for calling external services with shared credentials, not for authenticating the user to Backstage's own backends; and Backstage authenticates with a bearer token rather than a cookie, so nothing is attached automatically.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API","Fetch API","Security And Governance"]
  },
  {
    id: "cncf-cba-304",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Carrying the User's Identity to the Backend: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Rely on the browser attaching the Backstage session cookie automatically to same-origin requests, with no header set by the client." },
      { id: 'B', text: "Call `identityApi.getCredentials()` and attach the returned token to a plain `fetch` call in every plugin." },
      { id: 'C', text: "Send the request through the backend `proxy` plugin so that the backend attaches credentials on the caller's behalf, with one proxy entry per upstream service." },
      { id: 'D', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding. Fetching credentials by hand works but repeats the token handling in every plugin and will attach the header to third-party hosts unless each call site is careful; the proxy plugin exists for calling external services with shared credentials, not for authenticating the user to Backstage's own backends; and Backstage authenticates with a bearer token rather than a cookie, so nothing is attached automatically.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API","Fetch API","Developer Onboarding"]
  },
  {
    id: "cncf-cba-305",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Carrying the User's Identity to the Backend: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to ensure all REST API requests initiated by frontend plugins carry the current developer's signed session token to the backend.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Call `identityApi.getCredentials()` and attach the returned token to a plain `fetch` call in every plugin." },
      { id: 'B', text: "Rely on the browser attaching the Backstage session cookie automatically to same-origin requests, with no header set by the client." },
      { id: 'C', text: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header." },
      { id: 'D', text: "Send the request through the backend `proxy` plugin so that the backend attaches credentials on the caller's behalf, with one proxy entry per upstream service." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the Backstage `fetchApi` (`fetchApi.fetch(...)`), which automatically injects the active user's `Authorization: Bearer &lt;token&gt;` header. The Backstage `FetchApi` wraps the standard Fetch API to automatically inject authorization headers containing Backstage identity tokens on requests directed to Backstage backend plugins, guaranteeing authenticated request forwarding. Fetching credentials by hand works but repeats the token handling in every plugin and will attach the header to third-party hosts unless each call site is careful; the proxy plugin exists for calling external services with shared credentials, not for authenticating the user to Backstage's own backends; and Backstage authenticates with a bearer token rather than a cookie, so nothing is attached automatically.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.fetchapi",
    tags: ["Fetch API","Fetch API","Resilience And Operations"]
  },
  {
    id: "cncf-cba-306",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Telling the User Something Went Wrong: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Render a local Material-UI `Snackbar` inside each plugin component so it can show its own error messages, positioned to suit that plugin's layout." },
      { id: 'B', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'C', text: "Rethrow the error so the nearest `ErrorBoundary` catches it and replaces the page with an error panel." },
      { id: 'D', text: "Log the exception with `console.error` and let the browser observability agent collect it from there." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring. A per-plugin Snackbar gives each plugin its own placement and styling, which is the inconsistency the shared utility APIs remove; an error boundary is the right response to a render that cannot continue but is far too blunt for a single failed request; and a console log reaches monitoring without telling the user anything happened.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs","Alert & Error APIs","Enterprise Portal"]
  },
  {
    id: "cncf-cba-307",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Telling the User Something Went Wrong: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Log the exception with `console.error` and let the browser observability agent collect it from there." },
      { id: 'B', text: "Rethrow the error so the nearest `ErrorBoundary` catches it and replaces the page with an error panel." },
      { id: 'C', text: "Render a local Material-UI `Snackbar` inside each plugin component so it can show its own error messages, positioned to suit that plugin's layout." },
      { id: 'D', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring. A per-plugin Snackbar gives each plugin its own placement and styling, which is the inconsistency the shared utility APIs remove; an error boundary is the right response to a render that cannot continue but is far too blunt for a single failed request; and a console log reaches monitoring without telling the user anything happened.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs","Alert & Error APIs","High Scale Catalog"]
  },
  {
    id: "cncf-cba-308",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Telling the User Something Went Wrong: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Render a local Material-UI `Snackbar` inside each plugin component so it can show its own error messages, positioned to suit that plugin's layout." },
      { id: 'B', text: "Log the exception with `console.error` and let the browser observability agent collect it from there." },
      { id: 'C', text: "Rethrow the error so the nearest `ErrorBoundary` catches it and replaces the page with an error panel." },
      { id: 'D', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring. A per-plugin Snackbar gives each plugin its own placement and styling, which is the inconsistency the shared utility APIs remove; an error boundary is the right response to a render that cannot continue but is far too blunt for a single failed request; and a console log reaches monitoring without telling the user anything happened.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs","Alert & Error APIs","Security And Governance"]
  },
  {
    id: "cncf-cba-309",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Telling the User Something Went Wrong: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Log the exception with `console.error` and let the browser observability agent collect it from there." },
      { id: 'B', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'C', text: "Render a local Material-UI `Snackbar` inside each plugin component so it can show its own error messages, positioned to suit that plugin's layout." },
      { id: 'D', text: "Rethrow the error so the nearest `ErrorBoundary` catches it and replaces the page with an error panel." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring. A per-plugin Snackbar gives each plugin its own placement and styling, which is the inconsistency the shared utility APIs remove; an error boundary is the right response to a render that cannot continue but is far too blunt for a single failed request; and a console log reaches monitoring without telling the user anything happened.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs","Alert & Error APIs","Developer Onboarding"]
  },
  {
    id: "cncf-cba-310",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Telling the User Something Went Wrong: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to inform portal users of network failures or background task errors through consistent, non-intrusive UI toast notifications.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Rethrow the error so the nearest `ErrorBoundary` catches it and replaces the page with an error panel." },
      { id: 'B', text: "Log the exception with `console.error` and let the browser observability agent collect it from there." },
      { id: 'C', text: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`." },
      { id: 'D', text: "Render a local Material-UI `Snackbar` inside each plugin component so it can show its own error messages, positioned to suit that plugin's layout." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Trigger user alerts using `alertApi.post({ message, severity: 'error' })` and report exceptions via `errorApi.post(error)`. Backstage provides standard utility APIs including `AlertApi` and `ErrorApi`. Plugins post notification messages with severity levels (`info`, `warning`, `error`) to display uniform toast notifications, while exceptions are forwarded to centralized monitoring. A per-plugin Snackbar gives each plugin its own placement and styling, which is the inconsistency the shared utility APIs remove; an error boundary is the right response to a render that cannot continue but is far too blunt for a single failed request; and a console log reaches monitoring without telling the user anything happened.",
    referenceUrl: "https://backstage.io/docs/reference/core-plugin-api.alertapi",
    tags: ["Error & Alert APIs","Alert & Error APIs","Resilience And Operations"]
  },
  {
    id: "cncf-cba-311",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Packaging the Portal for Production: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Build a single-stage image from the whole repository and use `yarn start` as the container entrypoint." },
      { id: 'B', text: "Install the full dependency tree including `devDependencies` so that the same image can run the tests and production." },
      { id: 'C', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'D', text: "Serve the frontend from a CDN bucket and run only the backend in the container image." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets. `yarn start` runs the development servers, which rebuild on change and serve unminified assets; shipping `devDependencies` multiplies the image size and its vulnerability surface for tooling production never invokes; and serving the frontend from a CDN is a legitimate topology, but it splits the deployment in two and needs its own cache invalidation, which a single image avoids.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology","Docker Deployment","Enterprise Portal"]
  },
  {
    id: "cncf-cba-312",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Packaging the Portal for Production: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'B', text: "Serve the frontend from a CDN bucket and run only the backend in the container image." },
      { id: 'C', text: "Build a single-stage image from the whole repository and use `yarn start` as the container entrypoint." },
      { id: 'D', text: "Install the full dependency tree including `devDependencies` so that the same image can run the tests and production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets. `yarn start` runs the development servers, which rebuild on change and serve unminified assets; shipping `devDependencies` multiplies the image size and its vulnerability surface for tooling production never invokes; and serving the frontend from a CDN is a legitimate topology, but it splits the deployment in two and needs its own cache invalidation, which a single image avoids.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology","Docker Deployment","High Scale Catalog"]
  },
  {
    id: "cncf-cba-313",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Packaging the Portal for Production: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Install the full dependency tree including `devDependencies` so that the same image can run the tests and production." },
      { id: 'B', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'C', text: "Build a single-stage image from the whole repository and use `yarn start` as the container entrypoint." },
      { id: 'D', text: "Serve the frontend from a CDN bucket and run only the backend in the container image." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets. `yarn start` runs the development servers, which rebuild on change and serve unminified assets; shipping `devDependencies` multiplies the image size and its vulnerability surface for tooling production never invokes; and serving the frontend from a CDN is a legitimate topology, but it splits the deployment in two and needs its own cache invalidation, which a single image avoids.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology","Docker Deployment","Security And Governance"]
  },
  {
    id: "cncf-cba-314",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Packaging the Portal for Production: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Build a single-stage image from the whole repository and use `yarn start` as the container entrypoint." },
      { id: 'B', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'C', text: "Serve the frontend from a CDN bucket and run only the backend in the container image." },
      { id: 'D', text: "Install the full dependency tree including `devDependencies` so that the same image can run the tests and production." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets. `yarn start` runs the development servers, which rebuild on change and serve unminified assets; shipping `devDependencies` multiplies the image size and its vulnerability surface for tooling production never invokes; and serving the frontend from a CDN is a legitimate topology, but it splits the deployment in two and needs its own cache invalidation, which a single image avoids.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology","Docker Deployment","Developer Onboarding"]
  },
  {
    id: "cncf-cba-315",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Packaging the Portal for Production: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to package Backstage into a secure, minimal container image suitable for deployment onto enterprise Kubernetes clusters.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Serve the frontend from a CDN bucket and run only the backend in the container image." },
      { id: 'B', text: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime." },
      { id: 'C', text: "Build a single-stage image from the whole repository and use `yarn start` as the container entrypoint." },
      { id: 'D', text: "Install the full dependency tree including `devDependencies` so that the same image can run the tests and production." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Build a multi-stage Docker image that compiles frontend assets into static files served by the Node.js backend runtime. Official Backstage deployment recommendations employ multi-stage Dockerfiles: one stage builds and compiles TypeScript/React bundles, while a lean production runner stage contains only the Node.js production dependencies, compiled JavaScript, and static frontend assets. `yarn start` runs the development servers, which rebuild on change and serve unminified assets; shipping `devDependencies` multiplies the image size and its vulnerability surface for tooling production never invokes; and serving the frontend from a CDN is a legitimate topology, but it splits the deployment in two and needs its own cache invalidation, which a single image avoids.",
    referenceUrl: "https://backstage.io/docs/deployment/docker",
    tags: ["Deployment Topology","Docker Deployment","Resilience And Operations"]
  },
  {
    id: "cncf-cba-316",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Knowing When the Portal Is Unhealthy: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'B', text: "Point both probes at the frontend `/` route and scrape whatever the Node.js runtime exposes by default, alerting on the request duration." },
      { id: 'C', text: "Use a Kubernetes TCP socket probe against the backend port for health, collecting only the container metrics the kubelet reports." },
      { id: 'D', text: "Configure a liveness probe alone, aimed at the readiness path, so the pod restarts whenever it is not ready, and leave readiness unset so traffic arrives as soon as the container starts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools. The `/` route returns the static shell whether or not the backend can reach its database, so the probe passes during exactly the outage it should catch; a TCP probe confirms the port is bound and nothing more; and pointing liveness at the readiness path turns a transient dependency failure into a restart loop, which is why the two endpoints are separate.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability","Observability","Enterprise Portal"]
  },
  {
    id: "cncf-cba-317",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Knowing When the Portal Is Unhealthy: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'B', text: "Point both probes at the frontend `/` route and scrape whatever the Node.js runtime exposes by default, alerting on the request duration." },
      { id: 'C', text: "Configure a liveness probe alone, aimed at the readiness path, so the pod restarts whenever it is not ready, and leave readiness unset so traffic arrives as soon as the container starts." },
      { id: 'D', text: "Use a Kubernetes TCP socket probe against the backend port for health, collecting only the container metrics the kubelet reports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools. The `/` route returns the static shell whether or not the backend can reach its database, so the probe passes during exactly the outage it should catch; a TCP probe confirms the port is bound and nothing more; and pointing liveness at the readiness path turns a transient dependency failure into a restart loop, which is why the two endpoints are separate.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability","Observability","High Scale Catalog"]
  },
  {
    id: "cncf-cba-318",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Knowing When the Portal Is Unhealthy: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Configure a liveness probe alone, aimed at the readiness path, so the pod restarts whenever it is not ready, and leave readiness unset so traffic arrives as soon as the container starts." },
      { id: 'B', text: "Use a Kubernetes TCP socket probe against the backend port for health, collecting only the container metrics the kubelet reports." },
      { id: 'C', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." },
      { id: 'D', text: "Point both probes at the frontend `/` route and scrape whatever the Node.js runtime exposes by default, alerting on the request duration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools. The `/` route returns the static shell whether or not the backend can reach its database, so the probe passes during exactly the outage it should catch; a TCP probe confirms the port is bound and nothing more; and pointing liveness at the readiness path turns a transient dependency failure into a restart loop, which is why the two endpoints are separate.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability","Observability","Security And Governance"]
  },
  {
    id: "cncf-cba-319",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Knowing When the Portal Is Unhealthy: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Point both probes at the frontend `/` route and scrape whatever the Node.js runtime exposes by default, alerting on the request duration." },
      { id: 'B', text: "Use a Kubernetes TCP socket probe against the backend port for health, collecting only the container metrics the kubelet reports." },
      { id: 'C', text: "Configure a liveness probe alone, aimed at the readiness path, so the pod restarts whenever it is not ready, and leave readiness unset so traffic arrives as soon as the container starts." },
      { id: 'D', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools. The `/` route returns the static shell whether or not the backend can reach its database, so the probe passes during exactly the outage it should catch; a TCP probe confirms the port is bound and nothing more; and pointing liveness at the readiness path turns a transient dependency failure into a restart loop, which is why the two endpoints are separate.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability","Observability","Developer Onboarding"]
  },
  {
    id: "cncf-cba-320",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Knowing When the Portal Is Unhealthy: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to monitor Backstage pod availability, request latencies, and database connection pool health in Kubernetes.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Use a Kubernetes TCP socket probe against the backend port for health, collecting only the container metrics the kubelet reports." },
      { id: 'B', text: "Configure a liveness probe alone, aimed at the readiness path, so the pod restarts whenever it is not ready, and leave readiness unset so traffic arrives as soon as the container starts." },
      { id: 'C', text: "Point both probes at the frontend `/` route and scrape whatever the Node.js runtime exposes by default, alerting on the request duration." },
      { id: 'D', text: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Kubernetes liveness and readiness probes against `/.backstage/health/v1/readiness` and export Prometheus metrics using `@backstage/plugin-metrics-node`. Backstage backend services expose standard health check endpoints (`/.backstage/health/v1/liveness` and `/.backstage/health/v1/readiness`) for Kubernetes probes and support Prometheus metrics collection to monitor HTTP latencies, queue depths, and database pools. The `/` route returns the static shell whether or not the backend can reach its database, so the probe passes during exactly the outage it should catch; a TCP probe confirms the port is bound and nothing more; and pointing liveness at the readiness path turns a transient dependency failure into a restart loop, which is why the two endpoints are separate.",
    referenceUrl: "https://backstage.io/docs/deployment/observability",
    tags: ["Observability","Observability","Resilience And Operations"]
  },
  {
    id: "cncf-cba-321",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Making Portal Content Findable: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Keep the default in-memory Lunr engine and accept that the index is rebuilt from scratch on every backend restart, which takes seconds at the current corpus size." },
      { id: 'B', text: "Query the catalog API directly with a filter on the search term instead of maintaining an index at all." },
      { id: 'C', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'D', text: "Expose the Elasticsearch cluster to the Backstage frontend and have the browser query the index directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets. Lunr is the development default and holds the whole index in each replica's memory, so it neither scales with the corpus nor stays consistent across replicas; a catalog filter matches structured fields rather than document text, so TechDocs content is invisible to it; and querying Elasticsearch from the browser puts the index on the public internet with no permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture","Search Architecture","Enterprise Portal"]
  },
  {
    id: "cncf-cba-322",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Making Portal Content Findable: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'B', text: "Keep the default in-memory Lunr engine and accept that the index is rebuilt from scratch on every backend restart, which takes seconds at the current corpus size." },
      { id: 'C', text: "Expose the Elasticsearch cluster to the Backstage frontend and have the browser query the index directly." },
      { id: 'D', text: "Query the catalog API directly with a filter on the search term instead of maintaining an index at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets. Lunr is the development default and holds the whole index in each replica's memory, so it neither scales with the corpus nor stays consistent across replicas; a catalog filter matches structured fields rather than document text, so TechDocs content is invisible to it; and querying Elasticsearch from the browser puts the index on the public internet with no permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture","Search Architecture","High Scale Catalog"]
  },
  {
    id: "cncf-cba-323",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Making Portal Content Findable: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Expose the Elasticsearch cluster to the Backstage frontend and have the browser query the index directly." },
      { id: 'B', text: "Query the catalog API directly with a filter on the search term instead of maintaining an index at all." },
      { id: 'C', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'D', text: "Keep the default in-memory Lunr engine and accept that the index is rebuilt from scratch on every backend restart, which takes seconds at the current corpus size." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets. Lunr is the development default and holds the whole index in each replica's memory, so it neither scales with the corpus nor stays consistent across replicas; a catalog filter matches structured fields rather than document text, so TechDocs content is invisible to it; and querying Elasticsearch from the browser puts the index on the public internet with no permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture","Search Architecture","Security And Governance"]
  },
  {
    id: "cncf-cba-324",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Making Portal Content Findable: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Query the catalog API directly with a filter on the search term instead of maintaining an index at all." },
      { id: 'B', text: "Keep the default in-memory Lunr engine and accept that the index is rebuilt from scratch on every backend restart, which takes seconds at the current corpus size." },
      { id: 'C', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'D', text: "Expose the Elasticsearch cluster to the Backstage frontend and have the browser query the index directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets. Lunr is the development default and holds the whole index in each replica's memory, so it neither scales with the corpus nor stays consistent across replicas; a catalog filter matches structured fields rather than document text, so TechDocs content is invisible to it; and querying Elasticsearch from the browser puts the index on the public internet with no permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture","Search Architecture","Developer Onboarding"]
  },
  {
    id: "cncf-cba-325",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Making Portal Content Findable: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to provide fast, unified search across catalog components, TechDocs documentation, and external knowledge bases.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Expose the Elasticsearch cluster to the Backstage frontend and have the browser query the index directly." },
      { id: 'B', text: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres." },
      { id: 'C', text: "Keep the default in-memory Lunr engine and accept that the index is rebuilt from scratch on every backend restart, which takes seconds at the current corpus size." },
      { id: 'D', text: "Query the catalog API directly with a filter on the search term instead of maintaining an index at all." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `@backstage/plugin-search-backend` with document Collators feeding into a search engine backend like Elasticsearch or Postgres. Backstage Search combines document collators (which extract metadata from sources like Catalog or TechDocs), index decorators, and a search engine (Lunr for dev, Elasticsearch or Postgres for production) to provide indexed full-text search across portal assets. Lunr is the development default and holds the whole index in each replica's memory, so it neither scales with the corpus nor stays consistent across replicas; a catalog filter matches structured fields rather than document text, so TechDocs content is invisible to it; and querying Elasticsearch from the browser puts the index on the public internet with no permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/search/",
    tags: ["Search Architecture","Search Architecture","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_13;
