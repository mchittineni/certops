export const GITHUB_ACTIONS_QUESTIONS_8 = [
  {
    id: "gh-200-176",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Checks Required by a Merge Queue",
    scenario: "A repository enables a merge queue. Required checks now report against a temporary branch the queue creates that combines several pull requests, and the existing workflow, triggered only by pull_request, never runs for it.",
    question: "What must the workflow subscribe to?",
    options: [
      { id: 'A', text: "The merge_group event, which fires when the queue asks for checks against the combined branch." },
      { id: 'B', text: "Nothing; the queue reuses the pull request check results from before enqueueing." },
      { id: 'C', text: "The push event with a branches filter matching the queue temporary branch pattern." },
      { id: 'D', text: "The workflow_run event chained to the existing pull request workflow." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A merge queue builds a candidate branch containing the pull requests ahead in the queue and raises a merge_group event asking for checks against it, so a workflow that must gate the queue has to subscribe to that event as well as to pull_request. Matching the temporary branch by pattern is fragile and undocumented, chaining from the pull request workflow tests the wrong commit, and the queue deliberately re-runs checks because the combination is what it needs to verify.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Merge Queue", "Triggers", "Status Checks"]
  },
  {
    id: "gh-200-177",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Recording Who Re-Ran a Failed Deployment",
    scenario: "An audit needs to record the person who caused each deployment attempt. On a re-run of a failed deployment the workflow currently records the original author rather than the engineer who pressed the re-run button.",
    question: "Which context value identifies the latter?",
    options: [
      { id: 'A', text: "The github.actor value, which is updated on each attempt." },
      { id: 'B', text: "The github.run_attempt value, which encodes the account." },
      { id: 'C', text: "There is no such value; the re-running account is only visible in the audit log." },
      { id: 'D', text: "The github.triggering_actor value, which is the account that initiated this attempt, while github.actor remains the account associated with the original run." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The context exposes both the actor associated with the run and the actor who initiated the current attempt, and the latter is what changes when someone else presses re-run, which is exactly the distinction the audit needs. The actor value is not rewritten per attempt, the attempt number is a counter carrying no identity, and the information is available in the workflow rather than only in the audit log.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Auditing", "Re-runs"]
  },
  {
    id: "gh-200-178",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Collecting Results From Every Leg of a Matrix",
    scenario: "A matrix of five jobs each sets a job output holding its measured duration. A summary job declaring needs on the matrix job reads the output and finds only one value, seemingly at random.",
    question: "What is happening, and what is the usual remedy?",
    options: [
      { id: 'A', text: "All matrix legs write to the same single set of job outputs so they overwrite one another; each leg should upload its result as a distinctly named artifact, or write to a distinctly keyed output, which the summary job then collects." },
      { id: 'B', text: "Only the leg that finishes first is permitted to set an output, so the matrix must be serialised." },
      { id: 'C', text: "Job outputs from a matrix are exposed as an array in the needs context, so the summary job is reading it incorrectly." },
      { id: 'D', text: "Matrix jobs cannot set outputs at all, and the single value observed comes from a default." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A matrix expands into several jobs that nonetheless share one job identifier and therefore one output map, so each leg overwrites the previous value and the survivor depends on completion order; collecting per-leg results means giving each one a distinct destination, most commonly an artifact named after its matrix values that a summary job downloads together. Outputs are not aggregated into an array, every leg may write, and matrix jobs can set outputs.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs",
    tags: ["GH-200", "Matrix", "Job Outputs", "Artifacts"]
  },
  {
    id: "gh-200-179",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "A Cache Key That Silently Collapses",
    scenario: "A cache key is composed from the runner platform and a hash of a lockfile that was later renamed. Since the rename every branch shares one key and restores an unrelated cache.",
    question: "What is the underlying behaviour?",
    options: [
      { id: 'A', text: "Cache keys are truncated to the platform portion once they exceed a length limit." },
      { id: 'B', text: "The hash function returns an empty string when its pattern matches no files, so the varying portion of the key vanished and every run now computes the same key." },
      { id: 'C', text: "The hash function fails the step when its pattern matches no files, so the observed behaviour must have another cause." },
      { id: 'D', text: "The hash function falls back to hashing the repository contents, which is identical across branches at that commit." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When no file matches the supplied pattern the hash function returns an empty string rather than failing, so a key built by concatenation quietly loses its distinguishing part and collapses to a constant, which is exactly the symptom described and a good argument for asserting that the dependency file exists. It does not fail the step, there is no fallback to hashing the whole repository, and keys are not truncated in that way.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/expressions",
    tags: ["GH-200", "Caching", "hashFiles", "Troubleshooting"]
  },
  {
    id: "gh-200-180",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Saving a Cache Only When the Build Succeeded",
    scenario: "The standard cache step saves at the end of the job even when the build failed part way through, which has repeatedly persisted a half-populated dependency directory that later runs then restore.",
    question: "Which approach gives control over when the save happens?",
    options: [
      { id: 'A', text: "Add a condition to the main cache step, which controls both restore and save together." },
      { id: 'B', text: "Add continue-on-error to the cache step so it declines to save after a failure." },
      { id: 'C', text: "Set a shorter retention on the cache so a bad entry expires quickly." },
      { id: 'D', text: "Use the separate restore and save actions, placing the restore at the start and the save at a point of the job that is only reached after a successful build." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The cache functionality is also published as separate restore and save actions precisely so the two halves can be placed independently, letting the save be conditioned on the build having succeeded. Tolerating errors on the combined step does not change its post-job save behaviour, retention does not stop a bad entry being served in the meantime, and conditioning the combined step would also skip the restore.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["GH-200", "Caching", "Reliability"]
  },
  {
    id: "gh-200-181",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Making a Locally Built Tool Available to Later Steps",
    scenario: "A step compiles a helper binary into a directory inside the workspace. Later steps invoke it by bare name and fail because it is not on the executable search path.",
    question: "Which mechanism adds it?",
    options: [
      { id: 'A', text: "Add a defaults block naming the directory as an executable path." },
      { id: 'B', text: "Set a PATH entry in the step env block, which persists to later steps." },
      { id: 'C', text: "Copy the binary into the runner tool cache, which is always on the search path." },
      { id: 'D', text: "Append the directory to the file named by GITHUB_PATH, which the runner prepends to the search path for every subsequent step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Writing a directory to the path file asks the runner to prepend it to the search path of every later step in the job, which is the supported way to publish something built during the run. A step env entry applies only to that step, the tool cache is a location for installed toolchains rather than an automatically searched path, and the defaults block covers shell and working directory rather than the search path.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions",
    tags: ["GH-200", "Workflow Commands", "GITHUB_PATH"]
  },
  {
    id: "gh-200-182",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reacting to the Outcome of a Deployment Made Elsewhere",
    scenario: "Deployments are performed by an external delivery tool that reports its progress back as deployment statuses. A workflow should run smoke tests whenever a deployment is reported successful, regardless of which system performed it.",
    question: "Which trigger fits?",
    options: [
      { id: 'A', text: "The release event with a published type." },
      { id: 'B', text: "The workflow_run event, which fires for deployments made by external systems." },
      { id: 'C', text: "The push event on the deployed branch." },
      { id: 'D', text: "The deployment_status event, with a condition on the state carried in the payload." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deployment statuses are first-class objects that any system can create, and the deployment_status event fires when one is recorded, carrying the state so the workflow can act only on success. The workflow_run event chains to other workflow runs in the same repository rather than to external deployments, a push happens before deployment and says nothing about its outcome, and releases are a separate concept.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",
    tags: ["GH-200", "Triggers", "Deployments", "Integration"]
  },
  {
    id: "gh-200-183",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Reaching a Service Container From a Job Running Directly on the Runner",
    scenario: "A job declares a database service container and runs its steps directly on the runner rather than inside a job container. The steps cannot reach the database by the service name.",
    question: "What is the correct access path?",
    options: [
      { id: 'A', text: "Map the container port to the host with a ports entry and connect over localhost on the mapped port, because hostname resolution by service name is available to steps running inside a job container rather than directly on the runner." },
      { id: 'B', text: "Add a network entry to the service so the runner joins the container network, since ports cannot be mapped." },
      { id: 'C', text: "Reference the service by its container identifier, which the runner resolves for both cases." },
      { id: 'D', text: "Service containers are only usable from a job container, so the job must be moved into one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "How a service is reached depends on where the steps run: inside a job container the services are on the same network and resolvable by their label, while steps running directly on the runner reach them through a published port on localhost, which is what the ports entry configures. There is no network key that puts the host on the container network, container identifiers are not resolvable names, and service containers are usable from both arrangements.",
    referenceUrl: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
    tags: ["GH-200", "Service Containers", "Networking"]
  },
  {
    id: "gh-200-184",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Naming Artifacts So Re-Runs Do Not Collide",
    scenario: "A job uploads an artifact named after the workflow. On a re-run of the same run the upload fails because an artifact of that name already exists from the earlier attempt.",
    question: "Which context value makes the name unique per attempt?",
    options: [
      { id: 'A', text: "The github.run_id value, which is different on each attempt." },
      { id: 'B', text: "The github.run_attempt value, which increments with each attempt of the same run." },
      { id: 'C', text: "The github.sha value, which differs between attempts of the same run." },
      { id: 'D', text: "The github.run_number value, which increments per attempt." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Re-running produces a new attempt of the same run, so the run identifier and the run number are unchanged and only the attempt counter advances, which makes it the value that disambiguates artifact names between attempts. The commit is by definition the same across attempts, which is the whole point of re-running.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Contexts", "Artifacts", "Re-runs"]
  },
  {
    id: "gh-200-185",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and maintain workflows",
    title: "Concurrency at the Workflow Level Versus the Job Level",
    scenario: "A workflow builds, then deploys. Overlapping builds should supersede one another freely, but deployments must never overlap and must never be cancelled once started.",
    question: "How should concurrency be declared?",
    options: [
      { id: 'A', text: "Declare one workflow-level concurrency block with cancel-in-progress enabled, which the deploy job is exempt from." },
      { id: 'B', text: "Declare concurrency on the build job with cancel-in-progress enabled, and separately on the deploy job with a different group and cancel-in-progress disabled, rather than one workflow-level block." },
      { id: 'C', text: "Concurrency can only be declared at workflow level, so the deployment must be moved to a separate workflow." },
      { id: 'D', text: "Declare one workflow-level block with cancel-in-progress disabled, which gives builds the supersede behaviour automatically." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A workflow-level concurrency block governs the whole run with one policy, which cannot express two different behaviours, whereas job-level blocks let the build supersede its predecessors while the deployment queues and runs to completion. There is no exemption mechanism for a job under a workflow-level block, disabling cancellation globally would make builds queue rather than supersede, and concurrency is available at job level as well as workflow level.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/using-concurrency",
    tags: ["GH-200", "Concurrency", "Deployments", "Design"]
  },
  {
    id: "gh-200-186",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Two Overlapping Ways to Cache Dependencies",
    scenario: "A workflow uses a language setup action that offers a caching option, and also has a separate general cache step configured with a hand-written key for the same dependency directory. Cache statistics show both writing entries.",
    question: "What is the appropriate simplification?",
    options: [
      { id: 'A', text: "Keep both, because each writes to a different storage pool and neither counts against the repository cache quota." },
      { id: 'B', text: "Keep the setup action caching option for the standard dependency directory, since it derives an appropriate key and path automatically, and reserve a separate cache step for anything the setup action does not cover." },
      { id: 'C', text: "Remove the setup action caching option, because a hand-written key is always more precise." },
      { id: 'D', text: "Replace both with an artifact uploaded at the end of the job and downloaded at the start of the next." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setup actions for common language toolchains build on the same cache service and already know the standard directory and a sensible key derived from the lockfile, so letting them handle the ordinary case removes hand-maintained key logic while a separate step still covers anything unusual. Both mechanisms consume the same repository quota rather than separate pools, and artifacts are not a substitute for a cache since they are neither keyed nor restored automatically.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
    tags: ["GH-200", "Caching", "Setup Actions", "Design"]
  },
  {
    id: "gh-200-187",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Interpreting an Unfamiliar Run Conclusion",
    scenario: "A dashboard built on the API groups runs by conclusion. Alongside success and failure it encounters conclusions of skipped, cancelled, timed_out and action_required, and the author must decide how to treat each.",
    question: "Which reading is correct?",
    options: [
      { id: 'A', text: "All four are variants of failure and should be alerted on identically." },
      { id: 'B', text: "Skipped means conditions excluded the work, cancelled means it was stopped deliberately or superseded, timed_out means a limit was reached, and action_required means the run is waiting on a human such as an environment approval or a fork approval." },
      { id: 'C', text: "The conclusion field only ever holds success or failure; the other values appear in the status field instead." },
      { id: 'D', text: "Skipped and cancelled are failures, while timed_out and action_required are successes with a note." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The conclusion field distinguishes several genuinely different endings, and treating them as one blurs a deliberate cancellation, work that was correctly excluded, a real timeout worth investigating and a run parked awaiting an approval that someone must give. They are not all failures, none of them are successes, and the status field reports whether a run is queued, in progress or completed rather than carrying these values.",
    referenceUrl: "https://docs.github.com/en/rest/actions/workflow-runs",
    tags: ["GH-200", "API", "Monitoring", "Run Status"]
  },
  {
    id: "gh-200-188",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Driving an Autoscaler From Platform Events",
    scenario: "A custom autoscaler must add runner capacity the moment a job is queued for a particular label, rather than discovering the backlog by polling the API every minute.",
    question: "Which integration is designed for that?",
    options: [
      { id: 'A', text: "Have each workflow call the autoscaler from its first step, before requesting a runner." },
      { id: 'B', text: "Subscribe to the workflow_run webhook, which fires once per job with its labels." },
      { id: 'C', text: "Poll the self-hosted runner API endpoint, which is the only supported source of queue depth." },
      { id: 'D', text: "Subscribe to the workflow_job webhook, whose queued, in_progress and completed activities carry the requested labels, and scale in response." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The workflow_job webhook reports individual job lifecycle transitions together with the labels the job requested, which is exactly the signal an autoscaler needs and is what the supported runner controller consumes. The workflow_run webhook fires per run rather than per job and carries no label information, polling is the latency problem being solved, and a step inside the job cannot run before a runner exists to run it.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads",
    tags: ["GH-200", "Webhooks", "Autoscaling", "Integration"]
  },
  {
    id: "gh-200-189",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Tightening Approval Beyond First-Time Contributors",
    scenario: "A repository already requires approval before workflows run for first-time contributors. A recent incident involved an established outside collaborator, and the team wants every contribution from outside the organization to be approved before any workflow runs.",
    question: "Which setting expresses that?",
    options: [
      { id: 'A', text: "Change the fork pull request approval setting to require approval for all outside collaborators." },
      { id: 'B', text: "Enable required reviewers on an environment, which also gates whether workflows start." },
      { id: 'C', text: "Add every outside collaborator to a team with read access, which triggers approval automatically." },
      { id: 'D', text: "Disable Actions for the repository and re-enable it per pull request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The fork pull request approval control offers progressively stricter levels, and requiring approval for all outside collaborators extends the gate from newcomers to everyone outside the organization, which is precisely the change described. Disabling Actions is disproportionate and unworkable, team membership does not drive this gate, and environment reviewers hold a deployment mid-run rather than preventing a workflow from starting.",
    referenceUrl: "https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks",
    tags: ["GH-200", "Forks", "Approval", "Governance"]
  },
  {
    id: "gh-200-190",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Breaking Up a Workflow That Has Grown Unmaintainable",
    scenario: "A single workflow file has reached six hundred lines. Three blocks of steps are copied verbatim into four jobs, and two whole jobs are duplicated in five other repositories.",
    question: "Which decomposition matches each kind of duplication?",
    options: [
      { id: 'A', text: "Leave the file intact and add comments, because splitting increases the number of places to maintain." },
      { id: 'B', text: "Extract the repeated step blocks into composite actions used within jobs, and extract the duplicated jobs into a reusable workflow that the five repositories call." },
      { id: 'C', text: "Extract everything into reusable workflows, since composite actions cannot be shared between repositories." },
      { id: 'D', text: "Extract everything into composite actions, since reusable workflows cannot accept inputs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The two kinds of duplication call for different tools: repeated steps inside a job are what a composite action packages, while whole jobs duplicated across repositories are what a reusable workflow packages, and applying each to its own case keeps the abstraction honest. Composite actions are shareable across repositories, reusable workflows do accept typed inputs, and comments do not address duplication that has already spread to five repositories.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
    tags: ["GH-200", "Reusable Workflows", "Composite Actions", "Refactoring"]
  },
  {
    id: "gh-200-191",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Finding Why a Workflow Did Not Start At All",
    scenario: "An engineer expects a workflow to have run after a push but sees no run in the list, no failure and no annotation anywhere.",
    question: "Which explanations should be checked first?",
    options: [
      { id: 'A', text: "Whether the runner pool is exhausted, which removes runs from the list rather than queueing them." },
      { id: 'B', text: "Whether the previous run is still in progress, since only one run per workflow can exist at a time." },
      { id: 'C', text: "Whether the trigger filters exclude the branch or paths that changed, whether the workflow is disabled, whether the commit message carried a skip directive, and whether the file is valid and on the branch the event concerns." },
      { id: 'D', text: "Whether artifact storage is full, which prevents runs from being created." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A missing run rather than a failing one means no run was created, so the causes lie in whether the event matched the trigger at all, whether the workflow is enabled, whether a skip directive suppressed it and whether a valid file exists on the relevant branch. Runner exhaustion produces queued runs that are visible, storage limits affect uploads within a run, and workflows are not limited to one run at a time unless a concurrency group says so.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting",
    tags: ["GH-200", "Troubleshooting", "Triggers"]
  },
  {
    id: "gh-200-192",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "An Action Fetching an Asset Matching Its Own Version",
    scenario: "A composite action downloads a helper binary published as a release asset of the action own repository. Hard-coding the version means the action and its helper drift apart whenever one is released without the other.",
    question: "Which context values let the action resolve its own identity?",
    options: [
      { id: 'A', text: "The github.action_repository and github.action_ref values, which name the repository the running action came from and the reference it was called with." },
      { id: 'B', text: "There is no such value; the version must be passed in as an input by every caller." },
      { id: 'C', text: "The github.repository and github.ref values, which name the action repository during action execution." },
      { id: 'D', text: "The github.workflow_ref value, which encodes the action version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "While an action is executing the context exposes the repository the action itself came from and the reference the caller used, which lets the action fetch an asset matching the exact version being run and keeps the two in step automatically. The plain repository and ref values describe the consuming repository and its event rather than the action, the workflow reference identifies the workflow file, and requiring every caller to pass a version is the coupling being removed.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["GH-200", "Custom Actions", "Contexts", "Versioning"]
  },
  {
    id: "gh-200-193",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Files Created by a Container Action Breaking Later Steps",
    scenario: "A Docker container action writes generated files into the workspace. Steps that run after it on the runner fail with permission errors when they try to modify or delete those files, and a cleanup step cannot remove the directory.",
    question: "What is the cause, and how is it usually addressed?",
    options: [
      { id: 'A', text: "Container actions run in a separate workspace that is discarded, so the later failures are unrelated." },
      { id: 'B', text: "The runner deliberately locks files written by an action to preserve them for artifact upload." },
      { id: 'C', text: "The container runs as root by default, so files it creates in the mounted workspace are owned by root while later steps run as the unprivileged runner user; the action should create files as the calling user or adjust ownership before exiting." },
      { id: 'D', text: "The workspace is mounted read-only into the container, so the files are actually copies that later steps cannot see." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A container action executes as root unless told otherwise, and because the workspace is bind-mounted the ownership of anything it creates persists into the rest of the job, where steps run as the ordinary runner account and cannot modify it. Handling ownership inside the action, or running it as the calling user, avoids the trap. The workspace is mounted writable and shared rather than read-only or separate, and the runner does not lock files.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Docker", "Filesystem"]
  },
  {
    id: "gh-200-194",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "Required Fields in Action Metadata",
    scenario: "An author creates a metadata file containing only a runs block, expecting the other fields to be optional, and every workflow referencing the action fails validation before any step executes.",
    question: "Which fields must be present?",
    options: [
      { id: 'A', text: "The name, author and runs fields are required, while description is optional." },
      { id: 'B', text: "The name, description and runs fields are required, with inputs, outputs and branding optional, and the file may be called action.yml or action.yaml." },
      { id: 'C', text: "Only the runs field is required; the failure must come from the runs block contents." },
      { id: 'D', text: "All of name, description, author, inputs, outputs and runs are required." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Action metadata must declare a name, a description and a runs block, while inputs, outputs, author and branding are optional, and either the yml or yaml spelling of the filename is accepted at the referenced path. The runs block alone is insufficient, the description is required rather than the author, and the remaining fields are genuinely optional.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions",
    tags: ["GH-200", "Custom Actions", "Metadata"]
  },
  {
    id: "gh-200-195",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    domainName: "Author and maintain actions",
    title: "What an Action Owner Should Document",
    scenario: "An internal action has grown three inputs and two outputs. Consumers keep raising issues asking what the inputs mean, what permissions the calling job needs and which platforms are supported.",
    question: "Which documentation practice addresses these directly?",
    options: [
      { id: 'A', text: "Reply to each issue individually, since a versioned action cannot document behaviour that varies by version." },
      { id: 'B', text: "Rely on the Marketplace listing, which is generated from the code and covers permissions automatically." },
      { id: 'C', text: "Add the explanations as comments inside the action implementation, where maintainers will see them." },
      { id: 'D', text: "Write a description for every input and output in the metadata so the contract is machine-readable, and cover the required token permissions, supported runner platforms and a worked usage example in the README." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Descriptions in the metadata document the contract where tooling and readers of the file will find it, while the permissions a calling job must grant, the platforms the action is verified on and a complete usage example belong in the README because none of them can be inferred from the metadata. Implementation comments are invisible to consumers, listings are not generated from the code and do not describe required permissions, and versioned documentation is entirely normal.",
    referenceUrl: "https://docs.github.com/en/actions/creating-actions/about-custom-actions",
    tags: ["GH-200", "Custom Actions", "Documentation"]
  },
  {
    id: "gh-200-196",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Proving Where a Release Binary Was Built",
    scenario: "A supply chain policy requires that consumers can verify a released binary was produced by a specific workflow in a specific repository, rather than uploaded by hand, and can check that claim after download.",
    question: "Which capability provides this?",
    options: [
      { id: 'A', text: "Upload the binary as an artifact rather than a release asset, since artifacts record the producing run." },
      { id: 'B', text: "Publish a checksum file alongside the binary in the same release." },
      { id: 'C', text: "Sign the release commit, which transfers provenance to the built binary." },
      { id: 'D', text: "Generate a build provenance attestation from the workflow, which requires the job to hold id-token: write and attestations: write, and which consumers verify against the repository and workflow identity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Build provenance attestations bind an artifact digest to the workflow identity that produced it and are signed, so a consumer can verify not merely that a file is unmodified but where it came from; the producing job needs both an identity token and permission to write attestations. A checksum published by the same party proves integrity but not origin, artifact metadata is internal and expires, and a signed commit says who authored source rather than what built the binary.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["GH-200", "Supply Chain", "Attestations", "Permissions"]
  },
  {
    id: "gh-200-197",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Restricting a Runner Group to Particular Workflows",
    scenario: "A runner group holds machines with production credentials on disk. Only the deployment workflow of a permitted repository should be able to use them, not the ordinary test workflows in that same repository.",
    question: "Which capability is relevant?",
    options: [
      { id: 'A', text: "An environment protection rule on the group restricts which workflows may target it." },
      { id: 'B', text: "A labels-only approach is sufficient, since only the deployment workflow will request the label." },
      { id: 'C', text: "A runner group may be restricted to selected workflows as well as selected repositories, so the group can name the specific deployment workflow reference." },
      { id: 'D', text: "Runner groups can only be scoped to repositories, so the deployment must be moved into its own repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Runner group access can be narrowed to named workflows in addition to named repositories, which is what allows one repository to reach a sensitive fleet from its deployment workflow while its other workflows cannot. Splitting the repository is unnecessary given that capability, labels are routing hints that any workflow in the repository could request, and environments protect deployments rather than governing runner group access.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["GH-200", "Runner Groups", "Governance", "Security"]
  },
  {
    id: "gh-200-198",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "A Credential Pasted Into a Workflow File",
    scenario: "During review someone notices a live cloud key committed directly into a workflow file three weeks ago. It has since been merged to the default branch and the repository has many forks.",
    question: "What is the correct response, in order?",
    options: [
      { id: 'A', text: "Make the repository private, which withdraws the credential from the forks." },
      { id: 'B', text: "Rewrite the git history to remove the commit, after which the credential is safe to keep using." },
      { id: 'C', text: "Add the value to the mask register so it is redacted in future logs, then leave it in place until the next release." },
      { id: 'D', text: "Revoke and rotate the credential immediately, then remove it from the file and move the replacement into a secret or federated access, treating history rewriting as secondary because the key must be assumed compromised." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Once a secret has been committed and distributed it must be treated as compromised, so revocation and rotation come first and everything else is cleanup; the replacement then belongs in a secret store or, better, is removed entirely by using short-lived federated credentials. History rewriting does not reach clones and forks, masking only affects log rendering, and changing repository visibility does not retract copies people already hold. Enabling push protection afterwards prevents a repeat.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["GH-200", "Secrets", "Incident Response", "Security"]
  },
  {
    id: "gh-200-199",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Lifetime of the Automatic Token",
    scenario: "A long-running job obtains the automatic token in its first step and stores it for a later step. A reviewer asks what the exposure window is if that value were somehow captured.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "The token is issued per repository and remains valid until an administrator rotates it." },
      { id: 'B', text: "The token is issued per job and is invalidated when the job completes, with a maximum lifetime of twenty-four hours, so its window is bounded but a capture during the job is still fully usable." },
      { id: 'C', text: "The token is issued per step and cannot be used by a later step at all." },
      { id: 'D', text: "The token never expires, which is why it must be stored as a secret." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A fresh token is minted for each job, expires when that job finishes and in any case lasts no longer than twenty-four hours, which bounds the damage from a leak but does not eliminate it because anything captured while the job runs can be used immediately with whatever scopes the job requested. It is not a repository-wide standing credential, it is usable across the steps of its job, and it certainly does expire.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication",
    tags: ["GH-200", "GITHUB_TOKEN", "Security", "Tokens"]
  },
  {
    id: "gh-200-200",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Checking Whether a Repository Can Use a Given Runner",
    scenario: "A team reports that their job requesting a self-hosted label stays queued forever. An administrator needs to determine whether the repository is entitled to the runners carrying that label.",
    question: "Where is that answered?",
    options: [
      { id: 'A', text: "In the audit log, which is the only place runner entitlements are recorded." },
      { id: 'B', text: "In the workflow run annotations, which state why a job was not dispatched." },
      { id: 'C', text: "In the repository Actions permissions policy, which lists the runner labels the repository may request." },
      { id: 'D', text: "In the runner group settings at organization or enterprise level, which list the repositories granted access and the runners the group contains." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Entitlement to self-hosted runners is expressed by runner group membership and the repository access list on that group, so the group settings show both which machines are in it and which repositories may use them, which is exactly what an indefinitely queued job points at. The Actions permissions policy governs which actions may run rather than runner labels, the audit log records changes rather than current state, and a queued job produces no annotation explaining the mismatch.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["GH-200", "Runner Groups", "Troubleshooting", "Governance"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_8;
