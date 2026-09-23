export const GITHUB_ACTIONS_QUESTIONS_15 = [
  {
    id: "gh-200-351",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Pinning Third-Party Actions to Full SHA: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Pin the action to `@main`, so each run picks up the newest published code." },
      { id: 'B', text: "Vendor the action's own source into the repository and reference it by a local path." },
      { id: 'C', text: "Pin the action to its full 40-character commit SHA, with the version in a comment." },
      { id: 'D', text: "Pin the action to its major version tag, which the publisher moves forward." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security","Action Pinning","Dr Failover"]
  },
  {
    id: "gh-200-352",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Pinning Third-Party Actions to Full SHA: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Pin the action to its major version tag, which the publisher moves forward." },
      { id: 'B', text: "Vendor the action's own source into the repository and reference it by a local path." },
      { id: 'C', text: "Pin the action to `@main`, so each run picks up the newest published code." },
      { id: 'D', text: "Pin the action to its full 40-character commit SHA, with the version in a comment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security","Action Pinning","High Load Scale"]
  },
  {
    id: "gh-200-353",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Pinning Third-Party Actions to Full SHA: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Pin the action to its full 40-character commit SHA, with the version in a comment." },
      { id: 'B', text: "Pin the action to its major version tag, which the publisher moves forward." },
      { id: 'C', text: "Pin the action to `@main`, so each run picks up the newest published code." },
      { id: 'D', text: "Vendor the action's own source into the repository and reference it by a local path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security","Action Pinning","Security Compliance"]
  },
  {
    id: "gh-200-354",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Pinning Third-Party Actions to Full SHA: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Vendor the action's own source into the repository and reference it by a local path." },
      { id: 'B', text: "Pin the action to `@main`, so each run picks up the newest published code." },
      { id: 'C', text: "Pin the action to its major version tag, which the publisher moves forward." },
      { id: 'D', text: "Pin the action to its full 40-character commit SHA, with the version in a comment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security","Action Pinning","Hybrid Migration"]
  },
  {
    id: "gh-200-355",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Pinning Third-Party Actions to Full SHA: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to protect CI/CD pipelines from malicious upstream tag-hijacking attacks on third-party actions from GitHub Marketplace.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Vendor the action's own source into the repository and reference it by a local path." },
      { id: 'B', text: "Pin the action to `@main`, so each run picks up the newest published code." },
      { id: 'C', text: "Pin the action to its major version tag, which the publisher moves forward." },
      { id: 'D', text: "Pin the action to its full 40-character commit SHA, with the version in a comment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pin the action reference to its full 40-character commit SHA (e.g., `uses: actions/checkout@b4ffde... # v4.1.1`). Git tags in public repositories are mutable pointers that can be overwritten if a maintainer account is compromised. Pinning action references to an immutable 40-character commit SHA guarantees that the exact audited code is executed, preventing supply chain attacks.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain Security","Action Pinning","Resilience Failure"]
  },
  {
    id: "gh-200-356",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Passing Inputs and Secrets to Reusable Workflows: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Add `secrets: inherit` to the reusable workflow invocation." },
      { id: 'B', text: "Declare each secret under `secrets:` on the called workflow." },
      { id: 'C', text: "Pass the secret values through the workflow's `inputs:`." },
      { id: 'D', text: "Reusable workflows cannot receive secrets from a caller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets","secrets: inherit","Dr Failover"]
  },
  {
    id: "gh-200-357",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Passing Inputs and Secrets to Reusable Workflows: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Reusable workflows cannot receive secrets from a caller." },
      { id: 'B', text: "Pass the secret values through the workflow's `inputs:`." },
      { id: 'C', text: "Declare each secret under `secrets:` on the called workflow." },
      { id: 'D', text: "Add `secrets: inherit` to the reusable workflow invocation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets","secrets: inherit","High Load Scale"]
  },
  {
    id: "gh-200-358",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Passing Inputs and Secrets to Reusable Workflows: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Add `secrets: inherit` to the reusable workflow invocation." },
      { id: 'B', text: "Declare each secret under `secrets:` on the called workflow." },
      { id: 'C', text: "Pass the secret values through the workflow's `inputs:`." },
      { id: 'D', text: "Reusable workflows cannot receive secrets from a caller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets","secrets: inherit","Security Compliance"]
  },
  {
    id: "gh-200-359",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Passing Inputs and Secrets to Reusable Workflows: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Declare each secret under `secrets:` on the called workflow." },
      { id: 'B', text: "Pass the secret values through the workflow's `inputs:`." },
      { id: 'C', text: "Add `secrets: inherit` to the reusable workflow invocation." },
      { id: 'D', text: "Reusable workflows cannot receive secrets from a caller." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets","secrets: inherit","Hybrid Migration"]
  },
  {
    id: "gh-200-360",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Passing Inputs and Secrets to Reusable Workflows: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to call a reusable deployment workflow and pass all caller repository secrets to it without declaring each secret individually.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Declare each secret under `secrets:` on the called workflow." },
      { id: 'B', text: "Add `secrets: inherit` to the reusable workflow invocation." },
      { id: 'C', text: "Reusable workflows cannot receive secrets from a caller." },
      { id: 'D', text: "Pass the secret values through the workflow's `inputs:`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In the calling workflow, specify `secrets: inherit` under the reusable workflow invocation. When invoking a reusable workflow via `uses:`, specifying `secrets: inherit` passes all secrets from the caller repository to the called workflow automatically. Alternatively, individual secrets can be explicitly mapped using `secrets: { secret_name: ${{ secrets.SECRET_NAME }} }`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-reusable-workflows",
    tags: ["Reusable Inputs & Secrets","secrets: inherit","Resilience Failure"]
  },
  {
    id: "gh-200-361",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Consuming Outputs from Reusable Workflows: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Declare `outputs:` on the reusable workflow and read `needs.&lt;job&gt;.outputs.&lt;name&gt;`." },
      { id: 'B', text: "Write the value to `$GITHUB_ENV` inside the reusable workflow for the calling workflow to read." },
      { id: 'C', text: "Upload the value as an artifact and download it in the calling workflow's job." },
      { id: 'D', text: "Reusable workflows cannot return outputs, so the caller must recompute the value." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs","Reusable Outputs","Dr Failover"]
  },
  {
    id: "gh-200-362",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Consuming Outputs from Reusable Workflows: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Reusable workflows cannot return outputs, so the caller must recompute the value." },
      { id: 'B', text: "Upload the value as an artifact and download it in the calling workflow's job." },
      { id: 'C', text: "Write the value to `$GITHUB_ENV` inside the reusable workflow for the calling workflow to read." },
      { id: 'D', text: "Declare `outputs:` on the reusable workflow and read `needs.&lt;job&gt;.outputs.&lt;name&gt;`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs","Reusable Outputs","High Load Scale"]
  },
  {
    id: "gh-200-363",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Consuming Outputs from Reusable Workflows: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Write the value to `$GITHUB_ENV` inside the reusable workflow for the calling workflow to read." },
      { id: 'B', text: "Declare `outputs:` on the reusable workflow and read `needs.&lt;job&gt;.outputs.&lt;name&gt;`." },
      { id: 'C', text: "Reusable workflows cannot return outputs, so the caller must recompute the value." },
      { id: 'D', text: "Upload the value as an artifact and download it in the calling workflow's job." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs","Reusable Outputs","Security Compliance"]
  },
  {
    id: "gh-200-364",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Consuming Outputs from Reusable Workflows: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Declare `outputs:` on the reusable workflow and read `needs.&lt;job&gt;.outputs.&lt;name&gt;`." },
      { id: 'B', text: "Write the value to `$GITHUB_ENV` inside the reusable workflow for the calling workflow to read." },
      { id: 'C', text: "Upload the value as an artifact and download it in the calling workflow's job." },
      { id: 'D', text: "Reusable workflows cannot return outputs, so the caller must recompute the value." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs","Reusable Outputs","Hybrid Migration"]
  },
  {
    id: "gh-200-365",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Consuming Outputs from Reusable Workflows: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to capture a generated release version number produced by a reusable build workflow and use it in a subsequent notification job.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Declare `outputs:` on the reusable workflow and read `needs.&lt;job&gt;.outputs.&lt;name&gt;`." },
      { id: 'B', text: "Write the value to `$GITHUB_ENV` inside the reusable workflow for the calling workflow to read." },
      { id: 'C', text: "Upload the value as an artifact and download it in the calling workflow's job." },
      { id: 'D', text: "Reusable workflows cannot return outputs, so the caller must recompute the value." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare `outputs:` in the reusable workflow mapped to job outputs, and reference `needs.&lt;reusable-job-id&gt;.outputs.&lt;output-name&gt;`. Reusable workflows can declare top-level `outputs:` mapped from their internal job outputs. Calling workflows declare dependencies via `needs: [reusable_job]` and access the exported values via `needs.&lt;reusable_job&gt;.outputs.&lt;output_name&gt;`.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow",
    tags: ["Reusable Outputs","Reusable Outputs","Resilience Failure"]
  },
  {
    id: "gh-200-366",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Managing GitHub Actions Cache Eviction Policies: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to optimize workflow caching for a high-volume monorepo that frequently exceeds its default 10GB cache limit, and the team wants to stop cache churn without paying for extra storage.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Use a single cache key for the repository so that every branch shares the same restored cache." },
      { id: 'B', text: "Store the cache as a release asset so it is not subject to the size ceiling." },
      { id: 'C', text: "Use granular cache key prefixes, prune stale caches by API, and let the 7-day eviction run." },
      { id: 'D', text: "Raise the repository's cache limit and keep the existing single-key strategy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches not accessed in 7 days. Each repository gets a 10GB cache allowance by default. Enterprise owners, organization owners or repository admins can raise it, but usage beyond 10GB is billed and a bigger quota leaves the single shared key churning, so raising it does not meet the goal of fixing churn without extra spend. Once a repository reaches its limit, GitHub evicts the least recently used caches to free space. A single repository-wide key makes branches overwrite one another, and a release asset is not a cache mechanism.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction","Cache Eviction","Dr Failover"]
  },
  {
    id: "gh-200-367",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Managing GitHub Actions Cache Eviction Policies: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to optimize workflow caching for a high-volume monorepo that frequently exceeds its default 10GB cache limit, and the team wants to stop cache churn without paying for extra storage.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Use granular cache key prefixes, prune stale caches by API, and let the 7-day eviction run." },
      { id: 'B', text: "Raise the repository's cache limit and keep the existing single-key strategy." },
      { id: 'C', text: "Use a single cache key for the repository so that every branch shares the same restored cache." },
      { id: 'D', text: "Store the cache as a release asset so it is not subject to the size ceiling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches not accessed in 7 days. Each repository gets a 10GB cache allowance by default. Enterprise owners, organization owners or repository admins can raise it, but usage beyond 10GB is billed and a bigger quota leaves the single shared key churning, so raising it does not meet the goal of fixing churn without extra spend. Once a repository reaches its limit, GitHub evicts the least recently used caches to free space. A single repository-wide key makes branches overwrite one another, and a release asset is not a cache mechanism.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction","Cache Eviction","High Load Scale"]
  },
  {
    id: "gh-200-368",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Managing GitHub Actions Cache Eviction Policies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to optimize workflow caching for a high-volume monorepo that frequently exceeds its default 10GB cache limit, and the team wants to stop cache churn without paying for extra storage.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Use granular cache key prefixes, prune stale caches by API, and let the 7-day eviction run." },
      { id: 'B', text: "Use a single cache key for the repository so that every branch shares the same restored cache." },
      { id: 'C', text: "Store the cache as a release asset so it is not subject to the size ceiling." },
      { id: 'D', text: "Raise the repository's cache limit and keep the existing single-key strategy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches not accessed in 7 days. Each repository gets a 10GB cache allowance by default. Enterprise owners, organization owners or repository admins can raise it, but usage beyond 10GB is billed and a bigger quota leaves the single shared key churning, so raising it does not meet the goal of fixing churn without extra spend. Once a repository reaches its limit, GitHub evicts the least recently used caches to free space. A single repository-wide key makes branches overwrite one another, and a release asset is not a cache mechanism.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction","Cache Eviction","Security Compliance"]
  },
  {
    id: "gh-200-369",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Managing GitHub Actions Cache Eviction Policies: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to optimize workflow caching for a high-volume monorepo that frequently exceeds its default 10GB cache limit, and the team wants to stop cache churn without paying for extra storage.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Use granular cache key prefixes, prune stale caches by API, and let the 7-day eviction run." },
      { id: 'B', text: "Raise the repository's cache limit and keep the existing single-key strategy." },
      { id: 'C', text: "Use a single cache key for the repository so that every branch shares the same restored cache." },
      { id: 'D', text: "Store the cache as a release asset so it is not subject to the size ceiling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches not accessed in 7 days. Each repository gets a 10GB cache allowance by default. Enterprise owners, organization owners or repository admins can raise it, but usage beyond 10GB is billed and a bigger quota leaves the single shared key churning, so raising it does not meet the goal of fixing churn without extra spend. Once a repository reaches its limit, GitHub evicts the least recently used caches to free space. A single repository-wide key makes branches overwrite one another, and a release asset is not a cache mechanism.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction","Cache Eviction","Hybrid Migration"]
  },
  {
    id: "gh-200-370",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Managing GitHub Actions Cache Eviction Policies: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to optimize workflow caching for a high-volume monorepo that frequently exceeds its default 10GB cache limit, and the team wants to stop cache churn without paying for extra storage.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Use a single cache key for the repository so that every branch shares the same restored cache." },
      { id: 'B', text: "Use granular cache key prefixes, prune stale caches by API, and let the 7-day eviction run." },
      { id: 'C', text: "Raise the repository's cache limit and keep the existing single-key strategy." },
      { id: 'D', text: "Store the cache as a release asset so it is not subject to the size ceiling." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure cache keys with granular prefixes, delete stale caches via the GitHub CLI or API, and let GitHub evict caches not accessed in 7 days. Each repository gets a 10GB cache allowance by default. Enterprise owners, organization owners or repository admins can raise it, but usage beyond 10GB is billed and a bigger quota leaves the single shared key churning, so raising it does not meet the goal of fixing churn without extra spend. Once a repository reaches its limit, GitHub evicts the least recently used caches to free space. A single repository-wide key makes branches overwrite one another, and a release asset is not a cache mechanism.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#force-deletion-of-cache-entries",
    tags: ["Cache Eviction","Cache Eviction","Resilience Failure"]
  },
  {
    id: "gh-200-371",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Workflow Run Visualization and Log Debugging: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Set `ACTIONS_RUNNER_DEBUG` alone, which already covers the action's own step output." },
      { id: 'B', text: "Set `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to true and re-run the job." },
      { id: 'C', text: "Re-run the job with `--debug` passed to the workflow dispatch invocation." },
      { id: 'D', text: "Fork the third-party action and add print statements to its source code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection","Debug Logging","Dr Failover"]
  },
  {
    id: "gh-200-372",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Workflow Run Visualization and Log Debugging: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Fork the third-party action and add print statements to its source code." },
      { id: 'B', text: "Re-run the job with `--debug` passed to the workflow dispatch invocation." },
      { id: 'C', text: "Set `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to true and re-run the job." },
      { id: 'D', text: "Set `ACTIONS_RUNNER_DEBUG` alone, which already covers the action's own step output." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection","Debug Logging","High Load Scale"]
  },
  {
    id: "gh-200-373",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Workflow Run Visualization and Log Debugging: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Set `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to true and re-run the job." },
      { id: 'B', text: "Set `ACTIONS_RUNNER_DEBUG` alone, which already covers the action's own step output." },
      { id: 'C', text: "Fork the third-party action and add print statements to its source code." },
      { id: 'D', text: "Re-run the job with `--debug` passed to the workflow dispatch invocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection","Debug Logging","Security Compliance"]
  },
  {
    id: "gh-200-374",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Workflow Run Visualization and Log Debugging: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Set `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to true and re-run the job." },
      { id: 'B', text: "Set `ACTIONS_RUNNER_DEBUG` alone, which already covers the action's own step output." },
      { id: 'C', text: "Fork the third-party action and add print statements to its source code." },
      { id: 'D', text: "Re-run the job with `--debug` passed to the workflow dispatch invocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection","Debug Logging","Hybrid Migration"]
  },
  {
    id: "gh-200-375",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume and troubleshoot workflows",
    title: "Workflow Run Visualization and Log Debugging: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to diagnose an obscure failure in a complex third-party composite action step by enabling verbose internal debugging logs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Set `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to true and re-run the job." },
      { id: 'B', text: "Set `ACTIONS_RUNNER_DEBUG` alone, which already covers the action's own step output." },
      { id: 'C', text: "Fork the third-party action and add print statements to its source code." },
      { id: 'D', text: "Re-run the job with `--debug` passed to the workflow dispatch invocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set repository secret or variable `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` to `true` and re-run the failed jobs. Setting `ACTIONS_STEP_DEBUG=true` enables verbose step debugging logs, showing detailed execution commands and variable resolutions. Setting `ACTIONS_RUNNER_DEBUG=true` enables internal runner diagnostic logging, revealing communication between the runner and the GitHub service.",
    referenceUrl: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging",
    tags: ["Log Inspection","Debug Logging","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_15;
