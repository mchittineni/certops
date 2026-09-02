export const GITHUB_GHAS_QUESTIONS_1 = [
  {
    id: "gh-500-1",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "A Push Rejected for Containing a Credential",
    scenario: "A developer pushes a branch and the push is rejected because push protection detected a cloud provider key in one of the commits. The developer insists the value is a dummy string used by a unit test.",
    question: "What is the correct handling?",
    options: [
      { id: 'A', text: "Rename the variable holding the value, which changes the pattern match and allows the push." },
      { id: 'B', text: "Disable push protection for the repository, push the branch, then re-enable it." },
      { id: 'C', text: "Force push the branch, which skips push protection because no new blob is created." },
      { id: 'D', text: "Confirm whether the value is genuinely inert, and if so remove the push protection block by supplying a bypass reason, which is recorded and raises an alert for security to review." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Push protection is designed to be overridable so a genuine false positive does not block work, but every bypass requires a stated reason, is written to the audit log and raises an alert so a security reviewer can confirm the judgement. Turning the control off to get past it removes the record and the review, renaming a variable does not change the secret value being matched, and force pushing does not evade the check.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection",
    tags: ["GH-500", "Secret Scanning", "Push Protection"]
  },
  {
    id: "gh-500-2",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Detecting an Internal Credential Format",
    scenario: "An organization issues its own service tokens with a distinctive prefix and a fixed-length body. Secret scanning does not detect them because no provider partners with GitHub for this format.",
    question: "What should the security team configure?",
    options: [
      { id: 'A', text: "A custom secret scanning pattern describing the format, tested with a dry run against existing repositories before it is enabled so the false positive rate is understood." },
      { id: 'B', text: "A partner pattern request, which is the only way to add a new format." },
      { id: 'C', text: "A push ruleset blocking commits containing the prefix string." },
      { id: 'D', text: "A code scanning query that matches the prefix in source files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom patterns let an organization describe a credential format it issues itself, with optional surrounding context to reduce noise, and a dry run reports what the pattern would have matched across existing repositories so the rate can be judged before anyone is blocked. Partner patterns are for third-party providers who have partnered with GitHub, a push ruleset is a blunt text rule with no alerting or validity workflow, and code scanning analyses code semantics rather than hunting credential formats.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Custom Patterns"]
  },
  {
    id: "gh-500-3",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Prioritising a Backlog of Secret Alerts",
    scenario: "Enabling secret scanning on a large legacy estate produces nine hundred alerts. Many are for credentials that were rotated years ago, and the team needs to find the ones that still matter.",
    question: "Which capability helps most?",
    options: [
      { id: 'A', text: "Validity checks, which query the relevant provider to report whether a detected token is still active, so remediation can start with the credentials that currently work." },
      { id: 'B', text: "Sorting the alerts by commit date, since older credentials are always inactive." },
      { id: 'C', text: "Closing every alert older than a year as won't fix, then reviewing only new ones." },
      { id: 'D', text: "Enabling push protection, which retroactively resolves alerts for revoked credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Validity checks ask the provider whether a detected token still authenticates and report the status on the alert, which turns an undifferentiated backlog into a ranked one where live credentials are handled first. Commit age is a poor proxy because an old credential may never have been rotated, bulk-closing by age discards exactly the alerts most likely to be live, and push protection prevents new exposures rather than assessing existing ones.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Validity Checks", "Triage"]
  },
  {
    id: "gh-500-4",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Closing a Secret Scanning Alert Accurately",
    scenario: "A reviewer works through secret scanning alerts. One is a real credential that has since been revoked at the provider, one is a randomly generated fixture in a test file, and one matched a string that is not a credential at all.",
    question: "How should each be resolved?",
    options: [
      { id: 'A', text: "All three as won't fix, since no code change is required for any of them." },
      { id: 'B', text: "The revoked credential as a false positive and the other two as revoked." },
      { id: 'C', text: "The revoked credential as revoked, the fixture as used in tests, and the non-credential as a false positive, because the resolution reason drives reporting and future triage." },
      { id: 'D', text: "All three as false positives, since none of them now present a risk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Secret scanning offers distinct resolutions precisely so the closed alerts remain meaningful: revoked records that a real credential was exposed and dealt with, used in tests marks an intentional inert value, and false positive marks a detection error that helps assess pattern quality. Collapsing all three into one reason destroys that signal and, in the case of labelling a real exposure a false positive, misrepresents an incident.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Alert Management"]
  },
  {
    id: "gh-500-5",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "What Enabling Secret Scanning Actually Examines",
    scenario: "A team assumes that enabling secret scanning only inspects new commits from that point forward, and plans a separate manual sweep of history.",
    question: "Which description is accurate?",
    options: [
      { id: 'A', text: "Enabling secret scanning triggers a scan of the entire git history of the repository as well as ongoing scanning of new content, so the separate historical sweep is unnecessary." },
      { id: 'B', text: "Only commits pushed after enablement are scanned, so a historical sweep is required." },
      { id: 'C', text: "Only the tip of the default branch is scanned, so other branches need separate enablement." },
      { id: 'D', text: "Only files changed in open pull requests are scanned until the first full release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Turning secret scanning on causes the whole repository history to be examined, not merely subsequent pushes, which is why enablement on a legacy estate typically produces a large initial alert backlog and why that backlog is a meaningful inventory of past exposure. Coverage is not restricted to new commits, to the default branch tip alone, or to pull request content.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Coverage"]
  },
  {
    id: "gh-500-6",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Coverage Beyond the Command Line",
    scenario: "A repository has push protection enabled. A security reviewer asks whether a contributor could still introduce a credential by editing a file in the browser or by an API-driven commit.",
    question: "Which statement is correct?",
    options: [
      { id: 'A', text: "Push protection applies only to users without write access." },
      { id: 'B', text: "Push protection only inspects content arriving over the git protocol, so web and API commits bypass it." },
      { id: 'C', text: "Push protection applies to content arriving through the web editor and the API as well as through a git push, so those paths are blocked in the same way." },
      { id: 'D', text: "Push protection applies to the default branch only, so a commit to any other branch is unaffected." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The check runs on content as it is written to the repository rather than on a particular transport, so browser edits and API-created commits are subject to the same block and the same bypass workflow as a command-line push. It is not limited to the git protocol, to a single branch, or to a class of user, which is what makes it a control rather than a convention.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection",
    tags: ["GH-500", "Push Protection", "Coverage"]
  },
  {
    id: "gh-500-7",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "A Prerequisite for Dependency Alerts",
    scenario: "An administrator enables Dependabot alerts on a private repository and no alerts appear over several weeks, although the project depends on packages with known published advisories.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "Advisories are only matched against direct dependencies listed in the manifest, and this project has none." },
      { id: 'B', text: "Dependabot alerts are only produced for public repositories." },
      { id: 'C', text: "Dependabot alerts require a dependabot.yml configuration file to be present." },
      { id: 'D', text: "The dependency graph is not enabled for the repository, and Dependabot alerts are derived from it by matching resolved dependencies against published advisories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Alerts are produced by comparing the resolved dependencies recorded in the dependency graph against the advisory database, so without the graph there is nothing to match and no alerts appear. A configuration file governs version updates rather than alerts, private repositories are supported, and the graph covers transitive dependencies as well as direct ones.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["GH-500", "Dependabot", "Dependency Graph", "Alerts"]
  },
  {
    id: "gh-500-8",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Three Dependabot Features That Are Often Confused",
    scenario: "A team asks for Dependabot to be turned on. They want to be told about vulnerable dependencies, to receive fixes for those automatically, and separately to stay reasonably current on everything else.",
    question: "Which mapping is correct?",
    options: [
      { id: 'A', text: "All three are enabled by a single toggle and cannot be configured independently." },
      { id: 'B', text: "Alerts notify about vulnerable dependencies, security updates raise pull requests fixing those specific vulnerabilities, and version updates keep dependencies current on a schedule defined in the configuration file." },
      { id: 'C', text: "Version updates notify about vulnerabilities, and security updates keep everything current on a schedule." },
      { id: 'D', text: "Alerts and security updates are the same feature, and version updates raise pull requests only for vulnerable dependencies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The three features are separate and enabled independently: alerts are the notification layer over the advisory match, security updates act on those alerts by proposing the minimum version change that resolves them, and version updates are a scheduled currency exercise driven by the configuration file regardless of whether anything is vulnerable. Conflating them leads teams to expect fixes when they have only enabled notification.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["GH-500", "Dependabot", "Security Updates", "Version Updates"]
  },
  {
    id: "gh-500-9",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Stopping a Vulnerable Dependency Before It Merges",
    scenario: "A vulnerable package was merged and only surfaced as an alert afterwards. The team wants the pull request that introduces such a dependency to fail before merge, with the finding visible in the review.",
    question: "Which capability provides that?",
    options: [
      { id: 'A', text: "Dependency review, which compares the dependency graph of the head and base of a pull request and reports newly introduced vulnerable or disallowed dependencies, and which can fail the check through its action." },
      { id: 'B', text: "Dependabot alerts, which fire during the pull request and block the merge." },
      { id: 'C', text: "Secret scanning push protection, which also covers vulnerable dependency introductions." },
      { id: 'D', text: "A CodeQL query written to detect vulnerable package versions in manifests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dependency review is the pull request gate for supply chain changes, diffing the resolved dependencies of the two sides and reporting what the change would add, with the accompanying action able to fail on a configured severity or licence policy so the finding blocks rather than informs. Alerts are raised against the repository rather than gating a merge, push protection covers credentials, and reimplementing advisory matching as a code query duplicates the advisory database badly.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["GH-500", "Dependency Review", "Pull Requests", "Supply Chain"]
  },
  {
    id: "gh-500-10",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Producing a Component Inventory for a Customer",
    scenario: "A customer contract requires a machine-readable inventory of the components in a delivered application, in a recognised standard format, produced from the repository rather than assembled by hand.",
    question: "Which capability satisfies this?",
    options: [
      { id: 'A', text: "Export a software bill of materials from the dependency graph in the SPDX format, either from the repository interface or through the API so it can be produced as part of a release." },
      { id: 'B', text: "Export the Dependabot alert list, which is the recognised bill of materials format." },
      { id: 'C', text: "Export the dependency review results of the most recent pull request." },
      { id: 'D', text: "There is no export capability, so the inventory must be generated by a third-party tool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The dependency graph can be exported as a bill of materials in a recognised standard format, and doing it through the API allows the export to be attached to a release automatically so the inventory always corresponds to what shipped. An alert list describes known problems rather than the component inventory, dependency review describes the delta of one pull request, and the capability is built in.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["GH-500", "SBOM", "Dependency Graph", "Compliance"]
  },
  {
    id: "gh-500-11",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Reducing Alert Noise From Development-Only Dependencies",
    scenario: "Most open Dependabot alerts concern low severity issues in build and test tooling that never ships. Security wants those closed consistently without a person dismissing each one and without hiding production risk.",
    question: "Which capability applies?",
    options: [
      { id: 'A', text: "Disabling Dependabot alerts for the repository and relying on dependency review instead." },
      { id: 'B', text: "Setting the repository advisory severity threshold, which filters which advisories are matched." },
      { id: 'C', text: "Dependabot auto-triage rules, which can automatically dismiss alerts matching criteria such as low severity in development-scoped dependencies while leaving other alerts open." },
      { id: 'D', text: "An ignore entry in the configuration file, which suppresses the alerts as well as the version updates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Auto-triage rules apply a stated policy to incoming alerts, so alerts meeting the criteria are dismissed with a recorded reason and the remaining queue reflects genuine production exposure, which is exactly the distinction the team wants. An ignore entry governs which version update pull requests are raised rather than alerting, disabling alerts loses production coverage as well, and there is no repository-level advisory severity threshold that filters matching.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules",
    tags: ["GH-500", "Dependabot", "Auto-triage", "Alert Management"]
  },
  {
    id: "gh-500-12",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Holding a Dependency at a Known-Good Version",
    scenario: "One dependency must stay on its current major version because a later one breaks an integration, but the team still wants patch updates within that major and wants everything else to update normally.",
    question: "Which configuration expresses that?",
    options: [
      { id: 'A', text: "Adding the dependency to an allow entry, which pins it to its current version." },
      { id: 'B', text: "An ignore entry for that dependency naming the update types to skip, so major version updates are not proposed while patch updates continue." },
      { id: 'C', text: "Setting open-pull-requests-limit to zero for the ecosystem." },
      { id: 'D', text: "Removing the dependency from the manifest so Dependabot does not see it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An ignore entry can name a dependency together with the update types to skip, so major bumps stop being proposed while patch and minor updates keep flowing, which is precisely a pin at the major boundary. Removing it from the manifest would break the build, a zero pull request limit silences the whole ecosystem, and an allow entry narrows which dependencies are considered rather than pinning a version.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-500", "Dependabot", "Configuration", "Version Updates"]
  },
  {
    id: "gh-500-13",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Choosing Between Default and Advanced Code Scanning Setup",
    scenario: "One repository is a straightforward interpreted-language service that needs analysis with no special configuration. Another is a compiled project needing a custom build command, a specific query pack and analysis on a schedule.",
    question: "Which setup suits each?",
    options: [
      { id: 'A', text: "Default setup for the compiled project, since it handles build detection, and advanced setup for the interpreted one." },
      { id: 'B', text: "Default setup for the first, since it configures and maintains the analysis with no workflow file, and advanced setup for the second, since a workflow file is what allows custom build steps, query selection and scheduling." },
      { id: 'C', text: "Default setup for both, because it accepts a configuration file supplying build commands and query packs." },
      { id: 'D', text: "Advanced setup for both, because default setup cannot analyse interpreted languages." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Default setup enables analysis without a workflow file and keeps it updated, which suits a project needing nothing unusual, while advanced setup generates a workflow the team owns and is what makes custom build steps, additional query packs and schedules expressible. Default setup covers interpreted languages well, and the customisation the compiled project needs is exactly what it does not offer.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "CodeQL", "Setup"]
  },
  {
    id: "gh-500-14",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Why a Compiled Project Needs a Build for Analysis",
    scenario: "A CodeQL analysis of a large compiled project reports that the database contains no source code. The repository contains the sources and the workflow runs the analysis step correctly.",
    question: "What is the underlying reason and the remedy?",
    options: [
      { id: 'A', text: "For a compiled language the extractor observes the compiler as it builds, so if no build occurred nothing was extracted; the workflow must run autobuild or explicit build commands between database initialisation and analysis, or use a supported build-mode that does not require one." },
      { id: 'B', text: "The repository is too large for extraction, and the remedy is to exclude directories with a paths filter." },
      { id: 'C', text: "The database must be created after the analysis step, and the ordering in the workflow is reversed." },
      { id: 'D', text: "Compiled languages require the source to be uploaded as a SARIF file rather than analysed directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Extraction for a compiled language works by watching the compiler process the code, so a database created without a build being performed genuinely contains nothing, and the fix is to place a build between initialisation and analysis, whether by the automatic build detection or by explicit commands, unless a build-mode requiring no build is available for that language. Ordering is already correct, SARIF upload is for third-party tools, and size is not the cause.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages",
    tags: ["GH-500", "CodeQL", "Compiled Languages", "Build"]
  },
  {
    id: "gh-500-15",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Widening What CodeQL Reports",
    scenario: "A team finds the default analysis too narrow and wants additional security queries with a somewhat higher false positive rate, and separately is considering including maintainability findings.",
    question: "Which query suites correspond to those two steps?",
    options: [
      { id: 'A', text: "The security-extended suite adds further security queries beyond the default, and security-and-quality adds maintainability and reliability queries on top of that." },
      { id: 'B', text: "Additional queries can only be added by writing custom queries, since the suites are fixed at the default set." },
      { id: 'C', text: "The security-and-quality suite adds security queries only, and security-extended adds quality queries." },
      { id: 'D', text: "There is one suite whose sensitivity is set by a threshold value in the configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The suites form a widening sequence, with the default balancing precision against coverage, security-extended adding further security queries that accept more noise, and security-and-quality adding code quality and reliability findings as well. The names are not reversed, sensitivity is chosen by suite rather than a numeric threshold, and custom queries supplement the suites rather than being the only way to broaden analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites",
    tags: ["GH-500", "CodeQL", "Query Suites", "Configuration"]
  },
  {
    id: "gh-500-16",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Bringing a Third-Party Scanner Into Code Scanning",
    scenario: "A team runs an existing static analysis tool that the organization intends to keep. They want its findings to appear in the code scanning alerts list and as pull request annotations alongside the CodeQL results.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Have the tool emit results in the SARIF format and upload the file with the code scanning upload action, granting the job the security-events: write permission." },
      { id: 'B', text: "Rewrite the tool checks as CodeQL queries, because only CodeQL results can populate code scanning." },
      { id: 'C', text: "Upload the tool output as a build artifact, which code scanning ingests automatically." },
      { id: 'D', text: "Post the findings as pull request review comments, which code scanning then indexes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Code scanning accepts results in the SARIF interchange format from any tool, and uploading such a file places those findings in the same alert list and pull request experience as CodeQL results, with the job needing permission to write security events. Code scanning is deliberately not CodeQL-only, artifacts are not ingested automatically, and review comments are not indexed as alerts.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github",
    tags: ["GH-500", "Code Scanning", "SARIF", "Integration"]
  },
  {
    id: "gh-500-17",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Dismissing a Code Scanning Alert Honestly",
    scenario: "A reviewer examines a code scanning alert for a possible injection and concludes the flagged input is already validated by a framework the analysis does not model, so no change is needed.",
    question: "Which dismissal reason fits, and what accompanies it?",
    options: [
      { id: 'A', text: "False positive, with a comment recording why the analysis is wrong in this case, so a future reviewer can re-evaluate rather than rediscover the reasoning." },
      { id: 'B', text: "Won't fix, since the code is not going to change." },
      { id: 'C', text: "Used in tests, since the framework validation makes the path safe." },
      { id: 'D', text: "The alert should be left open indefinitely, because dismissing any security alert is discouraged." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The finding is a modelling gap rather than an accepted risk, so false positive is the accurate reason, and the accompanying comment is what makes the dismissal reviewable later when the framework or the analysis changes. Won't fix records an accepted risk that genuinely exists, used in tests describes non-production code, and leaving alerts open indefinitely erodes the value of the queue for everyone.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["GH-500", "Code Scanning", "Triage", "Alert Management"]
  },
  {
    id: "gh-500-18",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Adding an Organization Specific Query to the Analysis",
    scenario: "A security team has written queries encoding rules specific to their internal frameworks. They want these to run in every repository alongside the standard suites, and to be versioned and distributed like any other dependency.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Publish the queries as a CodeQL query pack and reference the pack from the code scanning configuration, so repositories consume a versioned artifact rather than copies of query files." },
      { id: 'B', text: "Copy the query files into each repository and reference them by relative path from the configuration." },
      { id: 'C', text: "Submit the queries for inclusion in the security-extended suite, which is the only route for custom logic." },
      { id: 'D', text: "Convert the queries into SARIF and upload them, since custom queries cannot be executed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query packs are the distribution unit for CodeQL queries, versioned and referenced from a configuration, so an update is published once and picked up by consumers rather than requiring a change in every repository. Copying files spreads drift immediately, the standard suites are maintained upstream rather than accepting organization-specific rules, and SARIF is a results format rather than a way to express analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup",
    tags: ["GH-500", "CodeQL", "Query Packs", "Custom Queries"]
  },
  {
    id: "gh-500-19",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Excluding Vendored Code From Analysis",
    scenario: "A repository vendors a large third-party library that the team does not maintain. Its findings dominate the alert list and the team wants analysis to skip that directory for its interpreted-language code.",
    question: "Which mechanism applies, and what caveat matters?",
    options: [
      { id: 'A', text: "A paths-ignore entry in the CodeQL configuration, with the caveat that path filters apply to interpreted languages and that for compiled code the equivalent is achieved by controlling what the build compiles." },
      { id: 'B', text: "A paths-ignore entry, which applies uniformly to every language including compiled ones." },
      { id: 'C', text: "A gitignore entry for the directory, which also excludes it from analysis." },
      { id: 'D', text: "Dismissing each alert as won't fix, since analysis scope cannot be narrowed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The configuration supports path filters that restrict which files are analysed, and the important caveat is that they govern extraction for interpreted languages while compiled languages are shaped by what the build actually compiles, so a team must know which mechanism its language uses. The filters are not uniform across language types, gitignore governs version control rather than analysis, and scope is configurable rather than requiring mass dismissal.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["GH-500", "CodeQL", "Configuration", "Path Filters"]
  },
  {
    id: "gh-500-20",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Which Alerts Appear on a Pull Request",
    scenario: "A repository has hundreds of pre-existing code scanning alerts. A contributor opens a small pull request and is surprised that only two alerts are shown in the review rather than the whole backlog.",
    question: "Why?",
    options: [
      { id: 'A', text: "Pull request analysis compares the results for the head against the base and annotates the alerts the change introduces, so the pre-existing backlog stays on the repository alert list rather than appearing in every review." },
      { id: 'B', text: "Only the two highest severity alerts are ever shown in a pull request." },
      { id: 'C', text: "The backlog is hidden because those alerts were dismissed automatically when the pull request was opened." },
      { id: 'D', text: "Pull request analysis only examines files under a size threshold, which excluded the rest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Code scanning on a pull request diffs the findings between the proposed head and its base so that the review surfaces what the change would add, which keeps reviews actionable and is why adopting scanning on a legacy codebase is feasible at all. There is no cap of two, the existing alerts are not dismissed, and file size is not what determines the pull request view.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["GH-500", "Code Scanning", "Pull Requests", "Triage"]
  },
  {
    id: "gh-500-21",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Blocking a Merge on a New High Severity Finding",
    scenario: "Code scanning annotates pull requests, but contributors can still merge with a new high severity alert present. Security wants merges blocked when a change introduces one, consistently across many repositories.",
    question: "Which control achieves that?",
    options: [
      { id: 'A', text: "Setting the query suite to security-extended, which causes high severity findings to fail the check." },
      { id: 'B', text: "A code scanning merge protection rule configured in a repository ruleset, applied at organization level and specifying the tool and the severity that should block." },
      { id: 'C', text: "Marking the code scanning workflow as a required status check in each repository, which blocks on any alert." },
      { id: 'D', text: "Enabling push protection, which extends to code scanning findings." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rulesets support a code scanning merge protection rule that names the tool and the alert severity that must block, and defining it at organization level applies it consistently and prevents a repository administrator from quietly removing it. A required status check on the workflow only reflects whether the analysis ran and is configured per repository, query suite selection changes what is found rather than what blocks, and push protection concerns credentials.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/set-code-scanning-merge-protection",
    tags: ["GH-500", "Code Scanning", "Rulesets", "Merge Protection"]
  },
  {
    id: "gh-500-22",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Keeping Analysis Current Without Waiting for a Change",
    scenario: "A repository is stable and rarely receives commits. Its last analysis ran four months ago, and new queries and advisories have been published since then.",
    question: "Which practice addresses this?",
    options: [
      { id: 'A', text: "Push an empty commit whenever a new advisory is published." },
      { id: 'B', text: "Nothing is needed, because alerts are recomputed server-side whenever queries are updated." },
      { id: 'C', text: "Re-run the last workflow run monthly, which re-executes the analysis with the queries current at that time." },
      { id: 'D', text: "Add a schedule trigger to the code scanning workflow so analysis runs periodically with the current queries even when the code has not changed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Analysis reflects the queries in effect when it ran, so a quiet repository grows stale and a scheduled run is the standard way to keep findings current, which is why the generated advanced setup workflow includes one. Re-running an old run repeats that execution rather than refreshing the query set in a meaningful way, results are not recomputed server-side, and manually pushing commits in response to advisories is unworkable.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "Scheduling", "Maintenance"]
  },
  {
    id: "gh-500-23",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Rolling Out Security Features Across Many Repositories",
    scenario: "An organization must enable a consistent set of security features across four hundred repositories, apply it automatically to repositories created later, and be able to see which repositories deviate.",
    question: "Which capability is designed for this?",
    options: [
      { id: 'A', text: "Security configurations defined at organization level and applied to repositories, with a default configuration that attaches to newly created repositories and a view showing which repositories are covered." },
      { id: 'B', text: "A scheduled workflow that calls the API to toggle each feature on every repository nightly." },
      { id: 'C', text: "A repository template with the features enabled, from which all repositories are created." },
      { id: 'D', text: "Enabling each feature manually per repository, since these settings are repository-scoped." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security configurations exist to express a security posture once and apply it across repositories, including automatically to new ones through a default, with coverage reporting showing where it is and is not in effect. An API-driven nightly job reimplements this with a highly privileged credential and no reporting, templates only affect repositories created from them, and manual enablement is exactly the toil being removed.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-security-configurations",
    tags: ["GH-500", "Security Configurations", "Governance", "Scale"]
  },
  {
    id: "gh-500-24",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Answering Where the Organization Stands on Risk",
    scenario: "A security lead is asked two questions: which repositories currently have unresolved critical alerts, and which repositories have no scanning enabled at all.",
    question: "Where are both answered?",
    options: [
      { id: 'A', text: "Security overview, whose risk view aggregates open alerts across repositories and whose coverage view shows which security features are enabled where." },
      { id: 'B', text: "The audit log, filtered on security events." },
      { id: 'C', text: "The dependency graph of each repository, reviewed individually." },
      { id: 'D', text: "The organization insights page, which reports alert counts and feature enablement." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security overview is built for exactly this pair of questions, separating a risk view of outstanding alerts across the estate from a coverage view of which features are enabled where, which is what distinguishes a repository that is clean from one that is simply not being looked at. The audit log records configuration events rather than current posture, per-repository review does not scale to this question, and insights covers contribution activity.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-security-overview",
    tags: ["GH-500", "Security Overview", "Reporting", "Governance"]
  },
  {
    id: "gh-500-25",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Giving Researchers a Confidential Reporting Channel",
    scenario: "An external researcher finds a vulnerability in a public repository and opens a public issue describing it in full, because the project documents no other way to make contact.",
    question: "Which measures prevent a repeat?",
    options: [
      { id: 'A', text: "Enable private vulnerability reporting so researchers can submit confidentially through the Security tab, and add a SECURITY.md describing the policy and expectations, which is surfaced when someone opens an issue." },
      { id: 'B', text: "Disable issues on the repository so nothing can be disclosed publicly." },
      { id: 'C', text: "Add an issue template asking reporters not to include details, relying on reporters to comply." },
      { id: 'D', text: "Enable secret scanning, which detects and hides vulnerability details posted in issues." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Private vulnerability reporting gives researchers a confidential channel that leads to a draft advisory and a coordinated fix, and a security policy file documents the route so people find it before they resort to an issue. Disabling issues removes ordinary collaboration and pushes reports somewhere worse, a template is an unenforceable request, and secret scanning detects credentials rather than moderating issue content.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability",
    tags: ["GH-500", "Vulnerability Disclosure", "Security Policy", "Advisories"]
  }
];

export default GITHUB_GHAS_QUESTIONS_1;
