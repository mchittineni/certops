export const GITHUB_ACTIONS_QUESTIONS_16 = [
  {
    id: "gh-200-376",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "GitHub CLI (gh) for Workflow Management: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates GitHub CLI to trigger an on-demand workflow run and stream its live console logs directly inside a developer terminal without opening a web browser.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Managing workflows, viewing logs, and triggering runs with the gh CLI tool is under consideration.",
    options: [
      { id: 'A', text: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal." },
      { id: 'B', text: "Use curl commands with manual bearer tokens." },
      { id: 'C', text: "Constantly refresh the browser web interface." },
      { id: 'D', text: "SSH into the GitHub cloud datacenter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal. The GitHub CLI (`gh`) provides robust command-line management for GitHub Actions: `gh workflow list`, `gh workflow run` (to dispatch runs with inputs), `gh run list`, `gh run view --log`, and `gh run watch` (to stream live console logs in the terminal).",
    referenceUrl: "https://cli.github.com/manual/gh_workflow",
    tags: ["GitHub CLI", "GitHub CLI Actions", "Dr Failover"]
  },
  {
    id: "gh-200-377",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "GitHub CLI (gh) for Workflow Management: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates GitHub CLI to trigger an on-demand workflow run and stream its live console logs directly inside a developer terminal without opening a web browser.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Managing workflows, viewing logs, and triggering runs with the gh CLI tool is under consideration.",
    options: [
      { id: 'A', text: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal." },
      { id: 'B', text: "Use curl commands with manual bearer tokens." },
      { id: 'C', text: "Constantly refresh the browser web interface." },
      { id: 'D', text: "SSH into the GitHub cloud datacenter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal. The GitHub CLI (`gh`) provides robust command-line management for GitHub Actions: `gh workflow list`, `gh workflow run` (to dispatch runs with inputs), `gh run list`, `gh run view --log`, and `gh run watch` (to stream live console logs in the terminal).",
    referenceUrl: "https://cli.github.com/manual/gh_workflow",
    tags: ["GitHub CLI", "GitHub CLI Actions", "High Load Scale"]
  },
  {
    id: "gh-200-378",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "GitHub CLI (gh) for Workflow Management: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates GitHub CLI to trigger an on-demand workflow run and stream its live console logs directly inside a developer terminal without opening a web browser.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Managing workflows, viewing logs, and triggering runs with the gh CLI tool is under consideration.",
    options: [
      { id: 'A', text: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal." },
      { id: 'B', text: "Use curl commands with manual bearer tokens." },
      { id: 'C', text: "Constantly refresh the browser web interface." },
      { id: 'D', text: "SSH into the GitHub cloud datacenter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal. The GitHub CLI (`gh`) provides robust command-line management for GitHub Actions: `gh workflow list`, `gh workflow run` (to dispatch runs with inputs), `gh run list`, `gh run view --log`, and `gh run watch` (to stream live console logs in the terminal).",
    referenceUrl: "https://cli.github.com/manual/gh_workflow",
    tags: ["GitHub CLI", "GitHub CLI Actions", "Security Compliance"]
  },
  {
    id: "gh-200-379",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "GitHub CLI (gh) for Workflow Management: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates GitHub CLI to trigger an on-demand workflow run and stream its live console logs directly inside a developer terminal without opening a web browser.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Managing workflows, viewing logs, and triggering runs with the gh CLI tool is under consideration.",
    options: [
      { id: 'A', text: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal." },
      { id: 'B', text: "Use curl commands with manual bearer tokens." },
      { id: 'C', text: "Constantly refresh the browser web interface." },
      { id: 'D', text: "SSH into the GitHub cloud datacenter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal. The GitHub CLI (`gh`) provides robust command-line management for GitHub Actions: `gh workflow list`, `gh workflow run` (to dispatch runs with inputs), `gh run list`, `gh run view --log`, and `gh run watch` (to stream live console logs in the terminal).",
    referenceUrl: "https://cli.github.com/manual/gh_workflow",
    tags: ["GitHub CLI", "GitHub CLI Actions", "Hybrid Migration"]
  },
  {
    id: "gh-200-380",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "GitHub CLI (gh) for Workflow Management: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates GitHub CLI to trigger an on-demand workflow run and stream its live console logs directly inside a developer terminal without opening a web browser.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Managing workflows, viewing logs, and triggering runs with the gh CLI tool is under consideration.",
    options: [
      { id: 'A', text: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal." },
      { id: 'B', text: "Use curl commands with manual bearer tokens." },
      { id: 'C', text: "Constantly refresh the browser web interface." },
      { id: 'D', text: "SSH into the GitHub cloud datacenter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `gh workflow run &lt;workflow-name&gt;` followed by `gh run watch` to stream live execution logs in the terminal. The GitHub CLI (`gh`) provides robust command-line management for GitHub Actions: `gh workflow list`, `gh workflow run` (to dispatch runs with inputs), `gh run list`, `gh run view --log`, and `gh run watch` (to stream live console logs in the terminal).",
    referenceUrl: "https://cli.github.com/manual/gh_workflow",
    tags: ["GitHub CLI", "GitHub CLI Actions", "Resilience Failure"]
  },
  {
    id: "gh-200-381",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Dependency Updates with Dependabot: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Dependabot to automate the creation of weekly pull requests updating outdated npm and Docker dependencies across a repository.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Configuring dependabot.yml for automated dependency version updates and PRs is under consideration.",
    options: [
      { id: 'A', text: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals." },
      { id: 'B', text: "Manually check npm registry website once a year for package updates." },
      { id: 'C', text: "Write a cron script that commits package updates directly to main without review." },
      { id: 'D', text: "Disable automated updates to prevent new code changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals. Dependabot natively checks project dependencies for updates. Configuring `.github/dependabot.yml` specifies package ecosystems (`npm`, `docker`, `github-actions`, `pip`), directories, and update schedules (`daily`, `weekly`), automatically raising PRs for version updates.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Dependabot", "Dependabot", "Dr Failover"]
  },
  {
    id: "gh-200-382",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Dependency Updates with Dependabot: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Dependabot to automate the creation of weekly pull requests updating outdated npm and Docker dependencies across a repository.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Configuring dependabot.yml for automated dependency version updates and PRs is under consideration.",
    options: [
      { id: 'A', text: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals." },
      { id: 'B', text: "Manually check npm registry website once a year for package updates." },
      { id: 'C', text: "Write a cron script that commits package updates directly to main without review." },
      { id: 'D', text: "Disable automated updates to prevent new code changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals. Dependabot natively checks project dependencies for updates. Configuring `.github/dependabot.yml` specifies package ecosystems (`npm`, `docker`, `github-actions`, `pip`), directories, and update schedules (`daily`, `weekly`), automatically raising PRs for version updates.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Dependabot", "Dependabot", "High Load Scale"]
  },
  {
    id: "gh-200-383",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Dependency Updates with Dependabot: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Dependabot to automate the creation of weekly pull requests updating outdated npm and Docker dependencies across a repository.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Configuring dependabot.yml for automated dependency version updates and PRs is under consideration.",
    options: [
      { id: 'A', text: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals." },
      { id: 'B', text: "Manually check npm registry website once a year for package updates." },
      { id: 'C', text: "Write a cron script that commits package updates directly to main without review." },
      { id: 'D', text: "Disable automated updates to prevent new code changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals. Dependabot natively checks project dependencies for updates. Configuring `.github/dependabot.yml` specifies package ecosystems (`npm`, `docker`, `github-actions`, `pip`), directories, and update schedules (`daily`, `weekly`), automatically raising PRs for version updates.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Dependabot", "Dependabot", "Security Compliance"]
  },
  {
    id: "gh-200-384",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Dependency Updates with Dependabot: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Dependabot to automate the creation of weekly pull requests updating outdated npm and Docker dependencies across a repository.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Configuring dependabot.yml for automated dependency version updates and PRs is under consideration.",
    options: [
      { id: 'A', text: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals." },
      { id: 'B', text: "Manually check npm registry website once a year for package updates." },
      { id: 'C', text: "Write a cron script that commits package updates directly to main without review." },
      { id: 'D', text: "Disable automated updates to prevent new code changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals. Dependabot natively checks project dependencies for updates. Configuring `.github/dependabot.yml` specifies package ecosystems (`npm`, `docker`, `github-actions`, `pip`), directories, and update schedules (`daily`, `weekly`), automatically raising PRs for version updates.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Dependabot", "Dependabot", "Hybrid Migration"]
  },
  {
    id: "gh-200-385",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Dependency Updates with Dependabot: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Dependabot to automate the creation of weekly pull requests updating outdated npm and Docker dependencies across a repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Configuring dependabot.yml for automated dependency version updates and PRs is under consideration.",
    options: [
      { id: 'A', text: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals." },
      { id: 'B', text: "Manually check npm registry website once a year for package updates." },
      { id: 'C', text: "Write a cron script that commits package updates directly to main without review." },
      { id: 'D', text: "Disable automated updates to prevent new code changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `.github/dependabot.yml` configuration file specifying package ecosystems (`npm`, `docker`), directories, and schedule intervals. Dependabot natively checks project dependencies for updates. Configuring `.github/dependabot.yml` specifies package ecosystems (`npm`, `docker`, `github-actions`, `pip`), directories, and update schedules (`daily`, `weekly`), automatically raising PRs for version updates.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Dependabot", "Dependabot", "Resilience Failure"]
  },
  {
    id: "gh-200-386",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Keeping Actions Updated with Dependabot: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Actions Maintenance to ensure that GitHub Actions workflow files automatically receive pull requests whenever third-party actions release new versions or security patches.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Automating GitHub Actions version updates using dependabot package-ecosystem: github-actions is under consideration.",
    options: [
      { id: 'A', text: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory." },
      { id: 'B', text: "Manually inspect Marketplace pages of every action once a month." },
      { id: 'C', text: "Reference `@master` so actions update silently without pull requests." },
      { id: 'D', text: "Ignore action updates until a build fails." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory. Dependabot supports the `github-actions` package ecosystem. It monitors workflow files in `/.github/workflows`, checks upstream action repositories for new releases or updated commit SHAs, and automatically opens pull requests with release notes.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems",
    tags: ["Actions Maintenance", "Actions Dependabot", "Dr Failover"]
  },
  {
    id: "gh-200-387",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Keeping Actions Updated with Dependabot: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Actions Maintenance to ensure that GitHub Actions workflow files automatically receive pull requests whenever third-party actions release new versions or security patches.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Automating GitHub Actions version updates using dependabot package-ecosystem: github-actions is under consideration.",
    options: [
      { id: 'A', text: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory." },
      { id: 'B', text: "Manually inspect Marketplace pages of every action once a month." },
      { id: 'C', text: "Reference `@master` so actions update silently without pull requests." },
      { id: 'D', text: "Ignore action updates until a build fails." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory. Dependabot supports the `github-actions` package ecosystem. It monitors workflow files in `/.github/workflows`, checks upstream action repositories for new releases or updated commit SHAs, and automatically opens pull requests with release notes.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems",
    tags: ["Actions Maintenance", "Actions Dependabot", "High Load Scale"]
  },
  {
    id: "gh-200-388",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Keeping Actions Updated with Dependabot: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Actions Maintenance to ensure that GitHub Actions workflow files automatically receive pull requests whenever third-party actions release new versions or security patches.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Automating GitHub Actions version updates using dependabot package-ecosystem: github-actions is under consideration.",
    options: [
      { id: 'A', text: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory." },
      { id: 'B', text: "Manually inspect Marketplace pages of every action once a month." },
      { id: 'C', text: "Reference `@master` so actions update silently without pull requests." },
      { id: 'D', text: "Ignore action updates until a build fails." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory. Dependabot supports the `github-actions` package ecosystem. It monitors workflow files in `/.github/workflows`, checks upstream action repositories for new releases or updated commit SHAs, and automatically opens pull requests with release notes.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems",
    tags: ["Actions Maintenance", "Actions Dependabot", "Security Compliance"]
  },
  {
    id: "gh-200-389",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Keeping Actions Updated with Dependabot: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Actions Maintenance to ensure that GitHub Actions workflow files automatically receive pull requests whenever third-party actions release new versions or security patches.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Automating GitHub Actions version updates using dependabot package-ecosystem: github-actions is under consideration.",
    options: [
      { id: 'A', text: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory." },
      { id: 'B', text: "Manually inspect Marketplace pages of every action once a month." },
      { id: 'C', text: "Reference `@master` so actions update silently without pull requests." },
      { id: 'D', text: "Ignore action updates until a build fails." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory. Dependabot supports the `github-actions` package ecosystem. It monitors workflow files in `/.github/workflows`, checks upstream action repositories for new releases or updated commit SHAs, and automatically opens pull requests with release notes.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems",
    tags: ["Actions Maintenance", "Actions Dependabot", "Hybrid Migration"]
  },
  {
    id: "gh-200-390",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Keeping Actions Updated with Dependabot: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Actions Maintenance to ensure that GitHub Actions workflow files automatically receive pull requests whenever third-party actions release new versions or security patches.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Automating GitHub Actions version updates using dependabot package-ecosystem: github-actions is under consideration.",
    options: [
      { id: 'A', text: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory." },
      { id: 'B', text: "Manually inspect Marketplace pages of every action once a month." },
      { id: 'C', text: "Reference `@master` so actions update silently without pull requests." },
      { id: 'D', text: "Ignore action updates until a build fails." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `package-ecosystem: 'github-actions'` in `.github/dependabot.yml` targeting the `/.github/workflows` directory. Dependabot supports the `github-actions` package ecosystem. It monitors workflow files in `/.github/workflows`, checks upstream action repositories for new releases or updated commit SHAs, and automatically opens pull requests with release notes.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems",
    tags: ["Actions Maintenance", "Actions Dependabot", "Resilience Failure"]
  },
  {
    id: "gh-200-391",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Starter Workflows for Organization Standardization: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Starter Workflows to provide standardized, pre-configured workflow templates that developers across an enterprise can select when creating new repositories.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Creating organization-wide starter workflow templates in .github repository is under consideration.",
    options: [
      { id: 'A', text: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository." },
      { id: 'B', text: "Email workflow templates as text attachments to all developers." },
      { id: 'C', text: "Manually commit workflow files into every newly created repository by hand." },
      { id: 'D', text: "Starter workflows cannot be customized at the organization level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository. Organizations can define custom starter workflows by placing workflow YAML templates and matching `.properties.json` metadata files in the `workflow-templates` folder of the organization's special `.github` repository. Developers can select these templates from the 'New workflow' tab.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization",
    tags: ["Starter Workflows", "Starter Workflows", "Dr Failover"]
  },
  {
    id: "gh-200-392",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Starter Workflows for Organization Standardization: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Starter Workflows to provide standardized, pre-configured workflow templates that developers across an enterprise can select when creating new repositories.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Creating organization-wide starter workflow templates in .github repository is under consideration.",
    options: [
      { id: 'A', text: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository." },
      { id: 'B', text: "Email workflow templates as text attachments to all developers." },
      { id: 'C', text: "Manually commit workflow files into every newly created repository by hand." },
      { id: 'D', text: "Starter workflows cannot be customized at the organization level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository. Organizations can define custom starter workflows by placing workflow YAML templates and matching `.properties.json` metadata files in the `workflow-templates` folder of the organization's special `.github` repository. Developers can select these templates from the 'New workflow' tab.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization",
    tags: ["Starter Workflows", "Starter Workflows", "High Load Scale"]
  },
  {
    id: "gh-200-393",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Starter Workflows for Organization Standardization: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Starter Workflows to provide standardized, pre-configured workflow templates that developers across an enterprise can select when creating new repositories.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Creating organization-wide starter workflow templates in .github repository is under consideration.",
    options: [
      { id: 'A', text: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository." },
      { id: 'B', text: "Email workflow templates as text attachments to all developers." },
      { id: 'C', text: "Manually commit workflow files into every newly created repository by hand." },
      { id: 'D', text: "Starter workflows cannot be customized at the organization level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository. Organizations can define custom starter workflows by placing workflow YAML templates and matching `.properties.json` metadata files in the `workflow-templates` folder of the organization's special `.github` repository. Developers can select these templates from the 'New workflow' tab.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization",
    tags: ["Starter Workflows", "Starter Workflows", "Security Compliance"]
  },
  {
    id: "gh-200-394",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Starter Workflows for Organization Standardization: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Starter Workflows to provide standardized, pre-configured workflow templates that developers across an enterprise can select when creating new repositories.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Creating organization-wide starter workflow templates in .github repository is under consideration.",
    options: [
      { id: 'A', text: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository." },
      { id: 'B', text: "Email workflow templates as text attachments to all developers." },
      { id: 'C', text: "Manually commit workflow files into every newly created repository by hand." },
      { id: 'D', text: "Starter workflows cannot be customized at the organization level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository. Organizations can define custom starter workflows by placing workflow YAML templates and matching `.properties.json` metadata files in the `workflow-templates` folder of the organization's special `.github` repository. Developers can select these templates from the 'New workflow' tab.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization",
    tags: ["Starter Workflows", "Starter Workflows", "Hybrid Migration"]
  },
  {
    id: "gh-200-395",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Starter Workflows for Organization Standardization: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Starter Workflows to provide standardized, pre-configured workflow templates that developers across an enterprise can select when creating new repositories.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Creating organization-wide starter workflow templates in .github repository is under consideration.",
    options: [
      { id: 'A', text: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository." },
      { id: 'B', text: "Email workflow templates as text attachments to all developers." },
      { id: 'C', text: "Manually commit workflow files into every newly created repository by hand." },
      { id: 'D', text: "Starter workflows cannot be customized at the organization level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add workflow `.yml` files accompanied by `.properties.json` files to the `workflow-templates` directory of the organization's `.github` repository. Organizations can define custom starter workflows by placing workflow YAML templates and matching `.properties.json` metadata files in the `workflow-templates` folder of the organization's special `.github` repository. Developers can select these templates from the 'New workflow' tab.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization",
    tags: ["Starter Workflows", "Starter Workflows", "Resilience Failure"]
  },
  {
    id: "gh-200-396",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Releases with softprops/action-gh-release: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Release Automation to automatically create a formal GitHub Release and attach compiled binary assets whenever a new semantic version tag (`v*.*.*`) is pushed.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Automating GitHub Releases, changelogs, and binary asset uploads on Git tag pushes is under consideration.",
    options: [
      { id: 'A', text: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts." },
      { id: 'B', text: "Create GitHub Releases manually by hand clicking in the web UI." },
      { id: 'C', text: "Store release binaries in an unauthenticated S3 bucket." },
      { id: 'D', text: "Commit release binary archives directly into the main Git branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts. Automating release publishing involves triggering on Git tag pushes (`v*`) and using release actions (like `softprops/action-gh-release` or GitHub CLI `gh release create`). The action generates release notes, marks drafts or pre-releases, and uploads binary assets automatically.",
    referenceUrl: "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
    tags: ["Release Automation", "Release Automation", "Dr Failover"]
  },
  {
    id: "gh-200-397",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Releases with softprops/action-gh-release: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Release Automation to automatically create a formal GitHub Release and attach compiled binary assets whenever a new semantic version tag (`v*.*.*`) is pushed.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Automating GitHub Releases, changelogs, and binary asset uploads on Git tag pushes is under consideration.",
    options: [
      { id: 'A', text: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts." },
      { id: 'B', text: "Create GitHub Releases manually by hand clicking in the web UI." },
      { id: 'C', text: "Store release binaries in an unauthenticated S3 bucket." },
      { id: 'D', text: "Commit release binary archives directly into the main Git branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts. Automating release publishing involves triggering on Git tag pushes (`v*`) and using release actions (like `softprops/action-gh-release` or GitHub CLI `gh release create`). The action generates release notes, marks drafts or pre-releases, and uploads binary assets automatically.",
    referenceUrl: "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
    tags: ["Release Automation", "Release Automation", "High Load Scale"]
  },
  {
    id: "gh-200-398",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Releases with softprops/action-gh-release: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Release Automation to automatically create a formal GitHub Release and attach compiled binary assets whenever a new semantic version tag (`v*.*.*`) is pushed.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Automating GitHub Releases, changelogs, and binary asset uploads on Git tag pushes is under consideration.",
    options: [
      { id: 'A', text: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts." },
      { id: 'B', text: "Create GitHub Releases manually by hand clicking in the web UI." },
      { id: 'C', text: "Store release binaries in an unauthenticated S3 bucket." },
      { id: 'D', text: "Commit release binary archives directly into the main Git branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts. Automating release publishing involves triggering on Git tag pushes (`v*`) and using release actions (like `softprops/action-gh-release` or GitHub CLI `gh release create`). The action generates release notes, marks drafts or pre-releases, and uploads binary assets automatically.",
    referenceUrl: "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
    tags: ["Release Automation", "Release Automation", "Security Compliance"]
  },
  {
    id: "gh-200-399",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Releases with softprops/action-gh-release: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Release Automation to automatically create a formal GitHub Release and attach compiled binary assets whenever a new semantic version tag (`v*.*.*`) is pushed.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Automating GitHub Releases, changelogs, and binary asset uploads on Git tag pushes is under consideration.",
    options: [
      { id: 'A', text: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts." },
      { id: 'B', text: "Create GitHub Releases manually by hand clicking in the web UI." },
      { id: 'C', text: "Store release binaries in an unauthenticated S3 bucket." },
      { id: 'D', text: "Commit release binary archives directly into the main Git branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts. Automating release publishing involves triggering on Git tag pushes (`v*`) and using release actions (like `softprops/action-gh-release` or GitHub CLI `gh release create`). The action generates release notes, marks drafts or pre-releases, and uploads binary assets automatically.",
    referenceUrl: "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
    tags: ["Release Automation", "Release Automation", "Hybrid Migration"]
  },
  {
    id: "gh-200-400",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    domainName: "Consume workflows and manage GitHub Actions",
    title: "Automating Releases with softprops/action-gh-release: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Release Automation to automatically create a formal GitHub Release and attach compiled binary assets whenever a new semantic version tag (`v*.*.*`) is pushed.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Automating GitHub Releases, changelogs, and binary asset uploads on Git tag pushes is under consideration.",
    options: [
      { id: 'A', text: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts." },
      { id: 'B', text: "Create GitHub Releases manually by hand clicking in the web UI." },
      { id: 'C', text: "Store release binaries in an unauthenticated S3 bucket." },
      { id: 'D', text: "Commit release binary archives directly into the main Git branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger on `push: tags: ['v*']` and use `softprops/action-gh-release` with `files:` pointing to compiled artifacts. Automating release publishing involves triggering on Git tag pushes (`v*`) and using release actions (like `softprops/action-gh-release` or GitHub CLI `gh release create`). The action generates release notes, marks drafts or pre-releases, and uploads binary assets automatically.",
    referenceUrl: "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
    tags: ["Release Automation", "Release Automation", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_16;
