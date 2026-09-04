export const GITHUB_ACTIONS_QUESTIONS_14 = [
  {
    id: "gh-200-326",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Service Containers in GitHub Actions Workflows: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Service Containers to run end-to-end integration tests requiring an active Redis cache and PostgreSQL database without installing them on the host runner.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Spinning up Redis and PostgreSQL service containers linked to workflow jobs is under consideration.",
    options: [
      { id: 'A', text: "Connect to live production database instances over the public internet." },
      { id: 'B', text: "Install PostgreSQL and Redis from source on the runner host operating system in a script." },
      { id: 'C', text: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables." },
      { id: 'D', text: "Mock all database operations in memory." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables. Service containers in GitHub Actions provide disposable containerized dependencies (e.g., PostgreSQL, Redis, MySQL) linked to a workflow job. On container-based jobs or hosted runners, service containers are accessible via `localhost:&lt;port&gt;` or service name network hostnames.",
    referenceUrl: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
    tags: ["Service Containers", "Service Containers", "Dr Failover"]
  },
  {
    id: "gh-200-327",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Service Containers in GitHub Actions Workflows: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Service Containers to run end-to-end integration tests requiring an active Redis cache and PostgreSQL database without installing them on the host runner.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Spinning up Redis and PostgreSQL service containers linked to workflow jobs is under consideration.",
    options: [
      { id: 'A', text: "Connect to live production database instances over the public internet." },
      { id: 'B', text: "Install PostgreSQL and Redis from source on the runner host operating system in a script." },
      { id: 'C', text: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables." },
      { id: 'D', text: "Mock all database operations in memory." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables. Service containers in GitHub Actions provide disposable containerized dependencies (e.g., PostgreSQL, Redis, MySQL) linked to a workflow job. On container-based jobs or hosted runners, service containers are accessible via `localhost:&lt;port&gt;` or service name network hostnames.",
    referenceUrl: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
    tags: ["Service Containers", "Service Containers", "High Load Scale"]
  },
  {
    id: "gh-200-328",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Service Containers in GitHub Actions Workflows: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Service Containers to run end-to-end integration tests requiring an active Redis cache and PostgreSQL database without installing them on the host runner.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Spinning up Redis and PostgreSQL service containers linked to workflow jobs is under consideration.",
    options: [
      { id: 'A', text: "Connect to live production database instances over the public internet." },
      { id: 'B', text: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables." },
      { id: 'C', text: "Mock all database operations in memory." },
      { id: 'D', text: "Install PostgreSQL and Redis from source on the runner host operating system in a script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables. Service containers in GitHub Actions provide disposable containerized dependencies (e.g., PostgreSQL, Redis, MySQL) linked to a workflow job. On container-based jobs or hosted runners, service containers are accessible via `localhost:&lt;port&gt;` or service name network hostnames.",
    referenceUrl: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
    tags: ["Service Containers", "Service Containers", "Security Compliance"]
  },
  {
    id: "gh-200-329",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Service Containers in GitHub Actions Workflows: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Service Containers to run end-to-end integration tests requiring an active Redis cache and PostgreSQL database without installing them on the host runner.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Spinning up Redis and PostgreSQL service containers linked to workflow jobs is under consideration.",
    options: [
      { id: 'A', text: "Mock all database operations in memory." },
      { id: 'B', text: "Install PostgreSQL and Redis from source on the runner host operating system in a script." },
      { id: 'C', text: "Connect to live production database instances over the public internet." },
      { id: 'D', text: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables. Service containers in GitHub Actions provide disposable containerized dependencies (e.g., PostgreSQL, Redis, MySQL) linked to a workflow job. On container-based jobs or hosted runners, service containers are accessible via `localhost:&lt;port&gt;` or service name network hostnames.",
    referenceUrl: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
    tags: ["Service Containers", "Service Containers", "Hybrid Migration"]
  },
  {
    id: "gh-200-330",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Service Containers in GitHub Actions Workflows: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Service Containers to run end-to-end integration tests requiring an active Redis cache and PostgreSQL database without installing them on the host runner.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Spinning up Redis and PostgreSQL service containers linked to workflow jobs is under consideration.",
    options: [
      { id: 'A', text: "Connect to live production database instances over the public internet." },
      { id: 'B', text: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables." },
      { id: 'C', text: "Mock all database operations in memory." },
      { id: 'D', text: "Install PostgreSQL and Redis from source on the runner host operating system in a script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `services: redis: image: redis` and `postgres: image: postgres` at the job level with ports and environment variables. Service containers in GitHub Actions provide disposable containerized dependencies (e.g., PostgreSQL, Redis, MySQL) linked to a workflow job. On container-based jobs or hosted runners, service containers are accessible via `localhost:&lt;port&gt;` or service name network hostnames.",
    referenceUrl: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
    tags: ["Service Containers", "Service Containers", "Resilience Failure"]
  },
  {
    id: "gh-200-331",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Handling Workflow Failure and Continue-on-Error: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Error Tolerance to allow an experimental code linting step or optional test suite to fail without causing the overall workflow build to fail.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Configuring continue-on-error: true on experimental steps and matrix jobs is under consideration.",
    options: [
      { id: 'A', text: "Set exit code 0 manually in bash without reporting test results." },
      { id: 'B', text: "Set `continue-on-error: true` on the specific step or matrix configuration." },
      { id: 'C', text: "Disable error checking across the entire workflow." },
      { id: 'D', text: "Comment out the linting step completely." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `continue-on-error: true` on the specific step or matrix configuration. `continue-on-error: true` instructs GitHub Actions to treat step or job failures as warnings rather than hard failures. The step is marked with a failure icon, but the job status remains successful, allowing subsequent dependent steps and deployments to proceed.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error",
    tags: ["Error Tolerance", "continue-on-error", "Dr Failover"]
  },
  {
    id: "gh-200-332",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Handling Workflow Failure and Continue-on-Error: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Error Tolerance to allow an experimental code linting step or optional test suite to fail without causing the overall workflow build to fail.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Configuring continue-on-error: true on experimental steps and matrix jobs is under consideration.",
    options: [
      { id: 'A', text: "Comment out the linting step completely." },
      { id: 'B', text: "Set `continue-on-error: true` on the specific step or matrix configuration." },
      { id: 'C', text: "Disable error checking across the entire workflow." },
      { id: 'D', text: "Set exit code 0 manually in bash without reporting test results." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `continue-on-error: true` on the specific step or matrix configuration. `continue-on-error: true` instructs GitHub Actions to treat step or job failures as warnings rather than hard failures. The step is marked with a failure icon, but the job status remains successful, allowing subsequent dependent steps and deployments to proceed.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error",
    tags: ["Error Tolerance", "continue-on-error", "High Load Scale"]
  },
  {
    id: "gh-200-333",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Handling Workflow Failure and Continue-on-Error: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Error Tolerance to allow an experimental code linting step or optional test suite to fail without causing the overall workflow build to fail.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Configuring continue-on-error: true on experimental steps and matrix jobs is under consideration.",
    options: [
      { id: 'A', text: "Comment out the linting step completely." },
      { id: 'B', text: "Disable error checking across the entire workflow." },
      { id: 'C', text: "Set `continue-on-error: true` on the specific step or matrix configuration." },
      { id: 'D', text: "Set exit code 0 manually in bash without reporting test results." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `continue-on-error: true` on the specific step or matrix configuration. `continue-on-error: true` instructs GitHub Actions to treat step or job failures as warnings rather than hard failures. The step is marked with a failure icon, but the job status remains successful, allowing subsequent dependent steps and deployments to proceed.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error",
    tags: ["Error Tolerance", "continue-on-error", "Security Compliance"]
  },
  {
    id: "gh-200-334",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Handling Workflow Failure and Continue-on-Error: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Error Tolerance to allow an experimental code linting step or optional test suite to fail without causing the overall workflow build to fail.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Configuring continue-on-error: true on experimental steps and matrix jobs is under consideration.",
    options: [
      { id: 'A', text: "Set `continue-on-error: true` on the specific step or matrix configuration." },
      { id: 'B', text: "Disable error checking across the entire workflow." },
      { id: 'C', text: "Set exit code 0 manually in bash without reporting test results." },
      { id: 'D', text: "Comment out the linting step completely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `continue-on-error: true` on the specific step or matrix configuration. `continue-on-error: true` instructs GitHub Actions to treat step or job failures as warnings rather than hard failures. The step is marked with a failure icon, but the job status remains successful, allowing subsequent dependent steps and deployments to proceed.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error",
    tags: ["Error Tolerance", "continue-on-error", "Hybrid Migration"]
  },
  {
    id: "gh-200-335",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Handling Workflow Failure and Continue-on-Error: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Error Tolerance to allow an experimental code linting step or optional test suite to fail without causing the overall workflow build to fail.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Configuring continue-on-error: true on experimental steps and matrix jobs is under consideration.",
    options: [
      { id: 'A', text: "Set exit code 0 manually in bash without reporting test results." },
      { id: 'B', text: "Disable error checking across the entire workflow." },
      { id: 'C', text: "Comment out the linting step completely." },
      { id: 'D', text: "Set `continue-on-error: true` on the specific step or matrix configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `continue-on-error: true` on the specific step or matrix configuration. `continue-on-error: true` instructs GitHub Actions to treat step or job failures as warnings rather than hard failures. The step is marked with a failure icon, but the job status remains successful, allowing subsequent dependent steps and deployments to proceed.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error",
    tags: ["Error Tolerance", "continue-on-error", "Resilience Failure"]
  },
  {
    id: "gh-200-336",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Pull Request Target Event Security (pull_request_target): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Trigger Security to run automated labeling and comment workflows on pull requests from public repository forks with access to repository secrets.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Security differences between pull_request and pull_request_target for fork PRs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode secret tokens in pull request templates." },
      { id: 'B', text: "Check out the fork PR code and execute `npm run build` directly in `pull_request_target`." },
      { id: 'C', text: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR." },
      { id: 'D', text: "Use `on: pull_request` and grant read-write tokens to untrusted fork PRs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR. `pull_request_target` runs in the context of the base branch of the target repository and has access to repository secrets. However, checking out and running untrusted code from the pull request head branch inside `pull_request_target` allows malicious actors to steal repository secrets (PwnRequest).",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target",
    tags: ["Trigger Security", "pull_request_target", "Dr Failover"]
  },
  {
    id: "gh-200-337",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Pull Request Target Event Security (pull_request_target): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Trigger Security to run automated labeling and comment workflows on pull requests from public repository forks with access to repository secrets.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Security differences between pull_request and pull_request_target for fork PRs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode secret tokens in pull request templates." },
      { id: 'B', text: "Check out the fork PR code and execute `npm run build` directly in `pull_request_target`." },
      { id: 'C', text: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR." },
      { id: 'D', text: "Use `on: pull_request` and grant read-write tokens to untrusted fork PRs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR. `pull_request_target` runs in the context of the base branch of the target repository and has access to repository secrets. However, checking out and running untrusted code from the pull request head branch inside `pull_request_target` allows malicious actors to steal repository secrets (PwnRequest).",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target",
    tags: ["Trigger Security", "pull_request_target", "High Load Scale"]
  },
  {
    id: "gh-200-338",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Pull Request Target Event Security (pull_request_target): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Trigger Security to run automated labeling and comment workflows on pull requests from public repository forks with access to repository secrets.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Security differences between pull_request and pull_request_target for fork PRs is under consideration.",
    options: [
      { id: 'A', text: "Use `on: pull_request` and grant read-write tokens to untrusted fork PRs." },
      { id: 'B', text: "Hardcode secret tokens in pull request templates." },
      { id: 'C', text: "Check out the fork PR code and execute `npm run build` directly in `pull_request_target`." },
      { id: 'D', text: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR. `pull_request_target` runs in the context of the base branch of the target repository and has access to repository secrets. However, checking out and running untrusted code from the pull request head branch inside `pull_request_target` allows malicious actors to steal repository secrets (PwnRequest).",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target",
    tags: ["Trigger Security", "pull_request_target", "Security Compliance"]
  },
  {
    id: "gh-200-339",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Pull Request Target Event Security (pull_request_target): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Trigger Security to run automated labeling and comment workflows on pull requests from public repository forks with access to repository secrets.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Security differences between pull_request and pull_request_target for fork PRs is under consideration.",
    options: [
      { id: 'A', text: "Use `on: pull_request` and grant read-write tokens to untrusted fork PRs." },
      { id: 'B', text: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR." },
      { id: 'C', text: "Hardcode secret tokens in pull request templates." },
      { id: 'D', text: "Check out the fork PR code and execute `npm run build` directly in `pull_request_target`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR. `pull_request_target` runs in the context of the base branch of the target repository and has access to repository secrets. However, checking out and running untrusted code from the pull request head branch inside `pull_request_target` allows malicious actors to steal repository secrets (PwnRequest).",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target",
    tags: ["Trigger Security", "pull_request_target", "Hybrid Migration"]
  },
  {
    id: "gh-200-340",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Pull Request Target Event Security (pull_request_target): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Trigger Security to run automated labeling and comment workflows on pull requests from public repository forks with access to repository secrets.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Security differences between pull_request and pull_request_target for fork PRs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode secret tokens in pull request templates." },
      { id: 'B', text: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR." },
      { id: 'C', text: "Use `on: pull_request` and grant read-write tokens to untrusted fork PRs." },
      { id: 'D', text: "Check out the fork PR code and execute `npm run build` directly in `pull_request_target`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `on: pull_request_target` while avoiding checking out or executing untrusted code from the fork PR. `pull_request_target` runs in the context of the base branch of the target repository and has access to repository secrets. However, checking out and running untrusted code from the pull request head branch inside `pull_request_target` allows malicious actors to steal repository secrets (PwnRequest).",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target",
    tags: ["Trigger Security", "pull_request_target", "Resilience Failure"]
  },
  {
    id: "gh-200-341",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Path Filters and Ignore Rules (paths-ignore): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Path Filtering to prevent CI workflows from triggering when developers only update Markdown documentation files in the `docs/` folder.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Ignoring documentation changes using paths-ignore to save runner compute is under consideration.",
    options: [
      { id: 'A', text: "Run the workflow anyway and cancel it after 10 minutes." },
      { id: 'B', text: "Delete the docs folder from the Git repository." },
      { id: 'C', text: "Use Git commit message tags exclusively." },
      { id: 'D', text: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger. Using `paths-ignore` under workflow triggers excludes specific directory paths or file patterns from triggering workflow runs. If all modified files in a push match the `paths-ignore` pattern, the workflow is not dispatched, saving organization runner minutes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore",
    tags: ["Path Filtering", "paths-ignore", "Dr Failover"]
  },
  {
    id: "gh-200-342",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Path Filters and Ignore Rules (paths-ignore): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Path Filtering to prevent CI workflows from triggering when developers only update Markdown documentation files in the `docs/` folder.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Ignoring documentation changes using paths-ignore to save runner compute is under consideration.",
    options: [
      { id: 'A', text: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger." },
      { id: 'B', text: "Run the workflow anyway and cancel it after 10 minutes." },
      { id: 'C', text: "Delete the docs folder from the Git repository." },
      { id: 'D', text: "Use Git commit message tags exclusively." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger. Using `paths-ignore` under workflow triggers excludes specific directory paths or file patterns from triggering workflow runs. If all modified files in a push match the `paths-ignore` pattern, the workflow is not dispatched, saving organization runner minutes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore",
    tags: ["Path Filtering", "paths-ignore", "High Load Scale"]
  },
  {
    id: "gh-200-343",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Path Filters and Ignore Rules (paths-ignore): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Path Filtering to prevent CI workflows from triggering when developers only update Markdown documentation files in the `docs/` folder.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Ignoring documentation changes using paths-ignore to save runner compute is under consideration.",
    options: [
      { id: 'A', text: "Run the workflow anyway and cancel it after 10 minutes." },
      { id: 'B', text: "Use Git commit message tags exclusively." },
      { id: 'C', text: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger." },
      { id: 'D', text: "Delete the docs folder from the Git repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger. Using `paths-ignore` under workflow triggers excludes specific directory paths or file patterns from triggering workflow runs. If all modified files in a push match the `paths-ignore` pattern, the workflow is not dispatched, saving organization runner minutes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore",
    tags: ["Path Filtering", "paths-ignore", "Security Compliance"]
  },
  {
    id: "gh-200-344",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Path Filters and Ignore Rules (paths-ignore): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Path Filtering to prevent CI workflows from triggering when developers only update Markdown documentation files in the `docs/` folder.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Ignoring documentation changes using paths-ignore to save runner compute is under consideration.",
    options: [
      { id: 'A', text: "Run the workflow anyway and cancel it after 10 minutes." },
      { id: 'B', text: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger." },
      { id: 'C', text: "Use Git commit message tags exclusively." },
      { id: 'D', text: "Delete the docs folder from the Git repository." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger. Using `paths-ignore` under workflow triggers excludes specific directory paths or file patterns from triggering workflow runs. If all modified files in a push match the `paths-ignore` pattern, the workflow is not dispatched, saving organization runner minutes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore",
    tags: ["Path Filtering", "paths-ignore", "Hybrid Migration"]
  },
  {
    id: "gh-200-345",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Workflow Path Filters and Ignore Rules (paths-ignore): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Path Filtering to prevent CI workflows from triggering when developers only update Markdown documentation files in the `docs/` folder.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Ignoring documentation changes using paths-ignore to save runner compute is under consideration.",
    options: [
      { id: 'A', text: "Use Git commit message tags exclusively." },
      { id: 'B', text: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger." },
      { id: 'C', text: "Delete the docs folder from the Git repository." },
      { id: 'D', text: "Run the workflow anyway and cancel it after 10 minutes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `paths-ignore: ['docs/**', '**.md']` under the push or pull_request trigger. Using `paths-ignore` under workflow triggers excludes specific directory paths or file patterns from triggering workflow runs. If all modified files in a push match the `paths-ignore` pattern, the workflow is not dispatched, saving organization runner minutes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore",
    tags: ["Path Filtering", "paths-ignore", "Resilience Failure"]
  },
  {
    id: "gh-200-346",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Managing Secrets in Workflows (${{ secrets.* }}): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Secret Masking to pass an API token stored in repository secrets to an action step while ensuring the raw secret value is redacted from build logs.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Accessing repository and organization secrets securely with automated log masking is under consideration.",
    options: [
      { id: 'A', text: "Echo the secret to stdout to verify its content." },
      { id: 'B', text: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output." },
      { id: 'C', text: "Commit the secret token directly to the workflow YAML file." },
      { id: 'D', text: "Store the secret in an unencrypted GitHub Issue." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output. Secrets stored in GitHub Actions are encrypted at rest. When referenced in workflows, GitHub automatically redacts known secret values from all console logs and output streams, replacing matches with `***` to prevent accidental credential leakage in public or private logs.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets",
    tags: ["Secret Masking", "Secret Masking", "Dr Failover"]
  },
  {
    id: "gh-200-347",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Managing Secrets in Workflows (${{ secrets.* }}): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Secret Masking to pass an API token stored in repository secrets to an action step while ensuring the raw secret value is redacted from build logs.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Accessing repository and organization secrets securely with automated log masking is under consideration.",
    options: [
      { id: 'A', text: "Commit the secret token directly to the workflow YAML file." },
      { id: 'B', text: "Echo the secret to stdout to verify its content." },
      { id: 'C', text: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output." },
      { id: 'D', text: "Store the secret in an unencrypted GitHub Issue." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output. Secrets stored in GitHub Actions are encrypted at rest. When referenced in workflows, GitHub automatically redacts known secret values from all console logs and output streams, replacing matches with `***` to prevent accidental credential leakage in public or private logs.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets",
    tags: ["Secret Masking", "Secret Masking", "High Load Scale"]
  },
  {
    id: "gh-200-348",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Managing Secrets in Workflows (${{ secrets.* }}): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Secret Masking to pass an API token stored in repository secrets to an action step while ensuring the raw secret value is redacted from build logs.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Accessing repository and organization secrets securely with automated log masking is under consideration.",
    options: [
      { id: 'A', text: "Store the secret in an unencrypted GitHub Issue." },
      { id: 'B', text: "Commit the secret token directly to the workflow YAML file." },
      { id: 'C', text: "Echo the secret to stdout to verify its content." },
      { id: 'D', text: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output. Secrets stored in GitHub Actions are encrypted at rest. When referenced in workflows, GitHub automatically redacts known secret values from all console logs and output streams, replacing matches with `***` to prevent accidental credential leakage in public or private logs.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets",
    tags: ["Secret Masking", "Secret Masking", "Security Compliance"]
  },
  {
    id: "gh-200-349",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Managing Secrets in Workflows (${{ secrets.* }}): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Secret Masking to pass an API token stored in repository secrets to an action step while ensuring the raw secret value is redacted from build logs.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Accessing repository and organization secrets securely with automated log masking is under consideration.",
    options: [
      { id: 'A', text: "Echo the secret to stdout to verify its content." },
      { id: 'B', text: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output." },
      { id: 'C', text: "Store the secret in an unencrypted GitHub Issue." },
      { id: 'D', text: "Commit the secret token directly to the workflow YAML file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output. Secrets stored in GitHub Actions are encrypted at rest. When referenced in workflows, GitHub automatically redacts known secret values from all console logs and output streams, replacing matches with `***` to prevent accidental credential leakage in public or private logs.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets",
    tags: ["Secret Masking", "Secret Masking", "Hybrid Migration"]
  },
  {
    id: "gh-200-350",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Managing Secrets in Workflows (${{ secrets.* }}): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Secret Masking to pass an API token stored in repository secrets to an action step while ensuring the raw secret value is redacted from build logs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Accessing repository and organization secrets securely with automated log masking is under consideration.",
    options: [
      { id: 'A', text: "Commit the secret token directly to the workflow YAML file." },
      { id: 'B', text: "Echo the secret to stdout to verify its content." },
      { id: 'C', text: "Store the secret in an unencrypted GitHub Issue." },
      { id: 'D', text: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Reference the secret via `${{ secrets.API_TOKEN }}` in the step's `env:` block; GitHub automatically masks the value in console output. Secrets stored in GitHub Actions are encrypted at rest. When referenced in workflows, GitHub automatically redacts known secret values from all console logs and output streams, replacing matches with `***` to prevent accidental credential leakage in public or private logs.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets",
    tags: ["Secret Masking", "Secret Masking", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_14;
