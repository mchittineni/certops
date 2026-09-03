export const GITHUB_GHAS_FLASHCARDS_6 = [
  {
    id: "github-ghas-fc-126",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Custom Pattern Start and End Delimiters",
    hint: "Using word boundaries or character classes to isolate exact secret tokens.",
    back: "When writing custom secret scanning patterns, use precise start and end boundary regex (e.g. <code>(?<=['\"])</code> and <code>(?=['\"])</code>) to prevent matching arbitrary hash substrings.",
    tags: ["Custom Patterns", "Regex", "Secret Scanning"]
  },
  {
    id: "github-ghas-fc-127",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Case Sensitivity in Custom Patterns",
    hint: "Matching exact uppercase/lowercase prefixes in enterprise API keys.",
    back: "Custom secret scanning patterns support case-sensitive regex flags. Specifying exact prefix capitalization (e.g. <code>CORP_SEC_[0-9a-zA-Z]{32}</code>) reduces false positive scan matches.",
    tags: ["Custom Patterns", "Regex", "Triage"]
  },
  {
    id: "github-ghas-fc-128",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Push Protection: Webhook Integration",
    hint: "Receiving real-time alerts when developers bypass push protection.",
    back: "Configure enterprise webhooks for <code>secret_scanning_push_protection.bypassed</code> to trigger automated security Slack alerts notifying SOC analysts whenever a bypass occurs.",
    tags: ["Push Protection", "Webhooks", "SOC"]
  },
  {
    id: "github-ghas-fc-129",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Alert Filtering in UI",
    hint: "Filtering alerts by token provider, validity status, and repository.",
    back: "The Secret Scanning console allows security managers to filter alerts by: <strong>Provider</strong> (AWS, GitHub, Slack), <strong>Validity</strong> (Active vs. Inactive), and <strong>Resolution state</strong>.",
    tags: ["UI", "Filtering", "Secret Scanning"]
  },
  {
    id: "github-ghas-fc-130",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Historical Git Tag Scanning",
    hint: "Does Secret Scanning scan older git release tags and branches?",
    back: "Yes, Secret Scanning inspects the entire git commit object database, including all current branches, historical release tags, and unmerged commit trees pushed to the remote.",
    tags: ["Secret Scanning", "Git History", "Coverage"]
  },
  {
    id: "github-ghas-fc-131",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Preventing Token Leaks in Pull Request Titles",
    hint: "Why secrets in commit messages and PR titles require careful handling.",
    back: "Secret scanning scans git commit messages and PR titles/bodies. If a secret is pasted in a PR title, it is logged and flagged, requiring immediate credential rotation.",
    tags: ["Secret Scanning", "PR", "Best Practices"]
  },
  {
    id: "github-ghas-fc-132",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    front: "Handling Leaked AWS Root Credentials",
    hint: "Immediate actions when AWS root account access keys are committed.",
    back: "If AWS root keys leak: 1. Log in via web console with MFA and delete the access key immediately. 2. Inspect CloudTrail for unauthorized API calls. 3. Rotate all secondary credentials.",
    tags: ["Incident Response", "AWS", "Root Credentials"]
  },
  {
    id: "github-ghas-fc-133",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Custom Pattern Performance Limits",
    hint: "Regex timeout limits preventing ReDoS during push protection scanning.",
    back: "GitHub enforces strict CPU execution time limits on custom regular expressions. Patterns with catastrophic backtracking (nested quantifiers like <code>(a+)+</code>) are rejected during validation.",
    tags: ["Custom Patterns", "ReDoS", "Performance"]
  },
  {
    id: "github-ghas-fc-134",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning UI: Reveal Secret Permission",
    hint: "Restricting which organization roles can view the raw unmasked leaked token.",
    back: "Viewing raw leaked secret strings in the Secret Scanning UI requires explicit <strong>'View secret scanning alert tokens'</strong> repository permissions to prevent unauthorized developers from viewing exposed keys.",
    tags: ["RBAC", "Secret Scanning", "Privacy"]
  },
  {
    id: "github-ghas-fc-135",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Enterprise Auto-Enablement",
    hint: "Automatically turning on secret scanning for all newly created repositories.",
    back: "Under Enterprise code security settings, select <strong>'Automatically enable for new repositories'</strong> to guarantee zero-day coverage without manual repository configuration.",
    tags: ["Governance", "Enterprise", "Automation"]
  },
  {
    id: "github-ghas-fc-136",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning with Private Cloud Infrastructure",
    hint: "Scanning on GitHub Enterprise Server (GHES) on-premises.",
    back: "On <strong>GitHub Enterprise Server (GHES)</strong>, Secret Scanning runs on-premises within corporate datacenters, matching patterns locally without transmitting data to public GitHub.",
    tags: ["GHES", "On-Premises", "Enterprise"]
  },
  {
    id: "github-ghas-fc-137",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Push Protection: Handling Multiple Secrets in One Push",
    hint: "How Push Protection reports multiple distinct leaked tokens in a single commit.",
    back: "If a push contains multiple detected secrets (e.g. an AWS key and a Slack token), Push Protection blocks the push and provides distinct CLI remediation links for each detected secret.",
    tags: ["Push Protection", "Git CLI", "Remediation"]
  },
  {
    id: "github-ghas-fc-138",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Vulnerability Alerts: Notification Channels",
    hint: "Email digest, web notification, and security dashboard alerts.",
    back: "Dependabot delivers notifications via: immediate or daily email digests to repo admins, GitHub web notifications, and entries on the repository <strong>Security</strong> tab.",
    tags: ["Dependabot", "Notifications", "Alerts"]
  },
  {
    id: "github-ghas-fc-139",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Security Updates: PR Merge Conflicts",
    hint: "How Dependabot handles merge conflicts on open security PRs.",
    back: "When conflicts arise against the default branch, Dependabot automatically attempts to rebase its security pull request. If conflicts cannot be resolved automatically, it leaves a comment requesting maintainer assistance.",
    tags: ["Dependabot", "Merge Conflicts", "Git"]
  },
  {
    id: "github-ghas-fc-140",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Version Updates: Commit Message Customization",
    hint: "Configuring prefixes like chore(deps): in dependabot.yml.",
    back: "In <code>dependabot.yml</code>, configure <code>commit-message: { prefix: 'chore', prefix-development: 'chore-dev', include: 'scope' }</code> to adhere to conventional commit standards.",
    tags: ["dependabot.yml", "Commit Messages", "Best Practices"]
  },
  {
    id: "github-ghas-fc-141",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Inactivity Rules: Stopping Automated PRs",
    hint: "Why Dependabot pauses opening version updates on stale repos.",
    back: "If 5 Dependabot version update pull requests remain unmerged and unreviewed, Dependabot halts opening new PRs until existing ones are triaged, preventing PR inbox pollution.",
    tags: ["Dependabot", "Triage", "Maintenance"]
  },
  {
    id: "github-ghas-fc-142",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    front: "Supply Chain Attacks: Dependency Confusion and Typosquatting",
    hint: "Protecting against internal package names registered on public registries.",
    back: "Mitigate <strong>Dependency Confusion</strong> by: scoping internal package names (e.g. <code>@company/auth</code>), configuring explicit registry priority in lockfiles, and using private registry mirrors.",
    tags: ["Supply Chain", "Dependency Confusion", "Security"]
  },
  {
    id: "github-ghas-fc-143",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependency Review Action: Fail on Severity Threshold",
    hint: "Configuring fail-on-severity in actions/dependency-review-action.",
    back: "Set <code>with: { fail-on-severity: 'high' }</code> in the workflow step. The action will pass on Low and Medium CVEs but fail the status check if High or Critical vulnerabilities are introduced.",
    tags: ["Dependency Review", "Thresholds", "CI/CD"]
  },
  {
    id: "github-ghas-fc-144",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Compatibility Scores",
    hint: "Community CI pass rates indicating whether a package upgrade will break builds.",
    back: "Dependabot displays a <strong>Compatibility Score</strong> badge on update PRs, calculated from test pass rates across thousands of open-source projects upgrading to that same package version.",
    tags: ["Dependabot", "Compatibility", "Quality"]
  },
  {
    id: "github-ghas-fc-145",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Version Updates: Custom Scheduling Intervals",
    hint: "Daily, weekly, or monthly package update schedules.",
    back: "Under <code>schedule.interval</code> in <code>dependabot.yml</code>, choose <strong><code>daily</code></strong> (high security), <strong><code>weekly</code></strong> (recommended balance), or <strong><code>monthly</code></strong> (minimal disruption).",
    tags: ["dependabot.yml", "Scheduling", "Maintenance"]
  },
  {
    id: "github-ghas-fc-146",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependency Graph Support for Vendored Code",
    hint: "Does Dependency Graph track unmanaged source files pasted into repos?",
    back: "Dependency Graph tracks dependencies declared in <strong>recognized manifest and lockfiles</strong>. It does not track unmanaged third-party C/C++ source code vendored directly into subdirectories.",
    tags: ["Dependency Graph", "Vendoring", "Limitations"]
  },
  {
    id: "github-ghas-fc-147",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Alerts in Forked Repositories",
    hint: "Are Dependabot alerts enabled automatically on repository forks?",
    back: "By default, Dependabot alerts are <strong>disabled on forked repositories</strong> to prevent duplicate notifications, but can be enabled manually in the fork's security settings.",
    tags: ["Dependabot", "Forks", "Configuration"]
  },
  {
    id: "github-ghas-fc-148",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Software Supply Chain Security: Slsa Framework",
    hint: "Supply-chain Levels for Software Artifacts (SLSA) compliance in GitHub.",
    back: "GitHub Actions and GHAS support SLSA Level 3 compliance through immutable build provenance, verified builder images, and cryptographic Sigstore artifact attestations.",
    tags: ["SLSA", "Supply Chain", "Compliance", "Security"]
  },
  {
    id: "github-ghas-fc-149",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Private Vulnerability Reporting: Assigning Credit",
    hint: "Acknowledging external security researchers on published advisories.",
    back: "When publishing a Security Advisory, maintainers can officially credit the reporting researcher. The credit displays on the researcher's public GitHub profile and CVE record.",
    tags: ["Advisories", "Attribution", "Security Research"]
  },
  {
    id: "github-ghas-fc-150",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Database Structure: AST, CFG, and Type Information",
    hint: "What relational data does CodeQL store in an extracted database?",
    back: "A CodeQL database stores relational representations of: the <strong>Abstract Syntax Tree (AST)</strong>, <strong>Control Flow Graphs (CFG)</strong>, data flow paths, lexical tokens, and variable typing information.",
    tags: ["CodeQL Database", "AST", "CFG", "Architecture"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_6;
