export const GITHUB_ACTIONS_FLASHCARDS_6 = [
  {
    id: "github-actions-fc-126",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    front: "The Three Types of Custom GitHub Actions",
    hint: "Composite actions, JavaScript actions, and Docker container actions.",
    back: "GitHub Actions supports three custom action architectures: <strong>Composite actions</strong> (grouping shell/action steps), <strong>JavaScript actions</strong> (running directly on the runner VM), and <strong>Docker container actions</strong> (Linux-only isolated container).",
    tags: ["Custom Actions", "Architecture", "Composite", "Docker"]
  },
  {
    id: "github-actions-fc-127",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    front: "The action.yml Metadata File",
    hint: "The required manifest defining custom action inputs, outputs, and execution mode.",
    back: "Every custom action requires an <strong><code>action.yml</code></strong> (or <code>action.yaml</code>) metadata file at its root defining the action's name, description, inputs, outputs, branding, and <code>runs:</code> specification.",
    tags: ["action.yml", "Metadata", "Custom Actions"]
  },
  {
    id: "github-actions-fc-128",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Composite Actions: runs.using: 'composite'",
    hint: "Bundling multiple run steps into a single reusable action.",
    back: "A composite action defines <strong><code>runs.using: 'composite'</code></strong> and lists steps under <code>runs.steps:</code>. Every <code>run:</code> step in a composite action must explicitly specify <strong><code>shell: bash</code></strong> (or another shell).",
    tags: ["Composite Actions", "action.yml", "Syntax"]
  },
  {
    id: "github-actions-fc-129",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Composite Actions: Shell Requirement",
    hint: "Why shell: is mandatory for every run step in composite actions.",
    back: "Unlike workflow steps which inherit default shells from the runner OS, composite action steps do not inherit runner defaults. You must explicitly declare <strong><code>shell: bash</code></strong> (or sh/pwsh) on every <code>run:</code> step.",
    tags: ["Composite Actions", "Shell", "Gotchas"]
  },
  {
    id: "github-actions-fc-130",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Defining Action Inputs in action.yml",
    hint: "Specifying required parameters, default values, and descriptions.",
    back: "Under <strong><code>inputs:</code></strong> in <code>action.yml</code>, declare each parameter with <code>description:</code>, <code>required: true|false</code>, and optional <code>default: 'value'</code>. Workflows provide values via <code>with:</code>.",
    tags: ["Inputs", "action.yml", "Parameters"]
  },
  {
    id: "github-actions-fc-131",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Accessing Inputs in Composite Actions",
    hint: "Dereferencing inputs using the inputs context.",
    back: "Inside composite actions, reference inputs using the <strong><code>${{ inputs.&lt;input_name&gt; }}</code></strong> expression syntax within step commands and parameters.",
    tags: ["Composite Actions", "inputs", "Expressions"]
  },
  {
    id: "github-actions-fc-132",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Defining Action Outputs in action.yml",
    hint: "Mapping step outputs to the public interface of the custom action.",
    back: "Under <strong><code>outputs:</code></strong> in <code>action.yml</code>, declare each output and map it to a step output: <code>outputs: { build-id: { value: '${{ steps.compile.outputs.id }}' } }</code>.",
    tags: ["Outputs", "action.yml", "Parameters"]
  },
  {
    id: "github-actions-fc-133",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    front: "JavaScript Actions: Node.js Runtime",
    hint: "High-speed execution running on Node 20 runtime directly on host VM.",
    back: "JavaScript actions execute directly on the runner VM using Node.js, specified as <strong><code>runs.using: 'node20'</code></strong> in <code>action.yml</code> with an entrypoint file (e.g. <code>main: 'dist/index.js'</code>).",
    tags: ["JavaScript Actions", "Node.js", "Runtime"]
  },
  {
    id: "github-actions-fc-134",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Packaging JavaScript Actions with @vercel/ncc",
    hint: "Bundling node_modules and dependencies into a single distribution file.",
    back: "Because runners do not run <code>npm install</code> on action checkout, authors must compile their source code and all <code>node_modules</code> into a single self-contained <code>dist/index.js</code> using <strong><code>@vercel/ncc</code></strong> or esbuild.",
    tags: ["JavaScript Actions", "Packaging", "ncc", "Build"]
  },
  {
    id: "github-actions-fc-135",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "The @actions/core Toolkit Package",
    hint: "Official helper library for reading inputs, writing outputs, and logging.",
    back: "The <strong><code>@actions/core</code></strong> npm package provides helper methods for JS actions: <code>core.getInput('name')</code>, <code>core.setOutput('name', value)</code>, <code>core.setFailed(message)</code>, and <code>core.info()</code>.",
    tags: ["@actions/core", "Toolkit", "JavaScript Actions"]
  },
  {
    id: "github-actions-fc-136",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Setting Failure Status in JS Actions: core.setFailed",
    hint: "Failing a custom action step cleanly with exit code 1.",
    back: "Calling <strong><code>core.setFailed('Error message')</code></strong> logs an error message and sets the step exit code to 1, signaling failure to GitHub Actions without throwing unhandled exceptions.",
    tags: ["@actions/core", "setFailed", "Error Handling"]
  },
  {
    id: "github-actions-fc-137",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "The @actions/github Toolkit Package",
    hint: "Official Octokit wrapper providing pre-authenticated API client and context.",
    back: "The <strong><code>@actions/github</code></strong> package provides a pre-authenticated Octokit REST/GraphQL client (<code>github.getOctokit(token)</code>) and exposes runtime event payloads via <code>github.context</code>.",
    tags: ["@actions/github", "Octokit", "API", "Toolkit"]
  },
  {
    id: "github-actions-fc-138",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "The @actions/exec Toolkit Package",
    hint: "Running command-line CLI executables from within JavaScript actions.",
    back: "The <strong><code>@actions/exec</code></strong> package provides <code>exec.exec('command', ['args'])</code> to execute system binaries and capture stdout/stderr from JavaScript actions with streaming log support.",
    tags: ["@actions/exec", "Toolkit", "CLI"]
  },
  {
    id: "github-actions-fc-139",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    front: "Docker Container Actions: Operating System Limitation",
    hint: "Docker container actions execute exclusively on Linux runners.",
    back: "<strong>Docker container actions</strong> can only execute on <strong>Linux runners</strong> (e.g. <code>ubuntu-latest</code> or Linux self-hosted). They cannot run on Windows or macOS runners because GitHub Actions does not support container jobs on non-Linux OS.",
    tags: ["Docker Actions", "Linux", "Runners", "Limitations"]
  },
  {
    id: "github-actions-fc-140",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Docker Container Actions: action.yml Syntax",
    hint: "Using runs: 'docker' and pointing to a Dockerfile or public image.",
    back: "In <code>action.yml</code>, specify <strong><code>runs.using: 'docker'</code></strong> and <code>runs.image: 'Dockerfile'</code> (or an image from Docker Hub / GHCR like <code>docker://alpine:3.18</code>) with optional <code>args:</code> and <code>entrypoint:</code>.",
    tags: ["Docker Actions", "action.yml", "Syntax"]
  },
  {
    id: "github-actions-fc-141",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Passing Inputs and Environment to Docker Actions",
    hint: "Inputs passed as INPUT_ uppercase environment variables.",
    back: "GitHub Actions converts action inputs into environment variables prefixed with <code>INPUT_</code> and converted to uppercase (e.g. input <code>my-token</code> becomes <strong><code>INPUT_MY-TOKEN</code></strong>) inside the container.",
    tags: ["Docker Actions", "Inputs", "Environment"]
  },
  {
    id: "github-actions-fc-142",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Action Pre and Post Steps: Lifecycle Hooks",
    hint: "Running setup before the main action and cleanup after the job completes.",
    back: "In <code>action.yml</code>, authors can declare <strong><code>pre:</code></strong> (runs before any main steps, e.g. starting a daemon) and <strong><code>post:</code></strong> (runs at job termination, e.g. terminating processes or flushing logs).",
    tags: ["Action Lifecycle", "pre", "post", "Hooks"]
  },
  {
    id: "github-actions-fc-143",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "State Persistence Between Pre, Main, and Post Steps",
    hint: "Saving state in main execution and reading it during post cleanup.",
    back: "Use <code>core.saveState('key', 'value')</code> in the main step and read it in the post step using <code>core.getState('key')</code> to pass process IDs or temporary directory paths for cleanup.",
    tags: ["saveState", "getState", "Lifecycle", "@actions/core"]
  },
  {
    id: "github-actions-fc-144",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d3",
    front: "Action Branding in action.yml",
    hint: "Customizing marketplace badges with Feather icons and colors.",
    back: "The <strong><code>branding:</code></strong> block in <code>action.yml</code> accepts an <code>icon:</code> (from Feather icons, e.g. <code>shield</code>, <code>check-circle</code>) and a <code>color:</code> (e.g. <code>green</code>, <code>blue</code>, <code>purple</code>) displayed in the Marketplace.",
    tags: ["Branding", "action.yml", "Marketplace"]
  },
  {
    id: "github-actions-fc-145",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Publishing Custom Actions to GitHub Marketplace",
    hint: "Public repository, action.yml at root, and semver git release tag.",
    back: "To publish to GitHub Marketplace, the repository must be <strong>public</strong>, contain an <code>action.yml</code> at the root, have unique metadata branding, and be published via an official GitHub Release with a semver tag.",
    tags: ["Marketplace", "Publishing", "Releases"]
  },
  {
    id: "github-actions-fc-146",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Versioning Best Practices for Custom Actions",
    hint: "Moving major version tags alongside specific semantic patch tags.",
    back: "When releasing <code>v2.1.4</code>, authors create the specific tag <code>v2.1.4</code> and force-update the moving major tag <strong><code>v2</code></strong> to point to that same commit, allowing consumers pinned to <code>@v2</code> to receive non-breaking fixes.",
    tags: ["Versioning", "SemVer", "Git Tags", "Best Practices"]
  },
  {
    id: "github-actions-fc-147",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Testing Custom Actions Locally with act",
    hint: "Simulating GitHub Actions workflow runs locally using Docker containers.",
    back: "The open-source tool <strong><code>act</code></strong> reads your <code>.github/workflows/</code> and executes jobs locally inside Docker containers mimicking GitHub-hosted runners, enabling fast local debugging without pushing commits.",
    tags: ["act", "Local Testing", "Debugging", "Docker"]
  },
  {
    id: "github-actions-fc-148",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Automated CI/CD for Custom Actions",
    hint: "Building dist/ bundle and running unit tests before releasing action versions.",
    back: "Custom action repositories should maintain their own Actions workflow that compiles TypeScript with <code>@vercel/ncc</code>, runs Jest unit tests, verifies formatting, and checks that <code>dist/index.js</code> is up to date.",
    tags: ["CI/CD", "Testing", "Action Development"]
  },
  {
    id: "github-actions-fc-149",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d3",
    front: "Handling Sensitive Inputs in Custom Actions",
    hint: "Ensuring secret values passed via with: are masked immediately.",
    back: "Custom actions receiving sensitive credentials must ensure the values are registered with <strong><code>core.setSecret(val)</code></strong> if generated internally, guaranteeing masking in runner logs.",
    tags: ["Security", "setSecret", "Masking", "Custom Actions"]
  },
  {
    id: "github-actions-fc-150",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Composite Action Calling Other Actions",
    hint: "Nesting third-party actions inside composite action steps.",
    back: "Inside <code>runs.steps:</code> of a composite action, you can use <strong><code>uses: actions/checkout@v4</code></strong> or other actions alongside <code>run:</code> steps, creating high-level modular building blocks.",
    tags: ["Composite Actions", "uses", "Modularity"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_6;
