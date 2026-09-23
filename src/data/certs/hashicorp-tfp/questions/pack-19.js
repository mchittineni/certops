export const HASHICORP_TFP_QUESTIONS_19 = [
  {
    id: "hashicorp-tfp-451",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Read the provider's changelog for the resource and pin to the previous release." },
      { id: 'B', text: "Read the state file for that resource and compare its attributes with the plan." },
      { id: 'C', text: "Read the cloud provider's own audit log for the failed call and its parameters." },
      { id: 'D', text: "Read the `TF_LOG=TRACE` output for the exact request and response with the API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging","TF_LOG=TRACE","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-452",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Read the state file for that resource and compare its attributes with the plan." },
      { id: 'B', text: "Read the provider's changelog for the resource and pin to the previous release." },
      { id: 'C', text: "Read the `TF_LOG=TRACE` output for the exact request and response with the API." },
      { id: 'D', text: "Read the cloud provider's own audit log for the failed call and its parameters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging","TF_LOG=TRACE","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-453",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Read the `TF_LOG=TRACE` output for the exact request and response with the API." },
      { id: 'B', text: "Read the provider's changelog for the resource and pin to the previous release." },
      { id: 'C', text: "Read the cloud provider's own audit log for the failed call and its parameters." },
      { id: 'D', text: "Read the state file for that resource and compare its attributes with the plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging","TF_LOG=TRACE","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-454",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Read the provider's changelog for the resource and pin to the previous release." },
      { id: 'B', text: "Read the state file for that resource and compare its attributes with the plan." },
      { id: 'C', text: "Read the cloud provider's own audit log for the failed call and its parameters." },
      { id: 'D', text: "Read the `TF_LOG=TRACE` output for the exact request and response with the API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging","TF_LOG=TRACE","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-455",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Analyzing TF_LOG and HTTP Wire Payloads: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Advanced Debugging to diagnose an intermittent failure where a cloud provider rejects an API call with an ambiguous 'InvalidParameterValue' error.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Read the state file for that resource and compare its attributes with the plan." },
      { id: 'B', text: "Read the provider's changelog for the resource and pin to the previous release." },
      { id: 'C', text: "Read the `TF_LOG=TRACE` output for the exact request and response with the API." },
      { id: 'D', text: "Read the cloud provider's own audit log for the failed call and its parameters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect `TF_LOG=TRACE` logs to examine the exact HTTP request body and response payload sent to and received from the cloud provider API. `TF_LOG=TRACE` prints raw HTTP request headers, method paths, request bodies, and full vendor JSON error responses. Inspecting the wire trace reveals the exact parameter name and value rejected by the cloud API, cutting through ambiguous high-level CLI error messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Advanced Debugging","TF_LOG=TRACE","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-456",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Break the cycle by moving the inline rule into a standalone `aws_security_group_rule`." },
      { id: 'B', text: "Break the cycle by adding `depends_on` from the instance to the security group." },
      { id: 'C', text: "Break the cycle by moving the security group into a separate child module." },
      { id: 'D', text: "Break the cycle by applying the two resources with `-target` in turn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references—commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles","Cycle Errors","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-457",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Break the cycle by moving the security group into a separate child module." },
      { id: 'B', text: "Break the cycle by applying the two resources with `-target` in turn." },
      { id: 'C', text: "Break the cycle by moving the inline rule into a standalone `aws_security_group_rule`." },
      { id: 'D', text: "Break the cycle by adding `depends_on` from the instance to the security group." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references—commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles","Cycle Errors","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-458",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Break the cycle by applying the two resources with `-target` in turn." },
      { id: 'B', text: "Break the cycle by adding `depends_on` from the instance to the security group." },
      { id: 'C', text: "Break the cycle by moving the inline rule into a standalone `aws_security_group_rule`." },
      { id: 'D', text: "Break the cycle by moving the security group into a separate child module." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references—commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles","Cycle Errors","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-459",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Break the cycle by applying the two resources with `-target` in turn." },
      { id: 'B', text: "Break the cycle by moving the inline rule into a standalone `aws_security_group_rule`." },
      { id: 'C', text: "Break the cycle by moving the security group into a separate child module." },
      { id: 'D', text: "Break the cycle by adding `depends_on` from the instance to the security group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references—commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles","Cycle Errors","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-460",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Troubleshooting Circular Dependencies (Cycle Errors): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Dependency Cycles to resolve a `Cycle: ...` error caused by a security group and an EC2 instance that reference each other's IDs simultaneously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Break the cycle by moving the inline rule into a standalone `aws_security_group_rule`." },
      { id: 'B', text: "Break the cycle by adding `depends_on` from the instance to the security group." },
      { id: 'C', text: "Break the cycle by moving the security group into a separate child module." },
      { id: 'D', text: "Break the cycle by applying the two resources with `-target` in turn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Break the cycle by separating the inline rule into a standalone `aws_security_group_rule` resource referencing both the security group and instance. Dependency cycles occur when two resources depend on each other, preventing the DAG from determining creation order. Breaking cycles requires decoupling mutual references—commonly by extracting inline attributes (like security group rules) into independent standalone resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works#graph",
    tags: ["Dependency Cycles","Cycle Errors","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-461",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Debugging Module Input/Output Type Mismatches: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Match the caller's input to the constraint, or widen the variable to `object()`." },
      { id: 'B', text: "Remove the `type` argument from the module's variable so no constraint is enforced." },
      { id: 'C', text: "Convert the value with `tostring()` at the call site so the types line up again." },
      { id: 'D', text: "Pass the value through a `local` first, since locals are not type-checked." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches","Type Mismatches","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-462",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Debugging Module Input/Output Type Mismatches: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Match the caller's input to the constraint, or widen the variable to `object()`." },
      { id: 'B', text: "Remove the `type` argument from the module's variable so no constraint is enforced." },
      { id: 'C', text: "Convert the value with `tostring()` at the call site so the types line up again." },
      { id: 'D', text: "Pass the value through a `local` first, since locals are not type-checked." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches","Type Mismatches","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-463",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Debugging Module Input/Output Type Mismatches: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Match the caller's input to the constraint, or widen the variable to `object()`." },
      { id: 'B', text: "Remove the `type` argument from the module's variable so no constraint is enforced." },
      { id: 'C', text: "Convert the value with `tostring()` at the call site so the types line up again." },
      { id: 'D', text: "Pass the value through a `local` first, since locals are not type-checked." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches","Type Mismatches","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-464",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Debugging Module Input/Output Type Mismatches: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Convert the value with `tostring()` at the call site so the types line up again." },
      { id: 'B', text: "Pass the value through a `local` first, since locals are not type-checked." },
      { id: 'C', text: "Match the caller's input to the constraint, or widen the variable to `object()`." },
      { id: 'D', text: "Remove the `type` argument from the module's variable so no constraint is enforced." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches","Type Mismatches","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-465",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Debugging Module Input/Output Type Mismatches: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Type Mismatches to resolve an error where a child module expects a `map(string)` but the root caller passed an object containing mixed string and number values.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Match the caller's input to the constraint, or widen the variable to `object()`." },
      { id: 'B', text: "Remove the `type` argument from the module's variable so no constraint is enforced." },
      { id: 'C', text: "Convert the value with `tostring()` at the call site so the types line up again." },
      { id: 'D', text: "Pass the value through a `local` first, since locals are not type-checked." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Align the caller's input structure with the module's declared type constraint, or update the module variable to use an `object()` or `any` type. Terraform performs strict type validation. In a `map(string)`, all values must be of the same type (string); passing numbers causes type errors unless explicitly allowed by using `object()` schemas with mixed types or converting numbers using `tostring()`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["Type Mismatches","Type Mismatches","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-466",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Handling Provider Crash and RPC Failures: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Re-run the command with `-refresh=false`, which skips the provider call that panicked." },
      { id: 'B', text: "Remove `.terraform` and re-run `terraform init`, which reinstalls the provider plugin." },
      { id: 'C', text: "Pin the provider to its previous minor version and re-run the plan against it." },
      { id: 'D', text: "Read the stack trace, re-run with `TF_LOG=DEBUG`, check the version, file an issue." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes","Provider Crashes","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-467",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Handling Provider Crash and RPC Failures: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Pin the provider to its previous minor version and re-run the plan against it." },
      { id: 'B', text: "Read the stack trace, re-run with `TF_LOG=DEBUG`, check the version, file an issue." },
      { id: 'C', text: "Re-run the command with `-refresh=false`, which skips the provider call that panicked." },
      { id: 'D', text: "Remove `.terraform` and re-run `terraform init`, which reinstalls the provider plugin." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes","Provider Crashes","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-468",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Handling Provider Crash and RPC Failures: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Read the stack trace, re-run with `TF_LOG=DEBUG`, check the version, file an issue." },
      { id: 'B', text: "Re-run the command with `-refresh=false`, which skips the provider call that panicked." },
      { id: 'C', text: "Pin the provider to its previous minor version and re-run the plan against it." },
      { id: 'D', text: "Remove `.terraform` and re-run `terraform init`, which reinstalls the provider plugin." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes","Provider Crashes","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-469",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Handling Provider Crash and RPC Failures: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Re-run the command with `-refresh=false`, which skips the provider call that panicked." },
      { id: 'B', text: "Pin the provider to its previous minor version and re-run the plan against it." },
      { id: 'C', text: "Read the stack trace, re-run with `TF_LOG=DEBUG`, check the version, file an issue." },
      { id: 'D', text: "Remove `.terraform` and re-run `terraform init`, which reinstalls the provider plugin." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes","Provider Crashes","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-470",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Handling Provider Crash and RPC Failures: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Provider Crashes to diagnose an error where Terraform terminates abruptly with `Error: The terraform-provider-aws plugin crashed`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Remove `.terraform` and re-run `terraform init`, which reinstalls the provider plugin." },
      { id: 'B', text: "Read the stack trace, re-run with `TF_LOG=DEBUG`, check the version, file an issue." },
      { id: 'C', text: "Pin the provider to its previous minor version and re-run the plan against it." },
      { id: 'D', text: "Re-run the command with `-refresh=false`, which skips the provider call that panicked." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Review the panic stack trace in the terminal output, check `TF_LOG=DEBUG`, verify provider version updates, and file an issue on GitHub. When a provider crashes, it panics and prints a Go runtime stack trace. Capturing the stack trace along with `TF_LOG=DEBUG` output pinpoints whether the crash is a known provider bug (often resolved by upgrading or pinning provider versions) or an unhandled edge-case payload.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Provider Crashes","Provider Crashes","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-471",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Check the provider source address, run `terraform providers lock` for every platform, and commit." },
      { id: 'B', text: "Delete `.terraform.lock.hcl` and re-run `init` so the constraint resolves afresh." },
      { id: 'C', text: "Run `terraform init -plugin-dir` against a local copy to bypass the checksum check." },
      { id: 'D', text: "Add a `dev_overrides` block pointing at a locally built copy of the provider." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider source address and network reachability, then run `terraform providers lock -platform=linux_amd64 -platform=darwin_arm64` (one flag per platform the team uses) and commit `.terraform.lock.hcl`. Checksum errors usually occur because the lock file only records hashes for the platform where it was first created, so a CI runner on another OS or architecture cannot verify its download. `terraform init -upgrade` also moves providers to newer versions, which is a side effect, not the fix; deleting the lock file discards the pins; `-plugin-dir` and `dev_overrides` bypass verification instead of repairing it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors","Lockfile Checksums","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-472",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Delete `.terraform.lock.hcl` and re-run `init` so the constraint resolves afresh." },
      { id: 'B', text: "Check the provider source address, run `terraform providers lock` for every platform, and commit." },
      { id: 'C', text: "Add a `dev_overrides` block pointing at a locally built copy of the provider." },
      { id: 'D', text: "Run `terraform init -plugin-dir` against a local copy to bypass the checksum check." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Verify the provider source address and network reachability, then run `terraform providers lock -platform=linux_amd64 -platform=darwin_arm64` (one flag per platform the team uses) and commit `.terraform.lock.hcl`. Checksum errors usually occur because the lock file only records hashes for the platform where it was first created, so a CI runner on another OS or architecture cannot verify its download. `terraform init -upgrade` also moves providers to newer versions, which is a side effect, not the fix; deleting the lock file discards the pins; `-plugin-dir` and `dev_overrides` bypass verification instead of repairing it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors","Lockfile Checksums","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-473",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform init -plugin-dir` against a local copy to bypass the checksum check." },
      { id: 'B', text: "Add a `dev_overrides` block pointing at a locally built copy of the provider." },
      { id: 'C', text: "Check the provider source address, run `terraform providers lock` for every platform, and commit." },
      { id: 'D', text: "Delete `.terraform.lock.hcl` and re-run `init` so the constraint resolves afresh." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Verify the provider source address and network reachability, then run `terraform providers lock -platform=linux_amd64 -platform=darwin_arm64` (one flag per platform the team uses) and commit `.terraform.lock.hcl`. Checksum errors usually occur because the lock file only records hashes for the platform where it was first created, so a CI runner on another OS or architecture cannot verify its download. `terraform init -upgrade` also moves providers to newer versions, which is a side effect, not the fix; deleting the lock file discards the pins; `-plugin-dir` and `dev_overrides` bypass verification instead of repairing it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors","Lockfile Checksums","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-474",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Check the provider source address, run `terraform providers lock` for every platform, and commit." },
      { id: 'B', text: "Add a `dev_overrides` block pointing at a locally built copy of the provider." },
      { id: 'C', text: "Delete `.terraform.lock.hcl` and re-run `init` so the constraint resolves afresh." },
      { id: 'D', text: "Run `terraform init -plugin-dir` against a local copy to bypass the checksum check." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider source address and network reachability, then run `terraform providers lock -platform=linux_amd64 -platform=darwin_arm64` (one flag per platform the team uses) and commit `.terraform.lock.hcl`. Checksum errors usually occur because the lock file only records hashes for the platform where it was first created, so a CI runner on another OS or architecture cannot verify its download. `terraform init -upgrade` also moves providers to newer versions, which is a side effect, not the fix; deleting the lock file discards the pins; `-plugin-dir` and `dev_overrides` bypass verification instead of repairing it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors","Lockfile Checksums","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-475",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Diagnosing Missing Provider Schema and Initialization Errors: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Schema Errors to resolve an error where a CI pipeline fails during `terraform init` with `Error: Failed to query available provider packages` or checksum mismatch.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Delete `.terraform.lock.hcl` and re-run `init` so the constraint resolves afresh." },
      { id: 'B', text: "Run `terraform init -plugin-dir` against a local copy to bypass the checksum check." },
      { id: 'C', text: "Check the provider source address, run `terraform providers lock` for every platform, and commit." },
      { id: 'D', text: "Add a `dev_overrides` block pointing at a locally built copy of the provider." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Verify the provider source address and network reachability, then run `terraform providers lock -platform=linux_amd64 -platform=darwin_arm64` (one flag per platform the team uses) and commit `.terraform.lock.hcl`. Checksum errors usually occur because the lock file only records hashes for the platform where it was first created, so a CI runner on another OS or architecture cannot verify its download. `terraform init -upgrade` also moves providers to newer versions, which is a side effect, not the fix; deleting the lock file discards the pins; `-plugin-dir` and `dev_overrides` bypass verification instead of repairing it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Schema Errors","Lockfile Checksums","Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_19;
