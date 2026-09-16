export const GITHUB_ACTIONS_QUESTIONS_18 = [
  {
    id: "gh-200-426",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Use `@actions/core` for inputs and outputs, and `@actions/github` for the API." },
      { id: 'B', text: "Read the inputs from `process.argv` and write the outputs to stdout." },
      { id: 'C', text: "Read the inputs from the environment and call the API with plain `curl`." },
      { id: 'D', text: "Use `@actions/exec` to shell out to the `gh` CLI for both the inputs and the API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions","JavaScript Actions","Dr Failover"]
  },
  {
    id: "gh-200-427",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Use `@actions/core` for inputs and outputs, and `@actions/github` for the API." },
      { id: 'B', text: "Read the inputs from `process.argv` and write the outputs to stdout." },
      { id: 'C', text: "Read the inputs from the environment and call the API with plain `curl`." },
      { id: 'D', text: "Use `@actions/exec` to shell out to the `gh` CLI for both the inputs and the API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions","JavaScript Actions","High Load Scale"]
  },
  {
    id: "gh-200-428",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Read the inputs from the environment and call the API with plain `curl`." },
      { id: 'B', text: "Use `@actions/core` for inputs and outputs, and `@actions/github` for the API." },
      { id: 'C', text: "Read the inputs from `process.argv` and write the outputs to stdout." },
      { id: 'D', text: "Use `@actions/exec` to shell out to the `gh` CLI for both the inputs and the API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions","JavaScript Actions","Security Compliance"]
  },
  {
    id: "gh-200-429",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `@actions/core` for inputs and outputs, and `@actions/github` for the API." },
      { id: 'B', text: "Read the inputs from `process.argv` and write the outputs to stdout." },
      { id: 'C', text: "Read the inputs from the environment and call the API with plain `curl`." },
      { id: 'D', text: "Use `@actions/exec` to shell out to the `gh` CLI for both the inputs and the API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions","JavaScript Actions","Hybrid Migration"]
  },
  {
    id: "gh-200-430",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "JavaScript Actions with @actions/core and @actions/github: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to author a custom JavaScript action that retrieves workflow inputs, calls the GitHub REST API, and sets output parameters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Use `@actions/core` for inputs and outputs, and `@actions/github` for the API." },
      { id: 'B', text: "Read the inputs from `process.argv` and write the outputs to stdout." },
      { id: 'C', text: "Read the inputs from the environment and call the API with plain `curl`." },
      { id: 'D', text: "Use `@actions/exec` to shell out to the `gh` CLI for both the inputs and the API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `@actions/core` to read inputs (`core.getInput`) and set outputs (`core.setOutput`), and `@actions/github` for Octokit API interactions. The official `@actions/core` and `@actions/github` npm packages provide standardized utilities for JavaScript action authors: reading inputs, setting outputs, masking secrets (`core.setSecret`), exporting environment variables, and authenticating Octokit API clients.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["JavaScript Actions","JavaScript Actions","Resilience Failure"]
  },
  {
    id: "gh-200-431",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Require the consuming workflow to run `npm install` before the action runs." },
      { id: 'B', text: "Publish the package to a registry and install it in the action's own first step." },
      { id: 'C', text: "Bundle the code and dependencies with `ncc` into `dist/index.js` and commit it." },
      { id: 'D', text: "Commit the whole `node_modules` directory alongside the action's source." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging","ncc Packaging","Dr Failover"]
  },
  {
    id: "gh-200-432",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Commit the whole `node_modules` directory alongside the action's source." },
      { id: 'B', text: "Bundle the code and dependencies with `ncc` into `dist/index.js` and commit it." },
      { id: 'C', text: "Publish the package to a registry and install it in the action's own first step." },
      { id: 'D', text: "Require the consuming workflow to run `npm install` before the action runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging","ncc Packaging","High Load Scale"]
  },
  {
    id: "gh-200-433",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Commit the whole `node_modules` directory alongside the action's source." },
      { id: 'B', text: "Bundle the code and dependencies with `ncc` into `dist/index.js` and commit it." },
      { id: 'C', text: "Publish the package to a registry and install it in the action's own first step." },
      { id: 'D', text: "Require the consuming workflow to run `npm install` before the action runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging","ncc Packaging","Security Compliance"]
  },
  {
    id: "gh-200-434",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Commit the whole `node_modules` directory alongside the action's source." },
      { id: 'B', text: "Publish the package to a registry and install it in the action's own first step." },
      { id: 'C', text: "Require the consuming workflow to run `npm install` before the action runs." },
      { id: 'D', text: "Bundle the code and dependencies with `ncc` into `dist/index.js` and commit it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging","ncc Packaging","Hybrid Migration"]
  },
  {
    id: "gh-200-435",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Packaging JavaScript Actions with ncc: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to package a JavaScript action with all its external npm dependencies into a single distributable file so it runs without `npm install` on runners.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Require the consuming workflow to run `npm install` before the action runs." },
      { id: 'B', text: "Publish the package to a registry and install it in the action's own first step." },
      { id: 'C', text: "Bundle the code and dependencies with `ncc` into `dist/index.js` and commit it." },
      { id: 'D', text: "Commit the whole `node_modules` directory alongside the action's source." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `@vercel/ncc` to compile the code and dependencies into a single `dist/index.js` file and commit `dist/` to the repository. JavaScript actions executed by GitHub-hosted runners do not run `npm install` automatically. Authors use `@vercel/ncc` (Node Compiler Collection) to bundle the code and all dependencies into a single, self-contained `dist/index.js` file, ensuring fast execution and zero runtime package installation.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github",
    tags: ["Action Packaging","ncc Packaging","Resilience Failure"]
  },
  {
    id: "gh-200-436",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Write a `Dockerfile` and entrypoint, with `runs: using: 'docker'` in `action.yml`." },
      { id: 'B', text: "Write a composite action that installs the native libraries in its very first step." },
      { id: 'C', text: "Write a JavaScript action that shells out to the libraries on each runner." },
      { id: 'D', text: "Write a composite action and require consumers to use a container job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment—operating system packages, tools, and scripts—inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions","Docker Actions","Dr Failover"]
  },
  {
    id: "gh-200-437",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Write a `Dockerfile` and entrypoint, with `runs: using: 'docker'` in `action.yml`." },
      { id: 'B', text: "Write a composite action that installs the native libraries in its very first step." },
      { id: 'C', text: "Write a JavaScript action that shells out to the libraries on each runner." },
      { id: 'D', text: "Write a composite action and require consumers to use a container job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment—operating system packages, tools, and scripts—inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions","Docker Actions","High Load Scale"]
  },
  {
    id: "gh-200-438",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Write a `Dockerfile` and entrypoint, with `runs: using: 'docker'` in `action.yml`." },
      { id: 'B', text: "Write a composite action that installs the native libraries in its very first step." },
      { id: 'C', text: "Write a JavaScript action that shells out to the libraries on each runner." },
      { id: 'D', text: "Write a composite action and require consumers to use a container job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment—operating system packages, tools, and scripts—inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions","Docker Actions","Security Compliance"]
  },
  {
    id: "gh-200-439",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Write a JavaScript action that shells out to the libraries on each runner." },
      { id: 'B', text: "Write a composite action that installs the native libraries in its very first step." },
      { id: 'C', text: "Write a composite action and require consumers to use a container job." },
      { id: 'D', text: "Write a `Dockerfile` and entrypoint, with `runs: using: 'docker'` in `action.yml`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment—operating system packages, tools, and scripts—inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions","Docker Actions","Hybrid Migration"]
  },
  {
    id: "gh-200-440",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Docker Container Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to author a custom action that requires specific Linux operating system libraries, custom binaries, and utilities not present on default runners.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Write a composite action and require consumers to use a container job." },
      { id: 'B', text: "Write a `Dockerfile` and entrypoint, with `runs: using: 'docker'` in `action.yml`." },
      { id: 'C', text: "Write a JavaScript action that shells out to the libraries on each runner." },
      { id: 'D', text: "Write a composite action that installs the native libraries in its very first step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `Dockerfile` and `entrypoint.sh`, specifying `runs: using: 'docker' image: 'Dockerfile'` in `action.yml`. Docker container actions package the entire execution environment—operating system packages, tools, and scripts—inside a container. When executed, GitHub Actions builds or pulls the container image on Linux runners, providing complete environment consistency.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action",
    tags: ["Docker Actions","Docker Actions","Resilience Failure"]
  },
  {
    id: "gh-200-441",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Have consumers reference `@main`, which always carries the newest code." },
      { id: 'B', text: "Tag each release semantically and move the major tag onto the newest patch." },
      { id: 'C', text: "Tag each release semantically and leave consumers to bump the full version." },
      { id: 'D', text: "Publish each release from its own branch and document which to reference." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning","Action Versioning","Dr Failover"]
  },
  {
    id: "gh-200-442",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Tag each release semantically and move the major tag onto the newest patch." },
      { id: 'B', text: "Have consumers reference `@main`, which always carries the newest code." },
      { id: 'C', text: "Publish each release from its own branch and document which to reference." },
      { id: 'D', text: "Tag each release semantically and leave consumers to bump the full version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning","Action Versioning","High Load Scale"]
  },
  {
    id: "gh-200-443",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Tag each release semantically and move the major tag onto the newest patch." },
      { id: 'B', text: "Have consumers reference `@main`, which always carries the newest code." },
      { id: 'C', text: "Publish each release from its own branch and document which to reference." },
      { id: 'D', text: "Tag each release semantically and leave consumers to bump the full version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning","Action Versioning","Security Compliance"]
  },
  {
    id: "gh-200-444",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Tag each release semantically and leave consumers to bump the full version." },
      { id: 'B', text: "Tag each release semantically and move the major tag onto the newest patch." },
      { id: 'C', text: "Publish each release from its own branch and document which to reference." },
      { id: 'D', text: "Have consumers reference `@main`, which always carries the newest code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning","Action Versioning","Hybrid Migration"]
  },
  {
    id: "gh-200-445",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Versioning and Releasing Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to manage releases for an enterprise custom action so consumers can pin to a stable major version (`@v1`) while receiving non-breaking bug fixes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Tag each release semantically and move the major tag onto the newest patch." },
      { id: 'B', text: "Have consumers reference `@main`, which always carries the newest code." },
      { id: 'C', text: "Publish each release from its own branch and document which to reference." },
      { id: 'D', text: "Tag each release semantically and leave consumers to bump the full version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create semantic release tags (e.g., `v1.2.3`) and update the moving major tag (`v1`) to point to the latest `v1.x.x` release commit. Best practice for action maintainers is to release using semantic versioning (`v1.0.0`, `v1.1.0`) while maintaining moving major tags (`v1`, `v2`). This allows consumers who specify `uses: org/action@v1` to automatically receive non-breaking patch and minor updates while remaining protected against breaking changes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions",
    tags: ["Action Versioning","Action Versioning","Resilience Failure"]
  },
  {
    id: "gh-200-446",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Publish from a public repository with an `action.yml`, referenced by branch name only." },
      { id: 'B', text: "Publish the built action as a release asset archive for consumers to fetch." },
      { id: 'C', text: "Publish from a public repository with `action.yml` and `branding:`, released by tag." },
      { id: 'D', text: "Publish from a private organization repository, shared through a runner group." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing","Marketplace Publishing","Dr Failover"]
  },
  {
    id: "gh-200-447",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Publish from a public repository with `action.yml` and `branding:`, released by tag." },
      { id: 'B', text: "Publish the built action as a release asset archive for consumers to fetch." },
      { id: 'C', text: "Publish from a private organization repository, shared through a runner group." },
      { id: 'D', text: "Publish from a public repository with an `action.yml`, referenced by branch name only." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing","Marketplace Publishing","High Load Scale"]
  },
  {
    id: "gh-200-448",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Publish from a public repository with `action.yml` and `branding:`, released by tag." },
      { id: 'B', text: "Publish from a private organization repository, shared through a runner group." },
      { id: 'C', text: "Publish from a public repository with an `action.yml`, referenced by branch name only." },
      { id: 'D', text: "Publish the built action as a release asset archive for consumers to fetch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing","Marketplace Publishing","Security Compliance"]
  },
  {
    id: "gh-200-449",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Publish from a public repository with `action.yml` and `branding:`, released by tag." },
      { id: 'B', text: "Publish from a private organization repository, shared through a runner group." },
      { id: 'C', text: "Publish from a public repository with an `action.yml`, referenced by branch name only." },
      { id: 'D', text: "Publish the built action as a release asset archive for consumers to fetch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing","Marketplace Publishing","Hybrid Migration"]
  },
  {
    id: "gh-200-450",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Publishing Custom Actions to GitHub Marketplace: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to publish a custom GitHub Action to GitHub Marketplace so the wider global developer community can discover and use it.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Publish from a public repository with an `action.yml`, referenced by branch name only." },
      { id: 'B', text: "Publish from a private organization repository, shared through a runner group." },
      { id: 'C', text: "Publish the built action as a release asset archive for consumers to fetch." },
      { id: 'D', text: "Publish from a public repository with `action.yml` and `branding:`, released by tag." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Ensure the repository is public, include `action.yml` with `branding:` icons in the root, add a descriptive `README.md`, and publish via GitHub Releases. Publishing an action to GitHub Marketplace requires a public repository with an `action.yml` in the root containing metadata and `branding` (color and icon). Creating a release with the 'Publish this Action to the GitHub Marketplace' checkbox makes it searchable globally.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["Marketplace Publishing","Marketplace Publishing","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_18;
