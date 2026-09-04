export const GITHUB_ACTIONS_QUESTIONS_5 = [
  {
    id: "gh-200-101",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Not Running the Full Suite While a Pull Request Is a Draft",
    scenario: "Contributors open pull requests early as drafts and push frequently while iterating. The team wants the expensive suite to start only once a pull request is marked ready for review.",
    question: "Which condition expresses that?",
    options: [
      { id: 'A', text: "A job-level if testing that the draft property of the pull request payload is false." },
      { id: 'B', text: "A paths filter excluding files typically changed during drafting." },
      { id: 'C', text: "A concurrency group keyed on the pull request number, which suppresses draft runs." },
      { id: 'D', text: "A types filter of ready_for_review only, which also covers later pushes to the branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The pull request payload carries a draft flag, so a job condition testing it skips the work while the pull request is a draft and lets it run once the author marks it ready, including on subsequent pushes. Subscribing only to the ready_for_review activity would fire once and then ignore later commits, path filters cannot infer draft status, and a concurrency group only decides how overlapping runs interact.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution",
    tags: ["GH-200", "Workflows", "Pull Requests", "Conditions"]
  },
  {
    id: "gh-200-102",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Linking a Deployment to the Site It Produced",
    scenario: "After a deployment job finishes, reviewers want a clickable link to the deployed preview site directly from the pull request and the Environments page, without pasting the URL into a comment.",
    question: "How is that link produced?",
    options: [
      { id: 'A', text: "By setting the url property alongside the name inside the job environment key, which may be an expression referring to a step output." },
      { id: 'B', text: "By writing the URL to GITHUB_STEP_SUMMARY, which the Environments page reads." },
      { id: 'C', text: "By naming an artifact after the URL, which the interface renders as a link." },
      { id: 'D', text: "By adding a deployment-url entry to the workflow permissions block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The environment key accepts both a name and a url, and the url may be an expression resolved from a step output, which attaches the address to the deployment record so it appears as a link in the pull request and on the Environments page. A step summary renders on the run page only, artifact names are not parsed as links, and the permissions block describes token scope rather than deployment metadata.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",
    tags: ["GH-200", "Environments", "Deployments"]
  },
  {
    id: "gh-200-103",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reacting to a Label Being Added to a Pull Request",
    scenario: "A workflow triggered by pull_request should also run when someone adds the run-e2e label to an existing pull request. Today it only runs when the pull request is opened, reopened or updated with new commits.",
    question: "What must change?",
    options: [
      { id: 'A', text: "Nothing, because labelling counts as an update and already triggers the synchronize activity." },
      { id: 'B', text: "The trigger must list activity types explicitly, adding labeled to the default set of opened, synchronize and reopened, because naming any types replaces the default set." },
      { id: 'C', text: "The trigger must be changed to issues with a labeled type, since labels belong to issues." },
      { id: 'D', text: "A separate workflow_dispatch trigger must be added and started by hand after labelling." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A pull_request trigger with no types filter subscribes to opened, synchronize and reopened, and labelling is a distinct activity that must be requested; naming types replaces the default set rather than adding to it, so all four have to be listed to keep the existing behaviour. Labelling does not raise a synchronize event, the issues trigger would not carry pull request context for this workflow, and a manual dispatch defeats the automation.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Workflows", "Triggers", "Activity Types"]
  },
  {
    id: "gh-200-104",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Supplying a Fallback When an Input Is Empty",
    scenario: "A workflow can be started manually with an optional release notes URL, or automatically by another trigger where no such value exists. A step needs either the supplied value or a default documentation link, chosen inside the expression rather than in shell code.",
    question: "Which expression idiom applies?",
    options: [
      { id: 'A', text: "The coalesce function, which is provided for exactly this purpose." },
      { id: 'B', text: "A ternary conditional operator, which workflow expressions support directly." },
      { id: 'C', text: "The logical or operator between the input reference and the default literal, which yields the first value that is not false or empty." },
      { id: 'D', text: "The format function with the input as the only argument, which substitutes a default when empty." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Workflow expressions evaluate the logical or operator by returning the first operand that is truthy, so placing the optional value before a literal default produces the fallback behaviour in one expression. The format function builds a string from a template and does not substitute defaults, there is no coalesce function in the expression language, and there is no ternary operator, which is why the or idiom is the conventional substitute.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Expressions", "Workflows"]
  },
  {
    id: "gh-200-105",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Writing Scratch Files Portably Across Runner Platforms",
    scenario: "A step needs a scratch directory that exists on Linux, macOS and Windows runners, is writable, and is cleaned up by the platform after the job. Hard-coding a Unix temporary path breaks the Windows leg of the matrix.",
    question: "Which context value should be used?",
    options: [
      { id: 'A', text: "A relative path, because the working directory is identical on every platform." },
      { id: 'B', text: "The runner.tool_cache value, which is provided for scratch data." },
      { id: 'C', text: "The github.workspace value, which is the correct location for temporary files." },
      { id: 'D', text: "The runner.temp value, which points at a platform-appropriate temporary directory that is cleaned up at the end of the job." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The runner context exposes a temp path that resolves to a writable, platform-appropriate scratch location which the runner empties at the end of the job, which is exactly what portable temporary work needs. The workspace holds the checked-out repository and its contents may be uploaded or inspected, the tool cache is a shared location for installed toolchains that should not be polluted, and relative paths do not address the platform difference at all.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Runners", "Cross-platform"]
  },
  {
    id: "gh-200-106",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Surfacing a Linter Finding on the Changed Line",
    scenario: "A custom linter prints findings to standard output. The team wants each finding to appear as an inline annotation attached to the offending file and line in the pull request diff, without adopting a third-party reporting action.",
    question: "What should the step emit?",
    options: [
      { id: 'A', text: "An error workflow command carrying file, line and column properties along with the message." },
      { id: 'B', text: "A non-zero exit code, from which the platform infers the failing file." },
      { id: 'C', text: "A line appended to GITHUB_STEP_SUMMARY containing a link to the file and line." },
      { id: 'D', text: "A job output named annotations holding a JSON array of findings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Workflow commands for notice, warning and error accept file, line and column properties, and the platform renders those as annotations positioned in the diff, which is the built-in path from a plain command-line tool to inline feedback. A step summary produces a block on the run page rather than diff annotations, job outputs are data passed between jobs, and an exit code conveys failure without any location information.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions",
    tags: ["GH-200", "Workflow Commands", "Annotations"]
  },
  {
    id: "gh-200-107",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Keeping One Artifact for Less Time Than the Rest",
    scenario: "A debug bundle is only useful for a day or two, while release binaries from the same workflow should follow the repository default retention. The team does not want to change the repository setting.",
    question: "How is the shorter lifetime applied to just that artifact?",
    options: [
      { id: 'A', text: "Pass a retention-days input to the upload step for the debug bundle, which may shorten but not exceed the configured maximum." },
      { id: 'B', text: "Prefix the artifact name with a marker that the platform interprets as short-lived." },
      { id: 'C', text: "Upload the debug bundle to the cache instead, which expires sooner." },
      { id: 'D', text: "Add a scheduled workflow that deletes the artifact through the API after two days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The upload action accepts a retention-days input that overrides the default for that artifact alone, bounded by the maximum configured for the repository or organization, so one bundle can expire quickly while others follow the default. Artifact names carry no lifecycle meaning, the cache is for reusable inputs rather than diagnostic output, and a deletion workflow is extra machinery for something the upload step already exposes.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["GH-200", "Artifacts", "Retention"]
  },
  {
    id: "gh-200-108",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Boolean Manual Input That Is Always Treated as True",
    scenario: "A workflow declares a boolean input named dry-run. A step condition compares the value from the event payload to the string false, and the branch is taken even when the person starting the run leaves the box unticked.",
    question: "What is going wrong?",
    options: [
      { id: 'A', text: "Reading the value from the event payload yields a string, where any non-empty string is truthy, so the condition should compare the typed value from the inputs context instead." },
      { id: 'B', text: "Boolean inputs are not supported by workflow_dispatch, so the value is always the literal string true." },
      { id: 'C', text: "Conditions cannot evaluate booleans, so the comparison must be moved into a shell test." },
      { id: 'D', text: "The default for a boolean input is true when unspecified, so a default of false must be declared." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Values reached through the event payload arrive as strings, so a false boolean becomes the non-empty text false which is truthy in an expression, whereas the inputs context preserves the declared type and compares correctly. Boolean inputs are supported by manual dispatch, an unspecified default is not implicitly true, and conditions evaluate booleans perfectly well once the typed value is used.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "workflow_dispatch", "Inputs", "Contexts"]
  },
  {
    id: "gh-200-109",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Selecting the Runner From a Matrix Value",
    scenario: "A matrix declares an os dimension listing three runner labels. Each generated job must execute on the runner named by its own matrix entry rather than on a single fixed platform.",
    question: "How is runs-on written?",
    options: [
      { id: 'A', text: "As an expression referencing the os value of the matrix context." },
      { id: 'B', text: "As the literal string matrix.os, which the runner resolves at dispatch." },
      { id: 'C', text: "As a list of all three labels, from which the runner picks the matching one." },
      { id: 'D', text: "As ubuntu-latest, with a container key selecting the operating system per combination." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The matrix context is available in runs-on, so an expression reading the os value gives each generated job its own runner label, which is the standard cross-platform pattern. A bare literal is treated as a runner label and never matches, supplying a list requires a runner carrying all the labels at once rather than choosing among them, and containers cannot change the host operating system.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Matrix", "runs-on", "Contexts"]
  },
  {
    id: "gh-200-110",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Token Passed Between Jobs Arriving Empty",
    scenario: "An authentication job obtains a short-lived token and sets it as a job output. The downstream job reads the output through the needs context and receives an empty value, although the job logs show the token was obtained.",
    question: "Why is the value empty?",
    options: [
      { id: 'A', text: "Job outputs are limited in length and the token exceeds it, so it must be split across two outputs." },
      { id: 'B', text: "Outputs are only readable by jobs that also declare the same environment, which the downstream job omits." },
      { id: 'C', text: "Job outputs containing a value registered as a secret are redacted on the runner and never reach the platform, so a credential has to be re-obtained in the consuming job or stored in a secret manager instead." },
      { id: 'D', text: "The needs context exposes only the job result, so any value must travel as an artifact." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Job outputs are evaluated on the runner and anything matching a masked secret value is redacted before being sent onward, which is a deliberate protection and produces exactly this empty result. The remedy is to obtain the credential where it is used or to fetch it from a secret manager in each job. Length is not the constraint here, environments do not gate output visibility, and the needs context does carry outputs as well as the result.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs",
    tags: ["GH-200", "Job Outputs", "Secrets", "Security"]
  },
  {
    id: "gh-200-111",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Dependabot Not Proposing Action Updates",
    scenario: "A repository pins every action to a commit SHA and a configuration file for Dependabot has been added on a feature branch with the github-actions ecosystem declared. Weeks pass with no update pull requests.",
    question: "What is the most likely reason?",
    options: [
      { id: 'A', text: "The Dependabot configuration file must be present on the default branch to take effect, and a copy on a feature branch is ignored." },
      { id: 'B', text: "Dependabot cannot update actions pinned to a commit SHA, only ones pinned to tags." },
      { id: 'C', text: "The github-actions ecosystem only covers actions in the Marketplace, not those referenced by SHA." },
      { id: 'D', text: "Dependabot requires the repository to have vulnerability alerts enabled before any version updates run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dependabot reads its configuration from the default branch, so a file that exists only on a feature branch is never picked up and nothing is scheduled. Updates for SHA-pinned actions are supported and are in fact one of the main reasons to enable the ecosystem, with the update rewriting the SHA and its accompanying comment, and version updates do not depend on vulnerability alerts being enabled.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["GH-200", "Dependabot", "Configuration"]
  },
  {
    id: "gh-200-112",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Clearing a Poisoned Cache Entry",
    scenario: "A cache entry was saved containing a corrupted dependency tree. Every run now restores the bad entry and fails, and because the lockfile has not changed the key is identical each time.",
    question: "What is the most direct remedy?",
    options: [
      { id: 'A', text: "Delete the workflow run that created the entry, which removes its caches." },
      { id: 'B', text: "Set the cache action to read-only mode permanently." },
      { id: 'C', text: "Wait for the entry to be evicted, which happens within an hour of a failed restore." },
      { id: 'D', text: "Delete the offending cache entry from the repository caches view, or with the GitHub CLI cache commands, so the next run repopulates it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Caches are listed and individually deletable from the repository interface and from the command line, which removes the bad entry so the next run misses, rebuilds and saves a clean one. Eviction is driven by age and total size rather than by restore failures so waiting is unreliable, disabling saving forever gives up the speed benefit, and deleting a run does not delete the caches it wrote. Bumping a version segment inside the key is the common alternative when deletion is not available.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["GH-200", "Caching", "Operations"]
  },
  {
    id: "gh-200-113",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Guaranteeing a Security Scan Runs in Every Repository",
    scenario: "A compliance requirement says a standard scanning workflow must execute on every pull request in fifty repositories, and that a repository owner must not be able to remove or bypass it by editing files in their own repository.",
    question: "Which mechanism provides that guarantee?",
    options: [
      { id: 'A', text: "A branch protection rule in each repository requiring a status check with the agreed name." },
      { id: 'B', text: "A starter workflow published in the organization .github repository." },
      { id: 'C', text: "A repository ruleset defined at organization level that requires the specified workflow to pass, applied to the target repositories." },
      { id: 'D', text: "A reusable workflow that each repository is asked to call from its own pipeline." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An organization ruleset can require a particular workflow to run and pass, and because it is defined above the repository a local administrator cannot delete or weaken it, which is what a compliance guarantee requires. Starter workflows are suggestions a developer may decline, a reusable workflow still depends on each repository choosing to call it, and per-repository branch protection can be edited by whoever administers that repository.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets",
    tags: ["GH-200", "Rulesets", "Governance", "Compliance"]
  },
  {
    id: "gh-200-114",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Choosing Between a Reusable Workflow and a Composite Action",
    scenario: "A platform team is packaging shared automation. One piece needs to control which runner it uses, declare its own environment for approvals and run several jobs in parallel. Another is a short sequence of setup steps that should slot into the middle of an existing job.",
    question: "Which pairing is correct?",
    options: [
      { id: 'A', text: "A reusable workflow for the multi-job piece and a composite action for the setup sequence." },
      { id: 'B', text: "A composite action for the multi-job piece and a reusable workflow for the setup sequence." },
      { id: 'C', text: "A composite action for both, since composite actions can declare jobs when required." },
      { id: 'D', text: "A reusable workflow for both, since a reusable workflow can be referenced from a step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A reusable workflow replaces an entire job and can therefore define multiple jobs, choose runners and declare environments with their protection rules, while a composite action is a bundle of steps that slots into an existing job and inherits its runner. Composite actions cannot declare jobs, runners or environments, and a reusable workflow cannot be referenced from a step, so the assignment is determined by what each piece needs to control.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Composite Actions", "Design"]
  },
  {
    id: "gh-200-115",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Reading Artifacts Produced by a Different Workflow Run",
    scenario: "A reporting workflow triggered by workflow_run must read the coverage artifact uploaded by the build workflow that just completed. A plain download step in the reporting workflow finds nothing.",
    question: "Why, and what is required?",
    options: [
      { id: 'A', text: "Artifacts are scoped to the run that created them, so the reporting workflow must fetch the artifact of the triggering run by its run identifier, taken from the workflow_run event payload, using the API or an action that supports a run identifier." },
      { id: 'B', text: "Artifacts are deleted as soon as their run completes, so the build workflow must write to the cache instead." },
      { id: 'C', text: "The reporting workflow must declare needs on the build workflow, which makes the artifact visible." },
      { id: 'D', text: "Artifacts cannot cross runs under any circumstances, so the coverage data must be committed to a branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A download step defaults to the current run, which for a workflow_run trigger contains no artifacts of its own, so the reporting workflow has to name the run identifier carried in the event payload and fetch that run artifacts explicitly. Artifacts persist for their retention period rather than vanishing at completion, needs only orders jobs inside a single workflow, and cross-run access is supported once the run identifier is supplied.",
    referenceUrl: "https://docs.github.com/en/rest/actions/artifacts",
    tags: ["GH-200", "Artifacts", "workflow_run", "API"]
  },
  {
    id: "gh-200-116",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Questions to Answer Before Allow-Listing a Community Action",
    scenario: "A team requests that a community action be added to the organization allow list. The reviewer has to decide what evidence to require before approving it.",
    question: "Which considerations are most relevant to that decision?",
    options: [
      { id: 'A', text: "The number of stars on the repository and how recently the README was updated." },
      { id: 'B', text: "Whether the action is listed in the Marketplace, which is sufficient evidence of safety." },
      { id: 'C', text: "Whether the action is written in JavaScript, since container actions cannot be reviewed." },
      { id: 'D', text: "Whether the source can be reviewed and pinned to an immutable reference, what permissions and secrets the workflow will expose it to, and whether the publisher is maintained and verified." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An action runs with whatever token scope and secrets the calling job holds, so the meaningful review questions are what the code does, whether it can be pinned so the reviewed code is what executes, what it will be exposed to, and whether the publisher is credible and maintained. Popularity signals say little about behaviour, container actions are readable as source like any other, and a Marketplace listing is not a security assessment.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Supply Chain", "Review", "Governance"]
  },
  {
    id: "gh-200-117",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "A Composite Action That Cannot Find Its Bundled Script",
    scenario: "A composite action ships a helper script beside its metadata file. A run step invokes the script by a path relative to the current directory, and every consumer sees a file-not-found error even though the file is present in the action repository.",
    question: "What is the correct reference?",
    options: [
      { id: 'A', text: "A path built from github.action_path, which resolves to the directory the action was checked out into on the runner." },
      { id: 'B', text: "A path built from github.workspace, which contains the action files during execution." },
      { id: 'C', text: "A path relative to the consuming repository root, since actions are copied into it." },
      { id: 'D', text: "An absolute path under the runner tool cache, where actions are staged." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Steps of a composite action execute with the working directory of the calling job rather than the action directory, so a relative path resolves against the consumer repository; the action_path value gives the location the action itself was placed and is the supported way to reach bundled files. The workspace holds the consumer checkout, actions are not copied into it, and the tool cache stores installed toolchains rather than staged actions.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Composite", "action_path"]
  },
  {
    id: "gh-200-118",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Retiring an Input Without Breaking Existing Callers",
    scenario: "An action is replacing its token input with a differently named one. Many workflows still pass the old name, and the author wants those runs to keep working for now while showing maintainers that a change is needed.",
    question: "Which metadata feature supports that transition?",
    options: [
      { id: 'A', text: "Keep the old input declared and attach a deprecationMessage to it, so the runner warns when a caller supplies it while the value still reaches the action." },
      { id: 'B', text: "Add a since key to the new input naming the version at which the old one stops working." },
      { id: 'C', text: "Mark the old input required false, which emits a deprecation warning automatically." },
      { id: 'D', text: "Remove the old input and rely on the action code to read the raw environment variable, which produces a warning." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An input may carry a deprecationMessage, which the runner surfaces as a warning whenever a caller passes that input while still delivering the value, giving consumers a migration window with visible notice. Making an input optional says nothing about deprecation, removing the declaration but reading the variable anyway hides the contract instead of signalling it, and the metadata schema has no since key.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Deprecation", "Metadata"]
  },
  {
    id: "gh-200-119",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Failing a Step From Inside a JavaScript Action",
    scenario: "A JavaScript action detects an invalid configuration. It currently logs a message and returns normally, so the step is reported as successful and the workflow continues with bad configuration.",
    question: "What should the action do instead?",
    options: [
      { id: 'A', text: "Call core.setFailed with the message, which records the error and sets a failing exit code for the step." },
      { id: 'B', text: "Call core.warning with the message, which fails the step when the workflow runs in strict mode." },
      { id: 'C', text: "Write the message to standard error, which the runner treats as a failure." },
      { id: 'D', text: "Set an output named failed to true, which the runner inspects after the step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The toolkit function setFailed records an error annotation and sets the process exit code so the runner marks the step as failed, which is how an action signals an unrecoverable problem. A warning is informational and never fails a step, there is no strict mode that changes that, writing to standard error is ordinary logging rather than a failure signal, and outputs are data the runner does not interpret.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["GH-200", "Custom Actions", "JavaScript", "Error Handling"]
  },
  {
    id: "gh-200-120",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Reusing a Published Image With a Different Startup Command",
    scenario: "An author wants a container action based on a widely used published image, but the image entry point starts a long-running server whereas the action needs to run a one-shot command and exit.",
    question: "How is that expressed in the action metadata?",
    options: [
      { id: 'A', text: "Set the image to the published reference and add a command key, which container actions use instead of entrypoint." },
      { id: 'B', text: "Set the image to the published reference and declare an entrypoint in the runs block, which overrides the entry point baked into the image, with args supplying the parameters." },
      { id: 'C', text: "Fork the image and rebuild it with a different entry point, because metadata cannot override it." },
      { id: 'D', text: "Wrap the image in a composite action, which is the only way to change how a container starts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Docker container action may name an already published image and supply its own entrypoint and args in the runs block, which override what the image declares and let an existing image be repurposed without rebuilding it. Forking and rebuilding is unnecessary work, the metadata key is entrypoint rather than command, and a composite action cannot change how a container image starts.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Docker", "entrypoint"]
  },
  {
    id: "gh-200-121",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Making a Cloud Trust Policy Survive Branch Renames",
    scenario: "A cloud trust policy matches the subject claim for a specific repository and the main branch. The team now deploys from several release branches and from a reusable workflow, and keeping the trust policy in step with branch names has become error-prone.",
    question: "Which approach is more robust?",
    options: [
      { id: 'A', text: "Switch back to a long-lived access key, since claim management is the weakness of federated access." },
      { id: 'B', text: "Issue a separate role per branch and select the role with an expression at run time." },
      { id: 'C', text: "Match on a wildcard covering every branch in the repository, since the repository portion of the claim is the real boundary." },
      { id: 'D', text: "Customise the subject claim for the repository so it is built from the deployment environment rather than the branch, and have the trust policy match that environment, which then also gates on the environment protection rules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The subject claim template is customisable per repository, and binding it to the environment rather than the branch ties cloud access to a construct that carries reviewers and branch policies of its own, so the trust relationship stops depending on branch names. A wildcard across all branches would let any branch, including one a contributor pushes, assume the role, reverting to static keys discards the benefit entirely, and a role per branch multiplies the maintenance rather than removing it.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["GH-200", "OIDC", "Environments", "Security"]
  },
  {
    id: "gh-200-122",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Sharing One Runner Fleet Across Several Organizations",
    scenario: "An enterprise operates one hardened runner fleet. Three of its eight organizations should be able to use the fleet, and the platform team wants to manage it in one place rather than registering runners separately in each organization.",
    question: "Which arrangement fits?",
    options: [
      { id: 'A', text: "Register the runners three times, once per organization, pointing at the same machines." },
      { id: 'B', text: "Register the runners at enterprise level, which automatically makes them available to every organization with no further configuration." },
      { id: 'C', text: "Register the runners at enterprise level in a runner group whose access is granted to the three organizations, which may then further restrict it to particular repositories." },
      { id: 'D', text: "Register the runners in one organization and add the other two as collaborators on that organization." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Runners registered at the enterprise level live in enterprise runner groups whose access is granted to selected organizations, and each of those organizations can narrow it further to specific repositories, which is exactly the single fleet with layered access described. Organizations do not have collaborators, registering the same machines repeatedly creates conflicting registrations, and enterprise groups grant access to selected organizations rather than to all of them by default.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["GH-200", "Runner Groups", "Enterprise", "Governance"]
  },
  {
    id: "gh-200-123",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "What Write Access Implies About Secret Exposure",
    scenario: "A reviewer argues that repository secrets are safe from contributors because the interface never displays a stored secret value, only its name, so anyone with write access can be trusted with them.",
    question: "Which assessment is accurate?",
    options: [
      { id: 'A', text: "The reviewer is correct: since values are never displayed, write access carries no secret exposure." },
      { id: 'B', text: "Anyone able to merge a change to a workflow file can cause a run to use a secret and print or transmit a transformed version of it, so write access should be treated as equivalent to access to every secret the repository holds; narrowing exposure means environment scoping with reviewers, and protecting the workflow path." },
      { id: 'C', text: "Secrets are only exposed if a workflow explicitly disables log masking, which requires administrator rights." },
      { id: 'D', text: "Secrets are safe because masking prevents a secret from ever leaving the runner." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Not being able to read a secret in the interface is irrelevant when someone can author or merge a workflow that uses it, because the run can transform or transmit the value and masking only scrubs exact matches from log text rather than preventing network egress. The practical controls are scoping secrets to environments that require review, restricting who may change workflow files, and preferring short-lived federated credentials over stored ones.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "Threat Model", "Governance"]
  },
  {
    id: "gh-200-124",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Hardening the Host That Runs a Self-Hosted Runner",
    scenario: "A team is provisioning self-hosted runners for internal repositories. The build workflows are trusted, but the platform team wants to limit what a compromised or buggy build could reach on the host and on the network.",
    question: "Which configuration reflects the documented guidance?",
    options: [
      { id: 'A', text: "Grant the runner host broad outbound access so that dependency resolution never fails, and audit the logs afterwards." },
      { id: 'B', text: "Run the runner as an administrator so it can install whatever a build needs, and rely on the trusted repository boundary." },
      { id: 'C', text: "Run the runner service under a dedicated unprivileged account on a machine that hosts nothing else, restrict its outbound network reach to what builds require, and prefer ephemeral instances so state does not carry between jobs." },
      { id: 'D', text: "Co-locate the runner with the artifact registry to reduce network exposure between them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A workflow step executes arbitrary code on the runner host, so the guidance is least privilege for the service account, a dedicated machine so a compromise does not reach unrelated services, network egress limited to what builds actually need, and ephemeral instances so nothing persists into the next job. Running with administrator rights, placing the runner next to a registry it could then reach freely, and opening egress broadly all widen what a single bad build can do.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Hardening", "Security"]
  },
  {
    id: "gh-200-125",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Where a Repository Secret Sits Relative to an Organization Secret",
    scenario: "An organization secret named REGISTRY_TOKEN is available to a repository, and that repository also defines a repository secret with the same name holding a different value. A workflow references the name.",
    question: "Which value does the workflow receive?",
    options: [
      { id: 'A', text: "Both concatenated, in the order organization then repository." },
      { id: 'B', text: "The repository secret, because the more specific scope takes precedence over the organization secret of the same name." },
      { id: 'C', text: "Neither, because a name collision makes the reference ambiguous and the workflow fails." },
      { id: 'D', text: "The organization secret, because organization settings override repository settings." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Secrets resolve from the narrowest applicable scope outward, so an environment secret beats a repository secret, which in turn beats an organization secret of the same name, which lets a repository deliberately override an inherited default. A collision does not fail the run and values are certainly never combined, so relying on this precedence is legitimate but the shadowing is easy to miss and is worth an explicit comment.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "Precedence", "Organization"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_5;
