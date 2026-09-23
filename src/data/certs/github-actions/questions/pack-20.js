export const GITHUB_ACTIONS_QUESTIONS_20 = [
  {
    id: "gh-200-476",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Enterprise Policy Governance for GitHub Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Set the enterprise Actions policy to local actions only, or to selected creators." },
      { id: 'B', text: "Allow all Marketplace actions but require each of them to be pinned to a commit SHA." },
      { id: 'C', text: "Disable Actions for the enterprise and run the pipelines on the old system." },
      { id: 'D', text: "Allow all actions and review the audit log for the ones that were used." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies","Enterprise Policies","Dr Failover"]
  },
  {
    id: "gh-200-477",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Enterprise Policy Governance for GitHub Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Set the enterprise Actions policy to local actions only, or to selected creators." },
      { id: 'B', text: "Allow all Marketplace actions but require each of them to be pinned to a commit SHA." },
      { id: 'C', text: "Disable Actions for the enterprise and run the pipelines on the old system." },
      { id: 'D', text: "Allow all actions and review the audit log for the ones that were used." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies","Enterprise Policies","High Load Scale"]
  },
  {
    id: "gh-200-478",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Enterprise Policy Governance for GitHub Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Disable Actions for the enterprise and run the pipelines on the old system." },
      { id: 'B', text: "Allow all Marketplace actions but require each of them to be pinned to a commit SHA." },
      { id: 'C', text: "Allow all actions and review the audit log for the ones that were used." },
      { id: 'D', text: "Set the enterprise Actions policy to local actions only, or to selected creators." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies","Enterprise Policies","Security Compliance"]
  },
  {
    id: "gh-200-479",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Enterprise Policy Governance for GitHub Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Allow all actions and review the audit log for the ones that were used." },
      { id: 'B', text: "Set the enterprise Actions policy to local actions only, or to selected creators." },
      { id: 'C', text: "Disable Actions for the enterprise and run the pipelines on the old system." },
      { id: 'D', text: "Allow all Marketplace actions but require each of them to be pinned to a commit SHA." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies","Enterprise Policies","Hybrid Migration"]
  },
  {
    id: "gh-200-480",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Enterprise Policy Governance for GitHub Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Set the enterprise Actions policy to local actions only, or to selected creators." },
      { id: 'B', text: "Allow all Marketplace actions but require each of them to be pinned to a commit SHA." },
      { id: 'C', text: "Disable Actions for the enterprise and run the pipelines on the old system." },
      { id: 'D', text: "Allow all actions and review the audit log for the ones that were used." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies","Enterprise Policies","Resilience Failure"]
  },
  {
    id: "gh-200-481",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Security Hardening: Preventing Script Injection: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Interpolate the value directly into the `run:` block and quote it carefully in the shell script." },
      { id: 'B', text: "Pass the untrusted value through the step's `env:` rather than interpolating it inline." },
      { id: 'C', text: "Validate the value against a pattern in an earlier step before using it." },
      { id: 'D', text: "Restrict the trigger to `pull_request_target` so only trusted code runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection","Script Injection","Dr Failover"]
  },
  {
    id: "gh-200-482",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Security Hardening: Preventing Script Injection: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Interpolate the value directly into the `run:` block and quote it carefully in the shell script." },
      { id: 'B', text: "Pass the untrusted value through the step's `env:` rather than interpolating it inline." },
      { id: 'C', text: "Validate the value against a pattern in an earlier step before using it." },
      { id: 'D', text: "Restrict the trigger to `pull_request_target` so only trusted code runs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection","Script Injection","High Load Scale"]
  },
  {
    id: "gh-200-483",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Security Hardening: Preventing Script Injection: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Pass the untrusted value through the step's `env:` rather than interpolating it inline." },
      { id: 'B', text: "Interpolate the value directly into the `run:` block and quote it carefully in the shell script." },
      { id: 'C', text: "Restrict the trigger to `pull_request_target` so only trusted code runs." },
      { id: 'D', text: "Validate the value against a pattern in an earlier step before using it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection","Script Injection","Security Compliance"]
  },
  {
    id: "gh-200-484",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Security Hardening: Preventing Script Injection: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Restrict the trigger to `pull_request_target` so only trusted code runs." },
      { id: 'B', text: "Validate the value against a pattern in an earlier step before using it." },
      { id: 'C', text: "Pass the untrusted value through the step's `env:` rather than interpolating it inline." },
      { id: 'D', text: "Interpolate the value directly into the `run:` block and quote it carefully in the shell script." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection","Script Injection","Hybrid Migration"]
  },
  {
    id: "gh-200-485",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d5",
    domainName: "Secure and optimize automation",
    title: "Security Hardening: Preventing Script Injection: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Interpolate the value directly into the `run:` block and quote it carefully in the shell script." },
      { id: 'B', text: "Validate the value against a pattern in an earlier step before using it." },
      { id: 'C', text: "Restrict the trigger to `pull_request_target` so only trusted code runs." },
      { id: 'D', text: "Pass the untrusted value through the step's `env:` rather than interpolating it inline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection","Script Injection","Resilience Failure"]
  },
  {
    id: "gh-200-486",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Required Workflows for Organization Compliance: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Copy the security workflow into each of the repositories with a sync job." },
      { id: 'B', text: "Audit the repositories every six months against the published standard." },
      { id: 'C', text: "Publish the workflow as a starter template each team is asked to adopt." },
      { id: 'D', text: "Configure an organization ruleset requiring the centralized workflow's status check." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows","Required Workflows","Dr Failover"]
  },
  {
    id: "gh-200-487",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Required Workflows for Organization Compliance: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Copy the security workflow into each of the repositories with a sync job." },
      { id: 'B', text: "Configure an organization ruleset requiring the centralized workflow's status check." },
      { id: 'C', text: "Audit the repositories every six months against the published standard." },
      { id: 'D', text: "Publish the workflow as a starter template each team is asked to adopt." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows","Required Workflows","High Load Scale"]
  },
  {
    id: "gh-200-488",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Required Workflows for Organization Compliance: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Configure an organization ruleset requiring the centralized workflow's status check." },
      { id: 'B', text: "Copy the security workflow into each of the repositories with a sync job." },
      { id: 'C', text: "Publish the workflow as a starter template each team is asked to adopt." },
      { id: 'D', text: "Audit the repositories every six months against the published standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows","Required Workflows","Security Compliance"]
  },
  {
    id: "gh-200-489",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Required Workflows for Organization Compliance: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Configure an organization ruleset requiring the centralized workflow's status check." },
      { id: 'B', text: "Copy the security workflow into each of the repositories with a sync job." },
      { id: 'C', text: "Publish the workflow as a starter template each team is asked to adopt." },
      { id: 'D', text: "Audit the repositories every six months against the published standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows","Required Workflows","Hybrid Migration"]
  },
  {
    id: "gh-200-490",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Required Workflows for Organization Compliance: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Configure an organization ruleset requiring the centralized workflow's status check." },
      { id: 'B', text: "Copy the security workflow into each of the repositories with a sync job." },
      { id: 'C', text: "Publish the workflow as a starter template each team is asked to adopt." },
      { id: 'D', text: "Audit the repositories every six months against the published standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows","Required Workflows","Resilience Failure"]
  },
  {
    id: "gh-200-491",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Organization-Level Secrets and Variables: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Create environment secrets on a shared environment each repository targets." },
      { id: 'B', text: "Create a repository secret in a central repo and pass it through as an input." },
      { id: 'C', text: "Create the same repository secret in each of the hundred repositories." },
      { id: 'D', text: "Create organization secrets with a repository access policy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets","Organization Secrets","Dr Failover"]
  },
  {
    id: "gh-200-492",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Organization-Level Secrets and Variables: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Create the same repository secret in each of the hundred repositories." },
      { id: 'B', text: "Create organization secrets with a repository access policy." },
      { id: 'C', text: "Create environment secrets on a shared environment each repository targets." },
      { id: 'D', text: "Create a repository secret in a central repo and pass it through as an input." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets","Organization Secrets","High Load Scale"]
  },
  {
    id: "gh-200-493",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Organization-Level Secrets and Variables: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Create the same repository secret in each of the hundred repositories." },
      { id: 'B', text: "Create organization secrets with a repository access policy." },
      { id: 'C', text: "Create environment secrets on a shared environment each repository targets." },
      { id: 'D', text: "Create a repository secret in a central repo and pass it through as an input." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets","Organization Secrets","Security Compliance"]
  },
  {
    id: "gh-200-494",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Organization-Level Secrets and Variables: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Create a repository secret in a central repo and pass it through as an input." },
      { id: 'B', text: "Create the same repository secret in each of the hundred repositories." },
      { id: 'C', text: "Create environment secrets on a shared environment each repository targets." },
      { id: 'D', text: "Create organization secrets with a repository access policy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets","Organization Secrets","Hybrid Migration"]
  },
  {
    id: "gh-200-495",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Organization-Level Secrets and Variables: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Create the same repository secret in each of the hundred repositories." },
      { id: 'B', text: "Create organization secrets with a repository access policy." },
      { id: 'C', text: "Create environment secrets on a shared environment each repository targets." },
      { id: 'D', text: "Create a repository secret in a central repo and pass it through as an input." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets","Organization Secrets","Resilience Failure"]
  },
  {
    id: "gh-200-496",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Query the repository's commit history for changes to the workflow files." },
      { id: 'B', text: "Query the enterprise audit log for the `action:workflows.*` event types." },
      { id: 'C', text: "Query the runs API and infer the change from which workflows stopped running." },
      { id: 'D', text: "Query the organization's security log, which covers only authentication events." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs","Audit Logs","Dr Failover"]
  },
  {
    id: "gh-200-497",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Auditing Actions Activity in Enterprise Audit Logs: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Query the enterprise audit log for the `action:workflows.*` event types." },
      { id: 'B', text: "Query the repository's commit history for changes to the workflow files." },
      { id: 'C', text: "Query the organization's security log, which covers only authentication events." },
      { id: 'D', text: "Query the runs API and infer the change from which workflows stopped running." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs","Audit Logs","High Load Scale"]
  },
  {
    id: "gh-200-498",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Query the repository's commit history for changes to the workflow files." },
      { id: 'B', text: "Query the runs API and infer the change from which workflows stopped running." },
      { id: 'C', text: "Query the organization's security log, which covers only authentication events." },
      { id: 'D', text: "Query the enterprise audit log for the `action:workflows.*` event types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs","Audit Logs","Security Compliance"]
  },
  {
    id: "gh-200-499",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Query the runs API and infer the change from which workflows stopped running." },
      { id: 'B', text: "Query the organization's security log, which covers only authentication events." },
      { id: 'C', text: "Query the repository's commit history for changes to the workflow files." },
      { id: 'D', text: "Query the enterprise audit log for the `action:workflows.*` event types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs","Audit Logs","Hybrid Migration"]
  },
  {
    id: "gh-200-500",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage GitHub Actions for the enterprise",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Query the enterprise audit log for the `action:workflows.*` event types." },
      { id: 'B', text: "Query the repository's commit history for changes to the workflow files." },
      { id: 'C', text: "Query the organization's security log, which covers only authentication events." },
      { id: 'D', text: "Query the runs API and infer the change from which workflows stopped running." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs","Audit Logs","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_20;
