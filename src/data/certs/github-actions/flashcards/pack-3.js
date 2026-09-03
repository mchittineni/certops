export const GITHUB_ACTIONS_FLASHCARDS_3 = [
  {
    id: "github-actions-fc-51",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Service Containers in GitHub Actions",
    hint: "Spinning up ephemeral Redis, PostgreSQL, or MySQL containers alongside job steps.",
    back: "Use <strong><code>services:</code></strong> at the job level to launch Docker service containers (e.g. <code>image: postgres:15</code> with port mappings and health checks) that steps can access via <code>localhost</code>.",
    tags: ["Services", "Docker", "Integration Testing"]
  },
  {
    id: "github-actions-fc-52",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Job Container: Running Steps Inside a Docker Container",
    hint: "Executing all job steps inside a designated container image rather than the host VM.",
    back: "Setting <strong><code>container: { image: 'node:20-alpine' }</code></strong> at the job level runs every step directly inside that container image, ensuring exact toolchain and OS consistency across runs.",
    tags: ["Containers", "Docker", "Job Environment"]
  },
  {
    id: "github-actions-fc-53",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Step Name: Importance of Readable Step Titles",
    hint: "Improving troubleshooting readability in the Actions web console.",
    back: "Always specify a clear <strong><code>name:</code></strong> for every step (e.g. <code>name: Run Unit Tests with Coverage</code>). Step names appear in the UI sidebar and execution logs, simplifying triage of failures.",
    tags: ["Steps", "name", "Best Practices"]
  },
  {
    id: "github-actions-fc-54",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Stopping Execution: ::error:: and ::warning:: Annotations",
    hint: "Creating clickable inline annotations on code diffs in pull requests.",
    back: "Workflow commands <code>echo '::error file=app.js,line=10::Syntax Error'</code> and <code>echo '::warning::Deprecated API'</code> render clickable visual annotations directly on PR file diffs.",
    tags: ["Workflow Commands", "Annotations", "UI"]
  },
  {
    id: "github-actions-fc-55",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Grouping Log Output: ::group:: and ::endgroup::",
    hint: "Collapsible log sections in the GitHub Actions console.",
    back: "Wrap verbose output in <code>echo '::group::Initialize Database'</code> and <code>echo '::endgroup::'</code> to create an interactive collapsible log section in the Actions web viewer.",
    tags: ["Workflow Commands", "Logs", "Debugging"]
  },
  {
    id: "github-actions-fc-56",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Handling Secrets in Untrusted PRs: Pull Request from Fork",
    hint: "Secrets are never exposed to pull requests from public forks.",
    back: "Workflows triggered by <strong><code>pull_request</code></strong> from forked repositories do not have access to repository secrets, and <code>GITHUB_TOKEN</code> has read-only access, preventing malicious code exfiltration.",
    tags: ["Security", "Forks", "Secrets", "PR"]
  },
  {
    id: "github-actions-fc-57",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Path Syntax: Globs and Negation",
    hint: "Pattern matching rules in branches and paths filters.",
    back: "GitHub Actions uses fnmatch glob syntax: <code>*</code> matches within a path segment, <code>**</code> matches across multiple directory levels, and <code>!</code> negates a pattern (e.g. <code>!docs/**</code>).",
    tags: ["Globs", "Paths", "Syntax"]
  },
  {
    id: "github-actions-fc-58",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Step Execution Order within a Job",
    hint: "Sequential top-to-bottom step execution.",
    back: "Steps within a single job always execute <strong>strictly sequentially</strong> in the order listed. If a step fails, subsequent steps are skipped unless protected by <code>if: always()</code> or <code>if: failure()</code>.",
    tags: ["Jobs", "Steps", "Execution Order"]
  },
  {
    id: "github-actions-fc-59",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Debugging Workflows: Enabling Runner Diagnostic Logging",
    hint: "Enabling verbose debug traces by setting repository secrets.",
    back: "Set the repository secret <strong><code>ACTIONS_RUNNER_DEBUG: true</code></strong> to enable detailed runner diagnostic logging, and <strong><code>ACTIONS_STEP_DEBUG: true</code></strong> to enable verbose command execution traces.",
    tags: ["Debugging", "Logging", "Troubleshooting"]
  },
  {
    id: "github-actions-fc-60",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Re-Running Failed Jobs in GitHub Actions",
    hint: "Re-executing only the specific jobs that failed without rerunning successful ones.",
    back: "GitHub Actions allows developers to click <strong>'Re-run failed jobs'</strong> in the UI or API, preserving successful build artifacts and only executing the specific jobs and matrix nodes that failed.",
    tags: ["Jobs", "Rerun", "Efficiency"]
  },
  {
    id: "github-actions-fc-61",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Disabling and Enabling Workflows",
    hint: "Temporarily halting automated runs without deleting workflow YAML files.",
    back: "Workflows can be disabled directly from the Actions tab in the GitHub UI or via REST API (<code>PUT /repos/{owner}/{repo}/actions/workflows/{id}/disable</code>) without modifying the repository git tree.",
    tags: ["Workflows", "Management", "Governance"]
  },
  {
    id: "github-actions-fc-62",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "GitHub Actions Artifact Immutability",
    hint: "Uploaded artifacts cannot be modified once uploaded.",
    back: "In <code>actions/upload-artifact@v4</code>, artifact names within a run must be unique. Artifacts are <strong>immutable</strong> once uploaded, preventing tampering or silent overwriting between jobs.",
    tags: ["Artifacts", "Immutability", "Security"]
  },
  {
    id: "github-actions-fc-63",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Job Timeout vs. Step Timeout",
    hint: "Granular execution boundaries across jobs and individual steps.",
    back: "<strong><code>timeout-minutes</code></strong> can be defined at the job level (capping overall job duration) AND at the step level (capping an individual command, like a flaky network fetch).",
    tags: ["Timeouts", "Jobs", "Steps"]
  },
  {
    id: "github-actions-fc-64",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Environment Secrets vs. Repository Secrets",
    hint: "Restricting secret access to gated environments with approval rules.",
    back: "<strong>Repository secrets</strong> are available to any workflow job in the repo. <strong>Environment secrets</strong> are accessible only when a job explicitly targets that <code>environment:</code> and passes protection rules.",
    tags: ["Secrets", "Environments", "Security"]
  },
  {
    id: "github-actions-fc-65",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Configuration Variables: vars Context",
    hint: "Non-sensitive configuration values managed in settings.",
    back: "The <strong><code>vars.*</code></strong> context accesses non-sensitive configuration values (e.g. <code>vars.DEPLOY_REGION</code>) configured at the repository, environment, or organization level without encrypting them as secrets.",
    tags: ["Variables", "vars", "Configuration"]
  },
  {
    id: "github-actions-fc-66",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Using Docker in GitHub-Hosted Linux Runners",
    hint: "Pre-installed Docker daemon and Docker Compose availability.",
    back: "GitHub-hosted Linux runners come with the <strong>Docker daemon</strong> and <strong>Docker Compose</strong> pre-installed, allowing <code>run: docker build .</code> and <code>docker compose up</code> without extra setup.",
    tags: ["Docker", "Runners", "Containers"]
  },
  {
    id: "github-actions-fc-67",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Default Shells across Runner Operating Systems",
    hint: "bash on Linux/macOS vs. pwsh on Windows by default.",
    back: "On Linux and macOS runners, <code>run:</code> steps default to <strong><code>bash</code></strong>. On Windows runners, steps default to <strong>PowerShell Core (<code>pwsh</code>)</strong> unless overridden in <code>shell:</code>.",
    tags: ["Shell", "Runners", "Cross-Platform"]
  },
  {
    id: "github-actions-fc-68",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Custom Shell Configurations: python, sh, cmd",
    hint: "Running scripts directly using custom interpreters in run steps.",
    back: "You can specify custom shells: <code>shell: python</code> executes the inline script directly with Python, <code>shell: cmd</code> runs on Windows Command Prompt, and <code>shell: sh</code> uses standard Bourne shell.",
    tags: ["Shell", "Python", "Syntax"]
  },
  {
    id: "github-actions-fc-69",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Cancelling Redundant Concurrent Workflows with Concurrency Groups",
    hint: "Grouping concurrency across PRs and branches.",
    back: "Using <code>concurrency: { group: '${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}', cancel-in-progress: true }</code> correctly isolates PR builds from main branch deployments.",
    tags: ["Concurrency", "Best Practices", "Resource Management"]
  },
  {
    id: "github-actions-fc-70",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Checking Out Multiple Repositories in One Job",
    hint: "Cloning secondary repositories using destination path parameters.",
    back: "To clone multiple repositories, invoke <code>actions/checkout@v4</code> multiple times specifying distinct <strong><code>path: subfolder</code></strong> targets and providing an appropriate PAT if the second repository is private.",
    tags: ["checkout", "Multi-Repo", "Workspace"]
  },
  {
    id: "github-actions-fc-71",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Submodule Checkout with actions/checkout",
    hint: "Cloning Git submodules recursively during checkout.",
    back: "Configure <strong><code>submodules: recursive</code></strong> (or <code>true</code>) in <code>actions/checkout@v4</code> to automatically initialize and fetch nested Git submodules along with the parent repository.",
    tags: ["checkout", "Submodules", "Git"]
  },
  {
    id: "github-actions-fc-72",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Triggers: release Trigger Types",
    hint: "Triggering on published, created, or released GitHub Releases.",
    back: "The <strong><code>release</code></strong> trigger fires on release lifecycle events: <code>types: [published, created, edited]</code>. The <code>published</code> event is standard for building and publishing packages to registries.",
    tags: ["Triggers", "release", "Deployment"]
  },
  {
    id: "github-actions-fc-73",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Triggers: issues and pull_request Activity Types",
    hint: "Responding to opened, labeled, closed, or assigned events.",
    back: "Both <code>issues</code> and <code>pull_request</code> triggers support fine-grained activity types (e.g. <code>types: [opened, labeled, closed]</code>) allowing automation of triage bots and auto-labeling.",
    tags: ["Triggers", "Issues", "PR", "Automation"]
  },
  {
    id: "github-actions-fc-74",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Conditional Steps: Checking Git Commit Message",
    hint: "Skipping steps based on commit message keywords like [skip ci].",
    back: "GitHub natively respects <strong><code>[skip ci]</code></strong> or <code>[ci skip]</code> in commit messages to skip workflow runs. Custom steps can check <code>contains(github.event.head_commit.message, '[deploy]')</code>.",
    tags: ["Conditionals", "Git", "skip ci"]
  },
  {
    id: "github-actions-fc-75",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Expressions: Equality Coercion Rules",
    hint: "How GitHub Actions coerces types during == and != comparisons.",
    back: "GitHub Actions coerces types during comparison: numbers and strings coerce to numbers; empty strings, <code>null</code>, and <code>false</code> coerce to <code>false</code>. Compare identical types to prevent subtle bugs.",
    tags: ["Expressions", "Equality", "Type Coercion"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_3;
