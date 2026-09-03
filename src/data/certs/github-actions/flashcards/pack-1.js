export const GITHUB_ACTIONS_FLASHCARDS_1 = [
  {
    id: "github-actions-fc-1",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "GitHub Actions Workflow File Location and Extension",
    hint: "Specific directory path in git repository root.",
    back: "Workflow files must reside in the <strong><code>.github/workflows/</code></strong> directory at the repository root and use either <strong><code>.yml</code></strong> or <strong><code>.yaml</code></strong> extensions.",
    tags: ["GitHub Actions", "Workflows", "YAML"]
  },
  {
    id: "github-actions-fc-2",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Triggers: push vs. pull_request",
    hint: "Direct commit push vs. proposed pull request branch.",
    back: "<strong><code>push</code></strong> triggers on direct commits to a branch or tag. <strong><code>pull_request</code></strong> triggers on PR lifecycle events (opened, synchronize, reopened) running on a transient merge commit.",
    tags: ["Triggers", "push", "pull_request"]
  },
  {
    id: "github-actions-fc-3",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Security Risk: pull_request vs. pull_request_target",
    hint: "Isolated fork execution vs. privileged base repository execution.",
    back: "<strong><code>pull_request</code></strong> runs untrusted fork code with read-only tokens and no repository secrets. <strong><code>pull_request_target</code></strong> runs in the base branch context with full secret access; never checkout untrusted fork code in it.",
    tags: ["Security", "pull_request_target", "Forks"]
  },
  {
    id: "github-actions-fc-4",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Manual Workflow Trigger: workflow_dispatch",
    hint: "Run on-demand from GitHub UI or REST API with custom parameters.",
    back: "<strong><code>workflow_dispatch</code></strong> allows users to trigger a workflow manually from the GitHub UI or API. It supports input parameters (string, boolean, choice, environment) defined under <code>inputs:</code>.",
    tags: ["Triggers", "workflow_dispatch", "Manual"]
  },
  {
    id: "github-actions-fc-5",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "External Webhook Trigger: repository_dispatch",
    hint: "Triggering workflows from outside GitHub via HTTP POST API.",
    back: "<strong><code>repository_dispatch</code></strong> triggers workflows from external CI/CD tools or scripts via the GitHub API (<code>POST /repos/{owner}/{repo}/dispatches</code>) using a custom <code>event_type</code> and payload.",
    tags: ["Triggers", "repository_dispatch", "API"]
  },
  {
    id: "github-actions-fc-6",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Scheduled Workflow Execution: schedule Trigger",
    hint: "POSIX cron syntax running in UTC time.",
    back: "<strong><code>schedule</code></strong> triggers workflows at automated times using standard 5-field POSIX cron syntax (<code>minute hour day month day-of-week</code>). All schedule intervals evaluate strictly in <strong>UTC</strong>.",
    tags: ["Triggers", "schedule", "Cron"]
  },
  {
    id: "github-actions-fc-7",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Trigger Filters: branches vs. branches-ignore",
    hint: "Allowlist vs. blocklist for branch triggers.",
    back: "<strong><code>branches</code></strong> specifies an allowlist of branches that trigger execution (e.g. <code>['main', 'release/**']</code>). <strong><code>branches-ignore</code></strong> triggers on all branches except listed ones. They cannot be combined.",
    tags: ["Triggers", "Branches", "Filtering"]
  },
  {
    id: "github-actions-fc-8",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Trigger Filters: paths vs. paths-ignore",
    hint: "Triggering workflows only when specific files are changed.",
    back: "<strong><code>paths</code></strong> ensures workflows run only when modified files match patterns (e.g. <code>src/**</code>). <strong><code>paths-ignore</code></strong> skips runs when only documentation or non-code files (e.g. <code>*.md</code>) are changed.",
    tags: ["Triggers", "Paths", "Optimization"]
  },
  {
    id: "github-actions-fc-9",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Job Execution: Parallel by Default",
    hint: "Concurrent execution across available runners.",
    back: "By default, jobs defined inside a single workflow run <strong>concurrently in parallel</strong> if runners are available. Sequential order requires explicit <code>needs:</code> dependencies.",
    tags: ["Jobs", "Execution", "Parallelism"]
  },
  {
    id: "github-actions-fc-10",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Job Dependencies: The needs Keyword",
    hint: "Building a Directed Acyclic Graph (DAG) of job execution.",
    back: "Specifying <strong><code>needs: [build, test]</code></strong> ensures a job executes only after prerequisite jobs complete successfully. If a required job fails, dependent jobs are skipped by default.",
    tags: ["Jobs", "needs", "DAG"]
  },
  {
    id: "github-actions-fc-11",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Concurrency: Cancelling Outdated Builds",
    hint: "Auto-aborting older in-progress builds when a new commit arrives.",
    back: "Use <strong><code>concurrency: { group: '${{ github.ref }}', cancel-in-progress: true }</code></strong> to ensure only one run executes per branch/PR, automatically cancelling obsolete running builds.",
    tags: ["Concurrency", "Optimization", "Resource Management"]
  },
  {
    id: "github-actions-fc-12",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Runner Specification: runs-on",
    hint: "Selecting the operating system or runner pool.",
    back: "<strong><code>runs-on</code></strong> defines the runner environment\u2014such as GitHub-hosted virtual machines (<code>ubuntu-latest</code>, <code>windows-latest</code>, <code>macos-latest</code>) or custom self-hosted runner labels (<code>[self-hosted, linux]</code>).",
    tags: ["Runners", "runs-on", "Infrastructure"]
  },
  {
    id: "github-actions-fc-13",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Global Step Defaults: defaults.run",
    hint: "Configuring default shell or working directory across all steps.",
    back: "Under <strong><code>defaults.run</code></strong>, you can set <code>shell: bash</code> or <code>working-directory: ./src</code> so that every command in that job automatically inherits that shell and execution directory.",
    tags: ["Defaults", "Configuration", "Shell"]
  },
  {
    id: "github-actions-fc-14",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Step Types: run vs. uses",
    hint: "Executing terminal shell commands vs. modular GitHub actions.",
    back: "<strong><code>run:</code></strong> executes shell commands directly on the runner. <strong><code>uses:</code></strong> invokes an external modular action from GitHub Marketplace, a local repository path, or a Docker container image.",
    tags: ["Steps", "run", "uses"]
  },
  {
    id: "github-actions-fc-15",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Repository Checkout: actions/checkout",
    hint: "Cloning source code into the runner workspace.",
    back: "Runners start with an empty workspace. <strong><code>actions/checkout@v4</code></strong> clones your git repository into <code>$GITHUB_WORKSPACE</code>. By default it fetches a single commit (<code>fetch-depth: 1</code>).",
    tags: ["checkout", "Git", "Workspace"]
  },
  {
    id: "github-actions-fc-16",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Runtime Contexts: github vs. env vs. secrets",
    hint: "Workflow run metadata vs. environment variables vs. encrypted tokens.",
    back: "<strong><code>github.*</code></strong> provides workflow runtime data (actor, sha, ref). <strong><code>env.*</code></strong> contains environment variables. <strong><code>secrets.*</code></strong> provides access to encrypted credentials configured in settings.",
    tags: ["Contexts", "Variables", "Secrets"]
  },
  {
    id: "github-actions-fc-17",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Standard Variables: GITHUB_WORKSPACE and GITHUB_SHA",
    hint: "Runner root working folder and git commit hash.",
    back: "<strong><code>GITHUB_WORKSPACE</code></strong> is the default working folder where code is cloned. <strong><code>GITHUB_SHA</code></strong> is the full 40-character commit hash that triggered the workflow run.",
    tags: ["Environment Variables", "Git", "Runner"]
  },
  {
    id: "github-actions-fc-18",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Expression Evaluation: ${{ }} Syntax",
    hint: "Evaluating expressions, variables, and operators.",
    back: "Expressions wrapped in <strong><code>${{ &lt;expression&gt; }}</code></strong> evaluate variables and operators. Actions supports booleans (<code>&&</code>, <code>||</code>, <code>!</code>), equality (<code>==</code>, <code>!=</code>), and relational operators.",
    tags: ["Expressions", "Syntax", "Conditionals"]
  },
  {
    id: "github-actions-fc-19",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Step Conditionals: The if Keyword",
    hint: "Running steps or jobs conditionally based on branch, status, or inputs.",
    back: "The <strong><code>if:</code></strong> keyword controls execution. Inside an <code>if:</code> clause, <code>${{ }}</code> delimiters can be omitted. Example: <code>if: github.ref == 'refs/heads/main'</code> runs only on the main branch.",
    tags: ["Conditionals", "if", "Flow Control"]
  },
  {
    id: "github-actions-fc-20",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Status Check Functions: success() vs. failure() vs. always()",
    hint: "Conditional step execution based on prior step health.",
    back: "<strong><code>success()</code></strong> (default) runs if no prior step failed. <strong><code>failure()</code></strong> runs only when an earlier step failed. <strong><code>always()</code></strong> forces execution regardless of failures, ideal for post-test cleanup.",
    tags: ["Status Functions", "Error Handling", "Flow Control"]
  },
  {
    id: "github-actions-fc-21",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Passing Data Between Jobs: Job Outputs",
    hint: "Exporting values from one job to make them available in dependent jobs.",
    back: "Define <strong><code>outputs:</code></strong> at the job level mapped to a step output (<code>${{ steps.&lt;id&gt;.outputs.&lt;name&gt; }}</code>). Downstream jobs with <code>needs: [upstream]</code> reference it via <code>${{ needs.upstream.outputs.&lt;name&gt; }}</code>.",
    tags: ["Job Outputs", "Data Sharing", "DAG"]
  },
  {
    id: "github-actions-fc-22",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Step Outputs: Writing to GITHUB_OUTPUT",
    hint: "Exporting output parameters from a step to subsequent steps.",
    back: "To output values from a shell step, append key-value pairs to the file at <strong><code>$GITHUB_OUTPUT</code></strong>: <code>echo 'version=2.0.1' >> \"$GITHUB_OUTPUT\"</code>. Downstream steps read <code>${{ steps.&lt;id&gt;.outputs.version }}</code>.",
    tags: ["Step Outputs", "GITHUB_OUTPUT", "Shell"]
  },
  {
    id: "github-actions-fc-23",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Persisting Variables Across Steps: GITHUB_ENV",
    hint: "Setting environment variables that survive step execution.",
    back: "Writing to <strong><code>$GITHUB_ENV</code></strong> persists an environment variable for all following steps in the current job: <code>echo 'NODE_ENV=production' >> \"$GITHUB_ENV\"</code>.",
    tags: ["Environment", "GITHUB_ENV", "Shell"]
  },
  {
    id: "github-actions-fc-24",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Adding to Executable PATH: GITHUB_PATH",
    hint: "Prepending directories to system PATH for subsequent steps.",
    back: "Append directories to the file at <strong><code>$GITHUB_PATH</code></strong>: <code>echo '/opt/custom/bin' >> \"$GITHUB_PATH\"</code>. The runner automatically prepends this path to system <code>PATH</code> for all following steps.",
    tags: ["PATH", "GITHUB_PATH", "Tools"]
  },
  {
    id: "github-actions-fc-25",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Custom Markdown Reports: GITHUB_STEP_SUMMARY",
    hint: "Rendering rich Markdown test reports and build summaries on the run page.",
    back: "Append Markdown text to <strong><code>$GITHUB_STEP_SUMMARY</code></strong>: <code>echo '### Deployment Succeeded' >> \"$GITHUB_STEP_SUMMARY\"</code>. GitHub Actions renders it on the workflow run page.",
    tags: ["Step Summaries", "Markdown", "Reporting"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_1;
