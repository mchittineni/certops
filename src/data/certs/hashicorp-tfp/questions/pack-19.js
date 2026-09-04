export const HASHICORP_TFP_QUESTIONS_19 = [
  {
    id: "hashicorp-tfp-451",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Decoding JSON payloads, HTTP headers, and API interactions in TRACE logs is under consideration.",
    options: [
      { id: 'A', text: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API." },
      { id: 'B', text: "Guess which attribute is wrong by changing random configuration values." },
      { id: 'C', text: "Reboot the physical machine running the Terraform CLI." },
      { id: 'D', text: "Assume the cloud provider is down and wait 48 hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging", "TF_LOG=TRACE", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-452",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Decoding JSON payloads, HTTP headers, and API interactions in TRACE logs is under consideration.",
    options: [
      { id: 'A', text: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API." },
      { id: 'B', text: "Guess which attribute is wrong by changing random configuration values." },
      { id: 'C', text: "Reboot the physical machine running the Terraform CLI." },
      { id: 'D', text: "Assume the cloud provider is down and wait 48 hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging", "TF_LOG=TRACE", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-453",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Decoding JSON payloads, HTTP headers, and API interactions in TRACE logs is under consideration.",
    options: [
      { id: 'A', text: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API." },
      { id: 'B', text: "Guess which attribute is wrong by changing random configuration values." },
      { id: 'C', text: "Reboot the physical machine running the Terraform CLI." },
      { id: 'D', text: "Assume the cloud provider is down and wait 48 hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging", "TF_LOG=TRACE", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-454",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Decoding JSON payloads, HTTP headers, and API interactions in TRACE logs is under consideration.",
    options: [
      { id: 'A', text: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API." },
      { id: 'B', text: "Guess which attribute is wrong by changing random configuration values." },
      { id: 'C', text: "Reboot the physical machine running the Terraform CLI." },
      { id: 'D', text: "Assume the cloud provider is down and wait 48 hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging", "TF_LOG=TRACE", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-455",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Decoding JSON payloads, HTTP headers, and API interactions in TRACE logs is under consideration.",
    options: [
      { id: 'A', text: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API." },
      { id: 'B', text: "Guess which attribute is wrong by changing random configuration values." },
      { id: 'C', text: "Reboot the physical machine running the Terraform CLI." },
      { id: 'D', text: "Assume the cloud provider is down and wait 48 hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging", "TF_LOG=TRACE", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-456",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Resolving dependency cycles using standalone resource attachments is under consideration.",
    options: [
      { id: 'A', text: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance." },
      { id: 'B', text: "Delete the security group and leave the instance unprotected." },
      { id: 'C', text: "Disable Terraform dependency graphing by passing `-no-graph`." },
      { id: 'D', text: "Deploy the instance in an entirely separate AWS region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references\u2014commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles", "Cycle Errors", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-457",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Resolving dependency cycles using standalone resource attachments is under consideration.",
    options: [
      { id: 'A', text: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance." },
      { id: 'B', text: "Delete the security group and leave the instance unprotected." },
      { id: 'C', text: "Disable Terraform dependency graphing by passing `-no-graph`." },
      { id: 'D', text: "Deploy the instance in an entirely separate AWS region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references\u2014commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles", "Cycle Errors", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-458",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Resolving dependency cycles using standalone resource attachments is under consideration.",
    options: [
      { id: 'A', text: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance." },
      { id: 'B', text: "Delete the security group and leave the instance unprotected." },
      { id: 'C', text: "Disable Terraform dependency graphing by passing `-no-graph`." },
      { id: 'D', text: "Deploy the instance in an entirely separate AWS region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references\u2014commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles", "Cycle Errors", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-459",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Resolving dependency cycles using standalone resource attachments is under consideration.",
    options: [
      { id: 'A', text: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance." },
      { id: 'B', text: "Delete the security group and leave the instance unprotected." },
      { id: 'C', text: "Disable Terraform dependency graphing by passing `-no-graph`." },
      { id: 'D', text: "Deploy the instance in an entirely separate AWS region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references\u2014commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles", "Cycle Errors", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-460",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Resolving dependency cycles using standalone resource attachments is under consideration.",
    options: [
      { id: 'A', text: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance." },
      { id: 'B', text: "Delete the security group and leave the instance unprotected." },
      { id: 'C', text: "Disable Terraform dependency graphing by passing `-no-graph`." },
      { id: 'D', text: "Deploy the instance in an entirely separate AWS region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references\u2014commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles", "Cycle Errors", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-461",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Debugging Module Input/Output Type Mismatches: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Diagnosing and fixing structural type mismatch errors between callers and child modules is under consideration.",
    options: [
      { id: 'A', text: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type." },
      { id: 'B', text: "Disable type checking in the root module by deleting `variables.tf`." },
      { id: 'C', text: "Cast all numbers to strings using regex in local bash scripts." },
      { id: 'D', text: "Delete the child module and re-implement all resources in the root module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches", "Type Mismatches", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-462",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Debugging Module Input/Output Type Mismatches: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Diagnosing and fixing structural type mismatch errors between callers and child modules is under consideration.",
    options: [
      { id: 'A', text: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type." },
      { id: 'B', text: "Disable type checking in the root module by deleting `variables.tf`." },
      { id: 'C', text: "Cast all numbers to strings using regex in local bash scripts." },
      { id: 'D', text: "Delete the child module and re-implement all resources in the root module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches", "Type Mismatches", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-463",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Debugging Module Input/Output Type Mismatches: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Diagnosing and fixing structural type mismatch errors between callers and child modules is under consideration.",
    options: [
      { id: 'A', text: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type." },
      { id: 'B', text: "Disable type checking in the root module by deleting `variables.tf`." },
      { id: 'C', text: "Cast all numbers to strings using regex in local bash scripts." },
      { id: 'D', text: "Delete the child module and re-implement all resources in the root module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches", "Type Mismatches", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-464",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Debugging Module Input/Output Type Mismatches: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Diagnosing and fixing structural type mismatch errors between callers and child modules is under consideration.",
    options: [
      { id: 'A', text: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type." },
      { id: 'B', text: "Disable type checking in the root module by deleting `variables.tf`." },
      { id: 'C', text: "Cast all numbers to strings using regex in local bash scripts." },
      { id: 'D', text: "Delete the child module and re-implement all resources in the root module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches", "Type Mismatches", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-465",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Debugging Module Input/Output Type Mismatches: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Diagnosing and fixing structural type mismatch errors between callers and child modules is under consideration.",
    options: [
      { id: 'A', text: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type." },
      { id: 'B', text: "Disable type checking in the root module by deleting `variables.tf`." },
      { id: 'C', text: "Cast all numbers to strings using regex in local bash scripts." },
      { id: 'D', text: "Delete the child module and re-implement all resources in the root module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches", "Type Mismatches", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-466",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Handling Provider Crash and RPC Failures: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Investigating plugin crash stack traces and isolating provider binary panics is under consideration.",
    options: [
      { id: 'A', text: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub." },
      { id: 'B', text: "Ignore the crash and immediately run `terraform destroy`." },
      { id: 'C', text: "Reinstall the local Linux operating system." },
      { id: 'D', text: "Delete all source code files in the directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes", "Provider Crashes", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-467",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Handling Provider Crash and RPC Failures: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Investigating plugin crash stack traces and isolating provider binary panics is under consideration.",
    options: [
      { id: 'A', text: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub." },
      { id: 'B', text: "Ignore the crash and immediately run `terraform destroy`." },
      { id: 'C', text: "Reinstall the local Linux operating system." },
      { id: 'D', text: "Delete all source code files in the directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes", "Provider Crashes", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-468",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Handling Provider Crash and RPC Failures: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Investigating plugin crash stack traces and isolating provider binary panics is under consideration.",
    options: [
      { id: 'A', text: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub." },
      { id: 'B', text: "Ignore the crash and immediately run `terraform destroy`." },
      { id: 'C', text: "Reinstall the local Linux operating system." },
      { id: 'D', text: "Delete all source code files in the directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes", "Provider Crashes", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-469",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Handling Provider Crash and RPC Failures: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Investigating plugin crash stack traces and isolating provider binary panics is under consideration.",
    options: [
      { id: 'A', text: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub." },
      { id: 'B', text: "Ignore the crash and immediately run `terraform destroy`." },
      { id: 'C', text: "Reinstall the local Linux operating system." },
      { id: 'D', text: "Delete all source code files in the directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes", "Provider Crashes", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-470",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Handling Provider Crash and RPC Failures: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Investigating plugin crash stack traces and isolating provider binary panics is under consideration.",
    options: [
      { id: 'A', text: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub." },
      { id: 'B', text: "Ignore the crash and immediately run `terraform destroy`." },
      { id: 'C', text: "Reinstall the local Linux operating system." },
      { id: 'D', text: "Delete all source code files in the directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes", "Provider Crashes", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-471",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Resolving missing provider plugins and lockfile checksum mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`." },
      { id: 'B', text: "Delete all `.tf` files in the repository." },
      { id: 'C', text: "Disable checksum verification by hacking the Terraform binary." },
      { id: 'D', text: "Manually download arbitrary binaries from unverified third-party websites." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`. Lockfile checksum errors occur when downloaded provider binaries do not match the cryptographic hashes recorded in `.terraform.lock.hcl` (often across different OS architectures). Running `terraform init -upgrade` recalculates valid checksums for all platforms and updates the lockfile cleanly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors", "Lockfile Checksums", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-472",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Resolving missing provider plugins and lockfile checksum mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`." },
      { id: 'B', text: "Delete all `.tf` files in the repository." },
      { id: 'C', text: "Disable checksum verification by hacking the Terraform binary." },
      { id: 'D', text: "Manually download arbitrary binaries from unverified third-party websites." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`. Lockfile checksum errors occur when downloaded provider binaries do not match the cryptographic hashes recorded in `.terraform.lock.hcl` (often across different OS architectures). Running `terraform init -upgrade` recalculates valid checksums for all platforms and updates the lockfile cleanly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors", "Lockfile Checksums", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-473",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Resolving missing provider plugins and lockfile checksum mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`." },
      { id: 'B', text: "Delete all `.tf` files in the repository." },
      { id: 'C', text: "Disable checksum verification by hacking the Terraform binary." },
      { id: 'D', text: "Manually download arbitrary binaries from unverified third-party websites." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`. Lockfile checksum errors occur when downloaded provider binaries do not match the cryptographic hashes recorded in `.terraform.lock.hcl` (often across different OS architectures). Running `terraform init -upgrade` recalculates valid checksums for all platforms and updates the lockfile cleanly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors", "Lockfile Checksums", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-474",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Resolving missing provider plugins and lockfile checksum mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`." },
      { id: 'B', text: "Delete all `.tf` files in the repository." },
      { id: 'C', text: "Disable checksum verification by hacking the Terraform binary." },
      { id: 'D', text: "Manually download arbitrary binaries from unverified third-party websites." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`. Lockfile checksum errors occur when downloaded provider binaries do not match the cryptographic hashes recorded in `.terraform.lock.hcl` (often across different OS architectures). Running `terraform init -upgrade` recalculates valid checksums for all platforms and updates the lockfile cleanly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors", "Lockfile Checksums", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-475",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Resolving missing provider plugins and lockfile checksum mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`." },
      { id: 'B', text: "Delete all `.tf` files in the repository." },
      { id: 'C', text: "Disable checksum verification by hacking the Terraform binary." },
      { id: 'D', text: "Manually download arbitrary binaries from unverified third-party websites." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider source address, ensure network reachability, update the lockfile with `terraform init -upgrade`, and commit `.terraform.lock.hcl`. Lockfile checksum errors occur when downloaded provider binaries do not match the cryptographic hashes recorded in `.terraform.lock.hcl` (often across different OS architectures). Running `terraform init -upgrade` recalculates valid checksums for all platforms and updates the lockfile cleanly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors", "Lockfile Checksums", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_19;
