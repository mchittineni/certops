export const GITHUB_ACTIONS_QUESTIONS_18 = [
  {
    id: "gh-200-426",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates JavaScript Actions to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Authoring Node.js actions using the official @actions toolkit libraries is under consideration.",
    options: [
      { id: 'A', text: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions." },
      { id: 'B', text: "Parse raw command line arguments manually from process.argv." },
      { id: 'C', text: "Call the GitHub API using raw unauthenticated curl commands." },
      { id: 'D', text: "Write the entire action in compiled C++." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions", "JavaScript Actions", "Dr Failover"]
  },
  {
    id: "gh-200-427",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates JavaScript Actions to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Authoring Node.js actions using the official @actions toolkit libraries is under consideration.",
    options: [
      { id: 'A', text: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions." },
      { id: 'B', text: "Parse raw command line arguments manually from process.argv." },
      { id: 'C', text: "Call the GitHub API using raw unauthenticated curl commands." },
      { id: 'D', text: "Write the entire action in compiled C++." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions", "JavaScript Actions", "High Load Scale"]
  },
  {
    id: "gh-200-428",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates JavaScript Actions to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Authoring Node.js actions using the official @actions toolkit libraries is under consideration.",
    options: [
      { id: 'A', text: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions." },
      { id: 'B', text: "Parse raw command line arguments manually from process.argv." },
      { id: 'C', text: "Call the GitHub API using raw unauthenticated curl commands." },
      { id: 'D', text: "Write the entire action in compiled C++." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions", "JavaScript Actions", "Security Compliance"]
  },
  {
    id: "gh-200-429",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates JavaScript Actions to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Authoring Node.js actions using the official @actions toolkit libraries is under consideration.",
    options: [
      { id: 'A', text: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions." },
      { id: 'B', text: "Parse raw command line arguments manually from process.argv." },
      { id: 'C', text: "Call the GitHub API using raw unauthenticated curl commands." },
      { id: 'D', text: "Write the entire action in compiled C++." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions", "JavaScript Actions", "Hybrid Migration"]
  },
  {
    id: "gh-200-430",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates JavaScript Actions to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Authoring Node.js actions using the official @actions toolkit libraries is under consideration.",
    options: [
      { id: 'A', text: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions." },
      { id: 'B', text: "Parse raw command line arguments manually from process.argv." },
      { id: 'C', text: "Call the GitHub API using raw unauthenticated curl commands." },
      { id: 'D', text: "Write the entire action in compiled C++." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions", "JavaScript Actions", "Resilience Failure"]
  },
  {
    id: "gh-200-431",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Action Packaging to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Bundling node_modules into a single self-contained index.js file with @vercel/ncc is under consideration.",
    options: [
      { id: 'A', text: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository." },
      { id: 'B', text: "Commit the entire 200MB `node_modules` directory with thousands of loose files directly to Git." },
      { id: 'C', text: "Require the consuming workflow to run `npm install` before calling the action." },
      { id: 'D', text: "Host dependencies on an external public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging", "ncc Packaging", "Dr Failover"]
  },
  {
    id: "gh-200-432",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Action Packaging to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Bundling node_modules into a single self-contained index.js file with @vercel/ncc is under consideration.",
    options: [
      { id: 'A', text: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository." },
      { id: 'B', text: "Commit the entire 200MB `node_modules` directory with thousands of loose files directly to Git." },
      { id: 'C', text: "Require the consuming workflow to run `npm install` before calling the action." },
      { id: 'D', text: "Host dependencies on an external public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging", "ncc Packaging", "High Load Scale"]
  },
  {
    id: "gh-200-433",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Action Packaging to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Bundling node_modules into a single self-contained index.js file with @vercel/ncc is under consideration.",
    options: [
      { id: 'A', text: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository." },
      { id: 'B', text: "Commit the entire 200MB `node_modules` directory with thousands of loose files directly to Git." },
      { id: 'C', text: "Require the consuming workflow to run `npm install` before calling the action." },
      { id: 'D', text: "Host dependencies on an external public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging", "ncc Packaging", "Security Compliance"]
  },
  {
    id: "gh-200-434",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Action Packaging to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Bundling node_modules into a single self-contained index.js file with @vercel/ncc is under consideration.",
    options: [
      { id: 'A', text: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository." },
      { id: 'B', text: "Commit the entire 200MB `node_modules` directory with thousands of loose files directly to Git." },
      { id: 'C', text: "Require the consuming workflow to run `npm install` before calling the action." },
      { id: 'D', text: "Host dependencies on an external public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging", "ncc Packaging", "Hybrid Migration"]
  },
  {
    id: "gh-200-435",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Action Packaging to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Bundling node_modules into a single self-contained index.js file with @vercel/ncc is under consideration.",
    options: [
      { id: 'A', text: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository." },
      { id: 'B', text: "Commit the entire 200MB `node_modules` directory with thousands of loose files directly to Git." },
      { id: 'C', text: "Require the consuming workflow to run `npm install` before calling the action." },
      { id: 'D', text: "Host dependencies on an external public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging", "ncc Packaging", "Resilience Failure"]
  },
  {
    id: "gh-200-436",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Docker Actions to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Authoring Docker actions with Dockerfile and entrypoint.sh on Linux runners is under consideration.",
    options: [
      { id: 'A', text: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`." },
      { id: 'B', text: "Use a composite action and attempt to compile Linux libraries on Windows runners." },
      { id: 'C', text: "Install all OS libraries manually in every single workflow step." },
      { id: 'D', text: "Docker container actions are not supported in GitHub Actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment\u2014operating system packages, tools, and scripts\u2014inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions", "Docker Actions", "Dr Failover"]
  },
  {
    id: "gh-200-437",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Docker Actions to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Authoring Docker actions with Dockerfile and entrypoint.sh on Linux runners is under consideration.",
    options: [
      { id: 'A', text: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`." },
      { id: 'B', text: "Use a composite action and attempt to compile Linux libraries on Windows runners." },
      { id: 'C', text: "Install all OS libraries manually in every single workflow step." },
      { id: 'D', text: "Docker container actions are not supported in GitHub Actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment\u2014operating system packages, tools, and scripts\u2014inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions", "Docker Actions", "High Load Scale"]
  },
  {
    id: "gh-200-438",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Docker Actions to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Authoring Docker actions with Dockerfile and entrypoint.sh on Linux runners is under consideration.",
    options: [
      { id: 'A', text: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`." },
      { id: 'B', text: "Use a composite action and attempt to compile Linux libraries on Windows runners." },
      { id: 'C', text: "Install all OS libraries manually in every single workflow step." },
      { id: 'D', text: "Docker container actions are not supported in GitHub Actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment\u2014operating system packages, tools, and scripts\u2014inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions", "Docker Actions", "Security Compliance"]
  },
  {
    id: "gh-200-439",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Docker Actions to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Authoring Docker actions with Dockerfile and entrypoint.sh on Linux runners is under consideration.",
    options: [
      { id: 'A', text: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`." },
      { id: 'B', text: "Use a composite action and attempt to compile Linux libraries on Windows runners." },
      { id: 'C', text: "Install all OS libraries manually in every single workflow step." },
      { id: 'D', text: "Docker container actions are not supported in GitHub Actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment\u2014operating system packages, tools, and scripts\u2014inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions", "Docker Actions", "Hybrid Migration"]
  },
  {
    id: "gh-200-440",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Docker Actions to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Authoring Docker actions with Dockerfile and entrypoint.sh on Linux runners is under consideration.",
    options: [
      { id: 'A', text: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`." },
      { id: 'B', text: "Use a composite action and attempt to compile Linux libraries on Windows runners." },
      { id: 'C', text: "Install all OS libraries manually in every single workflow step." },
      { id: 'D', text: "Docker container actions are not supported in GitHub Actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment\u2014operating system packages, tools, and scripts\u2014inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions", "Docker Actions", "Resilience Failure"]
  },
  {
    id: "gh-200-441",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Action Versioning to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Semantic versioning, moving major tags (v1), and GitHub Releases for actions is under consideration.",
    options: [
      { id: 'A', text: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit." },
      { id: 'B', text: "Force all consumers to reference the mutable `@main` branch." },
      { id: 'C', text: "Create a completely new repository for every bug fix release." },
      { id: 'D', text: "Never release updates to custom actions once published." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning", "Action Versioning", "Dr Failover"]
  },
  {
    id: "gh-200-442",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Action Versioning to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Semantic versioning, moving major tags (v1), and GitHub Releases for actions is under consideration.",
    options: [
      { id: 'A', text: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit." },
      { id: 'B', text: "Force all consumers to reference the mutable `@main` branch." },
      { id: 'C', text: "Create a completely new repository for every bug fix release." },
      { id: 'D', text: "Never release updates to custom actions once published." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning", "Action Versioning", "High Load Scale"]
  },
  {
    id: "gh-200-443",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Action Versioning to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Semantic versioning, moving major tags (v1), and GitHub Releases for actions is under consideration.",
    options: [
      { id: 'A', text: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit." },
      { id: 'B', text: "Force all consumers to reference the mutable `@main` branch." },
      { id: 'C', text: "Create a completely new repository for every bug fix release." },
      { id: 'D', text: "Never release updates to custom actions once published." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning", "Action Versioning", "Security Compliance"]
  },
  {
    id: "gh-200-444",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Action Versioning to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Semantic versioning, moving major tags (v1), and GitHub Releases for actions is under consideration.",
    options: [
      { id: 'A', text: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit." },
      { id: 'B', text: "Force all consumers to reference the mutable `@main` branch." },
      { id: 'C', text: "Create a completely new repository for every bug fix release." },
      { id: 'D', text: "Never release updates to custom actions once published." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning", "Action Versioning", "Hybrid Migration"]
  },
  {
    id: "gh-200-445",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Action Versioning to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Semantic versioning, moving major tags (v1), and GitHub Releases for actions is under consideration.",
    options: [
      { id: 'A', text: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit." },
      { id: 'B', text: "Force all consumers to reference the mutable `@main` branch." },
      { id: 'C', text: "Create a completely new repository for every bug fix release." },
      { id: 'D', text: "Never release updates to custom actions once published." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning", "Action Versioning", "Resilience Failure"]
  },
  {
    id: "gh-200-446",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Marketplace Publishing to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Public repository requirements, README standards, and branding for Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases." },
      { id: 'B', text: "Publish the action from a private enterprise repository." },
      { id: 'C', text: "Omit the action.yml metadata file." },
      { id: 'D', text: "Upload the action as a raw binary zip file to Marketplace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing", "Marketplace Publishing", "Dr Failover"]
  },
  {
    id: "gh-200-447",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Marketplace Publishing to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Public repository requirements, README standards, and branding for Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases." },
      { id: 'B', text: "Publish the action from a private enterprise repository." },
      { id: 'C', text: "Omit the action.yml metadata file." },
      { id: 'D', text: "Upload the action as a raw binary zip file to Marketplace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing", "Marketplace Publishing", "High Load Scale"]
  },
  {
    id: "gh-200-448",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Marketplace Publishing to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Public repository requirements, README standards, and branding for Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases." },
      { id: 'B', text: "Publish the action from a private enterprise repository." },
      { id: 'C', text: "Omit the action.yml metadata file." },
      { id: 'D', text: "Upload the action as a raw binary zip file to Marketplace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing", "Marketplace Publishing", "Security Compliance"]
  },
  {
    id: "gh-200-449",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Marketplace Publishing to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Public repository requirements, README standards, and branding for Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases." },
      { id: 'B', text: "Publish the action from a private enterprise repository." },
      { id: 'C', text: "Omit the action.yml metadata file." },
      { id: 'D', text: "Upload the action as a raw binary zip file to Marketplace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing", "Marketplace Publishing", "Hybrid Migration"]
  },
  {
    id: "gh-200-450",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Marketplace Publishing to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Public repository requirements, README standards, and branding for Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases." },
      { id: 'B', text: "Publish the action from a private enterprise repository." },
      { id: 'C', text: "Omit the action.yml metadata file." },
      { id: 'D', text: "Upload the action as a raw binary zip file to Marketplace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing", "Marketplace Publishing", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_18;
