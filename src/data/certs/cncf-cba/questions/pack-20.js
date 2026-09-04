export const CNCF_CBA_QUESTIONS_20 = [
  {
    id: "cncf-cba-476",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Core Utility APIs: Config, Discovery, and Storage: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Utility APIs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Consuming core APIs via useApi(configApiRef) and useApi(storageApiRef) is under consideration.",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Access global `window` object variables and raw browser localStorage directly without abstractions." },
      { id: 'C', text: "Hardcode configuration parameters inside client-side components." },
      { id: 'D', text: "Discard user UI preferences immediately upon page refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs", "Utility APIs", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-477",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Core Utility APIs: Config, Discovery, and Storage: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Utility APIs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Consuming core APIs via useApi(configApiRef) and useApi(storageApiRef) is under consideration.",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Access global `window` object variables and raw browser localStorage directly without abstractions." },
      { id: 'C', text: "Hardcode configuration parameters inside client-side components." },
      { id: 'D', text: "Discard user UI preferences immediately upon page refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs", "Utility APIs", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-478",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Core Utility APIs: Config, Discovery, and Storage: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Utility APIs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Consuming core APIs via useApi(configApiRef) and useApi(storageApiRef) is under consideration.",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Access global `window` object variables and raw browser localStorage directly without abstractions." },
      { id: 'C', text: "Hardcode configuration parameters inside client-side components." },
      { id: 'D', text: "Discard user UI preferences immediately upon page refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs", "Utility APIs", "Security And Governance"]
  },
  {
    id: "cncf-cba-479",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Core Utility APIs: Config, Discovery, and Storage: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Utility APIs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Consuming core APIs via useApi(configApiRef) and useApi(storageApiRef) is under consideration.",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Access global `window` object variables and raw browser localStorage directly without abstractions." },
      { id: 'C', text: "Hardcode configuration parameters inside client-side components." },
      { id: 'D', text: "Discard user UI preferences immediately upon page refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs", "Utility APIs", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-480",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Core Utility APIs: Config, Discovery, and Storage: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Utility APIs to retrieve application configuration and persist user UI preferences across browser sessions cleanly inside a plugin.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Consuming core APIs via useApi(configApiRef) and useApi(storageApiRef) is under consideration.",
    options: [
      { id: 'A', text: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`." },
      { id: 'B', text: "Access global `window` object variables and raw browser localStorage directly without abstractions." },
      { id: 'C', text: "Hardcode configuration parameters inside client-side components." },
      { id: 'D', text: "Discard user UI preferences immediately upon page refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consume Backstage utility APIs using React hooks like `useApi(configApiRef)` and `useApi(storageApiRef)`. Backstage provides a unified API reference system (`ApiRef`). Plugins access core services cleanly via `useApi(...)`, consuming standard APIs such as `configApi` (reading app config), `storageApi` (user settings), and `alertApi` without tight coupling.",
    referenceUrl: "https://backstage.io/docs/api/utility-apis",
    tags: ["Utility APIs", "Utility APIs", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-481",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Theme Customization and Material-UI Design System: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Theming & UI to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Customizing ThemeProvider, Material-UI component overrides, and light/dark modes is under consideration.",
    options: [
      { id: 'A', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'B', text: "Inject unvalidated external CSS stylesheets that override browser security boundaries." },
      { id: 'C', text: "Hardcode inline CSS color codes onto every individual HTML element across thousands of components." },
      { id: 'D', text: "Disable dark mode support to force high-contrast white screens for all users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI", "Theming & UI", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-482",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Theme Customization and Material-UI Design System: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Theming & UI to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Customizing ThemeProvider, Material-UI component overrides, and light/dark modes is under consideration.",
    options: [
      { id: 'A', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'B', text: "Inject unvalidated external CSS stylesheets that override browser security boundaries." },
      { id: 'C', text: "Hardcode inline CSS color codes onto every individual HTML element across thousands of components." },
      { id: 'D', text: "Disable dark mode support to force high-contrast white screens for all users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI", "Theming & UI", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-483",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Theme Customization and Material-UI Design System: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Theming & UI to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Customizing ThemeProvider, Material-UI component overrides, and light/dark modes is under consideration.",
    options: [
      { id: 'A', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'B', text: "Inject unvalidated external CSS stylesheets that override browser security boundaries." },
      { id: 'C', text: "Hardcode inline CSS color codes onto every individual HTML element across thousands of components." },
      { id: 'D', text: "Disable dark mode support to force high-contrast white screens for all users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI", "Theming & UI", "Security And Governance"]
  },
  {
    id: "cncf-cba-484",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Theme Customization and Material-UI Design System: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Theming & UI to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Customizing ThemeProvider, Material-UI component overrides, and light/dark modes is under consideration.",
    options: [
      { id: 'A', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'B', text: "Inject unvalidated external CSS stylesheets that override browser security boundaries." },
      { id: 'C', text: "Hardcode inline CSS color codes onto every individual HTML element across thousands of components." },
      { id: 'D', text: "Disable dark mode support to force high-contrast white screens for all users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI", "Theming & UI", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-485",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Theme Customization and Material-UI Design System: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Theming & UI to align the Backstage portal appearance with corporate branding, custom color palettes, and accessible typography.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Customizing ThemeProvider, Material-UI component overrides, and light/dark modes is under consideration.",
    options: [
      { id: 'A', text: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides." },
      { id: 'B', text: "Inject unvalidated external CSS stylesheets that override browser security boundaries." },
      { id: 'C', text: "Hardcode inline CSS color codes onto every individual HTML element across thousands of components." },
      { id: 'D', text: "Disable dark mode support to force high-contrast white screens for all users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customize the Backstage `ThemeProvider` by extending default light and dark themes with corporate palette overrides. Backstage UI is built on Material-UI (MUI). Organizations customize branding by wrapping the app in custom themes created via `createUnifiedTheme`, overriding color palettes, typography, and component styling while supporting light/dark theme toggling.",
    referenceUrl: "https://backstage.io/docs/getting-started/app-custom-theme",
    tags: ["Theming & UI", "Theming & UI", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-486",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Role-Based Access Control (RBAC) Plugin Administration: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates RBAC Administration to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Configuring permissions and role assignments via @backstage/plugin-rbac is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'B', text: "Grant full database root administrative privileges to every developer in the company." },
      { id: 'C', text: "Hardcode static authorization rules in compiled TypeScript source code requiring full redeployments for every permission change." },
      { id: 'D', text: "Disable authorization checks and open all administrative endpoints to the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration", "RBAC Administration", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-487",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Role-Based Access Control (RBAC) Plugin Administration: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates RBAC Administration to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Configuring permissions and role assignments via @backstage/plugin-rbac is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'B', text: "Grant full database root administrative privileges to every developer in the company." },
      { id: 'C', text: "Hardcode static authorization rules in compiled TypeScript source code requiring full redeployments for every permission change." },
      { id: 'D', text: "Disable authorization checks and open all administrative endpoints to the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration", "RBAC Administration", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-488",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Role-Based Access Control (RBAC) Plugin Administration: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates RBAC Administration to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Configuring permissions and role assignments via @backstage/plugin-rbac is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'B', text: "Grant full database root administrative privileges to every developer in the company." },
      { id: 'C', text: "Hardcode static authorization rules in compiled TypeScript source code requiring full redeployments for every permission change." },
      { id: 'D', text: "Disable authorization checks and open all administrative endpoints to the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration", "RBAC Administration", "Security And Governance"]
  },
  {
    id: "cncf-cba-489",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Role-Based Access Control (RBAC) Plugin Administration: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates RBAC Administration to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Configuring permissions and role assignments via @backstage/plugin-rbac is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'B', text: "Grant full database root administrative privileges to every developer in the company." },
      { id: 'C', text: "Hardcode static authorization rules in compiled TypeScript source code requiring full redeployments for every permission change." },
      { id: 'D', text: "Disable authorization checks and open all administrative endpoints to the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration", "RBAC Administration", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-490",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Role-Based Access Control (RBAC) Plugin Administration: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates RBAC Administration to manage user roles, permission policies, and administrative delegations through an interactive portal UI without redeploying code.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Configuring permissions and role assignments via @backstage/plugin-rbac is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically." },
      { id: 'B', text: "Grant full database root administrative privileges to every developer in the company." },
      { id: 'C', text: "Hardcode static authorization rules in compiled TypeScript source code requiring full redeployments for every permission change." },
      { id: 'D', text: "Disable authorization checks and open all administrative endpoints to the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Backstage RBAC plugin (`@backstage/plugin-rbac`) to administer roles, permissions, and policy rules dynamically. The `@backstage/plugin-rbac` plugin provides declarative and UI-driven access control. Administrators define roles, assign users and groups, and attach permission policies (such as template execution or catalog editing) dynamically without restarting backend servers.",
    referenceUrl: "https://backstage.io/docs/permissions/overview#rbac-and-custom-policies",
    tags: ["RBAC Administration", "RBAC Administration", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-491",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage Version Management and Upgrades: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Upgrades & Maintenance to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Managing dependency alignment using yarn backstage-cli versions:bump is under consideration.",
    options: [
      { id: 'A', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'B', text: "Manually edit hundreds of package.json files with random version strings and conflicting semver ranges." },
      { id: 'C', text: "Never upgrade dependencies and run outdated vulnerable packages indefinitely." },
      { id: 'D', text: "Delete yarn.lock to force unverified transitive dependency installations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance", "Upgrades", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-492",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage Version Management and Upgrades: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Upgrades & Maintenance to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Managing dependency alignment using yarn backstage-cli versions:bump is under consideration.",
    options: [
      { id: 'A', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'B', text: "Manually edit hundreds of package.json files with random version strings and conflicting semver ranges." },
      { id: 'C', text: "Never upgrade dependencies and run outdated vulnerable packages indefinitely." },
      { id: 'D', text: "Delete yarn.lock to force unverified transitive dependency installations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance", "Upgrades", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-493",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage Version Management and Upgrades: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Upgrades & Maintenance to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Managing dependency alignment using yarn backstage-cli versions:bump is under consideration.",
    options: [
      { id: 'A', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'B', text: "Manually edit hundreds of package.json files with random version strings and conflicting semver ranges." },
      { id: 'C', text: "Never upgrade dependencies and run outdated vulnerable packages indefinitely." },
      { id: 'D', text: "Delete yarn.lock to force unverified transitive dependency installations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance", "Upgrades", "Security And Governance"]
  },
  {
    id: "cncf-cba-494",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage Version Management and Upgrades: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Upgrades & Maintenance to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Managing dependency alignment using yarn backstage-cli versions:bump is under consideration.",
    options: [
      { id: 'A', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'B', text: "Manually edit hundreds of package.json files with random version strings and conflicting semver ranges." },
      { id: 'C', text: "Never upgrade dependencies and run outdated vulnerable packages indefinitely." },
      { id: 'D', text: "Delete yarn.lock to force unverified transitive dependency installations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance", "Upgrades", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-495",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage Version Management and Upgrades: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Upgrades & Maintenance to upgrade Backstage monorepo packages safely to the latest stable release without encountering dependency version mismatches.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Managing dependency alignment using yarn backstage-cli versions:bump is under consideration.",
    options: [
      { id: 'A', text: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions." },
      { id: 'B', text: "Manually edit hundreds of package.json files with random version strings and conflicting semver ranges." },
      { id: 'C', text: "Never upgrade dependencies and run outdated vulnerable packages indefinitely." },
      { id: 'D', text: "Delete yarn.lock to force unverified transitive dependency installations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `yarn backstage-cli versions:bump` to update all `@backstage/*` packages to synchronized compatible versions. Because Backstage is composed of dozens of interdependent packages, official upgrades are managed via `yarn backstage-cli versions:bump`. This command queries the release manifest and synchronizes all `@backstage/*` packages to mutually compatible versions.",
    referenceUrl: "https://backstage.io/docs/getting-started/keeping-backstage-updated",
    tags: ["Upgrades & Maintenance", "Upgrades", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-496",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Production Monitoring, Audit Logging, and Winston: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Audit Logging to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Structured logging using Winston and audit trails for catalog and scaffolder operations is under consideration.",
    options: [
      { id: 'A', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'B', text: "Disable server logging to conserve disk space and hide system activity." },
      { id: 'C', text: "Print sensitive authentication credentials in plaintext to unindexed terminal stdout." },
      { id: 'D', text: "Log user actions into an ephemeral local text file that is deleted every five minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging", "Audit Logging", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-497",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Production Monitoring, Audit Logging, and Winston: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Audit Logging to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Structured logging using Winston and audit trails for catalog and scaffolder operations is under consideration.",
    options: [
      { id: 'A', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'B', text: "Disable server logging to conserve disk space and hide system activity." },
      { id: 'C', text: "Print sensitive authentication credentials in plaintext to unindexed terminal stdout." },
      { id: 'D', text: "Log user actions into an ephemeral local text file that is deleted every five minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging", "Audit Logging", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-498",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Production Monitoring, Audit Logging, and Winston: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Audit Logging to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Structured logging using Winston and audit trails for catalog and scaffolder operations is under consideration.",
    options: [
      { id: 'A', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'B', text: "Disable server logging to conserve disk space and hide system activity." },
      { id: 'C', text: "Print sensitive authentication credentials in plaintext to unindexed terminal stdout." },
      { id: 'D', text: "Log user actions into an ephemeral local text file that is deleted every five minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging", "Audit Logging", "Security And Governance"]
  },
  {
    id: "cncf-cba-499",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Production Monitoring, Audit Logging, and Winston: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Audit Logging to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Structured logging using Winston and audit trails for catalog and scaffolder operations is under consideration.",
    options: [
      { id: 'A', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'B', text: "Disable server logging to conserve disk space and hide system activity." },
      { id: 'C', text: "Print sensitive authentication credentials in plaintext to unindexed terminal stdout." },
      { id: 'D', text: "Log user actions into an ephemeral local text file that is deleted every five minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging", "Audit Logging", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-500",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Production Monitoring, Audit Logging, and Winston: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Audit Logging to track who executed sensitive software scaffolding templates and audit administrative catalog changes for security compliance.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Structured logging using Winston and audit trails for catalog and scaffolder operations is under consideration.",
    options: [
      { id: 'A', text: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails." },
      { id: 'B', text: "Disable server logging to conserve disk space and hide system activity." },
      { id: 'C', text: "Print sensitive authentication credentials in plaintext to unindexed terminal stdout." },
      { id: 'D', text: "Log user actions into an ephemeral local text file that is deleted every five minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure structured JSON logging via the Backstage Winston logger service and capture scaffolder execution audit trails. Backstage utilizes Winston for structured logging (`RootLoggerService`). In production, log formatters emit structured JSON events including user identity, timestamps, and action metadata, providing an auditable log stream for enterprise SIEM ingestion.",
    referenceUrl: "https://backstage.io/docs/tooling/winston-logger",
    tags: ["Audit Logging", "Audit Logging", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_20;
