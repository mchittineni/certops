export const CNCF_CBA_QUESTIONS_20 = [
  {
    id: "cncf-cba-476",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Reaching Shared Services From a Component: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Import the configuration singleton from `@backstage/config` directly inside the component." },
      { id: 'B', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'C', text: "Pass the config and storage objects down as props from the root `App` component." },
      { id: 'D', text: "Read the values from the `window.__APP_CONFIG__` object that the backend injects into `index.html`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling. Importing the class gives you the type but not the app's configured instance, so the values are empty; prop drilling works and couples every intermediate component to APIs it does not use; and reading the injected global bypasses the API registry, so tests cannot substitute a different implementation and the storage API's cross-tab synchronisation is lost.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs","Utility APIs","Enterprise Portal"]
  },
  {
    id: "cncf-cba-477",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Reaching Shared Services From a Component: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Read the values from the `window.__APP_CONFIG__` object that the backend injects into `index.html`." },
      { id: 'C', text: "Import the configuration singleton from `@backstage/config` directly inside the component." },
      { id: 'D', text: "Pass the config and storage objects down as props from the root `App` component." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling. Importing the class gives you the type but not the app's configured instance, so the values are empty; prop drilling works and couples every intermediate component to APIs it does not use; and reading the injected global bypasses the API registry, so tests cannot substitute a different implementation and the storage API's cross-tab synchronisation is lost.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs","Utility APIs","High Scale Catalog"]
  },
  {
    id: "cncf-cba-478",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Reaching Shared Services From a Component: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Read the values from the `window.__APP_CONFIG__` object that the backend injects into `index.html`." },
      { id: 'B', text: "Pass the config and storage objects down as props from the root `App` component." },
      { id: 'C', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'D', text: "Import the configuration singleton from `@backstage/config` directly inside the component." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling. Importing the class gives you the type but not the app's configured instance, so the values are empty; prop drilling works and couples every intermediate component to APIs it does not use; and reading the injected global bypasses the API registry, so tests cannot substitute a different implementation and the storage API's cross-tab synchronisation is lost.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs","Utility APIs","Security And Governance"]
  },
  {
    id: "cncf-cba-479",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Reaching Shared Services From a Component: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Pass the config and storage objects down as props from the root `App` component." },
      { id: 'C', text: "Read the values from the `window.__APP_CONFIG__` object that the backend injects into `index.html`." },
      { id: 'D', text: "Import the configuration singleton from `@backstage/config` directly inside the component." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling. Importing the class gives you the type but not the app's configured instance, so the values are empty; prop drilling works and couples every intermediate component to APIs it does not use; and reading the injected global bypasses the API registry, so tests cannot substitute a different implementation and the storage API's cross-tab synchronisation is lost.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs","Utility APIs","Developer Onboarding"]
  },
  {
    id: "cncf-cba-480",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Reaching Shared Services From a Component: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Pass the config and storage objects down as props from the root `App` component." },
      { id: 'C', text: "Read the values from the `window.__APP_CONFIG__` object that the backend injects into `index.html`." },
      { id: 'D', text: "Import the configuration singleton from `@backstage/config` directly inside the component." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling. Importing the class gives you the type but not the app's configured instance, so the values are empty; prop drilling works and couples every intermediate component to APIs it does not use; and reading the injected global bypasses the API registry, so tests cannot substitute a different implementation and the storage API's cross-tab synchronisation is lost.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs","Utility APIs","Resilience And Operations"]
  },
  {
    id: "cncf-cba-481",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Applying Corporate Branding to the Portal: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'B', text: "Override the Material-UI styles globally with a CSS file imported into `App.tsx`." },
      { id: 'C', text: "Fork `@backstage/theme` and publish an internal package with the palette already changed." },
      { id: 'D', text: "Set the palette through an `app.theme` block in `app-config.yaml` so that it can be changed at runtime without rebuilding the frontend." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling. A global stylesheet fights specificity with the component styles and breaks whenever Material-UI changes its class names; forking the theme package works and buys a re-merge on every upgrade; and the app configuration has no theme palette block, since themes are supplied in code.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI","Theming & UI","Enterprise Portal"]
  },
  {
    id: "cncf-cba-482",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Applying Corporate Branding to the Portal: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'B', text: "Fork `@backstage/theme` and publish an internal package with the palette already changed." },
      { id: 'C', text: "Override the Material-UI styles globally with a CSS file imported into `App.tsx`." },
      { id: 'D', text: "Set the palette through an `app.theme` block in `app-config.yaml` so that it can be changed at runtime without rebuilding the frontend." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling. A global stylesheet fights specificity with the component styles and breaks whenever Material-UI changes its class names; forking the theme package works and buys a re-merge on every upgrade; and the app configuration has no theme palette block, since themes are supplied in code.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI","Theming & UI","High Scale Catalog"]
  },
  {
    id: "cncf-cba-483",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Applying Corporate Branding to the Portal: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Override the Material-UI styles globally with a CSS file imported into `App.tsx`." },
      { id: 'B', text: "Set the palette through an `app.theme` block in `app-config.yaml` so that it can be changed at runtime without rebuilding the frontend." },
      { id: 'C', text: "Fork `@backstage/theme` and publish an internal package with the palette already changed." },
      { id: 'D', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling. A global stylesheet fights specificity with the component styles and breaks whenever Material-UI changes its class names; forking the theme package works and buys a re-merge on every upgrade; and the app configuration has no theme palette block, since themes are supplied in code.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI","Theming & UI","Security And Governance"]
  },
  {
    id: "cncf-cba-484",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Applying Corporate Branding to the Portal: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Fork `@backstage/theme` and publish an internal package with the palette already changed." },
      { id: 'B', text: "Set the palette through an `app.theme` block in `app-config.yaml` so that it can be changed at runtime without rebuilding the frontend." },
      { id: 'C', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'D', text: "Override the Material-UI styles globally with a CSS file imported into `App.tsx`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling. A global stylesheet fights specificity with the component styles and breaks whenever Material-UI changes its class names; forking the theme package works and buys a re-merge on every upgrade; and the app configuration has no theme palette block, since themes are supplied in code.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI","Theming & UI","Developer Onboarding"]
  },
  {
    id: "cncf-cba-485",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Applying Corporate Branding to the Portal: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Override the Material-UI styles globally with a CSS file imported into `App.tsx`." },
      { id: 'B', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'C', text: "Fork `@backstage/theme` and publish an internal package with the palette already changed." },
      { id: 'D', text: "Set the palette through an `app.theme` block in `app-config.yaml` so that it can be changed at runtime without rebuilding the frontend." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling. A global stylesheet fights specificity with the component styles and breaks whenever Material-UI changes its class names; forking the theme package works and buys a re-merge on every upgrade; and the app configuration has no theme palette block, since themes are supplied in code.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI","Theming & UI","Resilience And Operations"]
  },
  {
    id: "cncf-cba-486",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Administering Roles Without a Redeploy: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'B', text: "Implement a custom `PermissionPolicy` in code that reads its role assignments from a configuration file, reloading that file whenever the backend restarts." },
      { id: 'C', text: "Map the identity provider's groups onto Backstage groups and rely on ownership-based permissions alone." },
      { id: 'D', text: "Leave the default allow-all policy in place and restrict who can reach the portal at the ingress layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers. A config-driven policy avoids recompiling for each role change but still needs a deployment to alter the file, and it gives administrators no interface; ownership-based permissions cover the common case and cannot express a role that spans entities nobody owns; and an ingress restriction decides who may enter the portal rather than what they may do once inside.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration","RBAC Administration","Enterprise Portal"]
  },
  {
    id: "cncf-cba-487",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Administering Roles Without a Redeploy: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Leave the default allow-all policy in place and restrict who can reach the portal at the ingress layer." },
      { id: 'B', text: "Implement a custom `PermissionPolicy` in code that reads its role assignments from a configuration file, reloading that file whenever the backend restarts." },
      { id: 'C', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'D', text: "Map the identity provider's groups onto Backstage groups and rely on ownership-based permissions alone." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers. A config-driven policy avoids recompiling for each role change but still needs a deployment to alter the file, and it gives administrators no interface; ownership-based permissions cover the common case and cannot express a role that spans entities nobody owns; and an ingress restriction decides who may enter the portal rather than what they may do once inside.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration","RBAC Administration","High Scale Catalog"]
  },
  {
    id: "cncf-cba-488",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Administering Roles Without a Redeploy: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Map the identity provider's groups onto Backstage groups and rely on ownership-based permissions alone." },
      { id: 'B', text: "Leave the default allow-all policy in place and restrict who can reach the portal at the ingress layer." },
      { id: 'C', text: "Implement a custom `PermissionPolicy` in code that reads its role assignments from a configuration file, reloading that file whenever the backend restarts." },
      { id: 'D', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers. A config-driven policy avoids recompiling for each role change but still needs a deployment to alter the file, and it gives administrators no interface; ownership-based permissions cover the common case and cannot express a role that spans entities nobody owns; and an ingress restriction decides who may enter the portal rather than what they may do once inside.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration","RBAC Administration","Security And Governance"]
  },
  {
    id: "cncf-cba-489",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Administering Roles Without a Redeploy: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Implement a custom `PermissionPolicy` in code that reads its role assignments from a configuration file, reloading that file whenever the backend restarts." },
      { id: 'B', text: "Map the identity provider's groups onto Backstage groups and rely on ownership-based permissions alone." },
      { id: 'C', text: "Leave the default allow-all policy in place and restrict who can reach the portal at the ingress layer." },
      { id: 'D', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers. A config-driven policy avoids recompiling for each role change but still needs a deployment to alter the file, and it gives administrators no interface; ownership-based permissions cover the common case and cannot express a role that spans entities nobody owns; and an ingress restriction decides who may enter the portal rather than what they may do once inside.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration","RBAC Administration","Developer Onboarding"]
  },
  {
    id: "cncf-cba-490",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Administering Roles Without a Redeploy: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'B', text: "Map the identity provider's groups onto Backstage groups and rely on ownership-based permissions alone." },
      { id: 'C', text: "Implement a custom `PermissionPolicy` in code that reads its role assignments from a configuration file, reloading that file whenever the backend restarts." },
      { id: 'D', text: "Leave the default allow-all policy in place and restrict who can reach the portal at the ingress layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers. A config-driven policy avoids recompiling for each role change but still needs a deployment to alter the file, and it gives administrators no interface; ownership-based permissions cover the common case and cannot express a role that spans entities nobody owns; and an ingress restriction decides who may enter the portal rather than what they may do once inside.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration","RBAC Administration","Resilience And Operations"]
  },
  {
    id: "cncf-cba-491",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Moving to a Newer Backstage Release: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Run `yarn upgrade-interactive` and select the `@backstage/*` packages to move them all forward together." },
      { id: 'B', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'C', text: "Work through the official Upgrade Helper diff and apply each change to the affected files by hand." },
      { id: 'D', text: "Set every `@backstage/*` dependency to `latest` and reinstall to pick up the current releases." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions. `upgrade-interactive` moves each package to its own newest version with no notion of which versions were released as a compatible set; the Upgrade Helper is genuinely needed for changes to files the CLI does not own, such as `App.tsx`, so it complements the bump rather than replacing it; and `latest` on every package discards the release-set guarantee entirely.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance","Upgrades","Enterprise Portal"]
  },
  {
    id: "cncf-cba-492",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Moving to a Newer Backstage Release: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Run `yarn upgrade-interactive` and select the `@backstage/*` packages to move them all forward together." },
      { id: 'B', text: "Set every `@backstage/*` dependency to `latest` and reinstall to pick up the current releases." },
      { id: 'C', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'D', text: "Work through the official Upgrade Helper diff and apply each change to the affected files by hand." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions. `upgrade-interactive` moves each package to its own newest version with no notion of which versions were released as a compatible set; the Upgrade Helper is genuinely needed for changes to files the CLI does not own, such as `App.tsx`, so it complements the bump rather than replacing it; and `latest` on every package discards the release-set guarantee entirely.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance","Upgrades","High Scale Catalog"]
  },
  {
    id: "cncf-cba-493",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Moving to a Newer Backstage Release: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Set every `@backstage/*` dependency to `latest` and reinstall to pick up the current releases." },
      { id: 'B', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'C', text: "Run `yarn upgrade-interactive` and select the `@backstage/*` packages to move them all forward together." },
      { id: 'D', text: "Work through the official Upgrade Helper diff and apply each change to the affected files by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions. `upgrade-interactive` moves each package to its own newest version with no notion of which versions were released as a compatible set; the Upgrade Helper is genuinely needed for changes to files the CLI does not own, such as `App.tsx`, so it complements the bump rather than replacing it; and `latest` on every package discards the release-set guarantee entirely.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance","Upgrades","Security And Governance"]
  },
  {
    id: "cncf-cba-494",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Moving to a Newer Backstage Release: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Work through the official Upgrade Helper diff and apply each change to the affected files by hand." },
      { id: 'B', text: "Set every `@backstage/*` dependency to `latest` and reinstall to pick up the current releases." },
      { id: 'C', text: "Run `yarn upgrade-interactive` and select the `@backstage/*` packages to move them all forward together." },
      { id: 'D', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions. `upgrade-interactive` moves each package to its own newest version with no notion of which versions were released as a compatible set; the Upgrade Helper is genuinely needed for changes to files the CLI does not own, such as `App.tsx`, so it complements the bump rather than replacing it; and `latest` on every package discards the release-set guarantee entirely.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance","Upgrades","Developer Onboarding"]
  },
  {
    id: "cncf-cba-495",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Moving to a Newer Backstage Release: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Run `yarn upgrade-interactive` and select the `@backstage/*` packages to move them all forward together." },
      { id: 'B', text: "Set every `@backstage/*` dependency to `latest` and reinstall to pick up the current releases." },
      { id: 'C', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'D', text: "Work through the official Upgrade Helper diff and apply each change to the affected files by hand." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions. `upgrade-interactive` moves each package to its own newest version with no notion of which versions were released as a compatible set; the Upgrade Helper is genuinely needed for changes to files the CLI does not own, such as `App.tsx`, so it complements the bump rather than replacing it; and `latest` on every package discards the release-set guarantee entirely.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance","Upgrades","Resilience And Operations"]
  },
  {
    id: "cncf-cba-496",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Producing an Auditable Record of Activity: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Write the entries with `console.log` in JSON form and let the container runtime collect them from stdout for the log aggregator." },
      { id: 'B', text: "Treat the scaffolder's task event stream as the audit record rather than using the logger service." },
      { id: 'C', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'D', text: "Send audit events straight to an external SIEM from each plugin using its own HTTP client." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion. `console.log` reaches the collector but carries none of the plugin, service, and trace fields the logger service attaches, so entries cannot be correlated across a request; the task event stream covers scaffolder runs alone and expires with the task; and per-plugin SIEM clients duplicate delivery, retry, and credential handling in every plugin, and drop events whenever one of them fails.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging","Audit Logging","Enterprise Portal"]
  },
  {
    id: "cncf-cba-497",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Producing an Auditable Record of Activity: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Treat the scaffolder's task event stream as the audit record rather than using the logger service." },
      { id: 'B', text: "Write the entries with `console.log` in JSON form and let the container runtime collect them from stdout for the log aggregator." },
      { id: 'C', text: "Send audit events straight to an external SIEM from each plugin using its own HTTP client." },
      { id: 'D', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion. `console.log` reaches the collector but carries none of the plugin, service, and trace fields the logger service attaches, so entries cannot be correlated across a request; the task event stream covers scaffolder runs alone and expires with the task; and per-plugin SIEM clients duplicate delivery, retry, and credential handling in every plugin, and drop events whenever one of them fails.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging","Audit Logging","High Scale Catalog"]
  },
  {
    id: "cncf-cba-498",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Producing an Auditable Record of Activity: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Send audit events straight to an external SIEM from each plugin using its own HTTP client." },
      { id: 'B', text: "Treat the scaffolder's task event stream as the audit record rather than using the logger service." },
      { id: 'C', text: "Write the entries with `console.log` in JSON form and let the container runtime collect them from stdout for the log aggregator." },
      { id: 'D', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion. `console.log` reaches the collector but carries none of the plugin, service, and trace fields the logger service attaches, so entries cannot be correlated across a request; the task event stream covers scaffolder runs alone and expires with the task; and per-plugin SIEM clients duplicate delivery, retry, and credential handling in every plugin, and drop events whenever one of them fails.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging","Audit Logging","Security And Governance"]
  },
  {
    id: "cncf-cba-499",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Producing an Auditable Record of Activity: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'B', text: "Treat the scaffolder's task event stream as the audit record rather than using the logger service." },
      { id: 'C', text: "Send audit events straight to an external SIEM from each plugin using its own HTTP client." },
      { id: 'D', text: "Write the entries with `console.log` in JSON form and let the container runtime collect them from stdout for the log aggregator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion. `console.log` reaches the collector but carries none of the plugin, service, and trace fields the logger service attaches, so entries cannot be correlated across a request; the task event stream covers scaffolder runs alone and expires with the task; and per-plugin SIEM clients duplicate delivery, retry, and credential handling in every plugin, and drop events whenever one of them fails.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging","Audit Logging","Developer Onboarding"]
  },
  {
    id: "cncf-cba-500",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Producing an Auditable Record of Activity: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Send audit events straight to an external SIEM from each plugin using its own HTTP client." },
      { id: 'B', text: "Treat the scaffolder's task event stream as the audit record rather than using the logger service." },
      { id: 'C', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'D', text: "Write the entries with `console.log` in JSON form and let the container runtime collect them from stdout for the log aggregator." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion. `console.log` reaches the collector but carries none of the plugin, service, and trace fields the logger service attaches, so entries cannot be correlated across a request; the task event stream covers scaffolder runs alone and expires with the task; and per-plugin SIEM clients duplicate delivery, retry, and credential handling in every plugin, and drop events whenever one of them fails.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging","Audit Logging","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_20;
