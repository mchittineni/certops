export const GITHUB_GHAS_QUESTIONS_3 = [
  {
    id: "gh-500-51",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "A Leaked Token Revoked Before Anyone Reported It",
    scenario: "A cloud provider token was committed to a public repository. Within minutes the provider had revoked it and emailed the account owner, before the internal security team had seen the alert.",
    question: "What accounts for this?",
    options: [
      { id: 'A', text: "The secret scanning partner program: for supported token types found in public repositories, the issuing provider is notified so it can revoke or otherwise act, independently of the repository owner." },
      { id: 'B', text: "GitHub revokes credentials directly using the provider API on the owner behalf." },
      { id: 'C', text: "Push protection revoked the token when it blocked the push." },
      { id: 'D', text: "Validity checks revoke any token they find to be active." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Under the partner program the provider that issued a token type is informed when one appears in a public repository, and many providers respond by revoking it immediately, which is why the credential can be dead before the owning team has triaged the alert. GitHub notifies rather than revoking on the provider behalf, push protection prevents a push rather than acting on a credential, and validity checks report status without changing it.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Partner Program", "Public Repositories"]
  },
  {
    id: "gh-500-52",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Feeding Secret Alerts Into a Central Monitoring System",
    scenario: "A security operations team runs its own incident platform and needs new secret scanning alerts to arrive there promptly, across every repository in the organization, without anyone watching the Security tab.",
    question: "Which integration approach is appropriate?",
    options: [
      { id: 'A', text: "Subscribe to the secret scanning alert webhook at organization level for near real time delivery, and use the alerts API for backfill and periodic reconciliation." },
      { id: 'B', text: "Poll the alerts API for every repository every few minutes, since no webhook exists for these alerts." },
      { id: 'C', text: "Configure email notifications to a shared mailbox and parse the messages." },
      { id: 'D', text: "Export the security overview page on a schedule and ingest the export." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A webhook subscribed at organization level pushes alert events as they occur across every repository beneath it, and pairing it with the API for backfill and reconciliation covers gaps from delivery failures, which is the standard integration shape. Polling every repository is slower and creates rate limit pressure when a webhook exists, mailbox parsing is brittle, and the overview is a reporting surface rather than a feed.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["GH-500", "Secret Scanning", "API", "Webhooks", "Integration"]
  },
  {
    id: "gh-500-53",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "One Credential, Thirty Repositories",
    scenario: "Triage reveals that the same shared service password appears in thirty repositories across the organization, each with its own alert. Rotating it will break every consumer at once if not coordinated.",
    question: "What is the appropriate approach?",
    options: [
      { id: 'A', text: "Use the organization-wide alert view to establish the full set of affected repositories and owners, provision a replacement credential and migrate consumers to it from a managed secret store, then revoke the original and resolve every alert." },
      { id: 'B', text: "Rotate the credential immediately and let each team fix its own breakage, since exposure outweighs availability in all cases." },
      { id: 'C', text: "Resolve twenty-nine of the alerts as duplicates and remediate only the repository where it was first committed." },
      { id: 'D', text: "Leave the credential in place and add push protection so no further copies are added." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The organization-wide view is what turns thirty separate alerts into one incident with a known blast radius, and issuing a replacement before revoking the original allows consumers to move without a simultaneous outage, with the exposed credential then revoked rather than merely rotated in place. Immediate revocation may still be right for a live high-severity exposure, but it is a deliberate trade rather than the default; closing alerts as duplicates loses the record of which repositories held it, and preventing new copies does nothing about the existing one.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/viewing-security-insights",
    tags: ["GH-500", "Secret Scanning", "Incident Response", "Organization"]
  },
  {
    id: "gh-500-54",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "A Credential That Is Only in History",
    scenario: "An alert points at a credential that was removed from the working tree eighteen months ago in a later commit. A developer argues the alert is spurious because the current code does not contain it.",
    question: "Which reasoning is correct?",
    options: [
      { id: 'A', text: "The alert is valid because the value remains retrievable from the commit history by anyone who can clone the repository, so it must be rotated regardless of whether current files contain it." },
      { id: 'B', text: "The alert is spurious and should be closed as a false positive, since scanning should only consider the current tree." },
      { id: 'C', text: "The alert is valid but requires no rotation, because history is only readable by repository administrators." },
      { id: 'D', text: "The alert will close itself once the commit is older than two years." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Anything ever committed remains in the object history and in every clone and fork, so deletion in a later commit changes nothing about whether the credential is obtainable, which is exactly why secret scanning examines history and why rotation rather than deletion is the remedy. It is not a false positive, history is readable by anyone who can read the repository, and alerts do not expire with age.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["GH-500", "Secret Scanning", "Git History", "Triage"]
  },
  {
    id: "gh-500-55",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Reporting the Value of Push Protection to Leadership",
    scenario: "A security lead must show that the investment in push protection is working, and has open alert counts, resolved alert counts and bypass records available.",
    question: "Which measure most directly evidences prevention?",
    options: [
      { id: 'A', text: "The count of pushes blocked by push protection, since each represents a credential that never entered the repository, read alongside the bypass count and reasons to show how often the block was overridden." },
      { id: 'B', text: "The count of open secret scanning alerts, since a lower number proves prevention is working." },
      { id: 'C', text: "The total number of repositories with the feature enabled." },
      { id: 'D', text: "The average time taken to resolve alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Blocked pushes measure the thing push protection actually does, namely stopping an exposure before it happens, and pairing that with how often blocks were bypassed and why keeps the measure honest rather than flattering. Open alert counts move for many reasons including newly enabled repositories, enablement counts measure coverage rather than effect, and resolution time measures the response process for exposures that already occurred.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/viewing-security-insights",
    tags: ["GH-500", "Push Protection", "Metrics", "Reporting"]
  },
  {
    id: "gh-500-56",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Reviewing How Push Protection Is Being Overridden",
    scenario: "Push protection has been enabled for six months. Security wants a periodic review of whether bypasses are being used appropriately, and to detect a team routinely overriding blocks on real credentials.",
    question: "Which review is meaningful?",
    options: [
      { id: 'A', text: "Examine the bypass events and their stated reasons alongside the alerts each bypass raised, looking for repositories or teams with a high bypass rate and for bypasses on credentials that validity checks report as active." },
      { id: 'B', text: "Count total bypasses and set a target of zero, since any bypass indicates misuse." },
      { id: 'C', text: "Review only the bypasses where the reason given was that the value is used in tests." },
      { id: 'D', text: "Disable bypass entirely, which removes the need for review." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A bypass is legitimate when the detection was wrong and dangerous when it was right, so the useful review joins the bypass reason to the resulting alert and its validity status, and looks for concentration by team or repository that suggests the block is being treated as an obstacle. A zero target punishes correct use on genuine false positives, restricting review to one reason misses the others, and removing bypass entirely converts every false positive into blocked work.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection",
    tags: ["GH-500", "Push Protection", "Governance", "Review"]
  },
  {
    id: "gh-500-57",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Two Kinds of Advisory",
    scenario: "A team encounters advisories in two places: entries in the global advisory database that generate alerts for consumers, and a draft advisory in their own repository that nobody outside can see.",
    question: "How do the two relate?",
    options: [
      { id: 'A', text: "A repository advisory is authored privately by the maintainers of the affected project and, when published, is reviewed and can be added to the global database, from where it generates alerts for downstream consumers." },
      { id: 'B', text: "They are unrelated: repository advisories are internal notes and never reach the global database." },
      { id: 'C', text: "Global advisories are generated automatically from code scanning alerts across public repositories." },
      { id: 'D', text: "Repository advisories generate consumer alerts immediately on creation, before publication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The repository advisory is the private authoring and coordination surface for the maintainers of a project, and publication is the step that moves the information into the curated global database where dependency matching turns it into alerts for everyone consuming the affected versions. They are two stages of one pipeline rather than unrelated, the global database is curated rather than generated from code scanning, and a draft raises no consumer alerts, which is the point of drafting.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories",
    tags: ["GH-500", "Advisories", "Advisory Database", "Disclosure"]
  },
  {
    id: "gh-500-58",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Updating a Long-Lived Maintenance Branch",
    scenario: "A product has a supported release branch that receives security fixes only. Dependabot currently raises all its pull requests against the default branch, so the maintenance branch receives nothing.",
    question: "Which configuration addresses this?",
    options: [
      { id: 'A', text: "Add an update entry naming the maintenance branch as its target branch, alongside the existing entry for the default branch, each with its own schedule and ignore rules." },
      { id: 'B', text: "Change the repository default branch to the maintenance branch during the support window." },
      { id: 'C', text: "Cherry-pick each default branch Dependabot pull request onto the maintenance branch manually." },
      { id: 'D', text: "Create a second repository containing the maintenance branch and enable Dependabot there." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The configuration file supports several update entries for the same ecosystem distinguished by target branch, so a maintenance branch can be served with its own schedule and its own ignore rules restricting it to the conservative updates a supported release should receive. Changing the default branch disrupts everything else, manual cherry-picking is the toil being avoided, and a duplicate repository fragments the project.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-500", "Dependabot", "Configuration", "Maintenance Branches"]
  },
  {
    id: "gh-500-59",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "No Alerts on a Long-Lived Fork",
    scenario: "An organization maintains a fork of an upstream project with substantial local changes, treating it as a product. It receives no Dependabot alerts although the upstream repository does.",
    question: "Why, and what is required?",
    options: [
      { id: 'A', text: "Dependabot alerts are not enabled on forks by default, so they must be enabled explicitly for that fork, after which its own dependency graph drives its own alerts." },
      { id: 'B', text: "Forks inherit alerts from the upstream repository, so the absence indicates upstream has disabled them." },
      { id: 'C', text: "Forks cannot have alerts at all, so the fork must be detached into a standalone repository." },
      { id: 'D', text: "Alerts require the fork to be ahead of upstream, which this one is not." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Forks default to having alerts off because most forks are short-lived contribution copies whose owners do not want a duplicate alert stream, so a fork maintained as a product must have them enabled deliberately, after which it is analysed on its own terms including its local changes. Alerts are not inherited from upstream, forks are fully supported, and being behind upstream does not suppress them.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts",
    tags: ["GH-500", "Dependabot", "Forks", "Configuration"]
  },
  {
    id: "gh-500-60",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Tuning What Dependency Review Blocks",
    scenario: "Dependency review currently fails a pull request for any newly introduced advisory including informational ones, and developers have begun treating the check as noise.",
    question: "Which adjustment restores its credibility?",
    options: [
      { id: 'A', text: "Configure a severity threshold so the check fails only at or above an agreed level, with the remaining findings still reported in the pull request for awareness, and keep the licence policy separate." },
      { id: 'B', text: "Remove the check from required status checks and leave it advisory only." },
      { id: 'C', text: "Set the check to fail only on critical findings and suppress the display of everything else." },
      { id: 'D', text: "Replace dependency review with Dependabot alerts, which do not block pull requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A gate is credible when the threshold for blocking matches what the organization has actually agreed is unacceptable, and the action supports exactly that separation between what fails the check and what is merely reported. Making it advisory removes the gate, suppressing the display of lower severity findings discards useful context along with the blocking, and alerts are a different feature that does not gate a merge at all.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action",
    tags: ["GH-500", "Dependency Review", "Configuration", "Policy"]
  },
  {
    id: "gh-500-61",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Verifying Where a Consumed Artifact Came From",
    scenario: "A team consumes an internally produced container image. They want to verify before deployment that it was built by the expected workflow in the expected repository, not uploaded by someone with registry access.",
    question: "Which mechanism supports this?",
    options: [
      { id: 'A', text: "Build provenance attestations generated by the producing workflow and verified by the consumer against the expected repository and workflow identity before the image is deployed." },
      { id: 'B', text: "The image digest recorded in the deployment manifest, which establishes the build origin." },
      { id: 'C', text: "The dependency graph of the producing repository, which records published artifacts." },
      { id: 'D', text: "A Dependabot alert, which would be raised if an artifact came from an unexpected source." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provenance attestations bind an artifact digest to the workflow identity that produced it and are signed, so a consumer can verify origin rather than merely integrity, which is precisely the difference between knowing a file is unaltered and knowing who built it. A digest proves the bytes are unchanged but says nothing about who created them, the dependency graph describes consumption, and Dependabot matches advisories rather than checking provenance.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["GH-500", "Attestations", "Provenance", "Supply Chain"]
  },
  {
    id: "gh-500-62",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Too Many Separate Security Update Pull Requests",
    scenario: "A monorepo receives a dozen individual Dependabot security update pull requests in a week, each touching the same lockfile, so they conflict with one another and reviewers spend their time rebasing.",
    question: "Which configuration reduces the churn?",
    options: [
      { id: 'A', text: "Configure grouping so related security updates are combined into a single pull request per group, which removes the mutual conflicts and gives reviewers one change to assess." },
      { id: 'B', text: "Lower the open pull requests limit, which merges the excess updates into the permitted ones." },
      { id: 'C', text: "Move the schedule to monthly, which is the only lever available for security updates." },
      { id: 'D', text: "Disable security updates and rely on scheduled version updates to pick up the fixes eventually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Grouping collects matching updates into one pull request, which directly addresses lockfile contention because a single change resolves the file once rather than a dozen changes each invalidating the others. A lower limit defers updates rather than combining them, changing the schedule delays security fixes for no structural gain, and abandoning security updates trades a review problem for an exposure problem.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file",
    tags: ["GH-500", "Dependabot", "Grouping", "Security Updates"]
  },
  {
    id: "gh-500-63",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Where a Code Scanning Alert Severity Comes From",
    scenario: "A team wants to block merges on high severity code scanning findings and asks how the severity shown on an alert is determined, particularly for results uploaded from a third-party tool.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "Severity comes from a security severity property carried on the rule in the uploaded results, which CodeQL populates for its own queries and which a third-party tool must set for its findings to be ranked and gated consistently." },
      { id: 'B', text: "Severity is assigned by GitHub based on how many alerts of that rule exist across public repositories." },
      { id: 'C', text: "Severity is derived from the file path, with results in production directories ranked higher." },
      { id: 'D', text: "Severity is set per repository in the security settings and applies to all alerts equally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The ranking travels with the results, carried as a property on each rule, which is why CodeQL findings arrive with meaningful severities and why an integration that omits the property produces alerts that cannot be gated or prioritised sensibly. Severity is not inferred from prevalence, from file location, or from a repository-wide setting.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "SARIF", "Severity"]
  },
  {
    id: "gh-500-64",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Suggested Fixes Attached to Code Scanning Alerts",
    scenario: "Developers report that some code scanning alerts on their pull requests arrive with a proposed code change they can review and commit, and ask how much they should trust it.",
    question: "Which characterisation is right?",
    options: [
      { id: 'A', text: "Autofix generates a suggested change for supported alert types that the developer must review, test and accept, because it is a suggestion informed by the alert rather than a verified fix." },
      { id: 'B', text: "Autofix applies verified fixes automatically once the alert is confirmed, so review is unnecessary." },
      { id: 'C', text: "The suggestion is produced by re-running the analysis in a repair mode that proves the fix is correct." },
      { id: 'D', text: "The suggestion is a template drawn from the query documentation rather than from the code, so it rarely applies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Autofix proposes a change in the context of the alert and the surrounding code to shorten the path from finding to remediation, but the developer remains responsible for reviewing and testing it because correctness in the specific codebase is not guaranteed. It is neither applied without review nor formally verified, and it is generated against the actual code rather than being a generic documentation snippet.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning",
    tags: ["GH-500", "Code Scanning", "Autofix", "Remediation"]
  },
  {
    id: "gh-500-65",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Teaching the Analysis About an Internal Framework",
    scenario: "An in-house web framework wraps request handling. CodeQL does not recognise its request accessors as untrusted sources, so injection flows that begin there are not reported at all.",
    question: "Which approach fixes the gap properly?",
    options: [
      { id: 'A', text: "Supply model data extending the CodeQL libraries so the framework accessors are recognised as sources and its sensitive operations as sinks, distributed as a pack so every repository benefits." },
      { id: 'B', text: "Write a custom query that searches for calls to the framework accessors and reports each one." },
      { id: 'C', text: "Rename the framework methods to match those of a recognised framework so the existing models apply." },
      { id: 'D', text: "Nothing can be done; CodeQL only models frameworks supported upstream." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modelling the framework tells the existing taint tracking where untrusted data enters and where it must not reach, so every injection query benefits at once and the results remain proper data flow findings with paths, rather than a bare list of call sites. A query reporting every accessor call would flood the queue with non-findings, renaming methods to trick the models is unmaintainable and fragile, and extending the models is precisely the supported answer.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup",
    tags: ["GH-500", "CodeQL", "Modelling", "Custom Frameworks"]
  },
  {
    id: "gh-500-66",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Turning Off One Noisy Query Without Losing the Suite",
    scenario: "One query in the extended suite produces many findings that the organization has consistently judged inapplicable. Dismissing them individually consumes review time every week.",
    question: "Which approach is better than repeated dismissal?",
    options: [
      { id: 'A', text: "Add a query filter to the code scanning configuration excluding that query by its identifier, recording why, so the rest of the suite continues to run and the decision is visible in configuration rather than repeated per alert." },
      { id: 'B', text: "Downgrade the whole suite to the default set, which excludes the query." },
      { id: 'C', text: "Add the affected paths to the ignore list, which removes those findings." },
      { id: 'D', text: "Continue dismissing them, because excluding a security query is never acceptable." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A query filter records a considered organizational decision in one reviewable place and stops the recurring triage cost, which is preferable to the same judgement being re-made by hand every week. Dropping to the default suite discards many other useful queries, excluding paths removes all analysis of that code rather than one query, and a documented exclusion with a stated rationale is a legitimate tuning step rather than something to be avoided on principle.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["GH-500", "CodeQL", "Query Filters", "Tuning"]
  },
  {
    id: "gh-500-67",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Building a Remediation Dashboard Across Repositories",
    scenario: "A programme manager needs a weekly view of open code scanning alerts by severity, repository and age, across two hundred repositories, refreshed automatically.",
    question: "Which source supports that?",
    options: [
      { id: 'A', text: "The code scanning alerts API at organization level, which returns alerts with severity, state and timestamps for aggregation into the dashboard." },
      { id: 'B', text: "Screen scraping the security overview page, since alert data is not exposed programmatically." },
      { id: 'C', text: "The audit log, which records each alert as it is created." },
      { id: 'D', text: "A scheduled workflow in each repository that writes its own alert count to a shared file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Code scanning alerts are exposed through the API including at organization scope, with the severity, state and timestamp fields a dashboard needs, so aggregation is a straightforward scheduled query. Scraping is unnecessary given the API, the audit log records administrative events rather than alert inventory, and per-repository self-reporting is two hundred pieces of machinery replacing one.",
    referenceUrl: "https://docs.github.com/en/rest/code-scanning",
    tags: ["GH-500", "Code Scanning", "API", "Reporting"]
  },
  {
    id: "gh-500-68",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Investigating an Analysis That Produces No Results",
    scenario: "A CodeQL workflow completes successfully but reports zero results for a language known to contain issues. The team needs to determine whether extraction worked before raising a support case.",
    question: "Which step is most useful?",
    options: [
      { id: 'A', text: "Re-run with the debug option enabled so the workflow uploads the database and the extractor logs as artifacts, then inspect them to confirm whether source files were extracted at all." },
      { id: 'B', text: "Increase the query suite to security-and-quality, since zero results usually means the suite is too narrow." },
      { id: 'C', text: "Delete the repository code scanning configuration and re-enable default setup." },
      { id: 'D', text: "Compare the alert count against another repository to establish a baseline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Zero results is ambiguous between clean code and an empty database, and the debug option answers that directly by preserving the database and extractor logs for inspection, which is the evidence a support case would need anyway. Broadening the suite finds nothing extra in an empty database, resetting the configuration discards the state being diagnosed, and comparing against a different codebase establishes nothing about this one.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/troubleshooting-code-scanning",
    tags: ["GH-500", "CodeQL", "Troubleshooting", "Debugging"]
  },
  {
    id: "gh-500-69",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Permissions a Code Scanning Workflow Requires",
    scenario: "A hand-written code scanning workflow in a private repository fails when it tries to publish results, with an error about insufficient permissions, although the analysis itself completed.",
    question: "Which permissions does the job need?",
    options: [
      { id: 'A', text: "security-events: write to upload results, together with contents: read to check out the code, and actions: read where the workflow needs to read workflow run information in a private repository." },
      { id: 'B', text: "Only contents: write, since results are stored as repository content." },
      { id: 'C', text: "Only administration: write, which covers all security features." },
      { id: 'D', text: "No permissions block is needed, because the analysis action requests its own scopes at run time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publishing analysis results is governed by the security events scope, and a working analysis job also needs to read the repository content, with an additional read on workflow data in private repositories, so the failure at the upload step points squarely at the missing write scope. Results are not repository content, an administration scope is neither required nor appropriate, and an action cannot grant itself scopes beyond the job token.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["GH-500", "Code Scanning", "Permissions", "Workflows"]
  },
  {
    id: "gh-500-70",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "A Repository Whose Analysis Has Gone Stale",
    scenario: "Security overview flags a repository whose code scanning results are months old. The workflow exists and has not been deleted, and the repository has received commits during that period.",
    question: "Which causes should be checked?",
    options: [
      { id: 'A', text: "Whether the workflow is disabled, whether its triggers still match the branches receiving commits, whether recent runs are failing, and whether the analysis is only configured for a branch that is no longer used." },
      { id: 'B', text: "Whether the alerts have exceeded the retention period, which causes the analysis to be marked stale." },
      { id: 'C', text: "Whether the repository has exceeded its licence allocation, which pauses analysis silently." },
      { id: 'D', text: "Whether the default branch was renamed, which is the only cause of stale analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stale results mean the analysis has not run successfully against the active code, so the checks are whether it is enabled, whether its triggers match where the work is happening, whether it has been failing unnoticed and whether it targets an abandoned branch, which is a reminder that a repository with old results is effectively unmonitored. Alerts do not expire on a retention timer, and while a branch rename is one possible trigger mismatch it is far from the only cause.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-security-overview",
    tags: ["GH-500", "Code Scanning", "Coverage", "Troubleshooting"]
  },
  {
    id: "gh-500-71",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Where Code Scanning Fits Against Other Testing",
    scenario: "A team asks whether adopting code scanning means they can reduce their dependency scanning or their secret detection, since all three are described as security tooling.",
    question: "Which answer is correct?",
    options: [
      { id: 'A', text: "They address different classes of problem: code scanning finds flaws in code the team writes, dependency tooling finds known vulnerabilities in components it consumes, and secret scanning finds exposed credentials, so none substitutes for another." },
      { id: 'B', text: "Code scanning subsumes dependency scanning, since vulnerable library calls appear in the analysed code." },
      { id: 'C', text: "Secret scanning subsumes code scanning, since credential exposure is the dominant risk." },
      { id: 'D', text: "All three detect the same findings through different interfaces, so one can be chosen on preference." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The three tools cover disjoint categories, respectively defects introduced by the team, known vulnerabilities inherited from third-party components, and credentials that have escaped into the repository, and none of them can see the others territory. Analysing code that calls a library does not tell you the library has a published advisory, and credential exposure and code defects are unrelated failure modes.",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/github-security-features",
    tags: ["GH-500", "Concepts", "Coverage", "Program Design"]
  },
  {
    id: "gh-500-72",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Applying Stricter Rules to Regulated Repositories Only",
    scenario: "Forty of six hundred repositories are in scope for a regulatory regime and need stricter merge protections and scanning requirements. The set changes as products move in and out of scope, and maintaining a list by hand has already drifted.",
    question: "Which approach keeps the scope accurate?",
    options: [
      { id: 'A', text: "Define a custom repository property recording regulatory scope, target rulesets and security configurations at repositories carrying that property, and govern the property value as the single point of change." },
      { id: 'B', text: "Maintain a ruleset that names the forty repositories explicitly and review the list quarterly." },
      { id: 'C', text: "Move the regulated repositories into their own organization and apply the rules there." },
      { id: 'D', text: "Apply the strict rules to all six hundred repositories, since stricter is always safer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Targeting policy by a repository property turns scope into data that is set once per repository and consumed by every rule, so a product entering scope inherits the whole regime by changing one value rather than by editing several policies. An explicit list drifts between reviews, reorganising repositories by regulatory status is disruptive and fights other reasons for structure, and applying the strictest regime everywhere imposes real cost on teams it was not designed for.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-custom-properties-for-repositories-in-your-organization",
    tags: ["GH-500", "Custom Properties", "Rulesets", "Governance"]
  },
  {
    id: "gh-500-73",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Sequencing a Rollout Across a Large Estate",
    scenario: "An organization is enabling the full security feature set across six hundred repositories. A previous attempt enabled everything at once, produced tens of thousands of alerts, and was abandoned when teams disengaged.",
    question: "Which rollout sequence is most likely to succeed?",
    options: [
      { id: 'A', text: "Start with preventative controls that create little backlog such as push protection and dependency review on pull requests, then enable detection features in waves with owners and triage capacity agreed per wave, gating new findings on pull requests before attempting the historical backlog." },
      { id: 'B', text: "Enable every feature everywhere on the same day so the full risk picture is available immediately for prioritisation." },
      { id: 'C', text: "Enable detection features only, and defer all preventative controls until the backlog reaches zero." },
      { id: 'D', text: "Enable features only on repositories that already have no findings, expanding as other repositories are cleaned up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Preventative controls stop the problem growing while producing almost no backlog, and separating new findings from historical ones lets teams keep pull requests clean before confronting years of accumulation, which is what keeps them engaged. Enabling everything at once reproduces the failure described, deferring prevention lets the backlog keep growing while it is being cleared, and starting only where there is nothing to find postpones the work indefinitely.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-securing-your-organization",
    tags: ["GH-500", "Rollout", "Programme Management", "Governance"]
  },
  {
    id: "gh-500-74",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Measuring Whether the Security Programme Is Improving",
    scenario: "Leadership asks for two or three measures that show whether the application security programme is getting better, rather than simply how much output it produces.",
    question: "Which measures are most informative?",
    options: [
      { id: 'A', text: "Time to remediate by severity, the age distribution of the open backlog, and coverage of the estate by each feature, since together they show whether findings are being fixed promptly, whether old risk is accumulating, and whether the numbers describe the whole estate." },
      { id: 'B', text: "Total alerts created per month, since a rising number shows the tooling is working." },
      { id: 'C', text: "Number of repositories with at least one enabled feature, since coverage is the whole programme." },
      { id: 'D', text: "Number of dismissed alerts, since dismissal indicates active triage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Remediation speed and backlog age describe whether risk is actually being reduced, and coverage qualifies both by saying how much of the estate the figures represent, which together resist the usual failure of reporting activity as progress. Alert volume rises with enablement and with code growth, partial coverage counted as coverage flatters the picture, and dismissals rise both when triage improves and when teams start closing alerts to clear a queue.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/viewing-security-insights",
    tags: ["GH-500", "Metrics", "Programme Management", "Reporting"]
  },
  {
    id: "gh-500-75",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Mapping Platform Features to an Audit Control Set",
    scenario: "An auditor asks which platform capabilities evidence controls for secure development, vulnerability management, change management and access control.",
    question: "Which mapping is defensible?",
    options: [
      { id: 'A', text: "Code scanning and push protection evidence secure development, Dependabot alerts with dependency review evidence vulnerability management, rulesets with required reviews and status checks evidence change management, and roles with the audit log evidence access control." },
      { id: 'B', text: "Secret scanning alone evidences all four, since credentials underpin every control family." },
      { id: 'C', text: "The audit log alone evidences all four, since it records everything that happened." },
      { id: 'D', text: "No platform feature maps to an audit control, so evidence must be produced from separate documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each control family is evidenced by the capability that actually implements it, with prevention and analysis of code defects covering secure development, advisory matching and the pull request gate covering vulnerability management, merge rules covering change management, and role assignment together with the event record covering access control. No single feature covers all four, and the platform produces genuine control evidence rather than only documentation.",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/github-security-features",
    tags: ["GH-500", "Compliance", "Audit", "Controls"]
  }
];

export default GITHUB_GHAS_QUESTIONS_3;
