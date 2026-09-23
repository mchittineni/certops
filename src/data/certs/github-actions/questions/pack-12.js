export const GITHUB_ACTIONS_QUESTIONS_12 = [
  {
    id: "gh-200-276",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Use `actions/upload-artifact` in the build job and `download-artifact` downstream." },
      { id: 'B', text: "Commit the compiled binary to the repository so later jobs check it out." },
      { id: 'C', text: "Use `actions/cache` keyed on the commit SHA to carry the build output across the jobs." },
      { id: 'D', text: "Rely on the workspace persisting, since the jobs share the same runner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management","Workflow Artifacts","Dr Failover"]
  },
  {
    id: "gh-200-277",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Rely on the workspace persisting, since the jobs share the same runner." },
      { id: 'B', text: "Use `actions/upload-artifact` in the build job and `download-artifact` downstream." },
      { id: 'C', text: "Use `actions/cache` keyed on the commit SHA to carry the build output across the jobs." },
      { id: 'D', text: "Commit the compiled binary to the repository so later jobs check it out." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management","Workflow Artifacts","High Load Scale"]
  },
  {
    id: "gh-200-278",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Use `actions/upload-artifact` in the build job and `download-artifact` downstream." },
      { id: 'B', text: "Commit the compiled binary to the repository so later jobs check it out." },
      { id: 'C', text: "Use `actions/cache` keyed on the commit SHA to carry the build output across the jobs." },
      { id: 'D', text: "Rely on the workspace persisting, since the jobs share the same runner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management","Workflow Artifacts","Security Compliance"]
  },
  {
    id: "gh-200-279",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `actions/upload-artifact` in the build job and `download-artifact` downstream." },
      { id: 'B', text: "Commit the compiled binary to the repository so later jobs check it out." },
      { id: 'C', text: "Use `actions/cache` keyed on the commit SHA to carry the build output across the jobs." },
      { id: 'D', text: "Rely on the workspace persisting, since the jobs share the same runner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management","Workflow Artifacts","Hybrid Migration"]
  },
  {
    id: "gh-200-280",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Artifacts: actions/upload-artifact and download-artifact: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to compile an application binary in a build job and pass it to a separate security scanning job and deployment job.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Commit the compiled binary to the repository so later jobs check it out." },
      { id: 'B', text: "Use `actions/upload-artifact` in the build job and `download-artifact` downstream." },
      { id: 'C', text: "Rely on the workspace persisting, since the jobs share the same runner." },
      { id: 'D', text: "Use `actions/cache` keyed on the commit SHA to carry the build output across the jobs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `actions/upload-artifact@v4` in the build job and `actions/download-artifact@v4` in consuming jobs. Each job in a workflow runs on an isolated virtual machine or container. Artifact actions (`actions/upload-artifact` and `actions/download-artifact`) upload files to GitHub storage and download them into downstream jobs, preserving build integrity across distributed runner instances.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["Artifact Management","Workflow Artifacts","Resilience Failure"]
  },
  {
    id: "gh-200-281",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dependency Caching with actions/cache: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Use `actions/cache@v4` with a `key` built from the run number so that each run differs." },
      { id: 'B', text: "Use `npm install` without a lockfile so the newest compatible versions resolve." },
      { id: 'C', text: "Commit the dependency directory to the repository through Git LFS instead." },
      { id: 'D', text: "Use `actions/cache@v4` with a `key` built from `hashFiles('**/package-lock.json')`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching","Dependency Caching","Dr Failover"]
  },
  {
    id: "gh-200-282",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dependency Caching with actions/cache: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Use `actions/cache@v4` with a `key` built from the run number so that each run differs." },
      { id: 'B', text: "Use `npm install` without a lockfile so the newest compatible versions resolve." },
      { id: 'C', text: "Commit the dependency directory to the repository through Git LFS instead." },
      { id: 'D', text: "Use `actions/cache@v4` with a `key` built from `hashFiles('**/package-lock.json')`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching","Dependency Caching","High Load Scale"]
  },
  {
    id: "gh-200-283",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dependency Caching with actions/cache: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Commit the dependency directory to the repository through Git LFS instead." },
      { id: 'B', text: "Use `actions/cache@v4` with a `key` built from the run number so that each run differs." },
      { id: 'C', text: "Use `npm install` without a lockfile so the newest compatible versions resolve." },
      { id: 'D', text: "Use `actions/cache@v4` with a `key` built from `hashFiles('**/package-lock.json')`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching","Dependency Caching","Security Compliance"]
  },
  {
    id: "gh-200-284",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dependency Caching with actions/cache: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `actions/cache@v4` with a `key` built from `hashFiles('**/package-lock.json')`." },
      { id: 'B', text: "Commit the dependency directory to the repository through Git LFS instead." },
      { id: 'C', text: "Use `npm install` without a lockfile so the newest compatible versions resolve." },
      { id: 'D', text: "Use `actions/cache@v4` with a `key` built from the run number so that each run differs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching","Dependency Caching","Hybrid Migration"]
  },
  {
    id: "gh-200-285",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dependency Caching with actions/cache: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to reduce workflow execution duration by avoiding re-downloading thousands of npm packages on every single commit.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Use `actions/cache@v4` with a `key` built from `hashFiles('**/package-lock.json')`." },
      { id: 'B', text: "Commit the dependency directory to the repository through Git LFS instead." },
      { id: 'C', text: "Use `npm install` without a lockfile so the newest compatible versions resolve." },
      { id: 'D', text: "Use `actions/cache@v4` with a `key` built from the run number so that each run differs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/cache@v4` specifying a cache `path` and a `key` based on `hashFiles('**/package-lock.json')`. `actions/cache` preserves dependencies and build outputs across workflow runs. By hashing package lockfiles (e.g., `hashFiles('**/package-lock.json')`) as the cache key, the action restores cached packages in seconds if dependencies have not changed, reducing build times by 70%+.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["Workflow Caching","Dependency Caching","Resilience Failure"]
  },
  {
    id: "gh-200-286",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Use `on: workflow_dispatch` with typed `inputs:` and defaults." },
      { id: 'B', text: "Use `on: repository_dispatch` with a payload posted by the engineer." },
      { id: 'C', text: "Use `on: push` and have the engineer edit the parameters in the file." },
      { id: 'D', text: "Use `on: schedule` and have the engineer wait for the next window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows","workflow_dispatch","Dr Failover"]
  },
  {
    id: "gh-200-287",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Use `on: workflow_dispatch` with typed `inputs:` and defaults." },
      { id: 'B', text: "Use `on: repository_dispatch` with a payload posted by the engineer." },
      { id: 'C', text: "Use `on: push` and have the engineer edit the parameters in the file." },
      { id: 'D', text: "Use `on: schedule` and have the engineer wait for the next window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows","workflow_dispatch","High Load Scale"]
  },
  {
    id: "gh-200-288",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Use `on: schedule` and have the engineer wait for the next window." },
      { id: 'B', text: "Use `on: workflow_dispatch` with typed `inputs:` and defaults." },
      { id: 'C', text: "Use `on: push` and have the engineer edit the parameters in the file." },
      { id: 'D', text: "Use `on: repository_dispatch` with a payload posted by the engineer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows","workflow_dispatch","Security Compliance"]
  },
  {
    id: "gh-200-289",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `on: workflow_dispatch` with typed `inputs:` and defaults." },
      { id: 'B', text: "Use `on: repository_dispatch` with a payload posted by the engineer." },
      { id: 'C', text: "Use `on: push` and have the engineer edit the parameters in the file." },
      { id: 'D', text: "Use `on: schedule` and have the engineer wait for the next window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows","workflow_dispatch","Hybrid Migration"]
  },
  {
    id: "gh-200-290",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Dispatch and Inputs (workflow_dispatch): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to allow operations engineers to trigger an on-demand deployment workflow manually via the GitHub UI with environment and debug parameters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Use `on: workflow_dispatch` with typed `inputs:` and defaults." },
      { id: 'B', text: "Use `on: repository_dispatch` with a payload posted by the engineer." },
      { id: 'C', text: "Use `on: push` and have the engineer edit the parameters in the file." },
      { id: 'D', text: "Use `on: schedule` and have the engineer wait for the next window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `on: workflow_dispatch:` with `inputs:` defining types (`choice`, `string`, `boolean`), descriptions, and defaults. `workflow_dispatch` enables manual workflow triggers from the GitHub web interface, GitHub CLI (`gh workflow run`), or REST API. Defining typed `inputs` (such as environment dropdowns or boolean flags) allows parameterized, on-demand operational executions with input validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatch",
    tags: ["Manual Workflows","workflow_dispatch","Resilience Failure"]
  },
  {
    id: "gh-200-291",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Reusable Workflows (workflow_call): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Author a composite action holding the steps and call it from each job." },
      { id: 'B', text: "Author a starter workflow template in the organization's own `.github` repository." },
      { id: 'C', text: "Author a reusable workflow with `on: workflow_call` and call it with `uses:`." },
      { id: 'D', text: "Author a script that syncs the same workflow file into each repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows","Reusable Workflows","Dr Failover"]
  },
  {
    id: "gh-200-292",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Reusable Workflows (workflow_call): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Author a reusable workflow with `on: workflow_call` and call it with `uses:`." },
      { id: 'B', text: "Author a script that syncs the same workflow file into each repository." },
      { id: 'C', text: "Author a composite action holding the steps and call it from each job." },
      { id: 'D', text: "Author a starter workflow template in the organization's own `.github` repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows","Reusable Workflows","High Load Scale"]
  },
  {
    id: "gh-200-293",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Reusable Workflows (workflow_call): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Author a script that syncs the same workflow file into each repository." },
      { id: 'B', text: "Author a reusable workflow with `on: workflow_call` and call it with `uses:`." },
      { id: 'C', text: "Author a starter workflow template in the organization's own `.github` repository." },
      { id: 'D', text: "Author a composite action holding the steps and call it from each job." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows","Reusable Workflows","Security Compliance"]
  },
  {
    id: "gh-200-294",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Reusable Workflows (workflow_call): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Author a reusable workflow with `on: workflow_call` and call it with `uses:`." },
      { id: 'B', text: "Author a script that syncs the same workflow file into each repository." },
      { id: 'C', text: "Author a composite action holding the steps and call it from each job." },
      { id: 'D', text: "Author a starter workflow template in the organization's own `.github` repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows","Reusable Workflows","Hybrid Migration"]
  },
  {
    id: "gh-200-295",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Reusable Workflows (workflow_call): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to standardize a multi-job build, test, and container push workflow across 50 enterprise repositories without code duplication.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Author a starter workflow template in the organization's own `.github` repository." },
      { id: 'B', text: "Author a script that syncs the same workflow file into each repository." },
      { id: 'C', text: "Author a reusable workflow with `on: workflow_call` and call it with `uses:`." },
      { id: 'D', text: "Author a composite action holding the steps and call it from each job." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a reusable workflow in a central repository with `on: workflow_call:` and invoke it using `uses: org/repo/.github/workflows/reusable.yml@v1`. Reusable workflows (`workflow_call`) allow central engineering teams to define standardized, multi-job workflows that can be invoked from other repositories. Unlike composite actions (which only group steps inside a single job), reusable workflows orchestrate entire multi-job pipelines.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["Reusable Workflows","Reusable Workflows","Resilience Failure"]
  },
  {
    id: "gh-200-296",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Environment Secrets and Protection Rules: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Target an `environment: production` and add a branch protection rule on the release branch." },
      { id: 'B', text: "Target an `environment: production` and set required reviewers and a wait timer on it." },
      { id: 'C', text: "Add a `workflow_dispatch` input that a release manager sets before the deploy runs." },
      { id: 'D', text: "Add a manual `if:` condition on the job that checks the actor against a list." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments","Environments","Dr Failover"]
  },
  {
    id: "gh-200-297",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Environment Secrets and Protection Rules: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Add a manual `if:` condition on the job that checks the actor against a list." },
      { id: 'B', text: "Add a `workflow_dispatch` input that a release manager sets before the deploy runs." },
      { id: 'C', text: "Target an `environment: production` and set required reviewers and a wait timer on it." },
      { id: 'D', text: "Target an `environment: production` and add a branch protection rule on the release branch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments","Environments","High Load Scale"]
  },
  {
    id: "gh-200-298",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Environment Secrets and Protection Rules: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Target an `environment: production` and add a branch protection rule on the release branch." },
      { id: 'B', text: "Add a manual `if:` condition on the job that checks the actor against a list." },
      { id: 'C', text: "Target an `environment: production` and set required reviewers and a wait timer on it." },
      { id: 'D', text: "Add a `workflow_dispatch` input that a release manager sets before the deploy runs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments","Environments","Security Compliance"]
  },
  {
    id: "gh-200-299",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Environment Secrets and Protection Rules: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Target an `environment: production` and set required reviewers and a wait timer on it." },
      { id: 'B', text: "Add a `workflow_dispatch` input that a release manager sets before the deploy runs." },
      { id: 'C', text: "Target an `environment: production` and add a branch protection rule on the release branch." },
      { id: 'D', text: "Add a manual `if:` condition on the job that checks the actor against a list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments","Environments","Hybrid Migration"]
  },
  {
    id: "gh-200-300",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Environment Secrets and Protection Rules: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to prevent production deployments from executing until a senior security engineer approves and an automated 15-minute wait timer expires.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Add a `workflow_dispatch` input that a release manager sets before the deploy runs." },
      { id: 'B', text: "Add a manual `if:` condition on the job that checks the actor against a list." },
      { id: 'C', text: "Target an `environment: production` and add a branch protection rule on the release branch." },
      { id: 'D', text: "Target an `environment: production` and set required reviewers and a wait timer on it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Target an `environment: production` in the job, and configure Required Reviewers and Wait Timer in repository environment settings. GitHub Actions Environments represent deployment targets (e.g., `production`, `staging`). Configuring environment protection rules enforces manual approval gates from specific users/teams, deployment branch restrictions, and wait timers before environment secrets are decrypted.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["Environments","Environments","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_12;
