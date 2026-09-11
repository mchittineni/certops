export const CNCF_CBA_QUESTIONS_18 = [
  {
    id: "cncf-cba-426",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Keeping Concurrent Tasks From Colliding: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." },
      { id: 'B', text: "Give every scaffolder task the same working directory and clear it out before each new run begins." },
      { id: 'C', text: "Run each task in its own container with the workspace mounted from a shared volume that the runner provisions." },
      { id: 'D', text: "Keep the workspace after completion so that the platform team can inspect tasks that failed, pruning the directories on a weekly schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies. One shared directory serialises the scaffolder, because two concurrent tasks would overwrite each other between the clear and the run; per-task containers isolate more strongly but add an orchestration dependency to what is otherwise an in-process worker; and retaining workspaces aids debugging while leaving cloned source and rendered secrets on disk indefinitely.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation","Workspace Isolation","Enterprise Portal"]
  },
  {
    id: "cncf-cba-427",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Keeping Concurrent Tasks From Colliding: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." },
      { id: 'B', text: "Keep the workspace after completion so that the platform team can inspect tasks that failed, pruning the directories on a weekly schedule." },
      { id: 'C', text: "Give every scaffolder task the same working directory and clear it out before each new run begins." },
      { id: 'D', text: "Run each task in its own container with the workspace mounted from a shared volume that the runner provisions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies. One shared directory serialises the scaffolder, because two concurrent tasks would overwrite each other between the clear and the run; per-task containers isolate more strongly but add an orchestration dependency to what is otherwise an in-process worker; and retaining workspaces aids debugging while leaving cloned source and rendered secrets on disk indefinitely.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation","Workspace Isolation","High Scale Catalog"]
  },
  {
    id: "cncf-cba-428",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Keeping Concurrent Tasks From Colliding: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Run each task in its own container with the workspace mounted from a shared volume that the runner provisions." },
      { id: 'B', text: "Keep the workspace after completion so that the platform team can inspect tasks that failed, pruning the directories on a weekly schedule." },
      { id: 'C', text: "Give every scaffolder task the same working directory and clear it out before each new run begins." },
      { id: 'D', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies. One shared directory serialises the scaffolder, because two concurrent tasks would overwrite each other between the clear and the run; per-task containers isolate more strongly but add an orchestration dependency to what is otherwise an in-process worker; and retaining workspaces aids debugging while leaving cloned source and rendered secrets on disk indefinitely.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation","Workspace Isolation","Security And Governance"]
  },
  {
    id: "cncf-cba-429",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Keeping Concurrent Tasks From Colliding: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Keep the workspace after completion so that the platform team can inspect tasks that failed, pruning the directories on a weekly schedule." },
      { id: 'B', text: "Give every scaffolder task the same working directory and clear it out before each new run begins." },
      { id: 'C', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." },
      { id: 'D', text: "Run each task in its own container with the workspace mounted from a shared volume that the runner provisions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies. One shared directory serialises the scaffolder, because two concurrent tasks would overwrite each other between the clear and the run; per-task containers isolate more strongly but add an orchestration dependency to what is otherwise an in-process worker; and retaining workspaces aids debugging while leaving cloned source and rendered secrets on disk indefinitely.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation","Workspace Isolation","Developer Onboarding"]
  },
  {
    id: "cncf-cba-430",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Keeping Concurrent Tasks From Colliding: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to prevent concurrent template runs from interfering with each other's files or leaking proprietary source code on disk.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Run each task in its own container with the workspace mounted from a shared volume that the runner provisions." },
      { id: 'B', text: "Give every scaffolder task the same working directory and clear it out before each new run begins." },
      { id: 'C', text: "Keep the workspace after completion so that the platform team can inspect tasks that failed, pruning the directories on a weekly schedule." },
      { id: 'D', text: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute each scaffolder task in a dedicated, isolated temporary directory that is automatically purged upon task completion. The Scaffolder runner allocates an isolated temporary filesystem workspace (`ctx.workspacePath`) for every individual task execution. Steps operate strictly within this sandbox, and completed tasks are cleaned up according to configured retention policies. One shared directory serialises the scaffolder, because two concurrent tasks would overwrite each other between the clear and the run; per-task containers isolate more strongly but add an orchestration dependency to what is otherwise an in-process worker; and retaining workspaces aids debugging while leaving cloned source and rendered secrets on disk indefinitely.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/scaffolder-task-workers",
    tags: ["Workspace Isolation","Workspace Isolation","Resilience And Operations"]
  },
  {
    id: "cncf-cba-431",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Showing Progress While a Task Runs: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Poll the `/tasks/:taskId` endpoint from the frontend every few seconds and re-render the log each time, stopping once the task reports a terminal status." },
      { id: 'B', text: "Open a WebSocket from the browser to the scaffolder backend for each task that is running, closing it when the task ends." },
      { id: 'C', text: "Write the task output to the backend's own log stream and have operators read it from Kubernetes." },
      { id: 'D', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view. Polling works but chooses between latency and load, and it re-sends the whole log on each request; a WebSocket carries traffic in both directions when only the server has anything to say, which costs a protocol upgrade that proxies must be configured to permit; and the backend log stream is not visible to the developer who started the task.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming","Task Streaming","Enterprise Portal"]
  },
  {
    id: "cncf-cba-432",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Showing Progress While a Task Runs: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Open a WebSocket from the browser to the scaffolder backend for each task that is running, closing it when the task ends." },
      { id: 'B', text: "Write the task output to the backend's own log stream and have operators read it from Kubernetes." },
      { id: 'C', text: "Poll the `/tasks/:taskId` endpoint from the frontend every few seconds and re-render the log each time, stopping once the task reports a terminal status." },
      { id: 'D', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view. Polling works but chooses between latency and load, and it re-sends the whole log on each request; a WebSocket carries traffic in both directions when only the server has anything to say, which costs a protocol upgrade that proxies must be configured to permit; and the backend log stream is not visible to the developer who started the task.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming","Task Streaming","High Scale Catalog"]
  },
  {
    id: "cncf-cba-433",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Showing Progress While a Task Runs: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Open a WebSocket from the browser to the scaffolder backend for each task that is running, closing it when the task ends." },
      { id: 'B', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." },
      { id: 'C', text: "Poll the `/tasks/:taskId` endpoint from the frontend every few seconds and re-render the log each time, stopping once the task reports a terminal status." },
      { id: 'D', text: "Write the task output to the backend's own log stream and have operators read it from Kubernetes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view. Polling works but chooses between latency and load, and it re-sends the whole log on each request; a WebSocket carries traffic in both directions when only the server has anything to say, which costs a protocol upgrade that proxies must be configured to permit; and the backend log stream is not visible to the developer who started the task.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming","Task Streaming","Security And Governance"]
  },
  {
    id: "cncf-cba-434",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Showing Progress While a Task Runs: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Poll the `/tasks/:taskId` endpoint from the frontend every few seconds and re-render the log each time, stopping once the task reports a terminal status." },
      { id: 'B', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." },
      { id: 'C', text: "Write the task output to the backend's own log stream and have operators read it from Kubernetes." },
      { id: 'D', text: "Open a WebSocket from the browser to the scaffolder backend for each task that is running, closing it when the task ends." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view. Polling works but chooses between latency and load, and it re-sends the whole log on each request; a WebSocket carries traffic in both directions when only the server has anything to say, which costs a protocol upgrade that proxies must be configured to permit; and the backend log stream is not visible to the developer who started the task.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming","Task Streaming","Developer Onboarding"]
  },
  {
    id: "cncf-cba-435",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Showing Progress While a Task Runs: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to provide developers with real-time feedback and step-by-step progress bars while scaffolding a new microservice.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream." },
      { id: 'B', text: "Open a WebSocket from the browser to the scaffolder backend for each task that is running, closing it when the task ends." },
      { id: 'C', text: "Write the task output to the backend's own log stream and have operators read it from Kubernetes." },
      { id: 'D', text: "Poll the `/tasks/:taskId` endpoint from the frontend every few seconds and re-render the log each time, stopping once the task reports a terminal status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stream task logs and step lifecycle status from the backend to the frontend using Server-Sent Events (SSE) via the task event stream. The Backstage Scaffolder backend exposes a streaming event endpoint using Server-Sent Events (SSE). The frontend connects via `EventSource` to receive real-time log lines and step status updates (`processing`, `completed`, `failed`), providing a dynamic console view. Polling works but chooses between latency and load, and it re-sends the whole log on each request; a WebSocket carries traffic in both directions when only the server has anything to say, which costs a protocol upgrade that proxies must be configured to permit; and the backend log stream is not visible to the developer who started the task.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates#task-execution",
    tags: ["Task Streaming","Task Streaming","Resilience And Operations"]
  },
  {
    id: "cncf-cba-436",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Handling a Token Inside a Template Run: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'B', text: "Declare the token as an ordinary template parameter with `ui:widget: password` so the form masks it." },
      { id: 'C', text: "Read the token from `app-config.yaml` inside the action rather than passing it through the task at all, scoping it under the integrations block." },
      { id: 'D', text: "Pass the tokens through `ctx.input` and delete the task record and its logs once the run has completed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution. A password widget hides the value while it is typed, but the parameter is still persisted with the task's inputs and rendered into the event log; reading a shared credential from config means every user of the template acts as the same identity, losing attribution; and deleting the task afterwards does nothing about the log lines already streamed to the browser.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking","Secret Masking","Enterprise Portal"]
  },
  {
    id: "cncf-cba-437",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Handling a Token Inside a Template Run: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'B', text: "Pass the tokens through `ctx.input` and delete the task record and its logs once the run has completed." },
      { id: 'C', text: "Read the token from `app-config.yaml` inside the action rather than passing it through the task at all, scoping it under the integrations block." },
      { id: 'D', text: "Declare the token as an ordinary template parameter with `ui:widget: password` so the form masks it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution. A password widget hides the value while it is typed, but the parameter is still persisted with the task's inputs and rendered into the event log; reading a shared credential from config means every user of the template acts as the same identity, losing attribution; and deleting the task afterwards does nothing about the log lines already streamed to the browser.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking","Secret Masking","High Scale Catalog"]
  },
  {
    id: "cncf-cba-438",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Handling a Token Inside a Template Run: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Pass the tokens through `ctx.input` and delete the task record and its logs once the run has completed." },
      { id: 'B', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'C', text: "Read the token from `app-config.yaml` inside the action rather than passing it through the task at all, scoping it under the integrations block." },
      { id: 'D', text: "Declare the token as an ordinary template parameter with `ui:widget: password` so the form masks it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution. A password widget hides the value while it is typed, but the parameter is still persisted with the task's inputs and rendered into the event log; reading a shared credential from config means every user of the template acts as the same identity, losing attribution; and deleting the task afterwards does nothing about the log lines already streamed to the browser.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking","Secret Masking","Security And Governance"]
  },
  {
    id: "cncf-cba-439",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Handling a Token Inside a Template Run: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Declare the token as an ordinary template parameter with `ui:widget: password` so the form masks it." },
      { id: 'B', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." },
      { id: 'C', text: "Pass the tokens through `ctx.input` and delete the task record and its logs once the run has completed." },
      { id: 'D', text: "Read the token from `app-config.yaml` inside the action rather than passing it through the task at all, scoping it under the integrations block." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution. A password widget hides the value while it is typed, but the parameter is still persisted with the task's inputs and rendered into the event log; reading a shared credential from config means every user of the template acts as the same identity, losing attribution; and deleting the task afterwards does nothing about the log lines already streamed to the browser.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking","Secret Masking","Developer Onboarding"]
  },
  {
    id: "cncf-cba-440",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Handling a Token Inside a Template Run: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to use enterprise API tokens to publish repositories without exposing credentials in task logs or web browser network tabs.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Pass the tokens through `ctx.input` and delete the task record and its logs once the run has completed." },
      { id: 'B', text: "Declare the token as an ordinary template parameter with `ui:widget: password` so the form masks it." },
      { id: 'C', text: "Read the token from `app-config.yaml` inside the action rather than passing it through the task at all, scoping it under the integrations block." },
      { id: 'D', text: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pass tokens using `ctx.secrets` and configure the task logger to mask secret values automatically in all task event logs. The Scaffolder provides a dedicated `secrets` context parameter (`ctx.secrets`). Secrets are never persisted in task database records and are automatically redacted from console logs and SSE streams to prevent credential leakage during execution. A password widget hides the value while it is typed, but the parameter is still persisted with the task's inputs and rendered into the event log; reading a shared credential from config means every user of the template acts as the same identity, losing attribution; and deleting the task afterwards does nothing about the log lines already streamed to the browser.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions#accessing-secrets",
    tags: ["Secret Masking","Secret Masking","Resilience And Operations"]
  },
  {
    id: "cncf-cba-441",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the Compliant Route the Easy One: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Publish a documentation page describing the standards and ask each team to apply them to new services." },
      { id: 'B', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." },
      { id: 'C', text: "Enforce the security standards with a CI policy check that fails any build missing the required configuration." },
      { id: 'D', text: "Offer a single template exposing every option as a parameter so that teams can assemble what they prefer, with sensible defaults preselected on each field." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default. Documentation depends on people finding and following it, and it drifts from what the platform actually supports; a CI gate catches non-compliance after the service has been written, which is late and adversarial where a template would have been free; and a template with every option exposed pushes the decisions back onto the developer, which is exactly what a golden path removes.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths","Golden Paths","Enterprise Portal"]
  },
  {
    id: "cncf-cba-442",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the Compliant Route the Easy One: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Enforce the security standards with a CI policy check that fails any build missing the required configuration." },
      { id: 'B', text: "Offer a single template exposing every option as a parameter so that teams can assemble what they prefer, with sensible defaults preselected on each field." },
      { id: 'C', text: "Publish a documentation page describing the standards and ask each team to apply them to new services." },
      { id: 'D', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default. Documentation depends on people finding and following it, and it drifts from what the platform actually supports; a CI gate catches non-compliance after the service has been written, which is late and adversarial where a template would have been free; and a template with every option exposed pushes the decisions back onto the developer, which is exactly what a golden path removes.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths","Golden Paths","High Scale Catalog"]
  },
  {
    id: "cncf-cba-443",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the Compliant Route the Easy One: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Offer a single template exposing every option as a parameter so that teams can assemble what they prefer, with sensible defaults preselected on each field." },
      { id: 'B', text: "Enforce the security standards with a CI policy check that fails any build missing the required configuration." },
      { id: 'C', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." },
      { id: 'D', text: "Publish a documentation page describing the standards and ask each team to apply them to new services." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default. Documentation depends on people finding and following it, and it drifts from what the platform actually supports; a CI gate catches non-compliance after the service has been written, which is late and adversarial where a template would have been free; and a template with every option exposed pushes the decisions back onto the developer, which is exactly what a golden path removes.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths","Golden Paths","Security And Governance"]
  },
  {
    id: "cncf-cba-444",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the Compliant Route the Easy One: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Publish a documentation page describing the standards and ask each team to apply them to new services." },
      { id: 'B', text: "Offer a single template exposing every option as a parameter so that teams can assemble what they prefer, with sensible defaults preselected on each field." },
      { id: 'C', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." },
      { id: 'D', text: "Enforce the security standards with a CI policy check that fails any build missing the required configuration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default. Documentation depends on people finding and following it, and it drifts from what the platform actually supports; a CI gate catches non-compliance after the service has been written, which is late and adversarial where a template would have been free; and a template with every option exposed pushes the decisions back onto the developer, which is exactly what a golden path removes.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths","Golden Paths","Developer Onboarding"]
  },
  {
    id: "cncf-cba-445",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Making the Compliant Route the Easy One: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to reduce cognitive load for new developers while ensuring every new service adheres to corporate security and CI/CD baselines.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Enforce the security standards with a CI policy check that fails any build missing the required configuration." },
      { id: 'B', text: "Publish a documentation page describing the standards and ask each team to apply them to new services." },
      { id: 'C', text: "Offer a single template exposing every option as a parameter so that teams can assemble what they prefer, with sensible defaults preselected on each field." },
      { id: 'D', text: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide curated 'Golden Path' templates that automatically scaffold container definitions, CI/CD pipelines, and security linters. Golden Path templates embody organizational best practices by providing pre-packaged, standardized starter kits. They embed security scans, linters, observability instrumentation, and CI/CD pipelines into every new project by default. Documentation depends on people finding and following it, and it drifts from what the platform actually supports; a CI gate catches non-compliance after the service has been written, which is late and adversarial where a template would have been free; and a template with every option exposed pushes the decisions back onto the developer, which is exactly what a golden path removes.",
    referenceUrl: "https://backstage.io/docs/overview/what-is-backstage#golden-paths",
    tags: ["Golden Paths","Golden Paths","Resilience And Operations"]
  },
  {
    id: "cncf-cba-446",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a New Page to the Portal: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Export the page component directly and import it into `App.tsx` without declaring a plugin at all." },
      { id: 'B', text: "Create the plugin with `createPlugin` but expose the page through `createComponentExtension`." },
      { id: 'C', text: "Mount the page as a `createCardExtension` on the entity page instead of as its own route." },
      { id: 'D', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling. A bare export renders but has no route ref, so other plugins cannot link to it and it is invisible to the app's routing configuration; `createComponentExtension` is the right wrapper for a component embedded inside another page and provides no mount point of its own; and a card extension is scoped to an entity rather than being a standalone destination.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins","Frontend Plugins","Enterprise Portal"]
  },
  {
    id: "cncf-cba-447",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a New Page to the Portal: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Mount the page as a `createCardExtension` on the entity page instead of as its own route." },
      { id: 'B', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'C', text: "Export the page component directly and import it into `App.tsx` without declaring a plugin at all." },
      { id: 'D', text: "Create the plugin with `createPlugin` but expose the page through `createComponentExtension`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling. A bare export renders but has no route ref, so other plugins cannot link to it and it is invisible to the app's routing configuration; `createComponentExtension` is the right wrapper for a component embedded inside another page and provides no mount point of its own; and a card extension is scoped to an entity rather than being a standalone destination.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins","Frontend Plugins","High Scale Catalog"]
  },
  {
    id: "cncf-cba-448",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a New Page to the Portal: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Mount the page as a `createCardExtension` on the entity page instead of as its own route." },
      { id: 'B', text: "Create the plugin with `createPlugin` but expose the page through `createComponentExtension`." },
      { id: 'C', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'D', text: "Export the page component directly and import it into `App.tsx` without declaring a plugin at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling. A bare export renders but has no route ref, so other plugins cannot link to it and it is invisible to the app's routing configuration; `createComponentExtension` is the right wrapper for a component embedded inside another page and provides no mount point of its own; and a card extension is scoped to an entity rather than being a standalone destination.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins","Frontend Plugins","Security And Governance"]
  },
  {
    id: "cncf-cba-449",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a New Page to the Portal: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Export the page component directly and import it into `App.tsx` without declaring a plugin at all." },
      { id: 'B', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'C', text: "Create the plugin with `createPlugin` but expose the page through `createComponentExtension`." },
      { id: 'D', text: "Mount the page as a `createCardExtension` on the entity page instead of as its own route." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling. A bare export renders but has no route ref, so other plugins cannot link to it and it is invisible to the app's routing configuration; `createComponentExtension` is the right wrapper for a component embedded inside another page and provides no mount point of its own; and a card extension is scoped to an entity rather than being a standalone destination.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins","Frontend Plugins","Developer Onboarding"]
  },
  {
    id: "cncf-cba-450",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a New Page to the Portal: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to build an independent custom dashboard plugin that can be installed into any enterprise Backstage deployment cleanly.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Create the plugin with `createPlugin` but expose the page through `createComponentExtension`." },
      { id: 'B', text: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`." },
      { id: 'C', text: "Mount the page as a `createCardExtension` on the entity page instead of as its own route." },
      { id: 'D', text: "Export the page component directly and import it into `App.tsx` without declaring a plugin at all." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a frontend plugin using `createPlugin` and expose routable pages using `createRoutableExtension`. Backstage frontend plugins are self-contained packages created with `createPlugin`. They expose components to the app shell using `createRoutableExtension` or `createComponentExtension`, allowing clean modular integration without tight coupling. A bare export renders but has no route ref, so other plugins cannot link to it and it is invisible to the app's routing configuration; `createComponentExtension` is the right wrapper for a component embedded inside another page and provides no mount point of its own; and a card extension is scoped to an entity rather than being a standalone destination.",
    referenceUrl: "https://backstage.io/docs/plugins/create-a-plugin",
    tags: ["Frontend Plugins","Frontend Plugins","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_18;
