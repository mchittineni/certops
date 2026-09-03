export const GITHUB_ACTIONS_FLASHCARDS_2 = [
  {
    id: "github-actions-fc-26",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Matrix Strategy: Multi-Configuration Builds",
    hint: "Testing across multiple operating systems and runtime versions concurrently.",
    back: "<strong><code>strategy.matrix</code></strong> generates a parallel job for every permutation of defined parameters (e.g. <code>os: [ubuntu-latest, windows-latest]</code> and <code>node: [18, 20]</code> generates 4 parallel jobs).",
    tags: ["Matrix", "Testing", "Parallelism"]
  },
  {
    id: "github-actions-fc-27",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Matrix fail-fast Behavior",
    hint: "Cancelling sibling matrix jobs immediately on the first failure.",
    back: "By default, <strong><code>fail-fast: true</code></strong> cancels all running and pending matrix jobs as soon as any single matrix job fails. Setting <code>fail-fast: false</code> ensures all jobs run to completion.",
    tags: ["Matrix", "fail-fast", "Error Handling"]
  },
  {
    id: "github-actions-fc-28",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Throttling Matrix Concurrency: max-parallel",
    hint: "Capping the maximum number of matrix jobs executing simultaneously.",
    back: "Set <strong><code>max-parallel: 2</code></strong> inside <code>strategy:</code> to limit simultaneous matrix jobs, preventing exhaustion of self-hosted runner capacity or rate limits on external services.",
    tags: ["Matrix", "max-parallel", "Throttling"]
  },
  {
    id: "github-actions-fc-29",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Matrix Customization: include and exclude",
    hint: "Adding bespoke configurations or skipping incompatible pairs.",
    back: "<strong><code>include</code></strong> adds specific configurations or extra variables to specific combinations. <strong><code>exclude</code></strong> removes specific incompatible combinations from the matrix expansion.",
    tags: ["Matrix", "include", "exclude"]
  },
  {
    id: "github-actions-fc-30",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Artifact Management: upload-artifact vs. download-artifact",
    hint: "Saving build files and retrieving them in dependent jobs.",
    back: "<strong><code>actions/upload-artifact@v4</code></strong> saves files (binaries, test reports) to GitHub storage. <strong><code>actions/download-artifact@v4</code></strong> retrieves those saved files in downstream jobs.",
    tags: ["Artifacts", "Storage", "Data Sharing"]
  },
  {
    id: "github-actions-fc-31",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Artifact Retention Days",
    hint: "Configuring how long uploaded artifacts are retained before automatic deletion.",
    back: "Specify <strong><code>retention-days: 7</code></strong> in <code>actions/upload-artifact</code> (default is 90 days for public repos). Reducing retention prevents unnecessary storage consumption on private repositories.",
    tags: ["Artifacts", "Retention", "Cost Optimization"]
  },
  {
    id: "github-actions-fc-32",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "actions/cache: Accelerating Dependency Installs",
    hint: "Caching npm, pip, or Maven packages across runs to eliminate repeated downloads.",
    back: "<strong><code>actions/cache@v4</code></strong> saves and restores dependencies across runs using a unique <strong><code>key</code></strong>. If a cache hit occurs, dependencies are restored locally in seconds.",
    tags: ["Cache", "Performance", "Dependencies"]
  },
  {
    id: "github-actions-fc-33",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "actions/cache: key vs. restore-keys",
    hint: "Exact cryptographic match vs. fallback prefix match.",
    back: "<strong><code>key</code></strong> requires an exact string match (e.g. <code>npm-${{ hashFiles('package-lock.json') }}</code>). If missing, <strong><code>restore-keys</code></strong> lists fallback prefixes (e.g. <code>npm-</code>) to restore an older cache.",
    tags: ["Cache", "restore-keys", "hashFiles"]
  },
  {
    id: "github-actions-fc-34",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Cache Storage Limits and Eviction Policy",
    hint: "10 GB per repository limit and 7-day inactivity eviction.",
    back: "GitHub Actions enforces a <strong>10 GB cache limit per repository</strong>. If exceeded, the oldest caches by access time are evicted. Caches not accessed for <strong>7 days</strong> are automatically purged.",
    tags: ["Cache", "Eviction", "Storage Limits"]
  },
  {
    id: "github-actions-fc-35",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Built-In Caching in Setup Actions",
    hint: "Zero-config package caching using actions/setup-node, setup-python, setup-java.",
    back: "Official setup actions include built-in caching: <code>actions/setup-node</code> supports <strong><code>cache: 'npm'</code></strong> (or yarn/pnpm), and <code>setup-python</code> supports <strong><code>cache: 'pip'</code></strong>, automating cache keys and paths.",
    tags: ["Setup Actions", "Cache", "Node.js", "Python"]
  },
  {
    id: "github-actions-fc-36",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Job Timeouts: timeout-minutes",
    hint: "Preventing stuck processes from exhausting billable runner minutes.",
    back: "Set <strong><code>timeout-minutes: 30</code></strong> at the job or step level (default is 360 minutes / 6 hours). This prevents hung tests or blocked network calls from wasting runner quotas.",
    tags: ["Timeouts", "timeout-minutes", "Cost Optimization"]
  },
  {
    id: "github-actions-fc-37",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Tolerating Failures: continue-on-error",
    hint: "Allowing non-critical steps or matrix jobs to fail without failing the workflow.",
    back: "Setting <strong><code>continue-on-error: true</code></strong> on a step or matrix job marks it as failed with an annotation, but allows subsequent steps and the overall job status to proceed as successful.",
    tags: ["Error Handling", "continue-on-error", "Flow Control"]
  },
  {
    id: "github-actions-fc-38",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Expression Function: hashFiles",
    hint: "Generating deterministic cryptographic SHA-256 hashes of matched files.",
    back: "<strong><code>hashFiles('**/package-lock.json', '**/yarn.lock')</code></strong> calculates a single SHA-256 hash across all matched files, automatically invalidating caches when dependencies change.",
    tags: ["hashFiles", "Cache", "Expressions"]
  },
  {
    id: "github-actions-fc-39",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "JSON Expression Functions: fromJSON and toJSON",
    hint: "Parsing JSON strings and serializing objects in expressions.",
    back: "<strong><code>fromJSON()</code></strong> parses a JSON string into a native object/array (enabling dynamic matrix generation). <strong><code>toJSON()</code></strong> serializes contexts into JSON strings for logging or API payloads.",
    tags: ["Functions", "fromJSON", "toJSON", "Expressions"]
  },
  {
    id: "github-actions-fc-40",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "String Expression Functions: contains, startsWith, endsWith",
    hint: "Evaluating substrings and branch patterns in conditionals.",
    back: "GitHub Actions provides <strong><code>contains(search, item)</code></strong>, <strong><code>startsWith(str, prefix)</code></strong>, and <strong><code>endsWith(str, suffix)</code></strong>. Example: <code>startsWith(github.ref, 'refs/tags/v')</code> triggers release jobs.",
    tags: ["Functions", "Strings", "Conditionals"]
  },
  {
    id: "github-actions-fc-41",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Expression Function: format",
    hint: "Constructing dynamic strings with indexed positional placeholders.",
    back: "<strong><code>format('Build {0} for {1}', github.run_number, github.ref_name)</code></strong> replaces positional placeholders with evaluated parameters, simplifying string interpolation.",
    tags: ["Functions", "format", "Expressions"]
  },
  {
    id: "github-actions-fc-42",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Dynamic Matrix Generation Pattern",
    hint: "Computing matrix configurations dynamically during workflow execution.",
    back: "Job A runs a script that detects changed modules and writes a JSON array to <code>$GITHUB_OUTPUT</code>. Job B sets <code>strategy.matrix: ${{ fromJSON(needs.job_a.outputs.matrix) }}</code> to build only modified modules.",
    tags: ["Matrix", "fromJSON", "Dynamic"]
  },
  {
    id: "github-actions-fc-43",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "GitHub Environments and Deployments",
    hint: "Targeting environments with protection rules and environment secrets.",
    back: "Setting <strong><code>environment: { name: 'production', url: 'https://app.com' }</code></strong> binds the job to a configured GitHub environment, enforcing protection rules (approvals) and granting environment secrets.",
    tags: ["Environments", "Deployments", "CD"]
  },
  {
    id: "github-actions-fc-44",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Environment Protection: Required Reviewers",
    hint: "Enforcing manual human approval before production deployments run.",
    back: "<strong>Required reviewers</strong> pauses the workflow when a job targets an environment, notifying designated users or teams. The job remains pending until an authorized reviewer approves or rejects it.",
    tags: ["Environments", "Approvals", "Governance"]
  },
  {
    id: "github-actions-fc-45",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Environment Protection: Wait Timers",
    hint: "Introducing a deliberate cooldown delay before deployment starts.",
    back: "A <strong>Wait timer</strong> delays the start of a deployment job for a configured number of minutes after triggering, allowing automated soak periods or canaries to stabilize before proceeding.",
    tags: ["Environments", "Wait Timer", "CD"]
  },
  {
    id: "github-actions-fc-46",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Environment Deployment Branches",
    hint: "Restricting which Git branches and tags can deploy to specific environments.",
    back: "Configure <strong>deployment branches</strong> on an environment (e.g. allowing only <code>main</code> or <code>release/*</code>) so that feature branches and pull requests cannot deploy to production environments.",
    tags: ["Environments", "Branch Protection", "Security"]
  },
  {
    id: "github-actions-fc-47",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Automatic Token: GITHUB_TOKEN Secret",
    hint: "Ephemeral installation token provisioned automatically for each workflow job.",
    back: "GitHub generates a unique <strong><code>secrets.GITHUB_TOKEN</code></strong> for every job to authenticate with the GitHub API. It expires when the job finishes and its permissions can be strictly controlled.",
    tags: ["GITHUB_TOKEN", "Authentication", "Security"]
  },
  {
    id: "github-actions-fc-48",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Configuring Least-Privilege GITHUB_TOKEN: permissions",
    hint: "Scoping GITHUB_TOKEN access at workflow or job level.",
    back: "Use the <strong><code>permissions:</code></strong> block to grant only required scopes: e.g. <code>permissions: { contents: read, pull-requests: write, id-token: write }</code>. Unlisted scopes are automatically revoked.",
    tags: ["GITHUB_TOKEN", "permissions", "Least Privilege"]
  },
  {
    id: "github-actions-fc-49",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Reusable Workflows vs. Workflow Run Chaining",
    hint: "Synchronous sub-workflow execution vs. asynchronous event-driven triggers.",
    back: "<strong><code>workflow_call</code></strong> invokes a reusable workflow synchronously as part of the calling job graph. <strong><code>workflow_run</code></strong> triggers a separate workflow asynchronously after a named workflow completes.",
    tags: ["Workflows", "workflow_call", "workflow_run"]
  },
  {
    id: "github-actions-fc-50",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Masking Secrets in Logs: ::add-mask::",
    hint: "Preventing generated credentials from leaking into execution logs.",
    back: "Running <code>echo '::add-mask::my_generated_secret'</code> instructs the runner to mask that exact string in all current and subsequent console log outputs, replacing every occurrence with <code>***</code>.",
    tags: ["Workflow Commands", "Masking", "Secrets"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_2;
