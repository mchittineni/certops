export const CNCF_CBA_QUESTIONS_17 = [
  {
    id: "cncf-cba-401",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: fetch:template and Cookiecutter: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Templating Actions to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Rendering starter code directories using fetch:template and Nunjucks syntax is under consideration.",
    options: [
      { id: 'A', text: "Compile raw C++ binaries inside client browser tabs." },
      { id: 'B', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." },
      { id: 'C', text: "Prevent source code parameterization to force identical code deployments across all microservices." },
      { id: 'D', text: "Manually download a static zip archive and perform manual search-and-replace across thousands of files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions", "Templating Actions", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-402",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: fetch:template and Cookiecutter: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Templating Actions to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Rendering starter code directories using fetch:template and Nunjucks syntax is under consideration.",
    options: [
      { id: 'A', text: "Compile raw C++ binaries inside client browser tabs." },
      { id: 'B', text: "Manually download a static zip archive and perform manual search-and-replace across thousands of files." },
      { id: 'C', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." },
      { id: 'D', text: "Prevent source code parameterization to force identical code deployments across all microservices." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions", "Templating Actions", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-403",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: fetch:template and Cookiecutter: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Templating Actions to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Rendering starter code directories using fetch:template and Nunjucks syntax is under consideration.",
    options: [
      { id: 'A', text: "Compile raw C++ binaries inside client browser tabs." },
      { id: 'B', text: "Manually download a static zip archive and perform manual search-and-replace across thousands of files." },
      { id: 'C', text: "Prevent source code parameterization to force identical code deployments across all microservices." },
      { id: 'D', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions", "Templating Actions", "Security And Governance"]
  },
  {
    id: "cncf-cba-404",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: fetch:template and Cookiecutter: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Templating Actions to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Rendering starter code directories using fetch:template and Nunjucks syntax is under consideration.",
    options: [
      { id: 'A', text: "Prevent source code parameterization to force identical code deployments across all microservices." },
      { id: 'B', text: "Compile raw C++ binaries inside client browser tabs." },
      { id: 'C', text: "Manually download a static zip archive and perform manual search-and-replace across thousands of files." },
      { id: 'D', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions", "Templating Actions", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-405",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: fetch:template and Cookiecutter: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Templating Actions to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Rendering starter code directories using fetch:template and Nunjucks syntax is under consideration.",
    options: [
      { id: 'A', text: "Compile raw C++ binaries inside client browser tabs." },
      { id: 'B', text: "Manually download a static zip archive and perform manual search-and-replace across thousands of files." },
      { id: 'C', text: "Prevent source code parameterization to force identical code deployments across all microservices." },
      { id: 'D', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions", "Templating Actions", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-406",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Publishing to Git Providers: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Publishing Actions to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? publish:github, publish:gitlab, and publish:bitbucket repo initialization and PR creation is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to email project zip files to IT support to upload manually." },
      { id: 'B', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'C', text: "Upload code to public unauthenticated pastebins." },
      { id: 'D', text: "Commit all new projects to a single shared master branch on a personal git fork." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions", "Publishing Actions", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-407",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Publishing to Git Providers: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Publishing Actions to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? publish:github, publish:gitlab, and publish:bitbucket repo initialization and PR creation is under consideration.",
    options: [
      { id: 'A', text: "Upload code to public unauthenticated pastebins." },
      { id: 'B', text: "Commit all new projects to a single shared master branch on a personal git fork." },
      { id: 'C', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'D', text: "Instruct developers to email project zip files to IT support to upload manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions", "Publishing Actions", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-408",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Publishing to Git Providers: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Publishing Actions to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? publish:github, publish:gitlab, and publish:bitbucket repo initialization and PR creation is under consideration.",
    options: [
      { id: 'A', text: "Upload code to public unauthenticated pastebins." },
      { id: 'B', text: "Instruct developers to email project zip files to IT support to upload manually." },
      { id: 'C', text: "Commit all new projects to a single shared master branch on a personal git fork." },
      { id: 'D', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions", "Publishing Actions", "Security And Governance"]
  },
  {
    id: "cncf-cba-409",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Publishing to Git Providers: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Publishing Actions to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? publish:github, publish:gitlab, and publish:bitbucket repo initialization and PR creation is under consideration.",
    options: [
      { id: 'A', text: "Upload code to public unauthenticated pastebins." },
      { id: 'B', text: "Instruct developers to email project zip files to IT support to upload manually." },
      { id: 'C', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'D', text: "Commit all new projects to a single shared master branch on a personal git fork." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions", "Publishing Actions", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-410",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Publishing to Git Providers: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Publishing Actions to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? publish:github, publish:gitlab, and publish:bitbucket repo initialization and PR creation is under consideration.",
    options: [
      { id: 'A', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'B', text: "Instruct developers to email project zip files to IT support to upload manually." },
      { id: 'C', text: "Upload code to public unauthenticated pastebins." },
      { id: 'D', text: "Commit all new projects to a single shared master branch on a personal git fork." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions", "Publishing Actions", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-411",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Automated Catalog Registration: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Catalog Registration Action to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Registering newly created catalog-info.yaml via catalog:register or catalog:write is under consideration.",
    options: [
      { id: 'A', text: "Delete the catalog-info.yaml file during repository publishing." },
      { id: 'B', text: "Disable catalog indexing for newly generated services." },
      { id: 'C', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." },
      { id: 'D', text: "Rely on manual copy-pasting of catalog URLs by developers weeks after initial repository creation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action", "Catalog Registration Action", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-412",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Automated Catalog Registration: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Catalog Registration Action to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Registering newly created catalog-info.yaml via catalog:register or catalog:write is under consideration.",
    options: [
      { id: 'A', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." },
      { id: 'B', text: "Rely on manual copy-pasting of catalog URLs by developers weeks after initial repository creation." },
      { id: 'C', text: "Delete the catalog-info.yaml file during repository publishing." },
      { id: 'D', text: "Disable catalog indexing for newly generated services." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action", "Catalog Registration Action", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-413",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Automated Catalog Registration: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Catalog Registration Action to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Registering newly created catalog-info.yaml via catalog:register or catalog:write is under consideration.",
    options: [
      { id: 'A', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." },
      { id: 'B', text: "Delete the catalog-info.yaml file during repository publishing." },
      { id: 'C', text: "Disable catalog indexing for newly generated services." },
      { id: 'D', text: "Rely on manual copy-pasting of catalog URLs by developers weeks after initial repository creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action", "Catalog Registration Action", "Security And Governance"]
  },
  {
    id: "cncf-cba-414",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Automated Catalog Registration: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Catalog Registration Action to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Registering newly created catalog-info.yaml via catalog:register or catalog:write is under consideration.",
    options: [
      { id: 'A', text: "Delete the catalog-info.yaml file during repository publishing." },
      { id: 'B', text: "Rely on manual copy-pasting of catalog URLs by developers weeks after initial repository creation." },
      { id: 'C', text: "Disable catalog indexing for newly generated services." },
      { id: 'D', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action", "Catalog Registration Action", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-415",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Built-in Action: Automated Catalog Registration: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Catalog Registration Action to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Registering newly created catalog-info.yaml via catalog:register or catalog:write is under consideration.",
    options: [
      { id: 'A', text: "Disable catalog indexing for newly generated services." },
      { id: 'B', text: "Delete the catalog-info.yaml file during repository publishing." },
      { id: 'C', text: "Rely on manual copy-pasting of catalog URLs by developers weeks after initial repository creation." },
      { id: 'D', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action", "Catalog Registration Action", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-416",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Writing Custom Scaffolder Actions: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Custom Actions to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Extending scaffolder capabilities using createTemplateAction and handler(ctx) is under consideration.",
    options: [
      { id: 'A', text: "Execute unvalidated sudo shell commands on host operating systems." },
      { id: 'B', text: "Fork the entire Backstage core repository and rewrite native Node.js network drivers." },
      { id: 'C', text: "Force users to run custom external scripts in their local terminals outside of Backstage." },
      { id: 'D', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions", "Custom Actions", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-417",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Writing Custom Scaffolder Actions: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Custom Actions to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Extending scaffolder capabilities using createTemplateAction and handler(ctx) is under consideration.",
    options: [
      { id: 'A', text: "Force users to run custom external scripts in their local terminals outside of Backstage." },
      { id: 'B', text: "Fork the entire Backstage core repository and rewrite native Node.js network drivers." },
      { id: 'C', text: "Execute unvalidated sudo shell commands on host operating systems." },
      { id: 'D', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions", "Custom Actions", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-418",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Writing Custom Scaffolder Actions: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Custom Actions to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Extending scaffolder capabilities using createTemplateAction and handler(ctx) is under consideration.",
    options: [
      { id: 'A', text: "Execute unvalidated sudo shell commands on host operating systems." },
      { id: 'B', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." },
      { id: 'C', text: "Fork the entire Backstage core repository and rewrite native Node.js network drivers." },
      { id: 'D', text: "Force users to run custom external scripts in their local terminals outside of Backstage." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions", "Custom Actions", "Security And Governance"]
  },
  {
    id: "cncf-cba-419",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Writing Custom Scaffolder Actions: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Custom Actions to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Extending scaffolder capabilities using createTemplateAction and handler(ctx) is under consideration.",
    options: [
      { id: 'A', text: "Execute unvalidated sudo shell commands on host operating systems." },
      { id: 'B', text: "Force users to run custom external scripts in their local terminals outside of Backstage." },
      { id: 'C', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." },
      { id: 'D', text: "Fork the entire Backstage core repository and rewrite native Node.js network drivers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions", "Custom Actions", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-420",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Writing Custom Scaffolder Actions: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Custom Actions to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Extending scaffolder capabilities using createTemplateAction and handler(ctx) is under consideration.",
    options: [
      { id: 'A', text: "Force users to run custom external scripts in their local terminals outside of Backstage." },
      { id: 'B', text: "Fork the entire Backstage core repository and rewrite native Node.js network drivers." },
      { id: 'C', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." },
      { id: 'D', text: "Execute unvalidated sudo shell commands on host operating systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions", "Custom Actions", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-421",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Dry-Run and Local Testing: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Template Testing to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Validating templates via Template Editor and dry-run execution APIs is under consideration.",
    options: [
      { id: 'A', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'B', text: "Write template schemas without testing form inputs or schema constraints." },
      { id: 'C', text: "Manually edit production database tables to simulate template runs." },
      { id: 'D', text: "Deploy untested templates directly to all enterprise development teams in production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing", "Template Testing", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-422",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Dry-Run and Local Testing: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Template Testing to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Validating templates via Template Editor and dry-run execution APIs is under consideration.",
    options: [
      { id: 'A', text: "Deploy untested templates directly to all enterprise development teams in production." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Write template schemas without testing form inputs or schema constraints." },
      { id: 'D', text: "Manually edit production database tables to simulate template runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing", "Template Testing", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-423",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Dry-Run and Local Testing: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Template Testing to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Validating templates via Template Editor and dry-run execution APIs is under consideration.",
    options: [
      { id: 'A', text: "Deploy untested templates directly to all enterprise development teams in production." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Manually edit production database tables to simulate template runs." },
      { id: 'D', text: "Write template schemas without testing form inputs or schema constraints." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing", "Template Testing", "Security And Governance"]
  },
  {
    id: "cncf-cba-424",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Dry-Run and Local Testing: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Template Testing to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Validating templates via Template Editor and dry-run execution APIs is under consideration.",
    options: [
      { id: 'A', text: "Write template schemas without testing form inputs or schema constraints." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Manually edit production database tables to simulate template runs." },
      { id: 'D', text: "Deploy untested templates directly to all enterprise development teams in production." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing", "Template Testing", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-425",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Dry-Run and Local Testing: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Template Testing to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Validating templates via Template Editor and dry-run execution APIs is under consideration.",
    options: [
      { id: 'A', text: "Deploy untested templates directly to all enterprise development teams in production." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Write template schemas without testing form inputs or schema constraints." },
      { id: 'D', text: "Manually edit production database tables to simulate template runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing", "Template Testing", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_17;
