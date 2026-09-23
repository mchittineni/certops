export const GITHUB_ACTIONS_QUESTIONS_3 = [
  {
    id: "gh-200-51",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Starting a Release Workflow Only for Version Tags",
    scenario: "A publish workflow must run when a tag matching a version pattern is pushed, and must not run for pushes to any branch, including the default branch.",
    question: "Which trigger definition is correct?",
    options: [
      { id: 'A', text: "A push trigger with both a branches filter of the default branch and a tags filter." },
      { id: 'B', text: "A create trigger, with a job-level if comparing github.ref_type to tag." },
      { id: 'C', text: "A push trigger with a tags filter carrying the version pattern and no branches filter." },
      { id: 'D', text: "A push trigger on all branches, with a job-level if comparing github.event.ref to the version pattern using a glob." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A push trigger that declares only a tags filter matches tag pushes whose name fits the pattern and matches no branch push at all, which is exactly the requirement. Adding a branches filter widens the trigger to include branch pushes because the two filters are alternatives rather than a conjunction, the create event fires for branches and tags and gives a weaker contract, and filtering inside the job still starts a run and consumes minutes for every branch push.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "Triggers", "Tags"]
  },
  {
    id: "gh-200-52",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Seeing Every Matrix Failure in One Run",
    scenario: "A matrix runs the test suite on six platform combinations. When one combination fails the others are cancelled immediately, so the team learns about one broken platform per run and needs several rounds to find them all.",
    question: "Which change lets a single run report every failing combination?",
    options: [
      { id: 'A', text: "Set continue-on-error to true on the test step in every combination." },
      { id: 'B', text: "Split the matrix into six separate jobs joined by needs." },
      { id: 'C', text: "Set strategy.fail-fast to false so a failing combination no longer cancels its siblings." },
      { id: 'D', text: "Raise strategy.max-parallel so all six combinations start before any can fail." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Matrix jobs default to fail-fast behaviour, where the first failure cancels the remaining combinations, and turning it off lets every combination run to completion so one run surfaces all the failures while still failing overall. Marking the step continue-on-error would report the run as successful and hide the breakage, max-parallel affects scheduling rather than cancellation, and hand-splitting the matrix loses the matrix entirely.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Workflows", "Matrix", "fail-fast"]
  },
  {
    id: "gh-200-53",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Stopping a Hung Job From Consuming Minutes",
    scenario: "A job occasionally hangs waiting on a network call that never returns. Nobody notices until the run finally stops many hours later, having consumed a large number of billed minutes.",
    question: "Which setting bounds the damage, and what is the default it replaces?",
    options: [
      { id: 'A', text: "retry-limit on the job, replacing a default of three attempts." },
      { id: 'B', text: "`timeout-minutes` on the job, replacing a default of 360 minutes." },
      { id: 'C', text: "continue-on-error on the job, replacing a default of false." },
      { id: 'D', text: "concurrency on the job, replacing an unlimited default." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A job runs for up to three hundred and sixty minutes before the runner cancels it, and setting timeout-minutes lowers that ceiling to something proportionate to the work so a hang is cut short quickly. Concurrency governs how runs of a group overlap, there is no retry-limit key for jobs, and continue-on-error changes how a failure is reported rather than how long a job may run.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow",
    tags: ["GH-200", "Workflows", "timeout-minutes"]
  },
  {
    id: "gh-200-54",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Running Every Step Inside a Prepared Image",
    scenario: "A build requires a toolchain that takes four minutes to install on a bare runner. The team already publishes a container image with the toolchain preinstalled and wants every step of the job to execute inside it.",
    question: "Which job key achieves that?",
    options: [
      { id: 'A', text: "A `container` key on the job naming the image, so the steps run inside it." },
      { id: 'B', text: "A runs-on value naming the image instead of a runner label." },
      { id: 'C', text: "A first step that runs a docker exec command for each subsequent command." },
      { id: 'D', text: "A services block naming the toolchain image." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The container key tells the runner to execute the steps of that job inside the named image, with the workspace mounted, so the preinstalled toolchain is simply present without an install step. Service containers run alongside the job as companions rather than hosting the steps, runs-on selects the runner machine and its labels rather than an image, and wrapping every command by hand reintroduces the boilerplate the feature exists to remove.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/running-jobs-in-a-container",
    tags: ["GH-200", "Workflows", "Containers"]
  },
  {
    id: "gh-200-55",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Publishing a Readable Test Report on the Run Page",
    scenario: "Reviewers currently open raw job logs to find the pass and fail counts. The team wants a formatted table to appear directly on the workflow run summary page, without publishing an artifact or commenting on the pull request.",
    question: "How is that produced?",
    options: [
      { id: 'A', text: "Upload the table as an artifact named summary, which the run page renders inline." },
      { id: 'B', text: "Append markdown to the file path held in GITHUB_STEP_SUMMARY from a step." },
      { id: 'C', text: "Set a job output containing the markdown, which the run page renders." },
      { id: 'D', text: "Emit a notice workflow command containing the markdown table." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Each step can append markdown to the file named by GITHUB_STEP_SUMMARY, and the runner renders the accumulated content on the run summary page, which is the intended way to surface a report without extra plumbing. Notice commands produce single-line annotations rather than rendered markdown, job outputs are data passed between jobs and are not displayed, and artifacts are downloadable files that the run page does not render.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions",
    tags: ["GH-200", "Workflows", "Job Summaries"]
  },
  {
    id: "gh-200-56",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Running a Step Only for Branches With a Given Prefix",
    scenario: "A step should execute only when the run is for a branch whose name begins with release/. The team wants the check written as a workflow expression rather than a shell test, so that the step is visibly skipped rather than silently exiting.",
    question: "Which expression belongs in the step condition?",
    options: [
      { id: 'A', text: "A call to startsWith passing github.ref and the fully qualified ref prefix for release branches." },
      { id: 'B', text: "A call to format passing github.ref_name and a wildcard pattern." },
      { id: 'C', text: "A comparison of github.ref to the literal string release/, which matches by prefix." },
      { id: 'D', text: "A call to hashFiles passing the branch name." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Workflow expressions provide startsWith, endsWith and contains for string tests, and startsWith against the fully qualified ref is the direct way to express a branch-name prefix in a step condition so the user interface shows the step as skipped. Equality compares the whole string rather than a prefix, format builds a string rather than testing one, and hashFiles computes a digest of files for cache keys.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Workflows", "Expressions", "Conditions"]
  },
  {
    id: "gh-200-57",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "A Build That Broke Without Any Code Change",
    scenario: "A workflow using ubuntu-latest passed on Friday and failed on Monday with no commits in between. The failure is a missing system package that the image previously included. The team needs both an immediate unblock and a way to learn about such changes in advance.",
    question: "Which pair of responses is appropriate?",
    options: [
      { id: 'A', text: "Add a retry loop around the failing step, since hosted image contents vary from run to run." },
      { id: 'B', text: "Pin `runs-on` to a specific image version and install the package explicitly." },
      { id: 'C', text: "Clear the repository's Actions cache, which is holding the previous image's contents." },
      { id: 'D', text: "Move to a self-hosted runner, the only way to control what is installed on the host." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The latest label tracks a moving image whose preinstalled software changes on a published schedule, so pinning to an explicit image version restores a predictable environment while installing the dependency explicitly removes the hidden reliance entirely. Image contents do not vary randomly between runs so retrying will not help, self-hosted runners are a heavier answer than declaring a dependency, and the Actions cache stores workflow data rather than the runner image.",
    referenceUrl: "https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners",
    tags: ["GH-200", "Runners", "Hosted Images", "Reliability"]
  },
  {
    id: "gh-200-58",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Running a Privileged Follow-Up After an Untrusted Build",
    scenario: "A build workflow triggered by pull_request cannot post results because fork contributions receive no secrets. The team adds a second workflow triggered by workflow_run on completion of the first, which does have access.",
    question: "Which statement about the second workflow is correct?",
    options: [
      { id: 'A', text: "It runs from the default branch in the base repository with secrets, so the first run's artifact is untrusted input." },
      { id: 'B', text: "It runs with the workflow file taken from the pull request head, so a contributor can change what it does." },
      { id: 'C', text: "It inherits the read-only token of the first workflow, so it still cannot post the results anywhere." },
      { id: 'D', text: "It only fires when the first workflow concludes successfully, so a failed build never reports at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A workflow_run workflow is always taken from the default branch and executes in the base repository context with secrets and a normal token, which is what makes the pattern work and also what makes it dangerous if data carried over from the untrusted run is interpolated into commands. The file never comes from the pull request head, the token is granted independently rather than inherited, and a types filter selects which conclusions fire rather than limiting it to success.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "workflow_run", "Security", "Forks"]
  },
  {
    id: "gh-200-59",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Adding One Extra Variable to a Single Matrix Combination",
    scenario: "A matrix expands three Node versions. Only the Node 20 job should additionally set a flag that marks it as the version whose coverage report is published, and no new combinations should be created.",
    question: "Which matrix construct does that?",
    options: [
      { id: 'A', text: "An `exclude` entry for the other two versions, followed by re-adding them afterwards." },
      { id: 'B', text: "A step-level `if` on the Node version, since matrix values cannot be conditional." },
      { id: 'C', text: "An `include` entry matching the existing combination, which expands it rather than adding a new one." },
      { id: 'D', text: "A second matrix dimension holding the flag, which doubles the combinations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An include entry whose keys all match an existing combination merges its additional keys into that combination instead of generating a new job, which is precisely the mechanism for attaching an extra variable to one cell of a matrix. Excluding and re-adding is convoluted, a second dimension multiplies the matrix, and a step condition works but scatters the knowledge across steps rather than expressing it once in the strategy.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Workflows", "Matrix", "include"]
  },
  {
    id: "gh-200-60",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Reacting to a Published Release Rather Than a Draft",
    scenario: "A workflow uploads binaries to a distribution service. It must run when a maintainer publishes a release, and must not run while the release is still being drafted and edited.",
    question: "Which trigger is correct?",
    options: [
      { id: 'A', text: "A push trigger with a tags filter, which fires at the same moment as publication." },
      { id: 'B', text: "A release trigger with no types filter, which defaults to published only." },
      { id: 'C', text: "A create trigger, which fires when a release is created." },
      { id: 'D', text: "A release trigger with a types filter of published." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The release event carries several activity types including created, edited, prereleased and published, so naming published explicitly is what restricts the workflow to the moment a maintainer makes the release public. Omitting the types filter subscribes to a broader set rather than published alone, the create event covers branch and tag creation rather than releases, and a tag push happens when the tag is written which for a draft release is before publication.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Workflows", "Triggers", "Releases"]
  },
  {
    id: "gh-200-61",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "How a Reusable Workflow Must Be Referenced",
    scenario: "A team tries to call a shared workflow by adding a uses key to a step inside an existing job, pointing at the shared file path. The workflow fails to parse.",
    question: "What is the correct form?",
    options: [
      { id: 'A', text: "`uses` belongs on a step, and the reference omits the `.github/workflows` portion." },
      { id: 'B', text: "`uses` belongs on the job, naming owner, repository, the workflows path and a ref, with no steps." },
      { id: 'C', text: "A reusable workflow is referenced by adding its name to the caller's `needs` list." },
      { id: 'D', text: "A reusable workflow is referenced by a `workflow_call` entry in the caller's triggers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Calling a reusable workflow replaces the body of a job, so the uses key sits at job level with a full reference of owner, repository, the file path including its directory and a ref, and that job declares with and secrets rather than steps. A step-level uses invokes an action instead, needs expresses ordering between jobs in the same workflow, and workflow_call is the trigger the called workflow declares rather than something the caller writes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Syntax"]
  },
  {
    id: "gh-200-62",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Limits on Chaining Reusable Workflows",
    scenario: "An architecture proposal chains reusable workflows: a repository workflow calls a team workflow, which calls another reusable workflow, and so on, until ten reusable workflows sit beneath the top-level caller. A reviewer asks whether the platform permits a chain that deep.",
    question: "What is the constraint?",
    options: [
      { id: 'A', text: "Nesting is capped at ten levels including the top-level caller, so this chain is one too deep." },
      { id: 'B', text: "Reusable workflows cannot call other reusable workflows at all, so only one level is possible." },
      { id: 'C', text: "There is no limit on nesting depth, only a cap on the total number of jobs in one run." },
      { id: 'D', text: "Nesting is unlimited within one organization and capped only when a call crosses organizations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A workflow may nest reusable workflows up to ten levels deep, counting the top-level caller plus up to nine reusable levels, and a single workflow file may call at most 50 unique reusable workflows including nested ones. Ten reusable workflows beneath the caller make eleven levels, one more than allowed, so the chain must be shortened. Nesting is genuinely limited rather than unbounded, calling from a reusable workflow is supported so one level is not the ceiling, and the limit applies regardless of whether calls stay inside one organization.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Limits"]
  },
  {
    id: "gh-200-63",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Letting Other Repositories Use an Action Kept Private",
    scenario: "A platform team maintains an action in a private repository. Workflows in other private repositories of the same organization reference it and fail because the action cannot be found, even though the workflows run with a valid token.",
    question: "Which setting resolves this?",
    options: [
      { id: 'A', text: "Give the consuming workflows a permissions block with `contents: read` for that repository." },
      { id: 'B', text: "Add each consuming repository as a collaborator on the action's own repository." },
      { id: 'C', text: "In the action repository's Actions settings, allow other repositories in the organization to use it." },
      { id: 'D', text: "Make the action repository public, the only way to share an action at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A private repository must opt in by enabling Actions access sharing, after which its actions and reusable workflows resolve for the permitted repositories in the organization or enterprise without any change to the consuming workflows. Making the repository public is unnecessary and exposes the source, collaborator grants apply to people and teams rather than to workflow resolution, and a permissions block scopes the token for the current repository rather than granting cross-repository action access.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/sharing-actions-and-workflows-with-your-organization",
    tags: ["GH-200", "Actions Access", "Private Repositories", "Sharing"]
  },
  {
    id: "gh-200-64",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Pull Requests From New Contributors Waiting for Approval",
    scenario: "A maintainer notices that pull requests from people who have never contributed before show workflows in a pending state with a message about approval, while pull requests from regular contributors run immediately.",
    question: "What is happening?",
    options: [
      { id: 'A', text: "Workflows never run for contributors without write access, so the pending state is permanent." },
      { id: 'B', text: "The repository has exhausted its concurrent job allowance, so new contributors queue last." },
      { id: 'C', text: "Branch protection requires a review of the code before any status check may start." },
      { id: 'D', text: "A setting requires approval before a first-time contributor's workflows run." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Fork pull request settings can require manual approval before workflows run, defaulting to first-time contributors, which prevents an unknown account from consuming minutes or probing the workflow before a maintainer has looked at the change; a maintainer releases each run from the checks area. Queueing would not single out new accounts, workflows do run for contributors without write access once approved, and branch protection gates merging rather than starting checks.",
    referenceUrl: "https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks",
    tags: ["GH-200", "Forks", "Approval", "Security"]
  },
  {
    id: "gh-200-65",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Reviewing What Was Deployed to an Environment",
    scenario: "An incident review needs to establish which commit was last deployed to the staging environment, when, and who approved it. The deployment jobs all declare the staging environment.",
    question: "Where is that recorded?",
    options: [
      { id: 'A', text: "The repository's artifact retention list for that environment" },
      { id: 'B', text: "The dependency graph insights for the deployed commit" },
      { id: 'C', text: "The Actions cache entries under the staging key prefix" },
      { id: 'D', text: "The environment's deployment history, listing commit, time and approvals" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declaring an environment on a job creates a deployment record, and the Environments page keeps a history showing the commit, the run, the time and any approvals that gated it, which is exactly the audit trail an incident review needs. Cache entries hold build inputs, artifact retention describes storage lifetimes, and the dependency graph describes what a commit depends on rather than where it ran.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/managing-your-deployments/viewing-deployment-history",
    tags: ["GH-200", "Environments", "Deployments", "Auditing"]
  },
  {
    id: "gh-200-66",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Preventing Two Deployments to One Environment at Once",
    scenario: "Two pull requests merge within a minute of each other. Both deployment runs start and race, and the second overwrites part of what the first was still applying. The team wants the second run to wait rather than be cancelled, so both changes land in order.",
    question: "Which configuration expresses that?",
    options: [
      { id: 'A', text: "A `needs` relationship declared between the two deployment workflow runs." },
      { id: 'B', text: "A `max-parallel` of one on the deployment job's own matrix strategy." },
      { id: 'C', text: "A `concurrency` block with cancel-in-progress on, the safe default for deploys." },
      { id: 'D', text: "A `concurrency` group naming the environment with cancel-in-progress off, so runs queue." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A concurrency group serialises runs that share the same group name, and leaving cancel-in-progress off makes a later run wait for the running one instead of superseding it, which is what a deployment that must not be interrupted requires. Cancelling in progress would abort a half-applied deployment, max-parallel only orders jobs within one run, and needs cannot express a relationship between separate runs.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["GH-200", "Concurrency", "Deployments"]
  },
  {
    id: "gh-200-67",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Keeping Evidence of a Run That Will Soon Expire",
    scenario: "An auditor needs the complete logs of a workflow run from two months ago as evidence. Retention for the repository is set to ninety days and the run is approaching that boundary.",
    question: "What should be done?",
    options: [
      { id: 'A', text: "Re-run the workflow so a fresh copy of the logs gets a new retention window." },
      { id: 'B', text: "Pin the run from the Actions tab, which exempts it from the retention policy." },
      { id: 'C', text: "Raise the repository's retention setting, which extends runs already recorded." },
      { id: 'D', text: "Download the run's log archive from the page, API or CLI, and file it as evidence." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Logs for a completed run can be downloaded as an archive from the run page or retrieved programmatically, and moving that archive into a system with the required retention is the way to preserve evidence beyond the platform window. Re-running produces logs of a new execution rather than the historical one under audit, retention changes apply going forward rather than resurrecting expiry dates for existing runs, and there is no pinning mechanism that exempts a run.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs",
    tags: ["GH-200", "Logs", "Retention", "Compliance"]
  },
  {
    id: "gh-200-68",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "A Composite Action That Cannot Read a Secret",
    scenario: "A composite action needs an API token. The author writes an expression referencing the secrets context inside the action, and it resolves to an empty value in every workflow that uses the action.",
    question: "What is the correct design?",
    options: [
      { id: 'A', text: "Reference the secret through the env context instead of the secrets context." },
      { id: 'B', text: "Read the token from an environment variable that the runner populates from repository secrets automatically." },
      { id: 'C', text: "Declare the token as an input on the action and have the calling workflow pass the secret to it through the with block." },
      { id: 'D', text: "Declare the token under a secrets block in action.yml, mirroring reusable workflow syntax." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The secrets context is not available inside an action of any type, so a composite action receives sensitive values the same way as any other value, as a declared input that the caller populates from its own secrets context. Action metadata has no secrets block, which is a reusable workflow feature, the runner does not inject repository secrets into the environment automatically, and the env context exposes only variables that have actually been set.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Composite", "Secrets"]
  },
  {
    id: "gh-200-69",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "How an Action Receives Its Declared Inputs",
    scenario: "An author is writing a Docker container action and wants to read an input named api-url from inside the container without adding it to the args list.",
    question: "Where does the value appear?",
    options: [
      { id: 'A', text: "As the first positional argument, since undeclared args follow the order the inputs are declared." },
      { id: 'B', text: "Only through the `args` list, since a container action has no other channel for its inputs." },
      { id: 'C', text: "In an `inputs.json` file the runner places in the container's working directory at start." },
      { id: 'D', text: "As an environment variable named `INPUT_` plus the input name uppercased, so `INPUT_API-URL`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The runner exposes every declared input to a Docker or JavaScript action as an environment variable named INPUT_ followed by the input name in uppercase, with spaces converted to underscores and hyphens left in place, so api-url arrives as INPUT_API-URL. Because the hyphen is kept, a shell cannot reference it with plain $NAME syntax, but the value is still available without threading it through args. No inputs file is written, inputs are not silently mapped onto positional arguments, and the args list is a convenience on top of the environment variables rather than the only channel.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Docker", "Inputs"]
  },
  {
    id: "gh-200-70",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Giving an Action an Icon and Colour in the Marketplace",
    scenario: "An action is functionally complete and the author wants its Marketplace listing to display a recognisable icon and accent colour rather than the generic placeholder.",
    question: "Which part of the metadata controls that?",
    options: [
      { id: 'A', text: "A branding block in action.yml naming an icon and a colour from the supported sets." },
      { id: 'B', text: "A logo key inside the runs block of action.yml." },
      { id: 'C', text: "The repository social preview image configured in repository settings." },
      { id: 'D', text: "An image file named icon.svg committed to the repository root." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The optional branding block in the action metadata accepts an icon name from a fixed set and a colour from a fixed palette, and those two values drive how the listing is rendered in the Marketplace. A committed icon file is not read for this purpose, the social preview affects link unfurls for the repository rather than the action listing, and the runs block describes how the action executes rather than how it is presented.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Branding", "Marketplace"]
  },
  {
    id: "gh-200-71",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Retiring a Self-Hosted Runner Cleanly",
    scenario: "A self-hosted virtual machine is being decommissioned. The administrator wants the runner removed from the organization so that no job is ever dispatched to it, and wants the machine credentials invalidated in the process.",
    question: "What is the correct procedure?",
    options: [
      { id: 'A', text: "Run the runner's config script with the remove operation and a removal token, then destroy the machine." },
      { id: 'B', text: "Power the machine off, since an unreachable runner is dropped from the pool after a timeout." },
      { id: 'C', text: "Delete the runner's labels, which stops any job from matching it in future." },
      { id: 'D', text: "Rotate the organization registration token, which invalidates every registered runner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The supported removal path runs the configuration script in remove mode with a short-lived removal token, which both deregisters the runner and clears the credential file it stored locally, leaving nothing usable on the disposed machine. Powering off leaves the registration in place and jobs may still be queued to it, removing labels does not remove the runner or its credentials, and rotating a registration token affects new registrations rather than existing runners.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/removing-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Decommissioning"]
  },
  {
    id: "gh-200-72",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Making Read-Only the Default Token Scope Everywhere",
    scenario: "A security baseline requires that workflows start with a read-only GITHUB_TOKEN across the whole organization, with any repository needing more having to request it explicitly in the workflow file.",
    question: "How is that baseline applied?",
    options: [
      { id: 'A', text: "Enable required reviewers on every environment, which downgrades the token's scope." },
      { id: 'B', text: "Add a permissions block granting `contents: read` to each workflow file everywhere." },
      { id: 'C', text: "Remove write access from the Actions bot account in the member settings page." },
      { id: 'D', text: "Set the organization's default workflow permissions to read-only; a workflow then raises its own." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Default workflow permissions are an organization-level setting that establishes the starting scope of the automatic token for repositories beneath it, and a workflow that genuinely needs more declares it in a permissions block, which makes the elevation visible in review. Editing every workflow is unenforceable and drifts immediately, there is no Actions bot listed as an organization member to demote, and environment reviewers gate deployments rather than change token scope.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization",
    tags: ["GH-200", "GITHUB_TOKEN", "Governance", "Organization"]
  },
  {
    id: "gh-200-73",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Why a Fork Pull Request Cannot Read a Repository Secret",
    scenario: "A contributor opens a pull request from a fork. The workflow triggered by pull_request runs, but every step that references a repository secret receives an empty string, and the step that tries to push a label fails.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "Secrets are withheld only until a maintainer approves the run, which then receives them." },
      { id: 'B', text: "The secrets exist but must be referenced through the `env` context on fork runs." },
      { id: 'C', text: "The fork has to be added to the repository's runner group before secrets flow." },
      { id: 'D', text: "Secrets are withheld and the token is read-only, since definition and code are untrusted." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "For a pull request originating in a fork the platform deliberately omits secrets and issues a read-only token, so untrusted code cannot exfiltrate credentials or modify the base repository, which is why both symptoms appear together. Maintainer approval releases the run to start rather than granting it secrets, the context used to reference a secret does not change its availability, and runner groups govern which repositories may use runners rather than secret exposure.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Secrets", "Forks", "Security"]
  },
  {
    id: "gh-200-74",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Constraining Which Repository May Assume a Cloud Role",
    scenario: "An organization configures OpenID Connect against a cloud provider. A reviewer warns that the trust policy currently matches any repository in the organization, so a workflow in an unrelated repository could assume the production deployment role.",
    question: "How is the trust narrowed correctly?",
    options: [
      { id: 'A', text: "Move the deployment workflow into a private repository, since the claim carries visibility." },
      { id: 'B', text: "Tighten the subject condition in the trust policy to the specific repository and branch or environment." },
      { id: 'C', text: "Store the role identifier in an environment secret, so only that job knows which to assume." },
      { id: 'D', text: "Restrict `id-token` to the deployment job, since no other job can then request a token." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The token issued to a run carries a subject claim identifying the repository together with the branch, tag or environment, and the enforcement point is the cloud trust policy that decides which subjects may assume the role, so narrowing that condition is what actually prevents another repository from using it. Hiding the role identifier is obscurity rather than control, any workflow can request the id-token permission for itself, and repository visibility is not what the subject claim constrains.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["GH-200", "OIDC", "Security", "Trust Policy"]
  },
  {
    id: "gh-200-75",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Providing More Powerful Hosted Machines to One Team",
    scenario: "A team needs hosted runners with more cores than the standard image provides, without taking on the operational burden of self-hosted machines. Access must be limited to that team repositories, and the change must be visible in billing.",
    question: "Which option fits?",
    options: [
      { id: 'A', text: "Configure larger hosted runners at organization level, in a group limited to those repositories." },
      { id: 'B', text: "Add a resources block to the job requesting more cores from the standard hosted pool." },
      { id: 'C', text: "Run the job in a container with a higher CPU limit, which raises the machine size." },
      { id: 'D', text: "Register self-hosted runners on larger instances, the only way past the standard size." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Larger hosted runners are provisioned and managed by GitHub, are configured at organization level with their own labels, can be confined to selected repositories through a runner group, and are metered separately so their cost is attributable. There is no per-job resources request against the standard pool, a container limit cannot exceed the host it runs on, and self-hosted machines would reintroduce exactly the operational burden the team wants to avoid.",
    referenceUrl: "https://docs.github.com/en/actions/using-github-hosted-runners/about-larger-runners",
    tags: ["GH-200", "Larger Runners", "Runner Groups", "Billing"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_3;
