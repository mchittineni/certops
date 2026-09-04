export const GITHUB_ACTIONS_QUESTIONS_17 = [
  {
    id: "gh-200-401",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Toolchain Setup to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Using actions/setup-node, setup-python, setup-go, and setup-java for runtime management is under consideration.",
    options: [
      { id: 'A', text: "Download and compile Node.js and Java from source code on every build run." },
      { id: 'B', text: "Run all commands inside a virtual machine running on an engineer's laptop." },
      { id: 'C', text: "Rely on whatever random versions are pre-installed on the runner host." },
      { id: 'D', text: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup", "setup-* Actions", "Dr Failover"]
  },
  {
    id: "gh-200-402",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Toolchain Setup to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Using actions/setup-node, setup-python, setup-go, and setup-java for runtime management is under consideration.",
    options: [
      { id: 'A', text: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`." },
      { id: 'B', text: "Run all commands inside a virtual machine running on an engineer's laptop." },
      { id: 'C', text: "Download and compile Node.js and Java from source code on every build run." },
      { id: 'D', text: "Rely on whatever random versions are pre-installed on the runner host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup", "setup-* Actions", "High Load Scale"]
  },
  {
    id: "gh-200-403",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Toolchain Setup to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Using actions/setup-node, setup-python, setup-go, and setup-java for runtime management is under consideration.",
    options: [
      { id: 'A', text: "Download and compile Node.js and Java from source code on every build run." },
      { id: 'B', text: "Run all commands inside a virtual machine running on an engineer's laptop." },
      { id: 'C', text: "Rely on whatever random versions are pre-installed on the runner host." },
      { id: 'D', text: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup", "setup-* Actions", "Security Compliance"]
  },
  {
    id: "gh-200-404",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Toolchain Setup to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Using actions/setup-node, setup-python, setup-go, and setup-java for runtime management is under consideration.",
    options: [
      { id: 'A', text: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`." },
      { id: 'B', text: "Rely on whatever random versions are pre-installed on the runner host." },
      { id: 'C', text: "Download and compile Node.js and Java from source code on every build run." },
      { id: 'D', text: "Run all commands inside a virtual machine running on an engineer's laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup", "setup-* Actions", "Hybrid Migration"]
  },
  {
    id: "gh-200-405",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Toolchain Setup to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Using actions/setup-node, setup-python, setup-go, and setup-java for runtime management is under consideration.",
    options: [
      { id: 'A', text: "Download and compile Node.js and Java from source code on every build run." },
      { id: 'B', text: "Rely on whatever random versions are pre-installed on the runner host." },
      { id: 'C', text: "Run all commands inside a virtual machine running on an engineer's laptop." },
      { id: 'D', text: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup", "setup-* Actions", "Resilience Failure"]
  },
  {
    id: "gh-200-406",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Artifact Retention to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Configuring retention-days on artifacts to manage storage costs is under consideration.",
    options: [
      { id: 'A', text: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings." },
      { id: 'B', text: "Manually delete artifacts one by one via the web console every morning." },
      { id: 'C', text: "Disable artifact uploads completely." },
      { id: 'D', text: "Allow artifacts to default to the 90-day retention period for all temporary builds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention", "Artifact Retention", "Dr Failover"]
  },
  {
    id: "gh-200-407",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Artifact Retention to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Configuring retention-days on artifacts to manage storage costs is under consideration.",
    options: [
      { id: 'A', text: "Manually delete artifacts one by one via the web console every morning." },
      { id: 'B', text: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings." },
      { id: 'C', text: "Allow artifacts to default to the 90-day retention period for all temporary builds." },
      { id: 'D', text: "Disable artifact uploads completely." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention", "Artifact Retention", "High Load Scale"]
  },
  {
    id: "gh-200-408",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Artifact Retention to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Configuring retention-days on artifacts to manage storage costs is under consideration.",
    options: [
      { id: 'A', text: "Manually delete artifacts one by one via the web console every morning." },
      { id: 'B', text: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings." },
      { id: 'C', text: "Disable artifact uploads completely." },
      { id: 'D', text: "Allow artifacts to default to the 90-day retention period for all temporary builds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention", "Artifact Retention", "Security Compliance"]
  },
  {
    id: "gh-200-409",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Artifact Retention to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Configuring retention-days on artifacts to manage storage costs is under consideration.",
    options: [
      { id: 'A', text: "Disable artifact uploads completely." },
      { id: 'B', text: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings." },
      { id: 'C', text: "Manually delete artifacts one by one via the web console every morning." },
      { id: 'D', text: "Allow artifacts to default to the 90-day retention period for all temporary builds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention", "Artifact Retention", "Hybrid Migration"]
  },
  {
    id: "gh-200-410",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Artifact Retention to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Configuring retention-days on artifacts to manage storage costs is under consideration.",
    options: [
      { id: 'A', text: "Disable artifact uploads completely." },
      { id: 'B', text: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings." },
      { id: 'C', text: "Allow artifacts to default to the 90-day retention period for all temporary builds." },
      { id: 'D', text: "Manually delete artifacts one by one via the web console every morning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention", "Artifact Retention", "Resilience Failure"]
  },
  {
    id: "gh-200-411",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Action Types to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Comparing composite actions, JavaScript actions, and Docker container actions is under consideration.",
    options: [
      { id: 'A', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'B', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'C', text: "Use a reusable workflow instead of an action." },
      { id: 'D', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types", "Action Types", "Dr Failover"]
  },
  {
    id: "gh-200-412",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Action Types to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Comparing composite actions, JavaScript actions, and Docker container actions is under consideration.",
    options: [
      { id: 'A', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'B', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'C', text: "Use a reusable workflow instead of an action." },
      { id: 'D', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types", "Action Types", "High Load Scale"]
  },
  {
    id: "gh-200-413",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Action Types to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Comparing composite actions, JavaScript actions, and Docker container actions is under consideration.",
    options: [
      { id: 'A', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." },
      { id: 'B', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'C', text: "Use a reusable workflow instead of an action." },
      { id: 'D', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types", "Action Types", "Security Compliance"]
  },
  {
    id: "gh-200-414",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Action Types to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Comparing composite actions, JavaScript actions, and Docker container actions is under consideration.",
    options: [
      { id: 'A', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'B', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." },
      { id: 'C', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'D', text: "Use a reusable workflow instead of an action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types", "Action Types", "Hybrid Migration"]
  },
  {
    id: "gh-200-415",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Action Types to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Comparing composite actions, JavaScript actions, and Docker container actions is under consideration.",
    options: [
      { id: 'A', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." },
      { id: 'B', text: "Use a reusable workflow instead of an action." },
      { id: 'C', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'D', text: "Create a Docker container action which only runs on Linux runners." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types", "Action Types", "Resilience Failure"]
  },
  {
    id: "gh-200-416",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Action Metadata to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Defining action inputs, outputs, branding, and execution runs in action.yml is under consideration.",
    options: [
      { id: 'A', text: "Declare metadata in a workflow file under `.github/workflows/`." },
      { id: 'B', text: "Put metadata inside a standard package.json file." },
      { id: 'C', text: "Hardcode input parameters inside compiled binary files." },
      { id: 'D', text: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata", "action.yml Syntax", "Dr Failover"]
  },
  {
    id: "gh-200-417",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Action Metadata to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Defining action inputs, outputs, branding, and execution runs in action.yml is under consideration.",
    options: [
      { id: 'A', text: "Declare metadata in a workflow file under `.github/workflows/`." },
      { id: 'B', text: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`." },
      { id: 'C', text: "Hardcode input parameters inside compiled binary files." },
      { id: 'D', text: "Put metadata inside a standard package.json file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata", "action.yml Syntax", "High Load Scale"]
  },
  {
    id: "gh-200-418",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Action Metadata to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Defining action inputs, outputs, branding, and execution runs in action.yml is under consideration.",
    options: [
      { id: 'A', text: "Hardcode input parameters inside compiled binary files." },
      { id: 'B', text: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`." },
      { id: 'C', text: "Put metadata inside a standard package.json file." },
      { id: 'D', text: "Declare metadata in a workflow file under `.github/workflows/`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata", "action.yml Syntax", "Security Compliance"]
  },
  {
    id: "gh-200-419",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Action Metadata to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Defining action inputs, outputs, branding, and execution runs in action.yml is under consideration.",
    options: [
      { id: 'A', text: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`." },
      { id: 'B', text: "Hardcode input parameters inside compiled binary files." },
      { id: 'C', text: "Put metadata inside a standard package.json file." },
      { id: 'D', text: "Declare metadata in a workflow file under `.github/workflows/`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata", "action.yml Syntax", "Hybrid Migration"]
  },
  {
    id: "gh-200-420",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Action Metadata to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Defining action inputs, outputs, branding, and execution runs in action.yml is under consideration.",
    options: [
      { id: 'A', text: "Put metadata inside a standard package.json file." },
      { id: 'B', text: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`." },
      { id: 'C', text: "Declare metadata in a workflow file under `.github/workflows/`." },
      { id: 'D', text: "Hardcode input parameters inside compiled binary files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata", "action.yml Syntax", "Resilience Failure"]
  },
  {
    id: "gh-200-421",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Composite Actions to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Authoring steps, inputs, and shell declarations inside composite actions is under consideration.",
    options: [
      { id: 'A', text: "Omit the `shell:` specification and let steps fail on Windows runners." },
      { id: 'B', text: "Composite actions do not support running shell commands." },
      { id: 'C', text: "Call external webhooks instead of local steps." },
      { id: 'D', text: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions", "Composite Authoring", "Dr Failover"]
  },
  {
    id: "gh-200-422",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Composite Actions to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Authoring steps, inputs, and shell declarations inside composite actions is under consideration.",
    options: [
      { id: 'A', text: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action." },
      { id: 'B', text: "Composite actions do not support running shell commands." },
      { id: 'C', text: "Call external webhooks instead of local steps." },
      { id: 'D', text: "Omit the `shell:` specification and let steps fail on Windows runners." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions", "Composite Authoring", "High Load Scale"]
  },
  {
    id: "gh-200-423",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Composite Actions to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Authoring steps, inputs, and shell declarations inside composite actions is under consideration.",
    options: [
      { id: 'A', text: "Composite actions do not support running shell commands." },
      { id: 'B', text: "Call external webhooks instead of local steps." },
      { id: 'C', text: "Omit the `shell:` specification and let steps fail on Windows runners." },
      { id: 'D', text: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions", "Composite Authoring", "Security Compliance"]
  },
  {
    id: "gh-200-424",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Composite Actions to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Authoring steps, inputs, and shell declarations inside composite actions is under consideration.",
    options: [
      { id: 'A', text: "Call external webhooks instead of local steps." },
      { id: 'B', text: "Omit the `shell:` specification and let steps fail on Windows runners." },
      { id: 'C', text: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action." },
      { id: 'D', text: "Composite actions do not support running shell commands." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions", "Composite Authoring", "Hybrid Migration"]
  },
  {
    id: "gh-200-425",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Composite Actions to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Authoring steps, inputs, and shell declarations inside composite actions is under consideration.",
    options: [
      { id: 'A', text: "Composite actions do not support running shell commands." },
      { id: 'B', text: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action." },
      { id: 'C', text: "Omit the `shell:` specification and let steps fail on Windows runners." },
      { id: 'D', text: "Call external webhooks instead of local steps." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions", "Composite Authoring", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_17;
