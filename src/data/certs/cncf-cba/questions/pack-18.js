export const CNCF_CBA_QUESTIONS_18 = [
  {
    id: "cncf-cba-426",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Workspace Isolation and Cleanup: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Workspace Isolation to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Temporary working directory lifecycle, filesystem isolation, and automated garbage collection is under consideration.",
    options: [
      { id: 'A', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." },
      { id: 'B', text: "Retain unencrypted source code files on the host disk indefinitely until storage is exhausted." },
      { id: 'C', text: "Allow tasks to access and overwrite the Backstage server's private SSH keys." },
      { id: 'D', text: "Execute all scaffolding tasks in the server's root `/tmp` directory sharing the same filename." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation", "Workspace Isolation", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-427",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Workspace Isolation and Cleanup: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Workspace Isolation to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Temporary working directory lifecycle, filesystem isolation, and automated garbage collection is under consideration.",
    options: [
      { id: 'A', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." },
      { id: 'B', text: "Execute all scaffolding tasks in the server's root `/tmp` directory sharing the same filename." },
      { id: 'C', text: "Retain unencrypted source code files on the host disk indefinitely until storage is exhausted." },
      { id: 'D', text: "Allow tasks to access and overwrite the Backstage server's private SSH keys." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation", "Workspace Isolation", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-428",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Workspace Isolation and Cleanup: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Workspace Isolation to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Temporary working directory lifecycle, filesystem isolation, and automated garbage collection is under consideration.",
    options: [
      { id: 'A', text: "Allow tasks to access and overwrite the Backstage server's private SSH keys." },
      { id: 'B', text: "Execute all scaffolding tasks in the server's root `/tmp` directory sharing the same filename." },
      { id: 'C', text: "Retain unencrypted source code files on the host disk indefinitely until storage is exhausted." },
      { id: 'D', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation", "Workspace Isolation", "Security And Governance"]
  },
  {
    id: "cncf-cba-429",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Workspace Isolation and Cleanup: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Workspace Isolation to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Temporary working directory lifecycle, filesystem isolation, and automated garbage collection is under consideration.",
    options: [
      { id: 'A', text: "Execute all scaffolding tasks in the server's root `/tmp` directory sharing the same filename." },
      { id: 'B', text: "Retain unencrypted source code files on the host disk indefinitely until storage is exhausted." },
      { id: 'C', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." },
      { id: 'D', text: "Allow tasks to access and overwrite the Backstage server's private SSH keys." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation", "Workspace Isolation", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-430",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Workspace Isolation and Cleanup: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Workspace Isolation to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Temporary working directory lifecycle, filesystem isolation, and automated garbage collection is under consideration.",
    options: [
      { id: 'A', text: "Allow tasks to access and overwrite the Backstage server's private SSH keys." },
      { id: 'B', text: "Retain unencrypted source code files on the host disk indefinitely until storage is exhausted." },
      { id: 'C', text: "Execute all scaffolding tasks in the server's root `/tmp` directory sharing the same filename." },
      { id: 'D', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation", "Workspace Isolation", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-431",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Task Event Streaming and Live Log Monitoring: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Task Streaming to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Server-Sent Events (SSE) streaming execution logs and step status to the UI is under consideration.",
    options: [
      { id: 'A', text: "Silently hide all step output so developers have no idea if operations succeed or fail." },
      { id: 'B', text: "Require users to refresh the browser page repeatedly to check if background jobs have finished." },
      { id: 'C', text: "Send an SMS text message for every individual terminal command executed." },
      { id: 'D', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming", "Task Streaming", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-432",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Task Event Streaming and Live Log Monitoring: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Task Streaming to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Server-Sent Events (SSE) streaming execution logs and step status to the UI is under consideration.",
    options: [
      { id: 'A', text: "Require users to refresh the browser page repeatedly to check if background jobs have finished." },
      { id: 'B', text: "Send an SMS text message for every individual terminal command executed." },
      { id: 'C', text: "Silently hide all step output so developers have no idea if operations succeed or fail." },
      { id: 'D', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming", "Task Streaming", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-433",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Task Event Streaming and Live Log Monitoring: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Task Streaming to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Server-Sent Events (SSE) streaming execution logs and step status to the UI is under consideration.",
    options: [
      { id: 'A', text: "Require users to refresh the browser page repeatedly to check if background jobs have finished." },
      { id: 'B', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." },
      { id: 'C', text: "Silently hide all step output so developers have no idea if operations succeed or fail." },
      { id: 'D', text: "Send an SMS text message for every individual terminal command executed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming", "Task Streaming", "Security And Governance"]
  },
  {
    id: "cncf-cba-434",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Task Event Streaming and Live Log Monitoring: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Task Streaming to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Server-Sent Events (SSE) streaming execution logs and step status to the UI is under consideration.",
    options: [
      { id: 'A', text: "Silently hide all step output so developers have no idea if operations succeed or fail." },
      { id: 'B', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." },
      { id: 'C', text: "Send an SMS text message for every individual terminal command executed." },
      { id: 'D', text: "Require users to refresh the browser page repeatedly to check if background jobs have finished." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming", "Task Streaming", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-435",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Task Event Streaming and Live Log Monitoring: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Task Streaming to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Server-Sent Events (SSE) streaming execution logs and step status to the UI is under consideration.",
    options: [
      { id: 'A', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." },
      { id: 'B', text: "Require users to refresh the browser page repeatedly to check if background jobs have finished." },
      { id: 'C', text: "Send an SMS text message for every individual terminal command executed." },
      { id: 'D', text: "Silently hide all step output so developers have no idea if operations succeed or fail." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming", "Task Streaming", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-436",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Secret Masking and Secure Credential Handling in Scaffolder: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Secret Masking to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Passing tokens via ctx.secrets and automatic log sanitization is under consideration.",
    options: [
      { id: 'A', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'B', text: "Store GitHub personal access tokens in public git repository README files." },
      { id: 'C', text: "Transmit administrative passwords as plaintext query parameters in client URLs." },
      { id: 'D', text: "Print raw authentication tokens directly to `ctx.logger.info()` in plaintext." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking", "Secret Masking", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-437",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Secret Masking and Secure Credential Handling in Scaffolder: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Secret Masking to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Passing tokens via ctx.secrets and automatic log sanitization is under consideration.",
    options: [
      { id: 'A', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'B', text: "Print raw authentication tokens directly to `ctx.logger.info()` in plaintext." },
      { id: 'C', text: "Transmit administrative passwords as plaintext query parameters in client URLs." },
      { id: 'D', text: "Store GitHub personal access tokens in public git repository README files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking", "Secret Masking", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-438",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Secret Masking and Secure Credential Handling in Scaffolder: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Secret Masking to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Passing tokens via ctx.secrets and automatic log sanitization is under consideration.",
    options: [
      { id: 'A', text: "Print raw authentication tokens directly to `ctx.logger.info()` in plaintext." },
      { id: 'B', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'C', text: "Transmit administrative passwords as plaintext query parameters in client URLs." },
      { id: 'D', text: "Store GitHub personal access tokens in public git repository README files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking", "Secret Masking", "Security And Governance"]
  },
  {
    id: "cncf-cba-439",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Secret Masking and Secure Credential Handling in Scaffolder: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Secret Masking to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Passing tokens via ctx.secrets and automatic log sanitization is under consideration.",
    options: [
      { id: 'A', text: "Store GitHub personal access tokens in public git repository README files." },
      { id: 'B', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'C', text: "Print raw authentication tokens directly to `ctx.logger.info()` in plaintext." },
      { id: 'D', text: "Transmit administrative passwords as plaintext query parameters in client URLs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking", "Secret Masking", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-440",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Secret Masking and Secure Credential Handling in Scaffolder: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Secret Masking to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Passing tokens via ctx.secrets and automatic log sanitization is under consideration.",
    options: [
      { id: 'A', text: "Print raw authentication tokens directly to `ctx.logger.info()` in plaintext." },
      { id: 'B', text: "Store GitHub personal access tokens in public git repository README files." },
      { id: 'C', text: "Transmit administrative passwords as plaintext query parameters in client URLs." },
      { id: 'D', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking", "Secret Masking", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-441",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Golden Path Templates and Engineering Governance: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Golden Paths to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Standardizing CI/CD pipelines, security scanning, and architectural baselines through curated templates is under consideration.",
    options: [
      { id: 'A', text: "Ban the use of templates and encourage copying code from arbitrary public repositories." },
      { id: 'B', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." },
      { id: 'C', text: "Allow developers to bypass all security and compliance requirements." },
      { id: 'D', text: "Require developers to build bespoke deployment scripts and container configurations from scratch without guidance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths", "Golden Paths", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-442",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Golden Path Templates and Engineering Governance: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Golden Paths to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Standardizing CI/CD pipelines, security scanning, and architectural baselines through curated templates is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to bypass all security and compliance requirements." },
      { id: 'B', text: "Require developers to build bespoke deployment scripts and container configurations from scratch without guidance." },
      { id: 'C', text: "Ban the use of templates and encourage copying code from arbitrary public repositories." },
      { id: 'D', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths", "Golden Paths", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-443",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Golden Path Templates and Engineering Governance: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Golden Paths to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Standardizing CI/CD pipelines, security scanning, and architectural baselines through curated templates is under consideration.",
    options: [
      { id: 'A', text: "Require developers to build bespoke deployment scripts and container configurations from scratch without guidance." },
      { id: 'B', text: "Allow developers to bypass all security and compliance requirements." },
      { id: 'C', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." },
      { id: 'D', text: "Ban the use of templates and encourage copying code from arbitrary public repositories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths", "Golden Paths", "Security And Governance"]
  },
  {
    id: "cncf-cba-444",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Golden Path Templates and Engineering Governance: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Golden Paths to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Standardizing CI/CD pipelines, security scanning, and architectural baselines through curated templates is under consideration.",
    options: [
      { id: 'A', text: "Ban the use of templates and encourage copying code from arbitrary public repositories." },
      { id: 'B', text: "Require developers to build bespoke deployment scripts and container configurations from scratch without guidance." },
      { id: 'C', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." },
      { id: 'D', text: "Allow developers to bypass all security and compliance requirements." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths", "Golden Paths", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-445",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Golden Path Templates and Engineering Governance: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Golden Paths to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Standardizing CI/CD pipelines, security scanning, and architectural baselines through curated templates is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to bypass all security and compliance requirements." },
      { id: 'B', text: "Ban the use of templates and encourage copying code from arbitrary public repositories." },
      { id: 'C', text: "Require developers to build bespoke deployment scripts and container configurations from scratch without guidance." },
      { id: 'D', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths", "Golden Paths", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-446",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Frontend Plugin Architecture and Extensions: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Frontend Plugins to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? createPlugin, createRoutableExtension, and extension points for modular UI composition is under consideration.",
    options: [
      { id: 'A', text: "Modify Backstage core library source files directly inside node_modules." },
      { id: 'B', text: "Inject uncompiled React JSX strings into client browser cookies." },
      { id: 'C', text: "Embed raw HTML snippets directly into the root index.html file." },
      { id: 'D', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins", "Frontend Plugins", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-447",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Frontend Plugin Architecture and Extensions: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Frontend Plugins to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? createPlugin, createRoutableExtension, and extension points for modular UI composition is under consideration.",
    options: [
      { id: 'A', text: "Embed raw HTML snippets directly into the root index.html file." },
      { id: 'B', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'C', text: "Modify Backstage core library source files directly inside node_modules." },
      { id: 'D', text: "Inject uncompiled React JSX strings into client browser cookies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins", "Frontend Plugins", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-448",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Frontend Plugin Architecture and Extensions: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Frontend Plugins to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? createPlugin, createRoutableExtension, and extension points for modular UI composition is under consideration.",
    options: [
      { id: 'A', text: "Embed raw HTML snippets directly into the root index.html file." },
      { id: 'B', text: "Inject uncompiled React JSX strings into client browser cookies." },
      { id: 'C', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'D', text: "Modify Backstage core library source files directly inside node_modules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins", "Frontend Plugins", "Security And Governance"]
  },
  {
    id: "cncf-cba-449",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Frontend Plugin Architecture and Extensions: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Frontend Plugins to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? createPlugin, createRoutableExtension, and extension points for modular UI composition is under consideration.",
    options: [
      { id: 'A', text: "Modify Backstage core library source files directly inside node_modules." },
      { id: 'B', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'C', text: "Inject uncompiled React JSX strings into client browser cookies." },
      { id: 'D', text: "Embed raw HTML snippets directly into the root index.html file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins", "Frontend Plugins", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-450",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Frontend Plugin Architecture and Extensions: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Frontend Plugins to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? createPlugin, createRoutableExtension, and extension points for modular UI composition is under consideration.",
    options: [
      { id: 'A', text: "Inject uncompiled React JSX strings into client browser cookies." },
      { id: 'B', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'C', text: "Embed raw HTML snippets directly into the root index.html file." },
      { id: 'D', text: "Modify Backstage core library source files directly inside node_modules." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins", "Frontend Plugins", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_18;
