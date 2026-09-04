export const AZURE_AZ400_QUESTIONS_13 = [
  {
    id: "azure-az400-301",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Merge Types to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Squash merge vs rebase vs three-way merge in Azure Repos is under consideration.",
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
    tags: ["Merge Types", "Squash Merge", "Dr Failover"]
  },
  {
    id: "azure-az400-302",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Merge Types to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Squash merge vs rebase vs three-way merge in Azure Repos is under consideration.",
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
    tags: ["Merge Types", "Squash Merge", "High Load Scale"]
  },
  {
    id: "azure-az400-303",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Merge Types to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Squash merge vs rebase vs three-way merge in Azure Repos is under consideration.",
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
    tags: ["Merge Types", "Squash Merge", "Security Compliance"]
  },
  {
    id: "azure-az400-304",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Merge Types to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Squash merge vs rebase vs three-way merge in Azure Repos is under consideration.",
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
    tags: ["Merge Types", "Squash Merge", "Hybrid Migration"]
  },
  {
    id: "azure-az400-305",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Pull Request Merge Strategies: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Merge Types to maintain a clean, linear, and readable Git commit history on the `main` branch while consolidating dozens of small development commits into a single commit.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Squash merge vs rebase vs three-way merge in Azure Repos is under consideration.",
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
    tags: ["Merge Types", "Squash Merge", "Resilience Failure"]
  },
  {
    id: "azure-az400-306",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Large File Storage to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Tracking binary assets, datasets, and multimedia using Git Large File Storage (LFS) is under consideration.",
    options: [
      { id: 'A', text: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions." },
      { id: 'B', text: "Commit all binary files directly to standard Git history." },
      { id: 'C', text: "Zip binary files into multi-part archives and check them into source control." },
      { id: 'D', text: "Delete the Git repository history every time the repository exceeds 2GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage", "Git LFS", "Dr Failover"]
  },
  {
    id: "azure-az400-307",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Large File Storage to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Tracking binary assets, datasets, and multimedia using Git Large File Storage (LFS) is under consideration.",
    options: [
      { id: 'A', text: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions." },
      { id: 'B', text: "Commit all binary files directly to standard Git history." },
      { id: 'C', text: "Zip binary files into multi-part archives and check them into source control." },
      { id: 'D', text: "Delete the Git repository history every time the repository exceeds 2GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage", "Git LFS", "High Load Scale"]
  },
  {
    id: "azure-az400-308",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Large File Storage to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Tracking binary assets, datasets, and multimedia using Git Large File Storage (LFS) is under consideration.",
    options: [
      { id: 'A', text: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions." },
      { id: 'B', text: "Commit all binary files directly to standard Git history." },
      { id: 'C', text: "Zip binary files into multi-part archives and check them into source control." },
      { id: 'D', text: "Delete the Git repository history every time the repository exceeds 2GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage", "Git LFS", "Security Compliance"]
  },
  {
    id: "azure-az400-309",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Large File Storage to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Tracking binary assets, datasets, and multimedia using Git Large File Storage (LFS) is under consideration.",
    options: [
      { id: 'A', text: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions." },
      { id: 'B', text: "Commit all binary files directly to standard Git history." },
      { id: 'C', text: "Zip binary files into multi-part archives and check them into source control." },
      { id: 'D', text: "Delete the Git repository history every time the repository exceeds 2GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage", "Git LFS", "Hybrid Migration"]
  },
  {
    id: "azure-az400-310",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Managing Large Files with Git LFS: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Large File Storage to prevent repository bloat and slow clone times caused by developers committing large 500MB binary media files directly to a Git repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Tracking binary assets, datasets, and multimedia using Git Large File Storage (LFS) is under consideration.",
    options: [
      { id: 'A', text: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions." },
      { id: 'B', text: "Commit all binary files directly to standard Git history." },
      { id: 'C', text: "Zip binary files into multi-part archives and check them into source control." },
      { id: 'D', text: "Delete the Git repository history every time the repository exceeds 2GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Git Large File Storage (Git LFS) in the repository with a `.gitattributes` file tracking target binary file extensions. Standard Git stores full compressed copies of every version of every file. Git Large File Storage (LFS) replaces large files (audio, video, datasets) with tiny text pointers in Git, storing the actual binary payloads on remote LFS servers, keeping repository cloning fast.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/manage-large-files",
    tags: ["Large File Storage", "Git LFS", "Resilience Failure"]
  },
  {
    id: "azure-az400-311",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Repo Permissions to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Managing read, contribute, bypass policies, and force push permissions in Azure Repos is under consideration.",
    options: [
      { id: 'A', text: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group." },
      { id: 'B', text: "Grant full Project Administrator privileges to all contractor accounts." },
      { id: 'C', text: "Make the repository completely public with anonymous write access." },
      { id: 'D', text: "Rely on verbal instructions to not run git push --force." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions", "Repo Permissions", "Dr Failover"]
  },
  {
    id: "azure-az400-312",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Repo Permissions to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Managing read, contribute, bypass policies, and force push permissions in Azure Repos is under consideration.",
    options: [
      { id: 'A', text: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group." },
      { id: 'B', text: "Grant full Project Administrator privileges to all contractor accounts." },
      { id: 'C', text: "Make the repository completely public with anonymous write access." },
      { id: 'D', text: "Rely on verbal instructions to not run git push --force." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions", "Repo Permissions", "High Load Scale"]
  },
  {
    id: "azure-az400-313",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Repo Permissions to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Managing read, contribute, bypass policies, and force push permissions in Azure Repos is under consideration.",
    options: [
      { id: 'A', text: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group." },
      { id: 'B', text: "Grant full Project Administrator privileges to all contractor accounts." },
      { id: 'C', text: "Make the repository completely public with anonymous write access." },
      { id: 'D', text: "Rely on verbal instructions to not run git push --force." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions", "Repo Permissions", "Security Compliance"]
  },
  {
    id: "azure-az400-314",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Repo Permissions to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Managing read, contribute, bypass policies, and force push permissions in Azure Repos is under consideration.",
    options: [
      { id: 'A', text: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group." },
      { id: 'B', text: "Grant full Project Administrator privileges to all contractor accounts." },
      { id: 'C', text: "Make the repository completely public with anonymous write access." },
      { id: 'D', text: "Rely on verbal instructions to not run git push --force." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions", "Repo Permissions", "Hybrid Migration"]
  },
  {
    id: "azure-az400-315",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Repository Permissions and Security Gates: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Repo Permissions to prevent contractor developers from force-pushing, rewriting branch history, or creating new top-level branches in a corporate Azure Repos repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Managing read, contribute, bypass policies, and force push permissions in Azure Repos is under consideration.",
    options: [
      { id: 'A', text: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group." },
      { id: 'B', text: "Grant full Project Administrator privileges to all contractor accounts." },
      { id: 'C', text: "Make the repository completely public with anonymous write access." },
      { id: 'D', text: "Rely on verbal instructions to not run git push --force." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly deny `Force push (rewrite history)`, `Bypass policies when completing pull requests`, and `Create branch` permissions for the Contractors group. Azure Repos provides granular access control at the organization, project, repository, and branch levels. Explicitly setting `Deny` on `Force push` and `Bypass policies` prevents users from overwriting commits or circumventing review requirements, maintaining repository integrity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Repo Permissions", "Repo Permissions", "Resilience Failure"]
  },
  {
    id: "azure-az400-316",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Repository Architecture to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Triggering selective CI/CD pipelines in monorepos using path filters is under consideration.",
    options: [
      { id: 'A', text: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`)." },
      { id: 'B', text: "Trigger all 50 microservice builds simultaneously on every single commit across the monorepo." },
      { id: 'C', text: "Split the repository into 50 standalone Git repos without dependency tooling." },
      { id: 'D', text: "Require developers to manually trigger build pipelines after every push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture", "Path Filters", "Dr Failover"]
  },
  {
    id: "azure-az400-317",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Repository Architecture to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Triggering selective CI/CD pipelines in monorepos using path filters is under consideration.",
    options: [
      { id: 'A', text: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`)." },
      { id: 'B', text: "Trigger all 50 microservice builds simultaneously on every single commit across the monorepo." },
      { id: 'C', text: "Split the repository into 50 standalone Git repos without dependency tooling." },
      { id: 'D', text: "Require developers to manually trigger build pipelines after every push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture", "Path Filters", "High Load Scale"]
  },
  {
    id: "azure-az400-318",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Repository Architecture to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Triggering selective CI/CD pipelines in monorepos using path filters is under consideration.",
    options: [
      { id: 'A', text: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`)." },
      { id: 'B', text: "Trigger all 50 microservice builds simultaneously on every single commit across the monorepo." },
      { id: 'C', text: "Split the repository into 50 standalone Git repos without dependency tooling." },
      { id: 'D', text: "Require developers to manually trigger build pipelines after every push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture", "Path Filters", "Security Compliance"]
  },
  {
    id: "azure-az400-319",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Repository Architecture to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Triggering selective CI/CD pipelines in monorepos using path filters is under consideration.",
    options: [
      { id: 'A', text: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`)." },
      { id: 'B', text: "Trigger all 50 microservice builds simultaneously on every single commit across the monorepo." },
      { id: 'C', text: "Split the repository into 50 standalone Git repos without dependency tooling." },
      { id: 'D', text: "Require developers to manually trigger build pipelines after every push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture", "Path Filters", "Hybrid Migration"]
  },
  {
    id: "azure-az400-320",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Monorepo vs Multi-Repo Strategies and Path Filters: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Repository Architecture to trigger CI/CD builds only for the specific microservice whose code was modified within a large multi-service monorepo.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Triggering selective CI/CD pipelines in monorepos using path filters is under consideration.",
    options: [
      { id: 'A', text: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`)." },
      { id: 'B', text: "Trigger all 50 microservice builds simultaneously on every single commit across the monorepo." },
      { id: 'C', text: "Split the repository into 50 standalone Git repos without dependency tooling." },
      { id: 'D', text: "Require developers to manually trigger build pipelines after every push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CI trigger `paths` filters in the Azure Pipelines YAML file (e.g., `paths: include: [src/billing/**]`). In a monorepo containing multiple services, defining path filters in YAML pipelines (`trigger.paths.include` and `pr.paths.include`) ensures that a pipeline executes only when commits touch files within its specific directory, conserving build agent capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Repository Architecture", "Path Filters", "Resilience Failure"]
  },
  {
    id: "azure-az400-321",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Secret Remediation to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Removing accidentally committed passwords and API keys using git-filter-repo is under consideration.",
    options: [
      { id: 'A', text: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push." },
      { id: 'B', text: "Make a new commit deleting the credentials file and assume previous history is inaccessible." },
      { id: 'C', text: "Add the file name to `.gitignore` and assume past commits are automatically scrubbed." },
      { id: 'D', text: "Delete the entire Azure DevOps project and rebuild all infrastructure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation", "Purging Secrets", "Dr Failover"]
  },
  {
    id: "azure-az400-322",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Secret Remediation to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Removing accidentally committed passwords and API keys using git-filter-repo is under consideration.",
    options: [
      { id: 'A', text: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push." },
      { id: 'B', text: "Make a new commit deleting the credentials file and assume previous history is inaccessible." },
      { id: 'C', text: "Add the file name to `.gitignore` and assume past commits are automatically scrubbed." },
      { id: 'D', text: "Delete the entire Azure DevOps project and rebuild all infrastructure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation", "Purging Secrets", "High Load Scale"]
  },
  {
    id: "azure-az400-323",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Secret Remediation to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Removing accidentally committed passwords and API keys using git-filter-repo is under consideration.",
    options: [
      { id: 'A', text: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push." },
      { id: 'B', text: "Make a new commit deleting the credentials file and assume previous history is inaccessible." },
      { id: 'C', text: "Add the file name to `.gitignore` and assume past commits are automatically scrubbed." },
      { id: 'D', text: "Delete the entire Azure DevOps project and rebuild all infrastructure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation", "Purging Secrets", "Security Compliance"]
  },
  {
    id: "azure-az400-324",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Secret Remediation to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Removing accidentally committed passwords and API keys using git-filter-repo is under consideration.",
    options: [
      { id: 'A', text: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push." },
      { id: 'B', text: "Make a new commit deleting the credentials file and assume previous history is inaccessible." },
      { id: 'C', text: "Add the file name to `.gitignore` and assume past commits are automatically scrubbed." },
      { id: 'D', text: "Delete the entire Azure DevOps project and rebuild all infrastructure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation", "Purging Secrets", "Hybrid Migration"]
  },
  {
    id: "azure-az400-325",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Purging Sensitive Data from Git History: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Secret Remediation to completely expunge an accidentally committed production connection string and certificate private key from all branches and commit history in a Git repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Removing accidentally committed passwords and API keys using git-filter-repo is under consideration.",
    options: [
      { id: 'A', text: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push." },
      { id: 'B', text: "Make a new commit deleting the credentials file and assume previous history is inaccessible." },
      { id: 'C', text: "Add the file name to `.gitignore` and assume past commits are automatically scrubbed." },
      { id: 'D', text: "Delete the entire Azure DevOps project and rebuild all infrastructure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the compromised credentials immediately, and rewrite repository history using `git-filter-repo` (or BFG Repo-Cleaner) followed by a forced push. Commits in Git are immutable; adding a new commit that deletes a secret leaves the sensitive data visible in earlier history. Remediating leaked secrets requires immediately rotating the credential, rewriting history using `git-filter-repo`, and forcing updates to all remote branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/remove-sensitive-data",
    tags: ["Secret Remediation", "Purging Secrets", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_13;
