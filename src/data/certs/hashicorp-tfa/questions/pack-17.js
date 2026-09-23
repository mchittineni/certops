export const HASHICORP_TFA_QUESTIONS_17 = [
  {
    id: "hashicorp-tfa-401",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Root Module vs Child Modules: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "The directory the CLI runs in is the root module, which calls the child modules." },
      { id: 'B', text: "Every subdirectory is treated as its own root module, and all of them run together." },
      { id: 'C', text: "Child modules run independently and return nothing to the root module." },
      { id: 'D', text: "Only the child modules run; the root directory holds the variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy","Root vs Child","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-402",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Root Module vs Child Modules: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Only the child modules run; the root directory holds the variables." },
      { id: 'B', text: "The directory the CLI runs in is the root module, which calls the child modules." },
      { id: 'C', text: "Child modules run independently and return nothing to the root module." },
      { id: 'D', text: "Every subdirectory is treated as its own root module, and all of them run together." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy","Root vs Child","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-403",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Root Module vs Child Modules: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "The directory the CLI runs in is the root module, which calls the child modules." },
      { id: 'B', text: "Every subdirectory is treated as its own root module, and all of them run together." },
      { id: 'C', text: "Child modules run independently and return nothing to the root module." },
      { id: 'D', text: "Only the child modules run; the root directory holds the variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy","Root vs Child","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-404",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Root Module vs Child Modules: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Child modules run independently and return nothing to the root module." },
      { id: 'B', text: "Every subdirectory is treated as its own root module, and all of them run together." },
      { id: 'C', text: "Only the child modules run; the root directory holds the variables." },
      { id: 'D', text: "The directory the CLI runs in is the root module, which calls the child modules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy","Root vs Child","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-405",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Root Module vs Child Modules: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to understand the execution hierarchy when running `terraform apply` in a directory containing multiple submodules.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "The directory the CLI runs in is the root module, which calls the child modules." },
      { id: 'B', text: "Every subdirectory is treated as its own root module, and all of them run together." },
      { id: 'C', text: "Child modules run independently and return nothing to the root module." },
      { id: 'D', text: "Only the child modules run; the root directory holds the variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The working directory where `terraform` CLI commands are executed is the root module, which calls and coordinates child modules. In Terraform, the configuration files in the working directory where you invoke the CLI constitute the 'root module'. Any module called by the root module via a `module` block is a 'child module'. Child modules can in turn call further nested child modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Module Hierarchy","Root vs Child","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-406",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "The Purpose of Terraform State: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "State is an optional cache that can be deleted before any apply without any effect at all." },
      { id: 'B', text: "State holds the credentials each provider used on the most recent run." },
      { id: 'C', text: "State is required by the provider APIs in order to process the requests." },
      { id: 'D', text: "State maps the configuration to real resource ids, and tracks metadata and dependencies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals","State Purpose","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-407",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "The Purpose of Terraform State: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "State maps the configuration to real resource ids, and tracks metadata and dependencies." },
      { id: 'B', text: "State is an optional cache that can be deleted before any apply without any effect at all." },
      { id: 'C', text: "State is required by the provider APIs in order to process the requests." },
      { id: 'D', text: "State holds the credentials each provider used on the most recent run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals","State Purpose","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-408",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "The Purpose of Terraform State: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "State is required by the provider APIs in order to process the requests." },
      { id: 'B', text: "State holds the credentials each provider used on the most recent run." },
      { id: 'C', text: "State maps the configuration to real resource ids, and tracks metadata and dependencies." },
      { id: 'D', text: "State is an optional cache that can be deleted before any apply without any effect at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals","State Purpose","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-409",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "The Purpose of Terraform State: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "State is an optional cache that can be deleted before any apply without any effect at all." },
      { id: 'B', text: "State maps the configuration to real resource ids, and tracks metadata and dependencies." },
      { id: 'C', text: "State holds the credentials each provider used on the most recent run." },
      { id: 'D', text: "State is required by the provider APIs in order to process the requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals","State Purpose","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-410",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "The Purpose of Terraform State: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to understand why Terraform requires a state file rather than querying cloud provider APIs directly on every single operation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "State maps the configuration to real resource ids, and tracks metadata and dependencies." },
      { id: 'B', text: "State is an optional cache that can be deleted before any apply without any effect at all." },
      { id: 'C', text: "State is required by the provider APIs in order to process the requests." },
      { id: 'D', text: "State holds the credentials each provider used on the most recent run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State maps declared configuration resources to real-world cloud IDs, tracks metadata/dependencies, and caches performance data. Terraform state (`terraform.tfstate`) is critical to Terraform operations. It maps declared resources in code to real-world cloud resource IDs, records resource dependencies, tracks sensitive values, and caches attribute data to avoid thousands of slow API calls during plan generation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Fundamentals","State Purpose","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-411",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Local vs Remote State Storage: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Commit the state file to the repository so each engineer pulls it first." },
      { id: 'B', text: "Nominate one engineer to run every apply from a single workstation." },
      { id: 'C', text: "Copy the state file between machines whenever a change is applied." },
      { id: 'D', text: "Configure a remote backend so the state is held centrally." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends","Remote State","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-412",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Local vs Remote State Storage: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Copy the state file between machines whenever a change is applied." },
      { id: 'B', text: "Configure a remote backend so the state is held centrally." },
      { id: 'C', text: "Commit the state file to the repository so each engineer pulls it first." },
      { id: 'D', text: "Nominate one engineer to run every apply from a single workstation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends","Remote State","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-413",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Local vs Remote State Storage: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Configure a remote backend so the state is held centrally." },
      { id: 'B', text: "Commit the state file to the repository so each engineer pulls it first." },
      { id: 'C', text: "Copy the state file between machines whenever a change is applied." },
      { id: 'D', text: "Nominate one engineer to run every apply from a single workstation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends","Remote State","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-414",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Local vs Remote State Storage: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Configure a remote backend so the state is held centrally." },
      { id: 'B', text: "Commit the state file to the repository so each engineer pulls it first." },
      { id: 'C', text: "Copy the state file between machines whenever a change is applied." },
      { id: 'D', text: "Nominate one engineer to run every apply from a single workstation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends","Remote State","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-415",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Local vs Remote State Storage: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to transition a team of six DevOps engineers from local state files on developer laptops to a shared, centralized state solution.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Configure a remote backend so the state is held centrally." },
      { id: 'B', text: "Commit the state file to the repository so each engineer pulls it first." },
      { id: 'C', text: "Copy the state file between machines whenever a change is applied." },
      { id: 'D', text: "Nominate one engineer to run every apply from a single workstation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a remote backend (such as Amazon S3, Azure Blob, or HCP Terraform) to store state in a centralized, accessible location. Local state files stored on disk prevent team collaboration, risk accidental deletion, cause race conditions, and expose sensitive credentials committed to version control. Remote backends centralize state in durable cloud storage, enabling secure multi-engineer collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
    tags: ["State Backends","Remote State","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-416",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "State Locking and Concurrency Protection: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Use a backend without any locking and agree a rota for who may apply and when they may." },
      { id: 'B', text: "Run each apply with `-lock=false` so no run is ever blocked by another." },
      { id: 'C', text: "Use a backend that supports state locking, such as S3 or HCP Terraform." },
      { id: 'D', text: "Run each apply through a pipeline with a concurrency group of one." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with `use_lockfile = true`, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., the S3 `.tflock` lockfile), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking","State Locking","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-417",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "State Locking and Concurrency Protection: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Use a backend that supports state locking, such as S3 or HCP Terraform." },
      { id: 'B', text: "Run each apply through a pipeline with a concurrency group of one." },
      { id: 'C', text: "Use a backend without any locking and agree a rota for who may apply and when they may." },
      { id: 'D', text: "Run each apply with `-lock=false` so no run is ever blocked by another." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with `use_lockfile = true`, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., the S3 `.tflock` lockfile), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking","State Locking","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-418",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "State Locking and Concurrency Protection: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run each apply with `-lock=false` so no run is ever blocked by another." },
      { id: 'B', text: "Use a backend without any locking and agree a rota for who may apply and when they may." },
      { id: 'C', text: "Run each apply through a pipeline with a concurrency group of one." },
      { id: 'D', text: "Use a backend that supports state locking, such as S3 or HCP Terraform." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with `use_lockfile = true`, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., the S3 `.tflock` lockfile), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking","State Locking","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-419",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "State Locking and Concurrency Protection: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Use a backend that supports state locking, such as S3 or HCP Terraform." },
      { id: 'B', text: "Run each apply through a pipeline with a concurrency group of one." },
      { id: 'C', text: "Use a backend without any locking and agree a rota for who may apply and when they may." },
      { id: 'D', text: "Run each apply with `-lock=false` so no run is ever blocked by another." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with `use_lockfile = true`, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., the S3 `.tflock` lockfile), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking","State Locking","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-420",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "State Locking and Concurrency Protection: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to prevent two engineers or CI pipelines from running `terraform apply` simultaneously and corrupting the shared remote state file.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run each apply through a pipeline with a concurrency group of one." },
      { id: 'B', text: "Run each apply with `-lock=false` so no run is ever blocked by another." },
      { id: 'C', text: "Use a backend without any locking and agree a rota for who may apply and when they may." },
      { id: 'D', text: "Use a backend that supports state locking, such as S3 or HCP Terraform." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a backend supporting state locking (e.g., Amazon S3 with `use_lockfile = true`, Azure Blob with native leases, or HCP Terraform). State locking prevents concurrent executions on the same state file, protecting against race conditions and state corruption. If supported by the backend (e.g., the S3 `.tflock` lockfile), Terraform acquires a lock before operations and releases it upon completion; concurrent runs are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State Locking","State Locking","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-421",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Remote Backend Configuration: S3 with Native Locking: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "A `backend \"s3\"` block with the bucket, key, region, encryption and `use_lockfile`." },
      { id: 'B', text: "A `backend \"local\"` block pointing at a path on the shared network filesystem instead." },
      { id: 'C', text: "A `backend \"s3\"` block with the bucket and key and no encryption set." },
      { id: 'D', text: "No backend block, so the state stays beside the configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `use_lockfile = true` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Setting `use_lockfile = true` (Terraform 1.10+) locks state with a `.tflock` object in the same bucket, replacing the deprecated `dynamodb_table` argument, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend","S3 Backend","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-422",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Remote Backend Configuration: S3 with Native Locking: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "No backend block, so the state stays beside the configuration." },
      { id: 'B', text: "A `backend \"s3\"` block with the bucket and key and no encryption set." },
      { id: 'C', text: "A `backend \"local\"` block pointing at a path on the shared network filesystem instead." },
      { id: 'D', text: "A `backend \"s3\"` block with the bucket, key, region, encryption and `use_lockfile`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `use_lockfile = true` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Setting `use_lockfile = true` (Terraform 1.10+) locks state with a `.tflock` object in the same bucket, replacing the deprecated `dynamodb_table` argument, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend","S3 Backend","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-423",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Remote Backend Configuration: S3 with Native Locking: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "No backend block, so the state stays beside the configuration." },
      { id: 'B', text: "A `backend \"s3\"` block with the bucket and key and no encryption set." },
      { id: 'C', text: "A `backend \"local\"` block pointing at a path on the shared network filesystem instead." },
      { id: 'D', text: "A `backend \"s3\"` block with the bucket, key, region, encryption and `use_lockfile`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `use_lockfile = true` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Setting `use_lockfile = true` (Terraform 1.10+) locks state with a `.tflock` object in the same bucket, replacing the deprecated `dynamodb_table` argument, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend","S3 Backend","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-424",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Remote Backend Configuration: S3 with Native Locking: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "A `backend \"s3\"` block with the bucket, key, region, encryption and `use_lockfile`." },
      { id: 'B', text: "A `backend \"local\"` block pointing at a path on the shared network filesystem instead." },
      { id: 'C', text: "A `backend \"s3\"` block with the bucket and key and no encryption set." },
      { id: 'D', text: "No backend block, so the state stays beside the configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `use_lockfile = true` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Setting `use_lockfile = true` (Terraform 1.10+) locks state with a `.tflock` object in the same bucket, replacing the deprecated `dynamodb_table` argument, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend","S3 Backend","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-425",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Remote Backend Configuration: S3 with Native Locking: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to configure an enterprise-standard remote backend for AWS with state persistence, KMS encryption, and distributed locking.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "A `backend \"s3\"` block with the bucket, key, region, encryption and `use_lockfile`." },
      { id: 'B', text: "A `backend \"local\"` block pointing at a path on the shared network filesystem instead." },
      { id: 'C', text: "A `backend \"s3\"` block with the bucket and key and no encryption set." },
      { id: 'D', text: "No backend block, so the state stays beside the configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `backend \"s3\"` specifying `bucket`, `key`, `region`, `encrypt = true`, and `use_lockfile = true` for state locking. The S3 backend stores state as an S3 object with versioning and server-side encryption (`encrypt = true`). Setting `use_lockfile = true` (Terraform 1.10+) locks state with a `.tflock` object in the same bucket, replacing the deprecated `dynamodb_table` argument, ensuring safe multi-user and CI/CD operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3",
    tags: ["S3 Backend","S3 Backend","Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_17;
