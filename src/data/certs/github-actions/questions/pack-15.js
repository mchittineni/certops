export const GITHUB_ACTIONS_QUESTIONS_15 = [
  {
    id: "gh-200-351",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Pinning Third-Party Actions to Full SHA: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Supply Chain Security to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Pinning third-party action references to immutable commit SHAs vs mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Reference the action with the mutable `@v4` tag." },
      { id: 'B', text: "Reference `@main` to always run bleeding-edge code." },
      { id: 'C', text: "Download action zip archives into personal developer workstations." },
      { id: 'D', text: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security", "Action Pinning", "Dr Failover"]
  },
  {
    id: "gh-200-352",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Pinning Third-Party Actions to Full SHA: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Supply Chain Security to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Pinning third-party action references to immutable commit SHAs vs mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Download action zip archives into personal developer workstations." },
      { id: 'B', text: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`)." },
      { id: 'C', text: "Reference `@main` to always run bleeding-edge code." },
      { id: 'D', text: "Reference the action with the mutable `@v4` tag." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security", "Action Pinning", "High Load Scale"]
  },
  {
    id: "gh-200-353",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Pinning Third-Party Actions to Full SHA: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Supply Chain Security to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Pinning third-party action references to immutable commit SHAs vs mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Reference the action with the mutable `@v4` tag." },
      { id: 'B', text: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`)." },
      { id: 'C', text: "Download action zip archives into personal developer workstations." },
      { id: 'D', text: "Reference `@main` to always run bleeding-edge code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security", "Action Pinning", "Security Compliance"]
  },
  {
    id: "gh-200-354",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Pinning Third-Party Actions to Full SHA: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Supply Chain Security to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Pinning third-party action references to immutable commit SHAs vs mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Reference `@main` to always run bleeding-edge code." },
      { id: 'B', text: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`)." },
      { id: 'C', text: "Download action zip archives into personal developer workstations." },
      { id: 'D', text: "Reference the action with the mutable `@v4` tag." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security", "Action Pinning", "Hybrid Migration"]
  },
  {
    id: "gh-200-355",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Pinning Third-Party Actions to Full SHA: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Supply Chain Security to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Pinning third-party action references to immutable commit SHAs vs mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Reference `@main` to always run bleeding-edge code." },
      { id: 'B', text: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`)." },
      { id: 'C', text: "Download action zip archives into personal developer workstations." },
      { id: 'D', text: "Reference the action with the mutable `@v4` tag." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security", "Action Pinning", "Resilience Failure"]
  },
  {
    id: "gh-200-356",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Passing Inputs and Secrets to Reusable Workflows: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Reusable Inputs & Secrets to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Passing parameters with with: and secrets: inherit to called workflows is under consideration.",
    options: [
      { id: 'A', text: "Hardcode all secret values inside the reusable workflow YAML file." },
      { id: 'B', text: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation." },
      { id: 'C', text: "Reusable workflows cannot access secrets under any circumstance." },
      { id: 'D', text: "Pass secrets as plaintext `inputs:` parameters." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets", "secrets: inherit", "Dr Failover"]
  },
  {
    id: "gh-200-357",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Passing Inputs and Secrets to Reusable Workflows: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Reusable Inputs & Secrets to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Passing parameters with with: and secrets: inherit to called workflows is under consideration.",
    options: [
      { id: 'A', text: "Pass secrets as plaintext `inputs:` parameters." },
      { id: 'B', text: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation." },
      { id: 'C', text: "Reusable workflows cannot access secrets under any circumstance." },
      { id: 'D', text: "Hardcode all secret values inside the reusable workflow YAML file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets", "secrets: inherit", "High Load Scale"]
  },
  {
    id: "gh-200-358",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Passing Inputs and Secrets to Reusable Workflows: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Reusable Inputs & Secrets to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Passing parameters with with: and secrets: inherit to called workflows is under consideration.",
    options: [
      { id: 'A', text: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation." },
      { id: 'B', text: "Reusable workflows cannot access secrets under any circumstance." },
      { id: 'C', text: "Pass secrets as plaintext `inputs:` parameters." },
      { id: 'D', text: "Hardcode all secret values inside the reusable workflow YAML file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets", "secrets: inherit", "Security Compliance"]
  },
  {
    id: "gh-200-359",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Passing Inputs and Secrets to Reusable Workflows: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Reusable Inputs & Secrets to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Passing parameters with with: and secrets: inherit to called workflows is under consideration.",
    options: [
      { id: 'A', text: "Pass secrets as plaintext `inputs:` parameters." },
      { id: 'B', text: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation." },
      { id: 'C', text: "Hardcode all secret values inside the reusable workflow YAML file." },
      { id: 'D', text: "Reusable workflows cannot access secrets under any circumstance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets", "secrets: inherit", "Hybrid Migration"]
  },
  {
    id: "gh-200-360",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Passing Inputs and Secrets to Reusable Workflows: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Reusable Inputs & Secrets to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Passing parameters with with: and secrets: inherit to called workflows is under consideration.",
    options: [
      { id: 'A', text: "Reusable workflows cannot access secrets under any circumstance." },
      { id: 'B', text: "Pass secrets as plaintext `inputs:` parameters." },
      { id: 'C', text: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation." },
      { id: 'D', text: "Hardcode all secret values inside the reusable workflow YAML file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets", "secrets: inherit", "Resilience Failure"]
  },
  {
    id: "gh-200-361",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Consuming Outputs from Reusable Workflows: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Reusable Outputs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Exporting and consuming outputs from called reusable workflows is under consideration.",
    options: [
      { id: 'A', text: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`." },
      { id: 'B', text: "Pass the output via an unencrypted environment variable on the host runner." },
      { id: 'C', text: "Write the output to a text file on a shared network drive." },
      { id: 'D', text: "Reusable workflows cannot export outputs to caller workflows." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs", "Reusable Outputs", "Dr Failover"]
  },
  {
    id: "gh-200-362",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Consuming Outputs from Reusable Workflows: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Reusable Outputs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Exporting and consuming outputs from called reusable workflows is under consideration.",
    options: [
      { id: 'A', text: "Write the output to a text file on a shared network drive." },
      { id: 'B', text: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`." },
      { id: 'C', text: "Reusable workflows cannot export outputs to caller workflows." },
      { id: 'D', text: "Pass the output via an unencrypted environment variable on the host runner." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs", "Reusable Outputs", "High Load Scale"]
  },
  {
    id: "gh-200-363",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Consuming Outputs from Reusable Workflows: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Reusable Outputs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Exporting and consuming outputs from called reusable workflows is under consideration.",
    options: [
      { id: 'A', text: "Reusable workflows cannot export outputs to caller workflows." },
      { id: 'B', text: "Write the output to a text file on a shared network drive." },
      { id: 'C', text: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`." },
      { id: 'D', text: "Pass the output via an unencrypted environment variable on the host runner." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs", "Reusable Outputs", "Security Compliance"]
  },
  {
    id: "gh-200-364",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Consuming Outputs from Reusable Workflows: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Reusable Outputs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Exporting and consuming outputs from called reusable workflows is under consideration.",
    options: [
      { id: 'A', text: "Write the output to a text file on a shared network drive." },
      { id: 'B', text: "Reusable workflows cannot export outputs to caller workflows." },
      { id: 'C', text: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`." },
      { id: 'D', text: "Pass the output via an unencrypted environment variable on the host runner." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs", "Reusable Outputs", "Hybrid Migration"]
  },
  {
    id: "gh-200-365",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Consuming Outputs from Reusable Workflows: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Reusable Outputs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Exporting and consuming outputs from called reusable workflows is under consideration.",
    options: [
      { id: 'A', text: "Reusable workflows cannot export outputs to caller workflows." },
      { id: 'B', text: "Pass the output via an unencrypted environment variable on the host runner." },
      { id: 'C', text: "Write the output to a text file on a shared network drive." },
      { id: 'D', text: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs", "Reusable Outputs", "Resilience Failure"]
  },
  {
    id: "gh-200-366",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing GitHub Actions Cache Eviction Policies: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Cache Eviction to optimize workflow caching for a high-volume monorepo that frequently exceeds the 10GB GitHub Actions cache limit.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Understanding the 10GB per repository cache quota and 7-day eviction policies is under consideration.",
    options: [
      { id: 'A', text: "Increase the cache limit to 100GB by filing a support ticket." },
      { id: 'B', text: "Disable caching permanently across all branches." },
      { id: 'C', text: "Store caches in Git repository branches as commit objects." },
      { id: 'D', text: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days. GitHub Actions imposes a 10GB total cache limit per repository. Once this limit is reached, GitHub automatically evicts older caches (LRU policy) to free space. Any cache entry not accessed in 7 days is also automatically evicted.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction", "Cache Eviction", "Dr Failover"]
  },
  {
    id: "gh-200-367",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing GitHub Actions Cache Eviction Policies: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Cache Eviction to optimize workflow caching for a high-volume monorepo that frequently exceeds the 10GB GitHub Actions cache limit.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Understanding the 10GB per repository cache quota and 7-day eviction policies is under consideration.",
    options: [
      { id: 'A', text: "Increase the cache limit to 100GB by filing a support ticket." },
      { id: 'B', text: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days." },
      { id: 'C', text: "Disable caching permanently across all branches." },
      { id: 'D', text: "Store caches in Git repository branches as commit objects." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days. GitHub Actions imposes a 10GB total cache limit per repository. Once this limit is reached, GitHub automatically evicts older caches (LRU policy) to free space. Any cache entry not accessed in 7 days is also automatically evicted.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction", "Cache Eviction", "High Load Scale"]
  },
  {
    id: "gh-200-368",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing GitHub Actions Cache Eviction Policies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Cache Eviction to optimize workflow caching for a high-volume monorepo that frequently exceeds the 10GB GitHub Actions cache limit.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Understanding the 10GB per repository cache quota and 7-day eviction policies is under consideration.",
    options: [
      { id: 'A', text: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days." },
      { id: 'B', text: "Store caches in Git repository branches as commit objects." },
      { id: 'C', text: "Increase the cache limit to 100GB by filing a support ticket." },
      { id: 'D', text: "Disable caching permanently across all branches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days. GitHub Actions imposes a 10GB total cache limit per repository. Once this limit is reached, GitHub automatically evicts older caches (LRU policy) to free space. Any cache entry not accessed in 7 days is also automatically evicted.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction", "Cache Eviction", "Security Compliance"]
  },
  {
    id: "gh-200-369",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing GitHub Actions Cache Eviction Policies: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Cache Eviction to optimize workflow caching for a high-volume monorepo that frequently exceeds the 10GB GitHub Actions cache limit.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Understanding the 10GB per repository cache quota and 7-day eviction policies is under consideration.",
    options: [
      { id: 'A', text: "Store caches in Git repository branches as commit objects." },
      { id: 'B', text: "Disable caching permanently across all branches." },
      { id: 'C', text: "Increase the cache limit to 100GB by filing a support ticket." },
      { id: 'D', text: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days. GitHub Actions imposes a 10GB total cache limit per repository. Once this limit is reached, GitHub automatically evicts older caches (LRU policy) to free space. Any cache entry not accessed in 7 days is also automatically evicted.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction", "Cache Eviction", "Hybrid Migration"]
  },
  {
    id: "gh-200-370",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Managing GitHub Actions Cache Eviction Policies: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Cache Eviction to optimize workflow caching for a high-volume monorepo that frequently exceeds the 10GB GitHub Actions cache limit.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Understanding the 10GB per repository cache quota and 7-day eviction policies is under consideration.",
    options: [
      { id: 'A', text: "Increase the cache limit to 100GB by filing a support ticket." },
      { id: 'B', text: "Disable caching permanently across all branches." },
      { id: 'C', text: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days." },
      { id: 'D', text: "Store caches in Git repository branches as commit objects." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches older than 7 days. GitHub Actions imposes a 10GB total cache limit per repository. Once this limit is reached, GitHub automatically evicts older caches (LRU policy) to free space. Any cache entry not accessed in 7 days is also automatically evicted.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction", "Cache Eviction", "Resilience Failure"]
  },
  {
    id: "gh-200-371",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Workflow Run Visualization and Log Debugging: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Log Inspection to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Enabling runner diagnostic logging (ACTIONS_RUNNER_DEBUG, ACTIONS_STEP_DEBUG) is under consideration.",
    options: [
      { id: 'A', text: "Disable all logging to bypass the error." },
      { id: 'B', text: "Add print statements inside the third-party action code directly." },
      { id: 'C', text: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs." },
      { id: 'D', text: "Reinstall the GitHub runner operating system." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection", "Debug Logging", "Dr Failover"]
  },
  {
    id: "gh-200-372",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Workflow Run Visualization and Log Debugging: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Log Inspection to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Enabling runner diagnostic logging (ACTIONS_RUNNER_DEBUG, ACTIONS_STEP_DEBUG) is under consideration.",
    options: [
      { id: 'A', text: "Disable all logging to bypass the error." },
      { id: 'B', text: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs." },
      { id: 'C', text: "Reinstall the GitHub runner operating system." },
      { id: 'D', text: "Add print statements inside the third-party action code directly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection", "Debug Logging", "High Load Scale"]
  },
  {
    id: "gh-200-373",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Workflow Run Visualization and Log Debugging: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Log Inspection to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Enabling runner diagnostic logging (ACTIONS_RUNNER_DEBUG, ACTIONS_STEP_DEBUG) is under consideration.",
    options: [
      { id: 'A', text: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs." },
      { id: 'B', text: "Add print statements inside the third-party action code directly." },
      { id: 'C', text: "Reinstall the GitHub runner operating system." },
      { id: 'D', text: "Disable all logging to bypass the error." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection", "Debug Logging", "Security Compliance"]
  },
  {
    id: "gh-200-374",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Workflow Run Visualization and Log Debugging: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Log Inspection to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Enabling runner diagnostic logging (ACTIONS_RUNNER_DEBUG, ACTIONS_STEP_DEBUG) is under consideration.",
    options: [
      { id: 'A', text: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs." },
      { id: 'B', text: "Disable all logging to bypass the error." },
      { id: 'C', text: "Add print statements inside the third-party action code directly." },
      { id: 'D', text: "Reinstall the GitHub runner operating system." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection", "Debug Logging", "Hybrid Migration"]
  },
  {
    id: "gh-200-375",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Workflow Run Visualization and Log Debugging: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Log Inspection to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Enabling runner diagnostic logging (ACTIONS_RUNNER_DEBUG, ACTIONS_STEP_DEBUG) is under consideration.",
    options: [
      { id: 'A', text: "Reinstall the GitHub runner operating system." },
      { id: 'B', text: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs." },
      { id: 'C', text: "Add print statements inside the third-party action code directly." },
      { id: 'D', text: "Disable all logging to bypass the error." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection", "Debug Logging", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_15;
