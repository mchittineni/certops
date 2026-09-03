export const GITHUB_ACTIONS_QUESTIONS_10 = [
  {
    id: "gh-200-226",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Expectations to Set About a Scheduled Workflow",
    scenario: "A team writes a schedule expected to run at exactly seven in the morning local time, every two minutes during an incident window, and never to be late.",
    question: "Which correction do they need?",
    options: [
      { id: 'A', text: "Cron expressions are in coordinated universal time and runs are guaranteed to start within ten seconds of the scheduled moment." },
      { id: 'B', text: "Cron expressions are interpreted in coordinated universal time rather than a local zone, the shortest supported interval is five minutes, and runs may be delayed during periods of high load, so a schedule is a best-effort trigger rather than a guarantee." },
      { id: 'C', text: "Schedules accept a seconds field, which allows sub-minute precision when needed." },
      { id: 'D', text: "Cron expressions follow the repository configured time zone, and the minimum interval is one minute." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Schedules use standard five-field cron expressions evaluated in coordinated universal time, cannot be set more frequently than every five minutes, and are explicitly best-effort so a busy period can delay a run, which matters when a design assumes punctuality. There is no repository time zone setting for this, no punctuality guarantee, and no seconds field.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "schedule", "cron", "Triggers"]
  },
  {
    id: "gh-200-227",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Referring Back to an Earlier Step",
    scenario: "A step writes an output. A later step tries to read it through the steps context and the expression resolves to nothing, although the writing step demonstrably succeeded.",
    question: "What is most likely missing?",
    options: [
      { id: 'A', text: "The writing step has no name, which is what the steps context is keyed by." },
      { id: 'B', text: "The writing step has no id, so there is no key under which the steps context can expose its outputs." },
      { id: 'C', text: "Step outputs are only readable from a different job through the needs context." },
      { id: 'D', text: "The reading step must declare needs naming the writing step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The steps context is keyed by step identifier, so a step without an id contributes nothing to it and every reference resolves to an empty value. The display name is not used as the key, needs expresses dependencies between jobs rather than steps, and step outputs are readable within the same job precisely through this context.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Steps", "Outputs"]
  },
  {
    id: "gh-200-228",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Trying to Skip an Entire Workflow With a Condition",
    scenario: "An author wants one condition to govern whether a whole workflow runs, and adds an if key at the top level of the workflow file next to the name and trigger declarations. The file is rejected.",
    question: "Where can conditions be placed, and what is the alternative?",
    options: [
      { id: 'A', text: "Conditions are supported only on steps, so a job-level condition would also be rejected." },
      { id: 'B', text: "Conditions are supported on jobs and on steps but not at workflow level, so the intent is expressed either by trigger filters or by putting the same condition on every job." },
      { id: 'C', text: "Conditions are supported at workflow level but must appear before the trigger declaration." },
      { id: 'D', text: "Conditions are supported at workflow level only for scheduled workflows." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The workflow schema places conditions on jobs and on steps, and whether a run is created at all is decided by the trigger and its filters, so a workflow-wide condition is expressed either by tightening the trigger, which avoids starting a run entirely, or by repeating a job-level condition. Ordering does not make a top-level condition legal, the restriction is not specific to schedules, and job-level conditions are certainly supported.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution",
    tags: ["GH-200", "Conditions", "Workflow Syntax"]
  },
  {
    id: "gh-200-229",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Protecting a Rate-Limited Service From a Wide Matrix",
    scenario: "A matrix of thirty jobs each calls an internal service that begins rejecting requests above six concurrent callers. The team wants to keep all thirty combinations while staying within that ceiling.",
    question: "Which setting applies?",
    options: [
      { id: 'A', text: "A max-parallel value of six on the matrix strategy, which limits how many of its jobs run at once without reducing the number of combinations." },
      { id: 'B', text: "A concurrency group on the job, which limits it to one at a time and is the only available control." },
      { id: 'C', text: "A fail-fast setting, which staggers the jobs." },
      { id: 'D', text: "Reducing the matrix to six combinations and iterating over the rest inside each job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The max-parallel setting caps how many jobs generated by a matrix execute simultaneously while leaving the full set of combinations intact, which matches a downstream concurrency ceiling exactly. A concurrency group would serialise to one at a time and is coarser than needed, fail-fast governs cancellation on failure rather than pacing, and collapsing the matrix loses the per-combination reporting that makes a matrix worth having.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Matrix", "max-parallel", "Rate Limits"]
  },
  {
    id: "gh-200-230",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Workflow Command That Stopped Working",
    scenario: "An older workflow sets a step output by echoing a set-output workflow command. Runs now show a warning about a deprecated command and the output is not set.",
    question: "What is the replacement?",
    options: [
      { id: 'A', text: "Append a name and value pair to the file named by GITHUB_OUTPUT, which replaced the deprecated command form." },
      { id: 'B', text: "Use the set-env command instead, which supersedes set-output." },
      { id: 'C', text: "Declare the output in a job outputs block, which removes the need to set it from the step." },
      { id: 'D', text: "Prefix the command with a double colon, which re-enables the legacy syntax." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The command-based forms for setting outputs and environment variables were deprecated because they could be injected through untrusted output, and the replacement is to write to the files named by the output and environment variables. The environment command was deprecated for the same reason rather than superseding anything, a job outputs block republishes a step output and still needs the step to produce one, and no prefix restores the legacy behaviour.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions",
    tags: ["GH-200", "Workflow Commands", "Deprecation", "Outputs"]
  },
  {
    id: "gh-200-231",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Turning a Step Output Into Structured Data",
    scenario: "A discovery step emits a JSON object describing a build plan as a step output. A later step needs to read individual fields of that object in workflow expressions rather than parsing it in shell.",
    question: "Which function is used?",
    options: [
      { id: 'A', text: "There is no such function; JSON must be parsed by a shell step and re-emitted as separate outputs." },
      { id: 'B', text: "The format function, which extracts named fields from a JSON string." },
      { id: 'C', text: "The toJSON function, which converts a string into an addressable object." },
      { id: 'D', text: "The fromJSON function, which parses a JSON string from an expression into an object or array whose properties can then be addressed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The fromJSON function turns a JSON string into a value the expression language can navigate, which is what allows a step output to carry structure and is the same mechanism behind dynamic matrices. The toJSON function performs the opposite conversion, format builds strings from templates, and emitting separate outputs is a workaround for a capability that exists.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Expressions", "fromJSON", "Outputs"]
  },
  {
    id: "gh-200-232",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Making Matrix Legs Distinguishable in the Checks List",
    scenario: "A matrix produces twelve jobs that all appear in the checks list with the same job identifier and a bracketed list of values, which reviewers find hard to scan when one leg fails.",
    question: "Which change improves it?",
    options: [
      { id: 'A', text: "Add a display key to each matrix entry." },
      { id: 'B', text: "Set the job name to an expression incorporating the meaningful matrix values, which becomes the displayed name for each leg." },
      { id: 'C', text: "Rename the job identifier to include the matrix values." },
      { id: 'D', text: "Set run-name, which controls how each matrix leg is displayed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The job name accepts an expression and may reference the matrix context, so each generated leg gets a readable label in the checks list and in branch protection. A job identifier is a static key in the file and cannot vary per leg, run-name titles the whole run rather than individual jobs, and there is no display key in the matrix schema.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",
    tags: ["GH-200", "Matrix", "Job Names", "Usability"]
  },
  {
    id: "gh-200-233",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Writing a Literal Expression Delimiter Into a File",
    scenario: "A workflow generates a template file that must itself contain the two-brace expression syntax so that a downstream tool can process it. Every attempt is evaluated by the workflow instead of being written out.",
    question: "How is the delimiter emitted literally?",
    options: [
      { id: 'A', text: "Wrap a quoted string containing the delimiter in an expression, so the expression evaluates to the literal text." },
      { id: 'B', text: "Prefix each brace with a backslash, which the expression parser treats as an escape." },
      { id: 'C', text: "Place the content in a single-quoted YAML block, which suppresses expression evaluation." },
      { id: 'D', text: "There is no way to emit the delimiter, so the file must be produced by an action written in a general purpose language." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The documented escape is to evaluate an expression whose value is a quoted string containing the delimiter, so the parser consumes one expression and writes out the literal characters. There is no backslash escape in the expression syntax, YAML quoting styles do not suppress expression evaluation because substitution happens after the document is parsed, and the case is supported rather than requiring an external action.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Expressions", "Escaping"]
  },
  {
    id: "gh-200-234",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reading the Full Event Payload From Inside a Step",
    scenario: "A step needs several fields of the event payload that are awkward to thread through individual expressions, and the author would rather process the whole payload with a script.",
    question: "Where does the runner make it available?",
    options: [
      { id: 'A', text: "As a JSON file on disk whose path is given by the GITHUB_EVENT_PATH environment variable, which the step can read and parse, treating the contents as untrusted input." },
      { id: 'B', text: "As an environment variable named GITHUB_EVENT containing the serialised payload." },
      { id: 'C', text: "Only through individual expressions, since the payload is never written to disk." },
      { id: 'D', text: "As an artifact automatically attached to every run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The runner writes the complete webhook payload to a file and exposes its path in an environment variable, which lets a script parse the whole structure rather than threading fields through expressions, while the usual caution applies because much of the payload is written by whoever raised the event. The payload is not passed as a serialised variable, it is written to disk, and no automatic artifact is created.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables",
    tags: ["GH-200", "Variables", "Event Payload", "Security"]
  },
  {
    id: "gh-200-235",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Deploying Only After a Change Reaches the Default Branch",
    scenario: "A team wants deployment to happen when a pull request is merged, and only then. Someone proposes triggering on the pull request closed activity and checking the merged flag; someone else proposes a push trigger on the default branch.",
    question: "Which is the more robust choice, and why?",
    options: [
      { id: 'A', text: "The push trigger on the default branch, because it fires for every way a change lands there including direct pushes and merge queue merges, whereas the closed activity misses those paths." },
      { id: 'B', text: "The closed activity, because a push trigger also fires for pushes to other branches." },
      { id: 'C', text: "The two are exactly equivalent, so the choice is a matter of style." },
      { id: 'D', text: "Neither; deployment can only be triggered by a release event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reacting to the branch itself covers every route by which a commit arrives, whereas subscribing to a pull request closing and testing the merged flag silently misses direct pushes and merges completed by other mechanisms. A push trigger with a branches filter naming the default branch does not fire for other branches, the two are not equivalent, and deployments are commonly driven from branch pushes as well as releases.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Triggers", "Deployments", "Design"]
  },
  {
    id: "gh-200-236",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Planning a Migration From Another CI System",
    scenario: "An organization has four hundred pipelines in another continuous integration product. Leadership wants an inventory of what exists, an estimate of the effort, and automated conversion where it is feasible.",
    question: "Which tool is intended for this?",
    options: [
      { id: 'A', text: "The GitHub Actions Importer, which audits an existing estate to report usage and complexity, forecasts runner needs, and performs dry-run and actual conversions of supported pipelines." },
      { id: 'B', text: "The actions synchronisation tool, which mirrors pipelines from other systems." },
      { id: 'C', text: "Starter workflows, which detect the previous system and convert its configuration on first use." },
      { id: 'D', text: "There is no tooling; each pipeline must be rewritten by hand after a manual inventory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Actions Importer exists for exactly this sequence, offering audit and forecast commands that quantify the estate before any change and dry-run conversion so the output can be reviewed before it is committed, with several source systems supported. The synchronisation tool mirrors action repositories onto an isolated server, starter workflows are suggestions rather than converters, and tooling does exist even though complex pipelines still need human attention.",
    referenceUrl: "https://docs.github.com/en/actions/migrating-to-github-actions/automated-migrations/automating-migration-with-github-actions-importer",
    tags: ["GH-200", "Migration", "Actions Importer", "Planning"]
  },
  {
    id: "gh-200-237",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "A Workflow File the Platform Never Sees",
    scenario: "To keep things tidy an engineer organises workflow files into subject subdirectories beneath the workflows directory. None of the moved workflows are listed in the Actions tab any more.",
    question: "What is the rule?",
    options: [
      { id: 'A', text: "Subdirectories are supported but each needs an index file listing its workflows." },
      { id: 'B', text: "The files are read but their names must be unique across all subdirectories, which the move violated." },
      { id: 'C', text: "Workflow files are read only from directly within the .github/workflows directory, and files placed in subdirectories beneath it are ignored." },
      { id: 'D', text: "Subdirectories are supported only for reusable workflows." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Only files sitting directly in the workflows directory are treated as workflow definitions, so nesting them for tidiness makes them invisible, which is a common and quietly confusing mistake because nothing fails, the workflows simply stop existing. No index file convention exists, reusable workflows are subject to the same rule, and the cause is location rather than name collision.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/about-workflows",
    tags: ["GH-200", "Workflows", "File Layout", "Troubleshooting"]
  },
  {
    id: "gh-200-238",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Authenticating the Command Line Inside a Workflow",
    scenario: "A step invokes the GitHub CLI to comment on a pull request. The step fails saying no authentication token was found, even though the job has a suitable permissions block.",
    question: "What is missing?",
    options: [
      { id: 'A', text: "The permissions block must additionally grant a cli scope." },
      { id: 'B', text: "The command line must be installed with a setup step, which also configures authentication." },
      { id: 'C', text: "The command line cannot authenticate inside a workflow and requires a personal access token stored in a secret." },
      { id: 'D', text: "The command line reads its credential from an environment variable, so the step must set the token variable from the secrets context; a permissions block scopes the token but does not hand it to the tool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Granting a scope determines what the automatic token may do, but the token still has to be placed where the tool looks for it, which for the command line means setting its token environment variable from the secrets context in the step. The tool is preinstalled on hosted runners, the automatic token works perfectly well with it, and there is no cli entry in the permissions schema.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication",
    tags: ["GH-200", "GitHub CLI", "GITHUB_TOKEN", "Permissions"]
  },
  {
    id: "gh-200-239",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Keeping Workflows Portable Between Hosted and Self-Hosted Fleets",
    scenario: "The same reusable workflow must run in one organization on hosted runners and in another on a self-hosted fleet with different labels. Hard-coding a runs-on value makes it usable in only one of them.",
    question: "Which design handles both?",
    options: [
      { id: 'A', text: "Omit runs-on, which makes the platform choose an available runner." },
      { id: 'B', text: "Use a runs-on value listing both the hosted label and the self-hosted labels, so whichever exists is matched." },
      { id: 'C', text: "Maintain two copies of the reusable workflow and let each organization call its own." },
      { id: 'D', text: "Declare a runner label as a typed input of the reusable workflow with a sensible default, and reference that input in runs-on so each caller supplies the label its environment provides." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Making the runner label an input keeps one definition and pushes the environment-specific detail to the caller, which is the point of a reusable workflow and the reason inputs can be referenced in runs-on. Listing several labels requires a single runner carrying all of them rather than matching any, duplicating the workflow reintroduces the drift being avoided, and runs-on is required rather than optional.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Runners", "Portability"]
  },
  {
    id: "gh-200-240",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Removing Run Data on Request",
    scenario: "A legal request requires that the logs and artifacts of a specific set of workflow runs be removed ahead of their retention expiry, and the team needs the removal to be scriptable across many repositories.",
    question: "Which approach is available?",
    options: [
      { id: 'A', text: "Runs cannot be deleted before their retention expires, so the request cannot be satisfied." },
      { id: 'B', text: "Make the repositories private, which removes previously generated logs." },
      { id: 'C', text: "Reduce the retention setting to one day, which retroactively removes existing data." },
      { id: 'D', text: "Delete the logs and artifacts of the identified runs through the API endpoints for run logs and artifacts, or delete the runs themselves, driving it from a script across the repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The API exposes deletion for run logs, for individual artifacts and for whole runs, which makes targeted removal scriptable across many repositories, and it is the appropriate response to a removal request. Retention changes govern future expiry rather than deleting what already exists, deletion before expiry is supported, and changing visibility does not remove stored run data.",
    referenceUrl: "https://docs.github.com/en/rest/actions/workflow-runs",
    tags: ["GH-200", "API", "Retention", "Compliance"]
  },
  {
    id: "gh-200-241",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Reducing Actions Spend Without Reducing Coverage",
    scenario: "A platform team is asked to cut Actions spend by a third. Test coverage and release cadence must not be reduced, and the team has a full usage report to work from.",
    question: "Which set of levers is most likely to deliver that?",
    options: [
      { id: 'A', text: "Move every job to larger runners, since faster machines consume fewer minutes overall." },
      { id: 'B', text: "Cancel superseded runs with concurrency groups, restrict expensive non-Linux legs to the schedule rather than every pull request, filter triggers by path so unaffected work does not run, and cache dependencies effectively." },
      { id: 'C', text: "Convert all workflows into reusable workflows, which are billed at a lower rate." },
      { id: 'D', text: "Increase artifact retention so builds can be reused instead of repeated." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Spend is minutes multiplied by a platform factor, so the effective levers are not running work that nobody needs, not paying the multiplier for expensive platforms on every change, and not repeating downloads, none of which reduce the coverage that actually gates a release. Larger runners are metered at a higher rate so speed rarely compensates, retention affects storage rather than compute, and reusable workflows carry no billing discount.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-actions",
    tags: ["GH-200", "Billing", "Cost Optimisation", "Design"]
  },
  {
    id: "gh-200-242",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Mixing Languages Inside One Composite Action",
    scenario: "A composite action needs one step written in a shell script and another written in Python, and the author would rather not shell out to an interpreter by hand from a shell step.",
    question: "Is that supported?",
    options: [
      { id: 'A', text: "Yes; each run step in a composite action declares its own shell, and the supported values include interpreters such as python as well as several shells." },
      { id: 'B', text: "No; composite actions support only bash, so other languages require a container action." },
      { id: 'C', text: "Yes, but only by setting a defaults block, which composite actions support." },
      { id: 'D', text: "No; every run step in a composite action must use the same shell, declared once for the action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The shell key is declared per run step and, being mandatory in a composite action, is naturally set to whatever each step needs, with several shells and interpreters supported, so mixing languages within one action is entirely normal. There is no requirement for a single shell across the action, composite actions do not support a defaults block, and the available shells go well beyond bash.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/creating-a-composite-action",
    tags: ["GH-200", "Custom Actions", "Composite", "Shell"]
  },
  {
    id: "gh-200-243",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "An Action That Must Never Run Twice at Once",
    scenario: "An action mutates shared external state and is unsafe if two runs execute concurrently. The author looks for a way to declare that constraint in the action metadata so consumers cannot get it wrong.",
    question: "What is the situation?",
    options: [
      { id: 'A', text: "Serialisation is a property of runs rather than of actions, so the metadata cannot express it; the action should document that callers must place it in a concurrency group, and where possible take a lock in the external system so correctness does not depend on the caller." },
      { id: 'B', text: "Add a concurrency key to the runs block, which the runner honours across repositories." },
      { id: 'C', text: "Set the action to composite, which serialises its steps globally." },
      { id: 'D', text: "Declare an exclusive input defaulting to true, which the runner interprets as a mutual exclusion request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Concurrency is declared by a workflow or job because it is the run that is being queued, and an action has no way to constrain how it is invoked, so the honest answer combines documentation for callers with a lock held in the system actually being mutated, which is the only place the guarantee can be enforced. There is no concurrency key in action metadata, composite is an action type rather than a locking mechanism, and no input name carries special meaning to the runner.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["GH-200", "Custom Actions", "Concurrency", "Design"]
  },
  {
    id: "gh-200-244",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Deciding Whether an Action Change Is Breaking",
    scenario: "A maintainer plans a release containing three changes: an input renamed, a new optional input with a default, and a bug fix that changes an output value in a case that was previously wrong.",
    question: "How should the release be versioned?",
    options: [
      { id: 'A', text: "As a new major version, because renaming an input breaks every caller passing the old name, and the major version tag should only be moved forward for callers once they have migrated." },
      { id: 'B', text: "As a patch release, because two of the three changes are backwards compatible." },
      { id: 'C', text: "As a minor release, because the new input is additive and renames are considered internal." },
      { id: 'D', text: "As a patch release with the old input kept as an undocumented alias, which is always preferable to a major version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The strictest change governs the version, and removing a name that callers pass breaks them at the first run, so the release is a major one and the moving major tag should not sweep existing consumers onto it. A single breaking change is not offset by compatible ones, renames of a public input are not internal, and an undocumented alias hides the migration rather than avoiding it, though a documented deprecation of the old input across a minor release is the gentler path.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["GH-200", "Custom Actions", "Versioning", "Compatibility"]
  },
  {
    id: "gh-200-245",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Choosing an Action Type for a Simple Wrapper",
    scenario: "A team needs an action that runs three existing command-line tools in sequence with a little argument shaping. It must work on the Linux and macOS runners they use, start quickly, and be easy for the team to read and change.",
    question: "Which type is the best fit?",
    options: [
      { id: 'A', text: "A Docker container action, because it guarantees the tools are present." },
      { id: 'B', text: "None; a sequence of tool invocations must remain inline in each workflow." },
      { id: 'C', text: "A composite action, because it expresses a sequence of steps in the workflow syntax the team already knows, adds no build or image pull, and runs on any platform the underlying tools support." },
      { id: 'D', text: "A JavaScript action, because only that type can shape arguments." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "For orchestrating existing commands a composite action is the lightest option, needing no bundling or image build, running wherever the tools do, and remaining readable to anyone who can read a workflow. A container action would pin the work to Linux runners and add an image pull, a JavaScript action brings a build and bundling process for logic that is a handful of commands, and packaging is precisely what removes the duplication of keeping it inline.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["GH-200", "Custom Actions", "Design", "Composite"]
  },
  {
    id: "gh-200-246",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Who Can Bring a New Self-Hosted Runner Online",
    scenario: "A team wants to attach its own machine to the organization runner pool. A reviewer asks what privilege that requires and whether an ordinary member could do it unnoticed.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "Any member with write access to a repository can register an organization runner." },
      { id: 'B', text: "Registration is unrestricted but runners must be approved before their first job, which is where the control lies." },
      { id: 'C', text: "Registering a runner requires a registration token that only someone with administrative access at the corresponding level can obtain, and the registration is recorded in the audit log." },
      { id: 'D', text: "Registration requires only the organization name, since tokens are needed solely for removal." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Bringing a runner online requires a short-lived registration token that only an administrator at the repository, organization or enterprise level can generate, and the event is recorded so unauthorised additions are visible, which matters because a runner sees the code and secrets of every job dispatched to it. Write access is insufficient, a token is genuinely required, and there is no separate approval step after registration.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners",
    tags: ["GH-200", "Self-hosted Runners", "Access Control", "Auditing"]
  },
  {
    id: "gh-200-247",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Applying Deployment Protection to a Shared Deployment Workflow",
    scenario: "Twelve repositories call one reusable deployment workflow. Approvals and production credentials must apply consistently, and the platform team is deciding where the environment should be declared.",
    question: "Which arrangement works?",
    options: [
      { id: 'A', text: "Declare the environment in each calling workflow, because a reusable workflow cannot declare one." },
      { id: 'B', text: "Declare the environment in the repository that hosts the reusable workflow, whose rules then apply to every caller." },
      { id: 'C', text: "Environments cannot be combined with reusable workflows, so approvals must be implemented as a manual dispatch gate." },
      { id: 'D', text: "Declare the environment on the job inside the reusable workflow, so its protection rules and environment secrets apply to every caller; the environment and its rules are resolved in the calling repository, so each repository must define it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A job inside a reusable workflow may declare an environment, which puts the approval requirement in the shared definition where it cannot be omitted by a caller, but the environment itself belongs to the repository the run executes for, so each calling repository must have one of that name with the appropriate rules and secrets. Callers do not need to declare it themselves, the hosting repository environment is not what applies, and the two features do combine.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Environments", "Governance"]
  },
  {
    id: "gh-200-248",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Alerting on Failed Deployments Across Many Repositories",
    scenario: "A platform team must be paged when any deployment workflow fails in any of sixty repositories, and does not want to add a notification step to sixty workflows.",
    question: "Which integration achieves that centrally?",
    options: [
      { id: 'A', text: "Add a scheduled workflow in one repository that polls the API for every other repository." },
      { id: 'B', text: "Enable email notifications for the platform team on each repository." },
      { id: 'C', text: "Subscribe an organization-level webhook to workflow run and deployment status events and route failures to the alerting system, so no repository workflow has to change." },
      { id: 'D', text: "Configure a required status check that pages on failure." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Webhooks can be subscribed at organization level, so a single subscription receives workflow run and deployment status events from every repository beneath it and can be routed to an alerting system without touching any workflow. Email notifications are per person and unsuited to paging, polling adds latency and rate limit pressure while duplicating an event stream that already exists, and status checks gate merges rather than notify.",
    referenceUrl: "https://docs.github.com/en/webhooks/about-webhooks",
    tags: ["GH-200", "Webhooks", "Monitoring", "Operations"]
  },
  {
    id: "gh-200-249",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "What a Periodic Actions Governance Review Should Cover",
    scenario: "An organization is establishing a quarterly review of its Actions configuration, and wants the agenda to focus on the settings where drift causes real exposure rather than on cosmetic items.",
    question: "Which set of items belongs on that agenda?",
    options: [
      { id: 'A', text: "The allowed actions policy and its allow list, default token permissions, runner group membership and repository access, stored secrets and their scope and age, and the cloud trust policies that accept identity tokens." },
      { id: 'B', text: "Workflow file formatting, job naming conventions and badge placement in each README." },
      { id: 'C', text: "The number of workflow runs per repository and the average run duration." },
      { id: 'D', text: "The list of Marketplace actions by popularity, and which teams use the most minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each item on the first list is a control whose quiet loosening grants real capability: which third-party code may execute, what the default token can do, which machines see which repositories, which credentials still exist and how widely they are readable, and which workflow identities a cloud provider will trust. Formatting and naming are style, run counts and durations are performance and cost signals, and popularity is not a security property.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Governance", "Security Review", "Policy"]
  },
  {
    id: "gh-200-250",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Layering Controls Around an Untrusted Build Step",
    scenario: "A workflow must build code from an untrusted contribution and then, separately, publish a signed artifact if the build passes. A reviewer asks how to arrange this so the publishing capability is never available while untrusted code executes.",
    question: "Which arrangement satisfies that?",
    options: [
      { id: 'A', text: "Run both in one job on an ephemeral runner, since the runner being discarded prevents credential reuse." },
      { id: 'B', text: "Run the untrusted build in a job with no secrets and a token holding no write scopes, hand its result forward as an artifact, and perform signing and publishing in a separate job that holds the credentials and never executes contributor code." },
      { id: 'C', text: "Run the build with continue-on-error and publish regardless, checking signatures afterwards." },
      { id: 'D', text: "Run both in one job, granting the write scopes only from the publishing step onward using a step-level permissions block." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Separating the two into different jobs is what creates the boundary, because scopes and secrets are granted per job, so the job that runs contributor code holds nothing worth stealing and the job that holds the credentials runs only code the maintainers control, with the artifact as the narrow interface between them. Permissions cannot be granted at step level so the second option is not expressible, an ephemeral runner does not stop a credential being used while the job is live, and publishing regardless of the build result abandons the gate entirely.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["GH-200", "Security", "Job Design", "Permissions"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_10;
