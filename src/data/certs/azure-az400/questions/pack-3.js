export const AZURE_AZ400_QUESTIONS_3 = [
  {
    id: "azure-az400-51",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Enforcing Branch Policies for Main Branch Protection",
    scenario: "An organization requires that no developer can push commits directly to the main branch. Every change must be reviewed by at least two senior engineers and pass a continuous integration build.",
    question: "Which Azure Repos feature enforces these constraints?",
    options: [
      { id: 'A', text: "Branch policies on the main branch (requiring minimum number of reviewers, build validation, and comment resolution)" },
      { id: 'B', text: "Disabling write permissions for all developers in the organization" },
      { id: 'C', text: "Converting the repository to read-only mode" },
      { id: 'D', text: "Creating a Git tag named main" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Branch policies protect critical branches by enforcing quality gates before merge: requiring a minimum number of reviewers, successful build validation pipelines, linked work items, and resolution of all review comments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies",
    tags: ["Branch Policies", "Pull Requests", "Governance", "Code Review"]
  },
  {
    id: "azure-az400-52",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Merge Strategies: Squash Merge vs Rebase vs Merge Commit",
    scenario: "A development team wants to keep the commit history on the main branch clean and linear, where each pull request appears as a single atomic commit containing the PR title and description.",
    question: "Which pull request merge type should be enforced in branch policies?",
    options: [
      { id: 'A', text: "Rebase and merge" },
      { id: 'B', text: "Fast-forward merge only" },
      { id: 'C', text: "Squash merge" },
      { id: 'D', text: "Basic merge (no-fast-forward merge commit)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Squash merging condenses all commits from the topic feature branch into a single commit on the target branch. This preserves a clean linear commit history on main without cluttering it with intermediate work-in-progress commits.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/merging",
    tags: ["Squash Merge", "Git", "Branch Policies", "Source Control"]
  },
  {
    id: "azure-az400-53",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Large File Storage (LFS) for Binary Assets",
    scenario: "A gaming development team stores 20 GB of 3D game models and texture files in an Azure Repos Git repository. Cloning the repository takes over an hour and exhausts runner memory.",
    question: "Which Git mechanism should be implemented to manage large binary assets efficiently?",
    options: [
      { id: 'A', text: "Deleting the git repository after each commit" },
      { id: 'B', text: "Zipping the binaries into encrypted text files" },
      { id: 'C', text: "Git Large File Storage (Git LFS)" },
      { id: 'D', text: "Git submodules pointing to FTP servers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Git LFS replaces large binary files in the Git repository with tiny text pointers, storing the actual binary payloads on dedicated cloud storage. Git only downloads the specific binary versions needed for the checked-out commit, dramatically speeding up clone times.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Git LFS", "Binary Storage", "Performance", "Azure Repos"]
  },
  {
    id: "azure-az400-54",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Monorepo Scaling: Scalar and VFS for Git",
    scenario: "An enterprise maintains a massive multi-gigabyte monorepo with 500,000 files. Local `git status` and checkout operations take several minutes.",
    question: "Which tool optimized by Microsoft accelerates Git operations on ultra-large repositories by enabling sparse checkouts and filesystem virtualization?",
    options: [
      { id: 'A', text: "Docker Desktop" },
      { id: 'B', text: "AzCopy" },
      { id: 'C', text: "Git submodule" },
      { id: 'D', text: "Scalar (formerly VFS for Git)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Scalar is a Git extension optimized by Microsoft for massive enterprise monorepos. It configures advanced Git features (sparse-checkout, partial clone, background maintenance, and filesystem monitoring) to keep Git operations fast regardless of repository size.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/monorepos",
    tags: ["Scalar", "Monorepo", "Git", "Optimization"]
  },
  {
    id: "azure-az400-55",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Trunk-Based Development vs GitFlow",
    scenario: "An agile software organization wants to practice continuous integration and deploy to production multiple times a day with minimal merge friction.",
    question: "Which branching strategy best aligns with high-velocity continuous delivery?",
    options: [
      { id: 'A', text: "Trunk-Based Development with short-lived feature branches merged daily into main using automated tests and feature flags" },
      { id: 'B', text: "Forking workflow where every developer works in a personal clone" },
      { id: 'C', text: "GitFlow with long-lived feature, develop, release, and hotfix branches" },
      { id: 'D', text: "Maintaining separate branches for each customer tenant" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trunk-Based Development is the industry-standard branching model for DevOps. Developers merge small, frequent batches into a single shared trunk (main) multiple times a day, relying on robust CI pipelines and feature flags to decouple deployment from release.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance",
    tags: ["Trunk-Based", "Branching Strategy", "DevOps", "Continuous Delivery"]
  },
  {
    id: "azure-az400-56",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Azure Repos: Automatically Included Reviewers by File Path",
    scenario: "A company requires that whenever a pull request modifies files in `/infrastructure/terraform/`, the Core Cloud Architecture team must be added as mandatory reviewers.",
    question: "Which Azure Repos branch policy setting configures this path-based review enforcement?",
    options: [
      { id: 'A', text: "Git commit hook on local machines" },
      { id: 'B', text: "Automatically included reviewers with a path filter (e.g. /infrastructure/terraform/*)" },
      { id: 'C', text: "Work item linking" },
      { id: 'D', text: "Build validation pipeline" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Repos branch policies support 'Automatically included reviewers'. Setting a path filter (e.g. `/infrastructure/terraform/*`) automatically assigns designated reviewer groups as required or optional whenever files matching the pattern are touched in a PR.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies#automatically-include-code-reviewers",
    tags: ["Reviewers", "Path Filters", "Branch Policies", "Governance"]
  },
  {
    id: "azure-az400-57",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Shared Dependencies: Git Submodules vs Package Feeds",
    scenario: "An architect evaluates whether to share common internal C# utility classes across 10 repositories using Git Submodules or an internal package feed (Azure Artifacts).",
    question: "What is the recommended DevOps approach for sharing reusable component libraries across enterprise projects?",
    options: [
      { id: 'A', text: "Using Git Submodules pinned to the HEAD of master" },
      { id: 'B', text: "Publishing versioned NuGet packages to an internal Azure Artifacts feed" },
      { id: 'C', text: "Copying and pasting the source code files into all 10 repositories" },
      { id: 'D', text: "Storing the code in a public GitHub Gist" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Package management via Azure Artifacts (NuGet, npm, Maven) provides clean semantic versioning, immutable release binaries, dependency tracking, and decoupled lifecycles, avoiding the operational complexity and merge friction inherent in Git submodules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/overview",
    tags: ["Azure Artifacts", "Package Management", "NuGet", "Architecture"]
  },
  {
    id: "azure-az400-58",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Preventing Accidental Secrets Commit via Git Hooks and Pre-Commit",
    scenario: "A developer wants to prevent credentials and private keys from being committed to local Git branches before executing `git commit`.",
    question: "Which tool should be configured on developer workstations to inspect staged files locally?",
    options: [
      { id: 'A', text: "Client-side pre-commit hooks (e.g. using pre-commit framework or detect-secrets)" },
      { id: 'B', text: "Azure Storage Explorer" },
      { id: 'C', text: "Azure Boards delivery plans" },
      { id: 'D', text: "Azure Artifacts upstream sources" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pre-commit hooks execute locally during `git commit`, inspecting staged files for high-entropy strings, passwords, and API keys, halting the commit process locally before secrets can be recorded in Git blobs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-secret-scanning-github-advanced-security",
    tags: ["Pre-Commit", "Secrets", "Shift-Left", "Security"]
  },
  {
    id: "azure-az400-59",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows in Enterprise Repositories",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "When is a Forking branching workflow recommended over a centralized branch-based model in Azure Repos?",
    options: [
      { id: 'A', text: "When deploying to production multiple times a day" },
      { id: 'B', text: "When collaborating with untrusted third-party contractors or open-source contributors where direct write access to the origin repository is prohibited" },
      { id: 'C', text: "When repositories only contain documentation" },
      { id: 'D', text: "For small teams of 3 developers working in the same office" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Forking is ideal when external contractors or open-source contributors need to propose changes without granting them write or branch-creation permissions on the core upstream repository.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["Forks", "Collaboration", "Permissions", "Source Control"]
  },
  {
    id: "azure-az400-60",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Enforcing Linear History in Azure Repos",
    scenario: "An engineering standard forbids 3-way merge commits on the main branch to simplify `git bisect` automated debugging.",
    question: "Which branch policy requirement ensures that pull requests can only be merged using squash or rebase?",
    options: [
      { id: 'A', text: "Delete all branch tags" },
      { id: 'B', text: "Enforce 'Limit merge types' in branch policies and allow only 'Squash merge' or 'Rebase and fast-forward'" },
      { id: 'C', text: "Use subversion instead of git" },
      { id: 'D', text: "Disable pull requests completely" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Under branch policies in Azure Repos, administrators can check 'Limit merge types' and select only 'Squash merge' or 'Rebase and fast-forward', preventing developers from creating standard non-linear merge commits.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies#limit-merge-types",
    tags: ["Linear History", "Branch Policies", "Squash Merge", "Git"]
  },
  {
    id: "azure-az400-61",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Subtrees vs Git Submodules",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "What is a primary advantage of Git Subtrees over Git Submodules when embedding shared libraries?",
    options: [
      { id: 'A', text: "Git Subtrees embed the external library's code directly into the main repository tree, meaning collaborators do not need to initialize or update submodules separately" },
      { id: 'B', text: "Git Subtrees can only store text files under 1 KB" },
      { id: 'C', text: "Git Subtrees automatically compile source code into binaries" },
      { id: 'D', text: "Git Subtrees eliminate the need for Git version control" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unlike Git Submodules (which store pointers to external commits and require explicit `git submodule update` commands), Git Subtrees merge external code directly into the repository commit graph, making checkouts seamless for all team members.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance",
    tags: ["Git Subtree", "Submodules", "Source Control", "Architecture"]
  },
  {
    id: "azure-az400-62",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Migrating from Team Foundation Version Control (TFVC) to Git",
    scenario: "An organization migrates a legacy codebase from centralized TFVC to distributed Git in Azure Repos while preserving the past 180 days of commit history.",
    question: "Which native migration tool in Azure Repos facilitates this import?",
    options: [
      { id: 'A', text: "Azure Data Box" },
      { id: 'B', text: "Copying files manually using Windows Explorer" },
      { id: 'C', text: "AzCopy data transfer" },
      { id: 'D', text: "Import repository wizard in Azure Repos, selecting TFVC as the source type and specifying history depth" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Repos includes a built-in repository import utility that converts TFVC team projects to Git repositories, allowing administrators to import either the latest tip or up to 180 days of historical changesets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/import-from-tfvc-to-git",
    tags: ["TFVC", "Git Migration", "Azure Repos", "Version Control"]
  },
  {
    id: "azure-az400-63",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Azure Repos: Branch Locking vs Branch Permission Deny",
    scenario: "An administrator needs to freeze the 'release-v2.0' branch temporarily during a compliance audit to prevent any new commits, while allowing the team to unlock it next week.",
    question: "What is the simplest way to temporarily freeze a branch in Azure Repos?",
    options: [
      { id: 'A', text: "Disable Azure Repos in project settings" },
      { id: 'B', text: "Remove all developers from the project" },
      { id: 'C', text: "Click 'Lock' on the branch in the Azure Repos branch list" },
      { id: 'D', text: "Delete the branch and restore it later" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Branch locking in Azure Repos prevents any new commits from being pushed to that branch while maintaining its existence and history. Anyone with permission can simply click 'Unlock' when the freeze concludes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-your-branches#lock-a-branch",
    tags: ["Branch Lock", "Release Freeze", "Azure Repos", "Governance"]
  },
  {
    id: "azure-az400-64",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Shallow Clones in CI/CD Build Pipelines",
    scenario: "A CI pipeline clones a 10-year-old Git repository on every build, spending 8 minutes downloading 200,000 historical commits.",
    question: "How should the checkout step in the YAML pipeline be configured to speed up pipeline execution?",
    options: [
      { id: 'A', text: "checkout: self, with fetchDepth: 1" },
      { id: 'B', text: "checkout: none" },
      { id: 'C', text: "git pull --all" },
      { id: 'D', text: "clean: true" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting `fetchDepth: 1` on the `checkout` step creates a shallow Git clone containing only the latest commit. This dramatically reduces bandwidth and clone times on CI runners without affecting build outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/steps-checkout",
    tags: ["Shallow Clone", "fetchDepth", "CI/CD", "Optimization"]
  },
  {
    id: "azure-az400-65",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Azure Repos Pull Request Status Checks via REST API",
    scenario: "An enterprise integrates a third-party static code analysis engine running on-premises that must report a pass/fail status directly onto Azure Repos pull requests.",
    question: "Which REST API resource in Azure DevOps posts external status checks to a pull request?",
    options: [
      { id: 'A', text: "Sending an email to the repository owner" },
      { id: 'B', text: "Writing a file to the Git repository" },
      { id: 'C', text: "Updating an Azure Boards work item" },
      { id: 'D', text: "POST to the Pull Request Statuses API (/pullRequests/{id}/statuses)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Pull Request Statuses REST API allows external systems (such as Jenkins, custom linters, or on-premises security scanners) to post custom status checks with state, description, and target URL directly to the PR overview.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/azure/devops/git/pull-request-statuses/create",
    tags: ["Status Checks", "REST API", "Pull Requests", "Integrations"]
  },
  {
    id: "azure-az400-66",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Semantic Versioning (SemVer) Principles in Source Control",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A developer releases a non-breaking bug fix for a library. According to Semantic Versioning (MAJOR.MINOR.PATCH), which number should be incremented?",
    options: [
      { id: 'A', text: "PATCH" },
      { id: 'B', text: "MINOR" },
      { id: 'C', text: "BUILD" },
      { id: 'D', text: "MAJOR" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Semantic Versioning follows `MAJOR.MINOR.PATCH`: increment MAJOR for incompatible breaking API changes, MINOR for backwards-compatible new features, and PATCH for backwards-compatible bug fixes.",
    referenceUrl: "https://semver.org/",
    tags: ["SemVer", "Versioning", "Best Practices", "Release"]
  },
  {
    id: "azure-az400-67",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Tagging vs Branching for Releases",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "What is the primary architectural difference between a Git Branch and a Git Tag?",
    options: [
      { id: 'A', text: "Tags can only be created by administrators" },
      { id: 'B', text: "A branch is a movable reference that automatically advances when new commits are pushed; a tag is an immutable reference pointing permanently to a specific commit snapshot" },
      { id: 'C', text: "Branches only exist locally; tags only exist on the server" },
      { id: 'D', text: "A tag can be modified by anyone; a branch can never be changed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Git, a branch is a dynamic pointer that moves forward with every commit. A tag is an immutable bookmark pointing to a fixed commit SHA, designed to mark formal release milestones (e.g. `v1.2.0`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/tags",
    tags: ["Git", "Tags", "Branches", "Release Management"]
  },
  {
    id: "azure-az400-68",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Rebase vs Git Merge Mechanics",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A developer on a feature branch runs `git rebase main`. What happens to the developer's feature branch commits?",
    options: [
      { id: 'A', text: "A 3-way merge commit is generated joining the branches" },
      { id: 'B', text: "The feature commits are temporarily replayed on top of the tip of the main branch, creating new commit SHAs and producing a linear history" },
      { id: 'C', text: "The main branch is reset to the initial commit" },
      { id: 'D', text: "The feature commits are permanently deleted" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`git rebase` rewinds the feature branch commits, pulls in the new commits from the base branch, and replays each feature commit on top, generating new commit hashes and preserving a clean linear progression.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/merging",
    tags: ["Git", "Rebase", "Merge", "Source Control"]
  },
  {
    id: "azure-az400-69",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Resolving Git Merge Conflicts in Azure Repos",
    scenario: "A pull request cannot be merged automatically because the same lines in `config.json` were modified in both the source branch and main branch.",
    question: "How can the developer resolve this merge conflict?",
    options: [
      { id: 'A', text: "Close the pull request and delete the repository" },
      { id: 'B', text: "Delete config.json from git history" },
      { id: 'C', text: "Force-push directly to the main branch" },
      { id: 'D', text: "Use the Pull Request Merge Conflict Extension in Azure Repos web UI, or check out the branch locally, run git merge main, resolve conflicts, commit, and push" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Merge conflicts occur when concurrent commits modify identical lines. Developers can resolve them locally by merging the target branch into their feature branch, editing conflict markers, and pushing, or via Azure DevOps conflict resolution extensions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-request-merge-conflicts",
    tags: ["Merge Conflicts", "Git", "Pull Requests", "Troubleshooting"]
  },
  {
    id: "azure-az400-70",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Preventing Force Pushes: Bypass Policies Permissions",
    scenario: "An enterprise wants to ensure that no developer—including repository administrators—can execute `git push --force` to rewrite the commit history of the main branch.",
    question: "Which permission in Azure Repos repository security must be set to Deny for the team?",
    options: [
      { id: 'A', text: "Force push (rewrite history, delete branches and tags)" },
      { id: 'B', text: "Contribute" },
      { id: 'C', text: "Create tag" },
      { id: 'D', text: "Read" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting the 'Force push (rewrite history, delete branches and tags)' permission to Deny in Azure Repos prevents any user from overwriting commit history with `--force`, ensuring immutable audit records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Force Push", "Permissions", "Git", "Security"]
  },
  {
    id: "azure-az400-71",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Azure Repos: Auto-Complete Pull Requests",
    scenario: "A developer creates a pull request. The build validation pipeline takes 30 minutes to complete. The developer wants the PR to merge automatically as soon as all checks pass without waiting.",
    question: "Which feature in Azure Repos accomplishes this?",
    options: [
      { id: 'A', text: "Run git push --force" },
      { id: 'B', text: "Merge the PR immediately using administrator bypass" },
      { id: 'C', text: "Set auto-complete on the pull request" },
      { id: 'D', text: "Disable build validation" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Selecting 'Set auto-complete' on an Azure Repos pull request instructs the system to automatically merge the PR as soon as all required branch policies, reviewer approvals, and build checks complete successfully.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/complete-pull-requests#auto-complete",
    tags: ["Auto-Complete", "Pull Requests", "CI/CD", "Automation"]
  },
  {
    id: "azure-az400-72",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Ignore (.gitignore) Best Practices",
    scenario: "A developer notices that local build output folders (`bin/`, `obj/`, `node_modules/`) are constantly being staged for commit.",
    question: "What file should be placed at the repository root to prevent temporary build artifacts from entering Git tracking?",
    options: [
      { id: 'A', text: "azure-pipelines.yml" },
      { id: 'B', text: ".gitignore" },
      { id: 'C', text: "README.md" },
      { id: 'D', text: "package.json" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A `.gitignore` file specifies intentional untracked file patterns (e.g. build directories, temporary cache files, local credentials) that Git should ignore, preventing bloated repositories and credential leakage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/ignore-files",
    tags: [".gitignore", "Clean Code", "Source Control"]
  },
  {
    id: "azure-az400-73",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Azure Repos: Draft (WIP) Pull Requests",
    scenario: "An engineer wants to open a pull request to solicit early architecture feedback from peers and run CI validation, but wants to prevent the PR from being accidentally merged before completion.",
    question: "Which pull request mode should the engineer select?",
    options: [
      { id: 'A', text: "Assign the PR to a non-existent user" },
      { id: 'B', text: "Create as draft (Draft pull request)" },
      { id: 'C', text: "Set the PR title to DO NOT MERGE" },
      { id: 'D', text: "Lock the branch" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Creating a Draft Pull Request signals that work is in progress. Draft PRs run automated build validations and facilitate discussion while blocking the Complete/Merge button until the author clicks 'Publish'.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-requests#draft-pull-requests",
    tags: ["Draft PR", "Pull Requests", "Collaboration", "Quality"]
  },
  {
    id: "azure-az400-74",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Cross-Repository Pull Request Validation",
    scenario: "A core infrastructure repository requires that whenever a PR is created, it must trigger a build in a secondary consuming application repository to verify that changes do not break downstream APIs.",
    question: "How can cross-repository validation be implemented in Azure Pipelines?",
    options: [
      { id: 'A', text: "Configure pipeline resource triggers (resources.repositories) and use pipeline status checks via REST API or service connections" },
      { id: 'B', text: "Combine both repositories into a single Git branch" },
      { id: 'C', text: "Send manual emails to the downstream application team" },
      { id: 'D', text: "Disable branch policies" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Pipelines YAML supports referencing multiple repositories via `resources.repositories`. A validation pipeline can checkout both repositories and test downstream integration, reporting status back to the initiating pull request.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/multi-repo-checkout",
    tags: ["Multi-Repo", "CI/CD", "Validation", "Pipelines"]
  },
  {
    id: "azure-az400-75",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Clean Worktree Verification in Pipelines",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A pipeline task modifies files during the build. How can a CI validation step verify that no untracked files or unstaged changes were left behind?",
    options: [
      { id: 'A', text: "Run `git diff --exit-code && git status --porcelain` in a script task" },
      { id: 'B', text: "Run git init" },
      { id: 'C', text: "Delete the git folder" },
      { id: 'D', text: "Reboot the build agent" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Executing `git diff --exit-code` and checking `git status --porcelain` ensures that code generation or formatting tasks did not produce uncommitted modifications, failing the CI build if the worktree is dirty.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/scripts/cross-platform-scripting",
    tags: ["Git", "CI/CD", "Testing", "Clean Build"]
  }
];

export default AZURE_AZ400_QUESTIONS_3;
