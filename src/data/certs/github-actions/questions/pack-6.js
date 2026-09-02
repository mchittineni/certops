export const GITHUB_ACTIONS_QUESTIONS_6 = [
  {
    id: "gh-200-126",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Detecting That a Tolerated Step Actually Failed",
    scenario: "A step is marked continue-on-error so the job proceeds regardless. A later step must post a warning when that tolerated step really did fail, but testing the step result in the usual way always reports success.",
    question: "Which property distinguishes the two?",
    options: [
      { id: 'A', text: "The outcome property of the step, which records the result before continue-on-error is applied, whereas conclusion records the result after it." },
      { id: 'B', text: "The conclusion property, which records the raw result, whereas outcome is adjusted by continue-on-error." },
      { id: 'C', text: "The exit-code property, which is the only unmodified signal available." },
      { id: 'D', text: "Neither, because a tolerated failure is discarded and cannot be observed later in the job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each step with an identifier exposes both an outcome and a conclusion, where outcome is the result the step actually produced and conclusion is that result after continue-on-error has been taken into account, so testing outcome reveals a tolerated failure. The two are the other way round in the distractor, no exit-code property is exposed on the steps context, and the information is retained rather than discarded.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Steps", "continue-on-error"]
  },
  {
    id: "gh-200-127",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Excluding a Family of Branches From a Trigger",
    scenario: "A workflow should run on pushes to every branch except those beginning with sandbox/. An author adds both a branches filter listing a wildcard for everything and a branches-ignore filter for the sandbox prefix, and the workflow is rejected.",
    question: "What is the rule, and what is the correct expression?",
    options: [
      { id: 'A', text: "The two filters cannot both be used for the same event, so the intent should be written with branches-ignore alone naming the sandbox prefix." },
      { id: 'B', text: "The two filters cannot both be used, so the intent should be written with branches alone listing every branch name explicitly." },
      { id: 'C', text: "The filters may be combined but branches-ignore must be listed first, so reordering fixes it." },
      { id: 'D', text: "The filters may be combined only when each names a literal branch rather than a pattern." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For a single event a workflow may use branches or branches-ignore but not both, and since the requirement is an exclusion from everything, branches-ignore carrying the sandbox pattern expresses it directly. Enumerating every branch is unmaintainable and breaks as soon as someone creates a new one, and neither ordering nor avoiding patterns makes the combination legal.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "Triggers", "Branch Filters"]
  },
  {
    id: "gh-200-128",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "One Workflow Serving Three Different Triggers",
    scenario: "A workflow is triggered by pull_request, by a nightly schedule and by manual dispatch. The full suite should run for the schedule and the manual case, while pull requests run only the quick subset.",
    question: "How should the distinction be made?",
    options: [
      { id: 'A', text: "By a job or step condition comparing the github.event_name value against the trigger names." },
      { id: 'B', text: "By reading a workflow_dispatch input, which is populated with the trigger name for every event." },
      { id: 'C', text: "By comparing github.ref, which differs per trigger type." },
      { id: 'D', text: "By splitting into three workflow files, since one workflow cannot behave differently per trigger." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The github context carries the name of the event that started the run, so a condition comparing it selects behaviour per trigger while keeping one file and one set of shared steps. Splitting into three files duplicates maintenance for a difference of a few lines, the ref reflects the branch rather than the trigger and is the same for a schedule and a dispatch on the default branch, and dispatch inputs exist only for that one event.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Workflows", "Contexts", "Triggers"]
  },
  {
    id: "gh-200-129",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Dynamic Matrix With Nothing to Build",
    scenario: "A discovery job emits a JSON array of changed services. On documentation-only pull requests the array is empty, and the team wants the downstream build job simply not to run rather than failing or running once with no input.",
    question: "What happens, and what should accompany it?",
    options: [
      { id: 'A', text: "An empty matrix array produces no jobs, so the build job is reported as skipped; any job that depends on it should use a status check function if it must still run." },
      { id: 'B', text: "An empty matrix array fails the run with a strategy error, so the discovery job must emit a placeholder entry." },
      { id: 'C', text: "An empty matrix array produces one job with all matrix values unset, which must be guarded by a step condition." },
      { id: 'D', text: "An empty matrix array is treated as a single wildcard job that builds everything." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Expanding a matrix over an empty array generates zero jobs and the job appears as skipped, which is the desired behaviour here, but that skipped state propagates to anything declaring needs on it, so a dependent that must still run needs an explicit status check function in its condition. The run is not failed, no placeholder job is generated, and there is no wildcard interpretation.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Matrix", "Conditions", "needs"]
  },
  {
    id: "gh-200-130",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reading a Configuration Variable Defined at Organization Level",
    scenario: "An administrator defines a non-sensitive configuration variable at organization level holding the internal artifact registry hostname. A workflow needs to read it.",
    question: "Which context exposes it?",
    options: [
      { id: 'A', text: "The vars context, which exposes configuration variables defined at organization, repository and environment level." },
      { id: 'B', text: "The secrets context, which exposes both secrets and variables." },
      { id: 'C', text: "The env context, which is populated automatically from organization variables." },
      { id: 'D', text: "The github context, under an organization property." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuration variables are read through the vars context, which resolves organization, repository and environment definitions with the narrower scope winning, and they are stored and displayed in plain text because they are meant for non-sensitive settings. The secrets context exposes only secrets, the env context reflects variables the workflow itself has set, and the github context describes the event and repository rather than configuration.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables",
    tags: ["GH-200", "Variables", "Contexts", "Configuration"]
  },
  {
    id: "gh-200-131",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Getting More Detail Out of a Failing Run",
    scenario: "A run fails inside an action with a message that gives no useful detail. The maintainer wants the runner internal diagnostics and the step-level tracing for a single investigation, without permanently changing the workflow.",
    question: "Which approach provides it?",
    options: [
      { id: 'A', text: "Download the run logs archive, which always contains the debug streams whether or not debugging was enabled." },
      { id: 'B', text: "Increase the artifact retention period, which causes the runner to keep diagnostic files." },
      { id: 'C', text: "Add a verbose flag to every step, which is the only supported mechanism." },
      { id: 'D', text: "Re-run the jobs with the debug logging option enabled, or set the step and runner debug flags as repository secrets or variables for a broader investigation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The re-run dialog offers a debug logging option that turns on runner and step diagnostics for that attempt, and the same behaviour can be enabled more broadly by setting the two documented debug flags as secrets or variables, which is the intended path for a one-off investigation. Per-step verbose flags only affect the tool being run, the standard log archive contains what was captured rather than streams that were never enabled, and retention governs storage lifetime rather than verbosity.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["GH-200", "Troubleshooting", "Debug Logging"]
  },
  {
    id: "gh-200-132",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Waiting on Several Jobs at Once",
    scenario: "Three independent verification jobs run in parallel: unit tests, linting and a licence check. A packaging job must start only after all three have succeeded, and must not start if any of them failed.",
    question: "How is that expressed?",
    options: [
      { id: 'A', text: "Declare needs on the packaging job as a list naming all three jobs, which waits for every one and inherits the implicit success requirement." },
      { id: 'B', text: "Declare needs naming only the slowest of the three, since the others always finish first." },
      { id: 'C', text: "Add a concurrency group shared by all four jobs." },
      { id: 'D', text: "Chain the three jobs with needs so they run in sequence, then have packaging depend on the last." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The needs key accepts a list, and a job with several dependencies waits for all of them and runs only if every one succeeded, which keeps the three verifications parallel and the packaging correctly gated. Depending on the slowest is an assumption that breaks the first time timings change, chaining them serialises work that has no ordering requirement, and a concurrency group controls overlap rather than ordering.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow",
    tags: ["GH-200", "Workflows", "needs", "Job Graph"]
  },
  {
    id: "gh-200-133",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Giving a Run a Meaningful Title in the Run List",
    scenario: "The Actions list shows every run of a deployment workflow with the same workflow name, so operators cannot tell which environment and version each row deployed without opening it.",
    question: "Which key changes what the list displays?",
    options: [
      { id: 'A', text: "The run-name key at workflow level, which accepts an expression and sets the title shown for each run." },
      { id: 'B', text: "The name key at workflow level, which is re-evaluated per run." },
      { id: 'C', text: "The job name key, which replaces the run title when there is a single job." },
      { id: 'D', text: "A title property added to GITHUB_STEP_SUMMARY, which the list reads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The run-name key sits alongside the workflow name and accepts an expression evaluated for each run, so a title can incorporate the environment, the version or the actor and make the run list readable at a glance. The workflow name is a static label for the workflow itself, job names appear within a run rather than as its title, and the step summary is content on the run page.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "run-name", "Usability"]
  },
  {
    id: "gh-200-134",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Giving a Job No API Access At All",
    scenario: "A job builds a static site from files already in the workspace and never calls the API. A hardening review asks that this job hold no token privileges whatsoever, so a compromised dependency cannot use the token.",
    question: "How is that written?",
    options: [
      { id: 'A', text: "Setting permissions to contents: none, which is the only scope that can be removed." },
      { id: 'B', text: "An empty permissions mapping on the job, which disables every scope of the automatic token for that job." },
      { id: 'C', text: "Setting the job to run on a self-hosted runner, which is not issued a token." },
      { id: 'D', text: "Omitting the permissions key, which defaults to no permissions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Supplying an empty permissions mapping sets every scope of the automatic token to none for that job, which is the documented way to run with no API access at all. Omitting the key inherits the workflow or repository default rather than dropping everything, listing a single scope leaves the others at their default, and runner type does not change whether a token is issued.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["GH-200", "Permissions", "GITHUB_TOKEN", "Security"]
  },
  {
    id: "gh-200-135",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Uploading Already Compressed Files Efficiently",
    scenario: "A job uploads a directory of large media files that are already compressed. The upload step takes several minutes and profiling shows most of the time is spent compressing data that cannot compress further.",
    question: "Which adjustment helps?",
    options: [
      { id: 'A', text: "Split the directory across ten artifacts, which parallelises compression." },
      { id: 'B', text: "Raise the compression-level input so the archive is smaller and uploads faster." },
      { id: 'C', text: "Lower the compression-level input on the upload step so the archive is created with little or no compression." },
      { id: 'D', text: "Set retention-days to the minimum, which skips compression for short-lived artifacts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The upload step exposes a compression level, and lowering it trades a slightly larger upload for far less processor time, which is the right trade when the input is already compressed and cannot shrink further. Raising the level spends even more time for no size benefit, splitting into several artifacts adds overhead without changing the per-byte cost, and retention has no effect on how the archive is built.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["GH-200", "Artifacts", "Performance"]
  },
  {
    id: "gh-200-136",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "A Job That Sits in the Queue and Then Disappears",
    scenario: "A job requesting a self-hosted label sits queued because the only runner carrying that label has been offline. After about a day the job vanishes from the run with a failure rather than continuing to wait.",
    question: "What happened?",
    options: [
      { id: 'A', text: "A job waiting for a self-hosted runner is terminated once it has been queued for the maximum queue time of twenty-four hours." },
      { id: 'B', text: "The workflow run reached the maximum total run duration of thirty-five days." },
      { id: 'C', text: "The job timeout-minutes value elapsed, which counts queue time as execution time." },
      { id: 'D', text: "The runner registration expired, which retroactively cancels queued jobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Usage limits cap how long a job may wait for a self-hosted runner at twenty-four hours, after which it is terminated rather than queued indefinitely, which matches the timing described. The thirty-five day limit applies to the overall run rather than a single day of queueing, timeout-minutes measures execution once the job has started, and registration expiry does not reach back into queued work.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration",
    tags: ["GH-200", "Usage Limits", "Self-hosted Runners", "Queueing"]
  },
  {
    id: "gh-200-137",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Fetching a Build Output Without Opening a Browser",
    scenario: "A support engineer needs the packaged build from a specific completed run, from a terminal on a machine with no browser, in order to reproduce a customer issue.",
    question: "Which approach is appropriate?",
    options: [
      { id: 'A', text: "Use the GitHub CLI run download command with the run identifier, optionally naming the artifact." },
      { id: 'B', text: "Re-run the workflow with an added step that copies the build to a shared drive." },
      { id: 'C', text: "Read the artifact contents out of the run logs, where they are recorded." },
      { id: 'D', text: "Artifacts are only downloadable from the run page in a browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The command line offers a run download command that retrieves artifacts from a nominated run, which is the direct answer for a terminal-only environment and is also scriptable. Re-running produces a different build and changes the thing being investigated, logs contain output text rather than artifact bytes, and artifacts are reachable through both the API and the command line as well as the browser.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["GH-200", "Artifacts", "GitHub CLI"]
  },
  {
    id: "gh-200-138",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Marketplace Actions on a Server Without Internet Access",
    scenario: "An organization runs GitHub Enterprise Server in an isolated network. Workflows referencing common public actions fail because the actions cannot be resolved.",
    question: "Which approaches make those actions available?",
    options: [
      { id: 'A', text: "Enable GitHub Connect so the server can resolve public actions from the hosted service, or use the actions synchronisation tooling to mirror the required action repositories onto the server." },
      { id: 'B', text: "Add the public action repositories to the organization allow list, which mirrors them automatically." },
      { id: 'C', text: "Reference the actions by their full commit SHA, which bypasses resolution." },
      { id: 'D', text: "Run the affected workflows on GitHub-hosted runners, which resolve actions independently of the server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An isolated server cannot reach the public action source, so either GitHub Connect is enabled to allow resolution through the hosted service or the action repositories are mirrored onto the server with the synchronisation tooling, after which references resolve locally. A commit SHA still has to be fetched from somewhere, an allow list authorises rather than mirrors, and hosted runners are not available to an isolated server.",
    referenceUrl: "https://docs.github.com/en/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise",
    tags: ["GH-200", "Enterprise Server", "Actions Sync", "GitHub Connect"]
  },
  {
    id: "gh-200-139",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Building a Pause Into a Production Rollout",
    scenario: "Operations wants a fifteen-minute gap between a staging deployment succeeding and the production job starting, so that automated monitoring has time to raise an alert, with no human required to click anything when all is well.",
    question: "Which environment protection rule provides that?",
    options: [
      { id: 'A', text: "A wait timer on the production environment, which delays the job by the configured number of minutes before it proceeds." },
      { id: 'B', text: "Required reviewers on the production environment, with the reviewers instructed to wait fifteen minutes." },
      { id: 'C', text: "A concurrency group with a fifteen-minute cooldown property." },
      { id: 'D', text: "A step that sleeps for fifteen minutes at the start of the production job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A wait timer is a deployment protection rule that holds the job for a configured number of minutes and then releases it automatically, which is exactly an unattended soak period. Required reviewers introduce a person where none is wanted, concurrency has no cooldown property, and a sleeping step burns billed runner minutes for the whole delay while achieving the same wait.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["GH-200", "Environments", "Protection Rules", "Deployments"]
  },
  {
    id: "gh-200-140",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Preventing a Deployment From an Arbitrary Branch",
    scenario: "A contributor discovers that pushing a branch and starting a manual dispatch from it lets them run the deployment job against production. The team wants only the default branch and release branches to be able to deploy there.",
    question: "Which control enforces that?",
    options: [
      { id: 'A', text: "A deployment branch policy on the production environment restricting which branches and tags may deploy to it." },
      { id: 'B', text: "A job condition comparing github.ref to the permitted branch names." },
      { id: 'C', text: "Branch protection on the release branches requiring review." },
      { id: 'D', text: "Removing the workflow_dispatch trigger so deployments are automatic only." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An environment can restrict which branches and tags are allowed to deploy to it, and because the rule lives on the environment rather than in the workflow file it holds even if someone edits the workflow on their own branch. A job condition is enforced by the very file the contributor controls, branch protection governs merging into those branches, and removing manual dispatch loses a legitimate capability while leaving other paths open.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["GH-200", "Environments", "Deployment Branch Policy", "Security"]
  },
  {
    id: "gh-200-141",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Limiting What a Called Workflow Can See",
    scenario: "A calling repository holds fifteen secrets. It must invoke a shared reusable workflow that legitimately needs exactly one of them, and a reviewer objects to the current use of blanket inheritance.",
    question: "What should the calling job do?",
    options: [
      { id: 'A', text: "Move the fourteen unrelated secrets to organization level, which excludes them from inheritance." },
      { id: 'B', text: "Pass the secret through the with block instead, which avoids the secrets context entirely." },
      { id: 'C', text: "Keep secrets: inherit, since the called workflow can only read secrets it declares in its workflow_call block anyway, making the two equivalent." },
      { id: 'D', text: "Replace secrets: inherit with an explicit secrets mapping passing only the single secret the called workflow declares." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An explicit secrets mapping passes exactly the named values and nothing else, which is the least-privilege form and makes the dependency visible at the call site. Blanket inheritance forwards the caller secrets wholesale to the called workflow, so a change to that workflow could begin using others without the caller noticing, which is precisely the reviewer concern. Organization secrets available to the repository are inherited too, and routing a secret through with places it in a channel meant for non-sensitive inputs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Secrets", "Least Privilege"]
  },
  {
    id: "gh-200-142",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Understanding Where Billed Minutes Come From",
    scenario: "A finance review asks why the Actions bill is dominated by a handful of jobs that each run for only a few minutes on Windows and macOS, while much longer Linux jobs contribute comparatively little.",
    question: "What explains the pattern?",
    options: [
      { id: 'A', text: "Minutes on Windows and macOS runners are billed at a multiplier relative to Linux, so a short job on those platforms can cost more than a long Linux job." },
      { id: 'B', text: "Linux minutes are free on all plans, so only other platforms appear in the bill." },
      { id: 'C', text: "Windows and macOS runners are billed per job started rather than per minute." },
      { id: 'D', text: "Jobs shorter than five minutes are rounded up to an hour on non-Linux platforms." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consumed minutes are multiplied by a platform factor before being charged, with Windows and macOS costing several times a Linux minute, which is why a short job on those platforms can outweigh a much longer Linux one. Billing is per minute rather than per job, Linux minutes are metered rather than free once the included allowance is used, and there is no rounding to the hour.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-actions",
    tags: ["GH-200", "Billing", "Runners", "Cost"]
  },
  {
    id: "gh-200-143",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Skipping a Step Inside a Composite Action",
    scenario: "A composite action installs a toolchain and, when a boolean input asks for it, also warms a cache. The author wants the cache step to be skipped rather than to exit early with a no-op script.",
    question: "Is that possible, and how?",
    options: [
      { id: 'A', text: "Yes; steps in a composite action support an if condition, so the step can be conditioned on the input value from the inputs context." },
      { id: 'B', text: "Yes, but only by splitting the optional step into a second action that the caller conditions." },
      { id: 'C', text: "No; composite action steps run unconditionally, so the script must decide for itself." },
      { id: 'D', text: "Yes, by setting continue-on-error on the step, which skips it when the input is false." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Steps within a composite action accept an if condition, and the inputs context is available inside the action, so conditioning on the boolean input makes the step visibly skipped in the log rather than executing a script that immediately returns. Composite steps are not unconditional, splitting into two actions is unnecessary, and continue-on-error tolerates failure rather than preventing execution.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Composite", "Conditions"]
  },
  {
    id: "gh-200-144",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Running Setup Before the Main Body of an Action",
    scenario: "A JavaScript action needs to establish a network tunnel before its main logic runs and, importantly, before any of the other steps that come after it in the job, so those steps also benefit from the tunnel.",
    question: "Which metadata entry supports that?",
    options: [
      { id: 'A', text: "A pre entry in the runs block naming a script the runner executes before the main entry point, with pre-if controlling when it applies." },
      { id: 'B', text: "A setup entry in the runs block, executed once per job." },
      { id: 'C', text: "A first-run flag on the main entry point." },
      { id: 'D', text: "There is no such feature; the caller must add a separate setup step before the action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A JavaScript action may declare pre and post scripts around its main entry point, with the pre script executed at the start and pre-if narrowing when it applies, which is how an action prepares state that the rest of the job relies on. There is no setup key or first-run flag in the schema, and requiring the caller to add a separate step is exactly the boilerplate the feature removes.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "JavaScript", "pre"]
  },
  {
    id: "gh-200-145",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Keeping the Major Version Tag Current Automatically",
    scenario: "An action maintainer tags each release. Consumers follow the major version tag, which the maintainer keeps forgetting to move, so those consumers silently stay on an old release for weeks.",
    question: "Which practice removes the manual step safely?",
    options: [
      { id: 'A', text: "Deleting the major version tag and instructing consumers to follow the default branch instead." },
      { id: 'B', text: "A release-triggered workflow that force-updates the major version tag to the newly published release commit, guarded so it only runs for non-prerelease publications and only when the release is compatible." },
      { id: 'C', text: "Configuring the repository to alias the major version tag to the newest tag automatically in settings." },
      { id: 'D', text: "Publishing every release as a new major version, so the tag never needs moving." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Moving a major version tag is a mechanical step that a workflow triggered by release publication can perform reliably, provided it is guarded so prereleases and breaking changes do not sweep consumers along. Pointing consumers at the default branch removes all version stability, there is no repository setting that aliases tags, and bumping the major version on every release breaks the meaning of the major tag and forces constant consumer edits.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["GH-200", "Custom Actions", "Versioning", "Release Automation"]
  },
  {
    id: "gh-200-146",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Federating to a Service With No Prebuilt Login Action",
    scenario: "An internal service accepts OpenID Connect tokens but no published action exists for it. The team wants the workflow to obtain a token and exchange it directly, without storing any credential.",
    question: "How does the workflow obtain the token?",
    options: [
      { id: 'A', text: "Tokens are only obtainable through published cloud login actions, so one must be written and published first." },
      { id: 'B', text: "Call the repository API with the automatic token to mint an identity token." },
      { id: 'C', text: "Read the token from the secrets context, where the platform places it when the permission is granted." },
      { id: 'D', text: "Grant the job the id-token: write permission, then request the token from the runner token endpoint using the request URL and request token environment variables, or through the toolkit helper that wraps them, supplying the intended audience." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When a job holds the id-token write permission the runner exposes a request URL and a request token in the environment, and a call to that endpoint with the desired audience returns a signed identity token, which is precisely what the published cloud login actions do internally. The token is not placed in the secrets context, the automatic repository token cannot mint identity tokens, and nothing requires the exchange to go through a published action.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["GH-200", "OIDC", "Tokens", "Security"]
  },
  {
    id: "gh-200-147",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Who May Release a Held Deployment",
    scenario: "A production environment has required reviewers configured. A team asks whether the person who pushed the change can approve their own deployment, and how many reviewers can be listed.",
    question: "Which description is accurate?",
    options: [
      { id: 'A', text: "Reviewers are limited to repository administrators, who may always approve their own runs." },
      { id: 'B', text: "Any number of reviewers may be listed and all of them must approve before the job proceeds." },
      { id: 'C', text: "Up to six individuals or teams may be listed as required reviewers, only one of them needs to approve, and the environment offers a setting that prevents the user who started the run from approving it." },
      { id: 'D', text: "Approval is granted by whoever opens the run page first, and self-approval is always blocked." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An environment accepts a bounded list of up to six required reviewers made up of users or teams, a single approval from that list releases the job, and a separate setting can forbid the person who triggered the run from being the approver, which is how self-approval is prevented when segregation of duties matters. Approval is not unanimous, reviewers are not restricted to administrators, and approval is a deliberate act rather than a consequence of opening a page.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["GH-200", "Environments", "Reviewers", "Governance"]
  },
  {
    id: "gh-200-148",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Runner Software Updating in the Middle of a Maintenance Window",
    scenario: "A regulated environment requires that any software change on build hosts goes through a change record. Self-hosted runners currently update themselves when a new version is released, which conflicts with that requirement.",
    question: "What is the correct handling?",
    options: [
      { id: 'A', text: "Start the runner with the update-disabling option and take responsibility for installing new runner versions before the old one stops being supported, since an outdated runner eventually cannot connect." },
      { id: 'B', text: "Block the update endpoint at the firewall, which stops the update without any operational obligation." },
      { id: 'C', text: "Nothing can be done; self-hosted runners always update themselves." },
      { id: 'D', text: "Set an organization policy that freezes the runner version for all self-hosted runners." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Automatic update can be turned off with a runner configuration option, which suits a change-controlled environment, but it transfers the upgrade obligation to the operator because a runner too far behind is eventually refused by the service. Blocking the endpoint produces the same version drift with none of the visibility, there is no organization setting that pins runner versions, and the behaviour is configurable rather than mandatory.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Change Control", "Operations"]
  },
  {
    id: "gh-200-149",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Retaining Actions Governance Events Beyond the Platform Window",
    scenario: "A compliance programme requires seven years of records for changes to Actions policies, runner registrations and secret management. The platform audit log retains events for a shorter period.",
    question: "Which capability meets the requirement?",
    options: [
      { id: 'A', text: "Configure audit log streaming to an external destination such as object storage or a log platform, which delivers events continuously so retention is governed by the destination." },
      { id: 'B', text: "Increase the audit log retention setting to the required number of years." },
      { id: 'C', text: "Export the audit log by hand each quarter from the web interface." },
      { id: 'D', text: "Rely on workflow run logs, which capture the same governance events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Audit log streaming pushes events continuously to a customer-controlled destination, which moves retention out of the platform window and into a system the organization already governs, and it removes the gap risk inherent in periodic manual exports. Retention within the platform is not configurable to arbitrary lengths, quarterly manual exports are fragile and easy to miss, and workflow run logs record job execution rather than administrative changes.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["GH-200", "Audit Log", "Compliance", "Enterprise"]
  },
  {
    id: "gh-200-150",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Provisioning a Runner That Exists for Exactly One Job",
    scenario: "A platform team builds its own autoscaler rather than adopting the Kubernetes controller. Each runner must accept exactly one job and then exit, and no long-lived registration credential should be stored on the instance image.",
    question: "Which registration approach fits?",
    options: [
      { id: 'A', text: "Generate a just-in-time runner configuration through the API for each instance, which encodes a single-use ephemeral registration the runner consumes at start-up." },
      { id: 'B', text: "Bake a registration token into the instance image and rotate the image weekly." },
      { id: 'C', text: "Register each instance interactively with a personal access token held in the instance metadata." },
      { id: 'D', text: "Register a persistent runner and have the last step of every job restart the host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Just-in-time configuration is generated per instance through the API and produces a runner that registers, takes one job and exits, so nothing reusable is stored on the image and the ephemeral guarantee is enforced by the registration itself. Baking a token into an image leaves a credential on disk with a long window, a personal access token in instance metadata is a broader credential in a readable place, and restarting after a persistent job still leaves the registration and any leftover state.",
    referenceUrl: "https://docs.github.com/en/rest/actions/self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Ephemeral", "Autoscaling"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_6;
