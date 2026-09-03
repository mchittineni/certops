export const GITHUB_ACTIONS_FLASHCARDS_8 = [
  {
    id: "github-actions-fc-176",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "OpenID Connect (OIDC): Eliminating Long-Lived Cloud Credentials",
    hint: "Short-lived JWT tokens replacing static AWS/Azure access keys.",
    back: "GitHub Actions can assume roles directly in AWS, Azure, or GCP using <strong>OIDC (OpenID Connect)</strong>. The runner exchanges an ephemeral signed OIDC JWT token for short-lived cloud credentials with zero static secrets.",
    tags: ["OIDC", "Security", "Cloud Credentials", "IAM"]
  },
  {
    id: "github-actions-fc-177",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "Configuring OIDC: id-token: write Permission",
    hint: "Mandatory permission required to request an OIDC JWT token.",
    back: "To use OpenID Connect in a job, you must explicitly grant <strong><code>permissions: { id-token: write, contents: read }</code></strong>. Without <code>id-token: write</code>, the runner cannot generate the OIDC token.",
    tags: ["OIDC", "permissions", "id-token", "Security"]
  },
  {
    id: "github-actions-fc-178",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "OIDC Subject Claim (sub) Validation in Cloud IAM",
    hint: "Restricting role assumption to specific repositories and branches.",
    back: "Cloud IAM trust policies validate the OIDC <strong><code>sub</code> claim</strong>: <code>repo:org/repo:ref:refs/heads/main</code>. This guarantees that only workflows running on the main branch of that exact repository can assume the role.",
    tags: ["OIDC", "Subject Claim", "IAM", "Cloud Security"]
  },
  {
    id: "github-actions-fc-179",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Using OIDC with AWS: aws-actions/configure-aws-credentials",
    hint: "Assuming an IAM Role via Web Identity without AWS access keys.",
    back: "Use <strong><code>aws-actions/configure-aws-credentials@v4</code></strong> with <code>role-to-assume: arn:aws:iam::123456789012:role/GitHubDeployRole</code> and <code>aws-region: us-east-1</code> with zero static credentials.",
    tags: ["AWS", "OIDC", "IAM", "Cloud"]
  },
  {
    id: "github-actions-fc-180",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Using OIDC with Azure: azure/login",
    hint: "Authenticating to Azure with Federated Credentials.",
    back: "Use <strong><code>azure/login@v2</code></strong> with <code>client-id</code>, <code>tenant-id</code>, and <code>subscription-id</code>. Azure validates the federated credential trust against GitHub's OIDC issuer URL (<code>https://token.actions.githubusercontent.com</code>).",
    tags: ["Azure", "OIDC", "Federated Credentials", "Cloud"]
  },
  {
    id: "github-actions-fc-181",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Using OIDC with GCP: google-github-actions/auth",
    hint: "Workload Identity Federation for authenticating to Google Cloud.",
    back: "Use <strong><code>google-github-actions/auth@v2</code></strong> with <code>workload_identity_provider</code> and <code>service_account</code> to exchange GitHub tokens for GCP access tokens with zero service account keys.",
    tags: ["GCP", "OIDC", "Workload Identity", "Cloud"]
  },
  {
    id: "github-actions-fc-182",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    front: "Secret Naming Rules and Restrictions in GitHub",
    hint: "Naming constraints: uppercase alphanumeric and underscores, no GITHUB_ prefix.",
    back: "Secret names can contain alphanumeric characters and underscores (<code>_</code>) and cannot begin with numbers or the <strong><code>GITHUB_</code></strong> prefix, which is reserved for internal GitHub Actions secrets.",
    tags: ["Secrets", "Naming", "Configuration"]
  },
  {
    id: "github-actions-fc-183",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Encrypting Secrets at Rest in GitHub: Libsodium Sealed Boxes",
    hint: "Public-key encryption ensuring secrets are encrypted before leaving your browser.",
    back: "GitHub encrypts secrets using <strong>Libsodium sealed boxes</strong> with a 256-bit key. When entered in the UI or CLI, secrets are encrypted in transit using repository public keys and decrypted only on runners.",
    tags: ["Secrets", "Encryption", "Libsodium", "Security"]
  },
  {
    id: "github-actions-fc-184",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Inheriting Secrets in Reusable Workflows vs. Explicit Mapping",
    hint: "Balancing authoring convenience with strict least-privilege scoping.",
    back: "<strong><code>secrets: inherit</code></strong> passes all caller secrets to the reusable workflow. For maximum security, explicitly declare and map only required secrets (e.g. <code>secrets: { API_KEY: secrets.PROD_KEY }</code>).",
    tags: ["Reusable Workflows", "secrets", "Security"]
  },
  {
    id: "github-actions-fc-185",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Environment Secrets vs. Branch Protection Rules",
    hint: "Preventing untrusted pull requests from accessing production database secrets.",
    back: "Binding secrets to an <strong>Environment</strong> with deployment branch protection ensures that only workflows running on approved branches (like <code>main</code>) can access production credentials.",
    tags: ["Environments", "Secrets", "Branch Protection"]
  },
  {
    id: "github-actions-fc-186",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "Detecting Hardcoded Secrets in PRs: Secret Scanning",
    hint: "Scanning commits on push to prevent token commits to git history.",
    back: "GitHub <strong>Secret Scanning</strong> scans repositories for known partner token patterns. With <strong>Push Protection</strong> enabled, commits containing detected credentials are automatically blocked from being pushed.",
    tags: ["Secret Scanning", "Push Protection", "Security"]
  },
  {
    id: "github-actions-fc-187",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Security Boundaries in GitHub Actions Workflows",
    hint: "Workflows are fully trusted code execution vectors inside repositories.",
    back: "Anyone with write access to a repository can author workflows that run arbitrary commands. Protect repositories using branch protection rules, code owners, and required reviews on <code>.github/workflows/</code>.",
    tags: ["Security", "Codeowners", "Governance"]
  },
  {
    id: "github-actions-fc-188",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "CODEOWNERS for Workflow Directories",
    hint: "Requiring security team review on modifications to .github/workflows/.",
    back: "Add <code>.github/workflows/ @security-team</code> to <strong><code>CODEOWNERS</code></strong> and enable 'Require review from Code Owners' in branch protection to block unapproved workflow changes.",
    tags: ["CODEOWNERS", "Governance", "Security"]
  },
  {
    id: "github-actions-fc-189",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Restricting GITHUB_TOKEN Default Permissions across Organization",
    hint: "Setting the default organization permission to Read-Only.",
    back: "Under Organization Actions settings, set <strong>'Workflow permissions'</strong> to <strong>'Read repository contents permission'</strong> by default, requiring workflows to explicitly opt into write scopes via <code>permissions:</code>.",
    tags: ["GITHUB_TOKEN", "Least Privilege", "Organization", "Governance"]
  },
  {
    id: "github-actions-fc-190",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Disabling PR Fork Workflow Approval Requirements",
    hint: "Requiring approval for all outside collaborators before workflow runs execute.",
    back: "Configure <strong>'Require approval for all outside collaborators'</strong> in Actions settings to ensure maintainers inspect fork pull request code before runners execute arbitrary commands.",
    tags: ["Forks", "Approvals", "Security"]
  },
  {
    id: "github-actions-fc-191",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Securing Third-Party Actions with StepSecurity Harden-Runner",
    hint: "Monitoring outbound network connections and blocking anomalous calls.",
    back: "Adding <strong><code>step-security/harden-runner</code></strong> as the first step monitors file, process, and network activity on the runner, detecting and blocking unexpected outbound data exfiltration calls.",
    tags: ["Harden-Runner", "StepSecurity", "Supply Chain", "Security"]
  },
  {
    id: "github-actions-fc-192",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub Actions Artifacts: Security and Expiration",
    hint: "Preventing sensitive log files or credentials from leaking in build artifacts.",
    back: "Never upload <code>.env</code> files, credentials, or unredacted debug dumps as artifacts. Set short <code>retention-days</code> and enforce code reviews on <code>actions/upload-artifact</code> configurations.",
    tags: ["Artifacts", "Security", "Best Practices"]
  },
  {
    id: "github-actions-fc-193",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Compromise Blast Radius: Ephemeral vs. Persistent",
    hint: "Why persistent self-hosted runners present cross-build contamination risk.",
    back: "A compromised job on a persistent self-hosted runner can modify host binaries, install rootkits, or steal credentials left in the filesystem. <strong>Ephemeral runners</strong> destroy the entire VM/pod after each job.",
    tags: ["Security", "Ephemeral", "Runners", "Isolation"]
  },
  {
    id: "github-actions-fc-194",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Secure Files in GitHub Actions",
    hint: "Managing Apple signing certificates and Android keystores.",
    back: "Store binary certificates (e.g. <code>.p12</code>, <code>.keystore</code>) as base64-encoded repository secrets, decoding them dynamically on the runner during build execution and deleting them in a post-cleanup step.",
    tags: ["Certificates", "Mobile", "Secrets", "Signing"]
  },
  {
    id: "github-actions-fc-195",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub Actions Enterprise Audit Log Streaming",
    hint: "Streaming real-time Actions audit events to Splunk, Datadog, or Azure Event Hubs.",
    back: "GitHub Enterprise Cloud allows administrators to stream audit log events continuously to external SIEM providers (Datadog, Splunk, Amazon S3) for security compliance monitoring.",
    tags: ["Audit Log", "SIEM", "Enterprise", "Compliance"]
  },
  {
    id: "github-actions-fc-196",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Managing SSH Keys in GitHub Actions",
    hint: "Using webfactory/ssh-agent to clone private submodules securely.",
    back: "Use <strong><code>webfactory/ssh-agent@v0.9.0</code></strong> loaded with an SSH private key stored in <code>secrets.*</code> to authenticate git commands and clone private submodules or deploy to remote servers.",
    tags: ["SSH", "Authentication", "Git", "Submodules"]
  },
  {
    id: "github-actions-fc-197",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Restricting Actions in Fork Pull Requests",
    hint: "Preventing write tokens and environment secrets from leaking to forks.",
    back: "GitHub Actions automatically ensures that <code>pull_request</code> events from public forks receive a read-only <code>GITHUB_TOKEN</code> and have zero access to repository or environment secrets.",
    tags: ["Forks", "Security", "PR"]
  },
  {
    id: "github-actions-fc-198",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Protecting against Typosquatting in Marketplace Actions",
    hint: "Verifying repository creator names to avoid malicious impersonation.",
    back: "Attackers publish malicious actions with names mimicking popular actions (e.g. <code>actions-checkout</code> instead of <code>actions/checkout</code>). Always verify the exact namespace and publisher badge.",
    tags: ["Supply Chain", "Typosquatting", "Security"]
  },
  {
    id: "github-actions-fc-199",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Disabling GitHub Actions for an Entire Repository",
    hint: "Completely turning off Actions execution in repository settings.",
    back: "In <strong>Settings \u2192 Actions \u2192 General</strong>, select <strong>'Disable actions'</strong> to completely halt and prevent any workflow execution in that repository.",
    tags: ["Governance", "Repository Settings", "Operations"]
  },
  {
    id: "github-actions-fc-200",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    front: "Viewing Job Dependency Graphs in GitHub Actions UI",
    hint: "Interactive visual DAG visualization of workflow job pipelines.",
    back: "The GitHub Actions web interface renders a live visual Directed Acyclic Graph (DAG) displaying job connections, parallel branches, execution status, and elapsed duration.",
    tags: ["UI", "DAG", "Visualization"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_8;
