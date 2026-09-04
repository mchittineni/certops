export const GITHUB_ACTIONS_QUESTIONS_12 = [
  {
    id: "gh-200-276",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Artifact Management to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Sharing build outputs and test reports between jobs using v4 artifact actions is under consideration.",
    options: [
      { id: 'A', text: "Store the binary on an external unauthenticated public web server." },
      { id: 'B', text: "Assume job workspaces persist across different runner virtual machines." },
      { id: 'C', text: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs." },
      { id: 'D', text: "Commit the compiled binary into the Git repository branch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management", "Workflow Artifacts", "Dr Failover"]
  },
  {
    id: "gh-200-277",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Artifact Management to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Sharing build outputs and test reports between jobs using v4 artifact actions is under consideration.",
    options: [
      { id: 'A', text: "Commit the compiled binary into the Git repository branch." },
      { id: 'B', text: "Assume job workspaces persist across different runner virtual machines." },
      { id: 'C', text: "Store the binary on an external unauthenticated public web server." },
      { id: 'D', text: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management", "Workflow Artifacts", "High Load Scale"]
  },
  {
    id: "gh-200-278",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Artifact Management to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Sharing build outputs and test reports between jobs using v4 artifact actions is under consideration.",
    options: [
      { id: 'A', text: "Store the binary on an external unauthenticated public web server." },
      { id: 'B', text: "Commit the compiled binary into the Git repository branch." },
      { id: 'C', text: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs." },
      { id: 'D', text: "Assume job workspaces persist across different runner virtual machines." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management", "Workflow Artifacts", "Security Compliance"]
  },
  {
    id: "gh-200-279",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Artifact Management to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Sharing build outputs and test reports between jobs using v4 artifact actions is under consideration.",
    options: [
      { id: 'A', text: "Assume job workspaces persist across different runner virtual machines." },
      { id: 'B', text: "Store the binary on an external unauthenticated public web server." },
      { id: 'C', text: "Commit the compiled binary into the Git repository branch." },
      { id: 'D', text: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management", "Workflow Artifacts", "Hybrid Migration"]
  },
  {
    id: "gh-200-280",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Artifact Management to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Sharing build outputs and test reports between jobs using v4 artifact actions is under consideration.",
    options: [
      { id: 'A', text: "Store the binary on an external unauthenticated public web server." },
      { id: 'B', text: "Assume job workspaces persist across different runner virtual machines." },
      { id: 'C', text: "Commit the compiled binary into the Git repository branch." },
      { id: 'D', text: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management", "Workflow Artifacts", "Resilience Failure"]
  },
  {
    id: "gh-200-281",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Dependency Caching with actions/cache: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Workflow Caching to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Speeding up workflow execution by caching npm, pip, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Run `npm install` without package lockfiles." },
      { id: 'B', text: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`." },
      { id: 'C', text: "Reinstall operating system packages on every run." },
      { id: 'D', text: "Store dependencies in Git LFS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching", "Dependency Caching", "Dr Failover"]
  },
  {
    id: "gh-200-282",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Dependency Caching with actions/cache: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Workflow Caching to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Speeding up workflow execution by caching npm, pip, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Store dependencies in Git LFS." },
      { id: 'B', text: "Reinstall operating system packages on every run." },
      { id: 'C', text: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`." },
      { id: 'D', text: "Run `npm install` without package lockfiles." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching", "Dependency Caching", "High Load Scale"]
  },
  {
    id: "gh-200-283",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Dependency Caching with actions/cache: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Workflow Caching to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Speeding up workflow execution by caching npm, pip, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Reinstall operating system packages on every run." },
      { id: 'B', text: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`." },
      { id: 'C', text: "Run `npm install` without package lockfiles." },
      { id: 'D', text: "Store dependencies in Git LFS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching", "Dependency Caching", "Security Compliance"]
  },
  {
    id: "gh-200-284",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Dependency Caching with actions/cache: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Workflow Caching to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Speeding up workflow execution by caching npm, pip, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Run `npm install` without package lockfiles." },
      { id: 'B', text: "Reinstall operating system packages on every run." },
      { id: 'C', text: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`." },
      { id: 'D', text: "Store dependencies in Git LFS." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching", "Dependency Caching", "Hybrid Migration"]
  },
  {
    id: "gh-200-285",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Dependency Caching with actions/cache: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Workflow Caching to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Speeding up workflow execution by caching npm, pip, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Store dependencies in Git LFS." },
      { id: 'B', text: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`." },
      { id: 'C', text: "Reinstall operating system packages on every run." },
      { id: 'D', text: "Run `npm install` without package lockfiles." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching", "Dependency Caching", "Resilience Failure"]
  },
  {
    id: "gh-200-286",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Manual Workflows to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Triggering workflows manually with typed inputs, choice dropdowns, and defaults is under consideration.",
    options: [
      { id: 'A', text: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults." },
      { id: 'B', text: "Instruct engineers to push empty commits to Git to trigger workflows." },
      { id: 'C', text: "Write a custom terminal script using raw SSH connections." },
      { id: 'D', text: "Hardcode parameters inside the workflow YAML file before every run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows", "workflow_dispatch", "Dr Failover"]
  },
  {
    id: "gh-200-287",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Manual Workflows to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Triggering workflows manually with typed inputs, choice dropdowns, and defaults is under consideration.",
    options: [
      { id: 'A', text: "Instruct engineers to push empty commits to Git to trigger workflows." },
      { id: 'B', text: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults." },
      { id: 'C', text: "Write a custom terminal script using raw SSH connections." },
      { id: 'D', text: "Hardcode parameters inside the workflow YAML file before every run." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows", "workflow_dispatch", "High Load Scale"]
  },
  {
    id: "gh-200-288",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Manual Workflows to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Triggering workflows manually with typed inputs, choice dropdowns, and defaults is under consideration.",
    options: [
      { id: 'A', text: "Instruct engineers to push empty commits to Git to trigger workflows." },
      { id: 'B', text: "Write a custom terminal script using raw SSH connections." },
      { id: 'C', text: "Hardcode parameters inside the workflow YAML file before every run." },
      { id: 'D', text: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows", "workflow_dispatch", "Security Compliance"]
  },
  {
    id: "gh-200-289",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Manual Workflows to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Triggering workflows manually with typed inputs, choice dropdowns, and defaults is under consideration.",
    options: [
      { id: 'A', text: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults." },
      { id: 'B', text: "Hardcode parameters inside the workflow YAML file before every run." },
      { id: 'C', text: "Instruct engineers to push empty commits to Git to trigger workflows." },
      { id: 'D', text: "Write a custom terminal script using raw SSH connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows", "workflow_dispatch", "Hybrid Migration"]
  },
  {
    id: "gh-200-290",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Manual Workflows to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Triggering workflows manually with typed inputs, choice dropdowns, and defaults is under consideration.",
    options: [
      { id: 'A', text: "Instruct engineers to push empty commits to Git to trigger workflows." },
      { id: 'B', text: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults." },
      { id: 'C', text: "Hardcode parameters inside the workflow YAML file before every run." },
      { id: 'D', text: "Write a custom terminal script using raw SSH connections." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows", "workflow_dispatch", "Resilience Failure"]
  },
  {
    id: "gh-200-291",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reusable Workflows (workflow_call): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Reusable Workflows to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Standardizing multi-job CI/CD workflows across repositories with workflow_call is under consideration.",
    options: [
      { id: 'A', text: "Use composite actions for multi-job orchestration." },
      { id: 'B', text: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`." },
      { id: 'C', text: "Copy-paste 400 lines of workflow YAML into 50 repositories." },
      { id: 'D', text: "Write a custom shell script that calls the GitHub API sequentially." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable Workflows", "Dr Failover"]
  },
  {
    id: "gh-200-292",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reusable Workflows (workflow_call): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Reusable Workflows to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Standardizing multi-job CI/CD workflows across repositories with workflow_call is under consideration.",
    options: [
      { id: 'A', text: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`." },
      { id: 'B', text: "Copy-paste 400 lines of workflow YAML into 50 repositories." },
      { id: 'C', text: "Use composite actions for multi-job orchestration." },
      { id: 'D', text: "Write a custom shell script that calls the GitHub API sequentially." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable Workflows", "High Load Scale"]
  },
  {
    id: "gh-200-293",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reusable Workflows (workflow_call): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Reusable Workflows to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Standardizing multi-job CI/CD workflows across repositories with workflow_call is under consideration.",
    options: [
      { id: 'A', text: "Use composite actions for multi-job orchestration." },
      { id: 'B', text: "Write a custom shell script that calls the GitHub API sequentially." },
      { id: 'C', text: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`." },
      { id: 'D', text: "Copy-paste 400 lines of workflow YAML into 50 repositories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable Workflows", "Security Compliance"]
  },
  {
    id: "gh-200-294",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reusable Workflows (workflow_call): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Reusable Workflows to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Standardizing multi-job CI/CD workflows across repositories with workflow_call is under consideration.",
    options: [
      { id: 'A', text: "Use composite actions for multi-job orchestration." },
      { id: 'B', text: "Copy-paste 400 lines of workflow YAML into 50 repositories." },
      { id: 'C', text: "Write a custom shell script that calls the GitHub API sequentially." },
      { id: 'D', text: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable Workflows", "Hybrid Migration"]
  },
  {
    id: "gh-200-295",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reusable Workflows (workflow_call): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Reusable Workflows to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Standardizing multi-job CI/CD workflows across repositories with workflow_call is under consideration.",
    options: [
      { id: 'A', text: "Write a custom shell script that calls the GitHub API sequentially." },
      { id: 'B', text: "Copy-paste 400 lines of workflow YAML into 50 repositories." },
      { id: 'C', text: "Use composite actions for multi-job orchestration." },
      { id: 'D', text: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable Workflows", "Resilience Failure"]
  },
  {
    id: "gh-200-296",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Environment Secrets and Protection Rules: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Environments to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Restricting deployments to protected environments with required reviewers and wait timers is under consideration.",
    options: [
      { id: 'A', text: "Put a `sleep 900` command inside the deployment bash script." },
      { id: 'B', text: "Delete the production branch protection rules." },
      { id: 'C', text: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings." },
      { id: 'D', text: "Rely on developers verbally confirming approval in chat." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments", "Environments", "Dr Failover"]
  },
  {
    id: "gh-200-297",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Environment Secrets and Protection Rules: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Environments to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Restricting deployments to protected environments with required reviewers and wait timers is under consideration.",
    options: [
      { id: 'A', text: "Delete the production branch protection rules." },
      { id: 'B', text: "Put a `sleep 900` command inside the deployment bash script." },
      { id: 'C', text: "Rely on developers verbally confirming approval in chat." },
      { id: 'D', text: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments", "Environments", "High Load Scale"]
  },
  {
    id: "gh-200-298",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Environment Secrets and Protection Rules: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Environments to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Restricting deployments to protected environments with required reviewers and wait timers is under consideration.",
    options: [
      { id: 'A', text: "Put a `sleep 900` command inside the deployment bash script." },
      { id: 'B', text: "Delete the production branch protection rules." },
      { id: 'C', text: "Rely on developers verbally confirming approval in chat." },
      { id: 'D', text: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments", "Environments", "Security Compliance"]
  },
  {
    id: "gh-200-299",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Environment Secrets and Protection Rules: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Environments to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Restricting deployments to protected environments with required reviewers and wait timers is under consideration.",
    options: [
      { id: 'A', text: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings." },
      { id: 'B', text: "Put a `sleep 900` command inside the deployment bash script." },
      { id: 'C', text: "Delete the production branch protection rules." },
      { id: 'D', text: "Rely on developers verbally confirming approval in chat." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments", "Environments", "Hybrid Migration"]
  },
  {
    id: "gh-200-300",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Environment Secrets and Protection Rules: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Environments to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Restricting deployments to protected environments with required reviewers and wait timers is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers verbally confirming approval in chat." },
      { id: 'B', text: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings." },
      { id: 'C', text: "Delete the production branch protection rules." },
      { id: 'D', text: "Put a `sleep 900` command inside the deployment bash script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments", "Environments", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_12;
