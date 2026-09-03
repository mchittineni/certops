export const GITHUB_ACTIONS_FLASHCARDS_9 = [
  {
    id: "github-actions-fc-201",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Enterprise Allowed Actions: GitHub Verified Creators",
    hint: "Allowing official GitHub actions and verified partner marketplace actions.",
    back: "Under Enterprise Actions policies, configure <strong>'Allow actions created by GitHub and verified creators'</strong> to permit official actions while blocking unvetted third-party community actions.",
    tags: ["Allowed Actions", "Enterprise", "Governance"]
  },
  {
    id: "github-actions-fc-202",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Enterprise Allowed Actions: Custom Action Allowlist",
    hint: "Specifying a granular regex list of authorized marketplace actions.",
    back: "Administrators can define a comma-separated list of approved patterns (e.g. <code>actions/*</code>, <code>docker/*</code>, <code>aws-actions/*</code>). Any workflow referencing an unlisted action fails validation immediately.",
    tags: ["Allowed Actions", "Allowlist", "Enterprise", "Governance"]
  },
  {
    id: "github-actions-fc-203",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Custom Rulesets for Workflow Protection",
    hint: "Using GitHub Rulesets to prevent deletion or bypass of .github/workflows/.",
    back: "GitHub <strong>Rulesets</strong> enforce branch protections across hundreds of repositories at once, preventing force-pushes and requiring pull request reviews on all files matching <code>.github/workflows/**</code>.",
    tags: ["Rulesets", "Branch Protection", "Enterprise"]
  },
  {
    id: "github-actions-fc-204",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Actions Runner Controller (ARC): Webhook-Driven Autoscaling",
    hint: "Scaling Kubernetes runner pods based on real-time workflow_job webhook events.",
    back: "ARC listens to GitHub <code>workflow_job</code> webhook events (queued, in_progress, completed) to dynamically scale Kubernetes runner pod replicas, eliminating cold-start latency for busy CI queues.",
    tags: ["ARC", "Kubernetes", "Autoscaling", "Webhooks"]
  },
  {
    id: "github-actions-fc-205",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "ARC Runner Deployment vs. RunnerSet",
    hint: "Stateless ephemeral runner deployment models in Kubernetes.",
    back: "ARC provides custom resource definitions (CRDs): <strong>AutoscalingRunnerSet</strong> manages ephemeral runner pod lifecycles with built-in queue listener integration.",
    tags: ["ARC", "Kubernetes", "CRD", "Runners"]
  },
  {
    id: "github-actions-fc-206",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Optimizing Workflow Storage Costs in Enterprise",
    hint: "Tuning artifact retention, cache eviction, and disabling unnecessary debug logs.",
    back: "Reduce storage bills by: lowering default artifact retention from 90 to 7 days, purging unused caches, and ensuring debug logging secrets (<code>ACTIONS_STEP_DEBUG</code>) are disabled in production.",
    tags: ["FinOps", "Cost Optimization", "Storage", "Enterprise"]
  },
  {
    id: "github-actions-fc-207",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Enterprise Runner Groups: Permission Hierarchy",
    hint: "Preventing sensitive internal runners from being used by contractor repositories.",
    back: "Configure runner groups with <strong>'Selected repositories'</strong> access and assign only trusted core repositories, preventing public or contractor repos from dispatching jobs to internal network runners.",
    tags: ["Runner Groups", "Enterprise", "Security", "Governance"]
  },
  {
    id: "github-actions-fc-208",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub Actions Service Level Agreement (SLA)",
    hint: "99.9% uptime commitment for GitHub-hosted runners and workflow execution.",
    back: "GitHub Enterprise Cloud provides a <strong>99.9% monthly uptime SLA</strong> for core GitHub Actions services, covering workflow scheduling and GitHub-hosted runner provisioning.",
    tags: ["SLA", "Enterprise", "Reliability"]
  },
  {
    id: "github-actions-fc-209",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Auditing Actions Secret Usage via Audit Log",
    hint: "Identifying who created, updated, or deleted repository secrets.",
    back: "Query the Enterprise Audit Log for <code>action:repo.create_secret</code> or <code>action:org.update_secret</code> to audit credential rotation compliance and detect unauthorized secret changes.",
    tags: ["Audit Log", "Secrets", "Compliance", "Security"]
  },
  {
    id: "github-actions-fc-210",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Managing Actions Concurrency at Scale",
    hint: "Preventing simultaneous pipeline runs from corrupting stateful deployments.",
    back: "Use named concurrency groups (e.g. <code>concurrency: production_deploy</code>) without <code>cancel-in-progress</code> to force deployment jobs to queue and execute strictly sequentially.",
    tags: ["Concurrency", "Deployments", "CD", "Best Practices"]
  },
  {
    id: "github-actions-fc-211",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub Actions Runner Architecture: Runner Service & Worker Process",
    hint: "The relationship between the listener service and ephemeral job workers.",
    back: "The runner application runs a long-lived <strong>Listener</strong> process connected to GitHub. When a job arrives, it spawns an isolated ephemeral <strong>Worker</strong> process to execute the workflow steps.",
    tags: ["Runners", "Architecture", "Processes", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-212",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Custom Runner Environment Variables: .env File",
    hint: "Configuring persistent environment variables for all jobs on a self-hosted runner.",
    back: "Creating a <strong><code>.env</code></strong> file in the runner root directory injects configured key-value pairs into the environment of every job executed by that runner.",
    tags: ["Self-Hosted", ".env", "Environment"]
  },
  {
    id: "github-actions-fc-213",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Self-Hosted Runner Hook Scripts: JOB_STARTED and JOB_COMPLETED",
    hint: "Executing custom host cleanup scripts before and after every workflow job.",
    back: "Define environment variables <strong><code>ACTIONS_RUNNER_HOOK_JOB_STARTED</code></strong> and <strong><code>ACTIONS_RUNNER_HOOK_JOB_COMPLETED</code></strong> pointing to bash scripts to run host security scans or cleanup.",
    tags: ["Hooks", "Self-Hosted", "Security", "Cleanup"]
  },
  {
    id: "github-actions-fc-214",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Managing Actions Workflows via Terraform",
    hint: "Infrastructure as Code management of GitHub repository secrets and settings.",
    back: "The <strong>GitHub Terraform Provider</strong> (<code>integrations/github</code>) automates creation of repository secrets, environment protection rules, and branch protection rules as code.",
    tags: ["Terraform", "IaC", "DevOps", "Governance"]
  },
  {
    id: "github-actions-fc-215",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Using Environment Protection: Deployment Branch Policies",
    hint: "Restricting production environment deployments to Git tags matching v*.*.*.",
    back: "Configure deployment branch policy with pattern <code>v*.*.*</code> on the production environment. A workflow targeting production will fail if triggered from a branch or untagged commit.",
    tags: ["Environments", "Tags", "Release Governance"]
  },
  {
    id: "github-actions-fc-216",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Cross-Repository Workflow Triggering with repository_dispatch",
    hint: "Notifying downstream microservice repositories when a shared library releases.",
    back: "A release workflow in Library Repo uses <code>actions/github-script</code> or <code>curl</code> to dispatch a <code>repository_dispatch</code> event to Downstream App Repos to trigger integration tests.",
    tags: ["Microservices", "repository_dispatch", "CI/CD"]
  },
  {
    id: "github-actions-fc-217",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Dynamic Job Names for Clearer Build Matrices",
    hint: "Injecting matrix variables into job name definitions for easy log navigation.",
    back: "Define <code>name: E2E Tests (${{ matrix.browser }} on ${{ matrix.os }})</code>. Each parallel node in the Actions UI displays its unique parameters, simplifying failed job triage.",
    tags: ["Matrix", "UI", "Best Practices"]
  },
  {
    id: "github-actions-fc-218",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub Actions Default Timeout Limits",
    hint: "360 minutes per job and 72 hours per workflow run maximum limits.",
    back: "A single job on GitHub-hosted runners can execute for a maximum of <strong>6 hours (360 minutes)</strong>. An entire workflow run across multiple jobs is capped at <strong>72 hours (4,320 minutes)</strong>.",
    tags: ["Limits", "Timeouts", "Runners"]
  },
  {
    id: "github-actions-fc-219",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Artifact Retention Minimum and Maximum Bounds",
    hint: "Configurable range between 1 day and 90 days for artifact storage.",
    back: "Artifact retention can be set between a minimum of <strong>1 day</strong> and a maximum of <strong>90 days</strong>. Pull request artifacts should use 1\u20133 day retention to reduce storage costs.",
    tags: ["Artifacts", "Retention", "Cost Management"]
  },
  {
    id: "github-actions-fc-220",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Group Access: Public Repositories",
    hint: "Preventing self-hosted runner groups from being utilized by public repositories.",
    back: "Organization settings include a checkbox: <strong>'Allow public repositories to use this runner group'</strong> (disabled by default) to prevent unauthorized public fork code execution.",
    tags: ["Runner Groups", "Security", "Public Repos"]
  },
  {
    id: "github-actions-fc-221",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Using GITHUB_STEP_SUMMARY with Dynamic Tables",
    hint: "Generating rich Markdown tables summarizing build status across multiple jobs.",
    back: "Scripts can output markdown tables (e.g. <code>| Test Suite | Passed | Failed |</code>) to <code>$GITHUB_STEP_SUMMARY</code>, rendering clean formatted dashboards for engineering teams.",
    tags: ["Step Summaries", "Markdown", "Reporting"]
  },
  {
    id: "github-actions-fc-222",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Actions Metrics and Insights via GitHub REST API",
    hint: "Exporting workflow run durations and failure rates to Datadog or Prometheus.",
    back: "Use <code>GET /repos/{owner}/{repo}/actions/runs</code> to collect run duration, conclusion, and failure rates to build engineering efficiency dashboards.",
    tags: ["Metrics", "API", "Observability", "DevOps"]
  },
  {
    id: "github-actions-fc-223",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Preventing Runner Memory Starvation in Matrix Builds",
    hint: "Throttling concurrency when jobs run memory-intensive compiler tasks.",
    back: "When matrix jobs compile heavy C++/Rust code or run Android emulators, set <code>max-parallel: 2</code> or target larger runners to prevent out-of-memory (OOM) kernel panics.",
    tags: ["Matrix", "Performance", "Memory", "Runners"]
  },
  {
    id: "github-actions-fc-224",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Self-Hosted Runner Network Proxy Bypass: .no_proxy",
    hint: "Configuring internal host domains that should bypass corporate proxy.",
    back: "Create a <strong><code>.no_proxy</code></strong> file alongside <code>.proxy</code> in the runner installation directory containing comma-separated internal domains (e.g. <code>localhost,corp.internal,10.0.0.0/8</code>).",
    tags: ["Proxy", "Networking", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-225",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Securing Fork PRs with Environment Approvals",
    hint: "Requiring maintainer approval before deployment or testing jobs run on PRs.",
    back: "Even when PRs originate from forks, routing jobs through an environment with required reviewers guarantees human inspection before runner execution.",
    tags: ["Environments", "Approvals", "Security", "Forks"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_9;
