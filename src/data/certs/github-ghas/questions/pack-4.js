export const GITHUB_GHAS_QUESTIONS_4 = [
  {
    id: "gh-500-76",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enabling Push Protection Everywhere at Once",
    scenario: "Push protection is on in eleven repositories where individual maintainers enabled it. Security wants it on across four hundred, including repositories created next month, without asking each team.",
    question: "Which mechanism applies it?",
    options: [
      { id: 'A', text: "A security configuration enabling both, applied to the repositories and defaulted for new ones." },
      { id: 'B', text: "Asking each maintainer to enable it, tracked against a checklist per repository." },
      { id: 'C', text: "A repository ruleset containing a push protection rule for the default branch." },
      { id: 'D', text: "A script calling the repository settings API nightly across every repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security configurations express the intended posture once and attach it to repositories, including automatically to new ones through a default, which is the supported route for estate-wide enablement and reports its own coverage. A nightly script reimplements that with a broad credential and no reporting, rulesets govern branch and merge behaviour rather than feature enablement, and a manual checklist drifts from the day it is written.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-security-configurations",
    tags: ["GH-500", "Push Protection", "Security Configurations", "Scale"]
  },
  {
    id: "gh-500-77",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "One Credential Committed in Several Places",
    scenario: "The same API key was committed to a configuration file, a shell script and a test fixture in one repository. The team expected three alerts and sees one.",
    question: "What is happening?",
    options: [
      { id: 'A', text: "Alerts are created per commit, and all three of those files were changed in the same commit." },
      { id: 'B', text: "Only the first occurrence is scanned; the rest are ignored until that one has been resolved." },
      { id: 'C', text: "An alert represents the secret itself, listing every location it was found." },
      { id: 'D', text: "Two of the three occurrences were suppressed because they sit in a default exclusion path." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The unit of an alert is the leaked value, with its locations listed underneath, which matches how remediation actually works because rotating the credential resolves every occurrence at once. Later occurrences are not ignored pending the first, no default exclusion covers scripts and configuration files, and grouping is by secret rather than by commit.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Alerts", "Deduplication"]
  },
  {
    id: "gh-500-78",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Assuming Secret Scanning Covers Everything",
    scenario: "A team treats a clean secret scanning queue as proof that no credential exists anywhere in their project, including in build outputs, an attached wiki and a compressed archive committed as a release asset.",
    question: "Which correction do they need?",
    options: [
      { id: 'A', text: "Scanning covers only the default branch, so the gap is limited to whatever sits on the other branches." },
      { id: 'B', text: "Scanning covers content and history for patterns it recognises, so unmatched formats survive a clean queue." },
      { id: 'C', text: "Scanning covers everything but reports only high-confidence matches, so lowering the threshold closes the gap." },
      { id: 'D', text: "Scanning covers every artifact associated with the repository, so a clean queue really is conclusive." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Detection is bounded by what is scanned and by the patterns available, so a value inside an opaque artifact, one in a format nothing matches, or one held somewhere the scanner does not read will not appear, which makes an empty queue a statement about coverage rather than a guarantee. Coverage is broader than the default branch, and there is no confidence threshold control that would make the claim conclusive.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Coverage", "Limitations"]
  },
  {
    id: "gh-500-79",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Credentials Hardcoded in Workflow Files",
    scenario: "A review finds a registry password written directly into a workflow file rather than referenced from a secret. The team asks whether the platform would have caught it.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "Workflow files are covered by code scanning rather than secret scanning, so the detection comes from the CodeQL suite." },
      { id: 'B', text: "Workflow files are repository content, so a recognisable credential is detected, an unknown format may not be." },
      { id: 'C', text: "Only values referenced through the secrets context are scanned, so a literal written into the file is ignored." },
      { id: 'D', text: "Workflow files are excluded from scanning, because they legitimately reference secrets on nearly every line." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Nothing about the workflows directory exempts it from scanning, so a recognisable credential there is treated like one anywhere else, but detection still depends on the value matching a pattern, which is why a generic password may slip through and why the discipline of never writing a literal remains the primary control. Referencing the secrets context is what should happen rather than what determines scanning.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Workflows", "Coverage"]
  },
  {
    id: "gh-500-80",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Who Should Be Able to Approve a Bypass",
    scenario: "An organization is configuring delegated bypass and must decide which group reviews requests. Candidates are the repository maintainers, a central security team, and every user with write access.",
    question: "Which choice best serves the control?",
    options: [
      { id: 'A', text: "A nominated reviewing group that excludes the requester by default and is large enough to answer quickly." },
      { id: 'B', text: "The organization owners, since they already hold the highest privilege in the organization." },
      { id: 'C', text: "Everyone with write access, so that a bypass request is never delayed by reviewer absence." },
      { id: 'D', text: "A single named individual, so that accountability for each decision is entirely unambiguous." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The value of delegation comes from a second pair of eyes that is responsive enough not to become an obstacle, which means a group rather than an individual and one whose membership does not simply coincide with whoever is pushing. Granting it to everyone with write access restores self-approval in all but name, a single reviewer becomes a bottleneck and a single point of absence, and routing it to owners burdens people who lack the context to judge.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection",
    tags: ["GH-500", "Push Protection", "Delegated Bypass", "Governance"]
  },
  {
    id: "gh-500-81",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "What Push Protection Does Not Do",
    scenario: "After enabling push protection, a team proposes standing down the developer training on credential handling on the grounds that mistakes are now impossible.",
    question: "Which correction is warranted?",
    options: [
      { id: 'A', text: "Push protection blocks recognisable credentials and can be bypassed, and covers nothing committed before." },
      { id: 'B', text: "Push protection also rotates any credential it detects with the provider, so local handling practices no longer matter." },
      { id: 'C', text: "Push protection is complete for the patterns it supports, so only unusual credential formats remain a training topic." },
      { id: 'D', text: "Push protection rejects any push containing a high-entropy string, so credential training is no longer required." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The control is strong but bounded: it acts only on values it recognises, it is deliberately overridable, and it is prospective, so historical exposures and unrecognised formats remain. Treating it as absolute is how organizations end up with a bypass culture and an unexamined backlog. It does not rotate credentials, and it does not block on entropy alone.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection",
    tags: ["GH-500", "Push Protection", "Limitations", "Programme Design"]
  },
  {
    id: "gh-500-82",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Version Updates That Appear to Have Stopped",
    scenario: "A repository has five open Dependabot pull requests that nobody has reviewed for a month. New updates have stopped arriving even though newer versions have been released.",
    question: "What is the likely cause?",
    options: [
      { id: 'A', text: "Dependabot pauses an ecosystem after four weeks without activity and must be resumed manually." },
      { id: 'B', text: "Dependabot only raises updates for dependencies with no existing open pull request across the whole organization." },
      { id: 'C', text: "The configuration file has expired and must be re-committed." },
      { id: 'D', text: "The open pull requests limit has been reached, so Dependabot raises no further version updates until some are merged or closed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A cap on concurrently open pull requests prevents an unattended repository accumulating dozens, so once the limit is reached nothing new appears until the queue is cleared, which is exactly the pattern described and is a strong hint that the review process rather than the configuration needs attention. There is no inactivity pause, configuration files do not expire, and the limit is per repository and ecosystem rather than organization-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-500", "Dependabot", "Configuration", "Troubleshooting"]
  },
  {
    id: "gh-500-83",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependency Review Failing on Contributions From Forks",
    scenario: "Dependency review works on internal branches and fails on pull requests from forks with a permissions error, which means external contributions are the ones going unchecked.",
    question: "What explains it and what is the remedy?",
    options: [
      { id: 'A', text: "Dependency review cannot run on fork pull requests at all, so external contributions have to be reviewed by hand" },
      { id: 'B', text: "The base repository must add the contributor as a collaborator, which elevates the token the fork's run receives" },
      { id: 'C', text: "The fork must enable its own dependency graph before the base repository is able to compare the two manifests" },
      { id: 'D', text: "A fork's run has a read-only token, so the privileged step must run after the untrusted one" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Fork contributions deliberately receive a restricted token, so the fix is to make the check work within that constraint by requesting only the scopes it genuinely needs, or to move any privileged step into a separately triggered workflow that runs in the base context and treats the untrusted output as data. Manual review does not scale, the fork settings are not what gate the base repository comparison, and granting collaborator access to get a bigger token inverts the trust model.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action",
    tags: ["GH-500", "Dependency Review", "Forks", "Permissions"]
  },
  {
    id: "gh-500-84",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "An Alert That Disappeared Without Anyone Acting",
    scenario: "A Dependabot alert that was open last week is now closed, and no team member merged an update or dismissed it. The dependency version has not changed.",
    question: "Which explanation fits?",
    options: [
      { id: 'A', text: "The advisory was withdrawn or its affected range corrected, so the dependency no longer matches." },
      { id: 'B', text: "Alerts close automatically after seven days when no action has been taken on them." },
      { id: 'C', text: "The dependency graph was rebuilt, which clears the alerts raised against the old graph." },
      { id: 'D', text: "An alert closes once its severity is recalculated below the repository's threshold." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Advisories are curated and can be withdrawn or amended, for instance when an affected range turns out to be wrong, and because alerts are a live match between the graph and the database an amendment closes the alert without anyone touching the code. Alerts do not expire on a timer, rebuilding the graph re-evaluates rather than clears, and there is no repository severity threshold that closes alerts.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database",
    tags: ["GH-500", "Advisory Database", "Dependabot", "Alert Lifecycle"]
  },
  {
    id: "gh-500-85",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Update Branches Constantly Rebasing",
    scenario: "A busy repository merges to its default branch many times a day. Dependabot pull requests rebase repeatedly, each rebase re-runs the full pipeline, and Actions minutes have risen noticeably.",
    question: "Which configuration option addresses the cost?",
    options: [
      { id: 'A', text: "Set the schedule to daily, which leaves no window for the default branch to move between runs." },
      { id: 'B', text: "Enable grouping, which is the only control the configuration offers over rebase behaviour." },
      { id: 'C', text: "Set the versioning strategy to increase, which stops the branches being updated in place." },
      { id: 'D', text: "Disable the rebase strategy for that ecosystem, accepting that a stale branch may need rebasing by hand." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The rebase strategy governs whether Dependabot keeps its branches current with the base automatically, and turning it off on a high-traffic repository removes the repeated pipeline runs at the cost of occasionally needing a manual refresh. The schedule controls when updates are created rather than how branches are maintained, the versioning strategy shapes which version is proposed, and grouping reduces the number of branches without changing rebase behaviour on the ones that remain.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-500", "Dependabot", "Configuration", "Cost"]
  },
  {
    id: "gh-500-86",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Prioritising by Severity Without Over-Trusting It",
    scenario: "A team plans to fix critical and high alerts within a week and to leave the rest. An architect objects that a medium alert in an internet-facing authentication path may matter more than a critical one in a build-time tool.",
    question: "Which position is sound?",
    options: [
      { id: 'A', text: "Advisory severity should be recalculated per repository by editing the advisory to match the local deployment." },
      { id: 'B', text: "Advisory severity should be ignored entirely in favour of a manual assessment carried out for each alert." },
      { id: 'C', text: "Advisory severity already accounts for the consuming application, so the tiered policy is complete as written." },
      { id: 'D', text: "Advisory severity describes the vulnerability, not the deployment, so adjust it by exposure and scope." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A published severity describes the flaw in the abstract and cannot know whether the affected code path is reachable, internet-facing or only used at build time, so it is the right starting order and the wrong finishing order, and auto-triage rules are the mechanism for writing the adjustment down rather than re-deciding it each time. Severity does not account for the consumer, ignoring it wastes real signal, and global advisories are not editable per repository.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["GH-500", "Dependabot", "Triage", "Risk"]
  },
  {
    id: "gh-500-87",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "A Package Flagged as Malicious Rather Than Vulnerable",
    scenario: "An alert names a package not as containing a flaw but as malicious, published under a name close to a popular library. The package is a transitive dependency introduced last week.",
    question: "How does the response differ from an ordinary vulnerability?",
    options: [
      { id: 'A', text: "Treat it as an upgrade: move to the latest release of the package, which no longer carries the malicious code in its published artifact." },
      { id: 'B', text: "Treat it as informational: the package is a transitive dependency the project never calls, so nothing it contained was ever executed." },
      { id: 'C', text: "Treat it as a false positive: a malicious package fails to install, so a build that succeeded cannot have pulled one in." },
      { id: 'D', text: "Treat it as an incident: remove the package, treat credentials on the runner as compromised." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A malicious package is not a defect to be patched but hostile code that has already executed wherever it was installed, so the response is removal plus rotation of anything it could have read, and an investigation into how a near-miss name entered the tree. There is no benign later version to upgrade to, successful installation is exactly what such a package wants, and being transitive means it still ran during the build.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database",
    tags: ["GH-500", "Supply Chain", "Malware", "Incident Response"]
  },
  {
    id: "gh-500-88",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Analysing a Compiled Language Without Running the Build",
    scenario: "A large service takes twenty minutes to build. Running that build inside every code scanning job is the dominant cost, and the team asks whether analysis can avoid it.",
    question: "What is available?",
    options: [
      { id: 'A', text: "No: extraction for a compiled language always requires the extractor to observe a real build of the project." },
      { id: 'B', text: "For supported compiled languages the analysis can run in a no-build mode, extracting from source at some cost in fidelity." },
      { id: 'C', text: "The build can be skipped by caching the CodeQL database between runs and re-analysing the cached copy." },
      { id: 'D', text: "The build can be replaced by uploading the compiled artifacts, which the extractor reads in its place." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A no-build extraction mode is available for several compiled languages and removes the dependency on a working build in the scanning job, which is often the difference between analysis being feasible and being abandoned, with the trade-off that anything determined by the build configuration is less precisely modelled. Compiled artifacts are not an extractor input, and a cached database would analyse stale code.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages",
    tags: ["GH-500", "CodeQL", "Build Modes", "Performance"]
  },
  {
    id: "gh-500-89",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Uploading Results for a Commit From Outside the Run",
    scenario: "An external system analyses code and uploads SARIF afterwards. The results arrive but are attached to the wrong reference, so pull request annotations never appear.",
    question: "What must the upload specify?",
    options: [
      { id: 'A', text: "The ref and commit the results describe, since neither can be inferred outside that workflow." },
      { id: 'B', text: "Nothing further; the ref is always taken to be the repository's default branch." },
      { id: 'C', text: "The analysis category alone, since the ref is inferred from the tool's own name." },
      { id: 'D', text: "The workflow run identifier, from which the ref and commit are then derived." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When results are produced outside the context of the commit under test the upload has to state which reference and commit they belong to, and getting that wrong is exactly why annotations attach to the wrong place or not at all. A run identifier does not exist for an external analysis, the category distinguishes analyses rather than locating them, and defaulting to the default branch would misattribute every pull request result.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github",
    tags: ["GH-500", "SARIF", "Integration", "Code Scanning"]
  },
  {
    id: "gh-500-90",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Alerts Closing and Reopening After Unrelated Edits",
    scenario: "A third-party scanner integration produces alerts that close and reopen whenever surrounding lines shift, so the same underlying finding appears repeatedly as new and its dismissal history is lost.",
    question: "What is wrong with the uploaded results?",
    options: [
      { id: 'A', text: "The results are being uploaded against the wrong commit SHA, which recreates each alert on the following run." },
      { id: 'B', text: "The uploads use a different category each run, which resets the alert list belonging to that category." },
      { id: 'C', text: "The results carry no stable identity, so the tool must emit consistent rule IDs and fingerprints." },
      { id: 'D', text: "Alert tracking is only implemented for CodeQL results, so third-party findings churn on every upload." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Matching a finding across runs depends on identity that survives the code moving, which is what stable rule identifiers and result fingerprints provide, so a tool that omits them produces churn and loses every triage decision the team has made. A changing category and a wrong commit produce different symptoms, and tracking is not restricted to CodeQL results.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["GH-500", "SARIF", "Alert Tracking", "Integration"]
  },
  {
    id: "gh-500-91",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Hunting One Vulnerability Pattern Across Many Repositories",
    scenario: "A security engineer finds a dangerous pattern in one service and needs to know which of two hundred other repositories contain the same pattern, using semantic analysis rather than text search.",
    question: "Which capability is designed for that?",
    options: [
      { id: 'A', text: "Code search with a regular expression matching the vulnerable call across the org." },
      { id: 'B', text: "The security-and-quality suite enabled everywhere, read on the next scheduled run." },
      { id: 'C', text: "Exporting each repository's CodeQL database and querying them one at a time." },
      { id: 'D', text: "Multi-repository variant analysis, which runs one query across many repositories at once." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Variant analysis exists precisely for this question, taking a query written against the known instance and evaluating it across a chosen set of repositories so the answer reflects semantics rather than text. Regular expressions cannot express a data flow condition, broadening the suite finds only what upstream queries already cover, and databases are not text to be searched.",
    referenceUrl: "https://docs.github.com/en/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code",
    tags: ["GH-500", "CodeQL", "Variant Analysis", "Threat Hunting"]
  },
  {
    id: "gh-500-92",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Analysing the Automation as Well as the Application",
    scenario: "A security review notes that the delivery workflows have never been analysed, although they handle credentials, run untrusted contributions and can publish artifacts.",
    question: "What is possible?",
    options: [
      { id: 'A', text: "CodeQL can analyse the workflow definitions themselves, so the automation lands in the same alert queue as the code." },
      { id: 'B', text: "Workflow files can only be reviewed by hand, since CodeQL analyses languages rather than configuration." },
      { id: 'C', text: "Workflow analysis requires the files to be converted into a supported language before extraction." },
      { id: 'D', text: "Secret scanning already covers workflows fully, so no further analysis of them applies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Workflow definitions are analysable in their own right, which matters because the delivery pipeline is a privileged execution environment and mistakes there such as interpolating attacker-controlled text into a shell command are exactly the class a static analysis can catch. Manual review does not scale, no conversion is required, and secret scanning addresses credentials rather than injection.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["GH-500", "CodeQL", "Actions", "Pipeline Security"]
  },
  {
    id: "gh-500-93",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "How a Code Scanning Alert Reaches the Fixed State",
    scenario: "A developer fixes an injection and expects to close the alert by hand, and asks whether leaving it open would misrepresent the state of the code.",
    question: "What happens?",
    options: [
      { id: 'A', text: "The alert stays open until the next scheduled full analysis, after which it must be dismissed as won't fix." },
      { id: 'B', text: "A later analysis no longer finds it, so it closes as fixed; dismissal is for findings that will not be fixed." },
      { id: 'C', text: "The alert closes when the pull request merges, whether or not the finding still exists on the branch." },
      { id: 'D', text: "The alert has to be closed by hand, since the platform cannot tell that the fix was intentional." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Alert state is derived from what analysis currently finds, so a genuine fix closes the alert on the next run for that reference and the distinction between fixed and dismissed stays meaningful, with dismissal reserved for findings that remain but are accepted or wrong. Manual closure of a fixed finding would blur that distinction, and merging alone is not evidence that the finding is gone.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "Code Scanning", "Alert Lifecycle", "Triage"]
  },
  {
    id: "gh-500-94",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Pinning the Analysis Tooling",
    scenario: "A regulated team must be able to state exactly which version of the analysis tooling produced a given result, and a floating reference in the workflow makes that impossible.",
    question: "Which approach balances reproducibility against staleness?",
    options: [
      { id: 'A', text: "Pin the action to an immutable reference and keep it current with automated update PRs." },
      { id: 'B', text: "Pin the action to an immutable reference and leave it, since changing tooling invalidates results." },
      { id: 'C', text: "Track the action's default branch so results always reflect the newest published queries." },
      { id: 'D', text: "Switch to default setup, which reports its tooling version per alert and needs no pinning." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reproducibility argues for an immutable pin and detection quality argues for currency, and the way to satisfy both is to pin and then update deliberately through reviewed pull requests, which is also exactly what the action ecosystem supports. Freezing indefinitely trades a compliance property for a growing blind spot, tracking a branch abandons reproducibility, and default setup is a reasonable choice for other reasons but does not answer a requirement to state the version yourself.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "Reproducibility", "Supply Chain"]
  },
  {
    id: "gh-500-95",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Making Pull Request Feedback Fast Enough to Be Used",
    scenario: "Full analysis takes eighteen minutes, so developers merge before it reports and treat its findings as an after-the-fact chore rather than review feedback.",
    question: "Which combination addresses the underlying problem?",
    options: [
      { id: 'A', text: "Reduce the query suite permanently to the smallest available set for every run, on pull requests and schedules alike." },
      { id: 'B', text: "Run a narrower analysis on pull requests, the exhaustive one on a schedule, and gate on the PR run." },
      { id: 'C', text: "Move the analysis entirely to a nightly schedule, since analysis on pull requests is optional for most languages." },
      { id: 'D', text: "Keep the full analysis on pull requests and ask developers to wait, since correctness matters more than turnaround." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Feedback that arrives after the decision has been made is not feedback, so the answer is to make the pull request analysis fast enough to be waited for, keep the exhaustive analysis somewhere it can take its time, and make the fast one actually block. Asking people to wait loses to reality, moving everything to a schedule guarantees findings arrive post-merge, and permanently minimising the suite gives up coverage that the scheduled run could have provided cheaply.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["GH-500", "Code Scanning", "Performance", "Developer Experience"]
  },
  {
    id: "gh-500-96",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Reading the Tool That Produced an Alert",
    scenario: "An organization runs CodeQL alongside two third-party scanners. A triage rota needs to route each alert to the team that owns the relevant tool and rule.",
    question: "Which alert attributes support that routing?",
    options: [
      { id: 'A', text: "The commit author on the flagged line, since whoever introduced the code owns the finding." },
      { id: 'B', text: "The severity and the file path, since ownership follows the code rather than the tool." },
      { id: 'C', text: "The creation timestamp, since each tool runs on its own schedule and can be told apart." },
      { id: 'D', text: "The reporting tool and the rule identifier, plus the analysis category where relevant." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Alerts carry the reporting tool and the rule that fired, which is exactly the information needed to route by tool expertise, with the category disambiguating several configurations of the same tool. Path-based ownership answers a different question and breaks down in shared code, blaming the author is neither reliable nor a routing mechanism, and timestamps do not identify a tool.",
    referenceUrl: "https://docs.github.com/en/rest/code-scanning",
    tags: ["GH-500", "Code Scanning", "Triage", "API"]
  },
  {
    id: "gh-500-97",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Driving a Backlog Down Rather Than Reporting It",
    scenario: "A security team has identified four hundred alerts of one class across sixty repositories that must be fixed this quarter. Emailing a spreadsheet to sixty teams last time produced very little.",
    question: "Which capability is designed for this?",
    options: [
      { id: 'A', text: "A security campaign, which assigns grouped alerts to owning teams with a deadline." },
      { id: 'B', text: "A saved filter in the security overview, shared with each of the owning teams." },
      { id: 'C', text: "An organization ruleset that blocks merges until the grouped alerts are closed." },
      { id: 'D', text: "A scheduled workflow that opens an issue per alert in each affected repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Campaigns exist to turn a backlog into coordinated work with named owners, a due date and visible progress, which is the missing ingredient when a spreadsheet fails. A shared filter is still a report, blocking merges on unrelated pre-existing alerts halts delivery and breeds bypass, and generating hundreds of issues creates a second backlog to manage alongside the first.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns",
    tags: ["GH-500", "Security Campaigns", "Remediation", "Governance"]
  },
  {
    id: "gh-500-98",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Stopping Alerts Being Closed Without Scrutiny",
    scenario: "An audit finds that a third of code scanning alerts were dismissed as false positives, and sampling shows several were genuine. Security wants dismissals reviewed without becoming the bottleneck for every alert.",
    question: "Which control fits?",
    options: [
      { id: 'A', text: "A weekly report of dismissals, reviewed retrospectively by the security team." },
      { id: 'B', text: "Removing write access from developers so only security can act on the alerts." },
      { id: 'C', text: "Delegated alert dismissal, which turns a dismissal into a request a nominated team approves." },
      { id: 'D', text: "Disabling the false positive reason so only won't fix remains available." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Delegated dismissal puts the check exactly where the audit found the problem, on the act of closing an alert, while leaving investigation and fixing in developers hands. Removing access blocks legitimate work and pushes triage onto a team without the code context, removing a reason simply redirects the same behaviour to another one, and a retrospective report finds the incorrect dismissals after the risk has already been accepted.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/managing-the-security-of-your-organization/managing-requests-for-alert-dismissal",
    tags: ["GH-500", "Alert Dismissal", "Governance", "Controls"]
  },
  {
    id: "gh-500-99",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Planning for a Self-Hosted Deployment",
    scenario: "An organization runs GitHub Enterprise Server and is planning its security feature rollout using documentation and demonstrations based on the hosted service.",
    question: "Which expectation should shape the plan?",
    options: [
      { id: 'A', text: "The two are always identical, so the hosted documentation can be followed exactly as written." },
      { id: 'B', text: "The self-hosted product receives features first, since each release is validated there before it reaches the hosted service." },
      { id: 'C', text: "Self-hosted feature availability follows its own release train, so check the plan against that version." },
      { id: 'D', text: "Security features are unavailable on a self-hosted server, so the estate has to migrate to the hosted service first." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A self-hosted server ships on periodic releases so it necessarily trails the continuously updated hosted service, and anything depending on hosted infrastructure or external connectivity needs specific consideration, which is why the plan must be checked against the version actually deployed. The products are not identical, the server does not lead, and the security features are broadly available there rather than absent.",
    referenceUrl: "https://docs.github.com/en/enterprise-server@latest/admin/overview/about-github-advanced-security",
    tags: ["GH-500", "Enterprise Server", "Planning", "Governance"]
  },
  {
    id: "gh-500-100",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Feeding a Central Vulnerability Management Platform",
    scenario: "An enterprise tracks findings from every source in one vulnerability management platform. Code scanning, secret scanning and Dependabot findings must appear there with enough context to be assigned and aged.",
    question: "Which integration approach is appropriate?",
    options: [
      { id: 'A', text: "Grant the platform organization owner access so it can read the security interface directly for each repository." },
      { id: 'B', text: "Export a CSV from the security overview each month and upload it into the platform's intake." },
      { id: 'C', text: "Consume each feature's alert API at org scope, driven by webhooks and reconciled periodically." },
      { id: 'D', text: "Forward the organization's security notification emails to the platform's intake address." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each feature exposes its alerts through an API with the identity, severity and state fields an external tracker needs, and combining event-driven updates with periodic reconciliation gives both timeliness and correctness after a missed delivery. Monthly exports lose state transitions between snapshots, granting owner rights to an integration violates least privilege when scoped credentials exist, and email is neither structured nor complete.",
    referenceUrl: "https://docs.github.com/en/rest/code-scanning",
    tags: ["GH-500", "Integration", "API", "Vulnerability Management"]
  }
];

export default GITHUB_GHAS_QUESTIONS_4;
