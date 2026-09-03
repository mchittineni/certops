export const GITHUB_ACTIONS_QUESTIONS_2 = [
  {
    id: "gh-200-26",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Precedence When the Same Variable Is Defined Three Times",
    scenario: "A workflow defines LOG_LEVEL as info at workflow level, warn at job level, and debug on one particular step. A script inside that step prints the value.",
    question: "What does the script print, and why?",
    options: [
      { id: 'A', text: "warn, because job-level env always takes priority over step-level env." },
      { id: 'B', text: "info, because workflow-level variables are applied last and override narrower scopes." },
      { id: 'C', text: "debug, because the most specific scope wins and step-level env overrides job and workflow level." },
      { id: 'D', text: "The workflow fails to parse, because a variable may only be defined at one level." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Environment variables resolve from the narrowest scope outward, so a step-level env entry shadows the same name at job level, which in turn shadows workflow level. Defining a name at several levels is legal and is the intended way to set a default and override it in one place, so the workflow parses normally and the step sees its own value.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables",
    tags: ["GH-200", "Workflows", "Variables", "env"]
  },
  {
    id: "gh-200-27",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Making a Value Computed in One Step Visible to Later Steps",
    scenario: "A step runs a script that derives a build identifier. A later step in the same job needs that identifier as an ordinary environment variable rather than through the steps context.",
    question: "Which technique makes it available?",
    options: [
      { id: 'A', text: "Append a NAME=value line to the file path held in GITHUB_ENV, which the runner applies to every subsequent step in the job." },
      { id: 'B', text: "Write the value to GITHUB_PATH, which the runner converts into an environment variable." },
      { id: 'C', text: "Use export in the first step, because all steps in a job share one shell session." },
      { id: 'D', text: "Add the value to the workflow-level env block using an expression that reads the earlier step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Writing a key-value line to the file named by GITHUB_ENV asks the runner to inject that variable into the environment of every later step in the same job, which is the supported mechanism. Each run step is a separate shell process so an export dies with the step, the workflow-level env block is evaluated before any step has run and cannot read step results, and GITHUB_PATH prepends directories to the executable search path instead.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions",
    tags: ["GH-200", "Workflows", "GITHUB_ENV"]
  },
  {
    id: "gh-200-28",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Behaviour of a Scheduled Workflow in a Quiet Public Repository",
    scenario: "A public repository runs a nightly dependency audit on a schedule. The project has had no commits, issues or pull requests for roughly three months, and the maintainer notices the audit stopped running some time ago.",
    question: "What is the most likely explanation?",
    options: [
      { id: 'A', text: "Scheduled workflows are disabled automatically in a public repository after roughly sixty days without repository activity, and can be re-enabled from the Actions tab." },
      { id: 'B', text: "Cron expressions expire after ninety days and must be renewed by editing the workflow file." },
      { id: 'C', text: "Scheduled workflows only run while at least one other workflow has run in the previous week." },
      { id: 'D', text: "Public repositories do not support the schedule trigger, so the earlier runs were manual." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To avoid burning capacity on abandoned projects, scheduled workflows in a public repository are turned off automatically after around sixty days of repository inactivity, and a maintainer re-enables them from the workflow page or by pushing a commit. Cron expressions themselves do not expire, there is no dependency on other workflows having run, and the schedule trigger is fully supported in public repositories.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Workflows", "schedule", "cron"]
  },
  {
    id: "gh-200-29",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Providing a Database to an Integration Test Job",
    scenario: "An integration test job needs a PostgreSQL instance reachable on localhost for the duration of the job. The team does not want to install and start the database with shell commands, and wants the job to wait until the database accepts connections before tests begin.",
    question: "Which workflow feature fits?",
    options: [
      { id: 'A', text: "A services block on the job declaring a postgres container image with health check options." },
      { id: 'B', text: "A composite action that starts the database in the background with a run step." },
      { id: 'C', text: "A container key on the job, which runs the database image as the job container." },
      { id: 'D', text: "A separate job running the database, with the test job declaring needs on it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service containers are sidecar containers that the runner starts alongside the job, maps onto the job network so they are reachable by hostname or on localhost, and gates on the declared health check before the first step runs. The container key replaces the environment the job steps execute in rather than adding a companion service, a separate job runs on its own runner and ends when it finishes, and a background process in a composite action gives no readiness guarantee.",
    referenceUrl: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
    tags: ["GH-200", "Workflows", "Service Containers"]
  },
  {
    id: "gh-200-30",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Building a Matrix From a List Discovered at Run Time",
    scenario: "A monorepo contains a varying number of service directories. A discovery job lists the services that changed and the build job must fan out over exactly those services, which are not known when the workflow file is written.",
    question: "How is the matrix populated?",
    options: [
      { id: 'A', text: "The build job uses a wildcard in the matrix value, which the runner expands against the workspace." },
      { id: 'B', text: "The discovery job writes the service list to an artifact and the build job sets its matrix from the downloaded file." },
      { id: 'C', text: "The discovery job emits a JSON array as a job output, and the build job sets its matrix using fromJSON on that output read through the needs context." },
      { id: 'D', text: "Dynamic matrices are not supported, so the workflow must enumerate every possible service and skip the ones that did not change." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The matrix is evaluated when the job is created, before any of its steps run, so the values must arrive through an expression, and the supported pattern is a JSON array emitted as a job output and converted with fromJSON in the dependent job. An artifact is only readable from inside a step, which is far too late to shape the matrix, no wildcard expansion exists for matrix values, and enumerating everything defeats the purpose and still creates skipped jobs.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Workflows", "Matrix", "fromJSON"]
  },
  {
    id: "gh-200-31",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Uploading Diagnostics Only When the Build Breaks",
    scenario: "A job produces a large diagnostics bundle. Uploading it on every run wastes artifact storage, but when the compile step fails the team needs it. Simply adding the upload step causes it to be skipped after a failure.",
    question: "Which condition on the upload step gives the wanted behaviour?",
    options: [
      { id: 'A', text: "if evaluating failure(), which is true when a previous step in the job has failed." },
      { id: 'B', text: "if evaluating cancelled(), which covers any non-successful outcome." },
      { id: 'C', text: "continue-on-error set to true on the upload step." },
      { id: 'D', text: "if evaluating success(), which is the default and therefore explicit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Steps carry an implicit success condition, so once a step fails the remainder are skipped unless a status check function overrides it, and failure() is true precisely when an earlier step in the job has failed. The success() function reproduces the default and still skips, continue-on-error changes how a step failure is reported rather than whether a later step runs, and cancelled() is true only when the run was cancelled.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Workflows", "Conditions", "Expressions"]
  },
  {
    id: "gh-200-32",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Requiring Human Approval Before a Production Deployment",
    scenario: "A deployment job must pause and wait for one of two named release managers to approve before it touches production, and the production credentials must not be readable by any other job.",
    question: "Which configuration provides both the pause and the credential boundary?",
    options: [
      { id: 'A', text: "An environment named production carrying required reviewers and holding the credentials as environment secrets, referenced by the job through the environment key." },
      { id: 'B', text: "A repository ruleset requiring two approving reviews on the pull request." },
      { id: 'C', text: "An if condition on the job comparing github.actor to the two release manager usernames." },
      { id: 'D', text: "A manual workflow_dispatch trigger that only the release managers have permission to start." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An environment combines a deployment protection rule, which suspends the job until a required reviewer approves, with environment-scoped secrets that are only injected into jobs that reference that environment, so both requirements are met by one construct. An actor comparison checks who started the run rather than gating on approval, pull request reviews approve code rather than a deployment, and a dispatch trigger neither pauses mid-run nor scopes secrets.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["GH-200", "Workflows", "Environments", "Deployment Protection"]
  },
  {
    id: "gh-200-33",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Running Every Shell Step From a Subdirectory",
    scenario: "All twelve run steps in a job operate on code in the frontend subdirectory, and each currently begins with a change-directory command that a contributor keeps forgetting to add.",
    question: "Which key removes the repetition?",
    options: [
      { id: 'A', text: "A with block on the job passing path set to frontend." },
      { id: 'B', text: "A defaults block on the job setting run.working-directory to frontend." },
      { id: 'C', text: "A checkout step configured with sparse-checkout set to frontend." },
      { id: 'D', text: "A workflow-level env entry named WORKING_DIRECTORY set to frontend." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The defaults block accepts run settings such as shell and working-directory that apply to every run step in its scope, so declaring it once on the job removes the repeated change-directory command while individual steps can still override it. An environment variable would still need each step to use it, the with block passes inputs to an action rather than configuring a job, and sparse checkout limits which files are fetched without changing where commands execute.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/setting-default-values-for-jobs",
    tags: ["GH-200", "Workflows", "defaults", "working-directory"]
  },
  {
    id: "gh-200-34",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Derived Credential Appearing in Plain Text in the Log",
    scenario: "A step reads a secret, derives a session token from it by calling an authentication endpoint, and prints diagnostic output. The original secret is redacted in the log but the derived session token appears in full.",
    question: "Why does this happen and how is it addressed?",
    options: [
      { id: 'A', text: "Redaction only applies to secrets, and a value computed at run time must be registered with the add-mask workflow command to be redacted." },
      { id: 'B', text: "Derived values are always redacted, so the visible token proves the secret itself was logged earlier in the run." },
      { id: 'C', text: "The job needs its permissions block reduced, which enables redaction of derived values." },
      { id: 'D', text: "Redaction failed because the token exceeds the length limit for masked values, so the token must be shortened." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The runner maintains a register of strings to scrub from log output, populated from the secrets a job can see, and it has no way to know that some newly computed string is sensitive. Emitting an add-mask workflow command for the derived token adds it to that register so later occurrences are replaced. Masking is not governed by value length or by the token permissions block, and derived values are not covered automatically.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions",
    tags: ["GH-200", "Workflows", "Secrets", "add-mask"]
  },
  {
    id: "gh-200-35",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reacting Only to Comments Left on Pull Requests",
    scenario: "A workflow triggered by issue_comment implements a slash command for pull requests. It currently fires for comments on plain issues too, where the command makes no sense and the run fails when it tries to read the pull request.",
    question: "Which condition restricts the run correctly?",
    options: [
      { id: 'A', text: "A job-level if checking that github.event_name equals pull_request." },
      { id: 'B', text: "Adding a types filter of created to the issue_comment trigger." },
      { id: 'C', text: "Replacing the trigger with pull_request_review_comment, which covers comments in the pull request conversation." },
      { id: 'D', text: "A job-level if checking that the github.event.issue.pull_request property is present, which distinguishes a pull request comment from an issue comment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The issue_comment event covers both issues and pull requests because a pull request is an issue with extra data, and the payload carries a pull_request property only in the latter case, so testing for its presence is the documented discriminator. The event name is issue_comment rather than pull_request in every case here, pull_request_review_comment fires for inline comments on the diff rather than conversation comments, and a types filter selects create versus edit rather than the parent kind.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Workflows", "issue_comment", "Triggers"]
  },
  {
    id: "gh-200-36",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Offering a Pre-Approved Workflow to Every Team",
    scenario: "A platform team wants a curated security scanning workflow to appear as a suggested option when anyone in the organization opens the Actions tab of a repository and chooses to create a new workflow.",
    question: "Where must the workflow be published?",
    options: [
      { id: 'A', text: "In the Marketplace as a published action with the workflow category." },
      { id: 'B', text: "In a repository named starter-workflows owned by the organization." },
      { id: 'C', text: "In the workflow-templates directory of the organization .github repository, alongside a properties JSON file describing it." },
      { id: 'D', text: "In the .github/workflows directory of the organization .github repository, from where it is copied automatically." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Starter workflows live in a workflow-templates directory inside the organization .github repository, each paired with a properties file that supplies the name, description and categories used when the suggestion is rendered. The .github/workflows directory of that repository holds workflows that run against the repository itself, no starter-workflows repository name is special for an organization, and the Marketplace distributes actions rather than workflow suggestions.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization",
    tags: ["GH-200", "Starter Workflows", "Organization"]
  },
  {
    id: "gh-200-37",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Referencing an Action Stored in the Same Repository",
    scenario: "A repository keeps a private helper action at .github/actions/notify. A workflow references it as a relative path in its very first step, and every run fails saying the action could not be found.",
    question: "What is wrong?",
    options: [
      { id: 'A', text: "A relative path reference requires the repository to be checked out first, so an actions/checkout step must precede it." },
      { id: 'B', text: "Local actions must be referenced with the owner and repository name even when they live in the same repository." },
      { id: 'C', text: "The action must be published to the Marketplace before any workflow can reference it." },
      { id: 'D', text: "Actions stored under .github/actions are reserved for reusable workflows and cannot be referenced by a step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A relative uses reference resolves against the runner workspace rather than against the repository on the server, so the files only exist once a checkout step has fetched them, which is why a local action referenced before checkout is reported as missing. Local references are the supported form for same-repository actions, the .github/actions path carries no special reservation, and publishing to the Marketplace is only needed for public discovery.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Actions", "Local Actions", "checkout"]
  },
  {
    id: "gh-200-38",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Showing Build State in the Project README",
    scenario: "A maintainer wants the README to display whether the CI workflow is currently passing on the default branch, updated automatically without any extra automation.",
    question: "What should be added?",
    options: [
      { id: 'A', text: "A required status check configured in branch protection, which renders in the README automatically." },
      { id: 'B', text: "A repository custom property set from the workflow using the API." },
      { id: 'C', text: "A scheduled workflow that rewrites a status line in the README after every run." },
      { id: 'D', text: "A workflow status badge image, whose URL is generated from the workflow page and can be filtered by branch and event." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub serves a badge image for each workflow that reflects the latest conclusion and accepts branch and event query parameters, and the workflow page offers a copyable snippet, so a single markdown image line keeps the README current with no automation. Rewriting the README from a workflow adds commit noise and race conditions, required status checks gate merges rather than render anywhere, and custom properties are repository metadata not shown in the README.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge",
    tags: ["GH-200", "Badges", "Monitoring"]
  },
  {
    id: "gh-200-39",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "A Required Status Check That Never Arrives",
    scenario: "Branch protection requires a check named build before merging. The workflow has been changed so that the build job is skipped when only documentation changes, and documentation-only pull requests now sit unmergeable forever waiting for a check that will never report.",
    question: "Which approach resolves this while keeping the protection meaningful?",
    options: [
      { id: 'A', text: "Convert build into a composite action so branch protection resolves it differently." },
      { id: 'B', text: "Keep the job always running but exit early with a success when only documentation changed, so the check always reports a conclusion." },
      { id: 'C', text: "Remove build from the required checks list and rely on reviewers noticing failures." },
      { id: 'D', text: "Add paths-ignore for the documentation directory to the workflow trigger, so the check is not expected." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Branch protection waits for a check of the required name to report a conclusion, and a job that is filtered out at the workflow or job level never reports one, so the pull request blocks indefinitely. Keeping the job scheduled and having it short-circuit to success preserves the guarantee that the name always resolves. Removing the requirement discards the protection, adding paths-ignore is exactly the filtering that causes the stall, and the action type has no bearing on how checks are matched.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["GH-200", "Branch Protection", "Status Checks"]
  },
  {
    id: "gh-200-40",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Starting a Workflow From a Script",
    scenario: "A release script running on an engineer laptop must start a workflow that declares a workflow_dispatch trigger, passing an input value, and then poll for the resulting run.",
    question: "Which approach is appropriate?",
    options: [
      { id: 'A', text: "Push an empty commit with a specially formatted message that the workflow parses." },
      { id: 'B', text: "Open the Actions tab in a headless browser and submit the form." },
      { id: 'C', text: "Use the GitHub CLI workflow run command, or the equivalent REST endpoint for creating a workflow dispatch event, passing the input as a field." },
      { id: 'D', text: "Send a repository_dispatch event, which is the only programmatic way to start any workflow." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A workflow_dispatch trigger is startable from the API and from the GitHub CLI, both of which accept the declared inputs and return enough information to locate the run afterwards, which is the supported automation path. Commit-message conventions are fragile and pollute history, browser automation is unnecessary given a documented endpoint, and repository_dispatch is a separate custom event that a workflow must explicitly subscribe to rather than the only option.",
    referenceUrl: "https://docs.github.com/en/rest/actions/workflows",
    tags: ["GH-200", "API", "GitHub CLI", "workflow_dispatch"]
  },
  {
    id: "gh-200-41",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Pausing a Noisy Scheduled Workflow",
    scenario: "A scheduled workflow is failing every hour because of an outage at a third-party provider. The team wants the noise to stop today but intends to resume the workflow unchanged once the provider recovers, and does not want the change to appear as a code edit.",
    question: "What is the cleanest action?",
    options: [
      { id: 'A', text: "Disable the workflow from its page in the Actions tab, then enable it again later." },
      { id: 'B', text: "Delete the workflow file and restore it from git history afterwards." },
      { id: 'C', text: "Comment out the schedule trigger and commit the change." },
      { id: 'D', text: "Set the repository Actions permissions to disabled for the duration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Actions tab exposes a disable control per workflow that stops it being triggered while leaving the file untouched, and re-enabling restores the previous behaviour with no diff and no history churn. Editing or deleting the file changes the repository for a temporary operational reason, and disabling Actions across the repository would also stop every unrelated workflow such as pull request validation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow",
    tags: ["GH-200", "Workflow Runs", "Operations"]
  },
  {
    id: "gh-200-42",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Declaring an Input That Callers Must Supply",
    scenario: "An action needs a target environment name from every caller and a retry count that should fall back to three when unspecified. The author wants the platform to reject a workflow that omits the environment name.",
    question: "How should action.yml declare these two inputs?",
    options: [
      { id: 'A', text: "Declare the environment under outputs so the caller must bind it, and the retry under inputs." },
      { id: 'B', text: "Declare only the retry input, and read the environment name from an environment variable the caller must export." },
      { id: 'C', text: "Mark the environment input required true, and give the retry input a default of three." },
      { id: 'D', text: "Give both inputs a default, and validate the environment name inside the action code." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The metadata file supports a required flag that makes omitting an input an error and a default value that is substituted when a caller says nothing, which expresses exactly this contract declaratively. Defaulting both and validating in code moves a contract violation from configuration time to run time, outputs describe values the action produces, and relying on an undocumented environment variable hides the dependency from anyone reading the action metadata.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Inputs", "Metadata"]
  },
  {
    id: "gh-200-43",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Guaranteeing Cleanup After a JavaScript Action",
    scenario: "A JavaScript action starts a tunnel process that must be torn down at the end of the job, including when a later step in the job fails. Putting the teardown in the action main entry point does not help because main returns while the tunnel is still needed.",
    question: "Which metadata feature solves this?",
    options: [
      { id: 'A', text: "A separate teardown job with an if condition of always()." },
      { id: 'B', text: "A cleanup key under runs, which the runner calls after the final step." },
      { id: 'C', text: "A trap registered in the shell by the action, which the runner preserves across steps." },
      { id: 'D', text: "A post entry under runs, naming a script the runner executes at the end of the job, with post-if available to control when it runs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A JavaScript action can name a post script that the runner registers when the action first executes and then runs during the job cleanup phase, by default even if the job failed, with post-if narrowing that condition. There is no cleanup key in the metadata schema, a separate job runs on a different runner and cannot see the tunnel process, and a shell trap dies with the step that set it.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "JavaScript", "post"]
  },
  {
    id: "gh-200-44",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Prerequisites for Listing an Action in the Marketplace",
    scenario: "A team has a working action in a public repository. The metadata file sits in a subdirectory next to three other actions in the same repository, and the team wants to publish one of them to the Marketplace.",
    question: "Which change is required before the action can be listed?",
    options: [
      { id: 'A', text: "Add a workflow that runs the action, because the Marketplace validates behaviour before listing." },
      { id: 'B', text: "Convert the action to a Docker container action, because only container actions are listable." },
      { id: 'C', text: "Move the action so its metadata file sits at the root of its own repository, since a listing maps to a single action at the repository root." },
      { id: 'D', text: "Transfer the repository to an organization, because personal accounts cannot publish." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Publishing requires the action metadata file to be in the root directory of a public repository and permits one listed action per repository, so an action living beside siblings in subdirectories must be split out before it can be listed, typically alongside a unique name and a release to reference. Every action type is eligible, the Marketplace does not execute the action to validate it, and individual accounts may publish.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace",
    tags: ["GH-200", "Custom Actions", "Marketplace", "Publishing"]
  },
  {
    id: "gh-200-45",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Warning Emitted by an Action Pinned to an Old Runtime",
    scenario: "Workflows using an internally maintained JavaScript action show an annotation warning that the action uses a deprecated Node runtime and will stop working. The action code itself runs correctly today.",
    question: "Which change addresses the warning?",
    options: [
      { id: 'A', text: "Change runs.using to composite, which removes any runtime dependency." },
      { id: 'B', text: "Add a setup-node step before the action in every consuming workflow to select the runtime." },
      { id: 'C', text: "Update the runs.using value in action.yml to the supported Node major version and verify the bundled code runs on it." },
      { id: 'D', text: "Recompile the action bundle, which embeds the runtime version." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The runs.using value declares which Node runtime the runner should use to execute a JavaScript action, so the deprecation is resolved by raising it to the supported major version in the metadata and confirming the bundle is compatible. A setup-node step configures the runtime for the workflow steps rather than the one the runner uses to host the action, the bundle does not carry a runtime declaration, and switching to composite would be a rewrite rather than a version bump.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "JavaScript", "Node"]
  },
  {
    id: "gh-200-46",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Scoping a Credential to a Single Deployment Target",
    scenario: "A repository deploys to development, staging and production. Each target has its own credential, and an audit requires that a job deploying to development can never read the production credential even if a contributor edits the workflow file.",
    question: "Where should the credentials be stored?",
    options: [
      { id: 'A', text: "As encrypted values committed to the repository and decrypted at run time with a single master repository secret." },
      { id: 'B', text: "As environment secrets, one per environment, so a job only receives the credential of the environment it declares." },
      { id: 'C', text: "As three repository secrets with names prefixed by the target, and a naming convention enforced in review." },
      { id: 'D', text: "As three organization secrets scoped to the repository." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Environment secrets are injected only into jobs that declare that environment, so a development job structurally cannot read the production value regardless of what the workflow file asks for, and the environment can additionally require reviewers. Repository and organization secrets are visible to any job in the repository, so a naming convention is a review habit rather than a boundary, and a master key that unlocks all three collapses the separation entirely.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["GH-200", "Secrets", "Environments", "Governance"]
  },
  {
    id: "gh-200-47",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Scaling a Self-Hosted Fleet With Demand",
    scenario: "A self-hosted fleet of fixed virtual machines is idle overnight and saturated each afternoon, when jobs queue for twenty minutes. The platform team already runs Kubernetes and wants runner capacity to track the queue automatically.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Increase the max-parallel value in the matrix strategy of the busiest workflows." },
      { id: 'B', text: "Add the runners to a runner group, which enables automatic scaling for that group." },
      { id: 'C', text: "Register more persistent runners sized for the afternoon peak and accept the overnight idle cost." },
      { id: 'D', text: "Deploy Actions Runner Controller with a runner scale set, so ephemeral runner pods are created in response to queued jobs and removed afterwards." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Actions Runner Controller runs in Kubernetes and reconciles a runner scale set against the number of queued jobs, starting ephemeral runner pods on demand and removing them when work drains, which matches both the elasticity and the existing platform. Raising max-parallel asks for more concurrency without providing capacity to serve it, statically sizing for peak is the cost problem being solved, and runner groups control access rather than scale.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["GH-200", "Self-hosted Runners", "ARC", "Autoscaling"]
  },
  {
    id: "gh-200-48",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Routing a Job to Runners With Particular Hardware",
    scenario: "A fleet contains both ordinary runners and a handful with GPUs. Only the model training job should land on the GPU machines, and it must not start on an ordinary runner even when one is free.",
    question: "How is that expressed?",
    options: [
      { id: 'A', text: "Place the GPU runners in their own runner group and set runs-on to the group name." },
      { id: 'B', text: "Set the runs-on value to the hostname of one of the GPU machines." },
      { id: 'C', text: "Apply a custom label such as gpu to those runners and set runs-on to a list containing self-hosted and that label." },
      { id: 'D', text: "Give the GPU runners a higher priority value so the scheduler prefers them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Labels are the routing mechanism for self-hosted runners, and giving runs-on a list means the job is dispatched only to a runner carrying every label in it, so combining self-hosted with a hardware label pins the job to that subset. Runners have no priority field, runner groups control which repositories may use a set of runners rather than acting as a runs-on target, and targeting a single hostname would remove redundancy even if it were supported.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Labels", "runs-on"]
  },
  {
    id: "gh-200-49",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Investigating Who Loosened an Actions Policy",
    scenario: "An organization previously restricted workflows to an allow list of actions. A review finds the setting now permits all actions, and nobody admits to changing it. The team needs to know which account made the change and when.",
    question: "Which source answers that?",
    options: [
      { id: 'A', text: "The workflow run history, which records the policy in effect for each run." },
      { id: 'B', text: "The commit history of the .github repository." },
      { id: 'C', text: "The organization audit log, filtered to the Actions policy events, which records the actor, action and timestamp." },
      { id: 'D', text: "The security overview, which lists configuration drift across repositories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The audit log is the record of administrative and configuration events, including changes to Actions permissions policies, and it captures the acting account and timestamp needed for this investigation. Run history reflects the outcome of a policy rather than who set it, organization Actions policy is stored as a setting rather than in the .github repository, and the security overview summarises code security findings rather than Actions governance changes.",
    referenceUrl: "https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization",
    tags: ["GH-200", "Audit Log", "Governance", "Policy"]
  },
  {
    id: "gh-200-50",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Reducing Storage Consumed by Build Artifacts",
    scenario: "An organization is close to its Actions storage allowance. Investigation shows most of it is nightly build artifacts that nobody consults after a couple of days, kept under the default retention period.",
    question: "Which change reduces the storage without editing every workflow?",
    options: [
      { id: 'A', text: "Lower the artifact and log retention period in the organization Actions settings, which applies to repositories that do not set a shorter value." },
      { id: 'B', text: "Switch the nightly builds to self-hosted runners, which store artifacts locally." },
      { id: 'C', text: "Delete the workflow runs manually each week from the Actions tab." },
      { id: 'D', text: "Move the artifacts into the Actions cache, which is not counted against storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retention for artifacts and logs is configurable at the organization level and takes effect for every repository beneath it without touching workflow files, so shortening it expires the nightly bundles far sooner and frees the allowance. The cache has its own quota and eviction rather than being free, manual deletion is recurring toil, and runner type does not change where artifacts are stored.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization",
    tags: ["GH-200", "Storage", "Retention", "Governance"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_2;
