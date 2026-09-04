export const HASHICORP_TFP_QUESTIONS_11 = [
  {
    id: "hashicorp-tfp-251",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Enforcing invariants with precondition and postcondition lifecycle blocks is under consideration.",
    options: [
      { id: 'A', text: "Write a custom external script that runs after deployment to check if the volume is encrypted." },
      { id: 'B', text: "Assume developer code review catches all unencrypted volume configurations." },
      { id: 'C', text: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block." },
      { id: 'D', text: "Disable EBS encryption checks in the AWS account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation", "Pre/Postconditions", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-252",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Custom Validation Rules and preconditions/postconditions: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Enforcing invariants with precondition and postcondition lifecycle blocks is under consideration.",
    options: [
      { id: 'A', text: "Write a custom external script that runs after deployment to check if the volume is encrypted." },
      { id: 'B', text: "Assume developer code review catches all unencrypted volume configurations." },
      { id: 'C', text: "Disable EBS encryption checks in the AWS account." },
      { id: 'D', text: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation", "Pre/Postconditions", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-253",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Enforcing invariants with precondition and postcondition lifecycle blocks is under consideration.",
    options: [
      { id: 'A', text: "Disable EBS encryption checks in the AWS account." },
      { id: 'B', text: "Assume developer code review catches all unencrypted volume configurations." },
      { id: 'C', text: "Write a custom external script that runs after deployment to check if the volume is encrypted." },
      { id: 'D', text: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation", "Pre/Postconditions", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-254",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Enforcing invariants with precondition and postcondition lifecycle blocks is under consideration.",
    options: [
      { id: 'A', text: "Assume developer code review catches all unencrypted volume configurations." },
      { id: 'B', text: "Write a custom external script that runs after deployment to check if the volume is encrypted." },
      { id: 'C', text: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block." },
      { id: 'D', text: "Disable EBS encryption checks in the AWS account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation", "Pre/Postconditions", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-255",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Custom Validation Rules and preconditions/postconditions: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Configuration Validation to ensure that an EC2 instance provisioned by a module uses an encrypted EBS root block device without relying solely on cloud provider API failures.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Enforcing invariants with precondition and postcondition lifecycle blocks is under consideration.",
    options: [
      { id: 'A', text: "Write a custom external script that runs after deployment to check if the volume is encrypted." },
      { id: 'B', text: "Assume developer code review catches all unencrypted volume configurations." },
      { id: 'C', text: "Disable EBS encryption checks in the AWS account." },
      { id: 'D', text: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a `lifecycle { precondition { condition = data.aws_ami.selected.root_device_name != \"\" && ... } }` or postcondition block. `precondition` and `postcondition` blocks (introduced in Terraform 1.2) enforce assumptions and guarantees directly within resource and data blocks. Preconditions execute before evaluating the resource, while postconditions validate resource attributes immediately after provisioning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Configuration Validation", "Pre/Postconditions", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-256",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Advanced Collection Transformation with for and flatten: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Flattening nested data structures with flatten() and setproduct() is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Go provider to flatten JSON arrays." },
      { id: 'B', text: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects." },
      { id: 'C', text: "Store nested data in environment variables." },
      { id: 'D', text: "Manually write out 30 separate subnet resource declarations." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation", "flatten Function", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-257",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Advanced Collection Transformation with for and flatten: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Flattening nested data structures with flatten() and setproduct() is under consideration.",
    options: [
      { id: 'A', text: "Store nested data in environment variables." },
      { id: 'B', text: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects." },
      { id: 'C', text: "Manually write out 30 separate subnet resource declarations." },
      { id: 'D', text: "Write a custom Go provider to flatten JSON arrays." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation", "flatten Function", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-258",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Advanced Collection Transformation with for and flatten: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Flattening nested data structures with flatten() and setproduct() is under consideration.",
    options: [
      { id: 'A', text: "Manually write out 30 separate subnet resource declarations." },
      { id: 'B', text: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects." },
      { id: 'C', text: "Write a custom Go provider to flatten JSON arrays." },
      { id: 'D', text: "Store nested data in environment variables." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation", "flatten Function", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-259",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Advanced Collection Transformation with for and flatten: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Flattening nested data structures with flatten() and setproduct() is under consideration.",
    options: [
      { id: 'A', text: "Manually write out 30 separate subnet resource declarations." },
      { id: 'B', text: "Store nested data in environment variables." },
      { id: 'C', text: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects." },
      { id: 'D', text: "Write a custom Go provider to flatten JSON arrays." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation", "flatten Function", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-260",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Advanced Collection Transformation with for and flatten: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Collection Manipulation to flatten a nested map of VPC subnets across multiple availability zones into a single flat list suitable for `for_each` resource iteration.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Flattening nested data structures with flatten() and setproduct() is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Go provider to flatten JSON arrays." },
      { id: 'B', text: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects." },
      { id: 'C', text: "Manually write out 30 separate subnet resource declarations." },
      { id: 'D', text: "Store nested data in environment variables." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `flatten()` combined with nested `[for k, v in ... : [for ...]]` expressions to produce a single list of objects. `flatten()` takes a list and eliminates any nested list elements, producing a single flat 1D list. Combining `flatten()` with nested `for` expressions is the standard pattern for transforming complex, multi-tiered data structures into iterable maps for `for_each`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Collection Manipulation", "flatten Function", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-261",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Refactoring resource addresses and module namespaces declaratively using moved blocks is under consideration.",
    options: [
      { id: 'A', text: "Edit the remote JSON state file in an external editor." },
      { id: 'B', text: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration." },
      { id: 'C', text: "Instruct every developer to manually run `terraform state mv` on their personal machines." },
      { id: 'D', text: "Allow Terraform to destroy the production S3 bucket and recreate it under the module." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring", "moved Blocks", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-262",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Refactoring resource addresses and module namespaces declaratively using moved blocks is under consideration.",
    options: [
      { id: 'A', text: "Allow Terraform to destroy the production S3 bucket and recreate it under the module." },
      { id: 'B', text: "Edit the remote JSON state file in an external editor." },
      { id: 'C', text: "Instruct every developer to manually run `terraform state mv` on their personal machines." },
      { id: 'D', text: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring", "moved Blocks", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-263",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Refactoring resource addresses and module namespaces declaratively using moved blocks is under consideration.",
    options: [
      { id: 'A', text: "Instruct every developer to manually run `terraform state mv` on their personal machines." },
      { id: 'B', text: "Edit the remote JSON state file in an external editor." },
      { id: 'C', text: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration." },
      { id: 'D', text: "Allow Terraform to destroy the production S3 bucket and recreate it under the module." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring", "moved Blocks", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-264",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Refactoring resource addresses and module namespaces declaratively using moved blocks is under consideration.",
    options: [
      { id: 'A', text: "Instruct every developer to manually run `terraform state mv` on their personal machines." },
      { id: 'B', text: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration." },
      { id: 'C', text: "Allow Terraform to destroy the production S3 bucket and recreate it under the module." },
      { id: 'D', text: "Edit the remote JSON state file in an external editor." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring", "moved Blocks", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-265",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "moved Blocks for Safe Zero-Downtime Refactoring: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Declarative Refactoring to refactor a legacy standalone `aws_s3_bucket.data` into a new module `module.storage.aws_s3_bucket.this` without requiring manual CLI state commands from team members.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Refactoring resource addresses and module namespaces declaratively using moved blocks is under consideration.",
    options: [
      { id: 'A', text: "Allow Terraform to destroy the production S3 bucket and recreate it under the module." },
      { id: 'B', text: "Edit the remote JSON state file in an external editor." },
      { id: 'C', text: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration." },
      { id: 'D', text: "Instruct every developer to manually run `terraform state mv` on their personal machines." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a `moved { from = aws_s3_bucket.data; to = module.storage.aws_s3_bucket.this }` block in the configuration. The `moved` block (introduced in Terraform 1.1) records declarative refactoring decisions directly in the HCL codebase. When team members or CI/CD pipelines run `terraform plan`, Terraform recognizes the address migration and updates state automatically without destroying resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Declarative Refactoring", "moved Blocks", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-266",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Specifying ongoing validation checks and assertions with check blocks is under consideration.",
    options: [
      { id: 'A', text: "Put the HTTP check inside a null_resource with local-exec that aborts the pipeline." },
      { id: 'B', text: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement." },
      { id: 'C', text: "Never validate endpoint health in infrastructure as code." },
      { id: 'D', text: "Rely on external cron scripts outside of Terraform." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation", "check Blocks", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-267",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "check Blocks and Continuous Infrastructure Validation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Specifying ongoing validation checks and assertions with check blocks is under consideration.",
    options: [
      { id: 'A', text: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement." },
      { id: 'B', text: "Put the HTTP check inside a null_resource with local-exec that aborts the pipeline." },
      { id: 'C', text: "Never validate endpoint health in infrastructure as code." },
      { id: 'D', text: "Rely on external cron scripts outside of Terraform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation", "check Blocks", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-268",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Specifying ongoing validation checks and assertions with check blocks is under consideration.",
    options: [
      { id: 'A', text: "Put the HTTP check inside a null_resource with local-exec that aborts the pipeline." },
      { id: 'B', text: "Rely on external cron scripts outside of Terraform." },
      { id: 'C', text: "Never validate endpoint health in infrastructure as code." },
      { id: 'D', text: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation", "check Blocks", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-269",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Specifying ongoing validation checks and assertions with check blocks is under consideration.",
    options: [
      { id: 'A', text: "Put the HTTP check inside a null_resource with local-exec that aborts the pipeline." },
      { id: 'B', text: "Rely on external cron scripts outside of Terraform." },
      { id: 'C', text: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement." },
      { id: 'D', text: "Never validate endpoint health in infrastructure as code." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation", "check Blocks", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-270",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "check Blocks and Continuous Infrastructure Validation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Continuous Validation to verify continuously that an internal corporate website returns an HTTP 200 status code and SSL certificate validity without blocking resource provisioning.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Specifying ongoing validation checks and assertions with check blocks is under consideration.",
    options: [
      { id: 'A', text: "Put the HTTP check inside a null_resource with local-exec that aborts the pipeline." },
      { id: 'B', text: "Never validate endpoint health in infrastructure as code." },
      { id: 'C', text: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement." },
      { id: 'D', text: "Rely on external cron scripts outside of Terraform." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `check` block with a scoped `data \"http\"` source and an `assert { condition = ... }` statement. `check` blocks (introduced in Terraform 1.5) define continuous validation assertions outside of the standard resource lifecycle. Unlike preconditions, failing assertions in `check` blocks emit warnings in plan and apply output without halting execution or rolling back resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["Continuous Validation", "check Blocks", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-271",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "import Blocks and Automated Configuration Generation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Using import blocks with -generate-config-out to bring unmanaged assets into code is under consideration.",
    options: [
      { id: 'A', text: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`." },
      { id: 'B', text: "Delete the 50 production tables and recreate them using Terraform." },
      { id: 'C', text: "Write 50 resource blocks from scratch by hand guessing every configuration attribute." },
      { id: 'D', text: "Run `terraform import` 50 times and manually copy JSON state attributes into HCL." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import", "import Blocks", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-272",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "import Blocks and Automated Configuration Generation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Using import blocks with -generate-config-out to bring unmanaged assets into code is under consideration.",
    options: [
      { id: 'A', text: "Write 50 resource blocks from scratch by hand guessing every configuration attribute." },
      { id: 'B', text: "Run `terraform import` 50 times and manually copy JSON state attributes into HCL." },
      { id: 'C', text: "Delete the 50 production tables and recreate them using Terraform." },
      { id: 'D', text: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import", "import Blocks", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-273",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "import Blocks and Automated Configuration Generation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Using import blocks with -generate-config-out to bring unmanaged assets into code is under consideration.",
    options: [
      { id: 'A', text: "Delete the 50 production tables and recreate them using Terraform." },
      { id: 'B', text: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`." },
      { id: 'C', text: "Run `terraform import` 50 times and manually copy JSON state attributes into HCL." },
      { id: 'D', text: "Write 50 resource blocks from scratch by hand guessing every configuration attribute." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import", "import Blocks", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-274",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "import Blocks and Automated Configuration Generation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Using import blocks with -generate-config-out to bring unmanaged assets into code is under consideration.",
    options: [
      { id: 'A', text: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`." },
      { id: 'B', text: "Run `terraform import` 50 times and manually copy JSON state attributes into HCL." },
      { id: 'C', text: "Delete the 50 production tables and recreate them using Terraform." },
      { id: 'D', text: "Write 50 resource blocks from scratch by hand guessing every configuration attribute." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import", "import Blocks", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-275",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "import Blocks and Automated Configuration Generation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Declarative Import to bring 50 unmanaged AWS DynamoDB tables into Terraform management and automatically generate initial HCL resource blocks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Using import blocks with -generate-config-out to bring unmanaged assets into code is under consideration.",
    options: [
      { id: 'A', text: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`." },
      { id: 'B', text: "Write 50 resource blocks from scratch by hand guessing every configuration attribute." },
      { id: 'C', text: "Run `terraform import` 50 times and manually copy JSON state attributes into HCL." },
      { id: 'D', text: "Delete the 50 production tables and recreate them using Terraform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author `import {}` blocks specifying `to` and `id`, then run `terraform plan -generate-config-out=generated.tf`. The `import` block (introduced in Terraform 1.5) allows declarative resource adoption. Running `terraform plan -generate-config-out=filename.tf` prompts Terraform to query cloud APIs and automatically generate the required HCL code matching the imported resources, accelerating adoption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Declarative Import", "import Blocks", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_11;
