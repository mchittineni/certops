export const GITHUB_ACTIONS_QUESTIONS_17 = [
  {
    id: "gh-200-401",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Use a container job whose image already carries the required toolchain versions." },
      { id: 'B', text: "Use `actions/setup-java@v4` with a distribution and `actions/setup-node@v4` with caching." },
      { id: 'C', text: "Use whichever versions the hosted runner image ships with for that release." },
      { id: 'D', text: "Build the toolchains from source in a setup step so the versions are exact." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup","setup-* Actions","Dr Failover"]
  },
  {
    id: "gh-200-402",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Use `actions/setup-java@v4` with a distribution and `actions/setup-node@v4` with caching." },
      { id: 'B', text: "Use whichever versions the hosted runner image ships with for that release." },
      { id: 'C', text: "Use a container job whose image already carries the required toolchain versions." },
      { id: 'D', text: "Build the toolchains from source in a setup step so the versions are exact." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup","setup-* Actions","High Load Scale"]
  },
  {
    id: "gh-200-403",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Use a container job whose image already carries the required toolchain versions." },
      { id: 'B', text: "Use `actions/setup-java@v4` with a distribution and `actions/setup-node@v4` with caching." },
      { id: 'C', text: "Use whichever versions the hosted runner image ships with for that release." },
      { id: 'D', text: "Build the toolchains from source in a setup step so the versions are exact." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup","setup-* Actions","Security Compliance"]
  },
  {
    id: "gh-200-404",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `actions/setup-java@v4` with a distribution and `actions/setup-node@v4` with caching." },
      { id: 'B', text: "Build the toolchains from source in a setup step so the versions are exact." },
      { id: 'C', text: "Use whichever versions the hosted runner image ships with for that release." },
      { id: 'D', text: "Use a container job whose image already carries the required toolchain versions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup","setup-* Actions","Hybrid Migration"]
  },
  {
    id: "gh-200-405",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Setting up Toolchains with Official setup-* Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to configure a specific Java 17 and Node.js 20 runtime environment with dependency caching on a standard GitHub-hosted runner.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Use whichever versions the hosted runner image ships with for that release." },
      { id: 'B', text: "Use a container job whose image already carries the required toolchain versions." },
      { id: 'C', text: "Use `actions/setup-java@v4` with a distribution and `actions/setup-node@v4` with caching." },
      { id: 'D', text: "Build the toolchains from source in a setup step so the versions are exact." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `actions/setup-java@v4` with `distribution: 'temurin'` and `actions/setup-node@v4` with `cache: 'npm'`. Official `actions/setup-*` actions (setup-node, setup-python, setup-java, setup-go) provide fast, standardized runtime installation and configuration on runners. They include built-in dependency caching (`cache: 'npm'`, `cache: 'pip'`), simplifying environment setup.",
    referenceUrl: "https://github.com/actions/setup-node",
    tags: ["Toolchain Setup","setup-* Actions","Resilience Failure"]
  },
  {
    id: "gh-200-406",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Set `retention-days: 3` on the upload step, or lower the repository default." },
      { id: 'B', text: "Leave the artifacts on the 90-day default and prune them by API later." },
      { id: 'C', text: "Stop uploading the intermediate artifacts and rebuild them when needed." },
      { id: 'D', text: "Delete the artifacts through the web interface at the end of each week." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention","Artifact Retention","Dr Failover"]
  },
  {
    id: "gh-200-407",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Stop uploading the intermediate artifacts and rebuild them when needed." },
      { id: 'B', text: "Delete the artifacts through the web interface at the end of each week." },
      { id: 'C', text: "Set `retention-days: 3` on the upload step, or lower the repository default." },
      { id: 'D', text: "Leave the artifacts on the 90-day default and prune them by API later." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention","Artifact Retention","High Load Scale"]
  },
  {
    id: "gh-200-408",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Leave the artifacts on the 90-day default and prune them by API later." },
      { id: 'B', text: "Delete the artifacts through the web interface at the end of each week." },
      { id: 'C', text: "Stop uploading the intermediate artifacts and rebuild them when needed." },
      { id: 'D', text: "Set `retention-days: 3` on the upload step, or lower the repository default." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention","Artifact Retention","Security Compliance"]
  },
  {
    id: "gh-200-409",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Delete the artifacts through the web interface at the end of each week." },
      { id: 'B', text: "Stop uploading the intermediate artifacts and rebuild them when needed." },
      { id: 'C', text: "Leave the artifacts on the 90-day default and prune them by API later." },
      { id: 'D', text: "Set `retention-days: 3` on the upload step, or lower the repository default." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention","Artifact Retention","Hybrid Migration"]
  },
  {
    id: "gh-200-410",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing Workflow Artifact Retention Policies: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to prevent high-volume build artifacts and logs from consuming enterprise storage quotas by retaining development artifacts for only 3 days.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Leave the artifacts on the 90-day default and prune them by API later." },
      { id: 'B', text: "Stop uploading the intermediate artifacts and rebuild them when needed." },
      { id: 'C', text: "Set `retention-days: 3` on the upload step, or lower the repository default." },
      { id: 'D', text: "Delete the artifacts through the web interface at the end of each week." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `retention-days: 3` in the `actions/upload-artifact` step or configure repository retention settings. Artifacts uploaded during workflow runs consume GitHub Actions storage quotas. While default retention is 90 days, setting `retention-days: 3` (or any value between 1 and 90) on the `actions/upload-artifact` step cleans up temporary build outputs automatically, reducing storage costs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#customizing-artifact-retention-period",
    tags: ["Artifact Retention","Artifact Retention","Resilience Failure"]
  },
  {
    id: "gh-200-411",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'B', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'C', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." },
      { id: 'D', text: "Use a reusable workflow instead of an action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types","Action Types","Dr Failover"]
  },
  {
    id: "gh-200-412",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'B', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'C', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." },
      { id: 'D', text: "Use a reusable workflow instead of an action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types","Action Types","High Load Scale"]
  },
  {
    id: "gh-200-413",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Use a reusable workflow instead of an action." },
      { id: 'B', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'C', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'D', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types","Action Types","Security Compliance"]
  },
  {
    id: "gh-200-414",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'B', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'C', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." },
      { id: 'D', text: "Use a reusable workflow instead of an action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types","Action Types","Hybrid Migration"]
  },
  {
    id: "gh-200-415",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Composite Actions vs Docker vs JavaScript Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to choose the appropriate action type to bundle multiple shell steps and run commands into a single reusable action running on any OS.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file." },
      { id: 'B', text: "Create a Docker container action which only runs on Linux runners." },
      { id: 'C', text: "Write a full JavaScript action requiring npm packaging for basic shell commands." },
      { id: 'D', text: "Use a reusable workflow instead of an action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Composite Action (`using: \"composite\"`) in an `action.yml` file. GitHub supports three action types: JavaScript actions (run directly on the runner via Node.js on Linux/macOS/Windows), Docker container actions (package OS tools in Docker, Linux only), and Composite actions (combine multiple run steps and actions into one reusable unit across all platforms).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["Action Types","Action Types","Resilience Failure"]
  },
  {
    id: "gh-200-416",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Create `action.yml` under `.github/actions/` with the same four sections." },
      { id: 'B', text: "Declare the inputs and outputs in `package.json` alongside the entry point." },
      { id: 'C', text: "Create `action.yml` in the root with `name`, `inputs:`, `outputs:` and `runs:`." },
      { id: 'D', text: "Declare the metadata in a workflow file under `.github/workflows/`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata","action.yml Syntax","Dr Failover"]
  },
  {
    id: "gh-200-417",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Create `action.yml` under `.github/actions/` with the same four sections." },
      { id: 'B', text: "Declare the metadata in a workflow file under `.github/workflows/`." },
      { id: 'C', text: "Declare the inputs and outputs in `package.json` alongside the entry point." },
      { id: 'D', text: "Create `action.yml` in the root with `name`, `inputs:`, `outputs:` and `runs:`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata","action.yml Syntax","High Load Scale"]
  },
  {
    id: "gh-200-418",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Declare the metadata in a workflow file under `.github/workflows/`." },
      { id: 'B', text: "Create `action.yml` under `.github/actions/` with the same four sections." },
      { id: 'C', text: "Create `action.yml` in the root with `name`, `inputs:`, `outputs:` and `runs:`." },
      { id: 'D', text: "Declare the inputs and outputs in `package.json` alongside the entry point." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata","action.yml Syntax","Security Compliance"]
  },
  {
    id: "gh-200-419",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Create `action.yml` in the root with `name`, `inputs:`, `outputs:` and `runs:`." },
      { id: 'B', text: "Declare the metadata in a workflow file under `.github/workflows/`." },
      { id: 'C', text: "Create `action.yml` under `.github/actions/` with the same four sections." },
      { id: 'D', text: "Declare the inputs and outputs in `package.json` alongside the entry point." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata","action.yml Syntax","Hybrid Migration"]
  },
  {
    id: "gh-200-420",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Action Metadata File: action.yml Syntax: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to author the metadata manifest for a custom reusable action defining required input parameters, default values, and outputs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Create `action.yml` in the root with `name`, `inputs:`, `outputs:` and `runs:`." },
      { id: 'B', text: "Declare the inputs and outputs in `package.json` alongside the entry point." },
      { id: 'C', text: "Declare the metadata in a workflow file under `.github/workflows/`." },
      { id: 'D', text: "Create `action.yml` under `.github/actions/` with the same four sections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create `action.yml` in the repository root specifying `name`, `description`, `inputs:`, `outputs:`, and `runs:`. Every custom GitHub Action must have an `action.yml` (or `action.yaml`) metadata file in its root. It defines the action's name, description, author, inputs (with defaults and `required: true`), outputs, visual branding icons, and execution entrypoint (`using: 'node20'`, `'docker'`, or `'composite'`).",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["Action Metadata","action.yml Syntax","Resilience Failure"]
  },
  {
    id: "gh-200-421",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Set `runs: using: 'node20'` with the shell commands in the entry point." },
      { id: 'B', text: "Set `runs: using: 'composite'` and give every `run:` step a `shell:`." },
      { id: 'C', text: "Set `runs: using: 'docker'` and put the commands in the entrypoint." },
      { id: 'D', text: "Set `runs: using: 'composite'` and omit `shell:` so the default applies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions","Composite Authoring","Dr Failover"]
  },
  {
    id: "gh-200-422",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Set `runs: using: 'composite'` and give every `run:` step a `shell:`." },
      { id: 'B', text: "Set `runs: using: 'composite'` and omit `shell:` so the default applies." },
      { id: 'C', text: "Set `runs: using: 'docker'` and put the commands in the entrypoint." },
      { id: 'D', text: "Set `runs: using: 'node20'` with the shell commands in the entry point." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions","Composite Authoring","High Load Scale"]
  },
  {
    id: "gh-200-423",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Set `runs: using: 'composite'` and give every `run:` step a `shell:`." },
      { id: 'B', text: "Set `runs: using: 'composite'` and omit `shell:` so the default applies." },
      { id: 'C', text: "Set `runs: using: 'docker'` and put the commands in the entrypoint." },
      { id: 'D', text: "Set `runs: using: 'node20'` with the shell commands in the entry point." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions","Composite Authoring","Security Compliance"]
  },
  {
    id: "gh-200-424",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Set `runs: using: 'composite'` and give every `run:` step a `shell:`." },
      { id: 'B', text: "Set `runs: using: 'composite'` and omit `shell:` so the default applies." },
      { id: 'C', text: "Set `runs: using: 'docker'` and put the commands in the entrypoint." },
      { id: 'D', text: "Set `runs: using: 'node20'` with the shell commands in the entry point." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions","Composite Authoring","Hybrid Migration"]
  },
  {
    id: "gh-200-425",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Authoring Composite Actions (using: 'composite'): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to bundle a series of setup commands and test scripts into a composite action while ensuring commands execute in bash on all platforms.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Set `runs: using: 'docker'` and put the commands in the entrypoint." },
      { id: 'B', text: "Set `runs: using: 'node20'` with the shell commands in the entry point." },
      { id: 'C', text: "Set `runs: using: 'composite'` and give every `run:` step a `shell:`." },
      { id: 'D', text: "Set `runs: using: 'composite'` and omit `shell:` so the default applies." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define `runs: using: \"composite\"` and specify `shell: bash` on every `run:` step within the composite action. Inside composite actions, every `run:` step must explicitly declare a `shell:` (e.g., `shell: bash`). This ensures cross-platform compatibility across Linux, macOS, and Windows runners and prevents execution errors.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["Composite Actions","Composite Authoring","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_17;
