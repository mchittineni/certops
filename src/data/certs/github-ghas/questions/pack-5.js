export const GITHUB_GHAS_QUESTIONS_5 = [
  {
    id: "gh-500-101",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Open Sourcing a Repository That Has a History",
    scenario: "A team plans to make a five-year-old private repository public next month. Its secret scanning queue is empty because scanning was only enabled recently on a subset of pattern types.",
    question: "What should happen before the visibility change?",
    options: [
      { id: 'A', text: "Treat the history as about to be published: widen detection and rotate what is live." },
      { id: 'B', text: "Nothing, because an empty queue at the moment of publication demonstrates the history is already clean." },
      { id: 'C', text: "Change the visibility and rely on the partner program to revoke whatever leaked once it is public." },
      { id: 'D', text: "Squash the history into a single commit, after which no historical credential remains to be found." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publishing a repository publishes its entire history at once and irreversibly, so the review has to cover history under the broadest detection the team is willing to triage, with rotation for anything still live. Relying on partner revocation accepts the exposure first and only covers supported token types, a squash into a fresh history is a legitimate option but only if it genuinely discards the old objects rather than merely adding a commit, and an empty queue under narrow detection is not evidence of a clean history.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Visibility", "Risk"]
  },
  {
    id: "gh-500-102",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Where to Define a Pattern Used by Every Team",
    scenario: "An internal token format is issued centrally and appears in many repositories across several organizations. A pattern for it currently exists in three repositories, defined separately and already slightly divergent.",
    question: "Where should it be defined?",
    options: [
      { id: 'A', text: "At the highest scope covering the affected repositories, since one definition removes the divergence." },
      { id: 'B', text: "In one repository, with each of the others referencing that definition by its identifier." },
      { id: 'C', text: "Only at repository level, since custom patterns cannot be defined above that scope." },
      { id: 'D', text: "In each repository, so every team can tune it to its own false positive profile." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom patterns can be defined at organization or enterprise level as well as per repository, so a centrally issued credential format belongs at the scope that matches its issuance, which fixes the drift and means an improvement to the pattern reaches everyone at once. Per-repository tuning is how the divergence arose, there is no cross-repository reference mechanism, and higher scopes are available.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Custom Patterns", "Scope"]
  },
  {
    id: "gh-500-103",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Telling Developers What to Do When a Push Is Blocked",
    scenario: "Developers hitting a push protection block open support tickets asking what to do, because the generic message does not say which internal secret store to use or who to ask.",
    question: "Which option addresses this?",
    options: [
      { id: 'A', text: "Disable push protection and rely on alerts, since the block message cannot be changed." },
      { id: 'B', text: "Configure the custom link on the block, pointing at internal guidance and the escalation route." },
      { id: 'C', text: "Configure a commit message template that carries the guidance to each developer." },
      { id: 'D', text: "Add the guidance to each repository's README, which is shown beside the block." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The block message supports a configurable link to organization guidance, which puts the answer in front of the developer at the moment they need it and is the cheapest fix for a support-ticket pattern. Disabling the control to avoid explaining it trades prevention for convenience, the README is not surfaced at the block, and commit templates appear before the push rather than at the rejection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection",
    tags: ["GH-500", "Push Protection", "Developer Experience", "Configuration"]
  },
  {
    id: "gh-500-104",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Triaging a Generic Match Versus a Provider Match",
    scenario: "A triage rota handles two kinds of alert: a cloud provider token with a validity status attached, and a generic password-shaped string with none.",
    question: "How should the two be handled differently?",
    options: [
      { id: 'A', text: "Both should be handled identically, since the alert carries the same fields and the same states either way." },
      { id: 'B', text: "Provider matches need the deeper investigation, since a validity check reflects the provider's cache rather than the live credential." },
      { id: 'C', text: "Generic matches should be dismissed by default and looked at only when somebody reports an incident involving them." },
      { id: 'D', text: "A provider match is judged from its validity status; a generic match needs a person to confirm it is a credential." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The two differ in how much the platform can tell you: a provider match arrives with a known format, a known owner and often a live or dead status, whereas a generic match is a shape that might be a credential, so the second consumes far more analyst time and is where path exclusions and pattern tuning pay off. Treating them identically mis-sizes the workload, and defaulting to dismissal discards the exposures generic detection exists to find.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns",
    tags: ["GH-500", "Secret Scanning", "Triage", "Operations"]
  },
  {
    id: "gh-500-105",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "A Credential That Escaped Into Published Images",
    scenario: "A build embedded a configuration file containing a live token into container images that have been published to a registry for four months and pulled by many consumers.",
    question: "What does remediation require beyond the repository?",
    options: [
      { id: 'A', text: "Fix the repository and rebuild the latest tag, since consumers pull the newest image and the old layers fall out of use." },
      { id: 'B', text: "Nothing beyond the repository is needed, since the registry is internal and only the build service can pull from it." },
      { id: 'C', text: "Rotate the credential, then rebuild and republish every image that carried it and retire those tags." },
      { id: 'D', text: "Delete the configuration file in a new image layer, which removes the value from the image consumers receive." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An image is a stack of layers and anything ever added remains readable in the layer that added it, so the artifact is a second distribution channel that has to be handled explicitly after the credential is rotated. Fixing only the newest tag leaves every older tag exposed, adding a layer that deletes the file leaves the original layer intact and readable, and an internal registry narrows the audience without removing the exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Containers", "Incident Response"]
  },
  {
    id: "gh-500-106",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "A Contributor Commits a Credential in a Fork",
    scenario: "An external contributor opens a pull request from their fork. Review notices what looks like their own personal cloud key in one of the commits.",
    question: "What is the right response?",
    options: [
      { id: 'A', text: "Tell the contributor privately so they can revoke it, and do not merge the commit." },
      { id: 'B', text: "Close the pull request without explanation, since the credential belongs to the contributor and not to the project." },
      { id: 'C', text: "Merge the pull request and remove the credential in a follow-up commit on the default branch afterwards." },
      { id: 'D', text: "Ask the contributor to force push over the commit, after which the credential can no longer be recovered." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The credential is already exposed wherever the commit is reachable, so the urgent step is telling the owner so they can revoke, and the project's obligation is to avoid merging it into a more widely cloned history. Merging and cleaning up later copies the exposure into the main repository, closing silently leaves someone with a live leaked key, and a force push does not reliably remove a commit already referenced by a pull request.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Forks", "Disclosure"]
  },
  {
    id: "gh-500-107",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Choosing When Update Pull Requests Arrive",
    scenario: "Dependabot pull requests currently arrive in the middle of the night in the team's timezone, so the first thing anyone sees each morning is a pile of unreviewed automation.",
    question: "Which configuration adjusts this?",
    options: [
      { id: 'A', text: "Set a target branch for the ecosystem, which is what controls the delivery time." },
      { id: 'B', text: "Set the schedule interval alone, since the time of day is fixed by the platform." },
      { id: 'C', text: "Set the schedule's day, time and timezone for that ecosystem, not just the interval." },
      { id: 'D', text: "Add a workflow that reschedules the pull requests after they have been opened." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The schedule block accepts a day, a time and a timezone alongside the interval, so a weekly batch can be timed for a morning when the team is around, which measurably improves how promptly updates are reviewed. The time of day is configurable rather than fixed, the target branch selects where updates are proposed, and a workflow cannot move a pull request that already exists to a different arrival time.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-500", "Dependabot", "Configuration", "Scheduling"]
  },
  {
    id: "gh-500-108",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Enabling Fixes Without Enabling Currency Updates",
    scenario: "A team on a frozen release wants pull requests for vulnerable dependencies only. They do not want routine version bumps, and they are unsure whether a configuration file is required.",
    question: "What is needed?",
    options: [
      { id: 'A', text: "Add a configuration file with an interval of never, which disables version updates while keeping security ones." },
      { id: 'B', text: "Security updates cannot be enabled without version updates, so the team has to accept both together." },
      { id: 'C', text: "Enable alerts and security updates, which need no configuration file; the file is what adds scheduled version updates." },
      { id: 'D', text: "Add a configuration file with an ignore entry for every dependency, leaving only the security updates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The two features are independent: security updates are switched on in the repository settings and act on alerts without any file, whereas the configuration file exists to define scheduled version updates, so the simplest correct answer is to enable the former and not write the latter. There is no never interval, ignoring every dependency is an elaborate way to achieve nothing, and the features are not coupled.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates",
    tags: ["GH-500", "Dependabot", "Security Updates", "Configuration"]
  },
  {
    id: "gh-500-109",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Reviewing an Automated Dependency Update Responsibly",
    scenario: "A reviewer is asked what to actually check on a Dependabot pull request, having previously approved them on the basis that tests passed.",
    question: "Which review is appropriate?",
    options: [
      { id: 'A', text: "Confirm the version number increased and merge, since Dependabot only ever proposes updates that are safe." },
      { id: 'B', text: "Confirm the checks are green and merge, which is sufficient because the test suite is what defines correctness." },
      { id: 'C', text: "Read the full diff of the dependency's own source, since nothing short of that constitutes a review." },
      { id: 'D', text: "Read the compatibility signal and release notes, and judge the size of the version jump." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A green suite tells you the tests you happen to have still pass, which is necessary and not sufficient, so the review adds the change notes, the size of the jump and a judgement about what the package can do. Treating the suite as complete is how a behavioural change slips through, Dependabot proposes updates rather than vouching for them, and reading the entire upstream diff is not achievable for most dependencies.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/about-dependabot-pull-requests",
    tags: ["GH-500", "Dependabot", "Review", "Supply Chain"]
  },
  {
    id: "gh-500-110",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Restricting Updates to a Named Set of Dependencies",
    scenario: "A team wants Dependabot to propose updates for a short list of security-sensitive libraries and to leave everything else alone, having found the full update stream unmanageable.",
    question: "Which configuration expresses that most directly?",
    options: [
      { id: 'A', text: "An ignore entry listing every other dependency declared in the manifest file." },
      { id: 'B', text: "A groups entry containing only those dependencies, with the others left out." },
      { id: 'C', text: "An open pull request limit equal to the number of dependencies in the list." },
      { id: 'D', text: "An allow entry naming the dependencies to consider, which restricts updates to that set." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Allow and ignore are complementary, with allow expressing an inclusion list and ignore an exclusion list, so a short list of wanted dependencies is naturally an allow entry that stays correct as new dependencies appear. Enumerating everything else is unmaintainable and silently admits each new dependency, grouping changes how updates are batched rather than which are proposed, and a pull request limit throttles volume without choosing what is in it.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-500", "Dependabot", "Configuration", "allow"]
  },
  {
    id: "gh-500-111",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review in a Repository With Many Manifests",
    scenario: "A monorepo holds thirty services, each with its own manifest. Dependency review reports findings without making clear which service a newly introduced dependency belongs to, so triage stalls.",
    question: "Which understanding helps?",
    options: [
      { id: 'A', text: "Dependency review reports its findings without manifest attribution, so a custom parser is needed to route them." },
      { id: 'B', text: "Dependency review supports only one manifest per repository, so the monorepo has to be split up first." },
      { id: 'C', text: "Dependency review aggregates every manifest into one graph, so attribution is impossible by design." },
      { id: 'D', text: "Dependency review reports the manifest each change belongs to, so triage routes on it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The graph records which manifest each dependency came from, so the attribution needed to route a finding is present and the practical work is wiring triage to that path, with a split only warranted when services need materially different policies rather than merely different owners. Multiple manifests are supported, attribution is available rather than requiring a parser, and the manifests are not flattened beyond recovery.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["GH-500", "Dependency Review", "Monorepo", "Triage"]
  },
  {
    id: "gh-500-112",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "A Language With No Lockfile in the Graph",
    scenario: "One component in a repository declares dependencies with loose version ranges and produces no lockfile. Its entries in the dependency graph are sparse and alerts for it seem unreliable.",
    question: "What is the underlying issue and the improvement?",
    options: [
      { id: 'A', text: "Alerts require a lockfile in every ecosystem, so nothing improves without changing the package manager." },
      { id: 'B', text: "The ecosystem is unsupported by the dependency graph, so the component has to be excluded from alerting." },
      { id: 'C', text: "The graph infers exact versions by taking the newest in the range, so the entries are accurate and the fault is elsewhere." },
      { id: 'D', text: "Without a lockfile the resolved versions are unrecorded, so commit one or submit the build's set." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Advisory matching is a comparison against specific versions, so a declaration that merely permits a range leaves the graph unable to say what is actually installed, and the fix is to record reality either by committing a lockfile or by reporting the build's resolution through the submission API. The ecosystem is not necessarily unsupported, assuming the newest permitted version would be a guess rather than a record, and the submission route works without changing package manager.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["GH-500", "Dependency Graph", "Lockfiles", "Accuracy"]
  },
  {
    id: "gh-500-113",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Suites and Packs Are Not the Same Thing",
    scenario: "A team is told to add a custom query pack and separately to switch to a broader query suite, and is unsure whether these are two names for one action.",
    question: "How do the two differ?",
    options: [
      { id: 'A', text: "They are interchangeable names for the same collection of queries, differing only by where they are declared." },
      { id: 'B', text: "A pack is a versioned unit holding queries and their libraries; a suite is a named selection of which queries run." },
      { id: 'C', text: "A suite is the versioned, distributable unit, while a pack is the runtime selection of queries to execute." },
      { id: 'D', text: "A pack holds only custom queries and a suite only the queries maintained upstream by GitHub." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The distinction is distribution against selection: packs are how queries and their dependencies are published, versioned and consumed, and suites are how a run decides what to execute from what is available, which is why a configuration commonly names both. The terms are not interchangeable, the definitions are not reversed, and packs are used for upstream queries as well as custom ones.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites",
    tags: ["GH-500", "CodeQL", "Packs", "Query Suites"]
  },
  {
    id: "gh-500-114",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Findings in Machine-Generated Code",
    scenario: "A build generates client code from an interface definition and commits it. Analysis reports many findings in the generated files, which no developer edits and which are regenerated on every change.",
    question: "What is the appropriate handling?",
    options: [
      { id: 'A', text: "Stop committing the generated code, which is the only supported way to keep it out of the analysis." },
      { id: 'B', text: "Exclude the generated paths from analysis, and where a finding is real raise it against the generator or its templates." },
      { id: 'C', text: "Fix the findings in the generated files, since the analysis is reporting genuine issues in shipped code." },
      { id: 'D', text: "Dismiss the findings individually as won't fix each time the generator reproduces them on a build." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Findings in generated output are not actionable where they are reported because the file is rewritten on the next build, so the queue should exclude those paths while genuine issues are escalated to whatever produces them. Repeated dismissal is recurring toil against regenerated files, editing generated code is undone immediately, and whether to commit generated output is a separate decision from how to scope analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "Generated Code", "Tuning"]
  },
  {
    id: "gh-500-115",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Adopting Scanning on a Codebase With Years of Debt",
    scenario: "Enabling analysis on a mature codebase produces three thousand alerts. Leadership wants scanning to be useful immediately rather than after a multi-year cleanup.",
    question: "Which strategy delivers value first?",
    options: [
      { id: 'A', text: "Dismiss the whole backlog as won't fix, then treat everything appearing afterwards as new work." },
      { id: 'B', text: "Gate pull requests on newly introduced findings, and work the historical backlog as separate campaigns." },
      { id: 'C', text: "Block every merge until the backlog is cleared, which guarantees the fastest possible cleanup." },
      { id: 'D', text: "Keep the scanning advisory until the backlog is cleared, and only then turn on enforcement." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Separating new findings from historical ones is what makes adoption survivable, because the pull request gate stops accumulation immediately while the backlog is reduced deliberately by severity and exposure. Blocking every merge halts delivery and produces pressure to bypass, mass dismissal destroys the record of real risk, and leaving scanning advisory means the backlog keeps growing while it is being cleared.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["GH-500", "Code Scanning", "Adoption", "Backlog"]
  },
  {
    id: "gh-500-116",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Covering a Language CodeQL Does Not Analyse",
    scenario: "A component is written in a language CodeQL does not support. The organization still needs static analysis findings for it to appear in the same alert list and reporting as everything else.",
    question: "What is the approach?",
    options: [
      { id: 'A', text: "Accept that the component cannot be covered and record it as a documented exception to the standard." },
      { id: 'B', text: "Rewrite the component in one of the supported languages so the existing analysis reaches it." },
      { id: 'C', text: "Write a CodeQL extractor for the language, which is the only supported route to covering it." },
      { id: 'D', text: "Run a third-party analyser for the language and upload its SARIF under its own category." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Code scanning is deliberately tool-agnostic through SARIF, so an unsupported language is a matter of choosing an analyser and uploading its results under its own category, after which the findings behave like any other alerts. Building an extractor is a large undertaking that is not required here, rewriting a component to suit a tool inverts the priorities, and an exception is unnecessary when an integration path exists.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/about-integration-with-code-scanning",
    tags: ["GH-500", "Code Scanning", "SARIF", "Coverage"]
  },
  {
    id: "gh-500-117",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Distinguishing a Failed Analysis From a Clean One",
    scenario: "A dashboard counts repositories with zero open code scanning alerts as compliant. A reviewer suspects some of those repositories are not being analysed at all.",
    question: "Which check separates the two?",
    options: [
      { id: 'A', text: "Check the number of closed alerts, since a genuinely clean repository will have historical ones." },
      { id: 'B', text: "Check whether a recent successful analysis exists, since zero alerts without one means unmonitored." },
      { id: 'C', text: "Check whether a workflow file is present, which is sufficient evidence that the analysis runs." },
      { id: 'D', text: "Check the repository's creation date, since a recently created repository is clean by definition." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Absence of alerts is only meaningful alongside evidence that something looked, so the compliance question is whether a recent analysis succeeded for the relevant reference, which the coverage and tool status surfaces answer directly. A workflow file may be disabled or failing, historical alert counts say nothing about current analysis, and a new repository can accumulate unanalysed code immediately.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page",
    tags: ["GH-500", "Code Scanning", "Coverage", "Assurance"]
  },
  {
    id: "gh-500-118",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Getting Alerts to the People Who Own the Code",
    scenario: "In a monorepo owned by eleven teams, code scanning alerts all land in one repository queue and nobody feels responsible for any particular one.",
    question: "Which approach routes them?",
    options: [
      { id: 'A', text: "Route on the commit author of the flagged line, which the alert already records against the finding." },
      { id: 'B', text: "Split the monorepo into eleven repositories, since alerts cannot be routed by path within one." },
      { id: 'C', text: "Map the alert's file path to the owning team through the code owners file, and drive tickets from the alerts API." },
      { id: 'D', text: "Assign every alert to the security team, who forward each one to the team that owns the code." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a monorepo the unit of ownership is the path, and the code owners file already encodes that mapping, so joining it to the alert path through the API gives correct routing without restructuring anything. Splitting the repository is a large change to solve a routing problem, funnelling everything through security recreates the bottleneck, and the author of a line is often neither its current owner nor still on the team.",
    referenceUrl: "https://docs.github.com/en/rest/code-scanning",
    tags: ["GH-500", "Code Scanning", "Ownership", "Monorepo"]
  },
  {
    id: "gh-500-119",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Who Can See Code Scanning Alerts",
    scenario: "A repository owner is asked whether opening the repository to a wider internal audience with read access would expose its code scanning alerts to those users.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "Alert details are available only to organization owners, whatever access the repository itself grants." },
      { id: 'B', text: "Alert details are hidden from everyone until the alert has been dismissed or the finding fixed." },
      { id: 'C', text: "Alert details are available to anyone who can read the repository, so wider read access exposes them." },
      { id: 'D', text: "Alert details go to write access, administrators and security managers, not to readers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Alert visibility is tied to write access rather than read, together with the administrative and security roles, which is deliberate because an open alert is a map of exploitable weaknesses; the public repository case is the notable nuance worth checking before opening a project up. Read access does not confer visibility, the audience is broader than owners alone, and alerts are visible to the right people from the moment they are raised.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "Code Scanning", "Access Control", "Visibility"]
  },
  {
    id: "gh-500-120",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Speeding Up Analysis on Pull Requests",
    scenario: "A team wants pull request analysis to spend its time on the change under review rather than re-deriving results for the whole repository on every run.",
    question: "Which statement reflects how this is approached?",
    options: [
      { id: 'A', text: "The run reuses the database from the last default branch analysis, so no extraction happens for the pull request." },
      { id: 'B', text: "The run is a text diff scan rather than a semantic analysis, which is the reason it completes so quickly." },
      { id: 'C', text: "The run still needs a database, since a change is only meaningful in context." },
      { id: 'D', text: "The run can be pointed at only the changed files, which is the standard configuration for pull requests." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data flow can begin in an unchanged file and end in a changed one, so analysing the changed files alone would miss exactly the findings a review cares about, which is why the codebase context is still required while the reviewer's view is narrowed to what the change introduces. The database is built for the proposed code rather than reused from another commit, and pull request analysis is the same semantic analysis rather than a text scan.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["GH-500", "Code Scanning", "Pull Requests", "Performance"]
  },
  {
    id: "gh-500-121",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Two Teams Disagreeing About One Alert",
    scenario: "A developer dismisses an injection alert as a false positive, arguing the input is internal. A security reviewer reopens it, arguing the internal service is reachable from a partner network.",
    question: "How should this be resolved and recorded?",
    options: [
      { id: 'A', text: "Settle it on reachability rather than seniority, and record the reasoning on the alert itself." },
      { id: 'B', text: "Defer to the developer in every case, since they hold the context about how the code is actually called." },
      { id: 'C', text: "Defer to the security reviewer in every case, since the security team owns the alert queue and its thresholds." },
      { id: 'D', text: "Leave the alert open indefinitely, since an unresolved disagreement should never be closed either way." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The disagreement is factual, about whether untrusted input can reach the sink, so it is settled by establishing reachability, and the recorded reason matters because a false positive claims the analysis is wrong while won't fix records an accepted risk that can be revisited when exposure changes. Deferring by role decides on authority rather than evidence, and leaving it open indefinitely just moves the unresolved question into the backlog.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "Code Scanning", "Triage", "Process"]
  },
  {
    id: "gh-500-122",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Recording an Accepted Risk So It Is Revisited",
    scenario: "A finding will not be fixed this year because the affected component is being replaced. Security accepts the risk, and wants the decision to resurface if the replacement slips rather than being forgotten.",
    question: "Which handling supports that?",
    options: [
      { id: 'A', text: "Dismiss it as won't fix with the rationale and replacement date, tracked in the risk register." },
      { id: 'B', text: "Leave it open so that it keeps appearing in the backlog until the component has been replaced." },
      { id: 'C', text: "Delete the alert through the API so that it does not distort the remediation time metrics." },
      { id: 'D', text: "Dismiss it as a false positive, which is the reason that keeps it out of the reporting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Won't fix is the reason that honestly says the finding is real and accepted, the comment carries the reasoning to whoever looks next, and because a dismissal does not expire the review date has to live somewhere that will actually prompt a person. Calling it a false positive misrepresents a real finding, leaving it open loses the distinction between accepted and unexamined risk, and deleting it removes the evidence rather than the risk.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["GH-500", "Risk Acceptance", "Governance", "Triage"]
  },
  {
    id: "gh-500-123",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Publishing a Security Policy That Gets Read",
    scenario: "A repository has no security policy. Reports arrive by direct message to whichever maintainer a reporter can find, and two reports have been lost.",
    question: "What should the policy file cover?",
    options: [
      { id: 'A', text: "The list of security tools the project already runs, so reporters know what ground is covered before they report." },
      { id: 'B', text: "How to report privately, which versions are supported, what response times to expect, and the disclosure expectations." },
      { id: 'C', text: "A statement that the project takes security seriously, together with a maintainer's email address to write to." },
      { id: 'D', text: "A prohibition on reporting vulnerabilities publicly, with the enforcement policy that applies if one is." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A policy is useful when it answers a reporter's actual questions, namely where to send it, whether their version is in scope, when they will hear back and what happens next, and the platform surfaces the file at the moment someone is about to open an issue. A statement of intent with one address is what has already failed here, a tool list does not tell anyone how to report, and forbidding public reports without offering a channel guarantees they arrive publicly anyway.",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["GH-500", "Security Policy", "Disclosure", "Governance"]
  },
  {
    id: "gh-500-124",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Detecting a Quietly Weakened Security Posture",
    scenario: "An organization wants to know within a day if anyone disables a security feature, removes a repository from a security configuration, changes a runner group, or alters a custom pattern.",
    question: "Which arrangement detects these?",
    options: [
      { id: 'A', text: "Require that every such change goes through a pull request, which leaves the record the review needs." },
      { id: 'B', text: "Poll the security overview each day and compare its coverage view against the previous day's." },
      { id: 'C', text: "Stream the audit log and alert on the configuration events that weaken a control." },
      { id: 'D', text: "Subscribe to the secret scanning and code scanning alert webhooks, which carry configuration changes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Turning a control off produces no alert, because there is nothing to alert about once the control is gone, so detection has to come from the administrative event stream, which records who changed what and when and can be alerted on directly. A daily coverage diff is slower, coarser and misses changes that are reverted in between, alert webhooks carry findings rather than settings, and most of these settings are not expressed as repository files at all.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["GH-500", "Audit Log", "Monitoring", "Governance"]
  },
  {
    id: "gh-500-125",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Who Owns Remediation",
    scenario: "An organization is defining responsibilities. Proposals range from the security team fixing every alert to each engineering team owning its own findings with security setting policy.",
    question: "Which model scales?",
    options: [
      { id: 'A', text: "Engineering teams own remediation; security owns policy, thresholds and assurance." },
      { id: 'B', text: "Whoever is on the triage rota that week owns whatever appears in the queue during that week." },
      { id: 'C', text: "The security team owns every fix, which keeps the judgement consistent across the whole estate." },
      { id: 'D', text: "Ownership is unnecessary once the thresholds are strict enough, since few alerts will be raised." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Remediation requires understanding the code and shipping a change, which sits with the owning team, so the workable division gives them the fixes and gives security the policy, tooling and assurance that make the expectation clear and measurable. A central team fixing everything becomes the bottleneck and lacks context, rota-based ownership assigns work by accident of timing, and strict thresholds reduce volume without answering who acts.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-securing-your-organization",
    tags: ["GH-500", "Operating Model", "Governance", "Remediation"]
  }
];

export default GITHUB_GHAS_QUESTIONS_5;
