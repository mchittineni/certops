export const GITHUB_ACTIONS_QUESTIONS_11 = [
  {
    id: "gh-200-251",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Triggers: push, pull_request, and schedule: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to configure a GitHub Actions CI workflow to run only when commits are pushed to the `main` branch or when pull requests modifying files in the `src/` directory are opened.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Declare `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']`." },
      { id: 'B', text: "Declare `on: [push, pull_request]` with no branch or path filters at all." },
      { id: 'C', text: "Declare `on: schedule` at the shortest available interval and check for new commits." },
      { id: 'D', text: "Declare `on: workflow_dispatch` only, and have engineers start each run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']` in the workflow YAML. GitHub Actions workflows support event triggers defined under the `on:` key. Configuring `branches` and `paths` filters ensures that workflows only execute for relevant code modifications, preventing wasteful runner usage for documentation changes or non-target branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on",
    tags: ["Workflow Triggers","Workflow Triggers","Dr Failover"]
  },
  {
    id: "gh-200-252",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Triggers: push, pull_request, and schedule: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to configure a GitHub Actions CI workflow to run only when commits are pushed to the `main` branch or when pull requests modifying files in the `src/` directory are opened.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Declare `on: [push, pull_request]` with no branch or path filters at all." },
      { id: 'B', text: "Declare `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']`." },
      { id: 'C', text: "Declare `on: workflow_dispatch` only, and have engineers start each run." },
      { id: 'D', text: "Declare `on: schedule` at the shortest available interval and check for new commits." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']` in the workflow YAML. GitHub Actions workflows support event triggers defined under the `on:` key. Configuring `branches` and `paths` filters ensures that workflows only execute for relevant code modifications, preventing wasteful runner usage for documentation changes or non-target branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on",
    tags: ["Workflow Triggers","Workflow Triggers","High Load Scale"]
  },
  {
    id: "gh-200-253",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Triggers: push, pull_request, and schedule: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to configure a GitHub Actions CI workflow to run only when commits are pushed to the `main` branch or when pull requests modifying files in the `src/` directory are opened.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Declare `on: schedule` at the shortest available interval and check for new commits." },
      { id: 'B', text: "Declare `on: workflow_dispatch` only, and have engineers start each run." },
      { id: 'C', text: "Declare `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']`." },
      { id: 'D', text: "Declare `on: [push, pull_request]` with no branch or path filters at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']` in the workflow YAML. GitHub Actions workflows support event triggers defined under the `on:` key. Configuring `branches` and `paths` filters ensures that workflows only execute for relevant code modifications, preventing wasteful runner usage for documentation changes or non-target branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on",
    tags: ["Workflow Triggers","Workflow Triggers","Security Compliance"]
  },
  {
    id: "gh-200-254",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Triggers: push, pull_request, and schedule: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to configure a GitHub Actions CI workflow to run only when commits are pushed to the `main` branch or when pull requests modifying files in the `src/` directory are opened.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Declare `on: [push, pull_request]` with no branch or path filters at all." },
      { id: 'B', text: "Declare `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']`." },
      { id: 'C', text: "Declare `on: workflow_dispatch` only, and have engineers start each run." },
      { id: 'D', text: "Declare `on: schedule` at the shortest available interval and check for new commits." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']` in the workflow YAML. GitHub Actions workflows support event triggers defined under the `on:` key. Configuring `branches` and `paths` filters ensures that workflows only execute for relevant code modifications, preventing wasteful runner usage for documentation changes or non-target branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on",
    tags: ["Workflow Triggers","Workflow Triggers","Hybrid Migration"]
  },
  {
    id: "gh-200-255",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Workflow Triggers: push, pull_request, and schedule: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to configure a GitHub Actions CI workflow to run only when commits are pushed to the `main` branch or when pull requests modifying files in the `src/` directory are opened.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Declare `on: workflow_dispatch` only, and have engineers start each run." },
      { id: 'B', text: "Declare `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']`." },
      { id: 'C', text: "Declare `on: schedule` at the shortest available interval and check for new commits." },
      { id: 'D', text: "Declare `on: [push, pull_request]` with no branch or path filters at all." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `on: push: branches: [main]` and `on: pull_request: paths: ['src/**']` in the workflow YAML. GitHub Actions workflows support event triggers defined under the `on:` key. Configuring `branches` and `paths` filters ensures that workflows only execute for relevant code modifications, preventing wasteful runner usage for documentation changes or non-target branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on",
    tags: ["Workflow Triggers","Workflow Triggers","Resilience Failure"]
  },
  {
    id: "gh-200-256",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Concurrency Control and cancel-in-progress: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to prevent redundant CI runs from consuming runner capacity when a developer pushes several commits in rapid succession to the same pull request branch.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Add a `concurrency` block keyed on workflow and ref with `cancel-in-progress: true`." },
      { id: 'B', text: "Add `strategy: fail-fast: true` so that the whole matrix stops on the first failing leg." },
      { id: 'C', text: "Add `timeout-minutes: 5` to the build steps so a superseded run ends quickly." },
      { id: 'D', text: "Add a `workflow_dispatch` trigger so runs are started only when wanted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `concurrency` block with `group: ${{ github.workflow }}-${{ github.ref }}` and `cancel-in-progress: true`. A `concurrency` group ensures that only one workflow run or job using the same concurrency key runs at a time. Setting `cancel-in-progress: true` terminates any active in-flight run for that branch when a new commit is pushed, freeing up runner slots immediately.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["Concurrency Management","Concurrency Control","Dr Failover"]
  },
  {
    id: "gh-200-257",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Concurrency Control and cancel-in-progress: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to prevent redundant CI runs from consuming runner capacity when a developer pushes several commits in rapid succession to the same pull request branch.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Add a `concurrency` block keyed on workflow and ref with `cancel-in-progress: true`." },
      { id: 'B', text: "Add `timeout-minutes: 5` to the build steps so a superseded run ends quickly." },
      { id: 'C', text: "Add a `workflow_dispatch` trigger so runs are started only when wanted." },
      { id: 'D', text: "Add `strategy: fail-fast: true` so that the whole matrix stops on the first failing leg." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `concurrency` block with `group: ${{ github.workflow }}-${{ github.ref }}` and `cancel-in-progress: true`. A `concurrency` group ensures that only one workflow run or job using the same concurrency key runs at a time. Setting `cancel-in-progress: true` terminates any active in-flight run for that branch when a new commit is pushed, freeing up runner slots immediately.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["Concurrency Management","Concurrency Control","High Load Scale"]
  },
  {
    id: "gh-200-258",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Concurrency Control and cancel-in-progress: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to prevent redundant CI runs from consuming runner capacity when a developer pushes several commits in rapid succession to the same pull request branch.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Add `timeout-minutes: 5` to the build steps so a superseded run ends quickly." },
      { id: 'B', text: "Add a `workflow_dispatch` trigger so runs are started only when wanted." },
      { id: 'C', text: "Add a `concurrency` block keyed on workflow and ref with `cancel-in-progress: true`." },
      { id: 'D', text: "Add `strategy: fail-fast: true` so that the whole matrix stops on the first failing leg." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a `concurrency` block with `group: ${{ github.workflow }}-${{ github.ref }}` and `cancel-in-progress: true`. A `concurrency` group ensures that only one workflow run or job using the same concurrency key runs at a time. Setting `cancel-in-progress: true` terminates any active in-flight run for that branch when a new commit is pushed, freeing up runner slots immediately.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["Concurrency Management","Concurrency Control","Security Compliance"]
  },
  {
    id: "gh-200-259",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Concurrency Control and cancel-in-progress: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to prevent redundant CI runs from consuming runner capacity when a developer pushes several commits in rapid succession to the same pull request branch.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Add a `concurrency` block keyed on workflow and ref with `cancel-in-progress: true`." },
      { id: 'B', text: "Add `strategy: fail-fast: true` so that the whole matrix stops on the first failing leg." },
      { id: 'C', text: "Add `timeout-minutes: 5` to the build steps so a superseded run ends quickly." },
      { id: 'D', text: "Add a `workflow_dispatch` trigger so runs are started only when wanted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `concurrency` block with `group: ${{ github.workflow }}-${{ github.ref }}` and `cancel-in-progress: true`. A `concurrency` group ensures that only one workflow run or job using the same concurrency key runs at a time. Setting `cancel-in-progress: true` terminates any active in-flight run for that branch when a new commit is pushed, freeing up runner slots immediately.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["Concurrency Management","Concurrency Control","Hybrid Migration"]
  },
  {
    id: "gh-200-260",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Concurrency Control and cancel-in-progress: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to prevent redundant CI runs from consuming runner capacity when a developer pushes several commits in rapid succession to the same pull request branch.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Add a `workflow_dispatch` trigger so runs are started only when wanted." },
      { id: 'B', text: "Add `timeout-minutes: 5` to the build steps so a superseded run ends quickly." },
      { id: 'C', text: "Add `strategy: fail-fast: true` so that the whole matrix stops on the first failing leg." },
      { id: 'D', text: "Add a `concurrency` block keyed on workflow and ref with `cancel-in-progress: true`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a `concurrency` block with `group: ${{ github.workflow }}-${{ github.ref }}` and `cancel-in-progress: true`. A `concurrency` group ensures that only one workflow run or job using the same concurrency key runs at a time. Setting `cancel-in-progress: true` terminates any active in-flight run for that branch when a new commit is pushed, freeing up runner slots immediately.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["Concurrency Management","Concurrency Control","Resilience Failure"]
  },
  {
    id: "gh-200-261",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Matrix Strategy with include, exclude, and fail-fast: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to test a library across Node.js 18, 20 on Ubuntu and Windows while preventing a failure in Node 18 from cancelling other running matrix jobs.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`." },
      { id: 'B', text: "Set `fail-fast: true` which aborts all sibling matrix jobs immediately upon any failure." },
      { id: 'C', text: "Write four completely independent workflow YAML files." },
      { id: 'D', text: "Run tests sequentially inside a single bash script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`. Matrix strategies dispatch parallel jobs across combinations of variables (e.g., operating systems, runtime versions). Setting `fail-fast: false` ensures that even if one matrix cell encounters an error, all other jobs continue to run to completion, providing complete cross-platform test visibility.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["Matrix Strategy","Matrix Strategy","Dr Failover"]
  },
  {
    id: "gh-200-262",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Matrix Strategy with include, exclude, and fail-fast: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to test a library across Node.js 18, 20 on Ubuntu and Windows while preventing a failure in Node 18 from cancelling other running matrix jobs.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Write four completely independent workflow YAML files." },
      { id: 'B', text: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`." },
      { id: 'C', text: "Set `fail-fast: true` which aborts all sibling matrix jobs immediately upon any failure." },
      { id: 'D', text: "Run tests sequentially inside a single bash script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`. Matrix strategies dispatch parallel jobs across combinations of variables (e.g., operating systems, runtime versions). Setting `fail-fast: false` ensures that even if one matrix cell encounters an error, all other jobs continue to run to completion, providing complete cross-platform test visibility.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["Matrix Strategy","Matrix Strategy","High Load Scale"]
  },
  {
    id: "gh-200-263",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Matrix Strategy with include, exclude, and fail-fast: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to test a library across Node.js 18, 20 on Ubuntu and Windows while preventing a failure in Node 18 from cancelling other running matrix jobs.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`." },
      { id: 'B', text: "Run tests sequentially inside a single bash script." },
      { id: 'C', text: "Set `fail-fast: true` which aborts all sibling matrix jobs immediately upon any failure." },
      { id: 'D', text: "Write four completely independent workflow YAML files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`. Matrix strategies dispatch parallel jobs across combinations of variables (e.g., operating systems, runtime versions). Setting `fail-fast: false` ensures that even if one matrix cell encounters an error, all other jobs continue to run to completion, providing complete cross-platform test visibility.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["Matrix Strategy","Matrix Strategy","Security Compliance"]
  },
  {
    id: "gh-200-264",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Matrix Strategy with include, exclude, and fail-fast: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to test a library across Node.js 18, 20 on Ubuntu and Windows while preventing a failure in Node 18 from cancelling other running matrix jobs.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Run tests sequentially inside a single bash script." },
      { id: 'B', text: "Write four completely independent workflow YAML files." },
      { id: 'C', text: "Set `fail-fast: true` which aborts all sibling matrix jobs immediately upon any failure." },
      { id: 'D', text: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`. Matrix strategies dispatch parallel jobs across combinations of variables (e.g., operating systems, runtime versions). Setting `fail-fast: false` ensures that even if one matrix cell encounters an error, all other jobs continue to run to completion, providing complete cross-platform test visibility.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["Matrix Strategy","Matrix Strategy","Hybrid Migration"]
  },
  {
    id: "gh-200-265",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Matrix Strategy with include, exclude, and fail-fast: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to test a library across Node.js 18, 20 on Ubuntu and Windows while preventing a failure in Node 18 from cancelling other running matrix jobs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Set `fail-fast: true` which aborts all sibling matrix jobs immediately upon any failure." },
      { id: 'B', text: "Run tests sequentially inside a single bash script." },
      { id: 'C', text: "Write four completely independent workflow YAML files." },
      { id: 'D', text: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `strategy: matrix:` with OS and Node arrays, and set `fail-fast: false`. Matrix strategies dispatch parallel jobs across combinations of variables (e.g., operating systems, runtime versions). Setting `fail-fast: false` ensures that even if one matrix cell encounters an error, all other jobs continue to run to completion, providing complete cross-platform test visibility.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["Matrix Strategy","Matrix Strategy","Resilience Failure"]
  },
  {
    id: "gh-200-266",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Dependencies and Execution Flow (needs:): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to ensure that an integration test job and a deployment job run only after a linting and build job have completed successfully.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Use a sleep command in the deployment job to wait for the build." },
      { id: 'B', text: "Rely on GitHub Actions' alphabetical job sorting to fix the execution order." },
      { id: 'C', text: "Put all commands into a single monolithic job without separation." },
      { id: 'D', text: "Add `needs: [lint, build]` to the test and deployment job specifications." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add `needs: [lint, build]` to the test and deployment job specifications. By default, jobs in a GitHub Actions workflow run in parallel. Specifying `needs: [job1, job2]` creates explicit dependency relationships, ensuring dependent jobs execute only after prerequisite jobs finish with a successful status.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs",
    tags: ["Job Dependencies","Job Dependencies","Dr Failover"]
  },
  {
    id: "gh-200-267",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Dependencies and Execution Flow (needs:): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to ensure that an integration test job and a deployment job run only after a linting and build job have completed successfully.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Rely on GitHub Actions' alphabetical job sorting to fix the execution order." },
      { id: 'B', text: "Use a sleep command in the deployment job to wait for the build." },
      { id: 'C', text: "Add `needs: [lint, build]` to the test and deployment job specifications." },
      { id: 'D', text: "Put all commands into a single monolithic job without separation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add `needs: [lint, build]` to the test and deployment job specifications. By default, jobs in a GitHub Actions workflow run in parallel. Specifying `needs: [job1, job2]` creates explicit dependency relationships, ensuring dependent jobs execute only after prerequisite jobs finish with a successful status.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs",
    tags: ["Job Dependencies","Job Dependencies","High Load Scale"]
  },
  {
    id: "gh-200-268",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Dependencies and Execution Flow (needs:): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to ensure that an integration test job and a deployment job run only after a linting and build job have completed successfully.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Use a sleep command in the deployment job to wait for the build." },
      { id: 'B', text: "Put all commands into a single monolithic job without separation." },
      { id: 'C', text: "Add `needs: [lint, build]` to the test and deployment job specifications." },
      { id: 'D', text: "Rely on GitHub Actions' alphabetical job sorting to fix the execution order." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add `needs: [lint, build]` to the test and deployment job specifications. By default, jobs in a GitHub Actions workflow run in parallel. Specifying `needs: [job1, job2]` creates explicit dependency relationships, ensuring dependent jobs execute only after prerequisite jobs finish with a successful status.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs",
    tags: ["Job Dependencies","Job Dependencies","Security Compliance"]
  },
  {
    id: "gh-200-269",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Dependencies and Execution Flow (needs:): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to ensure that an integration test job and a deployment job run only after a linting and build job have completed successfully.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Rely on GitHub Actions' alphabetical job sorting to fix the execution order." },
      { id: 'B', text: "Add `needs: [lint, build]` to the test and deployment job specifications." },
      { id: 'C', text: "Put all commands into a single monolithic job without separation." },
      { id: 'D', text: "Use a sleep command in the deployment job to wait for the build." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add `needs: [lint, build]` to the test and deployment job specifications. By default, jobs in a GitHub Actions workflow run in parallel. Specifying `needs: [job1, job2]` creates explicit dependency relationships, ensuring dependent jobs execute only after prerequisite jobs finish with a successful status.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs",
    tags: ["Job Dependencies","Job Dependencies","Hybrid Migration"]
  },
  {
    id: "gh-200-270",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Dependencies and Execution Flow (needs:): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to ensure that an integration test job and a deployment job run only after a linting and build job have completed successfully.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Add `needs: [lint, build]` to the test and deployment job specifications." },
      { id: 'B', text: "Put all commands into a single monolithic job without separation." },
      { id: 'C', text: "Rely on GitHub Actions' alphabetical job sorting to fix the execution order." },
      { id: 'D', text: "Use a sleep command in the deployment job to wait for the build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add `needs: [lint, build]` to the test and deployment job specifications. By default, jobs in a GitHub Actions workflow run in parallel. Specifying `needs: [job1, job2]` creates explicit dependency relationships, ensuring dependent jobs execute only after prerequisite jobs finish with a successful status.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs",
    tags: ["Job Dependencies","Job Dependencies","Resilience Failure"]
  },
  {
    id: "gh-200-271",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Conditional Execution and Status Check Functions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to send an incident notification to a team Slack channel or post a diagnostic report only when a previous test step fails.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Add `if: always()` so the notification step runs whatever the outcome." },
      { id: 'B', text: "Add `if: success()` so the notification runs when the tests have passed." },
      { id: 'C', text: "Add `continue-on-error: true` to the test step so the notification still runs." },
      { id: 'D', text: "Add `if: failure()` to the notification step so it runs when a step fails." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add `if: failure()` (or `if: always() && steps.test.outcome == 'failure'`) to the notification step. By default, steps do not execute if a prior step in the job fails. Using status check functions like `if: failure()`, `if: always()`, or `if: cancelled()` overrides default behavior, allowing diagnostic data gathering, cleanup tasks, or failure notifications to execute even after errors.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif",
    tags: ["Conditional Execution","Status Functions","Dr Failover"]
  },
  {
    id: "gh-200-272",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Conditional Execution and Status Check Functions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to send an incident notification to a team Slack channel or post a diagnostic report only when a previous test step fails.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Add `if: success()` so the notification runs when the tests have passed." },
      { id: 'B', text: "Add `if: always()` so the notification step runs whatever the outcome." },
      { id: 'C', text: "Add `if: failure()` to the notification step so it runs when a step fails." },
      { id: 'D', text: "Add `continue-on-error: true` to the test step so the notification still runs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add `if: failure()` (or `if: always() && steps.test.outcome == 'failure'`) to the notification step. By default, steps do not execute if a prior step in the job fails. Using status check functions like `if: failure()`, `if: always()`, or `if: cancelled()` overrides default behavior, allowing diagnostic data gathering, cleanup tasks, or failure notifications to execute even after errors.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif",
    tags: ["Conditional Execution","Status Functions","High Load Scale"]
  },
  {
    id: "gh-200-273",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Conditional Execution and Status Check Functions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to send an incident notification to a team Slack channel or post a diagnostic report only when a previous test step fails.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Add `if: always()` so the notification step runs whatever the outcome." },
      { id: 'B', text: "Add `if: success()` so the notification runs when the tests have passed." },
      { id: 'C', text: "Add `continue-on-error: true` to the test step so the notification still runs." },
      { id: 'D', text: "Add `if: failure()` to the notification step so it runs when a step fails." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add `if: failure()` (or `if: always() && steps.test.outcome == 'failure'`) to the notification step. By default, steps do not execute if a prior step in the job fails. Using status check functions like `if: failure()`, `if: always()`, or `if: cancelled()` overrides default behavior, allowing diagnostic data gathering, cleanup tasks, or failure notifications to execute even after errors.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif",
    tags: ["Conditional Execution","Status Functions","Security Compliance"]
  },
  {
    id: "gh-200-274",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Conditional Execution and Status Check Functions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to send an incident notification to a team Slack channel or post a diagnostic report only when a previous test step fails.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Add `if: success()` so the notification runs when the tests have passed." },
      { id: 'B', text: "Add `if: failure()` to the notification step so it runs when a step fails." },
      { id: 'C', text: "Add `continue-on-error: true` to the test step so the notification still runs." },
      { id: 'D', text: "Add `if: always()` so the notification step runs whatever the outcome." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add `if: failure()` (or `if: always() && steps.test.outcome == 'failure'`) to the notification step. By default, steps do not execute if a prior step in the job fails. Using status check functions like `if: failure()`, `if: always()`, or `if: cancelled()` overrides default behavior, allowing diagnostic data gathering, cleanup tasks, or failure notifications to execute even after errors.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif",
    tags: ["Conditional Execution","Status Functions","Hybrid Migration"]
  },
  {
    id: "gh-200-275",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Conditional Execution and Status Check Functions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to send an incident notification to a team Slack channel or post a diagnostic report only when a previous test step fails.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Add `if: failure()` to the notification step so it runs when a step fails." },
      { id: 'B', text: "Add `if: success()` so the notification runs when the tests have passed." },
      { id: 'C', text: "Add `if: always()` so the notification step runs whatever the outcome." },
      { id: 'D', text: "Add `continue-on-error: true` to the test step so the notification still runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add `if: failure()` (or `if: always() && steps.test.outcome == 'failure'`) to the notification step. By default, steps do not execute if a prior step in the job fails. Using status check functions like `if: failure()`, `if: always()`, or `if: cancelled()` overrides default behavior, allowing diagnostic data gathering, cleanup tasks, or failure notifications to execute even after errors.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif",
    tags: ["Conditional Execution","Status Functions","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_11;
