export const GITHUB_GHAS_QUESTIONS_2 = [
  {
    id: "gh-500-26",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Letting Developers Work Without Weakening Push Protection",
    scenario: "Push protection blocks are occasionally legitimate false positives. Security is uncomfortable that any developer can self-approve a bypass, but does not want a block to stop work until a ticket is processed.",
    question: "Which capability balances these?",
    options: [
      { id: 'A', text: "Requiring two reviewers on every pull request, which covers the bypass decision as well." },
      { id: 'B', text: "Delegated bypass, which routes the request to a reviewing team instead." },
      { id: 'C', text: "Disabling push protection on the repositories that report the most false positives." },
      { id: 'D', text: "Converting the false positive shapes into custom patterns, which suppresses the block." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Delegated bypass keeps the block in place while moving the approval decision to a nominated team, so the developer raises a request and a reviewer with the right context decides, which removes self-approval without introducing a slow external process. Disabling the control removes protection where it is firing most, pull request review happens after the content is already in the repository, and custom patterns add detections rather than suppressing them.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection",
    tags: ["GH-500", "Push Protection", "Delegated Bypass", "Governance"]
  },
  {
    id: "gh-500-27",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Suppressing Alerts From a Directory of Sample Data",
    scenario: "A repository contains a fixtures directory of deliberately fake credentials used by an integration test suite. Every one produces a secret scanning alert and the queue is dominated by them.",
    question: "Which configuration removes them at source?",
    options: [
      { id: 'A', text: "A custom pattern matching the fixtures' format, published in inactive mode." },
      { id: 'B', text: "A gitignore entry for the fixtures directory so the files stop being tracked." },
      { id: 'C', text: "A secret scanning configuration in `.github` listing the fixtures path under `paths-ignore`." },
      { id: 'D', text: "Resolving each alert as used in tests, which teaches the scanner to skip it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Secret scanning honours a configuration file that can exclude paths from alerting, which is the supported way to keep a known fixtures directory out of the queue while leaving the rest of the repository covered, and it is worth reviewing such exclusions periodically since anything inside becomes invisible. Version control ignore rules do not affect scanning of committed content, resolving alerts is a per-alert action with no learning behaviour, and custom patterns add detections.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Configuration", "Exclusions"]
  },
  {
    id: "gh-500-28",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Turning On Detection of Generic Credentials",
    scenario: "An organization wants to catch passwords and connection strings that follow no vendor-specific format, and asks what changes if the non-provider pattern detection is enabled.",
    question: "Which expectation is correct?",
    options: [
      { id: 'A', text: "Detection replaces the partner pattern engine with a broader generic one, at the same false positive rate." },
      { id: 'B', text: "Detection widens with no change in false positive rate, since the same validation applies as for partner patterns." },
      { id: 'C', text: "Detection widens for push protection only, and no alerts are created for the generic matches it finds." },
      { id: 'D', text: "Detection widens to generic shapes at a higher false positive rate, so it is piloted first." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Partner patterns are precise because a vendor-defined format and often a validity check back them, whereas generic credential shapes are inherently ambiguous, so enabling them finds real exposures that would otherwise be missed while producing considerably more noise, which is why a staged rollout with triage capacity is the usual approach. Validity checking does not apply in the same way, partner detection continues alongside it, and it produces alerts as well as informing blocks.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns",
    tags: ["GH-500", "Secret Scanning", "Non-provider Patterns", "Rollout"]
  },
  {
    id: "gh-500-29",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Order of Operations After a Real Credential Is Exposed",
    scenario: "A live database password has been committed to a public repository and detected by secret scanning. The team debates whether to rewrite history first or to change the password first.",
    question: "What is the correct order and why?",
    options: [
      { id: 'A', text: "Resolve the alert as revoked first, which signals the incident is handled and starts the rotation workflow." },
      { id: 'B', text: "Rotate or revoke first, since the credential must be assumed captured; the rest is cleanup." },
      { id: 'C', text: "Make the repository private first, which withdraws the exposure and allows an unhurried rotation." },
      { id: 'D', text: "Rewrite history first, because removing the commit means the credential was never really exposed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Exposure is complete at the moment of the push because clones, forks, caches and automated scrapers may already hold the value, so the only action that reduces risk is invalidating the credential, and everything else is tidying that cannot undo distribution. History rewriting does not reach copies others hold, changing visibility does not retract what was fetched, and marking an alert resolved before rotating records an outcome that has not happened.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Incident Response"]
  },
  {
    id: "gh-500-30",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Who Learns About a New Secret Scanning Alert",
    scenario: "A team wants to be sure the right people are told when a credential is detected, and asks who receives notification by default.",
    question: "Which description is accurate?",
    options: [
      { id: 'A', text: "Only the organization owner is notified, and only through the weekly security digest email." },
      { id: 'B', text: "Every repository collaborator is notified, which is why the alerts are limited to public repositories." },
      { id: 'C', text: "Nobody is notified automatically; the alerts have to be polled from the REST API instead." },
      { id: 'D', text: "Administrators and security managers are notified, and the pusher is told when a push is blocked." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Notification is directed at the people responsible for the repository and for organization security rather than broadcast to all collaborators, which matters because an alert reveals where a live credential sits, and the committer learns about a blocked push directly at the point of the block. Notification is neither restricted to a single owner on a digest, nor sent to everyone, nor absent altogether.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Notifications", "Roles"]
  },
  {
    id: "gh-500-31",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Validating a Custom Pattern Before It Blocks Anyone",
    scenario: "A security engineer has drafted a custom pattern for an internal token format. Before enabling push protection for it, they want to know how many existing matches it would produce and how many are genuine.",
    question: "Which capability provides that?",
    options: [
      { id: 'A', text: "Publishing the pattern and reviewing the audit log for its bypass events afterwards." },
      { id: 'B', text: "A dry run of the pattern, which reports the matches it would find without raising alerts." },
      { id: 'C', text: "Enabling the pattern in alert-only mode for a week, since no dry run capability exists." },
      { id: 'D', text: "Running a code search for the token prefix, which matches what the scanner would do." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Custom patterns support a dry run that evaluates the pattern against existing content and reports what it would match, so the precision can be judged before anyone is alerted or blocked, which is the difference between a considered rollout and an outage of developer productivity. A dry run does exist, code search does not model the surrounding-context rules a pattern can express, and reviewing bypasses after the fact means the disruption has already happened.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Custom Patterns", "Dry Run"]
  },
  {
    id: "gh-500-32",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Coordinating a Fix for a Vulnerability in Your Own Project",
    scenario: "A maintainer has confirmed a vulnerability reported privately in their library. They need to develop and test a fix without disclosing the issue, then publish details and have downstream consumers alerted.",
    question: "Which workflow supports this?",
    options: [
      { id: 'A', text: "Draft a repository security advisory, fix in its private fork, request a CVE, then publish so consumers are alerted." },
      { id: 'B', text: "Rely on the dependency graph to pick up the vulnerable versions once the patched release has been tagged." },
      { id: 'C', text: "Publish the advisory first so consumers are warned, then develop the fix in the open on the default branch." },
      { id: 'D', text: "Develop the fix in a private repository and open an issue describing the vulnerability once it is released." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The advisory workflow exists to keep the details confidential while a fix is prepared, providing a private fork so collaborators can work in context, an optional CVE request, and publication that feeds the advisory database so consumers receive alerts and updates. Working in a disconnected private repository loses that integration, publishing before a fix exists exposes users with no remedy, and the graph matches published advisories rather than inferring them from a release.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories",
    tags: ["GH-500", "Security Advisories", "Disclosure", "Supply Chain"]
  },
  {
    id: "gh-500-33",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Failing Against an Internal Package Feed",
    scenario: "A project resolves most packages from an internal authenticated feed. Dependabot runs report that it cannot resolve those dependencies, while public ones update normally.",
    question: "What must be configured?",
    options: [
      { id: 'A', text: "Nothing; Dependabot cannot resolve private registries, so those dependencies must be excluded." },
      { id: 'B', text: "A workflow that runs before Dependabot and authenticates the runner to the private feed." },
      { id: 'C', text: "An Actions organization secret holding the feed credentials, which Dependabot reads at run time." },
      { id: 'D', text: "A `registries` section describing the feed with Dependabot secrets, and the update entry granting access to it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Private feeds are declared in the registries section of the Dependabot configuration with credentials drawn from the separate Dependabot secret store, and each update entry states which registries it may use. Actions secrets are a different store that Dependabot does not read for this purpose, Dependabot does not execute repository workflows to prepare its environment, and private registries are supported rather than requiring exclusion.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot",
    tags: ["GH-500", "Dependabot", "Private Registries", "Secrets"]
  },
  {
    id: "gh-500-34",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Transitive Dependencies Missing From the Graph",
    scenario: "A project built with a tool whose full dependency set is only known after resolution shows only its directly declared dependencies in the graph, so alerts miss vulnerable transitive packages.",
    question: "Which mechanism completes the picture?",
    options: [
      { id: 'A', text: "Submit the build's resolved dependency set through the dependency submission API." },
      { id: 'B', text: "Nothing, because the graph resolves transitive dependencies from the manifest itself." },
      { id: 'C', text: "Enable deep scanning in the dependency graph settings for that repository." },
      { id: 'D', text: "Commit a generated lockfile listing every transitive dependency the build resolves." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For ecosystems where the complete set is only determined at build time, the dependency submission API lets the build report what it resolved so the graph and therefore alerting reflect reality rather than the declared manifest alone. Committing a lockfile helps where the ecosystem produces one but is not the general answer, there is no deep scanning setting, and the graph cannot always infer transitive resolution from a manifest.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api",
    tags: ["GH-500", "Dependency Graph", "Dependency Submission", "Supply Chain"]
  },
  {
    id: "gh-500-35",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Merging Low Risk Dependency Updates Without a Human",
    scenario: "A team receives many patch-level Dependabot pull requests. They want patch updates that pass the full test suite to merge themselves, while minor and major updates continue to require review.",
    question: "How is that implemented?",
    options: [
      { id: 'A', text: "A workflow on Dependabot pull requests that reads the update metadata and enables auto-merge for patch updates." },
      { id: 'B', text: "A branch protection exemption for the Dependabot account, which merges its pull requests immediately." },
      { id: 'C', text: "A Dependabot configuration option that merges patch updates without waiting for the checks to run." },
      { id: 'D', text: "An hourly update schedule, which causes superseded patch pull requests to merge automatically." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The supported pattern reads the semantic version bump from the pull request metadata in a workflow and enables auto-merge for the cases the team is comfortable with, so the merge still waits for the required checks and the safety property comes from the test suite rather than from trust in the bot. Dependabot itself does not merge, exempting an account from protection removes the checks that make this safe, and scheduling does not merge anything.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions",
    tags: ["GH-500", "Dependabot", "Automation", "Auto-merge"]
  },
  {
    id: "gh-500-36",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Blocking a Dependency on Licence Grounds",
    scenario: "Legal prohibits certain copyleft licences in a distributed product. The team wants a pull request introducing such a dependency to fail with a clear reason, rather than the problem being found in a later manual audit.",
    question: "Which capability supports that?",
    options: [
      { id: 'A', text: "A CodeQL query that inspects the licence files shipped inside each dependency's package." },
      { id: 'B', text: "Dependabot alerts, which raise licence findings alongside the vulnerability findings." },
      { id: 'C', text: "The SBOM export, which blocks a disallowed licence at the point the document is produced." },
      { id: 'D', text: "The dependency review action, with licence allow or deny lists on the check." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dependency review evaluates what a pull request would add and supports licence policy as well as vulnerability severity, so a disallowed licence fails the check at the moment it is proposed with the offending dependency named. Dependabot alerts cover known vulnerabilities rather than licence policy, code analysis is the wrong instrument for dependency metadata, and an export reports rather than enforces.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["GH-500", "Dependency Review", "Licence Compliance", "Policy"]
  },
  {
    id: "gh-500-37",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "An Alert That Survives the Upgrade Intended to Fix It",
    scenario: "A team upgrades a direct dependency to a version whose release notes claim the advisory is addressed. The Dependabot alert remains open after the merge.",
    question: "Which explanations should be checked?",
    options: [
      { id: 'A', text: "Whether it is still resolved transitively, still pinned by a lockfile, or still in the affected range." },
      { id: 'B', text: "Whether the dependency graph has been switched off, which freezes the existing alerts in place." },
      { id: 'C', text: "Whether the alert simply needs dismissing by hand, since these alerts never close on their own." },
      { id: 'D', text: "Whether the release notes are authoritative, since the advisories are only refreshed quarterly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An alert reflects what the graph resolves rather than what a manifest declares, so the vulnerable version commonly persists through another path or remains pinned in a lockfile, and it is also worth checking that the new version actually falls outside the affected range. Alerts do close automatically once the vulnerable version is no longer resolved, disabling the graph would not freeze alerts in this way, and the advisory database is updated continuously.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["GH-500", "Dependabot", "Transitive Dependencies", "Troubleshooting"]
  },
  {
    id: "gh-500-38",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "What Makes CodeQL Different From a Pattern Matcher",
    scenario: "A reviewer asks why CodeQL reports an injection in code where the dangerous call and the untrusted input are in different files and different functions, when a text-based linter finds nothing.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "CodeQL executes the program with instrumented inputs and observes which of them reach the sink." },
      { id: 'B', text: "CodeQL queries a database of the code's semantics, using taint tracking to link a source to a sink across files." },
      { id: 'C', text: "CodeQL applies a far larger library of regular expressions, which is what allows cross-file matches." },
      { id: 'D', text: "CodeQL compares the code against a database of known vulnerable snippets published by GitHub." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The analysis extracts a relational representation of the program and reasons about it with queries, so tracking tainted data from where it enters to where it is used is a graph problem rather than a text problem, which is why the two ends can be far apart in the source. It is not regular expression matching at a larger scale, it is static rather than executing the program, and it reasons about the code rather than comparing it to snippets.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["GH-500", "CodeQL", "Data Flow", "Concepts"]
  },
  {
    id: "gh-500-39",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Two Analyses Overwriting Each Other",
    scenario: "A repository uploads results from CodeQL and from a separate container scanner for the same commit. Each upload appears to replace the previous one, so only the most recent tool findings are ever visible.",
    question: "What is missing?",
    options: [
      { id: 'A', text: "A single merged SARIF file combining both tools, since only one upload per commit is supported." },
      { id: 'B', text: "A distinct category per upload, so the two analyses coexist on the same commit." },
      { id: 'C', text: "A separate branch per tool, which is the only way to keep the two result sets apart." },
      { id: 'D', text: "A distinct commit per upload, since one commit can only carry a single analysis." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Code scanning identifies an analysis by its category so that several tools, languages or configurations can report against the same commit, and uploads sharing a category are treated as successive runs of the same analysis, which is exactly the overwriting behaviour described. Multiple analyses per commit are supported, so neither extra commits, extra branches nor pre-merging the files is necessary.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github",
    tags: ["GH-500", "Code Scanning", "SARIF", "Category"]
  },
  {
    id: "gh-500-40",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Running CodeQL Where Actions Is Not Available",
    scenario: "A regulated build runs on a self-managed continuous integration system that will not be migrated. The organization still wants CodeQL results in the code scanning alert list for those repositories.",
    question: "Which approach works?",
    options: [
      { id: 'A', text: "Run the CodeQL CLI in the existing system, then upload the resulting SARIF." },
      { id: 'B', text: "Mirror the repository somewhere Actions is enabled and analyse the mirror instead." },
      { id: 'C', text: "Results can only come from the CodeQL action, so the build has to migrate first." },
      { id: 'D', text: "Run the analysis locally and commit the SARIF file, which code scanning ingests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CodeQL command line performs database creation and analysis outside Actions and can upload results for the correct repository and ref, which is the supported path for external build systems. Mirroring analyses a copy and complicates the ref mapping, migration is not required, and committing a SARIF file into the repository is not how results are ingested.",
    referenceUrl: "https://docs.github.com/en/code-security/codeql-cli/using-the-codeql-cli/analyzing-your-code-with-codeql-queries",
    tags: ["GH-500", "CodeQL CLI", "Integration", "SARIF"]
  },
  {
    id: "gh-500-41",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Analysing a Repository Containing Several Languages",
    scenario: "A repository holds a compiled backend, a front-end written in an interpreted language and infrastructure definitions. The team wants each analysed appropriately and reported separately.",
    question: "How is the advanced setup usually structured?",
    options: [
      { id: 'A', text: "A matrix over the languages, so each gets its own database, build handling and analysis category." },
      { id: 'B', text: "Three separate repositories, one per language, since a repository supports one language." },
      { id: 'C', text: "One analysis of the dominant language, since findings in the others follow transitively." },
      { id: 'D', text: "A single database covering all three languages at once, analysed in one step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each language is extracted differently, notably in whether a build is required, so the generated workflow expands a matrix over the languages present and analyses each independently, which also keeps their results distinguishable in the alert list. A single mixed database is not how extraction works, splitting the repository is unnecessary, and analysing one language leaves the others entirely uncovered.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["GH-500", "CodeQL", "Multi-language", "Matrix"]
  },
  {
    id: "gh-500-42",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "A CodeQL Analysis That Runs Out of Memory",
    scenario: "Analysis of a very large codebase fails intermittently with out-of-memory errors, and when it completes it takes over two hours, which is longer than the team wants for a scheduled run.",
    question: "Which adjustments are appropriate?",
    options: [
      { id: 'A', text: "Split the SARIF upload into smaller files, which lowers the memory the analysis step needs to hold." },
      { id: 'B', text: "Give it a larger runner, tune memory and threads, narrow the scope, and schedule the exhaustive run." },
      { id: 'C', text: "Reduce the query suite to the default and accept that a codebase this size cannot be analysed on a schedule." },
      { id: 'D', text: "Disable the dependency graph, which competes with the analysis for the runner's memory during the build." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Analysis cost scales with the size of the database and the breadth of the queries, so the levers are machine size, the memory and thread settings the analysis exposes, reducing what is extracted, and separating a fast pull request analysis from an exhaustive scheduled one. Narrowing the suite is one part of that rather than a concession that scheduling is impossible, upload file size is unrelated to analysis memory, and the dependency graph does not run on the runner.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["GH-500", "CodeQL", "Performance", "Scaling"]
  },
  {
    id: "gh-500-43",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Reading the Path Shown With a Data Flow Alert",
    scenario: "A developer opens a code scanning alert and sees a sequence of numbered steps linking a request parameter through several functions to a database call, and is unsure what the sequence represents.",
    question: "What is it, and how should it be used?",
    options: [
      { id: 'A', text: "It is a suggested refactoring produced by the analysis, which should be applied as it is written." },
      { id: 'B', text: "It is the call stack captured while the analysis executed the code, showing the runtime sequence." },
      { id: 'C', text: "It is the list of every function that mentions the variable name, presented in file order." },
      { id: 'D', text: "It is the data flow path from an untrusted source to a sensitive sink, and it shows where to break the flow." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The path is the chain of steps by which tainted data reaches the sink, and its value to a reviewer is that it identifies the candidate places to intervene as well as making the finding auditable rather than an unexplained assertion. The analysis is static so there is no captured call stack, the path is based on data flow rather than name occurrences, and it describes the problem rather than prescribing a fix.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "CodeQL", "Data Flow", "Triage"]
  },
  {
    id: "gh-500-44",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "A New Language Added to a Repository Using Default Setup",
    scenario: "A repository configured with default setup gains a substantial component written in a language it did not previously contain. The team wonders whether they must migrate to advanced setup to have it analysed.",
    question: "What happens?",
    options: [
      { id: 'A', text: "Default setup analyses the languages present when it was enabled, so an addition needs advanced setup." },
      { id: 'B', text: "Default setup analyses every supported language whether present or not, so nothing changes at all." },
      { id: 'C', text: "Default setup disables itself when an unexpected language appears and must be enabled again." },
      { id: 'D', text: "Default setup detects the languages present and updates the analysed set, so the new one is picked up." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Default setup is managed rather than frozen, detecting the languages in the repository and keeping the analysed set current, which is a large part of why it exists, and the selection remains visible and adjustable in the settings. It is not pinned to the languages present at enablement, it does not analyse languages that are absent, and it does not disable itself.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "Default Setup", "Languages"]
  },
  {
    id: "gh-500-45",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Alerts on a Branch That Has Been Merged and Deleted",
    scenario: "A feature branch carried several code scanning alerts. After the branch was merged and deleted, some of those alerts remain open on the default branch and others disappeared.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "Alerts only ever exist on the default branch, so the feature branch never had alerts of its own to carry over." },
      { id: 'B', text: "Alerts are tracked per analysed ref, so what survives the merge reports on the default branch." },
      { id: 'C', text: "Alerts persist for thirty days after a branch is deleted and then expire, whatever the state of the code." },
      { id: 'D', text: "Alerts are global to the repository, so deleting a branch cannot affect them and this indicates a bug." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Analysis is performed for a given ref and alerts are attributed to it, so what survives a merge is whatever the analysis of the default branch still finds, which is the expected and desirable behaviour. Alerts are not repository-global irrespective of ref, they do not expire on a timer, and branches other than the default can certainly be analysed and carry alerts.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "Code Scanning", "Branches", "Alert Lifecycle"]
  },
  {
    id: "gh-500-46",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Keeping Third-Party Scanner Results Attributable",
    scenario: "An organization uploads results from an infrastructure scanner and a container scanner. In the alert list the findings are hard to attribute and filtering by tool does not behave as expected.",
    question: "Which properties of the uploaded results matter?",
    options: [
      { id: 'A', text: "Only the severity of each result, since attribution comes from the name of the uploading workflow." },
      { id: 'B', text: "The tool name and version, a stable rule identifier per check, and a distinct category per analysis." },
      { id: 'C', text: "Only the file path of each result, since the alerts are grouped by the location they point at." },
      { id: 'D', text: "Nothing in the file itself; attribution is configured in the repository's security settings." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attribution and alert tracking come from the results themselves, where the tool identity, a stable rule identifier and a distinct category let the platform group findings, filter by tool and recognise the same finding across runs rather than treating each upload as new alerts. Severity, location alone and repository settings do not supply that identity, and unstable rule identifiers are a common cause of alerts churning.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["GH-500", "SARIF", "Code Scanning", "Integration"]
  },
  {
    id: "gh-500-47",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Giving a Security Team Visibility Without Making Them Owners",
    scenario: "A central security team must read every repository, review and manage security alerts across the organization, and adjust security settings, but must not gain the ability to administer the organization or its members.",
    question: "Which arrangement fits?",
    options: [
      { id: 'A', text: "Give the team the security manager role, which adds alert management to read access." },
      { id: 'B', text: "Add the team as an administrator on each repository, which is how alert access is granted." },
      { id: 'C', text: "Give the team write access across the repositories through a nested team structure." },
      { id: 'D', text: "Make the team organization owners, which is the only role that sees every repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The security manager role exists precisely for this separation, giving a team the visibility and alert management authority its work requires while leaving organization administration, membership and billing untouched. Ownership grants far more than needed, per-repository administration is unmanageable and confers repository-level control, and write access is both excessive and insufficient since it does not include alert management.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["GH-500", "Roles", "Security Managers", "Least Privilege"]
  },
  {
    id: "gh-500-48",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Forecasting the Cost of Wider Enablement",
    scenario: "Finance asks what enabling GitHub Code Security on eighty more private repositories will cost. Many of the same engineers already commit to repositories where Code Security is enabled.",
    question: "Which understanding should shape the estimate?",
    options: [
      { id: 'A', text: "Consumption is counted per commit, so the estimate should be based on the historical commit volume of those repositories." },
      { id: 'B', text: "Consumption is counted per alert raised, so the estimate depends on how much vulnerable code the repositories hold." },
      { id: 'C', text: "Consumption is counted per repository, so eighty repositories cost eighty units whoever happens to commit to them." },
      { id: 'D', text: "Consumption follows unique committers to enabled repositories, so an engineer already counted elsewhere does not add again." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Code Security is licensed per unique active committer to repositories where it is enabled, separately from GitHub Secret Protection, so the same engineer active across many enabled repositories is counted once for that product, which means the marginal cost of enabling more repositories is driven by committers who are not already in the set rather than by the number of repositories. It is not priced per repository, per commit or per alert.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-advanced-security",
    tags: ["GH-500", "Licensing", "Billing", "Planning"]
  },
  {
    id: "gh-500-49",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Preventing an Organization From Turning a Control Off",
    scenario: "An enterprise mandates that secret scanning and push protection remain enabled for all private repositories. One organization administrator disabled them last quarter to unblock a release, and the enterprise wants that to be impossible.",
    question: "Which control provides that?",
    options: [
      { id: 'A', text: "An enterprise policy for the features, which organizations may tighten but not loosen." },
      { id: 'B', text: "Removing the administrator role from each organization's own administrators." },
      { id: 'C', text: "An organization security configuration, which its administrators cannot change." },
      { id: 'D', text: "A repository ruleset requiring the features, applied by the enterprise everywhere." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Policy is layered, with the enterprise setting the boundary that organizations may tighten but not relax, which is what makes a mandate durable against a well-intentioned local decision. Organization configurations are administered by the organization and so can be changed there, rulesets govern branch and merge behaviour rather than feature enablement, and stripping administrators of their role breaks ordinary operations to solve a policy question.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise",
    tags: ["GH-500", "Enterprise Policy", "Governance", "Enforcement"]
  },
  {
    id: "gh-500-50",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Evidence That a Control Was in Force All Year",
    scenario: "An auditor does not want a screenshot showing that push protection is enabled today. They want evidence that it was enabled throughout the audit period and that every bypass was reviewed.",
    question: "Which sources satisfy that?",
    options: [
      { id: 'A', text: "The security overview coverage view, which shows the current state and stands as the historical evidence." },
      { id: 'B', text: "A scheduled workflow that records the current setting into a file in the repository once a day." },
      { id: 'C', text: "The list of open and closed secret scanning alerts, which shows the control was operating." },
      { id: 'D', text: "The audit log, recording enablement changes and bypasses with actor and timestamp." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Continuity of a control is a question about events over time rather than present state, and the audit log is the record of when settings changed, who changed them and when a bypass occurred, with streaming to external storage ensuring the record outlives the platform retention window. Coverage views and alert lists describe the present, and a self-reported daily file is weaker evidence than the platform own immutable log.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["GH-500", "Audit Log", "Compliance", "Evidence"]
  }
];

export default GITHUB_GHAS_QUESTIONS_2;
