export const GITHUB_ACTIONS_QUESTIONS_1 = [
  {
    id: "gh-200-1",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Cancelling Superseded Runs on a Pull Request Branch",
    scenario: "A CI workflow takes eleven minutes. Developers push several commits in quick succession to the same pull request branch, and every push starts another run, so four runs of the same branch execute at once and exhaust the concurrency allowance.",
    question: "Which workflow configuration ensures that only the newest run for a branch continues and older in-progress runs are cancelled?",
    options: [
      { id: 'A', text: "Add a concurrency block with group set to a value derived from the workflow and github.ref, and cancel-in-progress set to true." },
      { id: 'B', text: "Set strategy.fail-fast to true on the build job." },
      { id: 'C', text: "Add an if condition comparing github.run_number to the repository default branch." },
      { id: 'D', text: "Set timeout-minutes to a value lower than the average run duration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A concurrency block assigns runs to a named group and cancel-in-progress terminates any run already executing in that group when a new one starts, which is exactly the supersede behaviour wanted per branch. The fail-fast strategy only cancels sibling jobs within a single matrix run, timeout-minutes kills long runs regardless of whether a newer one exists, and run_number carries no cancellation semantics.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["GH-200", "Workflows", "Concurrency"]
  },
  {
    id: "gh-200-2",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Granting GITHUB_TOKEN Write Access to Repository Contents",
    scenario: "A release workflow uses the built-in GITHUB_TOKEN to push a version bump commit back to the repository. The push step fails with a permission error even though the repository allows workflows to create and approve pull requests.",
    question: "What is the correct way to let this workflow push the commit?",
    options: [
      { id: 'A', text: "Create a personal access token and store it as an organization variable." },
      { id: 'B', text: "Add a permissions block granting contents: write at the workflow or job level." },
      { id: 'C', text: "Set the job to run on a self-hosted runner so it inherits the repository owner permissions." },
      { id: 'D', text: "Add the actions/checkout step with persist-credentials set to false." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The automatic GITHUB_TOKEN receives a default permission set that is read-only in repositories configured for restricted defaults, and a permissions block raises the specific scope needed, here contents: write for pushing. A personal access token would work but replaces a scoped ephemeral credential with a long-lived one, persist-credentials: false removes the token from the git config entirely, and runner type has no bearing on token scope.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication",
    tags: ["GH-200", "Workflows", "GITHUB_TOKEN", "Permissions"]
  },
  {
    id: "gh-200-3",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Removing One Combination From a Build Matrix",
    scenario: "A matrix builds three Node versions against two operating systems, producing six jobs. The Node 16 on windows-latest combination is known to be unsupported and must not run, but all five other combinations must continue.",
    question: "Which matrix key removes just that one combination?",
    options: [
      { id: 'A', text: "An include entry listing the five wanted combinations." },
      { id: 'B', text: "An exclude entry naming node-version 16 together with os windows-latest." },
      { id: 'C', text: "A max-parallel value of five." },
      { id: 'D', text: "A continue-on-error setting scoped to the windows-latest runner." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The exclude key removes matrix combinations that match every property listed in the entry, so naming both the Node version and the operating system deletes precisely that one job and leaves the other five expanded normally. An include entry adds combinations or extends existing ones rather than pruning them, continue-on-error still runs the job and merely tolerates its failure, and max-parallel limits how many jobs execute simultaneously without changing which exist.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Workflows", "Matrix"]
  },
  {
    id: "gh-200-4",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Passing a Computed Value From One Job to Another",
    scenario: "A build job computes an image tag from the commit metadata. A later deploy job in the same workflow, declared with needs on the build job, has to use that exact tag. The two jobs run on different runners.",
    question: "Which mechanism makes the tag available to the deploy job?",
    options: [
      { id: 'A', text: "Write the tag to the file referenced by GITHUB_ENV, which is shared across all jobs in the workflow." },
      { id: 'B', text: "Write the tag to the file referenced by GITHUB_OUTPUT in a step with an id, declare a job-level outputs mapping, and read it through the needs context in the deploy job." },
      { id: 'C', text: "Store the tag in a repository secret from the build job and read the secret in the deploy job." },
      { id: 'D', text: "Write the tag to an environment variable with export so later jobs inherit it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Job outputs are the supported channel between jobs: a step writes a key-value pair to the GITHUB_OUTPUT file, the job maps that step output into its own outputs block, and a dependent job reads it through the needs context. Shell exports and GITHUB_ENV both scope to a single job because each job gets a fresh runner and fresh environment, and secrets are not writable from a workflow run.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs",
    tags: ["GH-200", "Workflows", "Job Outputs", "needs"]
  },
  {
    id: "gh-200-5",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Cache Restore Keys for a Changed Lockfile",
    scenario: "A workflow caches the dependency directory with a key built from a hash of the lockfile. Whenever a single dependency is added the hash changes, the cache misses completely, and the job spends four minutes downloading every package again.",
    question: "Which change reduces the cost of a lockfile change without ever serving a stale exact match?",
    options: [
      { id: 'A', text: "Replace the lockfile hash in the key with the run identifier so the key is always unique." },
      { id: 'B', text: "Add restore-keys containing a shorter prefix of the same key so a partial match seeds the directory before installation." },
      { id: 'C', text: "Upload the dependency directory as a build artifact and download it at the start of each run." },
      { id: 'D', text: "Set the cache key to a constant string so it never changes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Restore keys are ordered prefixes tried when the primary key misses, so the most recent cache from the same prefix is restored and the package manager only fetches what actually changed, while the primary key still governs what gets saved. A unique key guarantees a permanent miss, artifacts are meant for run outputs and are billed and retained differently, and a constant key would serve genuinely stale dependencies forever.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["GH-200", "Workflows", "Caching"]
  },
  {
    id: "gh-200-6",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Safely Handling Pull Requests From Forks",
    scenario: "A maintainer wants pull requests from forks to run a workflow that needs a repository secret to post coverage results. The current workflow triggers on pull_request, where secrets are unavailable to fork contributions.",
    question: "Why is switching the trigger to pull_request_target and checking out the pull request head considered dangerous?",
    options: [
      { id: 'A', text: "pull_request_target runs in the context of the base repository with access to secrets and a writable token, so checking out and executing untrusted fork code lets a contributor exfiltrate those secrets." },
      { id: 'B', text: "pull_request_target cannot be combined with a permissions block, so the token always has full write access." },
      { id: 'C', text: "pull_request_target only fires when the pull request is merged, so coverage would be reported too late." },
      { id: 'D', text: "pull_request_target does not provide the pull request number, so the coverage comment cannot be posted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The pull_request_target event evaluates the workflow from the base branch and grants the run the base repository secrets and an elevated token, which is safe only while the run does not execute contributor-controlled code. Explicitly checking out the pull request head and then building or testing it hands that trusted context to arbitrary code from the fork. The event does expose the pull request payload, fires on open and update rather than only on merge, and honours a permissions block normally.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Workflows", "Security", "Forks"]
  },
  {
    id: "gh-200-7",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Collecting a Choice From the Person Starting a Run",
    scenario: "An operations team wants to start a deployment workflow manually from the Actions tab and pick a target environment from a fixed list of staging or production before the run begins.",
    question: "Which trigger configuration provides that prompt?",
    options: [
      { id: 'A', text: "A schedule trigger with two cron entries, one per environment." },
      { id: 'B', text: "A repository_dispatch trigger with a client payload." },
      { id: 'C', text: "An environment protection rule requiring a reviewer to select the target." },
      { id: 'D', text: "A workflow_dispatch trigger declaring an input of type choice with the two allowed options." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The workflow_dispatch trigger adds a Run workflow button in the user interface, and an input declared with type choice renders as a dropdown limited to the listed options, which the run then reads from the inputs context. The repository_dispatch event is driven by an API call rather than the interface, schedules start runs on a timer with no prompt, and environment reviewers approve a deployment that is already targeted rather than choosing its target.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Workflows", "workflow_dispatch", "Inputs"]
  },
  {
    id: "gh-200-8",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Moving a Compiled Binary Between Jobs",
    scenario: "A compile job produces a binary that three parallel test jobs must each consume. The test jobs declare needs on the compile job but start with an empty workspace and cannot see the compiled file.",
    question: "Which approach transfers the binary to the test jobs?",
    options: [
      { id: 'A', text: "Rely on the needs relationship, which copies the workspace from the upstream job automatically." },
      { id: 'B', text: "Commit the binary to a temporary branch in the compile job and check that branch out in each test job." },
      { id: 'C', text: "Upload the binary with the upload-artifact action in the compile job and retrieve it with download-artifact in each test job." },
      { id: 'D', text: "Store the binary with the cache action using a key derived from the commit and restore it in the test jobs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Artifacts exist to move files produced by one job to other jobs in the same workflow run and to make them downloadable afterwards, and the upload and download pair is the supported way to do it. The needs keyword only orders jobs and shares outputs, not the filesystem, committing build products to the repository pollutes history and races between runs, and the cache is keyed for reuse across runs rather than as a guaranteed handoff within one.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["GH-200", "Workflows", "Artifacts"]
  },
  {
    id: "gh-200-9",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Running a Cleanup Job After a Failed Dependency",
    scenario: "A workflow provisions a temporary test environment, runs an integration job against it, then tears it down. When the integration job fails, the teardown job is skipped and the environment leaks.",
    question: "What must be added to the teardown job so it runs whether the integration job succeeded or failed?",
    options: [
      { id: 'A', text: "A continue-on-error setting on the integration job, which is enough on its own to let dependents run." },
      { id: 'B', text: "An if condition evaluating always(), because a job with needs is skipped by default once an upstream job fails." },
      { id: 'C', text: "A timeout-minutes value on the teardown job." },
      { id: 'D', text: "Removal of the needs keyword so the teardown job is independent." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A job that declares needs carries an implicit success condition on its dependencies, so an upstream failure skips it; supplying an if condition of always() replaces that implicit check and forces execution regardless of upstream result while preserving the ordering. Marking the integration job continue-on-error would report it as successful and hide real failures, dropping needs would let teardown race the integration job, and a timeout does not affect whether the job starts.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution",
    tags: ["GH-200", "Workflows", "Conditions", "needs"]
  },
  {
    id: "gh-200-10",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Limiting a Workflow to Changes in One Directory",
    scenario: "A monorepo holds a docs directory and a services directory. The expensive integration workflow should start only when a push to the main branch touches files under services, and never when only documentation changes.",
    question: "Which trigger definition expresses that?",
    options: [
      { id: 'A', text: "A push trigger with branches set to main and paths-ignore set to the services directory." },
      { id: 'B', text: "A push trigger with branches set to main and paths set to a pattern matching the services directory." },
      { id: 'C', text: "A push trigger on main with a job-level if condition comparing github.event.head_commit.message to a docs prefix." },
      { id: 'D', text: "A pull_request trigger with paths set to the services directory." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The paths filter on a push trigger starts the run only when at least one changed file matches a listed pattern, and combining it with a branches filter narrows that to the main branch, so documentation-only pushes never queue a run. Using paths-ignore on the services directory inverts the intent, a commit message check is unreliable and still consumes a run, and a pull_request trigger reacts to proposed changes rather than pushes to main.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "Path Filters", "Triggers"]
  },
  {
    id: "gh-200-11",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Sharing One Deployment Workflow Across Repositories",
    scenario: "Eleven repositories in an organization each maintain a near-identical deployment workflow. The platform team wants one authoritative definition that each repository calls, passing its own service name and inheriting the organization secrets.",
    question: "Which approach fits this requirement?",
    options: [
      { id: 'A', text: "Add the workflow to the organization .github repository, which applies it to every repository automatically." },
      { id: 'B', text: "Define the shared file with a workflow_call trigger and inputs, then reference it from each repository with the uses keyword at job level, passing secrets: inherit." },
      { id: 'C', text: "Publish the workflow as a composite action and reference it as a step in each repository." },
      { id: 'D', text: "Copy the workflow into each repository and keep the copies aligned with a Dependabot configuration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A reusable workflow declares a workflow_call trigger with typed inputs and is referenced by a calling job through uses, and secrets: inherit forwards the caller secrets without redeclaring each one. A composite action bundles steps but cannot define jobs, runners or environments, copying invites drift and Dependabot does not synchronise workflow bodies, and the organization .github repository supplies default community files and starter workflows rather than automatically executing one everywhere.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "workflow_call"]
  },
  {
    id: "gh-200-12",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Hardening the Use of a Third-Party Marketplace Action",
    scenario: "A security review finds that workflows reference a community action using a floating major version tag. The reviewer notes that whoever controls the action repository can move that tag to new code at any time, which would execute in every workflow that references it.",
    question: "Which measures address that specific supply chain risk? (Choose two.)",
    options: [
      { id: 'A', text: "Move the workflow onto self-hosted runners so the action executes inside the corporate network." },
      { id: 'B', text: "Configure Dependabot with the github-actions ecosystem so pinned references are proposed for update in reviewable pull requests." },
      { id: 'C', text: "Replace the version tag with the main branch so the newest code is always used." },
      { id: 'D', text: "Reference the action by its full commit SHA rather than a tag or branch." }
    ],
    correctAnswers: ['B', 'D'],
    type: "multiple",
    explanation: "A full commit SHA is immutable, so the exact code reviewed is the code that runs even if the upstream tag is repointed, and enabling the github-actions ecosystem in Dependabot keeps those pins from going stale by raising update pull requests that a human approves. Running on self-hosted runners changes where untrusted code executes without changing what executes, and in fact widens the blast radius, while tracking a branch removes the pin entirely and makes the problem worse.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Supply Chain", "Marketplace", "Dependabot"]
  },
  {
    id: "gh-200-13",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Choosing Between the Cache and an Artifact",
    scenario: "A team debates where to put two kinds of files: the package manager download directory, which is identical across most runs, and the signed installer that a release engineer must download and inspect after the run finishes.",
    question: "Which placement is correct?",
    options: [
      { id: 'A', text: "The dependency directory belongs in the cache and the installer belongs in an artifact." },
      { id: 'B', text: "The installer belongs in the cache and the dependency directory belongs in an artifact." },
      { id: 'C', text: "Both belong in artifacts, because artifacts are the only storage retained after a run." },
      { id: 'D', text: "Both belong in the cache, because the cache persists across workflow runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The cache is an optimisation for regenerable inputs that are reused between runs, keyed by content and evicted without warning, which suits a dependency directory. Artifacts are durable run outputs with a retention period that people and later jobs download, which suits a release installer. Putting a deliverable in the cache risks silent eviction, and pushing a large regenerable dependency tree into artifacts wastes retention storage and is not restored automatically.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["GH-200", "Caching", "Artifacts"]
  },
  {
    id: "gh-200-14",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Reading the Result of a Reusable Workflow",
    scenario: "A calling workflow invokes a reusable workflow that builds a container and determines its digest. A subsequent job in the calling workflow needs that digest to sign the image.",
    question: "How does the calling workflow obtain the digest?",
    options: [
      { id: 'A', text: "The calling workflow reads the digest from the env context, which reusable workflows populate for their caller." },
      { id: 'B', text: "The reusable workflow declares an outputs block mapping a job output, and the calling workflow reads it from the needs context of the calling job." },
      { id: 'C', text: "The digest can only be transferred by uploading it as an artifact and downloading it in the caller." },
      { id: 'D', text: "The reusable workflow writes the digest to GITHUB_ENV, which propagates to the caller." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A reusable workflow exposes values through a top-level outputs block whose entries reference the outputs of its own jobs, and the calling workflow reads them through the needs context of the job that used it, exactly as it would for a normal job output. Neither the env context nor GITHUB_ENV crosses the boundary between a called workflow and its caller, and while an artifact would technically work it is an unnecessary detour for a short string.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Outputs"]
  },
  {
    id: "gh-200-15",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Retrying Only the Jobs That Failed",
    scenario: "A workflow run contains eight jobs. Two of them failed because of a transient registry outage that has since been resolved. Re-running the entire workflow would take twenty-five minutes and repeat six jobs that already passed.",
    question: "What is the appropriate action?",
    options: [
      { id: 'A', text: "Cancel the run and start it again from the workflow_dispatch button." },
      { id: 'B', text: "Push an empty commit to trigger a fresh run of the whole workflow." },
      { id: 'C', text: "Use Re-run failed jobs on the run, which re-executes the failed jobs and their dependents while reusing the successful results." },
      { id: 'D', text: "Edit the workflow to add continue-on-error to the two failing jobs and commit the change." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Re-running failed jobs starts a new attempt of the same run that executes only the jobs that failed plus anything depending on them, carrying forward the successful jobs and keeping the original run context such as the commit and event payload. An empty commit or a fresh dispatch repeats all eight jobs, and adding continue-on-error would mask genuine failures rather than retry a transient one.",
    referenceUrl: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs",
    tags: ["GH-200", "Workflow Runs", "Re-run"]
  },
  {
    id: "gh-200-16",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Finding Which Workflows Consume the Most Minutes",
    scenario: "A finance partner reports that the organization Actions bill grew sharply last month. The platform team needs to attribute the spend to specific repositories and runner types before proposing changes.",
    question: "Which source gives that breakdown?",
    options: [
      { id: 'A', text: "The Actions usage metrics and the downloadable usage report available from the organization billing settings." },
      { id: 'B', text: "The audit log filtered on the workflows category." },
      { id: 'C', text: "The Insights tab of each repository, which reports Actions minutes per contributor." },
      { id: 'D', text: "The annotations shown on the summary page of each individual workflow run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Billing settings expose Actions usage metrics and a downloadable report that attributes consumed minutes to repositories, workflows and runner operating systems, which are the dimensions needed to attribute spend. The audit log records configuration and access events rather than metered consumption, repository Insights covers code and contributor activity, and a run summary reports only that one run.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-actions",
    tags: ["GH-200", "Billing", "Usage"]
  },
  {
    id: "gh-200-17",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Required Field in a Composite Action Run Step",
    scenario: "An engineer writes an action.yml with runs.using set to composite and a steps list containing a single run step. Every workflow that references the action fails immediately with a validation error before the step executes.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The action.yml is missing a branding block, which is required for composite actions." },
      { id: 'B', text: "The run step omits the shell key, which is mandatory for every run step in a composite action." },
      { id: 'C', text: "Composite actions require runs.using to name a specific runtime version rather than the word composite." },
      { id: 'D', text: "Composite actions cannot contain run steps, only uses steps." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inside a composite action every run step must declare shell explicitly, because the action has no workflow-level default to inherit, and omitting it fails validation before execution. Composite actions do support both run and uses steps, branding is optional metadata that only affects Marketplace presentation, and composite is itself the correct value for runs.using in this action type.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Composite"]
  },
  {
    id: "gh-200-18",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Returning a Value From a JavaScript Action",
    scenario: "A JavaScript action computes a semantic version string. The workflow step that uses the action has an id and needs to reference the version in a later step through the steps context.",
    question: "What must the action do, and what must action.yml declare?",
    options: [
      { id: 'A', text: "Call core.exportVariable and declare the name under inputs in action.yml." },
      { id: 'B', text: "Print the value to standard output; the runner captures the last line as the step output automatically." },
      { id: 'C', text: "Call core.setOutput from the toolkit and declare a matching entry under outputs in action.yml." },
      { id: 'D', text: "Write the value to a file named outputs.json in the workspace root." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The toolkit function core.setOutput records a named output for the step, and declaring the same name under outputs in action.yml documents it and makes it part of the action contract, after which a workflow reads it through the steps context using the step id. Standard output is only logged, core.exportVariable sets an environment variable for later steps rather than a step output, inputs describe values passed in, and no outputs.json convention exists.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "JavaScript", "Outputs"]
  },
  {
    id: "gh-200-19",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Why a Docker Container Action Fails on a Windows Runner",
    scenario: "A team publishes a Docker container action that works on ubuntu-latest. A consuming repository adds windows-latest and macos-latest to its matrix, and the action fails on both new platforms.",
    question: "What explains the failure, and what is the appropriate remedy?",
    options: [
      { id: 'A', text: "Docker container actions execute only on Linux runners, so the action should be rewritten as a JavaScript action for cross-platform use." },
      { id: 'B', text: "The action image needs a multi-architecture manifest, after which it will run on all three platforms." },
      { id: 'C', text: "The consuming workflow must grant packages: read so the runner can pull the image on non-Linux platforms." },
      { id: 'D', text: "Docker container actions require the runner to have Docker installed, so the fix is to add a Docker setup step before the action on each platform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Docker container actions are supported only on Linux runners, which is a platform constraint of the action type rather than an image or permissions problem, so a genuinely cross-platform action must be written in JavaScript or as a composite action. A multi-architecture manifest addresses processor architecture rather than the host operating system, packages: read governs registry authorisation, and installing Docker on the Windows and macOS hosted runners does not make this action type eligible there.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["GH-200", "Custom Actions", "Docker", "Runners"]
  },
  {
    id: "gh-200-20",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Release Convention for a Published Action",
    scenario: "An action is at version 1.4.2. The maintainer wants consumers who reference the major version to pick up backward-compatible fixes without editing their workflows, while consumers who need reproducibility can pin exactly.",
    question: "Which release practice supports both audiences?",
    options: [
      { id: 'A', text: "Ask consumers to reference the default branch, and cut a tag only for breaking changes." },
      { id: 'B', text: "Publish an immutable tag for each release and additionally maintain a moving major version tag that is repointed to the newest compatible release." },
      { id: 'C', text: "Publish each release as a separate repository named after its version." },
      { id: 'D', text: "Publish only immutable tags for each patch release and tell consumers to update their references on every release." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The established convention is to tag every release immutably and also keep a major version tag that moves forward across compatible releases, which lets casual consumers follow the major tag while security-sensitive ones pin to a tag or commit SHA. Publishing only patch tags forces constant churn on consumers, referencing the default branch gives no stability at all, and a repository per version breaks the reference path and fragments issues and releases.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["GH-200", "Custom Actions", "Versioning", "Releases"]
  },
  {
    id: "gh-200-21",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Removing Long-Lived Cloud Credentials From Deployments",
    scenario: "A deployment workflow authenticates to a cloud provider with a static access key pair stored as repository secrets. Security requires that no long-lived cloud credential exists in GitHub, while the workflow keeps its ability to deploy.",
    question: "Which configuration meets that requirement?",
    options: [
      { id: 'A', text: "Configure OpenID Connect trust between the cloud provider and GitHub, grant the job id-token: write, and exchange the short-lived token for a scoped cloud role." },
      { id: 'B', text: "Rotate the access key pair automatically every twenty-four hours with a scheduled workflow." },
      { id: 'C', text: "Move the access key pair from repository secrets to organization secrets scoped to selected repositories." },
      { id: 'D', text: "Store the access key pair in an environment secret protected by required reviewers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OpenID Connect lets the cloud provider trust GitHub as an identity provider and issue short-lived credentials for a specific repository, branch or environment claim, so no static key is stored anywhere in GitHub. Rotation shortens the exposure window but a valid long-lived key still exists, and moving the same key to organization or environment scope changes who can read it rather than eliminating it.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["GH-200", "OIDC", "Secrets", "Security"]
  },
  {
    id: "gh-200-22",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Restricting a Pool of Self-Hosted Runners to Certain Repositories",
    scenario: "An organization operates self-hosted runners with access to a production network. Only the four repositories that deploy production services may use them; every other repository must fall back to hosted runners.",
    question: "Which mechanism enforces that?",
    options: [
      { id: 'A', text: "Apply a unique label to the runners and ask teams not to reference that label." },
      { id: 'B', text: "Set an organization ruleset that blocks the runs-on key in non-production repositories." },
      { id: 'C', text: "Register the runners at repository level in all four repositories individually and delete the organization registration." },
      { id: 'D', text: "Place the runners in a runner group whose access is limited to the selected repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Runner groups are the access control boundary for self-hosted runners, and limiting a group to selected repositories means jobs from any other repository cannot be routed to those runners regardless of the labels they request. Labels are routing hints with no authorisation behaviour, per-repository registration would work but multiplies the fleet and administration for the same effect, and rulesets govern branch and tag operations rather than the runs-on key.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["GH-200", "Self-hosted Runners", "Runner Groups", "Governance"]
  },
  {
    id: "gh-200-23",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners and Public Repositories",
    scenario: "A team proposes attaching persistent self-hosted runners to a public repository so that fork pull requests build on hardware the team controls. Security objects that a fork contributor could run arbitrary code on those machines and that state could persist between jobs.",
    question: "Which responses genuinely reduce that risk? (Choose two.)",
    options: [
      { id: 'A', text: "Grant the workflow a read-only GITHUB_TOKEN, which prevents the job from executing contributor code." },
      { id: 'B', text: "Require approval for first-time contributors, which by itself makes persistent self-hosted runners safe for public repositories." },
      { id: 'C', text: "Use ephemeral runners, so each runner processes a single job and is then discarded along with anything the job left behind." },
      { id: 'D', text: "Keep fork pull requests on GitHub-hosted runners and reserve the self-hosted pool for trusted internal repositories." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "The documented guidance is that persistent self-hosted runners should not serve public repositories, because a fork contribution can execute arbitrary code and leave artefacts, credentials or tooling behind for the next job. Keeping untrusted contributions on disposable hosted runners removes the exposure, and ephemeral registration removes the persistence by discarding the runner after one job. Approval gates reduce how often untrusted code runs but do not change what it can do once approved, and token scope constrains API access without preventing code execution on the machine.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Security", "Ephemeral"]
  },
  {
    id: "gh-200-24",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Sharing One Credential With a Subset of Repositories",
    scenario: "A shared artifact registry token is currently duplicated as a repository secret in nine repositories. Rotating it means nine edits, and two of the nine should no longer have access at all.",
    question: "Which change centralises the credential while preserving the access boundary?",
    options: [
      { id: 'A', text: "Commit the token to a private repository and check it out during each workflow run." },
      { id: 'B', text: "Create an environment secret in one repository and reference it from the other six." },
      { id: 'C', text: "Create an organization variable holding the token so every repository can read it." },
      { id: 'D', text: "Create an organization secret with its repository access set to the seven approved repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An organization secret is stored once and can be scoped to selected repositories, so rotation is a single edit and the two repositories being removed simply fall outside the access list. Variables are stored and displayed in plain text and must never hold a credential, environment secrets are scoped to environments within the repository that defines them and cannot be referenced from other repositories, and committing a token to any repository exposes it in history.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "Organization", "Governance"]
  },
  {
    id: "gh-200-25",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Limiting Which Actions May Run in an Enterprise",
    scenario: "An enterprise wants workflows to use actions authored inside the enterprise plus a small reviewed list of third-party actions, and to block everything else in the Marketplace without reviewing each workflow file by hand.",
    question: "Which policy configuration achieves this?",
    options: [
      { id: 'A', text: "Set the Actions permissions policy to allow enterprise actions plus specified actions, and populate the allow list with the reviewed third-party references." },
      { id: 'B', text: "Require a CODEOWNERS review on the workflows directory in every repository." },
      { id: 'C', text: "Disable Actions entirely for the enterprise and re-enable it per repository as requests arrive." },
      { id: 'D', text: "Enable secret scanning push protection, which blocks workflows that reference unapproved actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Actions permissions policy supports allowing actions created within the enterprise together with an explicit allow list of external references, which the platform enforces at run time so an unapproved action fails regardless of what a workflow file says. Disabling Actions wholesale blocks legitimate work and pushes review into a ticket queue, CODEOWNERS is a human review gate that can be bypassed by anyone with admin rights and does not enforce at run time, and push protection detects committed credentials rather than action references.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["GH-200", "Enterprise", "Policy", "Governance"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_1;
