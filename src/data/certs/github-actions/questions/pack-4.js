export const GITHUB_ACTIONS_QUESTIONS_4 = [
  {
    id: "gh-200-76",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Deriving a Cache Key From Dependency Files",
    scenario: "A cache key must change whenever any lockfile anywhere in a monorepo changes, and must stay identical across runs when none of them have changed, so that unrelated commits reuse the same cache.",
    question: "Which expression produces such a key component?",
    options: [
      { id: 'A', text: "A call to toJSON on the matrix context." },
      { id: 'B', text: "A call to hashFiles with a glob matching the lockfiles, which returns a single hash over the matched file contents." },
      { id: 'C', text: "A reference to github.sha, which changes only when files change." },
      { id: 'D', text: "A reference to github.run_id, which is stable for a given set of inputs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The hashFiles function takes one or more glob patterns and returns a single hash computed over the contents of every matching file, so the key changes exactly when a dependency declaration changes and is otherwise identical across runs. The commit SHA changes on every commit including ones that touch no dependency, serialising the matrix describes the job rather than its inputs, and the run identifier is unique per run so it would never hit.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Caching", "Expressions", "hashFiles"]
  },
  {
    id: "gh-200-77",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Version Tool That Reports the Wrong Version in CI",
    scenario: "A release step derives the version from the number of commits since the last tag. Locally it is correct; in the workflow it always reports zero commits and no tags, even though the repository has many.",
    question: "What is the cause and the fix?",
    options: [
      { id: 'A', text: "The runner clock is out of sync, so tag dates are misread; adding a time synchronisation step resolves it." },
      { id: 'B', text: "The checkout action performs a shallow single-commit clone without tags by default, so fetch-depth must be set to zero to fetch full history and tags." },
      { id: 'C', text: "The default token lacks contents: read, so history is truncated." },
      { id: 'D', text: "Tags are never available to workflows for security reasons, so the version must be passed as an input." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The checkout action clones only the single commit under test by default, which keeps checkouts fast but leaves the working copy with no history and no tags, so any tool that walks the commit graph sees nothing. Setting fetch-depth to zero fetches the complete history along with tags. Clock skew does not affect commit counting, tags are perfectly available once fetched, and a permissions shortfall would fail the clone outright rather than truncate it silently.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",
    tags: ["GH-200", "checkout", "Git", "Workflows"]
  },
  {
    id: "gh-200-78",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Interpolating an Issue Title Into a Shell Command",
    scenario: "A workflow triggered by an issue event runs a shell step that interpolates the issue title directly into a command using an expression. A security reviewer flags the step as remotely exploitable.",
    question: "Why is it exploitable, and what is the safe pattern?",
    options: [
      { id: 'A', text: "The title may exceed the maximum command length, so it should be truncated before use." },
      { id: 'B', text: "The step should use single quotes around the expression, which prevents the shell from interpreting the value." },
      { id: 'C', text: "The expression is substituted into the script before the shell runs, so a crafted title becomes shell syntax; the value should instead be passed through an env entry and referenced as a shell variable, quoted." },
      { id: 'D', text: "Issue titles are not masked in logs, so the fix is to add the title to the mask register." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Expressions are evaluated and pasted into the script text before the shell ever sees it, so anything a stranger can type into an issue title becomes part of the command and can break out of quoting to run arbitrary code on the runner. Binding the value to an environment variable in the step env block and referencing that quoted variable keeps it as data. Length is not the issue, masking addresses disclosure rather than execution, and quoting the expression does not help because the substitution happens first and can itself contain a quote.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Security", "Script Injection", "Expressions"]
  },
  {
    id: "gh-200-79",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Skipping CI for a Trivial Commit",
    scenario: "A maintainer fixes a typo in a comment and does not want the twenty-minute pipeline to run for it, but also does not want to disable the workflow or edit its triggers.",
    question: "Which mechanism skips the run?",
    options: [
      { id: 'A', text: "Including a recognised skip directive such as the skip ci marker in the commit message, which suppresses push and pull request triggered runs." },
      { id: 'B', text: "Adding a docs label to the commit through the API before pushing." },
      { id: 'C', text: "Pushing with the no-verify flag, which tells the server not to dispatch events." },
      { id: 'D', text: "Adding an empty file named .noci to the repository root." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A commit message containing one of the recognised skip markers causes the platform not to start workflows for the resulting push or pull request event, which is the built-in escape hatch for trivial commits. No marker file is honoured, the no-verify flag only bypasses local git hooks and has no server-side effect, and commits do not carry labels.",
    referenceUrl: "https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs",
    tags: ["GH-200", "Workflows", "Triggers", "skip ci"]
  },
  {
    id: "gh-200-80",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Which Commit a Pull Request Workflow Actually Builds",
    scenario: "A workflow triggered by pull_request posts the commit it tested. The reported SHA never matches the latest commit on the contributor branch, and the contributor is confused because the code being tested is clearly theirs.",
    question: "What is being reported, and how is the branch tip obtained instead?",
    options: [
      { id: 'A', text: "The github.sha value is the base branch tip; the contributor commit is only available by running a git command after checkout." },
      { id: 'B', text: "The github.sha value is the SHA of the previous run, because pull request events lag by one commit." },
      { id: 'C', text: "The github.sha value is a synthetic identifier with no relationship to any commit, so the head SHA must always be read from the API." },
      { id: 'D', text: "The github.sha value is the SHA of the ephemeral merge commit of the pull request into the base branch; the branch tip is available as the head SHA in the pull request payload." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "For a pull_request event the platform creates a test merge of the head into the base and the workflow runs against that commit, which is why the reported SHA belongs to no branch and matches nothing the contributor pushed. The head commit is carried in the event payload as the pull request head SHA. It is not the base tip, there is no one-commit lag, and the merge SHA is a real commit rather than a synthetic identifier.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Workflows", "Contexts", "Pull Requests"]
  },
  {
    id: "gh-200-81",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Shell Script That Works on Linux and Fails on Windows",
    scenario: "A matrix runs the same run step on ubuntu-latest and windows-latest. The step contains a short shell script that works on Linux and produces parser errors on Windows.",
    question: "What is the cause and the simplest correction?",
    options: [
      { id: 'A', text: "Windows runners default to PowerShell for run steps, so the step should declare shell: bash to use the bash available on all hosted images." },
      { id: 'B', text: "Windows runners have no shell available, so the step must be replaced by a JavaScript action." },
      { id: 'C', text: "Windows runners require every run step to be a single line, so the script must be collapsed." },
      { id: 'D', text: "Windows runners interpret the script as a batch file, which is corrected by setting shell: cmd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The default interpreter for a run step depends on the platform, with PowerShell used on Windows and bash on Linux and macOS, so a script written in POSIX shell syntax fails to parse under PowerShell. Declaring shell: bash on the step selects the bash that hosted Windows images also provide, making the script portable. Windows runners do have shells available, multi-line scripts are supported, and selecting cmd would swap one incompatible interpreter for another.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "Shell", "Cross-platform"]
  },
  {
    id: "gh-200-82",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Nightly Job Running in Every Fork of a Popular Project",
    scenario: "A popular open source project has a nightly maintenance workflow. Maintainers of forks report that the job runs in their forks too, failing noisily because it needs credentials only the upstream project holds.",
    question: "Which guard is appropriate?",
    options: [
      { id: 'A', text: "Adding a concurrency group, which deduplicates runs across the fork network." },
      { id: 'B', text: "Removing the schedule trigger, since scheduled workflows always propagate to forks and cannot be constrained." },
      { id: 'C', text: "Storing the credentials as organization secrets, which prevents forks from starting the workflow." },
      { id: 'D', text: "A job-level if comparing github.repository to the upstream owner and repository name, so the job only runs in the canonical repository." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A fork receives a copy of the workflow files, and once a fork owner enables Actions the schedule applies there too, so the conventional guard is a condition comparing the repository context to the canonical name. Scheduled workflows are usable with that guard rather than needing removal, secret scope controls what a run can read rather than whether it starts, and concurrency groups are scoped to a single repository so they cannot deduplicate across forks.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Workflows", "Forks", "schedule"]
  },
  {
    id: "gh-200-83",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Running a Single Step From a Different Directory",
    scenario: "One step out of eight must execute in the tools subdirectory, while the other seven must stay in the repository root. The job already sets no defaults.",
    question: "What is the cleanest way to express this?",
    options: [
      { id: 'A', text: "Set working-directory on that one step." },
      { id: 'B', text: "Prefix the command with a change-directory call joined by a logical operator." },
      { id: 'C', text: "Split the step into its own job with needs." },
      { id: 'D', text: "Set defaults.run.working-directory on the job and override it on the other seven steps." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working-directory key is available on an individual run step as well as in a job defaults block, so applying it to the single step that needs it expresses the intent locally without affecting anything else. Setting a job default and overriding seven steps inverts the effort, a separate job adds a runner and a checkout for one command, and an inline change-directory works but hides the behaviour inside the script where it is easy to miss.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "working-directory"]
  },
  {
    id: "gh-200-84",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Secret Reference That Will Not Evaluate",
    scenario: "An author writes a workflow-level env block whose value references the secrets context, intending every job to inherit the credential. The workflow is rejected with a message that the context is not available at that point.",
    question: "Why, and what is the correct placement?",
    options: [
      { id: 'A', text: "The workflow must declare a permissions block containing secrets: read before the context resolves." },
      { id: 'B', text: "Secrets may only be referenced inside a with block passed to an action." },
      { id: 'C', text: "The secrets context requires the secret name to be uppercase, and the rejection is a naming error." },
      { id: 'D', text: "The secrets context is not available in a workflow-level env block, so the reference must move to a job-level or step-level env entry." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Contexts are only available in certain parts of a workflow, and the workflow-level env block is evaluated before any job has been assigned a runner or a secret scope, so the secrets context cannot be read there; moving the entry to job or step level puts it where the context is available. Secret names are not required to be uppercase, secrets can be referenced far more widely than inside a with block, and there is no secrets entry in the permissions schema.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Secrets", "Workflows"]
  },
  {
    id: "gh-200-85",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Multi-Line Step That Reports Success Despite an Error",
    scenario: "A run step contains three commands on separate lines. The second fails, but the step is reported as successful because the third command exits zero. The author expects the step to fail at the first error.",
    question: "Which explanation and remedy is correct?",
    options: [
      { id: 'A', text: "Exit codes are ignored inside multi-line scripts, so the script must write a failure marker and a later step must read it." },
      { id: 'B', text: "Only the exit code of the last command determines the step result in every shell, so each command must be joined with a logical and operator." },
      { id: 'C', text: "The step must be split into three separate steps, because a multi-line run step never fails on an intermediate command." },
      { id: 'D', text: "The default bash invocation used by the runner already enables exit-on-error, so this behaviour indicates the step selected a shell without it, such as sh or a custom shell string, and the fix is to select the default bash shell or enable the option explicitly." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The runner invokes the default bash shell with exit-on-error and pipeline failure options enabled, so an intermediate failure normally stops the step immediately; seeing the opposite means a different shell or a custom shell command line without those options is in play, and the remedy is to restore them. Multi-line steps do fail on intermediate commands under the default shell, splitting into three steps is unnecessary, and exit codes are certainly not ignored.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
    tags: ["GH-200", "Workflows", "Shell", "Error Handling"]
  },
  {
    id: "gh-200-86",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Reducing the Volume of Action Update Pull Requests",
    scenario: "Dependabot is configured for the github-actions ecosystem across forty repositories and opens a separate pull request for each action update, which reviewers find unmanageable.",
    question: "Which configuration change helps most?",
    options: [
      { id: 'A', text: "Set open-pull-requests-limit to one, which merges the remaining updates into the allowed pull request." },
      { id: 'B', text: "Disable the github-actions ecosystem and rely on the moving major version tags instead." },
      { id: 'C', text: "Define a groups entry in the Dependabot configuration so related action updates are combined into a single pull request." },
      { id: 'D', text: "Reduce the schedule interval to monthly, which combines the intervening updates into one pull request." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dependabot supports grouping, where a named group with matching patterns collects several updates into one pull request, which is the intended answer to update sprawl. A longer interval reduces how often batches arrive but still opens one pull request per dependency, the open pull request limit throttles how many exist at once and defers the rest rather than merging them, and abandoning pinning to follow moving tags gives up the supply chain control the pinning provides.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-200", "Dependabot", "Actions Updates"]
  },
  {
    id: "gh-200-87",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "A Manual Trigger That Does Not Appear on a Feature Branch",
    scenario: "An engineer adds a workflow_dispatch trigger to a workflow on a feature branch and pushes. The Run workflow button does not appear anywhere in the Actions tab, and a colleague insists the syntax is correct.",
    question: "What explains this?",
    options: [
      { id: 'A', text: "The Actions tab caches the workflow list for up to an hour, so the button will appear shortly." },
      { id: 'B', text: "Manual triggers require the workflow to declare a permissions block, which is missing." },
      { id: 'C', text: "The workflow_dispatch and schedule triggers are only recognised once the workflow file exists on the default branch, though a dispatch can then select another branch to run from." },
      { id: 'D', text: "The button appears only after the workflow has run at least once from another trigger." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The platform reads the workflow definition from the default branch when deciding which manual and scheduled triggers exist, so a dispatch trigger added only on a feature branch is invisible until that change reaches the default branch, after which the run dialog can still target any branch. No prior run is needed to reveal the button, a permissions block is unrelated, and the absence is a definite behaviour rather than a caching delay.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow",
    tags: ["GH-200", "workflow_dispatch", "Default Branch", "Triggers"]
  },
  {
    id: "gh-200-88",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Why a Cache Written on a Feature Branch Never Hits",
    scenario: "A cache is populated by a workflow on a long-lived feature branch. A second feature branch, created from the default branch, runs the same workflow and always misses, even though its lockfile is identical to the first branch.",
    question: "What explains the miss?",
    options: [
      { id: 'A', text: "Caches are scoped per runner, so a different runner never sees an existing entry." },
      { id: 'B', text: "Caches are evicted whenever any branch writes a new entry with a different key." },
      { id: 'C', text: "Caches are only readable by the workflow run that created them." },
      { id: 'D', text: "Caches are scoped per branch, and a branch can read caches from its own ref, its base branch and the default branch, but not from an unrelated sibling branch." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cache access follows a branch hierarchy so that a run can restore entries created on its own ref, on the base branch of a pull request and on the default branch, which deliberately prevents one feature branch from consuming or poisoning a sibling entry; caching on the default branch is therefore how entries are shared broadly. Writing a new key does not evict unrelated entries, caches outlive the run that created them, and runner identity is not part of the scope.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["GH-200", "Caching", "Scope", "Branches"]
  },
  {
    id: "gh-200-89",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "A Matrix That Fails Uploading Its Results",
    scenario: "A matrix of four jobs each uploads its test results using the same artifact name. Three jobs succeed and the rest fail with a conflict saying the artifact already exists.",
    question: "What is the correct fix?",
    options: [
      { id: 'A', text: "Give each job a distinct artifact name incorporating a matrix value, then merge or download them together in a later job." },
      { id: 'B', text: "Reduce max-parallel to one, which allows the uploads to append to the existing artifact." },
      { id: 'C', text: "Move the upload into a composite action, which handles naming automatically." },
      { id: 'D', text: "Add a concurrency group so the four uploads are serialised into the same artifact." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An artifact name is unique within a run and an artifact is sealed once uploaded, so parallel jobs writing the same name collide by design; naming each upload after its matrix value keeps them distinct and a later job can download the whole set together by pattern. Serialising the uploads does not make the name reusable because the conflict is about the name rather than timing, and moving the same call into an action changes nothing about naming.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
    tags: ["GH-200", "Artifacts", "Matrix"]
  },
  {
    id: "gh-200-90",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Allowing Only Vetted Publishers of Actions",
    scenario: "An organization is comfortable with actions written by GitHub and by publishers that have gone through Marketplace verification, but wants to review anything else before it is used.",
    question: "Which policy setting expresses that directly?",
    options: [
      { id: 'A', text: "Allow local actions only, then vendor every third-party action into the repository." },
      { id: 'B', text: "Disable actions, then grant exceptions per repository." },
      { id: 'C', text: "Allow select actions, enabling the options for actions created by GitHub and by Marketplace verified creators, plus an allow list for specific exceptions." },
      { id: 'D', text: "Allow all actions, combined with a required review of the workflows directory." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Actions permissions policy has explicit toggles for actions created by GitHub and for verified Marketplace creators alongside a free-form allow list, which matches the stated trust model without hand-maintaining a long list. Allowing everything relies on review discipline rather than enforcement, disabling wholesale creates an approval queue for ordinary work, and vendoring every action shifts the maintenance and review burden into the repository.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization",
    tags: ["GH-200", "Policy", "Marketplace", "Governance"]
  },
  {
    id: "gh-200-91",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Investigating One Attempt of a Re-Run Workflow",
    scenario: "A flaky job failed on the first attempt and passed after a re-run. An engineer investigating the flake needs the logs of the failed attempt specifically, not the successful one that replaced it in the default view.",
    question: "How are those logs reached?",
    options: [
      { id: 'A', text: "Failed attempts are discarded when a re-run succeeds, so the logs must be reconstructed from the annotations." },
      { id: 'B', text: "Re-run the workflow again and hope to reproduce the failure." },
      { id: 'C', text: "Select the earlier attempt from the attempt selector on the run page, or request that attempt number through the API or CLI." },
      { id: 'D', text: "Download the artifact from the failed attempt, which contains the logs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Re-running creates a new attempt of the same run rather than replacing it, and both the run page and the API expose earlier attempts along with their logs, which is exactly what investigating a flake requires. Previous attempts are retained rather than discarded, artifacts contain whatever the workflow uploaded rather than the run logs, and reproducing by chance is not a way to retrieve an existing record.",
    referenceUrl: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs",
    tags: ["GH-200", "Workflow Runs", "Attempts", "Troubleshooting"]
  },
  {
    id: "gh-200-92",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Testing an Action Inside Its Own Repository",
    scenario: "An action author wants continuous integration for the action itself, exercising it end to end against several inputs on every pull request, before any release is tagged.",
    question: "How should the test workflow reference the action?",
    options: [
      { id: 'A', text: "By owner, repository and the branch name of the pull request head." },
      { id: 'B', text: "By owner, repository and the latest release tag, then compare the result to the working copy." },
      { id: 'C', text: "Action repositories cannot test themselves, so a second repository must consume the action." },
      { id: 'D', text: "By a relative path to the repository root after a checkout step, so the version under test is the working copy rather than a published ref." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Referencing the action by a relative path after checking out the repository runs the code exactly as it stands in the pull request, which is what pre-release testing needs. Referencing the head branch by name relies on the ref being pushed to the same repository and fails for fork contributions, referencing the latest tag tests the previously released version rather than the change, and a second repository is unnecessary given the relative reference.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Testing"]
  },
  {
    id: "gh-200-93",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Slow Startup of a Container Action Built From a Dockerfile",
    scenario: "A Docker container action names a Dockerfile in its metadata. Consumers report that the action adds about ninety seconds to every job, and profiling shows the time is spent before the action code starts.",
    question: "Which change addresses the cause?",
    options: [
      { id: 'A', text: "Add a cache step for the Docker layers before the action, which the runner reuses when building the action image." },
      { id: 'B', text: "Move the action to a larger runner, which builds the image faster and is the only available remedy." },
      { id: 'C', text: "Reduce the number of declared inputs, since each one adds container startup overhead." },
      { id: 'D', text: "Publish the image to a registry and point the metadata at that prebuilt image reference, so the runner pulls it instead of building it on every job." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When the metadata names a Dockerfile the runner builds the image at the start of every job that uses the action, and that build is the ninety seconds; pointing the metadata at an already published image makes the runner pull a prepared layer set instead. A cache step placed before the action does not feed the runner internal action image build, input count has no bearing on startup, and a bigger machine only shortens a build that should not be happening.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Docker", "Performance"]
  },
  {
    id: "gh-200-94",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "A JavaScript Action That Cannot Find Its Dependencies",
    scenario: "A JavaScript action works when run locally after installing packages. Used from a workflow it fails immediately with a module not found error, although the source file is present in the repository at the path named in the metadata.",
    question: "What is missing?",
    options: [
      { id: 'A', text: "The action must commit its runtime dependencies, in practice by bundling the code and its dependencies into a single committed file that the metadata points at, because the runner does not install packages for an action." },
      { id: 'B', text: "The metadata must list the dependencies under a packages key so the runner installs them." },
      { id: 'C', text: "The consuming workflow must run a setup-node step and install the action dependencies before using it." },
      { id: 'D', text: "The action must be published to the Marketplace, which triggers a dependency install at publish time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The runner checks out the action and executes the entry point directly without any install step, so everything the code needs at run time has to be present in the repository, which is why the standard practice is to bundle the source and its dependencies into one committed artifact and point the metadata at it. Asking every consumer to install dependencies inverts the contract, the metadata schema has no packages key, and publishing does not perform an install.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action",
    tags: ["GH-200", "Custom Actions", "JavaScript", "Bundling"]
  },
  {
    id: "gh-200-95",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Reusing Existing Actions Inside a New One",
    scenario: "An author wants a single action that checks out the repository, sets up a language toolchain and runs a lint command, so that consumers add one step instead of three. The three pieces already exist as published actions and shell commands.",
    question: "Which action type supports composing them?",
    options: [
      { id: 'A', text: "A JavaScript action, which is the only type able to invoke other actions programmatically." },
      { id: 'B', text: "A Docker container action, which can declare the other actions in its metadata." },
      { id: 'C', text: "No action type can call another action, so this must be a reusable workflow." },
      { id: 'D', text: "A composite action, whose steps list may contain both uses steps referencing other actions and run steps." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A composite action exists precisely to bundle a sequence of steps behind one reference, and its steps may reference other actions with uses as well as execute shell commands with run. Container actions run a single entry point and cannot compose actions through metadata, JavaScript actions have no supported mechanism for invoking another action, and while a reusable workflow could group the work it replaces a whole job rather than slotting in as a single step.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Composite", "Composition"]
  },
  {
    id: "gh-200-96",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Storing a Credential Larger Than the Secret Limit",
    scenario: "A deployment needs a service account bundle of roughly one hundred kilobytes. Attempting to save it as a secret is rejected because it exceeds the maximum size for a single secret.",
    question: "Which approach is appropriate?",
    options: [
      { id: 'A', text: "Store the bundle in an external secret manager and keep only the short credential needed to authenticate to it as a GitHub secret, ideally obtained through OpenID Connect." },
      { id: 'B', text: "Store the bundle as an organization variable, which has no size restriction." },
      { id: 'C', text: "Commit the bundle to the repository encrypted with a passphrase held as a secret, and decrypt it during the run." },
      { id: 'D', text: "Split the bundle across several secrets and reassemble it in a step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Secrets are capped at a size intended for credentials rather than payloads, and the documented pattern for anything larger is to hold it in a purpose-built secret manager and let the workflow authenticate to that manager, which also brings rotation and access auditing. Committing an encrypted blob puts ciphertext in history forever, splitting across secrets defeats masking because no single part matches the value being scrubbed, and variables are stored in plain text and are never a place for a credential.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
    tags: ["GH-200", "Secrets", "Limits", "Secret Managers"]
  },
  {
    id: "gh-200-97",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Requiring Review of Changes to Workflow Files",
    scenario: "An organization wants any change under the workflows directory to be reviewed by the platform team specifically, rather than by whoever happens to be reviewing the rest of the pull request.",
    question: "Which mechanism enforces that?",
    options: [
      { id: 'A', text: "A push protection rule blocking commits that touch the workflows directory." },
      { id: 'B', text: "A required reviewer on the production environment, which also covers workflow edits." },
      { id: 'C', text: "A CODEOWNERS entry mapping the workflows directory to the platform team, combined with branch protection requiring review from code owners." },
      { id: 'D', text: "An organization Actions policy restricting who may edit workflow files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CODEOWNERS maps paths to reviewing teams, and branch protection can make code owner review mandatory, so a change touching the workflows directory cannot merge without the platform team signing off. Actions policies govern which actions and permissions runs may use rather than who edits files, environment reviewers gate deployments at run time, and push protection targets committed secrets rather than paths.",
    referenceUrl: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",
    tags: ["GH-200", "Governance", "CODEOWNERS", "Branch Protection"]
  },
  {
    id: "gh-200-98",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Choosing Between a Variable and a Secret",
    scenario: "A workflow needs a public API base URL that differs per environment and an API key for the same service. Both currently sit in the workflow file, and the team is moving them out.",
    question: "Where should each go?",
    options: [
      { id: 'A', text: "The base URL should be a configuration variable and the API key should be a secret, because variables are stored and displayed in plain text while secrets are encrypted and masked in logs." },
      { id: 'B', text: "The base URL should be a secret and the API key a variable, so the endpoint is hidden from contributors." },
      { id: 'C', text: "Both should be variables, because masking would make the logs unreadable." },
      { id: 'D', text: "Both should be secrets, because both relate to an authenticated service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Variables hold non-sensitive configuration and are readable in the interface and in logs, which is appropriate and convenient for an endpoint, while secrets are encrypted at rest, withheld from untrusted contexts and scrubbed from log output, which is required for a key. Treating a plain endpoint as a secret hurts debuggability for no gain, putting a key in a variable exposes it, and reversing the two protects the wrong value.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables",
    tags: ["GH-200", "Secrets", "Variables", "Configuration"]
  },
  {
    id: "gh-200-99",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners Behind an Outbound Proxy",
    scenario: "Self-hosted runners sit in a network where all outbound traffic must traverse an authenticated proxy. The runner registers successfully from an administrator shell but jobs fail to start, and the runner service log shows connection failures.",
    question: "Which configuration is required?",
    options: [
      { id: 'A', text: "Place the runners in a runner group, which routes traffic through the organization proxy." },
      { id: 'B', text: "Add the proxy address as a repository secret so the runner reads it at job start." },
      { id: 'C', text: "Configure the runner proxy environment variables, including the no-proxy exclusions, in the environment of the runner service rather than only in the interactive shell." },
      { id: 'D', text: "Disable the runner automatic update, which is the component that requires direct connectivity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The runner reads proxy settings from its process environment, so configuring them only in an interactive shell explains why manual registration works while the background service cannot reach the endpoints it needs; the settings must be present in the service environment, along with exclusions for hosts that must be reached directly. Secrets are delivered to jobs rather than to the runner process, runner groups control access rather than network paths, and disabling updates does not remove the need for connectivity.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/using-a-proxy-server-with-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Networking", "Proxy"]
  },
  {
    id: "gh-200-100",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Turning Off Actions for Private Repositories Only",
    scenario: "An enterprise wants open source repositories to keep using Actions freely while private repositories are brought under a stricter review before any workflow runs, and wants the distinction enforced centrally rather than repository by repository.",
    question: "Which capability supports this?",
    options: [
      { id: 'A', text: "Removing the Actions tab from private repositories through the API." },
      { id: 'B', text: "A repository ruleset applied to every private repository that blocks the workflows directory." },
      { id: 'C', text: "Setting the default workflow permissions to read-only for private repositories, which prevents workflows from running." },
      { id: 'D', text: "Enterprise Actions policies, which can enable or disable Actions for organizations and can be scoped by repository visibility, with organization-level policies refining but not exceeding the enterprise setting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Actions policy is layered, with the enterprise setting establishing the ceiling and organizations able to restrict further but never loosen, and the policy distinguishes repositories by visibility, which is exactly the split described. A ruleset blocking a directory would prevent legitimate work rather than gate execution, the Actions tab is not removable as a policy control, and read-only token defaults change what a workflow may do rather than whether it runs.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["GH-200", "Enterprise", "Policy", "Governance"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_4;
