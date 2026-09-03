export const GITHUB_ACTIONS_FLASHCARDS_4 = [
  {
    id: "github-actions-fc-76",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Reusable Workflows: workflow_call Trigger",
    hint: "Defining parameterized workflows callable from other repositories.",
    back: "A workflow becomes reusable by defining the <strong><code>on: workflow_call</code></strong> trigger. It can accept <code>inputs:</code>, <code>secrets:</code>, and return <code>outputs:</code> to calling workflows.",
    tags: ["Reusable Workflows", "workflow_call", "DRY"]
  },
  {
    id: "github-actions-fc-77",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    front: "Reusable Workflows: Referencing Syntax",
    hint: "Syntax for calling reusable workflows within the same or external repositories.",
    back: "Within the same repo: <code>uses: ./.github/workflows/build.yml</code>. In an external repo: <strong><code>uses: {owner}/{repo}/.github/workflows/build.yml@{ref}</code></strong> where ref is a branch, tag, or SHA.",
    tags: ["Reusable Workflows", "uses", "Syntax"]
  },
  {
    id: "github-actions-fc-78",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Passing Secrets to Reusable Workflows: secrets: inherit",
    hint: "Passing all caller secrets implicitly to the called workflow.",
    back: "Use <strong><code>secrets: inherit</code></strong> in the calling job to pass all secrets from the caller to the reusable workflow automatically, eliminating tedious one-by-one secret mapping.",
    tags: ["Reusable Workflows", "secrets", "inherit"]
  },
  {
    id: "github-actions-fc-79",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    front: "Reusable Workflows: Nesting Limits",
    hint: "Maximum depth of nested reusable workflow invocations.",
    back: "GitHub Actions allows a maximum nesting depth of <strong>up to 4 levels</strong> of reusable workflows (Caller \u2192 Reusable 1 \u2192 Reusable 2 \u2192 Reusable 3 \u2192 Reusable 4). Deeper nesting fails validation.",
    tags: ["Reusable Workflows", "Limits", "Architecture"]
  },
  {
    id: "github-actions-fc-80",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Reusable Workflows vs. Composite Actions",
    hint: "Complete multi-job pipeline sharing vs. single-job step abstraction.",
    back: "<strong>Reusable workflows</strong> can contain multiple jobs, matrix strategies, and environments. <strong>Composite actions</strong> can only define steps within a single calling job and cannot manage multiple jobs.",
    tags: ["Reusable Workflows", "Composite Actions", "Architecture"]
  },
  {
    id: "github-actions-fc-81",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Organization Workflow Templates (Starter Workflows)",
    hint: "Providing template workflows in an organization's .github repository.",
    back: "Creating workflow YAML files in the special <strong><code>.github</code> repository</strong> under <code>workflow-templates/</code> makes them appear in the Actions tab as reusable starter templates across the organization.",
    tags: ["Starter Workflows", "Templates", "Organization"]
  },
  {
    id: "github-actions-fc-82",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    front: "Marketplace Action Version Pinning: Commit SHA vs. Tag",
    hint: "Cryptographic immutability vs. convenience of semantic version tags.",
    back: "Pinning by <strong>Commit SHA</strong> (<code>uses: actions/checkout@b4ffde...</code>) guarantees cryptographic immutability, preventing supply chain attacks. Pinning by tag (<code>@v4</code>) allows upstream authors to move tags.",
    tags: ["Security", "Pinning", "Supply Chain", "Marketplace"]
  },
  {
    id: "github-actions-fc-83",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Required Status Checks in Branch Protection Rules",
    hint: "Blocking pull request merges until specific Actions jobs pass.",
    back: "In repository branch protection rules, configure <strong>'Require status checks to pass before merging'</strong> and select the job names (e.g. <code>test</code>). Pull requests cannot merge if those jobs fail.",
    tags: ["Branch Protection", "Status Checks", "Governance"]
  },
  {
    id: "github-actions-fc-84",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Dependabot Automated Updates for GitHub Actions",
    hint: "Automating pull requests to update action versions in workflows.",
    back: "Configure <code>package-ecosystem: 'github-actions'</code> in <strong><code>.github/dependabot.yml</code></strong>. Dependabot scans workflow files and automatically opens pull requests when newer action versions or SHAs are released.",
    tags: ["Dependabot", "Updates", "Maintenance"]
  },
  {
    id: "github-actions-fc-85",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    front: "Viewing Workflow Run Billing and Usage",
    hint: "Tracking billable runner minutes across repositories and organizations.",
    back: "Organization owners view billable Actions minutes under <strong>Settings \u2192 Billing and plans</strong>. GitHub-hosted Windows runners multiply usage by 2x; macOS runners multiply usage by 10x.",
    tags: ["Billing", "Cost Management", "Runners"]
  },
  {
    id: "github-actions-fc-86",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Public Repositories: Free Unlimited GitHub-Hosted Minutes",
    hint: "Unlimited standard runner compute for open-source public repositories.",
    back: "GitHub Actions provides <strong>unlimited free build minutes</strong> on standard GitHub-hosted runners for public repositories, subject only to concurrent job execution limits.",
    tags: ["Billing", "Public Repositories", "Open Source"]
  },
  {
    id: "github-actions-fc-87",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Concurrent Job Limits in GitHub Actions",
    hint: "Maximum simultaneous job execution caps based on account plan.",
    back: "GitHub enforces concurrent job limits: 20 concurrent jobs on Free accounts, 40 on Pro, 60 on Team, and 180 (or 500 on Enterprise) across all repositories in the account.",
    tags: ["Limits", "Concurrency", "Account Plans"]
  },
  {
    id: "github-actions-fc-88",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Organization Secrets: Access Policies",
    hint: "All repositories vs. private repositories vs. selected repositories.",
    back: "Organization administrators configure secret access policies: <strong>All repositories</strong>, <strong>Private repositories only</strong>, or <strong>Selected repositories</strong> to prevent unauthorized repos from reading tokens.",
    tags: ["Secrets", "Organization", "Governance"]
  },
  {
    id: "github-actions-fc-89",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Environment Secrets vs. Organization Secrets Precedence",
    hint: "Order of precedence when identical secret names exist at multiple levels.",
    back: "When secret names collide, GitHub Actions evaluates precedence from narrowest to broadest: <strong>Environment secret</strong> overrides <strong>Repository secret</strong>, which overrides <strong>Organization secret</strong>.",
    tags: ["Secrets", "Precedence", "Configuration"]
  },
  {
    id: "github-actions-fc-90",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    front: "GitHub Actions Enterprise Allowed Actions Policy",
    hint: "Restricting which actions can execute across an entire enterprise.",
    back: "Enterprises can restrict action execution to: <strong>Allow all actions</strong>, <strong>Allow local actions only</strong>, or <strong>Allow select actions</strong> (e.g. only actions authored by GitHub or verified partners).",
    tags: ["Governance", "Enterprise", "Allowed Actions", "Security"]
  },
  {
    id: "github-actions-fc-91",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Workflow Artifact Storage Quotas and Costs",
    hint: "Billing for artifact and package storage beyond free plan allowances.",
    back: "Each account tier includes a monthly storage allowance (e.g. 500 MB Free, 2 GB Pro, 50 GB Enterprise). Storage exceeding this quota is billed per GB/month; optimize by tuning <code>retention-days</code>.",
    tags: ["Artifacts", "Billing", "Storage", "FinOps"]
  },
  {
    id: "github-actions-fc-92",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    front: "Actions Usage Badges in README.md",
    hint: "Displaying live build status badges in markdown documentation.",
    back: "Add status badges using Markdown: <code>![CI](https://github.com/{owner}/{repo}/actions/workflows/ci.yml/badge.svg)</code>. The badge reflects real-time passing, failing, or running status of the default branch.",
    tags: ["Badges", "README", "Status"]
  },
  {
    id: "github-actions-fc-93",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "GitHub CLI (gh) for Managing Workflows",
    hint: "CLI commands to list, view, trigger, and debug workflow runs from terminal.",
    back: "The <strong><code>gh</code></strong> CLI supports actions commands: <code>gh workflow list</code>, <code>gh workflow run deploy.yml</code>, <code>gh run view</code>, and <code>gh run watch</code> for seamless terminal interaction.",
    tags: ["GitHub CLI", "gh", "Terminal", "DevOps"]
  },
  {
    id: "github-actions-fc-94",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "REST API for GitHub Actions",
    hint: "Programmatically controlling workflows, runners, and artifacts.",
    back: "The GitHub REST API provides comprehensive endpoints under <code>/repos/{owner}/{repo}/actions/</code> to list runs, download artifacts, trigger dispatches, cancel jobs, and manage self-hosted runners.",
    tags: ["REST API", "Automation", "Integrations"]
  },
  {
    id: "github-actions-fc-95",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    front: "Webhook Events: workflow_job vs. workflow_run",
    hint: "Real-time webhook notifications for monitoring and custom runner autoscaling.",
    back: "<strong><code>workflow_job</code></strong> emits events on individual job state transitions (queued, in_progress, completed), ideal for autoscaling self-hosted runners. <strong><code>workflow_run</code></strong> fires when an entire workflow completes.",
    tags: ["Webhooks", "Autoscaling", "Monitoring"]
  },
  {
    id: "github-actions-fc-96",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Managing Secrets via GitHub CLI",
    hint: "Setting and listing repository secrets securely from the command line.",
    back: "Run <code>gh secret set API_KEY --body 'value'</code> or <code>gh secret list</code> to manage repository, environment, or organization secrets directly from terminal scripts without exposing values in bash history.",
    tags: ["GitHub CLI", "Secrets", "Security"]
  },
  {
    id: "github-actions-fc-97",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Audit Log Events for GitHub Actions",
    hint: "Tracking secret modifications, policy changes, and workflow approvals.",
    back: "Enterprise and organization audit logs track all sensitive Actions events: <code>repo.create_secret</code>, <code>repo.remove_secret</code>, <code>action_execution_policy.update</code>, and environment approval actions.",
    tags: ["Audit Log", "Compliance", "Security", "Enterprise"]
  },
  {
    id: "github-actions-fc-98",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Secret Masking Limitations: Length and Partial Substrings",
    hint: "Secrets shorter than 3 characters or formatted in certain ways are not masked.",
    back: "GitHub Actions automatically masks secret values registered in <code>secrets.*</code> in logs, but does not mask secrets shorter than 3 characters or parts of structured URIs if transformed. Avoid printing raw tokens.",
    tags: ["Secrets", "Masking", "Security"]
  },
  {
    id: "github-actions-fc-99",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    front: "Cancelling In-Progress Runs from UI and CLI",
    hint: "Aborting accidental or run-away workflow executions.",
    back: "Users with write access can click <strong>'Cancel run'</strong> in the GitHub UI or execute <code>gh run cancel {run_id}</code>. The runner sends <code>SIGINT</code> followed by <code>SIGKILL</code> to running processes.",
    tags: ["Management", "Cancel", "Operations"]
  },
  {
    id: "github-actions-fc-100",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Download Artifacts Across Workflow Runs: API and Actions",
    hint: "Downloading artifacts produced by earlier or different workflow runs.",
    back: "While <code>actions/download-artifact</code> retrieves artifacts from the <em>current</em> run, downloading artifacts from <em>previous</em> runs requires the GitHub REST API or community actions using <code>GITHUB_TOKEN</code>.",
    tags: ["Artifacts", "API", "Cross-Run"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_4;
