export const HASHICORP_TFA_QUESTIONS_16 = [
  {
    id: "hashicorp-tfa-376",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Passing Inputs and Accessing Module Outputs: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Module Inputs & Outputs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Encapsulating module logic and accessing outputs via module.&lt;name&gt;.&lt;output&gt; is under consideration.",
    options: [
      { id: 'A', text: "Write the VPC ID to a text file on the local machine and read it with a script." },
      { id: 'B', text: "Reference child module resources directly using `aws_vpc.this.id`." },
      { id: 'C', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'D', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs", "Module Outputs", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-377",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Passing Inputs and Accessing Module Outputs: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Module Inputs & Outputs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Encapsulating module logic and accessing outputs via module.&lt;name&gt;.&lt;output&gt; is under consideration.",
    options: [
      { id: 'A', text: "Reference child module resources directly using `aws_vpc.this.id`." },
      { id: 'B', text: "Write the VPC ID to a text file on the local machine and read it with a script." },
      { id: 'C', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'D', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs", "Module Outputs", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-378",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Passing Inputs and Accessing Module Outputs: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Module Inputs & Outputs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Encapsulating module logic and accessing outputs via module.&lt;name&gt;.&lt;output&gt; is under consideration.",
    options: [
      { id: 'A', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'B', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." },
      { id: 'C', text: "Reference child module resources directly using `aws_vpc.this.id`." },
      { id: 'D', text: "Write the VPC ID to a text file on the local machine and read it with a script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs", "Module Outputs", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-379",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Passing Inputs and Accessing Module Outputs: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Module Inputs & Outputs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Encapsulating module logic and accessing outputs via module.&lt;name&gt;.&lt;output&gt; is under consideration.",
    options: [
      { id: 'A', text: "Write the VPC ID to a text file on the local machine and read it with a script." },
      { id: 'B', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." },
      { id: 'C', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'D', text: "Reference child module resources directly using `aws_vpc.this.id`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs", "Module Outputs", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-380",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Passing Inputs and Accessing Module Outputs: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Module Inputs & Outputs to pass a CIDR block variable to a VPC module and retrieve the generated VPC ID for use in an EC2 security group.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Encapsulating module logic and accessing outputs via module.&lt;name&gt;.&lt;output&gt; is under consideration.",
    options: [
      { id: 'A', text: "Child module resources are globally accessible from any file without outputs." },
      { id: 'B', text: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`." },
      { id: 'C', text: "Reference child module resources directly using `aws_vpc.this.id`." },
      { id: 'D', text: "Write the VPC ID to a text file on the local machine and read it with a script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass the CIDR in the module input arguments and reference the result via `module.vpc.vpc_id`. Modules provide strict encapsulation. Resources defined inside a child module cannot be addressed directly from the root module. The child module must explicitly define an `output`, which the parent module accesses via `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-output-values",
    tags: ["Module Inputs & Outputs", "Module Outputs", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-381",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Public and Private Registries: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Module Registries to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Publishing and consuming verified modules in the public registry and HCP Terraform private registry is under consideration.",
    options: [
      { id: 'A', text: "Publish proprietary company modules to the public Terraform Registry." },
      { id: 'B', text: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos." },
      { id: 'C', text: "Instruct teams to copy-paste raw HCL files between projects." },
      { id: 'D', text: "Distribute modules as email attachments in zip files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries", "Private Module Registry", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-382",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Public and Private Registries: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Module Registries to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Publishing and consuming verified modules in the public registry and HCP Terraform private registry is under consideration.",
    options: [
      { id: 'A', text: "Instruct teams to copy-paste raw HCL files between projects." },
      { id: 'B', text: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos." },
      { id: 'C', text: "Publish proprietary company modules to the public Terraform Registry." },
      { id: 'D', text: "Distribute modules as email attachments in zip files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries", "Private Module Registry", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-383",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Public and Private Registries: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Module Registries to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Publishing and consuming verified modules in the public registry and HCP Terraform private registry is under consideration.",
    options: [
      { id: 'A', text: "Instruct teams to copy-paste raw HCL files between projects." },
      { id: 'B', text: "Publish proprietary company modules to the public Terraform Registry." },
      { id: 'C', text: "Distribute modules as email attachments in zip files." },
      { id: 'D', text: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries", "Private Module Registry", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-384",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Public and Private Registries: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Module Registries to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Publishing and consuming verified modules in the public registry and HCP Terraform private registry is under consideration.",
    options: [
      { id: 'A', text: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos." },
      { id: 'B', text: "Instruct teams to copy-paste raw HCL files between projects." },
      { id: 'C', text: "Distribute modules as email attachments in zip files." },
      { id: 'D', text: "Publish proprietary company modules to the public Terraform Registry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries", "Private Module Registry", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-385",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Public and Private Registries: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Module Registries to share proprietary enterprise infrastructure modules securely across internal development teams with automated versioning.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Publishing and consuming verified modules in the public registry and HCP Terraform private registry is under consideration.",
    options: [
      { id: 'A', text: "Instruct teams to copy-paste raw HCL files between projects." },
      { id: 'B', text: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos." },
      { id: 'C', text: "Publish proprietary company modules to the public Terraform Registry." },
      { id: 'D', text: "Distribute modules as email attachments in zip files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Publish the modules to a private module registry in HCP Terraform or Terraform Enterprise linked to internal Git repos. The public Terraform Registry hosts community and verified partner modules. For proprietary enterprise architectures, HCP Terraform and Terraform Enterprise provide private module registries that enforce versioning, documentation generation, and internal organization-only access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Module Registries", "Private Module Registry", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-386",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform CLI Workspaces (State Isolation): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Workspaces to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Managing multiple state instances for a single configuration via terraform workspace is under consideration.",
    options: [
      { id: 'A', text: "Over-write the production state file when deploying to dev." },
      { id: 'B', text: "Change the backend S3 bucket path manually in code before every deployment." },
      { id: 'C', text: "Maintain separate directories with duplicate copied HCL files." },
      { id: 'D', text: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "CLI Workspaces", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-387",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform CLI Workspaces (State Isolation): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Workspaces to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Managing multiple state instances for a single configuration via terraform workspace is under consideration.",
    options: [
      { id: 'A', text: "Maintain separate directories with duplicate copied HCL files." },
      { id: 'B', text: "Over-write the production state file when deploying to dev." },
      { id: 'C', text: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment." },
      { id: 'D', text: "Change the backend S3 bucket path manually in code before every deployment." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "CLI Workspaces", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-388",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform CLI Workspaces (State Isolation): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Workspaces to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Managing multiple state instances for a single configuration via terraform workspace is under consideration.",
    options: [
      { id: 'A', text: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment." },
      { id: 'B', text: "Over-write the production state file when deploying to dev." },
      { id: 'C', text: "Change the backend S3 bucket path manually in code before every deployment." },
      { id: 'D', text: "Maintain separate directories with duplicate copied HCL files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "CLI Workspaces", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-389",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform CLI Workspaces (State Isolation): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Workspaces to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Managing multiple state instances for a single configuration via terraform workspace is under consideration.",
    options: [
      { id: 'A', text: "Change the backend S3 bucket path manually in code before every deployment." },
      { id: 'B', text: "Over-write the production state file when deploying to dev." },
      { id: 'C', text: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment." },
      { id: 'D', text: "Maintain separate directories with duplicate copied HCL files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "CLI Workspaces", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-390",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform CLI Workspaces (State Isolation): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Workspaces to deploy the same Terraform configuration to dev and staging environments using lightweight CLI workspaces on a single backend.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Managing multiple state instances for a single configuration via terraform workspace is under consideration.",
    options: [
      { id: 'A', text: "Change the backend S3 bucket path manually in code before every deployment." },
      { id: 'B', text: "Over-write the production state file when deploying to dev." },
      { id: 'C', text: "Maintain separate directories with duplicate copied HCL files." },
      { id: 'D', text: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `terraform workspace new dev` and `terraform workspace select dev` to maintain isolated state files for each environment. Terraform workspaces allow a single working directory with one configuration to manage multiple distinct state instances. Switching workspaces (e.g., from `default` to `dev`) points CLI commands to a separate isolated state file, allowing quick multi-environment testing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "CLI Workspaces", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-391",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Workspaces vs Separate Directories: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Environment Separation to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Evaluating workspaces vs separate directories for production multi-environment architectures is under consideration.",
    options: [
      { id: 'A', text: "Use CLI workspaces for production and development sharing the same AWS administrative credentials." },
      { id: 'B', text: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces." },
      { id: 'C', text: "Share the production state file with all junior developers." },
      { id: 'D', text: "Put all environments in a single workspace separated only by resource tags." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation", "Workspaces vs Directories", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-392",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Workspaces vs Separate Directories: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Environment Separation to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Evaluating workspaces vs separate directories for production multi-environment architectures is under consideration.",
    options: [
      { id: 'A', text: "Share the production state file with all junior developers." },
      { id: 'B', text: "Put all environments in a single workspace separated only by resource tags." },
      { id: 'C', text: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces." },
      { id: 'D', text: "Use CLI workspaces for production and development sharing the same AWS administrative credentials." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation", "Workspaces vs Directories", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-393",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Workspaces vs Separate Directories: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Environment Separation to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Evaluating workspaces vs separate directories for production multi-environment architectures is under consideration.",
    options: [
      { id: 'A', text: "Use CLI workspaces for production and development sharing the same AWS administrative credentials." },
      { id: 'B', text: "Put all environments in a single workspace separated only by resource tags." },
      { id: 'C', text: "Share the production state file with all junior developers." },
      { id: 'D', text: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation", "Workspaces vs Directories", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-394",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Workspaces vs Separate Directories: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Environment Separation to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Evaluating workspaces vs separate directories for production multi-environment architectures is under consideration.",
    options: [
      { id: 'A', text: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces." },
      { id: 'B', text: "Use CLI workspaces for production and development sharing the same AWS administrative credentials." },
      { id: 'C', text: "Put all environments in a single workspace separated only by resource tags." },
      { id: 'D', text: "Share the production state file with all junior developers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation", "Workspaces vs Directories", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-395",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Workspaces vs Separate Directories: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Environment Separation to design an enterprise infrastructure repository structure separating production from development with distinct credentials and access control.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Evaluating workspaces vs separate directories for production multi-environment architectures is under consideration.",
    options: [
      { id: 'A', text: "Put all environments in a single workspace separated only by resource tags." },
      { id: 'B', text: "Use CLI workspaces for production and development sharing the same AWS administrative credentials." },
      { id: 'C', text: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces." },
      { id: 'D', text: "Share the production state file with all junior developers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use separate directories (or repositories) with distinct backend configurations and IAM credentials rather than CLI workspaces. While CLI workspaces are convenient for identical short-lived testing environments, HashiCorp recommends using separate directories or repositories for major environment separation (dev vs prod). This provides strict security isolation, separate IAM credentials, independent backends, and distinct blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Environment Separation", "Workspaces vs Directories", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-396",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module count and for_each: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Module Iteration to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Instantiating multiple module instances using count and for_each meta-arguments is under consideration.",
    options: [
      { id: 'A', text: "Use a while loop inside the module HCL code." },
      { id: 'B', text: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`." },
      { id: 'C', text: "Modules cannot be iterated in Terraform." },
      { id: 'D', text: "Copy-paste the module block three times with different names." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration", "Module for_each", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-397",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module count and for_each: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Module Iteration to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Instantiating multiple module instances using count and for_each meta-arguments is under consideration.",
    options: [
      { id: 'A', text: "Modules cannot be iterated in Terraform." },
      { id: 'B', text: "Copy-paste the module block three times with different names." },
      { id: 'C', text: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`." },
      { id: 'D', text: "Use a while loop inside the module HCL code." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration", "Module for_each", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-398",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module count and for_each: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Module Iteration to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Instantiating multiple module instances using count and for_each meta-arguments is under consideration.",
    options: [
      { id: 'A', text: "Use a while loop inside the module HCL code." },
      { id: 'B', text: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`." },
      { id: 'C', text: "Modules cannot be iterated in Terraform." },
      { id: 'D', text: "Copy-paste the module block three times with different names." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration", "Module for_each", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-399",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module count and for_each: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Module Iteration to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Instantiating multiple module instances using count and for_each meta-arguments is under consideration.",
    options: [
      { id: 'A', text: "Copy-paste the module block three times with different names." },
      { id: 'B', text: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`." },
      { id: 'C', text: "Modules cannot be iterated in Terraform." },
      { id: 'D', text: "Use a while loop inside the module HCL code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration", "Module for_each", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-400",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module count and for_each: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Module Iteration to instantiate a reusable microservice infrastructure module for three different microservices ('auth', 'orders', 'payments') using a single module block.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Instantiating multiple module instances using count and for_each meta-arguments is under consideration.",
    options: [
      { id: 'A', text: "Copy-paste the module block three times with different names." },
      { id: 'B', text: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`." },
      { id: 'C', text: "Use a while loop inside the module HCL code." },
      { id: 'D', text: "Modules cannot be iterated in Terraform." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add `for_each = toset([\"auth\", \"orders\", \"payments\"])` in the `module` block, referencing `each.key`. Terraform supports `count` and `for_each` meta-arguments on `module` blocks. Using `for_each` with a map or set of strings dynamically creates multiple module instances, identifying each by its key (e.g., `module.service[\"auth\"]`), preventing accidental recreation if list ordering changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each#using-for_each-with-modules",
    tags: ["Module Iteration", "Module for_each", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_16;
