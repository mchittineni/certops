export const GITHUB_ACTIONS_QUESTIONS_9 = [
  {
    id: "gh-200-201",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "A Cleanup Job That Should Not Run After a Cancellation",
    scenario: "A teardown job currently uses a condition of always() so it runs after failures. Operators find that cancelling a run mid-deployment also triggers teardown, which removes an environment that was left half-configured and that they wanted to inspect.",
    question: "Which condition expresses run after success or failure, but not after cancellation?",
    options: [
      { id: 'A', text: "A condition negating `cancelled()`, true for success and failure but not once cancelled." },
      { id: 'B', text: "A condition of always() with continue-on-error set on the job." },
      { id: 'C', text: "A condition combining success() and failure(), which together cover every non-cancelled outcome." },
      { id: 'D', text: "A condition of failure(), since a cancelled run is reported as a success." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Negating the cancelled status check keeps the job scheduled regardless of whether upstream work succeeded or failed while excluding the cancellation case, which is precisely the requested behaviour and the usual refinement of a blanket always(). Combining the two positive status functions yields a condition that is never true at once, tolerating errors does not change when a job is scheduled, and a cancelled run is not reported as a success.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Expressions", "Conditions", "Cancellation"]
  },
  {
    id: "gh-200-202",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Checking Out Two Repositories Side by Side",
    scenario: "A job must build code from the current repository against test fixtures held in a second repository. Adding a second checkout step overwrites the first checkout in the workspace root.",
    question: "Which input prevents the collision?",
    options: [
      { id: 'A', text: "Running the second checkout in a separate job, since one job can only hold one repository." },
      { id: 'B', text: "The clean input set to false on the second checkout, which preserves the first." },
      { id: 'C', text: "The sparse-checkout input, which isolates each repository automatically." },
      { id: 'D', text: "The path input on each checkout step, placing each repository in its own subdirectory of the workspace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The checkout action defaults to the workspace root, so a second invocation replaces the first unless each is given a path placing it in its own subdirectory, after which both trees coexist and later steps address them by path. Disabling cleaning leaves untracked files rather than preventing the checkout itself from taking over the directory, sparse checkout limits which files are fetched, and a single job can hold as many checkouts as it has directories for.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",
    tags: ["GH-200", "checkout", "Workspace"]
  },
  {
    id: "gh-200-203",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Inspecting What a Context Actually Contains",
    scenario: "An expression referencing a nested property of the event payload evaluates to nothing, and the author is unsure whether the property exists at all for this event type.",
    question: "What is the quickest way to find out from within the workflow?",
    options: [
      { id: 'A', text: "Print the context reference directly, which the runner expands into a readable structure." },
      { id: 'B', text: "Enable debug logging, which is the only way to see the payload's contents at all." },
      { id: 'C', text: "Add a temporary step printing the context with `toJSON`, mindful that the output is untrusted." },
      { id: 'D', text: "Download the event payload artifact, which the runner uploads for every run." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The toJSON function serialises a whole context so a single step reveals exactly which properties exist for the event in hand, which settles the question immediately, though the payload contains attacker-influenced text so it should be written out rather than pasted into a command. Referencing an object directly yields an unhelpful placeholder, debug logging is not required for this, and no event payload artifact is uploaded automatically.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Expressions", "Contexts", "Troubleshooting"]
  },
  {
    id: "gh-200-204",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Running on Branch Pushes but Not on Nightly Tags",
    scenario: "An automated process pushes a dated tag every night. A workflow triggered by push runs for these tags as well as for branch pushes, and the tag runs are pure waste.",
    question: "Which filter suppresses them?",
    options: [
      { id: 'A', text: "A paths-ignore filter, since tags change no paths." },
      { id: 'B', text: "A tags-ignore filter matching the nightly tag pattern on the push trigger." },
      { id: 'C', text: "A branches filter listing every branch, which implicitly excludes tags." },
      { id: 'D', text: "A job condition comparing github.ref_type to branch, which prevents the run from starting." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The push trigger accepts tag filters alongside branch filters, and tags-ignore naming the nightly pattern stops those runs being created at all. Declaring a branches filter is in fact the other clean way to express this because a push trigger with only a branches filter does not match tag pushes, but the distractor claim that it works implicitly while listing every branch is the wrong reasoning. A job condition still starts a run, and a tag push does change paths from the perspective of the filter.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Triggers", "Tags", "Filters"]
  },
  {
    id: "gh-200-205",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Running a One-Off Tool With No Published Action",
    scenario: "A workflow needs a command-line tool that is published only as a container image. Installing it on the runner takes minutes, and the team does not want to author an action just to invoke it once.",
    question: "Which step form invokes the image directly?",
    options: [
      { id: 'A', text: "A job container key, which is the only way to use an image without authoring an action." },
      { id: 'B', text: "A run step invoking the container runtime by hand, since only actions may be referenced with uses." },
      { id: 'C', text: "A step whose uses value is a docker reference to the published image, with args supplied through the with block." },
      { id: 'D', text: "A step whose uses value is the image name alone, which the runner resolves against the default registry." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A step may reference a published container image directly with a docker scheme reference, and the runner executes it as a container action without any metadata file being authored. A bare image name is interpreted as a repository reference rather than an image, a job container replaces the environment for every step rather than running one tool, and invoking the runtime by hand works but is exactly the boilerplate the supported form removes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "Docker", "Steps"]
  },
  {
    id: "gh-200-206",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Keeping the CI Toolchain Version in One Place",
    scenario: "The language version is declared both in a repository version file used by local development and as a literal in three workflows. The two drift apart and a recent incident was traced to CI testing a different version from the one developers use.",
    question: "Which change removes the duplication?",
    options: [
      { id: 'A', text: "Add a workflow that fails when the two values differ, keeping both declarations." },
      { id: 'B', text: "Move the version into a repository variable read by the workflows and scripts." },
      { id: 'C', text: "Use the setup action's option to read the version from the existing version file." },
      { id: 'D', text: "Pin the workflows to the latest version so they match what developers install." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Language setup actions accept a version file input, so pointing them at the file developers already use makes one artifact authoritative for both environments and removes the possibility of drift. A configuration variable creates a third place that local tooling must be taught about, tracking the latest version reintroduces the mismatch whenever a developer lags, and a consistency check detects the drift rather than preventing it.",
    referenceUrl: "https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs",
    tags: ["GH-200", "Setup Actions", "Toolchain", "Reliability"]
  },
  {
    id: "gh-200-207",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Retrying an Intermittently Failing Step",
    scenario: "A step that publishes to an external registry fails roughly one time in twenty with a transient network error. The team wants an automatic retry for this step alone, without re-running the whole job.",
    question: "What is available?",
    options: [
      { id: 'A', text: "There is no built-in step retry, so retry in the script or with a community action." },
      { id: 'B', text: "A `retries:` key on the step, which defaults to zero and can be raised per step." },
      { id: 'C', text: "The `continue-on-error` setting, which retries the step before reporting its result." },
      { id: 'D', text: "A `strategy:` block on the step carrying an `attempts` value for the retry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The workflow syntax offers no step-level retry, so retrying is done inside the script with a loop and a backoff or by an action that wraps the command, and the practical caution is to keep the retried region small and bounded because retrying a deterministic failure only multiplies the time to feedback. There is no retries key, no step strategy block, and continue-on-error tolerates a failure rather than retrying it.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Reliability", "Retries", "Workflows"]
  },
  {
    id: "gh-200-208",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Collecting Many Per-Leg Artifacts in One Step",
    scenario: "A matrix uploads one coverage artifact per leg, each named after its matrix values. A summary job needs all of them together in a single directory to produce a combined report.",
    question: "Which download configuration achieves that?",
    options: [
      { id: 'A', text: "Download with a `pattern` matching the name prefix and merge the matches into one directory." },
      { id: 'B', text: "Download through the API, since the action can only fetch a single artifact at a time." },
      { id: 'C', text: "Omit the name so every artifact is fetched, which always merges them together." },
      { id: 'D', text: "Call the download step once per matrix leg, naming each artifact explicitly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The download step accepts a name pattern together with an option controlling whether matched artifacts are merged into a single directory or kept in per-artifact subdirectories, which is exactly the combining case described. Enumerating legs duplicates the matrix definition, omitting the name downloads everything into separate subdirectories rather than merging, and the action is perfectly capable of fetching several artifacts.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["GH-200", "Artifacts", "Matrix"]
  },
  {
    id: "gh-200-209",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Selecting a Download for the Runner Processor Architecture",
    scenario: "A step downloads a prebuilt binary. The matrix now includes an ARM-based runner alongside the existing x64 ones, and the step downloads the wrong build there.",
    question: "Which context value should select the download?",
    options: [
      { id: 'A', text: "The matrix.os value alone, since the operating system determines the architecture." },
      { id: 'B', text: "`runner.arch`, alongside `runner.os`, which together identify the platform." },
      { id: 'C', text: "The github.repository_visibility value, which correlates with runner hardware." },
      { id: 'D', text: "The runner.name value, parsed for a hardware suffix." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The runner context reports both the operating system and the processor architecture, and a download decision needs both because the same operating system now exists on more than one architecture. Repository visibility is unrelated, the operating system no longer implies the architecture, and parsing a runner name is a fragile substitute for a value the platform already provides.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Runners", "Architecture"]
  },
  {
    id: "gh-200-210",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Setting a Variable for Every Step of One Matrix Leg",
    scenario: "A matrix leg testing against a preview build needs an extra environment variable set for all eleven of its steps, while the other legs must not have it set at all.",
    question: "What is the cleanest expression?",
    options: [
      { id: 'A', text: "A job-level `env` entry whose value reads a matrix variable, so each leg gets its own." },
      { id: 'B', text: "An `env` entry repeated on all eleven steps with an inline condition on each." },
      { id: 'C', text: "A workflow-level `env` entry, which is resolved once for each matrix leg." },
      { id: 'D', text: "A second job duplicated from the first with the variable hard-coded in it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The matrix context is available in a job-level env block, so one entry computed from a matrix variable gives every step of that leg the right value while other legs receive whatever the expression yields for them. Repeating the entry on eleven steps is the duplication being avoided, duplicating the job discards the matrix, and a workflow-level block is evaluated before matrix expansion so it cannot vary per leg.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables",
    tags: ["GH-200", "Matrix", "env", "Contexts"]
  },
  {
    id: "gh-200-211",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "A Manual Trigger That Needs Too Many Fields",
    scenario: "A team designs a manual deployment workflow with thirty input fields covering every option an operator might set. The workflow is rejected when the file is added.",
    question: "What is the constraint and the usual design response?",
    options: [
      { id: 'A', text: "`workflow_dispatch` takes at most 25 inputs, so collapse them or move them into the repo." },
      { id: 'B', text: "There is no limit on inputs, so the rejection must come from a duplicated input name." },
      { id: 'C', text: "Inputs are limited only by total character length, so shortening the descriptions fixes it." },
      { id: 'D', text: "The 25-input limit spans every trigger in the file, so the schedule trigger must go." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A manual dispatch may declare no more than 25 top-level inputs, so thirty are rejected, and hitting that ceiling is usually a signal that operational configuration is being retyped on every run rather than living in the repository where it can be reviewed and versioned. The limit is specific to this trigger rather than shared across triggers. There is also a separate 65,535-character cap on the dispatch payload, but the input count is its own limit, so shortening descriptions would not bring thirty inputs under 25.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "workflow_dispatch", "Limits", "Design"]
  },
  {
    id: "gh-200-212",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Permissions Inherited by a Called Workflow",
    scenario: "A calling workflow grants its job contents: read only. The reusable workflow it calls declares a permissions block requesting packages: write, and the run fails when the called workflow tries to publish.",
    question: "What is the rule?",
    options: [
      { id: 'A', text: "A called workflow's permissions block replaces the caller's entirely, so the cause lies elsewhere." },
      { id: 'B', text: "A called workflow always gets the repository default permissions whatever either block says." },
      { id: 'C', text: "A called workflow may hold the caller's permissions or fewer, never more, so the caller must grant it." },
      { id: 'D', text: "Permissions cannot be declared in a reusable workflow at all, so the block is ignored." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Token scope flows downward and can only narrow, so a reusable workflow cannot grant itself an authority the caller did not hold, which keeps the calling repository in control of what its token can do. This means the caller must add the scope for the called workflow to use it. The called block does not override the caller, defaults do not reassert themselves, and reusable workflows may certainly declare permissions.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Permissions", "Security"]
  },
  {
    id: "gh-200-213",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Gating a Deployment on an External Change Management System",
    scenario: "Production deployments must be blocked until the organization change management platform confirms an approved change record exists. The team does not want to poll from inside the workflow, and wants the gate to hold even if someone edits the workflow file.",
    question: "Which capability fits?",
    options: [
      { id: 'A', text: "A first step in the deploy job that calls the change system and exits non-zero without a record." },
      { id: 'B', text: "A required status check on the branch named after the change management system." },
      { id: 'C', text: "A custom deployment protection rule from a GitHub App, which approves or rejects out of band." },
      { id: 'D', text: "A wait timer long enough for the change record to be approved by hand." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Environments accept custom protection rules implemented by a GitHub App, so the deployment is held while the external system is consulted and released or rejected by that system, and because the rule lives on the environment it cannot be bypassed by editing the workflow. A first step inside the job is exactly the bypassable in-workflow check being avoided, branch status checks gate merging rather than deployment, and a timer waits without verifying anything.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/protecting-deployments/creating-custom-deployment-protection-rules",
    tags: ["GH-200", "Environments", "Protection Rules", "Integration"]
  },
  {
    id: "gh-200-214",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Finding Which Jobs Dominate a Long Pipeline",
    scenario: "A pipeline takes fifty minutes and the team wants data on where the time goes across many runs, rather than reading the timeline of a single run by eye.",
    question: "Which approach gives that?",
    options: [
      { id: 'A', text: "Query the run timing endpoint across a set of runs, or read the repository performance metrics." },
      { id: 'B', text: "Add a step to each job recording its own duration, since no timing data is exposed." },
      { id: 'C', text: "Read the billing usage report, which lists the duration of each individual job." },
      { id: 'D', text: "Enable debug logging, which adds timing information to every step it runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The API exposes run timing data and the platform surfaces Actions performance metrics, both of which aggregate across runs and answer where the time is spent without instrumenting anything. Billing reports aggregate metered minutes rather than per-job structure, debug logging adds verbosity for a single investigation, and self-instrumentation duplicates data the platform already holds.",
    referenceUrl: "https://docs.github.com/en/rest/actions/workflow-runs",
    tags: ["GH-200", "API", "Performance", "Monitoring"]
  },
  {
    id: "gh-200-215",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Cache Entries Disappearing Before They Are Reused",
    scenario: "A repository caches several large toolchains under different keys. Entries that were present yesterday are missing today even though the keys have not changed and no lockfile was touched.",
    question: "Which behaviours explain this?",
    options: [
      { id: 'A', text: "Caches are per-run and never survive into a later run, so any hit observed was a coincidence." },
      { id: 'B', text: "Caches are cleared whenever the repository's default branch receives a push of any kind." },
      { id: 'C', text: "Caches are removed when the artifact retention period lapses, which is set to one day here." },
      { id: 'D', text: "A repository has a cache allowance with LRU eviction, and a week's disuse also removes one." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cache storage is bounded per repository and reclaimed by evicting the least recently used entries once the total is exceeded, with a separate rule removing anything untouched for a week, so several large toolchains under different keys naturally compete and the losers vanish without any key change. Pushes do not clear caches, caches are explicitly designed to survive across runs, and artifact retention governs artifacts rather than caches.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["GH-200", "Caching", "Quotas", "Eviction"]
  },
  {
    id: "gh-200-216",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Stopping a Run That Was Started by Mistake",
    scenario: "An operator dispatches a production deployment against the wrong version and needs it stopped immediately, then wants the run record kept for the incident review rather than removed.",
    question: "Which actions are appropriate?",
    options: [
      { id: 'A', text: "Re-run the workflow with the correct version, which supersedes the incorrect run." },
      { id: 'B', text: "Disable the workflow, which also cancels the runs already in progress." },
      { id: 'C', text: "Cancel the run from its page or the API, which records a cancelled conclusion." },
      { id: 'D', text: "Delete the run, which stops the jobs and is the only immediate control." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cancelling stops the in-flight jobs, allows any cleanup conditioned appropriately to execute, and leaves a run recorded with a cancelled conclusion, which is what an incident review needs. Deleting a run removes the very evidence being preserved, disabling a workflow prevents future runs rather than stopping current ones, and starting another run does not stop the first.",
    referenceUrl: "https://docs.github.com/en/actions/managing-workflow-runs/canceling-a-workflow",
    tags: ["GH-200", "Workflow Runs", "Operations"]
  },
  {
    id: "gh-200-217",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "An Input Variable That Is Not Set Inside a Composite Action",
    scenario: "A composite action has an input named api-url. A run step inside the action reads the conventional prefixed environment variable for that input and finds it empty, although the caller clearly passed a value.",
    question: "What is the situation?",
    options: [
      { id: 'A', text: "The value is present but masked, which is why the step appears to print nothing at all." },
      { id: 'B', text: "The prefix convention is lowercase inside a composite action, so the variable name is wrong." },
      { id: 'C', text: "Composite actions receive inputs only when a default is declared, which this input lacks." },
      { id: 'D', text: "Composite run steps get no prefixed input variables, so read the inputs context." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The prefixed environment variable convention applies to JavaScript and container actions, whereas a composite action exposes its inputs through the inputs context, so a run step either interpolates that context or binds it to a variable of its own choosing in the step env block. The prefix casing is not the issue, a default is not a precondition for receiving a value, and an ordinary input is not masked.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Composite", "Inputs"]
  },
  {
    id: "gh-200-218",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Passing an Input Through to a Container Action Command Line",
    scenario: "A container action must invoke its entry point with a flag whose value comes from a declared input, and the author wants that visible in the metadata rather than parsed inside the container.",
    question: "How is that written?",
    options: [
      { id: 'A', text: "List the flag and an expression referencing the input as entries in the args list of the runs block." },
      { id: 'B', text: "Args cannot reference inputs, so the entry point must read the prefixed environment variable." },
      { id: 'C', text: "Declare a command key listing the flag, since args does not accept expressions." },
      { id: 'D', text: "Add the input name to the entrypoint string, which the runner substitutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The args list of a container action accepts expressions, so an input can be threaded onto the command line declaratively and the interface remains visible to anyone reading the metadata. The entrypoint names the executable rather than templating arguments, there is no command key, and while reading the prefixed environment variable also works it is not the only route and is the very thing the author wanted to avoid.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Docker", "args"]
  },
  {
    id: "gh-200-219",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Keeping an Action Own Dependencies Current",
    scenario: "A JavaScript action bundles its dependencies into a committed file. A security advisory affects one of those dependencies, and the maintainer wants such advisories to raise a pull request against the action repository automatically.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Enable Dependabot in the consuming repositories, which updates the action transitively." },
      { id: 'B', text: "Remove the bundle and install dependencies at run time so consumers get patches." },
      { id: 'C', text: "Enable Dependabot in the action's own repository, and rebuild the committed bundle on release." },
      { id: 'D', text: "Nothing; the platform scans and patches bundled dependencies automatically." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The action repository is where its dependencies are declared, so Dependabot must be enabled there, and because consumers execute the committed bundle rather than the manifest the release process has to rebuild that bundle or the advisory is closed on paper only. Consumer repositories see the action as a single reference and cannot update inside it, bundles are not patched automatically, and installing at run time is not how actions execute.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["GH-200", "Custom Actions", "Dependabot", "Supply Chain"]
  },
  {
    id: "gh-200-220",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Where the Entry Point Path of a JavaScript Action Is Resolved",
    scenario: "An action metadata file sits in a subdirectory and names its main script with a path that includes the subdirectory name again. Consumers report the script cannot be found.",
    question: "How should the path be written?",
    options: [
      { id: 'A', text: "Relative to the root of the action repository, so the subdirectory must be included." },
      { id: 'B', text: "As an absolute path on the runner filesystem." },
      { id: 'C', text: "Relative to the directory holding the metadata, so the subdirectory is not repeated." },
      { id: 'D', text: "Relative to the consuming repository workspace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Paths named in the runs block, including main and any pre or post scripts, resolve against the directory holding the metadata file, so repeating the subdirectory produces a path one level too deep. Resolving against the repository root would prevent several actions living in sibling subdirectories, resolving against the consumer workspace would make the action depend on its callers, and absolute paths are not portable.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "JavaScript", "Metadata"]
  },
  {
    id: "gh-200-221",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Choosing the Audience for an Identity Token",
    scenario: "A workflow federates to two different services. Each expects tokens issued for itself, and a reviewer warns that a token accepted by one service must not be replayable against the other.",
    question: "Which mechanism addresses that?",
    options: [
      { id: 'A', text: "Use a separate repository per service, since the audience cannot vary within one workflow." },
      { id: 'B', text: "Rely on the subject claim, which already identifies the intended recipient service." },
      { id: 'C', text: "Request the token with the audience each service expects, and have each verify the audience claim." },
      { id: 'D', text: "Set a short expiry on the token, which prevents it being replayed elsewhere." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The audience claim states which service a token is intended for and can be chosen per request, so requesting the right audience and having each verifier check it prevents a token issued for one service being presented to another. Splitting repositories is unnecessary, the subject identifies the workflow that requested the token rather than its intended recipient, and a short lifetime shortens the window without preventing use inside it.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["GH-200", "OIDC", "Security", "Tokens"]
  },
  {
    id: "gh-200-222",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Choosing the Visibility of an Organization Secret",
    scenario: "An organization secret must be usable by every private and internal repository, present and future, but must never be available to the organization public repositories.",
    question: "Which visibility setting expresses that?",
    options: [
      { id: 'A', text: "The private repositories visibility, which covers private and internal without listing them." },
      { id: 'B', text: "The all repositories visibility, relying on public ones never referencing it." },
      { id: 'C', text: "The selected repositories visibility, listing each current private repository." },
      { id: 'D', text: "The all repositories visibility, since public repositories are excluded anyway." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organization secrets offer a visibility scoped to private and internal repositories, which satisfies the requirement without a list that would need maintaining as repositories are created. Enumerating repositories works today and drifts tomorrow, and granting access to all repositories genuinely includes public ones, so relying on them not referencing the secret is a convention rather than a control.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "Organization", "Visibility"]
  },
  {
    id: "gh-200-223",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Disk Filling Up on Persistent Self-Hosted Runners",
    scenario: "Persistent self-hosted runners fail intermittently with out-of-space errors. Investigation shows accumulated container images, old workspaces and package manager caches from months of jobs.",
    question: "Which approach fixes this durably?",
    options: [
      { id: 'A', text: "Move to ephemeral runners, and schedule cleanup with alerting where persistent ones stay." },
      { id: 'B', text: "Increase the disk size on the runner hosts, which addresses the growth permanently." },
      { id: 'C', text: "Add a cleanup step to every workflow, which suffices because each job tidies up." },
      { id: 'D', text: "Enable the runner's automatic update, which reclaims space during each upgrade." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unbounded accumulation is inherent to reusing a machine across jobs, so the durable answer is to stop reusing it, with scheduled cleanup and free-space alerting as the fallback where persistent runners are unavoidable. A cleanup step in each workflow is skipped whenever a job fails or is cancelled and depends on every team remembering it, a bigger disk postpones the same failure, and runner updates do not reclaim job leftovers.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Operations", "Ephemeral"]
  },
  {
    id: "gh-200-224",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Credentials for Automation That Spans Repositories",
    scenario: "A platform workflow must open pull requests in twenty repositories. It currently uses a personal access token belonging to a staff engineer, which broke when that person changed teams and will break again when they leave.",
    question: "Which credential model is appropriate?",
    options: [
      { id: 'A', text: "A personal access token on a shared machine account, with the password held in a team vault." },
      { id: 'B', text: "A GitHub App with only the permissions it needs, from which the workflow mints a short-lived token." },
      { id: 'C', text: "The automatic token, given organization-wide scope through the workflow's permissions block." },
      { id: 'D', text: "A fine-grained personal access token owned by the team lead and rotated once a year." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A GitHub App is an organization-owned identity with granular permissions whose installation tokens are short-lived and minted per run, which removes the dependency on any individual and shrinks the standing credential to nothing. A shared machine account is still a person-shaped credential with a long-lived secret and unclear ownership, the automatic token cannot be extended beyond its own repository, and a personal token owned by a different individual reproduces the original problem.",
    referenceUrl: "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation",
    tags: ["GH-200", "GitHub Apps", "Tokens", "Governance"]
  },
  {
    id: "gh-200-225",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Deciding Where a New Secret Belongs",
    scenario: "A new credential is needed by the deployment job of one repository, targeting production only, and an administrator must choose a scope for it.",
    question: "Which placement follows least privilege?",
    options: [
      { id: 'A', text: "A repository secret, so that any job in the repository can use it if it needs to later." },
      { id: 'B', text: "An environment secret on that repository's production environment, so its protection rules apply." },
      { id: 'C', text: "An organization secret scoped to that repository, so it is centrally managed from the start." },
      { id: 'D', text: "A configuration variable, on the grounds that the deployment target is not confidential." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The narrowest scope that satisfies the requirement is an environment secret, which restricts the value to jobs declaring that environment and brings the environment reviewers and branch policies with it. A repository secret is readable by every job including ones added later, an organization secret centralises management but widens the boundary for a value only one environment needs, and a variable offers no protection at all for a credential.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "Environments", "Least Privilege"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_9;
