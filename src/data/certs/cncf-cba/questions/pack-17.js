export const CNCF_CBA_QUESTIONS_17 = [
  {
    id: "cncf-cba-401",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Rendering a Skeleton With the User's Values: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Use `fetch:plain` to copy the skeleton verbatim and substitute the dynamic variables in a later custom action." },
      { id: 'B', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." },
      { id: 'C', text: "Use `fetch:template` with `copyWithoutTemplating` set for every file so the placeholders survive the copy." },
      { id: 'D', text: "Clone the skeleton with a `publish:github` step first and rewrite the files in the new repository afterwards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values. `fetch:plain` deliberately skips templating, so the placeholders reach the workspace untouched and a second action has to reimplement the rendering; setting `copyWithoutTemplating` across the board disables the very substitution the action exists for; and publishing before rendering creates a repository whose first commit contains unrendered placeholders.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions","Templating Actions","Enterprise Portal"]
  },
  {
    id: "cncf-cba-402",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Rendering a Skeleton With the User's Values: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Use `fetch:plain` to copy the skeleton verbatim and substitute the dynamic variables in a later custom action." },
      { id: 'B', text: "Clone the skeleton with a `publish:github` step first and rewrite the files in the new repository afterwards." },
      { id: 'C', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." },
      { id: 'D', text: "Use `fetch:template` with `copyWithoutTemplating` set for every file so the placeholders survive the copy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values. `fetch:plain` deliberately skips templating, so the placeholders reach the workspace untouched and a second action has to reimplement the rendering; setting `copyWithoutTemplating` across the board disables the very substitution the action exists for; and publishing before rendering creates a repository whose first commit contains unrendered placeholders.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions","Templating Actions","High Scale Catalog"]
  },
  {
    id: "cncf-cba-403",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Rendering a Skeleton With the User's Values: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Use `fetch:plain` to copy the skeleton verbatim and substitute the dynamic variables in a later custom action." },
      { id: 'B', text: "Clone the skeleton with a `publish:github` step first and rewrite the files in the new repository afterwards." },
      { id: 'C', text: "Use `fetch:template` with `copyWithoutTemplating` set for every file so the placeholders survive the copy." },
      { id: 'D', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values. `fetch:plain` deliberately skips templating, so the placeholders reach the workspace untouched and a second action has to reimplement the rendering; setting `copyWithoutTemplating` across the board disables the very substitution the action exists for; and publishing before rendering creates a repository whose first commit contains unrendered placeholders.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions","Templating Actions","Security And Governance"]
  },
  {
    id: "cncf-cba-404",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Rendering a Skeleton With the User's Values: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Use `fetch:template` with `copyWithoutTemplating` set for every file so the placeholders survive the copy." },
      { id: 'B', text: "Use `fetch:plain` to copy the skeleton verbatim and substitute the dynamic variables in a later custom action." },
      { id: 'C', text: "Clone the skeleton with a `publish:github` step first and rewrite the files in the new repository afterwards." },
      { id: 'D', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values. `fetch:plain` deliberately skips templating, so the placeholders reach the workspace untouched and a second action has to reimplement the rendering; setting `copyWithoutTemplating` across the board disables the very substitution the action exists for; and publishing before rendering creates a repository whose first commit contains unrendered placeholders.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions","Templating Actions","Developer Onboarding"]
  },
  {
    id: "cncf-cba-405",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Rendering a Skeleton With the User's Values: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to render templated source code files substituting dynamic project names, package namespaces, and ports into skeleton files.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Use `fetch:plain` to copy the skeleton verbatim and substitute the dynamic variables in a later custom action." },
      { id: 'B', text: "Clone the skeleton with a `publish:github` step first and rewrite the files in the new repository afterwards." },
      { id: 'C', text: "Use `fetch:template` with `copyWithoutTemplating` set for every file so the placeholders survive the copy." },
      { id: 'D', text: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the built-in `fetch:template` action, supplying dynamic input variables rendered via Nunjucks templating syntax. The `fetch:template` action fetches a skeleton directory from a local or remote URL and processes files using the Nunjucks templating engine, replacing `{{ values.component_id }}` placeholders with user-submitted parameter values. `fetch:plain` deliberately skips templating, so the placeholders reach the workspace untouched and a second action has to reimplement the rendering; setting `copyWithoutTemplating` across the board disables the very substitution the action exists for; and publishing before rendering creates a repository whose first commit contains unrendered placeholders.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#fetchtemplate",
    tags: ["Templating Actions","Templating Actions","Resilience And Operations"]
  },
  {
    id: "cncf-cba-406",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Creating the New Repository: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Use `publish:github:pull-request` so that the generated files arrive as a pull request against an existing repository." },
      { id: 'B', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'C', text: "Call the GitHub REST API from a custom action using a token read out of `app-config.yaml`." },
      { id: 'D', text: "Use `publish:gitlab` with the GitHub host and default branch configured in the integrations block." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories. The pull-request action is the right choice when adding files to a repository that already exists, but it cannot create the new repository this template needs; a hand-rolled API call bypasses the integrations layer, so it misses per-host credential resolution and the token masking the scaffolder applies; and the GitLab action speaks a different API regardless of which host is configured.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions","Publishing Actions","Enterprise Portal"]
  },
  {
    id: "cncf-cba-407",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Creating the New Repository: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Call the GitHub REST API from a custom action using a token read out of `app-config.yaml`." },
      { id: 'B', text: "Use `publish:gitlab` with the GitHub host and default branch configured in the integrations block." },
      { id: 'C', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'D', text: "Use `publish:github:pull-request` so that the generated files arrive as a pull request against an existing repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories. The pull-request action is the right choice when adding files to a repository that already exists, but it cannot create the new repository this template needs; a hand-rolled API call bypasses the integrations layer, so it misses per-host credential resolution and the token masking the scaffolder applies; and the GitLab action speaks a different API regardless of which host is configured.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions","Publishing Actions","High Scale Catalog"]
  },
  {
    id: "cncf-cba-408",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Creating the New Repository: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Call the GitHub REST API from a custom action using a token read out of `app-config.yaml`." },
      { id: 'B', text: "Use `publish:github:pull-request` so that the generated files arrive as a pull request against an existing repository." },
      { id: 'C', text: "Use `publish:gitlab` with the GitHub host and default branch configured in the integrations block." },
      { id: 'D', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories. The pull-request action is the right choice when adding files to a repository that already exists, but it cannot create the new repository this template needs; a hand-rolled API call bypasses the integrations layer, so it misses per-host credential resolution and the token masking the scaffolder applies; and the GitLab action speaks a different API regardless of which host is configured.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions","Publishing Actions","Security And Governance"]
  },
  {
    id: "cncf-cba-409",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Creating the New Repository: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Call the GitHub REST API from a custom action using a token read out of `app-config.yaml`." },
      { id: 'B', text: "Use `publish:github:pull-request` so that the generated files arrive as a pull request against an existing repository." },
      { id: 'C', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'D', text: "Use `publish:gitlab` with the GitHub host and default branch configured in the integrations block." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories. The pull-request action is the right choice when adding files to a repository that already exists, but it cannot create the new repository this template needs; a hand-rolled API call bypasses the integrations layer, so it misses per-host credential resolution and the token masking the scaffolder applies; and the GitLab action speaks a different API regardless of which host is configured.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions","Publishing Actions","Developer Onboarding"]
  },
  {
    id: "cncf-cba-410",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Creating the New Repository: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to commit newly scaffolded project code into a brand new enterprise GitHub repository with branch protection automatically.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials." },
      { id: 'B', text: "Use `publish:github:pull-request` so that the generated files arrive as a pull request against an existing repository." },
      { id: 'C', text: "Call the GitHub REST API from a custom action using a token read out of `app-config.yaml`." },
      { id: 'D', text: "Use `publish:gitlab` with the GitHub host and default branch configured in the integrations block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `publish:github` with `repoUrl`, default branch configuration, and integration credentials. Backstage Scaffolder provides publishing actions (`publish:github`, `publish:gitlab`, `publish:bitbucket`). They create remote repositories, commit initialized workspace files, set up default branches, and can generate pull requests against existing repositories. The pull-request action is the right choice when adding files to a repository that already exists, but it cannot create the new repository this template needs; a hand-rolled API call bypasses the integrations layer, so it misses per-host credential resolution and the token masking the scaffolder applies; and the GitLab action speaks a different API regardless of which host is configured.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#publishgithub",
    tags: ["Publishing Actions","Publishing Actions","Resilience And Operations"]
  },
  {
    id: "cncf-cba-411",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the New Service Appear in the Catalog: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Let the GitHub discovery provider pick the new repository up on its next scheduled scan." },
      { id: 'B', text: "Use the `catalog:write` action to emit a `catalog-info.yaml` into the workspace as the final step." },
      { id: 'C', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." },
      { id: 'D', text: "Append the new repository's URL to `catalog.locations` in `app-config.yaml` from within the template, committing that change back to the deployment repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention. Discovery does eventually find the repository, but the developer is returned to a portal where their new service does not yet exist, which is the gap the register step closes; `catalog:write` produces the file and stops short of registering its location; and a template cannot change the deployed configuration of the backend that is running it.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action","Catalog Registration Action","Enterprise Portal"]
  },
  {
    id: "cncf-cba-412",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the New Service Appear in the Catalog: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." },
      { id: 'B', text: "Append the new repository's URL to `catalog.locations` in `app-config.yaml` from within the template, committing that change back to the deployment repository." },
      { id: 'C', text: "Let the GitHub discovery provider pick the new repository up on its next scheduled scan." },
      { id: 'D', text: "Use the `catalog:write` action to emit a `catalog-info.yaml` into the workspace as the final step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention. Discovery does eventually find the repository, but the developer is returned to a portal where their new service does not yet exist, which is the gap the register step closes; `catalog:write` produces the file and stops short of registering its location; and a template cannot change the deployed configuration of the backend that is running it.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action","Catalog Registration Action","High Scale Catalog"]
  },
  {
    id: "cncf-cba-413",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the New Service Appear in the Catalog: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." },
      { id: 'B', text: "Let the GitHub discovery provider pick the new repository up on its next scheduled scan." },
      { id: 'C', text: "Use the `catalog:write` action to emit a `catalog-info.yaml` into the workspace as the final step." },
      { id: 'D', text: "Append the new repository's URL to `catalog.locations` in `app-config.yaml` from within the template, committing that change back to the deployment repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention. Discovery does eventually find the repository, but the developer is returned to a portal where their new service does not yet exist, which is the gap the register step closes; `catalog:write` produces the file and stops short of registering its location; and a template cannot change the deployed configuration of the backend that is running it.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action","Catalog Registration Action","Security And Governance"]
  },
  {
    id: "cncf-cba-414",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the New Service Appear in the Catalog: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Let the GitHub discovery provider pick the new repository up on its next scheduled scan." },
      { id: 'B', text: "Append the new repository's URL to `catalog.locations` in `app-config.yaml` from within the template, committing that change back to the deployment repository." },
      { id: 'C', text: "Use the `catalog:write` action to emit a `catalog-info.yaml` into the workspace as the final step." },
      { id: 'D', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention. Discovery does eventually find the repository, but the developer is returned to a portal where their new service does not yet exist, which is the gap the register step closes; `catalog:write` produces the file and stops short of registering its location; and a template cannot change the deployed configuration of the backend that is running it.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action","Catalog Registration Action","Developer Onboarding"]
  },
  {
    id: "cncf-cba-415",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the New Service Appear in the Catalog: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to ensure newly created software components appear in the Backstage Software Catalog immediately upon template completion.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Use the `catalog:write` action to emit a `catalog-info.yaml` into the workspace as the final step." },
      { id: 'B', text: "Let the GitHub discovery provider pick the new repository up on its next scheduled scan." },
      { id: 'C', text: "Append the new repository's URL to `catalog.locations` in `app-config.yaml` from within the template, committing that change back to the deployment repository." },
      { id: 'D', text: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Invoke the `catalog:register` action with the generated repository's `catalog-info.yaml` URL as the final step in the template. The `catalog:register` action registers an entity descriptor directly into the Backstage catalog engine via its API. Calling it at the end of a scaffolder workflow ensures immediate discoverability of newly scaffolded components without manual developer intervention. Discovery does eventually find the repository, but the developer is returned to a portal where their new service does not yet exist, which is the gap the register step closes; `catalog:write` produces the file and stops short of registering its location; and a template cannot change the deployed configuration of the backend that is running it.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#catalogregister",
    tags: ["Catalog Registration Action","Catalog Registration Action","Resilience And Operations"]
  },
  {
    id: "cncf-cba-416",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Adding a Step the Built-ins Do Not Cover: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Use the built-in `http:backstage:request` action to call an internal service that performs the work." },
      { id: 'B', text: "Commit a Node.js script into the skeleton and execute it from a shell-running action during the template, passing the parameters as command line arguments." },
      { id: 'C', text: "Fork the scaffolder backend plugin and extend `createBuiltinActions` with the new custom behaviour." },
      { id: 'D', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`. An HTTP call to another service works when such a service exists, at the cost of a second deployment to operate and no access to the task workspace; running a script from the skeleton leaves the logic unversioned relative to the template and outside the action schema, so inputs are unvalidated; and forking the scaffolder plugin means re-applying the change on every Backstage upgrade.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions","Custom Actions","Enterprise Portal"]
  },
  {
    id: "cncf-cba-417",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Adding a Step the Built-ins Do Not Cover: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Fork the scaffolder backend plugin and extend `createBuiltinActions` with the new custom behaviour." },
      { id: 'B', text: "Commit a Node.js script into the skeleton and execute it from a shell-running action during the template, passing the parameters as command line arguments." },
      { id: 'C', text: "Use the built-in `http:backstage:request` action to call an internal service that performs the work." },
      { id: 'D', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`. An HTTP call to another service works when such a service exists, at the cost of a second deployment to operate and no access to the task workspace; running a script from the skeleton leaves the logic unversioned relative to the template and outside the action schema, so inputs are unvalidated; and forking the scaffolder plugin means re-applying the change on every Backstage upgrade.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions","Custom Actions","High Scale Catalog"]
  },
  {
    id: "cncf-cba-418",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Adding a Step the Built-ins Do Not Cover: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Use the built-in `http:backstage:request` action to call an internal service that performs the work." },
      { id: 'B', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." },
      { id: 'C', text: "Commit a Node.js script into the skeleton and execute it from a shell-running action during the template, passing the parameters as command line arguments." },
      { id: 'D', text: "Fork the scaffolder backend plugin and extend `createBuiltinActions` with the new custom behaviour." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`. An HTTP call to another service works when such a service exists, at the cost of a second deployment to operate and no access to the task workspace; running a script from the skeleton leaves the logic unversioned relative to the template and outside the action schema, so inputs are unvalidated; and forking the scaffolder plugin means re-applying the change on every Backstage upgrade.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions","Custom Actions","Security And Governance"]
  },
  {
    id: "cncf-cba-419",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Adding a Step the Built-ins Do Not Cover: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Use the built-in `http:backstage:request` action to call an internal service that performs the work." },
      { id: 'B', text: "Fork the scaffolder backend plugin and extend `createBuiltinActions` with the new custom behaviour." },
      { id: 'C', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." },
      { id: 'D', text: "Commit a Node.js script into the skeleton and execute it from a shell-running action during the template, passing the parameters as command line arguments." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`. An HTTP call to another service works when such a service exists, at the cost of a second deployment to operate and no access to the task workspace; running a script from the skeleton leaves the logic unversioned relative to the template and outside the action schema, so inputs are unvalidated; and forking the scaffolder plugin means re-applying the change on every Backstage upgrade.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions","Custom Actions","Developer Onboarding"]
  },
  {
    id: "cncf-cba-420",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Adding a Step the Built-ins Do Not Cover: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to integrate an in-house internal CMDB, security vault, or custom compliance scanner into the software scaffolding workflow.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Fork the scaffolder backend plugin and extend `createBuiltinActions` with the new custom behaviour." },
      { id: 'B', text: "Commit a Node.js script into the skeleton and execute it from a shell-running action during the template, passing the parameters as command line arguments." },
      { id: 'C', text: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`." },
      { id: 'D', text: "Use the built-in `http:backstage:request` action to call an internal service that performs the work." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom action using `createTemplateAction`, declaring `schema.input` and handling logic inside `async handler(ctx)`. Custom scaffolder actions are authored using `createTemplateAction`. Developers define the action `id`, input/output JSON schemas, and an asynchronous `handler(ctx)` function with access to `ctx.workspacePath`, `ctx.logger`, and `ctx.input`. An HTTP call to another service works when such a service exists, at the cost of a second deployment to operate and no access to the task workspace; running a script from the skeleton leaves the logic unversioned relative to the template and outside the action schema, so inputs are unvalidated; and forking the scaffolder plugin means re-applying the change on every Backstage upgrade.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Custom Actions","Custom Actions","Resilience And Operations"]
  },
  {
    id: "cncf-cba-421",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Testing a Template Before Teams Use It: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'B', text: "Run the template against a scratch GitHub organisation and delete the repositories it creates afterwards." },
      { id: 'C', text: "Register the template in a staging Backstage instance and run it there from end to end before promoting it." },
      { id: 'D', text: "Validate the scaffolder template file with `yarn backstage-cli repo lint` before committing the change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing. Running against a scratch organisation exercises the publish steps but takes minutes per iteration and leaves repositories to clean up; a staging instance is a sound pre-production check yet still requires committing and deploying the template first; and `repo lint` checks source code style and never reads template definitions.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing","Template Testing","Enterprise Portal"]
  },
  {
    id: "cncf-cba-422",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Testing a Template Before Teams Use It: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Validate the scaffolder template file with `yarn backstage-cli repo lint` before committing the change." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Run the template against a scratch GitHub organisation and delete the repositories it creates afterwards." },
      { id: 'D', text: "Register the template in a staging Backstage instance and run it there from end to end before promoting it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing. Running against a scratch organisation exercises the publish steps but takes minutes per iteration and leaves repositories to clean up; a staging instance is a sound pre-production check yet still requires committing and deploying the template first; and `repo lint` checks source code style and never reads template definitions.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing","Template Testing","High Scale Catalog"]
  },
  {
    id: "cncf-cba-423",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Testing a Template Before Teams Use It: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Validate the scaffolder template file with `yarn backstage-cli repo lint` before committing the change." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Register the template in a staging Backstage instance and run it there from end to end before promoting it." },
      { id: 'D', text: "Run the template against a scratch GitHub organisation and delete the repositories it creates afterwards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing. Running against a scratch organisation exercises the publish steps but takes minutes per iteration and leaves repositories to clean up; a staging instance is a sound pre-production check yet still requires committing and deploying the template first; and `repo lint` checks source code style and never reads template definitions.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing","Template Testing","Security And Governance"]
  },
  {
    id: "cncf-cba-424",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Testing a Template Before Teams Use It: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Run the template against a scratch GitHub organisation and delete the repositories it creates afterwards." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Register the template in a staging Backstage instance and run it there from end to end before promoting it." },
      { id: 'D', text: "Validate the scaffolder template file with `yarn backstage-cli repo lint` before committing the change." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing. Running against a scratch organisation exercises the publish steps but takes minutes per iteration and leaves repositories to clean up; a staging instance is a sound pre-production check yet still requires committing and deploying the template first; and `repo lint` checks source code style and never reads template definitions.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing","Template Testing","Developer Onboarding"]
  },
  {
    id: "cncf-cba-425",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Testing a Template Before Teams Use It: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to test and debug a newly authored software template form and action sequence without creating live production Git repositories.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Validate the scaffolder template file with `yarn backstage-cli repo lint` before committing the change." },
      { id: 'B', text: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs." },
      { id: 'C', text: "Run the template against a scratch GitHub organisation and delete the repositories it creates afterwards." },
      { id: 'D', text: "Register the template in a staging Backstage instance and run it there from end to end before promoting it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Backstage Scaffolder Template Editor to execute dry-runs and inspect generated workspace directory outputs. Backstage provides an interactive Template Editor (`/create/edit`) and dry-run API. Platform engineers can load template YAML, test JSONSchema parameter forms, simulate step execution, and download the resulting workspace artifact before publishing. Running against a scratch organisation exercises the publish steps but takes minutes per iteration and leaves repositories to clean up; a staging instance is a sound pre-production check yet still requires committing and deploying the template first; and `repo lint` checks source code style and never reads template definitions.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/testing-templates",
    tags: ["Template Testing","Template Testing","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_17;
