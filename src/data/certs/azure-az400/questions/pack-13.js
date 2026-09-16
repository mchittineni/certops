export const AZURE_AZ400_QUESTIONS_13 = [
  {
    id: "azure-az400-301",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Disable pull requests and use git rebase --force on the main branch." },
      { id: 'B', text: "Configure the branch policy to enforce `Squash merge` on pull request completion." },
      { id: 'C', text: "Allow developers to push unmerged detached HEAD commits directly." },
      { id: 'D', text: "Enforce basic merge (no fast-forward) creating cluttering merge commits for every change." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure the branch policy to enforce `Squash merge` on pull request completion. Squash merging compresses all commits in a feature branch into a single, clean commit on the target branch upon pull request completion. This produces a linear, readable history in `main` where each commit corresponds to an entire tested feature or bug fix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/merging-with-squash",
    tags: ["Merge Types","Squash Merge","Dr Failover"]
  },
  {
    id: "azure-az400-302",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Configure the branch policy to enforce `Squash merge` on pull request completion." },
      { id: 'B', text: "Enforce basic merge (no fast-forward) creating cluttering merge commits for every change." },
      { id: 'C', text: "Allow developers to push unmerged detached HEAD commits directly." },
      { id: 'D', text: "Disable pull requests and use git rebase --force on the main branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the branch policy to enforce `Squash merge` on pull request completion. Squash merging compresses all commits in a feature branch into a single, clean commit on the target branch upon pull request completion. This produces a linear, readable history in `main` where each commit corresponds to an entire tested feature or bug fix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/merging-with-squash",
    tags: ["Merge Types","Squash Merge","High Load Scale"]
  },
  {
    id: "azure-az400-303",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Disable pull requests and use git rebase --force on the main branch." },
      { id: 'B', text: "Configure the branch policy to enforce `Squash merge` on pull request completion." },
      { id: 'C', text: "Allow developers to push unmerged detached HEAD commits directly." },
      { id: 'D', text: "Enforce basic merge (no fast-forward) creating cluttering merge commits for every change." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure the branch policy to enforce `Squash merge` on pull request completion. Squash merging compresses all commits in a feature branch into a single, clean commit on the target branch upon pull request completion. This produces a linear, readable history in `main` where each commit corresponds to an entire tested feature or bug fix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/merging-with-squash",
    tags: ["Merge Types","Squash Merge","Security Compliance"]
  },
  {
    id: "azure-az400-304",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Configure the branch policy to enforce `Squash merge` on pull request completion." },
      { id: 'B', text: "Enforce basic merge (no fast-forward) creating cluttering merge commits for every change." },
      { id: 'C', text: "Allow developers to push unmerged detached HEAD commits directly." },
      { id: 'D', text: "Disable pull requests and use git rebase --force on the main branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the branch policy to enforce `Squash merge` on pull request completion. Squash merging compresses all commits in a feature branch into a single, clean commit on the target branch upon pull request completion. This produces a linear, readable history in `main` where each commit corresponds to an entire tested feature or bug fix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/merging-with-squash",
    tags: ["Merge Types","Squash Merge","Hybrid Migration"]
  },
  {
    id: "azure-az400-305",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enforce basic merge (no fast-forward) creating cluttering merge commits for every change." },
      { id: 'B', text: "Disable pull requests and use git rebase --force on the main branch." },
      { id: 'C', text: "Allow developers to push unmerged detached HEAD commits directly." },
      { id: 'D', text: "Configure the branch policy to enforce `Squash merge` on pull request completion." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the branch policy to enforce `Squash merge` on pull request completion. Squash merging compresses all commits in a feature branch into a single, clean commit on the target branch upon pull request completion. This produces a linear, readable history in `main` where each commit corresponds to an entire tested feature or bug fix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/merging-with-squash",
    tags: ["Merge Types","Squash Merge","Resilience Failure"]
  },
  {
    id: "azure-az400-306",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Enable a repository size push policy that rejects any commit larger than 100 megabytes." },
      { id: 'B', text: "Enable shallow fetch on the pipeline so clones stop pulling the full binary history." },
      { id: 'C', text: "Enable Git sparse-checkout so working copies exclude the directory holding the media." },
      { id: 'D', text: "Enable Git LFS and track the binary extensions in the repository's `.gitattributes`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage","Git LFS","Dr Failover"]
  },
  {
    id: "azure-az400-307",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Enable Git LFS and track the binary extensions in the repository's `.gitattributes`." },
      { id: 'B', text: "Enable shallow fetch on the pipeline so clones stop pulling the full binary history." },
      { id: 'C', text: "Enable a repository size push policy that rejects any commit larger than 100 megabytes." },
      { id: 'D', text: "Enable Git sparse-checkout so working copies exclude the directory holding the media." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage","Git LFS","High Load Scale"]
  },
  {
    id: "azure-az400-308",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Enable Git LFS and track the binary extensions in the repository's `.gitattributes`." },
      { id: 'B', text: "Enable shallow fetch on the pipeline so clones stop pulling the full binary history." },
      { id: 'C', text: "Enable a repository size push policy that rejects any commit larger than 100 megabytes." },
      { id: 'D', text: "Enable Git sparse-checkout so working copies exclude the directory holding the media." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage","Git LFS","Security Compliance"]
  },
  {
    id: "azure-az400-309",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Enable Git LFS and track the binary extensions in the repository's `.gitattributes`." },
      { id: 'B', text: "Enable shallow fetch on the pipeline so clones stop pulling the full binary history." },
      { id: 'C', text: "Enable a repository size push policy that rejects any commit larger than 100 megabytes." },
      { id: 'D', text: "Enable Git sparse-checkout so working copies exclude the directory holding the media." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage","Git LFS","Hybrid Migration"]
  },
  {
    id: "azure-az400-310",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable shallow fetch on the pipeline so clones stop pulling the full binary history." },
      { id: 'B', text: "Enable a repository size push policy that rejects any commit larger than 100 megabytes." },
      { id: 'C', text: "Enable Git LFS and track the binary extensions in the repository's `.gitattributes`." },
      { id: 'D', text: "Enable Git sparse-checkout so working copies exclude the directory holding the media." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage","Git LFS","Resilience Failure"]
  },
  {
    id: "azure-az400-311",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Deny the Contractors group the Force Push, Bypass policies, and Create branch repository permissions." },
      { id: 'B', text: "Deny the Contractors group the Contribute permission and let them work through forks of the repository." },
      { id: 'C', text: "Add a branch policy on every branch requiring two reviewers before any push can be completed." },
      { id: 'D', text: "Enable a push policy that rejects commits whose author email is outside the corporate domain." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions","Repo Permissions","Dr Failover"]
  },
  {
    id: "azure-az400-312",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Deny the Contractors group the Force Push, Bypass policies, and Create branch repository permissions." },
      { id: 'B', text: "Add a branch policy on every branch requiring two reviewers before any push can be completed." },
      { id: 'C', text: "Enable a push policy that rejects commits whose author email is outside the corporate domain." },
      { id: 'D', text: "Deny the Contractors group the Contribute permission and let them work through forks of the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions","Repo Permissions","High Load Scale"]
  },
  {
    id: "azure-az400-313",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Deny the Contractors group the Force Push, Bypass policies, and Create branch repository permissions." },
      { id: 'B', text: "Add a branch policy on every branch requiring two reviewers before any push can be completed." },
      { id: 'C', text: "Enable a push policy that rejects commits whose author email is outside the corporate domain." },
      { id: 'D', text: "Deny the Contractors group the Contribute permission and let them work through forks of the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions","Repo Permissions","Security Compliance"]
  },
  {
    id: "azure-az400-314",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Deny the Contractors group the Force Push, Bypass policies, and Create branch repository permissions." },
      { id: 'B', text: "Add a branch policy on every branch requiring two reviewers before any push can be completed." },
      { id: 'C', text: "Enable a push policy that rejects commits whose author email is outside the corporate domain." },
      { id: 'D', text: "Deny the Contractors group the Contribute permission and let them work through forks of the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions","Repo Permissions","Hybrid Migration"]
  },
  {
    id: "azure-az400-315",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable a push policy that rejects commits whose author email is outside the corporate domain." },
      { id: 'B', text: "Deny the Contractors group the Contribute permission and let them work through forks of the repository." },
      { id: 'C', text: "Deny the Contractors group the Force Push, Bypass policies, and Create branch repository permissions." },
      { id: 'D', text: "Add a branch policy on every branch requiring two reviewers before any push can be completed." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions","Repo Permissions","Resilience Failure"]
  },
  {
    id: "azure-az400-316",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Add `paths: exclude: [docs/**]` to the CI trigger and leave the branch filter open." },
      { id: 'B', text: "Add `paths: include: [src/billing/**]` to the CI trigger in each service's pipeline." },
      { id: 'C', text: "Add a `trigger: none` block and start each service's pipeline from a scheduled run." },
      { id: 'D', text: "Add a build validation policy per service and let the pull request decide what runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture","Path Filters","Dr Failover"]
  },
  {
    id: "azure-az400-317",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Add `paths: include: [src/billing/**]` to the CI trigger in each service's pipeline." },
      { id: 'B', text: "Add `paths: exclude: [docs/**]` to the CI trigger and leave the branch filter open." },
      { id: 'C', text: "Add a build validation policy per service and let the pull request decide what runs." },
      { id: 'D', text: "Add a `trigger: none` block and start each service's pipeline from a scheduled run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture","Path Filters","High Load Scale"]
  },
  {
    id: "azure-az400-318",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Add a build validation policy per service and let the pull request decide what runs." },
      { id: 'B', text: "Add a `trigger: none` block and start each service's pipeline from a scheduled run." },
      { id: 'C', text: "Add `paths: include: [src/billing/**]` to the CI trigger in each service's pipeline." },
      { id: 'D', text: "Add `paths: exclude: [docs/**]` to the CI trigger and leave the branch filter open." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture","Path Filters","Security Compliance"]
  },
  {
    id: "azure-az400-319",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Add `paths: include: [src/billing/**]` to the CI trigger in each service's pipeline." },
      { id: 'B', text: "Add `paths: exclude: [docs/**]` to the CI trigger and leave the branch filter open." },
      { id: 'C', text: "Add a build validation policy per service and let the pull request decide what runs." },
      { id: 'D', text: "Add a `trigger: none` block and start each service's pipeline from a scheduled run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture","Path Filters","Hybrid Migration"]
  },
  {
    id: "azure-az400-320",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add `paths: exclude: [docs/**]` to the CI trigger and leave the branch filter open." },
      { id: 'B', text: "Add a `trigger: none` block and start each service's pipeline from a scheduled run." },
      { id: 'C', text: "Add a build validation policy per service and let the pull request decide what runs." },
      { id: 'D', text: "Add `paths: include: [src/billing/**]` to the CI trigger in each service's pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture","Path Filters","Resilience Failure"]
  },
  {
    id: "azure-az400-321",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Rotate the exposed credentials, then add the file to `.gitignore` and commit the removal." },
      { id: 'B', text: "Rotate the exposed credentials, then squash the offending branch and merge it back into `main`." },
      { id: 'C', text: "Rotate the exposed credentials, then rewrite history with `git-filter-repo` and force-push." },
      { id: 'D', text: "Rotate the exposed credentials, then run `git rm --cached` on the file and push the deletion." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation","Purging Secrets","Dr Failover"]
  },
  {
    id: "azure-az400-322",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Rotate the exposed credentials, then add the file to `.gitignore` and commit the removal." },
      { id: 'B', text: "Rotate the exposed credentials, then run `git rm --cached` on the file and push the deletion." },
      { id: 'C', text: "Rotate the exposed credentials, then squash the offending branch and merge it back into `main`." },
      { id: 'D', text: "Rotate the exposed credentials, then rewrite history with `git-filter-repo` and force-push." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation","Purging Secrets","High Load Scale"]
  },
  {
    id: "azure-az400-323",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Rotate the exposed credentials, then run `git rm --cached` on the file and push the deletion." },
      { id: 'B', text: "Rotate the exposed credentials, then squash the offending branch and merge it back into `main`." },
      { id: 'C', text: "Rotate the exposed credentials, then add the file to `.gitignore` and commit the removal." },
      { id: 'D', text: "Rotate the exposed credentials, then rewrite history with `git-filter-repo` and force-push." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation","Purging Secrets","Security Compliance"]
  },
  {
    id: "azure-az400-324",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Rotate the exposed credentials, then rewrite history with `git-filter-repo` and force-push." },
      { id: 'B', text: "Rotate the exposed credentials, then run `git rm --cached` on the file and push the deletion." },
      { id: 'C', text: "Rotate the exposed credentials, then add the file to `.gitignore` and commit the removal." },
      { id: 'D', text: "Rotate the exposed credentials, then squash the offending branch and merge it back into `main`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation","Purging Secrets","Hybrid Migration"]
  },
  {
    id: "azure-az400-325",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Rotate the exposed credentials, then rewrite history with `git-filter-repo` and force-push." },
      { id: 'B', text: "Rotate the exposed credentials, then run `git rm --cached` on the file and push the deletion." },
      { id: 'C', text: "Rotate the exposed credentials, then add the file to `.gitignore` and commit the removal." },
      { id: 'D', text: "Rotate the exposed credentials, then squash the offending branch and merge it back into `main`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation","Purging Secrets","Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_13;
