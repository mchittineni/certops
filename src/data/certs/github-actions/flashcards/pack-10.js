export const GITHUB_ACTIONS_FLASHCARDS_10 = [
  {
    id: "github-actions-fc-226",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Debugging Flaky Tests with Re-Run Failed Jobs",
    hint: "Isolating non-deterministic test failures without re-running entire pipelines.",
    back: "Clicking 'Re-run failed jobs' preserves completed green jobs, re-executing only the specific failing job node with identical inputs and Git SHA to diagnose intermittent race conditions.",
    tags: ["Debugging", "Rerun", "Testing"]
  },
  {
    id: "github-actions-fc-227",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Conditional Steps: Using github.event_name",
    hint: "Running deployment steps only on push events and skipping on pull_request.",
    back: "Use <code>if: github.event_name == 'push' && github.ref == 'refs/heads/main'</code> to ensure release steps execute only when code is actually merged to the main branch.",
    tags: ["Conditionals", "github.event_name", "Triggers"]
  },
  {
    id: "github-actions-fc-228",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Managing Large Monorepo Concurrency",
    hint: "Scoping concurrency groups per microservice within a single repository.",
    back: "Use <code>concurrency: { group: '${{ matrix.service }}-${{ github.ref }}', cancel-in-progress: true }</code> so that commits touching Service A do not cancel running builds for Service B.",
    tags: ["Concurrency", "Monorepo", "Architecture"]
  },
  {
    id: "github-actions-fc-229",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Using Composite Action Outputs in Workflow Conditionals",
    hint: "Gating workflow steps based on evaluation results from a composite action.",
    back: "Composite actions declare <code>outputs.should_deploy</code>. Workflow steps check <code>if: steps.my_action.outputs.should_deploy == 'true'</code> before proceeding to deployment.",
    tags: ["Composite Actions", "Outputs", "Conditionals"]
  },
  {
    id: "github-actions-fc-230",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "JavaScript Action: Handling Error Stack Traces",
    hint: "Catching exceptions and logging detailed stack traces with core.error.",
    back: "Wrap JS action logic in <code>try/catch</code>: call <code>core.error(error.stack)</code> for diagnostic logs and <code>core.setFailed(error.message)</code> to mark the step as failed.",
    tags: ["JavaScript Actions", "Error Handling", "Debugging"]
  },
  {
    id: "github-actions-fc-231",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Docker Action: Mounting Workspace Volumes",
    hint: "How GitHub Actions mounts the runner workspace into Docker container actions.",
    back: "The runner automatically mounts <code>$GITHUB_WORKSPACE</code> into the Docker container at <strong><code>/github/workspace</code></strong> and sets it as the working directory.",
    tags: ["Docker Actions", "Storage", "Workspace"]
  },
  {
    id: "github-actions-fc-232",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Action Inputs with Choice Enums",
    hint: "Restricting workflow inputs to predefined dropdown choices in UI.",
    back: "In <code>workflow_dispatch</code> inputs, specify <code>type: choice</code> and list allowed values under <code>options: ['dev', 'stage', 'prod']</code> to prevent typographical errors.",
    tags: ["Inputs", "workflow_dispatch", "UI"]
  },
  {
    id: "github-actions-fc-233",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Action Inputs: Boolean Type Coercion",
    hint: "Handling string vs. boolean representations in action inputs.",
    back: "Inputs passed via <code>with:</code> are always transmitted as strings. Use <code>core.getBooleanInput('flag')</code> in JS actions to correctly parse <code>'true'</code>, <code>'false'</code>, or YAML booleans.",
    tags: ["Inputs", "Booleans", "@actions/core"]
  },
  {
    id: "github-actions-fc-234",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "OIDC Audience (aud) Claim Customization",
    hint: "Configuring custom audience claims for enterprise IAM providers.",
    back: "By default, GitHub's OIDC token sets the audience claim to the repository owner. Workflows can request custom audiences using <code>actions/core</code> or specific cloud login actions to satisfy IAM rules.",
    tags: ["OIDC", "Audience", "IAM", "Security"]
  },
  {
    id: "github-actions-fc-235",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Detecting Outdated Self-Hosted Runner Versions",
    hint: "Viewing runner agent versions and deprecation warnings in organization settings.",
    back: "Organization settings display the agent version of every registered runner. GitHub warns administrators when runner versions fall behind minimum required security baselines.",
    tags: ["Self-Hosted", "Maintenance", "Compliance"]
  },
  {
    id: "github-actions-fc-236",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Restricting Workflow Permissions across Enterprise",
    hint: "Enforcing read-only token permissions globally across all enterprise repositories.",
    back: "Enterprise administrators can set the global default workflow permissions to <strong>'Read repository contents'</strong>, preventing any repository from granting write tokens unless reviewed.",
    tags: ["Enterprise", "Governance", "Least Privilege"]
  },
  {
    id: "github-actions-fc-237",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Audit Log: Tracking Who Approved a Production Deployment",
    hint: "Auditing manual reviewer decisions for regulatory compliance.",
    back: "Enterprise audit log records <code>environment.approve</code> and <code>environment.reject</code> events, capturing the exact user, timestamp, environment name, and review comments for compliance.",
    tags: ["Audit Log", "Compliance", "Environments", "Approvals"]
  },
  {
    id: "github-actions-fc-238",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Ephemeral Runners vs. Docker-in-Docker Security",
    hint: "Security trade-offs of exposing Docker socket on self-hosted runners.",
    back: "Mounting <code>/var/run/docker.sock</code> into runner containers grants root host privileges. Mitigate risk by running ephemeral VM-based runners or utilizing rootless container tools like Kaniko.",
    tags: ["Security", "Docker", "Runners", "Isolation"]
  },
  {
    id: "github-actions-fc-239",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Configuring Failover Runner Groups",
    hint: "Ensuring high availability of self-hosted runner infrastructure.",
    back: "Deploy runner pools across multiple physical availability zones or hypervisors registered under the same Runner Group so if one host fails, queued jobs are picked up by surviving nodes.",
    tags: ["High Availability", "Runners", "Resilience"]
  },
  {
    id: "github-actions-fc-240",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Exporting GitHub Actions Usage to AWS S3 for FinOps",
    hint: "Automating billing telemetry collection for enterprise showback/chargeback.",
    back: "Use GitHub REST API scripts scheduled via Actions to fetch daily usage summaries and export CSV line-items to Amazon S3 for FinOps analysis in Athena and QuickSight.",
    tags: ["FinOps", "Billing", "Analytics", "Automation"]
  },
  {
    id: "github-actions-fc-241",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Handling Submodules in Reusable Workflows",
    hint: "Passing authentication tokens down into reusable workflows for private submodules.",
    back: "Reusable workflows that clone private submodules must be passed a Personal Access Token (PAT) or deploy key via <code>secrets:</code> to authorize submodule checkout in <code>actions/checkout</code>.",
    tags: ["Reusable Workflows", "Submodules", "Security"]
  },
  {
    id: "github-actions-fc-242",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Using GITHUB_ENV with Multiline Strings",
    hint: "Writing multiline configuration blocks or certificates to environment variables.",
    back: "To write multiline strings, use delimiter syntax: <code>echo \"CERT_DATA&lt;&lt;EOF\" >> \"$GITHUB_ENV\"; echo \"$CERT\" >> \"$GITHUB_ENV\"; echo \"EOF\" >> \"$GITHUB_ENV\"</code>.",
    tags: ["GITHUB_ENV", "Multiline", "Shell", "Syntax"]
  },
  {
    id: "github-actions-fc-243",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Actions Step Summary with Collapsible Details",
    hint: "Using HTML &lt;details&gt; and &lt;summary&gt; tags in Markdown reports.",
    back: "Write HTML tags directly to <code>$GITHUB_STEP_SUMMARY</code>: <code>echo '&lt;details&gt;&lt;summary&gt;Verbose Logs&lt;/summary&gt;' >> \"$GITHUB_STEP_SUMMARY\"</code> to create clean collapsible report cards.",
    tags: ["Step Summaries", "HTML", "Markdown", "Reporting"]
  },
  {
    id: "github-actions-fc-244",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "Custom Action Exit Codes and Error Handling",
    hint: "Process exit codes that control GitHub Actions step failure.",
    back: "Any step exiting with a non-zero exit code (1\u2013255) is treated as failed by GitHub Actions, triggering failure handlers and stopping subsequent steps unless protected by conditionals.",
    tags: ["Exit Codes", "Error Handling", "Shell"]
  },
  {
    id: "github-actions-fc-245",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d3",
    front: "JavaScript Action: Creating Masked Outputs",
    hint: "Preventing sensitive output values from appearing in downstream logs.",
    back: "Call <code>core.setSecret(outputValue)</code> before calling <code>core.setOutput('token', outputValue)</code> to ensure that any downstream step that prints the output has it masked as <code>***</code>.",
    tags: ["Masking", "Outputs", "Security", "@actions/core"]
  },
  {
    id: "github-actions-fc-246",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "Restricting Secret Sharing in Organization Settings",
    hint: "Limiting organization secrets to specific private repositories.",
    back: "Never configure production deployment secrets with 'All repositories' access. Use 'Selected repositories' to restrict credentials strictly to the designated deployment repositories.",
    tags: ["Secrets", "Organization", "Least Privilege", "Security"]
  },
  {
    id: "github-actions-fc-247",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "ARC Runner Scaling Metric: Percentage vs. Exact Count",
    hint: "Tuning horizontal pod autoscaler thresholds for Kubernetes runners.",
    back: "Configure Actions Runner Controller autoscaling metrics using <code>TotalNumberOfQueuedAndInProgressWorkflowRuns</code> to scale runner pods proportionally with real-time queue demand.",
    tags: ["ARC", "Kubernetes", "Autoscaling", "Performance"]
  },
  {
    id: "github-actions-fc-248",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Using GitHub Environments for Multi-Stage CD Pipelines",
    hint: "Dev \u2192 Staging \u2192 Production promotion pipeline architecture.",
    back: "Structure workflows with three sequential jobs targeting <code>environment: dev</code>, <code>environment: staging</code>, and <code>environment: production</code> with gated approvals on production.",
    tags: ["Environments", "CD", "Pipelines", "Architecture"]
  },
  {
    id: "github-actions-fc-249",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Auditing Actions Marketplace Adoption with Enterprise Policies",
    hint: "Running inventory reports on third-party actions used across an organization.",
    back: "Use GitHub enterprise audit APIs to generate an inventory of all unique <code>uses:</code> actions referenced in repository workflows to identify unvetted community actions for remediation.",
    tags: ["Governance", "Audit", "Marketplace", "Enterprise"]
  },
  {
    id: "github-actions-fc-250",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    front: "Best Practices for Maintaining Production Workflows",
    hint: "Linters, branch protection, codeowners, and automated version updates.",
    back: "Maintain production workflow reliability by: enforcing branch protection on <code>.github/</code>, requiring review from <code>CODEOWNERS</code>, pinning actions by commit SHA, and automating updates via Dependabot.",
    tags: ["Best Practices", "Governance", "CI/CD", "Security"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_10;
