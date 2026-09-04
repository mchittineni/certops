export const GITHUB_ACTIONS_QUESTIONS_20 = [
  {
    id: "gh-200-476",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Enterprise Policy Governance for GitHub Actions: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Enterprise Policies to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Restricting allowed actions to local actions and verified creator Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators." },
      { id: 'B', text: "Allow all public marketplace actions without restrictions." },
      { id: 'C', text: "Disable GitHub Actions completely across the enterprise." },
      { id: 'D', text: "Instruct developers to read third-party source code voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies", "Enterprise Policies", "Dr Failover"]
  },
  {
    id: "gh-200-477",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Enterprise Policy Governance for GitHub Actions: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Enterprise Policies to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Restricting allowed actions to local actions and verified creator Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators." },
      { id: 'B', text: "Allow all public marketplace actions without restrictions." },
      { id: 'C', text: "Disable GitHub Actions completely across the enterprise." },
      { id: 'D', text: "Instruct developers to read third-party source code voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies", "Enterprise Policies", "High Load Scale"]
  },
  {
    id: "gh-200-478",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Enterprise Policy Governance for GitHub Actions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Enterprise Policies to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Restricting allowed actions to local actions and verified creator Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators." },
      { id: 'B', text: "Allow all public marketplace actions without restrictions." },
      { id: 'C', text: "Disable GitHub Actions completely across the enterprise." },
      { id: 'D', text: "Instruct developers to read third-party source code voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies", "Enterprise Policies", "Security Compliance"]
  },
  {
    id: "gh-200-479",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Enterprise Policy Governance for GitHub Actions: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Enterprise Policies to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Restricting allowed actions to local actions and verified creator Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators." },
      { id: 'B', text: "Allow all public marketplace actions without restrictions." },
      { id: 'C', text: "Disable GitHub Actions completely across the enterprise." },
      { id: 'D', text: "Instruct developers to read third-party source code voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies", "Enterprise Policies", "Hybrid Migration"]
  },
  {
    id: "gh-200-480",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Enterprise Policy Governance for GitHub Actions: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Enterprise Policies to prevent developers across an enterprise organization from using unvetted third-party actions from random GitHub users.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Restricting allowed actions to local actions and verified creator Marketplace actions is under consideration.",
    options: [
      { id: 'A', text: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators." },
      { id: 'B', text: "Allow all public marketplace actions without restrictions." },
      { id: 'C', text: "Disable GitHub Actions completely across the enterprise." },
      { id: 'D', text: "Instruct developers to read third-party source code voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Enterprise Actions Policies to allow 'Local actions only' or 'Allow select actions' from verified creators. Enterprise and organization settings allow administrators to enforce strict action policies: disabling actions, allowing only actions created by GitHub, or allowing specific whitelisted action patterns (e.g., `actions/*`, `aws-actions/*`), protecting the entire software supply chain.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Enterprise Policies", "Enterprise Policies", "Resilience Failure"]
  },
  {
    id: "gh-200-481",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Security Hardening: Preventing Script Injection: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Script Injection to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Mitigating untrusted input injection in inline run: scripts using environment variables is under consideration.",
    options: [
      { id: 'A', text: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation." },
      { id: 'B', text: "Interpolate context strings directly inside inline bash commands: `run: echo \"${{ github.event.issue.title }}\"`." },
      { id: 'C', text: "Disable all automated pull request workflows." },
      { id: 'D', text: "Trust all pull request titles to contain safe characters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection", "Script Injection", "Dr Failover"]
  },
  {
    id: "gh-200-482",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Security Hardening: Preventing Script Injection: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Script Injection to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Mitigating untrusted input injection in inline run: scripts using environment variables is under consideration.",
    options: [
      { id: 'A', text: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation." },
      { id: 'B', text: "Interpolate context strings directly inside inline bash commands: `run: echo \"${{ github.event.issue.title }}\"`." },
      { id: 'C', text: "Disable all automated pull request workflows." },
      { id: 'D', text: "Trust all pull request titles to contain safe characters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection", "Script Injection", "High Load Scale"]
  },
  {
    id: "gh-200-483",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Security Hardening: Preventing Script Injection: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Script Injection to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Mitigating untrusted input injection in inline run: scripts using environment variables is under consideration.",
    options: [
      { id: 'A', text: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation." },
      { id: 'B', text: "Interpolate context strings directly inside inline bash commands: `run: echo \"${{ github.event.issue.title }}\"`." },
      { id: 'C', text: "Disable all automated pull request workflows." },
      { id: 'D', text: "Trust all pull request titles to contain safe characters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection", "Script Injection", "Security Compliance"]
  },
  {
    id: "gh-200-484",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Security Hardening: Preventing Script Injection: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Script Injection to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Mitigating untrusted input injection in inline run: scripts using environment variables is under consideration.",
    options: [
      { id: 'A', text: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation." },
      { id: 'B', text: "Interpolate context strings directly inside inline bash commands: `run: echo \"${{ github.event.issue.title }}\"`." },
      { id: 'C', text: "Disable all automated pull request workflows." },
      { id: 'D', text: "Trust all pull request titles to contain safe characters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection", "Script Injection", "Hybrid Migration"]
  },
  {
    id: "gh-200-485",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Security Hardening: Preventing Script Injection: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Script Injection to prevent an attacker from executing arbitrary bash commands via malicious pull request titles or issue comments in a workflow step.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Mitigating untrusted input injection in inline run: scripts using environment variables is under consideration.",
    options: [
      { id: 'A', text: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation." },
      { id: 'B', text: "Interpolate context strings directly inside inline bash commands: `run: echo \"${{ github.event.issue.title }}\"`." },
      { id: 'C', text: "Disable all automated pull request workflows." },
      { id: 'D', text: "Trust all pull request titles to contain safe characters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pass untrusted context values (`${{ github.event.issue.title }}`) through step environment variables (`env:`) rather than inline script interpolation. Directly interpolating untrusted input (issue titles, PR comments) into inline `run:` scripts allows attackers to inject malicious shell commands (e.g., `; rm -rf /`). Passing untrusted data through environment variables (`env: TITLE: ${{ github.event.issue.title }}`) treats data strictly as string literals, preventing command injection.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections",
    tags: ["Script Injection", "Script Injection", "Resilience Failure"]
  },
  {
    id: "gh-200-486",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Required Workflows for Organization Compliance: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Required Workflows to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Enforcing mandatory security and compliance workflows across all enterprise repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow." },
      { id: 'B', text: "Manually copy the security workflow into all 500 enterprise repositories." },
      { id: 'C', text: "Trust all developers to include the security scan in their local workflows." },
      { id: 'D', text: "Perform compliance audits manually once every six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows", "Required Workflows", "Dr Failover"]
  },
  {
    id: "gh-200-487",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Required Workflows for Organization Compliance: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Required Workflows to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Enforcing mandatory security and compliance workflows across all enterprise repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow." },
      { id: 'B', text: "Manually copy the security workflow into all 500 enterprise repositories." },
      { id: 'C', text: "Trust all developers to include the security scan in their local workflows." },
      { id: 'D', text: "Perform compliance audits manually once every six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows", "Required Workflows", "High Load Scale"]
  },
  {
    id: "gh-200-488",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Required Workflows for Organization Compliance: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Required Workflows to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Enforcing mandatory security and compliance workflows across all enterprise repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow." },
      { id: 'B', text: "Manually copy the security workflow into all 500 enterprise repositories." },
      { id: 'C', text: "Trust all developers to include the security scan in their local workflows." },
      { id: 'D', text: "Perform compliance audits manually once every six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows", "Required Workflows", "Security Compliance"]
  },
  {
    id: "gh-200-489",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Required Workflows for Organization Compliance: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Required Workflows to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Enforcing mandatory security and compliance workflows across all enterprise repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow." },
      { id: 'B', text: "Manually copy the security workflow into all 500 enterprise repositories." },
      { id: 'C', text: "Trust all developers to include the security scan in their local workflows." },
      { id: 'D', text: "Perform compliance audits manually once every six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows", "Required Workflows", "Hybrid Migration"]
  },
  {
    id: "gh-200-490",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Required Workflows for Organization Compliance: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Required Workflows to guarantee that every repository across an enterprise organization runs a mandatory security scan on all pull requests before merging.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Enforcing mandatory security and compliance workflows across all enterprise repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow." },
      { id: 'B', text: "Manually copy the security workflow into all 500 enterprise repositories." },
      { id: 'C', text: "Trust all developers to include the security scan in their local workflows." },
      { id: 'D', text: "Perform compliance audits manually once every six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Organization Rule (or Repository Ruleset) requiring specific status checks from a centralized workflow. Repository Rulesets and organization-level required workflows enforce that specific workflows or status checks must pass before pull requests can be merged, ensuring mandatory compliance scanning cannot be bypassed or deleted by repository administrators.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Required Workflows", "Required Workflows", "Resilience Failure"]
  },
  {
    id: "gh-200-491",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Organization-Level Secrets and Variables: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Organization Secrets to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Managing centralized secrets and variables with repository access policies is under consideration.",
    options: [
      { id: 'A', text: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories)." },
      { id: 'B', text: "Duplicate the secret manually in 100 individual repository settings pages." },
      { id: 'C', text: "Commit the secret to a public repository README file." },
      { id: 'D', text: "Share the secret with developers via chat." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets", "Organization Secrets", "Dr Failover"]
  },
  {
    id: "gh-200-492",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Organization-Level Secrets and Variables: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Organization Secrets to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Managing centralized secrets and variables with repository access policies is under consideration.",
    options: [
      { id: 'A', text: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories)." },
      { id: 'B', text: "Duplicate the secret manually in 100 individual repository settings pages." },
      { id: 'C', text: "Commit the secret to a public repository README file." },
      { id: 'D', text: "Share the secret with developers via chat." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets", "Organization Secrets", "High Load Scale"]
  },
  {
    id: "gh-200-493",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Organization-Level Secrets and Variables: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Organization Secrets to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Managing centralized secrets and variables with repository access policies is under consideration.",
    options: [
      { id: 'A', text: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories)." },
      { id: 'B', text: "Duplicate the secret manually in 100 individual repository settings pages." },
      { id: 'C', text: "Commit the secret to a public repository README file." },
      { id: 'D', text: "Share the secret with developers via chat." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets", "Organization Secrets", "Security Compliance"]
  },
  {
    id: "gh-200-494",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Organization-Level Secrets and Variables: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Organization Secrets to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Managing centralized secrets and variables with repository access policies is under consideration.",
    options: [
      { id: 'A', text: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories)." },
      { id: 'B', text: "Duplicate the secret manually in 100 individual repository settings pages." },
      { id: 'C', text: "Commit the secret to a public repository README file." },
      { id: 'D', text: "Share the secret with developers via chat." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets", "Organization Secrets", "Hybrid Migration"]
  },
  {
    id: "gh-200-495",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Organization-Level Secrets and Variables: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Organization Secrets to manage a shared SonarQube API token and container registry credentials across 100 repositories in an organization with centralized access control.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Managing centralized secrets and variables with repository access policies is under consideration.",
    options: [
      { id: 'A', text: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories)." },
      { id: 'B', text: "Duplicate the secret manually in 100 individual repository settings pages." },
      { id: 'C', text: "Commit the secret to a public repository README file." },
      { id: 'D', text: "Share the secret with developers via chat." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Organization Secrets configured with repository access policies (All repositories, Private repositories, or Selected repositories). Organization secrets and variables centralize credential management. Administrators configure secrets once at the organization level and define access policies (e.g., 'Selected repositories' or 'Private repositories only'), eliminating repetitive secret provisioning and streamlining enterprise key rotation.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization",
    tags: ["Organization Secrets", "Organization Secrets", "Resilience Failure"]
  },
  {
    id: "gh-200-496",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Enterprise Audit Logs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Tracking workflow executions, secret accesses, and runner registrations in audit logs is under consideration.",
    options: [
      { id: 'A', text: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`)." },
      { id: 'B', text: "Inspect the git commit history of the repository." },
      { id: 'C', text: "Review developer browser search history." },
      { id: 'D', text: "Assume GitHub does not record administrative actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs", "Audit Logs", "Dr Failover"]
  },
  {
    id: "gh-200-497",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Auditing Actions Activity in Enterprise Audit Logs: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Enterprise Audit Logs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Tracking workflow executions, secret accesses, and runner registrations in audit logs is under consideration.",
    options: [
      { id: 'A', text: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`)." },
      { id: 'B', text: "Inspect the git commit history of the repository." },
      { id: 'C', text: "Review developer browser search history." },
      { id: 'D', text: "Assume GitHub does not record administrative actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs", "Audit Logs", "High Load Scale"]
  },
  {
    id: "gh-200-498",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Enterprise Audit Logs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Tracking workflow executions, secret accesses, and runner registrations in audit logs is under consideration.",
    options: [
      { id: 'A', text: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`)." },
      { id: 'B', text: "Inspect the git commit history of the repository." },
      { id: 'C', text: "Review developer browser search history." },
      { id: 'D', text: "Assume GitHub does not record administrative actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs", "Audit Logs", "Security Compliance"]
  },
  {
    id: "gh-200-499",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Enterprise Audit Logs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Tracking workflow executions, secret accesses, and runner registrations in audit logs is under consideration.",
    options: [
      { id: 'A', text: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`)." },
      { id: 'B', text: "Inspect the git commit history of the repository." },
      { id: 'C', text: "Review developer browser search history." },
      { id: 'D', text: "Assume GitHub does not record administrative actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs", "Audit Logs", "Hybrid Migration"]
  },
  {
    id: "gh-200-500",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Auditing Actions Activity in Enterprise Audit Logs: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Enterprise Audit Logs to investigate an unauthorized modification to a self-hosted runner group or determine who downloaded an encrypted repository secret.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Tracking workflow executions, secret accesses, and runner registrations in audit logs is under consideration.",
    options: [
      { id: 'A', text: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`)." },
      { id: 'B', text: "Inspect the git commit history of the repository." },
      { id: 'C', text: "Review developer browser search history." },
      { id: 'D', text: "Assume GitHub does not record administrative actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub Enterprise Audit Log for actions-related events (`action:org.runner_group.*` or `action:workflows.*`). The GitHub Enterprise Audit Log captures administrative and security events: runner group creation, runner registration, workflow permissions changes, secret access, and environment modifications. Querying audit logs provides immutable forensic visibility for compliance investigations.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#github-actions",
    tags: ["Enterprise Audit Logs", "Audit Logs", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_20;
