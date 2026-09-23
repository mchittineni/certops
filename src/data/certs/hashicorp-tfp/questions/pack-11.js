export const HASHICORP_TFP_QUESTIONS_11 = [
  {
    id: "hashicorp-tfp-251",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Add a `validation` block on the variable that carries the volume's encryption setting." },
      { id: 'B', text: "Add a `lifecycle` `precondition` asserting the encryption attribute before creation." },
      { id: 'C', text: "Add an external data source that queries the volume after the apply and fails on drift." },
      { id: 'D', text: "Add a `check` block that asserts on the volume once the configuration has applied." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation","Pre/Postconditions","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-252",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Custom Validation Rules and preconditions/postconditions: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Add a `validation` block on the variable that carries the volume's encryption setting." },
      { id: 'B', text: "Add a `check` block that asserts on the volume once the configuration has applied." },
      { id: 'C', text: "Add a `lifecycle` `precondition` asserting the encryption attribute before creation." },
      { id: 'D', text: "Add an external data source that queries the volume after the apply and fails on drift." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation","Pre/Postconditions","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-253",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Add a `lifecycle` `precondition` asserting the encryption attribute before creation." },
      { id: 'B', text: "Add an external data source that queries the volume after the apply and fails on drift." },
      { id: 'C', text: "Add a `validation` block on the variable that carries the volume's encryption setting." },
      { id: 'D', text: "Add a `check` block that asserts on the volume once the configuration has applied." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation","Pre/Postconditions","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-254",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Add a `lifecycle` `precondition` asserting the encryption attribute before creation." },
      { id: 'B', text: "Add an external data source that queries the volume after the apply and fails on drift." },
      { id: 'C', text: "Add a `validation` block on the variable that carries the volume's encryption setting." },
      { id: 'D', text: "Add a `check` block that asserts on the volume once the configuration has applied." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation","Pre/Postconditions","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-255",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a `validation` block on the variable that carries the volume's encryption setting." },
      { id: 'B', text: "Add a `check` block that asserts on the volume once the configuration has applied." },
      { id: 'C', text: "Add a `lifecycle` `precondition` asserting the encryption attribute before creation." },
      { id: 'D', text: "Add an external data source that queries the volume after the apply and fails on drift." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation","Pre/Postconditions","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-256",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Advanced Collection Transformation with for and flatten: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Use `flatten()` over nested `for` expressions to produce one list of objects." },
      { id: 'B', text: "Use `setproduct()` over the two input lists to produce a single list of objects." },
      { id: 'C', text: "Use `for_each` over the outer map and declare each subnet separately." },
      { id: 'D', text: "Use `jsondecode()` on the raw value and index it by position." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation","flatten Function","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-257",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Advanced Collection Transformation with for and flatten: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Use `setproduct()` over the two input lists to produce a single list of objects." },
      { id: 'B', text: "Use `jsondecode()` on the raw value and index it by position." },
      { id: 'C', text: "Use `for_each` over the outer map and declare each subnet separately." },
      { id: 'D', text: "Use `flatten()` over nested `for` expressions to produce one list of objects." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation","flatten Function","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-258",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Advanced Collection Transformation with for and flatten: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Use `setproduct()` over the two input lists to produce a single list of objects." },
      { id: 'B', text: "Use `for_each` over the outer map and declare each subnet separately." },
      { id: 'C', text: "Use `flatten()` over nested `for` expressions to produce one list of objects." },
      { id: 'D', text: "Use `jsondecode()` on the raw value and index it by position." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation","flatten Function","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-259",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Advanced Collection Transformation with for and flatten: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `flatten()` over nested `for` expressions to produce one list of objects." },
      { id: 'B', text: "Use `setproduct()` over the two input lists to produce a single list of objects." },
      { id: 'C', text: "Use `for_each` over the outer map and declare each subnet separately." },
      { id: 'D', text: "Use `jsondecode()` on the raw value and index it by position." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation","flatten Function","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-260",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Advanced Collection Transformation with for and flatten: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Use `flatten()` over nested `for` expressions to produce one list of objects." },
      { id: 'B', text: "Use `setproduct()` over the two input lists to produce a single list of objects." },
      { id: 'C', text: "Use `for_each` over the outer map and declare each subnet separately." },
      { id: 'D', text: "Use `jsondecode()` on the raw value and index it by position." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation","flatten Function","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-261",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Let the apply destroy the bucket and recreate it under the module's address." },
      { id: 'B', text: "Edit the remote state document and rewrite the resource's address by hand." },
      { id: 'C', text: "Add a `moved` block giving the resource's old address and its new module address." },
      { id: 'D', text: "Have each developer run `terraform state mv` locally against the shared state file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring","moved Blocks","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-262",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Have each developer run `terraform state mv` locally against the shared state file." },
      { id: 'B', text: "Add a `moved` block giving the resource's old address and its new module address." },
      { id: 'C', text: "Edit the remote state document and rewrite the resource's address by hand." },
      { id: 'D', text: "Let the apply destroy the bucket and recreate it under the module's address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring","moved Blocks","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-263",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Edit the remote state document and rewrite the resource's address by hand." },
      { id: 'B', text: "Let the apply destroy the bucket and recreate it under the module's address." },
      { id: 'C', text: "Have each developer run `terraform state mv` locally against the shared state file." },
      { id: 'D', text: "Add a `moved` block giving the resource's old address and its new module address." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring","moved Blocks","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-264",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Add a `moved` block giving the resource's old address and its new module address." },
      { id: 'B', text: "Have each developer run `terraform state mv` locally against the shared state file." },
      { id: 'C', text: "Let the apply destroy the bucket and recreate it under the module's address." },
      { id: 'D', text: "Edit the remote state document and rewrite the resource's address by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring","moved Blocks","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-265",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a `moved` block giving the resource's old address and its new module address." },
      { id: 'B', text: "Have each developer run `terraform state mv` locally against the shared state file." },
      { id: 'C', text: "Let the apply destroy the bucket and recreate it under the module's address." },
      { id: 'D', text: "Edit the remote state document and rewrite the resource's address by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring","moved Blocks","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-266",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Add a `check` block with a scoped `data \"http\"` source and an `assert` condition." },
      { id: 'B', text: "Add a `null_resource` whose `local-exec` curls the endpoint and exits non-zero on failure." },
      { id: 'C', text: "Add an external monitor outside Terraform that pages when the endpoint fails." },
      { id: 'D', text: "Add a `postcondition` on the load balancer resource asserting on its state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation","check Blocks","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-267",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "check Blocks and Continuous Infrastructure Validation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Add a `check` block with a scoped `data \"http\"` source and an `assert` condition." },
      { id: 'B', text: "Add a `null_resource` whose `local-exec` curls the endpoint and exits non-zero on failure." },
      { id: 'C', text: "Add an external monitor outside Terraform that pages when the endpoint fails." },
      { id: 'D', text: "Add a `postcondition` on the load balancer resource asserting on its state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation","check Blocks","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-268",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Add an external monitor outside Terraform that pages when the endpoint fails." },
      { id: 'B', text: "Add a `postcondition` on the load balancer resource asserting on its state." },
      { id: 'C', text: "Add a `check` block with a scoped `data \"http\"` source and an `assert` condition." },
      { id: 'D', text: "Add a `null_resource` whose `local-exec` curls the endpoint and exits non-zero on failure." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation","check Blocks","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-269",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Add an external monitor outside Terraform that pages when the endpoint fails." },
      { id: 'B', text: "Add a `check` block with a scoped `data \"http\"` source and an `assert` condition." },
      { id: 'C', text: "Add a `null_resource` whose `local-exec` curls the endpoint and exits non-zero on failure." },
      { id: 'D', text: "Add a `postcondition` on the load balancer resource asserting on its state." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation","check Blocks","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-270",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a `postcondition` on the load balancer resource asserting on its state." },
      { id: 'B', text: "Add an external monitor outside Terraform that pages when the endpoint fails." },
      { id: 'C', text: "Add a `null_resource` whose `local-exec` curls the endpoint and exits non-zero on failure." },
      { id: 'D', text: "Add a `check` block with a scoped `data \"http\"` source and an `assert` condition." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation","check Blocks","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-271",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "import Blocks and Automated Configuration Generation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Write `import {}` blocks with `to` and `id`, then `plan -generate-config-out`." },
      { id: 'B', text: "Run `terraform import` for each table and then write each resource block by hand." },
      { id: 'C', text: "Recreate the tables through Terraform and migrate the data across." },
      { id: 'D', text: "Write the resource blocks first and let the next apply adopt them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import","import Blocks","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-272",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "import Blocks and Automated Configuration Generation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Run `terraform import` for each table and then write each resource block by hand." },
      { id: 'B', text: "Recreate the tables through Terraform and migrate the data across." },
      { id: 'C', text: "Write `import {}` blocks with `to` and `id`, then `plan -generate-config-out`." },
      { id: 'D', text: "Write the resource blocks first and let the next apply adopt them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import","import Blocks","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-273",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "import Blocks and Automated Configuration Generation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Write the resource blocks first and let the next apply adopt them." },
      { id: 'B', text: "Recreate the tables through Terraform and migrate the data across." },
      { id: 'C', text: "Run `terraform import` for each table and then write each resource block by hand." },
      { id: 'D', text: "Write `import {}` blocks with `to` and `id`, then `plan -generate-config-out`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import","import Blocks","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-274",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "import Blocks and Automated Configuration Generation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Write `import {}` blocks with `to` and `id`, then `plan -generate-config-out`." },
      { id: 'B', text: "Recreate the tables through Terraform and migrate the data across." },
      { id: 'C', text: "Write the resource blocks first and let the next apply adopt them." },
      { id: 'D', text: "Run `terraform import` for each table and then write each resource block by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import","import Blocks","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-275",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "import Blocks and Automated Configuration Generation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Write `import {}` blocks with `to` and `id`, then `plan -generate-config-out`." },
      { id: 'B', text: "Write the resource blocks first and let the next apply adopt them." },
      { id: 'C', text: "Run `terraform import` for each table and then write each resource block by hand." },
      { id: 'D', text: "Recreate the tables through Terraform and migrate the data across." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import","import Blocks","Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_11;
