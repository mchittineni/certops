export const GITHUB_GHAS_QUESTIONS_2 = [
  {
    id: "gh-500-26",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Letting Developers Work Without Weakening Push Protection",
    scenario: "Push protection blocks are occasionally legitimate false positives. Security is uncomfortable that any developer can self-approve a bypass, but does not want a block to stop work until a ticket is processed.",
    question: "Which capability balances these?",
    options: [
      { id: 'A', text: "Delegated bypass, which routes a bypass request to a designated reviewing team that approves or denies it, so developers are unblocked quickly without self-approving." },
      { id: 'B', text: "Disabling push protection for the repositories that report the most false positives." },
      { id: 'C', text: "Requiring two reviewers on every pull request, which covers the bypass decision." },
      { id: 'D', text: "Converting the false positive patterns into custom patterns, which suppresses the block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Delegated bypass keeps the block in place while moving the approval decision to a nominated team, so the developer raises a request and a reviewer with the right context decides, which removes self-approval without introducing a slow external process. Disabling the control removes protection where it is firing most, pull request review happens after the content is already in the repository, and custom patterns add detections rather than suppressing them.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection",
    tags: ["GH-500", "Push Protection", "Delegated Bypass", "Governance"]
  },
  {
    id: "gh-500-27",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Suppressing Alerts From a Directory of Sample Data",
    scenario: "A repository contains a fixtures directory of deliberately fake credentials used by an integration test suite. Every one produces a secret scanning alert and the queue is dominated by them.",
    question: "Which configuration removes them at source?",
    options: [
      { id: 'A', text: "A secret scanning configuration file in the .github directory listing the fixtures path under paths-ignore, so alerts are not generated for content there." },
      { id: 'B', text: "A gitignore entry for the fixtures directory." },
      { id: 'C', text: "Resolving each alert as used in tests, which teaches the scanner to skip the directory in future." },
      { id: 'D', text: "A custom pattern that matches the fixtures format and marks it inactive." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Secret scanning honours a configuration file that can exclude paths from alerting, which is the supported way to keep a known fixtures directory out of the queue while leaving the rest of the repository covered, and it is worth reviewing such exclusions periodically since anything inside becomes invisible. Version control ignore rules do not affect scanning of committed content, resolving alerts is a per-alert action with no learning behaviour, and custom patterns add detections.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Configuration", "Exclusions"]
  },
  {
    id: "gh-500-28",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Turning On Detection of Generic Credentials",
    scenario: "An organization wants to catch passwords and connection strings that follow no vendor-specific format, and asks what changes if the non-provider pattern detection is enabled.",
    question: "Which expectation is correct?",
    options: [
      { id: 'A', text: "Detection widens to generic credential shapes such as passwords in connection strings, at the cost of a noticeably higher false positive rate, so it is usually piloted on a subset of repositories with a triage plan before wider rollout." },
      { id: 'B', text: "Detection widens with no change in false positive rate, because the same validation applies as for partner patterns." },
      { id: 'C', text: "It replaces partner pattern detection with a broader generic engine." },
      { id: 'D', text: "It only affects push protection and does not create alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Partner patterns are precise because a vendor-defined format and often a validity check back them, whereas generic credential shapes are inherently ambiguous, so enabling them finds real exposures that would otherwise be missed while producing considerably more noise, which is why a staged rollout with triage capacity is the usual approach. Validity checking does not apply in the same way, partner detection continues alongside it, and it produces alerts as well as informing blocks.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns",
    tags: ["GH-500", "Secret Scanning", "Non-provider Patterns", "Rollout"]
  },
  {
    id: "gh-500-29",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Order of Operations After a Real Credential Is Exposed",
    scenario: "A live database password has been committed to a public repository and detected by secret scanning. The team debates whether to rewrite history first or to change the password first.",
    question: "What is the correct order and why?",
    options: [
      { id: 'A', text: "Rotate or revoke the credential first, because it must be assumed captured the moment it was pushed, then remove it from the codebase and consider history rewriting as cleanup that cannot recall existing clones." },
      { id: 'B', text: "Rewrite history first, because removing the commit means the credential was never really exposed." },
      { id: 'C', text: "Make the repository private first, which withdraws the exposure and allows an unhurried rotation." },
      { id: 'D', text: "Resolve the alert as revoked first, which signals the incident is handled and starts the rotation workflow." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Exposure is complete at the moment of the push because clones, forks, caches and automated scrapers may already hold the value, so the only action that reduces risk is invalidating the credential, and everything else is tidying that cannot undo distribution. History rewriting does not reach copies others hold, changing visibility does not retract what was fetched, and marking an alert resolved before rotating records an outcome that has not happened.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Incident Response"]
  },
  {
    id: "gh-500-30",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Who Learns About a New Secret Scanning Alert",
    scenario: "A team wants to be sure the right people are told when a credential is detected, and asks who receives notification by default.",
    question: "Which description is accurate?",
    options: [
      { id: 'A', text: "Repository administrators and security managers are notified, alongside the alert appearing in the repository Security tab and in organization security overview, and the person who committed the content is informed when a push is blocked." },
      { id: 'B', text: "Only the organization owner is notified, and only in a weekly digest." },
      { id: 'C', text: "Every repository collaborator is notified, which is why alerts are limited to public repositories." },
      { id: 'D', text: "Nobody is notified automatically; alerts must be polled from the API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Notification is directed at the people responsible for the repository and for organization security rather than broadcast to all collaborators, which matters because an alert reveals where a live credential sits, and the committer learns about a blocked push directly at the point of the block. Notification is neither restricted to a single owner on a digest, nor sent to everyone, nor absent altogether.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Notifications", "Roles"]
  },
  {
    id: "gh-500-31",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Validating a Custom Pattern Before It Blocks Anyone",
    scenario: "A security engineer has drafted a custom pattern for an internal token format. Before enabling push protection for it, they want to know how many existing matches it would produce and how many are genuine.",
    question: "Which capability provides that?",
    options: [
      { id: 'A', text: "A dry run of the pattern, which reports the matches it would have found across the selected scope without creating alerts or blocking anything." },
      { id: 'B', text: "Enabling the pattern in alert-only mode for a week, since no dry run capability exists." },
      { id: 'C', text: "Running a repository search for the token prefix, which is equivalent to the scanner behaviour." },
      { id: 'D', text: "Publishing the pattern and reviewing the audit log for bypass events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom patterns support a dry run that evaluates the pattern against existing content and reports what it would match, so the precision can be judged before anyone is alerted or blocked, which is the difference between a considered rollout and an outage of developer productivity. A dry run does exist, code search does not model the surrounding-context rules a pattern can express, and reviewing bypasses after the fact means the disruption has already happened.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Custom Patterns", "Dry Run"]
  },
  {
    id: "gh-500-32",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Coordinating a Fix for a Vulnerability in Your Own Project",
    scenario: "A maintainer has confirmed a vulnerability reported privately in their library. They need to develop and test a fix without disclosing the issue, then publish details and have downstream consumers alerted.",
    question: "Which workflow supports this?",
    options: [
      { id: 'A', text: "Create a repository security advisory as a draft, use its temporary private fork to develop and review the fix, request a CVE identifier if one is needed, then publish the advisory so it reaches the advisory database and generates alerts for consumers." },
      { id: 'B', text: "Develop the fix in a private repository and open an issue describing the vulnerability once released." },
      { id: 'C', text: "Publish the advisory first so consumers are warned, then develop the fix in the open." },
      { id: 'D', text: "Rely on the dependency graph to detect the vulnerable versions automatically once a patched release is tagged." }
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
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Failing Against an Internal Package Feed",
    scenario: "A project resolves most packages from an internal authenticated feed. Dependabot runs report that it cannot resolve those dependencies, while public ones update normally.",
    question: "What must be configured?",
    options: [
      { id: 'A', text: "A registries section in the Dependabot configuration describing the feed, referencing credentials held as Dependabot secrets, and the relevant update entry granting access to that registry." },
      { id: 'B', text: "An Actions organization secret holding the feed credentials, which Dependabot reads at run time." },
      { id: 'C', text: "A workflow that runs before Dependabot to authenticate the runner to the feed." },
      { id: 'D', text: "Nothing; Dependabot cannot resolve private registries and those dependencies must be excluded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Private feeds are declared in the registries section of the Dependabot configuration with credentials drawn from the separate Dependabot secret store, and each update entry states which registries it may use. Actions secrets are a different store that Dependabot does not read for this purpose, Dependabot does not execute repository workflows to prepare its environment, and private registries are supported rather than requiring exclusion.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot",
    tags: ["GH-500", "Dependabot", "Private Registries", "Secrets"]
  },
  {
    id: "gh-500-34",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Transitive Dependencies Missing From the Graph",
    scenario: "A project built with a tool whose full dependency set is only known after resolution shows only its directly declared dependencies in the graph, so alerts miss vulnerable transitive packages.",
    question: "Which mechanism completes the picture?",
    options: [
      { id: 'A', text: "Submit the resolved dependency set from the build using the dependency submission API, typically through an action for that build tool, so the graph reflects what the build actually resolves." },
      { id: 'B', text: "Commit a generated lockfile listing every transitive dependency, which is the only supported route." },
      { id: 'C', text: "Enable deep scanning in the dependency graph settings." },
      { id: 'D', text: "Nothing is needed, because the graph always resolves transitive dependencies from the manifest." }
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
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Merging Low Risk Dependency Updates Without a Human",
    scenario: "A team receives many patch-level Dependabot pull requests. They want patch updates that pass the full test suite to merge themselves, while minor and major updates continue to require review.",
    question: "How is that implemented?",
    options: [
      { id: 'A', text: "A workflow triggered by Dependabot pull requests that reads the update metadata, and for patch-level updates enables auto-merge so the pull request merges once required checks pass." },
      { id: 'B', text: "A Dependabot configuration option that merges patch updates automatically without involving checks." },
      { id: 'C', text: "A branch protection exemption for the Dependabot account, which merges its pull requests immediately." },
      { id: 'D', text: "Setting the update schedule to hourly, which causes superseded patch pull requests to merge automatically." }
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
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Blocking a Dependency on Licence Grounds",
    scenario: "Legal prohibits certain copyleft licences in a distributed product. The team wants a pull request introducing such a dependency to fail with a clear reason, rather than the problem being found in a later manual audit.",
    question: "Which capability supports that?",
    options: [
      { id: 'A', text: "The dependency review action, which can be configured with licence allow or deny lists as well as a severity threshold, failing the check when a newly introduced dependency violates the policy." },
      { id: 'B', text: "Dependabot alerts, which include licence findings alongside vulnerabilities." },
      { id: 'C', text: "A CodeQL query that inspects licence files in dependencies." },
      { id: 'D', text: "The software bill of materials export, which blocks disallowed licences at export time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dependency review evaluates what a pull request would add and supports licence policy as well as vulnerability severity, so a disallowed licence fails the check at the moment it is proposed with the offending dependency named. Dependabot alerts cover known vulnerabilities rather than licence policy, code analysis is the wrong instrument for dependency metadata, and an export reports rather than enforces.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["GH-500", "Dependency Review", "Licence Compliance", "Policy"]
  },
  {
    id: "gh-500-37",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "An Alert That Survives the Upgrade Intended to Fix It",
    scenario: "A team upgrades a direct dependency to a version whose release notes claim the advisory is addressed. The Dependabot alert remains open after the merge.",
    question: "Which explanations should be checked?",
    options: [
      { id: 'A', text: "Whether the vulnerable package is still resolved transitively through another dependency, whether a lockfile still pins the old version, and whether the advisory affects a version range the new release still falls within." },
      { id: 'B', text: "Whether the alert simply needs manual dismissal, since alerts never close automatically." },
      { id: 'C', text: "Whether the dependency graph has been disabled, which freezes existing alerts." },
      { id: 'D', text: "Whether the release notes are authoritative, since advisories are only updated quarterly." }
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
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "What Makes CodeQL Different From a Pattern Matcher",
    scenario: "A reviewer asks why CodeQL reports an injection in code where the dangerous call and the untrusted input are in different files and different functions, when a text-based linter finds nothing.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "CodeQL builds a queryable database representing the code and its semantics and uses data flow and taint tracking to connect a source of untrusted input to a sensitive sink across function and file boundaries." },
      { id: 'B', text: "CodeQL applies a larger library of regular expressions than a linter, which is what allows cross-file matches." },
      { id: 'C', text: "CodeQL executes the program with instrumented inputs and observes which reach the sink." },
      { id: 'D', text: "CodeQL compares the code against a database of known vulnerable code snippets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The analysis extracts a relational representation of the program and reasons about it with queries, so tracking tainted data from where it enters to where it is used is a graph problem rather than a text problem, which is why the two ends can be far apart in the source. It is not regular expression matching at a larger scale, it is static rather than executing the program, and it reasons about the code rather than comparing it to snippets.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["GH-500", "CodeQL", "Data Flow", "Concepts"]
  },
  {
    id: "gh-500-39",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Two Analyses Overwriting Each Other",
    scenario: "A repository uploads results from CodeQL and from a separate container scanner for the same commit. Each upload appears to replace the previous one, so only the most recent tool findings are ever visible.",
    question: "What is missing?",
    options: [
      { id: 'A', text: "A distinct category on each upload, which identifies the analysis so results from different tools or configurations coexist for the same commit instead of superseding one another." },
      { id: 'B', text: "A distinct commit for each upload, since one commit can carry only one analysis." },
      { id: 'C', text: "A separate branch for each tool, which is the only way to keep results apart." },
      { id: 'D', text: "A merged SARIF file combining both tools, since multiple uploads are not supported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Code scanning identifies an analysis by its category so that several tools, languages or configurations can report against the same commit, and uploads sharing a category are treated as successive runs of the same analysis, which is exactly the overwriting behaviour described. Multiple analyses per commit are supported, so neither extra commits, extra branches nor pre-merging the files is necessary.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github",
    tags: ["GH-500", "Code Scanning", "SARIF", "Category"]
  },
  {
    id: "gh-500-40",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Running CodeQL Where Actions Is Not Available",
    scenario: "A regulated build runs on a self-managed continuous integration system that will not be migrated. The organization still wants CodeQL results in the code scanning alert list for those repositories.",
    question: "Which approach works?",
    options: [
      { id: 'A', text: "Run the CodeQL command line in the existing system to create a database and analyse it, then upload the resulting SARIF to the repository with the appropriate credential and reference." },
      { id: 'B', text: "Mirror the repository to a second repository where Actions is enabled and analyse the mirror, since results cannot be uploaded from elsewhere." },
      { id: 'C', text: "Code scanning results can only be produced by the CodeQL action, so the build must migrate." },
      { id: 'D', text: "Run the analysis locally on developer machines and commit the SARIF file to the repository, which code scanning ingests." }
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
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Analysing a Repository Containing Several Languages",
    scenario: "A repository holds a compiled backend, a front-end written in an interpreted language and infrastructure definitions. The team wants each analysed appropriately and reported separately.",
    question: "How is the advanced setup usually structured?",
    options: [
      { id: 'A', text: "A matrix over the languages, so each language gets its own database creation, its own build handling where required and its own analysis, which is reported under its own category." },
      { id: 'B', text: "A single database covering all languages at once, analysed in one step." },
      { id: 'C', text: "Three separate repositories, one per language, since one repository supports one language." },
      { id: 'D', text: "One analysis of the dominant language, since findings in the others are covered transitively." }
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
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "A CodeQL Analysis That Runs Out of Memory",
    scenario: "Analysis of a very large codebase fails intermittently with out-of-memory errors, and when it completes it takes over two hours, which is longer than the team wants for a scheduled run.",
    question: "Which adjustments are appropriate?",
    options: [
      { id: 'A', text: "Give the analysis a larger runner, tune the memory and thread options the analysis step exposes, narrow the scope with path filters or build configuration where parts of the tree need not be analysed, and consider moving the exhaustive run to a schedule with a narrower analysis on pull requests." },
      { id: 'B', text: "Reduce the query suite to the default and accept that large codebases cannot be analysed on a schedule." },
      { id: 'C', text: "Split the SARIF upload into smaller files, which reduces analysis memory use." },
      { id: 'D', text: "Disable the dependency graph, which competes with CodeQL for runner memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Analysis cost scales with the size of the database and the breadth of the queries, so the levers are machine size, the memory and thread settings the analysis exposes, reducing what is extracted, and separating a fast pull request analysis from an exhaustive scheduled one. Narrowing the suite is one part of that rather than a concession that scheduling is impossible, upload file size is unrelated to analysis memory, and the dependency graph does not run on the runner.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["GH-500", "CodeQL", "Performance", "Scaling"]
  },
  {
    id: "gh-500-43",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Reading the Path Shown With a Data Flow Alert",
    scenario: "A developer opens a code scanning alert and sees a sequence of numbered steps linking a request parameter through several functions to a database call, and is unsure what the sequence represents.",
    question: "What is it, and how should it be used?",
    options: [
      { id: 'A', text: "It is the data flow path the analysis found from an untrusted source to a sensitive sink, and it should be used to decide where to break the flow, typically by validating or parameterising at a point on that path." },
      { id: 'B', text: "It is the call stack captured when the analysis executed the code, showing the runtime sequence." },
      { id: 'C', text: "It is a list of every function that mentions the variable name, in file order." },
      { id: 'D', text: "It is a suggested refactoring produced by the analysis, which should be applied as shown." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The path is the chain of steps by which tainted data reaches the sink, and its value to a reviewer is that it identifies the candidate places to intervene as well as making the finding auditable rather than an unexplained assertion. The analysis is static so there is no captured call stack, the path is based on data flow rather than name occurrences, and it describes the problem rather than prescribing a fix.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "CodeQL", "Data Flow", "Triage"]
  },
  {
    id: "gh-500-44",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "A New Language Added to a Repository Using Default Setup",
    scenario: "A repository configured with default setup gains a substantial component written in a language it did not previously contain. The team wonders whether they must migrate to advanced setup to have it analysed.",
    question: "What happens?",
    options: [
      { id: 'A', text: "Default setup detects the languages present and updates the analysed set, so a newly added supported language is picked up without migrating, and the configured languages can also be reviewed and adjusted." },
      { id: 'B', text: "Default setup analyses only the languages present when it was enabled, so any addition requires migrating to advanced setup." },
      { id: 'C', text: "Default setup analyses every supported language regardless of whether it is present, so nothing changes." },
      { id: 'D', text: "Default setup disables itself when an unexpected language appears, and must be re-enabled manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Default setup is managed rather than frozen, detecting the languages in the repository and keeping the analysed set current, which is a large part of why it exists, and the selection remains visible and adjustable in the settings. It is not pinned to the languages present at enablement, it does not analyse languages that are absent, and it does not disable itself.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "Default Setup", "Languages"]
  },
  {
    id: "gh-500-45",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Alerts on a Branch That Has Been Merged and Deleted",
    scenario: "A feature branch carried several code scanning alerts. After the branch was merged and deleted, some of those alerts remain open on the default branch and others disappeared.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "Alerts are tracked per analysed ref, so findings that still exist in the merged code are reported against the default branch while findings that were removed or that only existed on the deleted branch no longer appear." },
      { id: 'B', text: "Alerts are global to the repository, so deleting a branch never affects them and the disappearance indicates a bug." },
      { id: 'C', text: "Alerts persist for thirty days after a branch is deleted and then expire regardless of the code." },
      { id: 'D', text: "Alerts only ever exist on the default branch, so the branch had no alerts of its own." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Analysis is performed for a given ref and alerts are attributed to it, so what survives a merge is whatever the analysis of the default branch still finds, which is the expected and desirable behaviour. Alerts are not repository-global irrespective of ref, they do not expire on a timer, and branches other than the default can certainly be analysed and carry alerts.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "Code Scanning", "Branches", "Alert Lifecycle"]
  },
  {
    id: "gh-500-46",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Keeping Third-Party Scanner Results Attributable",
    scenario: "An organization uploads results from an infrastructure scanner and a container scanner. In the alert list the findings are hard to attribute and filtering by tool does not behave as expected.",
    question: "Which properties of the uploaded results matter?",
    options: [
      { id: 'A', text: "The tool name and version recorded in the SARIF, together with a stable rule identifier per check and a distinct category per analysis, which together drive attribution, filtering and alert tracking across runs." },
      { id: 'B', text: "Only the severity of each result, since attribution is derived from the uploading workflow name." },
      { id: 'C', text: "Only the file path of each result, since alerts are grouped by location." },
      { id: 'D', text: "Nothing in the file; attribution is configured in the repository security settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attribution and alert tracking come from the results themselves, where the tool identity, a stable rule identifier and a distinct category let the platform group findings, filter by tool and recognise the same finding across runs rather than treating each upload as new alerts. Severity, location alone and repository settings do not supply that identity, and unstable rule identifiers are a common cause of alerts churning.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["GH-500", "SARIF", "Code Scanning", "Integration"]
  },
  {
    id: "gh-500-47",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Giving a Security Team Visibility Without Making Them Owners",
    scenario: "A central security team must read every repository, review and manage security alerts across the organization, and adjust security settings, but must not gain the ability to administer the organization or its members.",
    question: "Which arrangement fits?",
    options: [
      { id: 'A', text: "Assign the security manager role to the team, which grants read access to every repository and the ability to manage security alerts and settings without conferring organization ownership." },
      { id: 'B', text: "Make the team organization owners, which is the only way to see every repository." },
      { id: 'C', text: "Add the team as an administrator on every repository individually." },
      { id: 'D', text: "Grant the team write access to every repository through a nested team structure." }
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
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Forecasting the Cost of Wider Enablement",
    scenario: "Finance asks what enabling the security features on eighty more private repositories will cost. Many of the same engineers already commit to repositories where the features are enabled.",
    question: "Which understanding should shape the estimate?",
    options: [
      { id: 'A', text: "Consumption is driven by unique committers to repositories with the features enabled rather than by repository count, so an engineer already counted elsewhere does not add again, and the increment depends on how many committers are new to the enabled set." },
      { id: 'B', text: "Consumption is per repository, so eighty repositories cost eighty units regardless of who commits." },
      { id: 'C', text: "Consumption is per commit, so the estimate should be based on historical commit volume." },
      { id: 'D', text: "Consumption is per alert raised, so the estimate depends on how vulnerable the code is." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Licensing counts the distinct people committing to repositories where the features are on, so the same engineer active across many enabled repositories is counted once, which means the marginal cost of enabling more repositories is driven by committers who are not already in the set rather than by the number of repositories. It is not priced per repository, per commit or per alert.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-advanced-security",
    tags: ["GH-500", "Licensing", "Billing", "Planning"]
  },
  {
    id: "gh-500-49",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Preventing an Organization From Turning a Control Off",
    scenario: "An enterprise mandates that secret scanning and push protection remain enabled for all private repositories. One organization administrator disabled them last quarter to unblock a release, and the enterprise wants that to be impossible.",
    question: "Which control provides that?",
    options: [
      { id: 'A', text: "An enterprise-level policy for the security features, which sets the ceiling that organizations beneath it can restrict further but cannot loosen." },
      { id: 'B', text: "An organization security configuration, which cannot be changed by organization administrators." },
      { id: 'C', text: "A repository ruleset requiring the features, applied by the enterprise to every repository." },
      { id: 'D', text: "Removing the administrator role from every organization administrator." }
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
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Evidence That a Control Was in Force All Year",
    scenario: "An auditor does not want a screenshot showing that push protection is enabled today. They want evidence that it was enabled throughout the audit period and that every bypass was reviewed.",
    question: "Which sources satisfy that?",
    options: [
      { id: 'A', text: "The audit log, which records enablement and configuration changes with actor and timestamp and records push protection bypasses, streamed to external storage so the retention covers the whole audit period." },
      { id: 'B', text: "The security overview coverage view, which shows the current state and is sufficient as historical evidence." },
      { id: 'C', text: "The list of currently open and closed secret scanning alerts." },
      { id: 'D', text: "A scheduled workflow that records the setting daily into a repository file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Continuity of a control is a question about events over time rather than present state, and the audit log is the record of when settings changed, who changed them and when a bypass occurred, with streaming to external storage ensuring the record outlives the platform retention window. Coverage views and alert lists describe the present, and a self-reported daily file is weaker evidence than the platform own immutable log.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["GH-500", "Audit Log", "Compliance", "Evidence"]
  }
];

export default GITHUB_GHAS_QUESTIONS_2;
