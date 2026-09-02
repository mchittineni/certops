export const GITHUB_ACTIONS_QUESTIONS_7 = [
  {
    id: "gh-200-151",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Distinguishing the Event From the Activity Within It",
    scenario: "A workflow subscribes to the pull_request event with the opened, synchronize and closed activity types. One job must behave differently depending on which of the three occurred.",
    question: "Which context value carries the activity?",
    options: [
      { id: 'A', text: "The github.job value, which is derived from the activity." },
      { id: 'B', text: "The github.event_name value, which is set to the activity type when types are declared." },
      { id: 'C', text: "The github.event.action value, which names the activity type, while github.event_name names the event itself." },
      { id: 'D', text: "The github.event.type value, which is populated for every event." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The event name stays constant for every activity of the same event, and the specific activity is carried in the payload as its action property, so a condition on that value distinguishes the three cases. The event name is not rewritten when types are declared, there is no type property serving this purpose, and the job value identifies the job in the workflow rather than anything about the event.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Events", "Triggers"]
  },
  {
    id: "gh-200-152",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Emitting a Multi-Line Value as a Step Output",
    scenario: "A step generates a multi-line changelog and needs to publish it as a step output. Writing the usual name and value pair to the output file truncates the value at the first newline and later corrupts subsequent outputs.",
    question: "What is the correct form?",
    options: [
      { id: 'A', text: "Replace the newlines with an escape sequence and rely on the runner to restore them." },
      { id: 'B', text: "Use the delimiter form, writing the name followed by a chosen delimiter, then the content, then the delimiter again, picking a delimiter that cannot occur in the content." },
      { id: 'C', text: "Wrap the value in double quotes, which the runner treats as a single value." },
      { id: 'D', text: "Write the value to an artifact and set the output to the artifact name, since multi-line outputs are unsupported." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The output file format supports a delimited block for multi-line values, and the delimiter must be unpredictable enough that content cannot contain it, which also matters for safety because attacker-controlled content containing a guessable delimiter could otherwise inject additional outputs. Escape sequences are not interpreted, multi-line values are supported so an artifact detour is unnecessary, and quoting is not part of the file format.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions",
    tags: ["GH-200", "Outputs", "Workflow Commands", "Security"]
  },
  {
    id: "gh-200-153",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Checking Out a Second Private Repository",
    scenario: "A build needs shared configuration held in a second private repository in the same organization. Adding a checkout step naming that repository fails with an authentication error, although the first checkout of the current repository succeeds.",
    question: "Why, and what is the appropriate remedy?",
    options: [
      { id: 'A', text: "Cross-repository checkout requires the repositories to share a runner group." },
      { id: 'B', text: "A permissions block granting contents: read extends the automatic token to sibling repositories." },
      { id: 'C', text: "The automatic token covers every repository in the organization, so the failure indicates the repository name is misspelled." },
      { id: 'D', text: "The automatic token is scoped to the current repository only, so the second checkout needs a separate credential such as a GitHub App installation token or a fine-grained token with read access to that repository, supplied to the step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The automatic token is issued for the repository the workflow belongs to and confers nothing elsewhere, so reading a second private repository requires a credential that has been granted access to it, with a short-lived GitHub App installation token the usual choice over a personal one. The token is not organization-wide, runner groups govern which runners may be used, and a permissions block adjusts scopes within the current repository rather than widening the audience.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication",
    tags: ["GH-200", "checkout", "Tokens", "Private Repositories"]
  },
  {
    id: "gh-200-154",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Matrix That Refuses to Expand",
    scenario: "An ambitious matrix crosses eight language versions, six operating system images and six database engines. The workflow is rejected with an error about the number of jobs.",
    question: "What is the limit and the practical response?",
    options: [
      { id: 'A', text: "The limit applies per job rather than per run, so raising max-parallel resolves it." },
      { id: 'B', text: "A matrix may produce at most two hundred and fifty-six jobs per workflow run, so the strategy must be reduced, typically by testing the full cross-product on a schedule and a representative subset on pull requests." },
      { id: 'C', text: "A matrix may produce at most sixty-four jobs, and the only remedy is to split the workflow into separate files." },
      { id: 'D', text: "There is no job count limit; the error indicates the runner labels do not exist." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The documented ceiling is two hundred and fifty-six jobs generated by a matrix in a single workflow run, and a cross-product of that size is usually also a signal that pull request feedback would be far too slow, so the customary answer is a small representative matrix for every change and the exhaustive sweep on a schedule. The limit is not sixty-four, it does exist, and max-parallel controls concurrency rather than the number of jobs generated.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Matrix", "Limits", "Strategy"]
  },
  {
    id: "gh-200-155",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Starting a Workflow From an External System",
    scenario: "An internal deployment portal, running outside GitHub, must start a workflow and pass a structured payload describing the change, including several fields the workflow will read.",
    question: "Which trigger is designed for this?",
    options: [
      { id: 'A', text: "A workflow_run trigger, with the portal starting a placeholder workflow first." },
      { id: 'B', text: "A repository_dispatch trigger, started by an API call that supplies an event type and a client payload the workflow reads from the event context." },
      { id: 'C', text: "A push trigger, with the portal committing a file encoding the payload." },
      { id: 'D', text: "A schedule trigger polling an external endpoint every five minutes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The repository_dispatch event exists precisely so an external system can start a workflow through the API with a custom event type and an arbitrary client payload that the workflow reads from the event context. Polling adds latency and wasted runs, committing a file to convey a message pollutes history and races, and workflow_run chains one workflow to another rather than accepting an external call.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Triggers", "repository_dispatch", "Integration"]
  },
  {
    id: "gh-200-156",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Bounding One Slow Step Rather Than the Whole Job",
    scenario: "A job has a step that occasionally hangs contacting a flaky external service, and several other steps that legitimately take a long time. The team wants only the flaky step to be cut off after three minutes.",
    question: "Which setting applies?",
    options: [
      { id: 'A', text: "A timeout-minutes value on that individual step." },
      { id: 'B', text: "A timeout-minutes value on the job, which applies to its longest step." },
      { id: 'C', text: "A concurrency group on the step with a three-minute limit." },
      { id: 'D', text: "A continue-on-error setting on the step, which stops it after the default step limit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The timeout-minutes key is available on a step as well as on a job, so applying it to the flaky step alone bounds that call without constraining the legitimately long steps around it. A job timeout covers the whole job rather than its longest step, concurrency has nothing to do with duration, and continue-on-error changes how a failure is reported rather than when a step is cut off.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "timeout-minutes", "Reliability"]
  },
  {
    id: "gh-200-157",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Naming the Source and Target Branches of a Pull Request",
    scenario: "A workflow triggered by pull_request needs the name of the contributor branch for a preview environment slug, and the name of the branch being merged into for a policy check.",
    question: "Which context values provide them?",
    options: [
      { id: 'A', text: "The github.head_ref value for the source branch and github.base_ref for the target branch, both populated only for pull request events." },
      { id: 'B', text: "The github.base_ref value for the source branch and github.head_ref for the target branch." },
      { id: 'C', text: "Only github.ref is available, so both names must be parsed from it." },
      { id: 'D', text: "The github.ref value for the source branch and github.ref_name for the target branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For pull request events the context exposes head_ref as the branch the changes come from and base_ref as the branch they are proposed into, and both are empty for other event types, which is worth guarding for in a workflow with several triggers. The ref and ref_name values describe the merge ref being built rather than either branch name, and the third option reverses the two.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Pull Requests"]
  },
  {
    id: "gh-200-158",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reporting a Job as Skipped Rather Than Failed",
    scenario: "A release job should simply not happen for pull requests, and the team disagrees about whether to express that with a job condition or by having the first step exit non-zero when the event is wrong.",
    question: "Which approach is better and why?",
    options: [
      { id: 'A', text: "A job-level condition, because the job is then reported as skipped, consumes no runner and does not fail dependent jobs that require success, whereas exiting non-zero marks the run as failed." },
      { id: 'B', text: "The two are equivalent, since a skipped job and a failed job are reported identically." },
      { id: 'C', text: "An early non-zero exit, because a skipped job blocks any required status check of the same name." },
      { id: 'D', text: "A job-level condition, because a skipped job satisfies a required status check while a failed one does not." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A condition evaluated before the job is dispatched leaves it skipped, so no runner is allocated and the run is not marked failed, which is the honest representation of work that was never meant to happen. The two outcomes are distinctly reported rather than equivalent. It is worth noting that a skipped job does not report a conclusion for a required check of the same name, which is the separate hazard behind keeping such a job scheduled and short-circuiting inside it when branch protection depends on it.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution",
    tags: ["GH-200", "Conditions", "Job Results", "Status Checks"]
  },
  {
    id: "gh-200-159",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Passing a Secret Into an Action Without Putting It on the Command Line",
    scenario: "A step invokes an action that reads a credential from a named environment variable rather than from an input. The author wants the secret delivered without appearing in the workflow command line or in any argument list.",
    question: "How is it supplied?",
    options: [
      { id: 'A', text: "By writing the secret to GITHUB_ENV in the preceding step, which is the only supported route for secrets." },
      { id: 'B', text: "Through an env block on the step, mapping the environment variable name to the secrets context reference." },
      { id: 'C', text: "Through the with block, since every action input becomes an environment variable of the same name." },
      { id: 'D', text: "Through a workflow-level env block, which is the only place the secrets context resolves." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A step env block sets environment variables for that step alone and may reference the secrets context, which delivers the value to an action expecting a named variable without it appearing as an argument. Inputs are exposed under a prefixed name rather than the arbitrary one the action expects, workflow-level env cannot resolve the secrets context at all, and writing a secret through the environment file works but broadens its exposure to every later step in the job for no benefit.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "env", "Steps"]
  },
  {
    id: "gh-200-160",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Tolerating Failure Only on Experimental Matrix Combinations",
    scenario: "A matrix tests three supported language versions plus a nightly build. Failures on the three supported versions must fail the run, while a nightly failure should be visible but must not block the pull request.",
    question: "How is that expressed?",
    options: [
      { id: 'A', text: "Add an experimental key to the matrix, set continue-on-error to an expression reading that key, and mark only the nightly entry experimental." },
      { id: 'B', text: "Exclude the nightly entry from the matrix and run it in a separate scheduled workflow only." },
      { id: 'C', text: "Set fail-fast to false, which also makes individual failures non-blocking." },
      { id: 'D', text: "Set continue-on-error to true on the job, and fail the run from a later job if a supported version failed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because continue-on-error accepts an expression, a matrix variable can carry the tolerance decision per combination, which is the idiomatic way to run an allowed-failure leg alongside required ones in the same matrix. Tolerating the whole job hides real failures and needs extra machinery to undo, moving the nightly leg elsewhere loses the side-by-side comparison, and disabling fail-fast only stops siblings being cancelled while every failure still fails the run.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Matrix", "continue-on-error", "Strategy"]
  },
  {
    id: "gh-200-161",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Typed Inputs for a Called Workflow",
    scenario: "A reusable workflow declares an input intended to be one of three deployment tiers. The author tries to declare it with the same choice type used for a manual dispatch input and the workflow is rejected.",
    question: "What is the situation?",
    options: [
      { id: 'A', text: "Reusable workflows cannot declare typed inputs at all; every value arrives as a string." },
      { id: 'B', text: "The workflow_call trigger supports boolean, number and string input types but not choice, so the input should be a string with the permitted values validated inside the workflow or expressed through separate callers." },
      { id: 'C', text: "The workflow_call trigger supports choice, so the rejection indicates a syntax error elsewhere." },
      { id: 'D', text: "Choice inputs are supported but require a default to be listed among the options, which is missing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The two triggers offer different input type sets: a manual dispatch renders a form and therefore supports choice and environment types, while a called workflow receives values from another workflow and supports boolean, number and string. A tier is therefore declared as a string and checked in the workflow body. Typed inputs do exist for workflow_call, and the absence of choice is a genuine difference rather than a syntax slip.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Inputs", "Types"]
  },
  {
    id: "gh-200-162",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "A Workflow That Fails Only on Dependabot Pull Requests",
    scenario: "A workflow posts a comment using the automatic token and reads an API key from a repository secret. It works on ordinary pull requests and fails on pull requests raised by Dependabot, where the secret is empty and the comment step is rejected.",
    question: "What explains this?",
    options: [
      { id: 'A', text: "Runs triggered by Dependabot receive a read-only automatic token and cannot read Actions secrets; values they need must be stored as Dependabot secrets, or the privileged work moved to a workflow_run workflow." },
      { id: 'B', text: "Dependabot pull requests run with no token at all, so any API call fails." },
      { id: 'C', text: "Dependabot pull requests are treated as fork contributions from an outside collaborator and require manual approval each time." },
      { id: 'D', text: "Dependabot pull requests run an older cached version of the workflow file, which lacks the secret reference." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because Dependabot updates change dependency declarations, runs it raises are treated as lower trust and receive a read-only automatic token with Actions secrets withheld, and the supported answers are a separate Dependabot secret store for values those runs legitimately need or moving privileged steps into a workflow triggered by the completion of the untrusted run. A token is issued but restricted, the branch is in the same repository rather than a fork, and the workflow file is not cached.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions",
    tags: ["GH-200", "Dependabot", "Secrets", "Security"]
  },
  {
    id: "gh-200-163",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Jobs Queueing Behind Other Repositories in the Organization",
    scenario: "During a release week, jobs across several repositories sit queued even though each repository individually seems to be running only a handful of jobs. Nobody has changed the workflows.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "Hosted runners are allocated to repositories in alphabetical order during periods of contention." },
      { id: 'B', text: "Queueing is caused by the artifact storage quota being exhausted." },
      { id: 'C', text: "Each repository has its own fixed limit of five concurrent jobs regardless of plan." },
      { id: 'D', text: "Concurrent job limits apply across the account rather than per repository and vary by plan and runner type, so the whole organization shares one pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Concurrency allowances for hosted runners are granted to the account and shared by every repository beneath it, with the ceiling depending on the plan and differing per runner operating system, so a busy neighbour repository directly delays others. There is no flat per-repository limit, storage quotas affect uploads rather than scheduling, and allocation is not alphabetical.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration",
    tags: ["GH-200", "Usage Limits", "Concurrency", "Runners"]
  },
  {
    id: "gh-200-164",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Fork Pull Request Workflows in Private Repositories",
    scenario: "An organization allows forking of private repositories for an internal review process. An administrator is asked whether workflows run for pull requests opened from those private forks, and what can be granted to them.",
    question: "Which description is accurate?",
    options: [
      { id: 'A', text: "Running workflows from private forks is off by default and is enabled by an explicit setting, which separately controls whether such runs may read secrets and whether the automatic token may have write access." },
      { id: 'B', text: "Workflows never run for pull requests from a fork of a private repository, and the setting cannot be changed." },
      { id: 'C', text: "Workflows run but only on self-hosted runners, since hosted runners are unavailable to private forks." },
      { id: 'D', text: "Workflows from private forks always run with full access, because the fork is inside the organization." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Private forks are treated cautiously by default, and an administrator opts in to running their pull request workflows, with distinct controls for sending secrets to those runs and for granting the automatic token write access, so each concession is a deliberate decision. Membership of the organization does not by itself confer full access, the behaviour is configurable rather than fixed, and runner type is not what distinguishes these runs.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization",
    tags: ["GH-200", "Forks", "Private Repositories", "Governance"]
  },
  {
    id: "gh-200-165",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Auditing Which Workflows Exist Across a Repository",
    scenario: "An engineer joining a team wants a quick inventory of the workflows in a repository, including which are currently disabled, from the terminal rather than by clicking through the interface.",
    question: "Which command serves this?",
    options: [
      { id: 'A', text: "The GitHub CLI repo view command with the workflows flag." },
      { id: 'B', text: "The GitHub CLI run list command, which enumerates workflows rather than runs." },
      { id: 'C', text: "The GitHub CLI workflow list command, which enumerates workflows with their state and identifiers, with view and disable subcommands for the individual ones." },
      { id: 'D', text: "A recursive directory listing of the workflows directory, which is the only inventory available." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The workflow subcommand family lists workflows along with their state and identifiers and offers view, run, enable and disable for individual ones, which is exactly the inventory being asked for. The run subcommand lists executions rather than definitions, a directory listing shows files without revealing whether each is enabled, and repository view does not carry a workflows flag.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow",
    tags: ["GH-200", "GitHub CLI", "Workflows", "Operations"]
  },
  {
    id: "gh-200-166",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "A Third-Party Action That Disappeared Overnight",
    scenario: "A community action referenced by dozens of workflows has been deleted by its author. Every pipeline in the organization now fails at that step, and the code is no longer reachable at the original reference.",
    question: "Which response is both an immediate fix and a durable improvement?",
    options: [
      { id: 'A', text: "Add a retry with backoff around the step, since resolution failures are usually transient." },
      { id: 'B', text: "Raise the incident with the Marketplace, since deleted actions are restored on request." },
      { id: 'C', text: "Restore the action from a copy the organization controls, such as an internal fork or a vendored copy, repoint the references there, and adopt that pattern for critical third-party actions so a future deletion cannot break the estate." },
      { id: 'D', text: "Pin the reference to the last known commit SHA, which continues to resolve after the repository is deleted." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Availability of a third-party action is outside the organization control, so the durable answer is to hold a copy it owns and reference that, which fixes today and removes the class of failure. A commit SHA still has to be fetched from the repository, so pinning does not survive deletion, retrying cannot recover a resource that no longer exists, and there is no guarantee a deleted repository will be restored on request.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Supply Chain", "Resilience", "Vendoring"]
  },
  {
    id: "gh-200-167",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Validating an Input Passed to a Reusable Workflow",
    scenario: "A calling workflow passes a value in the with block whose key is not declared by the called workflow, and separately passes a string where the called workflow declares a number.",
    question: "What happens?",
    options: [
      { id: 'A', text: "The undeclared key is accepted and reachable through the inputs context, while the type mismatch is coerced." },
      { id: 'B', text: "Both are runtime errors surfaced only when a step reads the value." },
      { id: 'C', text: "Both are configuration errors caught when the call is evaluated, because a called workflow accepts only the inputs it declares and the supplied values must match the declared types." },
      { id: 'D', text: "Both are ignored silently, and the called workflow sees default values." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The inputs a reusable workflow declares form its contract, and the platform validates both the set of keys and their declared types when the calling job is evaluated, so mistakes surface as configuration errors rather than as puzzling behaviour later. Undeclared keys are not silently accepted or exposed, types are not coerced, and the check happens before steps run.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Inputs", "Validation"]
  },
  {
    id: "gh-200-168",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Exposing a Result From a Composite Action",
    scenario: "A composite action runs a step that writes a value to the step output file. The consuming workflow reads the action output through the steps context and receives nothing, although the inner step clearly produced the value.",
    question: "What is missing from action.yml?",
    options: [
      { id: 'A', text: "The inner step must write to the environment file instead, since composite actions cannot produce outputs." },
      { id: 'B', text: "Nothing; inner step outputs are exposed automatically under the identifier of the inner step." },
      { id: 'C', text: "An outputs entry whose value property is an expression referencing the inner step output by that step identifier." },
      { id: 'D', text: "A permissions block granting the action the ability to publish outputs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A composite action must republish anything it wants to expose, declaring an entry under outputs whose value expression names the inner step and its output, which forms the deliberate public surface of the action. Inner step outputs are not surfaced automatically, no permission governs outputs, and composite actions can certainly produce outputs once they are declared.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Composite", "Outputs"]
  },
  {
    id: "gh-200-169",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Where a Container Action Dockerfile Path Is Resolved",
    scenario: "An author moves a container action into a subdirectory of a repository so it can sit beside a sibling action, and the metadata continues to name the Dockerfile with a bare filename. Consumers report the build cannot find the file.",
    question: "How is the path interpreted?",
    options: [
      { id: 'A', text: "The image path is resolved relative to the root of the action repository regardless of where the metadata sits." },
      { id: 'B', text: "The image path is resolved relative to the consuming repository workspace." },
      { id: 'C', text: "The image path is resolved relative to the directory containing the action metadata file, so the Dockerfile must accompany action.yml in the same directory." },
      { id: 'D', text: "Container actions require an absolute path to the Dockerfile." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Paths in action metadata are relative to the directory holding that metadata file, so an action living in a subdirectory must keep its Dockerfile alongside it or name a path relative to that directory. Resolution against the consuming workspace would make the action depend on its callers, resolution against the repository root would break the ability to place several actions in subdirectories, and absolute paths are neither required nor portable.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Docker", "Metadata"]
  },
  {
    id: "gh-200-170",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Deciding Which Platforms an Action Must Be Tested On",
    scenario: "A composite action wraps shell commands and is documented as cross-platform. Its own continuous integration currently runs on a single Linux runner, and a consumer reports it fails on Windows.",
    question: "What does responsible maintenance require?",
    options: [
      { id: 'A', text: "Convert the action to a Docker container action, which makes it platform independent." },
      { id: 'B', text: "Add continue-on-error to the consumer step, since platform differences cannot be tested from the action repository." },
      { id: 'C', text: "Document that consumers should use Linux runners, without changing the test workflow." },
      { id: 'D', text: "Run the action own test workflow as a matrix across the runner platforms it claims to support, and either fix the incompatibilities or narrow the documented support to what is actually verified." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A support claim is only meaningful if it is exercised, so the action own workflow should expand into a matrix over the platforms it advertises, and where a platform cannot be made to work the honest move is to narrow the claim. A container action would in fact restrict the action to Linux runners, documenting a restriction without adjusting the claim leaves consumers to find it by failure, and tolerating errors in the consumer hides the defect.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Testing", "Cross-platform"]
  },
  {
    id: "gh-200-171",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Where a Credential for Dependabot Must Be Stored",
    scenario: "Dependabot must authenticate to a private package registry to resolve dependency versions. The registry token has been added as an Actions secret and Dependabot still cannot reach the registry.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Commit the registry credentials into the Dependabot configuration file, which is only readable by administrators." },
      { id: 'B', text: "Store the token as a Dependabot secret, which is a separate store from Actions secrets, and reference it from the registries section of the Dependabot configuration." },
      { id: 'C', text: "Store the token as an organization Actions secret, which Dependabot reads once it is scoped to the repository." },
      { id: 'D', text: "Store the token as an environment secret on an environment named dependabot." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dependabot has its own secret store, deliberately separate from Actions secrets, and private registry credentials are placed there and referenced from the registries section of its configuration. Actions secrets at any scope are not visible to Dependabot for this purpose, no environment convention grants it access, and configuration files are readable by anyone who can read the repository so a credential must never be committed.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot",
    tags: ["GH-200", "Dependabot", "Secrets", "Registries"]
  },
  {
    id: "gh-200-172",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Publishing a Container Image to the Organization Registry",
    scenario: "A workflow builds a container image and pushes it to the GitHub container registry using the automatic token. The build succeeds and the push is rejected with a permissions error.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Move the job to a self-hosted runner inside the organization network." },
      { id: 'B', text: "Grant the job contents: write, which covers registry publication." },
      { id: 'C', text: "Replace the automatic token with a personal access token, since the automatic token can never publish packages." },
      { id: 'D', text: "Grant the job packages: write in its permissions block, and ensure the package is configured to allow the repository to publish to it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Publishing to the container registry is governed by the packages scope, so the job must request packages: write, and the package itself must permit the publishing repository, which is a separate access setting on an existing package. The automatic token is perfectly capable of publishing once scoped, contents governs repository content rather than packages, and runner location has no bearing on authorisation.",
    referenceUrl: "https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions",
    tags: ["GH-200", "Packages", "Permissions", "GITHUB_TOKEN"]
  },
  {
    id: "gh-200-173",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "A Runner Group Exposed to a Public Repository",
    scenario: "An administrator reviewing runner group settings notices that the group containing production-network runners has the option allowing public repositories switched on, and one public repository is in scope.",
    question: "What is the risk and the correct action?",
    options: [
      { id: 'A', text: "The option only affects whether the repository appears in the group list, not whether jobs are dispatched, so no change is needed." },
      { id: 'B', text: "A pull request from any fork of that public repository could execute code on runners with production network access, so the option should be turned off and the public repository moved to hosted runners." },
      { id: 'C', text: "The risk is only to billing, since public repository usage is metered differently, so the group should be renamed for cost attribution." },
      { id: 'D', text: "There is no risk, because fork pull requests receive a read-only token and therefore cannot execute code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The setting genuinely permits public repositories to use the group, and a fork pull request executes contributor-supplied build steps on those machines, which in this case sit on the production network, so the exposure is arbitrary code inside a sensitive network rather than a token question. A restricted token does not prevent code execution, the concern is not billing, and the option controls dispatch rather than mere visibility.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["GH-200", "Runner Groups", "Security", "Public Repositories"]
  },
  {
    id: "gh-200-174",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Rotating a Credential Used by Forty Repositories",
    scenario: "A shared credential must be rotated quarterly. It is currently duplicated as a repository secret in forty repositories, and the last rotation took two days and missed four repositories that then broke.",
    question: "Which change makes rotation a single operation?",
    options: [
      { id: 'A', text: "Extend the credential lifetime to a year so rotation happens less often." },
      { id: 'B', text: "Write a scheduled workflow that updates all forty repository secrets through the API each quarter." },
      { id: 'C', text: "Store the credential in a repository variable so it can be edited without administrator rights." },
      { id: 'D', text: "Replace the duplicates with one organization secret scoped to those repositories, and where the target supports it move to federated short-lived credentials so that rotation becomes unnecessary." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Centralising the value as one organization secret scoped to the repositories that need it turns rotation into a single edit and removes the possibility of missing a copy, and moving to OpenID Connect where the target supports it eliminates the stored credential altogether. An automation that fans out forty writes keeps the duplication and adds a highly privileged workflow, longer lifetimes increase exposure, and variables are plain text and unsuitable for a credential.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "Rotation", "Governance"]
  },
  {
    id: "gh-200-175",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Choosing Where a New Self-Hosted Runner Is Registered",
    scenario: "A team needs a runner with a specialised toolchain. It will initially serve one repository, but the platform team expects two more repositories to need it within a quarter and wants to avoid re-registering the machine later.",
    question: "At which level should it be registered?",
    options: [
      { id: 'A', text: "At the repository level in all three repositories simultaneously, using the same machine." },
      { id: 'B', text: "At the repository level, then re-registered at organization level when the second repository appears." },
      { id: 'C', text: "At the organization level, placed in a runner group whose access starts with the single repository and is widened as the others need it." },
      { id: 'D', text: "At the enterprise level, since that is the only level supporting runner groups." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Registering at organization level and controlling reach with a runner group gives the narrow access wanted today and widens with a settings change rather than a re-registration, which is exactly the flexibility described. Repository-level registration forces the migration the team wants to avoid, runner groups exist at organization as well as enterprise level, and one machine cannot hold several repository registrations at once.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Runner Groups", "Planning"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_7;
