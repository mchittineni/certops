export const HASHICORP_TFA_QUESTIONS_16 = [
  {
    id: "hashicorp-tfa-376",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Passing Inputs and Accessing Module Outputs: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'B', text: "Reference child module resources directly using `aws_vpc.this.id`." },
      { id: 'C', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." },
      { id: 'D', text: "Write the VPC ID out to a text file on the local machine and read it back in with a shell script." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs","Module Outputs","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-377",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Passing Inputs and Accessing Module Outputs: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Write the VPC ID out to a text file on the local machine and read it back in with a shell script." },
      { id: 'B', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'C', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." },
      { id: 'D', text: "Reference child module resources directly using `aws_vpc.this.id`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs","Module Outputs","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-378",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Passing Inputs and Accessing Module Outputs: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Write the VPC ID out to a text file on the local machine and read it back in with a shell script." },
      { id: 'B', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'C', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." },
      { id: 'D', text: "Reference child module resources directly using `aws_vpc.this.id`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs","Module Outputs","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-379",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Passing Inputs and Accessing Module Outputs: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'B', text: "Write the VPC ID out to a text file on the local machine and read it back in with a shell script." },
      { id: 'C', text: "Reference child module resources directly using `aws_vpc.this.id`." },
      { id: 'D', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs","Module Outputs","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-380",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Passing Inputs and Accessing Module Outputs: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Write the VPC ID out to a text file on the local machine and read it back in with a shell script." },
      { id: 'B', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'C', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." },
      { id: 'D', text: "Reference child module resources directly using `aws_vpc.this.id`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs","Module Outputs","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-381",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d8",
    domainName: "HCP Terraform",
    title: "Terraform Public and Private Registries: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Publish the modules to a private registry linked to the internal repositories." },
      { id: 'B', text: "Publish the modules to the public registry under the company's own namespace there." },
      { id: 'C', text: "Distribute the modules as archives in the internal artifact repository." },
      { id: 'D', text: "Have each team vendor the module's files into its own repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries","Private Module Registry","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-382",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d8",
    domainName: "HCP Terraform",
    title: "Terraform Public and Private Registries: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Distribute the modules as archives in the internal artifact repository." },
      { id: 'B', text: "Have each team vendor the module's files into its own repository." },
      { id: 'C', text: "Publish the modules to a private registry linked to the internal repositories." },
      { id: 'D', text: "Publish the modules to the public registry under the company's own namespace there." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries","Private Module Registry","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-383",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d8",
    domainName: "HCP Terraform",
    title: "Terraform Public and Private Registries: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Publish the modules to a private registry linked to the internal repositories." },
      { id: 'B', text: "Publish the modules to the public registry under the company's own namespace there." },
      { id: 'C', text: "Distribute the modules as archives in the internal artifact repository." },
      { id: 'D', text: "Have each team vendor the module's files into its own repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries","Private Module Registry","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-384",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d8",
    domainName: "HCP Terraform",
    title: "Terraform Public and Private Registries: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Publish the modules to a private registry linked to the internal repositories." },
      { id: 'B', text: "Publish the modules to the public registry under the company's own namespace there." },
      { id: 'C', text: "Distribute the modules as archives in the internal artifact repository." },
      { id: 'D', text: "Have each team vendor the module's files into its own repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries","Private Module Registry","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-385",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d8",
    domainName: "HCP Terraform",
    title: "Terraform Public and Private Registries: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Distribute the modules as archives in the internal artifact repository." },
      { id: 'B', text: "Have each team vendor the module's files into its own repository." },
      { id: 'C', text: "Publish the modules to a private registry linked to the internal repositories." },
      { id: 'D', text: "Publish the modules to the public registry under the company's own namespace there." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries","Private Module Registry","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-386",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Terraform CLI Workspaces (State Isolation): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Keep a directory per environment, each with its own separate backend configuration." },
      { id: 'B', text: "Use `terraform workspace new` and `select` so each environment has its own state." },
      { id: 'C', text: "Change the backend key on the command line before each environment's apply." },
      { id: 'D', text: "Use a variable for the environment and apply the same state for each one." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces","CLI Workspaces","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-387",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Terraform CLI Workspaces (State Isolation): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Use a variable for the environment and apply the same state for each one." },
      { id: 'B', text: "Use `terraform workspace new` and `select` so each environment has its own state." },
      { id: 'C', text: "Keep a directory per environment, each with its own separate backend configuration." },
      { id: 'D', text: "Change the backend key on the command line before each environment's apply." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces","CLI Workspaces","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-388",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Terraform CLI Workspaces (State Isolation): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Use `terraform workspace new` and `select` so each environment has its own state." },
      { id: 'B', text: "Change the backend key on the command line before each environment's apply." },
      { id: 'C', text: "Keep a directory per environment, each with its own separate backend configuration." },
      { id: 'D', text: "Use a variable for the environment and apply the same state for each one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces","CLI Workspaces","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-389",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Terraform CLI Workspaces (State Isolation): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Keep a directory per environment, each with its own separate backend configuration." },
      { id: 'B', text: "Use `terraform workspace new` and `select` so each environment has its own state." },
      { id: 'C', text: "Change the backend key on the command line before each environment's apply." },
      { id: 'D', text: "Use a variable for the environment and apply the same state for each one." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces","CLI Workspaces","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-390",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Terraform CLI Workspaces (State Isolation): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Use `terraform workspace new` and `select` so each environment has its own state." },
      { id: 'B', text: "Keep a directory per environment, each with its own separate backend configuration." },
      { id: 'C', text: "Use a variable for the environment and apply the same state for each one." },
      { id: 'D', text: "Change the backend key on the command line before each environment's apply." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces","CLI Workspaces","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-391",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Workspaces vs Separate Directories: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Separate directories with their own backends and credentials" },
      { id: 'B', text: "CLI workspaces for each environment, sharing one set of credentials." },
      { id: 'C', text: "One workspace for everything, with the environments split by tags." },
      { id: 'D', text: "One backend per environment, with the state shared to every engineer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation","Workspaces vs Directories","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-392",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Workspaces vs Separate Directories: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "CLI workspaces for each environment, sharing one set of credentials." },
      { id: 'B', text: "Separate directories with their own backends and credentials" },
      { id: 'C', text: "One backend per environment, with the state shared to every engineer." },
      { id: 'D', text: "One workspace for everything, with the environments split by tags." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation","Workspaces vs Directories","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-393",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Workspaces vs Separate Directories: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "One workspace for everything, with the environments split by tags." },
      { id: 'B', text: "One backend per environment, with the state shared to every engineer." },
      { id: 'C', text: "Separate directories with their own backends and credentials" },
      { id: 'D', text: "CLI workspaces for each environment, sharing one set of credentials." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation","Workspaces vs Directories","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-394",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Workspaces vs Separate Directories: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Separate directories with their own backends and credentials" },
      { id: 'B', text: "CLI workspaces for each environment, sharing one set of credentials." },
      { id: 'C', text: "One workspace for everything, with the environments split by tags." },
      { id: 'D', text: "One backend per environment, with the state shared to every engineer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation","Workspaces vs Directories","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-395",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Terraform state management",
    title: "Workspaces vs Separate Directories: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Separate directories with their own backends and credentials" },
      { id: 'B', text: "CLI workspaces for each environment, sharing one set of credentials." },
      { id: 'C', text: "One workspace for everything, with the environments split by tags." },
      { id: 'D', text: "One backend per environment, with the state shared to every engineer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation","Workspaces vs Directories","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-396",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Terraform Module count and for_each: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Three module blocks, one per service, each with its own name and inputs." },
      { id: 'B', text: "`count = 3` on the module block, indexed by `count.index`." },
      { id: 'C', text: "A `dynamic` block inside the module over the service list." },
      { id: 'D', text: "`for_each = toset([...])` on the module block, keyed by `each.key`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration","Module for_each","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-397",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Terraform Module count and for_each: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "`for_each = toset([...])` on the module block, keyed by `each.key`." },
      { id: 'B', text: "Three module blocks, one per service, each with its own name and inputs." },
      { id: 'C', text: "A `dynamic` block inside the module over the service list." },
      { id: 'D', text: "`count = 3` on the module block, indexed by `count.index`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration","Module for_each","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-398",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Terraform Module count and for_each: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Three module blocks, one per service, each with its own name and inputs." },
      { id: 'B', text: "`count = 3` on the module block, indexed by `count.index`." },
      { id: 'C', text: "A `dynamic` block inside the module over the service list." },
      { id: 'D', text: "`for_each = toset([...])` on the module block, keyed by `each.key`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration","Module for_each","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-399",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Terraform Module count and for_each: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "`for_each = toset([...])` on the module block, keyed by `each.key`." },
      { id: 'B', text: "Three module blocks, one per service, each with its own name and inputs." },
      { id: 'C', text: "A `dynamic` block inside the module over the service list." },
      { id: 'D', text: "`count = 3` on the module block, indexed by `count.index`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration","Module for_each","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-400",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Terraform modules",
    title: "Terraform Module count and for_each: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "`for_each = toset([...])` on the module block, keyed by `each.key`." },
      { id: 'B', text: "Three module blocks, one per service, each with its own name and inputs." },
      { id: 'C', text: "A `dynamic` block inside the module over the service list." },
      { id: 'D', text: "`count = 3` on the module block, indexed by `count.index`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration","Module for_each","Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_16;
