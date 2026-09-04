export const HASHICORP_TFA_QUESTIONS_17 = [
  {
    id: "hashicorp-tfa-401",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Root Module vs Child Modules: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Module Hierarchy to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Understanding the root module context and its relationship to called child modules is under consideration.",
    options: [
      { id: 'A', text: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules." },
      { id: 'B', text: "Every subfolder is automatically a root module executing simultaneously." },
      { id: 'C', text: "Child modules execute completely independently without passing values back to the root module." },
      { id: 'D', text: "Terraform only executes child modules and ignores the root directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy", "Root vs Child", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-402",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Root Module vs Child Modules: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Module Hierarchy to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Understanding the root module context and its relationship to called child modules is under consideration.",
    options: [
      { id: 'A', text: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules." },
      { id: 'B', text: "Every subfolder is automatically a root module executing simultaneously." },
      { id: 'C', text: "Child modules execute completely independently without passing values back to the root module." },
      { id: 'D', text: "Terraform only executes child modules and ignores the root directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy", "Root vs Child", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-403",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Root Module vs Child Modules: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Module Hierarchy to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Understanding the root module context and its relationship to called child modules is under consideration.",
    options: [
      { id: 'A', text: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules." },
      { id: 'B', text: "Every subfolder is automatically a root module executing simultaneously." },
      { id: 'C', text: "Child modules execute completely independently without passing values back to the root module." },
      { id: 'D', text: "Terraform only executes child modules and ignores the root directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy", "Root vs Child", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-404",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Root Module vs Child Modules: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Module Hierarchy to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Understanding the root module context and its relationship to called child modules is under consideration.",
    options: [
      { id: 'A', text: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules." },
      { id: 'B', text: "Every subfolder is automatically a root module executing simultaneously." },
      { id: 'C', text: "Child modules execute completely independently without passing values back to the root module." },
      { id: 'D', text: "Terraform only executes child modules and ignores the root directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy", "Root vs Child", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-405",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Root Module vs Child Modules: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Module Hierarchy to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Understanding the root module context and its relationship to called child modules is under consideration.",
    options: [
      { id: 'A', text: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules." },
      { id: 'B', text: "Every subfolder is automatically a root module executing simultaneously." },
      { id: 'C', text: "Child modules execute completely independently without passing values back to the root module." },
      { id: 'D', text: "Terraform only executes child modules and ignores the root directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy", "Root vs Child", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-406",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "The Purpose of Terraform State: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates State Fundamentals to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Mapping real-world resources to configuration and tracking metadata and dependencies is under consideration.",
    options: [
      { id: 'A', text: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data." },
      { id: 'B', text: "State is only an optional cache that can be deleted before every apply without consequence." },
      { id: 'C', text: "Cloud providers require state files to process API requests." },
      { id: 'D', text: "State files are only used to store developer login passwords." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals", "State Purpose", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-407",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "The Purpose of Terraform State: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates State Fundamentals to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Mapping real-world resources to configuration and tracking metadata and dependencies is under consideration.",
    options: [
      { id: 'A', text: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data." },
      { id: 'B', text: "State is only an optional cache that can be deleted before every apply without consequence." },
      { id: 'C', text: "Cloud providers require state files to process API requests." },
      { id: 'D', text: "State files are only used to store developer login passwords." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals", "State Purpose", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-408",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "The Purpose of Terraform State: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates State Fundamentals to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Mapping real-world resources to configuration and tracking metadata and dependencies is under consideration.",
    options: [
      { id: 'A', text: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data." },
      { id: 'B', text: "State is only an optional cache that can be deleted before every apply without consequence." },
      { id: 'C', text: "Cloud providers require state files to process API requests." },
      { id: 'D', text: "State files are only used to store developer login passwords." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals", "State Purpose", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-409",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "The Purpose of Terraform State: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates State Fundamentals to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Mapping real-world resources to configuration and tracking metadata and dependencies is under consideration.",
    options: [
      { id: 'A', text: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data." },
      { id: 'B', text: "State is only an optional cache that can be deleted before every apply without consequence." },
      { id: 'C', text: "Cloud providers require state files to process API requests." },
      { id: 'D', text: "State files are only used to store developer login passwords." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals", "State Purpose", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-410",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "The Purpose of Terraform State: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates State Fundamentals to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Mapping real-world resources to configuration and tracking metadata and dependencies is under consideration.",
    options: [
      { id: 'A', text: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data." },
      { id: 'B', text: "State is only an optional cache that can be deleted before every apply without consequence." },
      { id: 'C', text: "Cloud providers require state files to process API requests." },
      { id: 'D', text: "State files are only used to store developer login passwords." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals", "State Purpose", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-411",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Local vs Remote State Storage: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates State Backends to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Local state file risks vs remote backend benefits (centralization, team access) is under consideration.",
    options: [
      { id: 'A', text: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location." },
      { id: 'B', text: "Commit the local `terraform.tfstate` file to a public GitHub repository." },
      { id: 'C', text: "Copy the state file manually across developer laptops using USB flash drives." },
      { id: 'D', text: "Require all six engineers to take turns using a single shared physical laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends", "Remote State", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-412",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Local vs Remote State Storage: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates State Backends to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Local state file risks vs remote backend benefits (centralization, team access) is under consideration.",
    options: [
      { id: 'A', text: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location." },
      { id: 'B', text: "Commit the local `terraform.tfstate` file to a public GitHub repository." },
      { id: 'C', text: "Copy the state file manually across developer laptops using USB flash drives." },
      { id: 'D', text: "Require all six engineers to take turns using a single shared physical laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends", "Remote State", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-413",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Local vs Remote State Storage: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates State Backends to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Local state file risks vs remote backend benefits (centralization, team access) is under consideration.",
    options: [
      { id: 'A', text: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location." },
      { id: 'B', text: "Commit the local `terraform.tfstate` file to a public GitHub repository." },
      { id: 'C', text: "Copy the state file manually across developer laptops using USB flash drives." },
      { id: 'D', text: "Require all six engineers to take turns using a single shared physical laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends", "Remote State", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-414",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Local vs Remote State Storage: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates State Backends to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Local state file risks vs remote backend benefits (centralization, team access) is under consideration.",
    options: [
      { id: 'A', text: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location." },
      { id: 'B', text: "Commit the local `terraform.tfstate` file to a public GitHub repository." },
      { id: 'C', text: "Copy the state file manually across developer laptops using USB flash drives." },
      { id: 'D', text: "Require all six engineers to take turns using a single shared physical laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends", "Remote State", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-415",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Local vs Remote State Storage: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates State Backends to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Local state file risks vs remote backend benefits (centralization, team access) is under consideration.",
    options: [
      { id: 'A', text: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location." },
      { id: 'B', text: "Commit the local `terraform.tfstate` file to a public GitHub repository." },
      { id: 'C', text: "Copy the state file manually across developer laptops using USB flash drives." },
      { id: 'D', text: "Require all six engineers to take turns using a single shared physical laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends", "Remote State", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-416",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Locking and Concurrency Protection: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates State Locking to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Preventing concurrent applies and state corruption with DynamoDB / native backend locks is under consideration.",
    options: [
      { id: 'A', text: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform)." },
      { id: 'B', text: "Trust team members to verbally check with each other before running commands." },
      { id: 'C', text: "Delete the state file whenever a collision occurs." },
      { id: 'D', text: "Run `terraform apply` with the `-force` flag to overwrite locks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., S3 with DynamoDB `LockID`), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking", "State Locking", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-417",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Locking and Concurrency Protection: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates State Locking to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Preventing concurrent applies and state corruption with DynamoDB / native backend locks is under consideration.",
    options: [
      { id: 'A', text: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform)." },
      { id: 'B', text: "Trust team members to verbally check with each other before running commands." },
      { id: 'C', text: "Delete the state file whenever a collision occurs." },
      { id: 'D', text: "Run `terraform apply` with the `-force` flag to overwrite locks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., S3 with DynamoDB `LockID`), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking", "State Locking", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-418",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Locking and Concurrency Protection: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates State Locking to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Preventing concurrent applies and state corruption with DynamoDB / native backend locks is under consideration.",
    options: [
      { id: 'A', text: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform)." },
      { id: 'B', text: "Trust team members to verbally check with each other before running commands." },
      { id: 'C', text: "Delete the state file whenever a collision occurs." },
      { id: 'D', text: "Run `terraform apply` with the `-force` flag to overwrite locks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., S3 with DynamoDB `LockID`), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking", "State Locking", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-419",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Locking and Concurrency Protection: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates State Locking to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Preventing concurrent applies and state corruption with DynamoDB / native backend locks is under consideration.",
    options: [
      { id: 'A', text: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform)." },
      { id: 'B', text: "Trust team members to verbally check with each other before running commands." },
      { id: 'C', text: "Delete the state file whenever a collision occurs." },
      { id: 'D', text: "Run `terraform apply` with the `-force` flag to overwrite locks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., S3 with DynamoDB `LockID`), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking", "State Locking", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-420",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Locking and Concurrency Protection: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates State Locking to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Preventing concurrent applies and state corruption with DynamoDB / native backend locks is under consideration.",
    options: [
      { id: 'A', text: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform)." },
      { id: 'B', text: "Trust team members to verbally check with each other before running commands." },
      { id: 'C', text: "Delete the state file whenever a collision occurs." },
      { id: 'D', text: "Run `terraform apply` with the `-force` flag to overwrite locks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with DynamoDB table, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., S3 with DynamoDB `LockID`), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking", "State Locking", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-421",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote Backend Configuration: S3 with DynamoDB: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates S3 Backend to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Configuring backend s3 with bucket, key, region, and dynamodb_table for locking is under consideration.",
    options: [
      { id: 'A', text: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking." },
      { id: 'B', text: "Configure `backend \"local\"` pointing to `/tmp/state.tfstate`." },
      { id: 'C', text: "Store state in an unencrypted public S3 bucket with anonymous write access." },
      { id: 'D', text: "Omit backend configuration entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Configuring `dynamodb_table` enables automated distributed state locking via DynamoDB primary key `LockID`, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend", "S3 Backend", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-422",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote Backend Configuration: S3 with DynamoDB: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates S3 Backend to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Configuring backend s3 with bucket, key, region, and dynamodb_table for locking is under consideration.",
    options: [
      { id: 'A', text: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking." },
      { id: 'B', text: "Configure `backend \"local\"` pointing to `/tmp/state.tfstate`." },
      { id: 'C', text: "Store state in an unencrypted public S3 bucket with anonymous write access." },
      { id: 'D', text: "Omit backend configuration entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Configuring `dynamodb_table` enables automated distributed state locking via DynamoDB primary key `LockID`, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend", "S3 Backend", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-423",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote Backend Configuration: S3 with DynamoDB: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates S3 Backend to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring backend s3 with bucket, key, region, and dynamodb_table for locking is under consideration.",
    options: [
      { id: 'A', text: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking." },
      { id: 'B', text: "Configure `backend \"local\"` pointing to `/tmp/state.tfstate`." },
      { id: 'C', text: "Store state in an unencrypted public S3 bucket with anonymous write access." },
      { id: 'D', text: "Omit backend configuration entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Configuring `dynamodb_table` enables automated distributed state locking via DynamoDB primary key `LockID`, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend", "S3 Backend", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-424",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote Backend Configuration: S3 with DynamoDB: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates S3 Backend to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring backend s3 with bucket, key, region, and dynamodb_table for locking is under consideration.",
    options: [
      { id: 'A', text: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking." },
      { id: 'B', text: "Configure `backend \"local\"` pointing to `/tmp/state.tfstate`." },
      { id: 'C', text: "Store state in an unencrypted public S3 bucket with anonymous write access." },
      { id: 'D', text: "Omit backend configuration entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Configuring `dynamodb_table` enables automated distributed state locking via DynamoDB primary key `LockID`, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend", "S3 Backend", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-425",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote Backend Configuration: S3 with DynamoDB: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates S3 Backend to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring backend s3 with bucket, key, region, and dynamodb_table for locking is under consideration.",
    options: [
      { id: 'A', text: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking." },
      { id: 'B', text: "Configure `backend \"local\"` pointing to `/tmp/state.tfstate`." },
      { id: 'C', text: "Store state in an unencrypted public S3 bucket with anonymous write access." },
      { id: 'D', text: "Omit backend configuration entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `dynamodb_table` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Configuring `dynamodb_table` enables automated distributed state locking via DynamoDB primary key `LockID`, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend", "S3 Backend", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_17;
