export const AZURE_AZ305_FLASHCARDS_1 = [
  {
    id: 'azure-az305-fc-1',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'One Log Analytics workspace or many: what actually justifies a second workspace?',
    hint: 'Access control is not on the list.',
    back: 'Default to <strong>one central workspace</strong> per region or tenant: commitment tiers pool volume, cross-team correlation works, and administration stays simple. Split only when a hard boundary forces it: <strong>data sovereignty</strong> (data must stay in a region), <strong>separate billing owners</strong> who need their own commitment tier, or <strong>Microsoft Sentinel</strong> data that must not mix with another tenant. Isolating teams from each other is not a reason; resource-context access and table-level RBAC do that inside one workspace.',
    tags: ['Log Analytics', 'Workspace design']
  },
  {
    id: 'azure-az305-fc-2',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Log Analytics workspace-context vs resource-context access: which permission drives each?',
    hint: 'Where the role assignment sits decides the mode.',
    back: '<strong>Workspace-context</strong>: the user holds a role on the workspace (Log Analytics Reader, for example) and can query every table in it. <strong>Resource-context</strong>: the user has read access on a resource, resource group or subscription and, querying from that resource, sees only the log records it emitted, wherever the workspace lives. The access-control mode <code>Use resource or workspace permissions</code> (the default) allows both; <code>Require workspace permissions</code> turns resource-context off.',
    tags: ['Log Analytics', 'RBAC']
  },
  {
    id: 'azure-az305-fc-3',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'How do you give one team read access to only two tables of a shared workspace?',
    hint: 'Scope the assignment below the workspace.',
    back: 'Grant a read role at <strong>table scope</strong>: each table is an ARM child resource, so an assignment on <code>.../workspaces/{ws}/tables/{TableName}</code> lets the user query that table and nothing else in workspace context. The older approach is a custom role listing <code>Microsoft.OperationalInsights/workspaces/query/{TableName}/read</code>. Table-level grants restrict workspace-context users only; a resource-context user still sees every table for the resources they can read.',
    tags: ['Log Analytics', 'Table-level RBAC']
  },
  {
    id: 'azure-az305-fc-4',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Interactive retention vs long-term retention in Log Analytics: what changes when data ages out?',
    hint: 'Cheap to keep, slow to ask.',
    back: '<strong>Interactive retention</strong> keeps data queryable with ordinary KQL for up to <strong>2 years</strong> (Analytics tables default to 30 days). <strong>Long-term retention</strong> extends the total to <strong>12 years</strong> at a far lower price, but that data is invisible to normal queries and alerts: you reach it with a <strong>search job</strong> (asynchronous, results land in a new table) or a <strong>restore</strong> (temporarily rehydrates a time range). Both are set per table, so only audit tables need years of history.',
    tags: ['Log Analytics', 'Retention']
  },
  {
    id: 'azure-az305-fc-5',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Log Analytics commitment tiers: when can you move up, and when can you move down?',
    hint: 'One direction is instant.',
    back: 'Commitment tiers start at <strong>100 GB/day</strong> and discount ingestion against pay-as-you-go; you pay the tier price even on days you ingest less, and overage is billed at the tier rate. You can select a higher tier at any time, but after any change you must wait <strong>31 days</strong> before choosing a lower tier or returning to pay-as-you-go. Size the tier from a month of the <code>Usage</code> table; a dedicated cluster pools one commitment across linked workspaces.',
    tags: ['Log Analytics', 'Cost']
  },
  {
    id: 'azure-az305-fc-6',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Analytics vs Basic vs Auxiliary table plans: which logs go where?',
    hint: 'Match the plan to how often anyone will query.',
    back: '<strong>Analytics</strong>: full KQL, alerting, configurable interactive retention; for anything you alert on or investigate often. <strong>Basic</strong>: much cheaper ingestion, a reduced KQL surface billed per GB scanned, interactive retention fixed at 30 days, and <strong>no log search alerts</strong>; for high-volume debug logs. <strong>Auxiliary</strong>: lowest ingestion price for rarely touched verbose data, slower queries. The plan is set per table, and only DCR-based or supported Azure tables can leave Analytics.',
    tags: ['Log Analytics', 'Table plans', 'Cost']
  },
  {
    id: 'azure-az305-fc-7',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Log Analytics data export: where can a table be continuously exported, and where can it not?',
    hint: 'Two destinations, both outside Log Analytics.',
    back: 'A data export rule streams selected tables, as data arrives, to a <strong>Storage account</strong> (hourly blobs per table) or an <strong>Event Hubs</strong> namespace for a SIEM or lakehouse pipeline. It cannot target another Log Analytics workspace, it exports only data ingested <em>after</em> the rule exists (no backfill), and it is billed per GB exported. Use it when a compliance archive or third-party consumer needs a copy without being granted workspace access.',
    tags: ['Log Analytics', 'Data export']
  },
  {
    id: 'azure-az305-fc-8',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What destinations can a diagnostic setting send resource logs to, and how many settings can one resource have?',
    hint: 'Four kinds of sink.',
    back: 'Each diagnostic setting routes chosen log categories and metrics to up to four sinks: a <strong>Log Analytics workspace</strong>, a <strong>Storage account</strong>, an <strong>Event Hubs</strong> namespace, and a <strong>partner solution</strong> (Datadog, Elastic and similar). A resource can hold up to <strong>5 diagnostic settings</strong>; sending the same category to two different workspaces means two settings, each naming a different workspace.',
    tags: ['Diagnostic settings', 'Azure Monitor']
  },
  {
    id: 'azure-az305-fc-9',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Resource logs must be queryable, archived cheaply for seven years, and streamed to a third-party SIEM. Which sink meets each need?',
    hint: 'One setting, three destinations.',
    back: '<strong>Log Analytics</strong> for anything you query, alert on or visualise. <strong>Storage account</strong> for the cheapest long-term archive; pair it with lifecycle management to move blobs to cool or archive tiers and an immutability policy if auditors demand WORM. <strong>Event Hubs</strong> for near-real-time streaming to an external SIEM or analytics platform that pulls from a hub. One diagnostic setting can list all three, so you do not have to choose between them.',
    tags: ['Diagnostic settings', 'Event Hubs', 'Storage']
  },
  {
    id: 'azure-az305-fc-10',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure Monitor Agent vs the retired Log Analytics agent: what does the new agent need before it collects anything?',
    hint: 'The agent is a shipping engine; the recipe lives elsewhere.',
    back: '<strong>Azure Monitor Agent</strong> collects nothing until a <strong>Data Collection Rule</strong> is associated with the machine. The DCR declares data sources (performance counters, Windows events, Syslog, text logs), optional transformations and destinations; the agent authenticates with a <strong>managed identity</strong>, not a workspace key. The legacy agent read its configuration from the workspace and was retired in August 2024, so designs must include DCRs and DCR associations, usually deployed by Policy.',
    tags: ['Azure Monitor Agent', 'Data Collection Rules']
  },
  {
    id: 'azure-az305-fc-11',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'How long does Azure keep the activity log, and how do you keep it longer?',
    hint: 'The number is 90.',
    back: 'The subscription <strong>activity log</strong> is retained by the platform for <strong>90 days</strong> at no charge and cannot be extended in place. To keep it longer or query it with KQL, create a <strong>diagnostic setting on the subscription</strong> that sends it to a Log Analytics workspace (the <code>AzureActivity</code> table, ingested free), a Storage account for archive, or Event Hubs. Entra ID sign-in and audit logs are separate and are routed from the Entra diagnostic settings, not from the subscription.',
    tags: ['Activity log', 'Diagnostic settings']
  },
  {
    id: 'azure-az305-fc-12',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Where does a DCR transformation live for agent-collected data versus data sent by diagnostic settings?',
    hint: 'One workspace-wide catch-all exists.',
    back: 'For data an agent sends, the KQL transformation belongs in the <strong>collection DCR</strong> itself, per data stream. Data that arrives without a DCR of its own, such as resource logs from <strong>diagnostic settings</strong>, is handled by the <strong>workspace transformation DCR</strong>: exactly one per workspace, with one transformation per supported table. Both filter, mask or enrich rows at ingestion; dropping rows cuts ingestion cost, though filtering more than half the volume incurs a small processing charge.',
    tags: ['Data Collection Rules', 'Transformations', 'Cost']
  },
  {
    id: 'azure-az305-fc-13',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'One VM must send security events to the central SOC workspace and performance data to the application workspace. How?',
    hint: 'One agent, several rules.',
    back: 'Associate the machine with <strong>multiple Data Collection Rules</strong>, each with its own data sources and destination workspace. Azure Monitor Agent is <strong>multi-homed</strong> on both Windows and Linux, so one agent install serves every DCR; the workspaces may sit in different subscriptions or regions. This is how a central Sentinel workspace coexists with team workspaces without duplicating agents, something the legacy Linux agent could not do.',
    tags: ['Azure Monitor Agent', 'Multi-homing', 'Sentinel']
  },
  {
    id: 'azure-az305-fc-14',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Resource-specific vs Azure diagnostics destination table mode: why does the exam prefer resource-specific?',
    hint: 'One giant table has a ceiling.',
    back: '<strong>Azure diagnostics</strong> mode pours every category from every resource type into the single <code>AzureDiagnostics</code> table, which has a hard <strong>500-column limit</strong>; once reached, new columns spill into <code>AdditionalFields</code>. <strong>Resource-specific</strong> mode writes each category to its own typed table (for example <code>AKSAudit</code>), giving a stable schema, faster queries, and the ability to apply <strong>table-level RBAC</strong>, per-table retention and the Basic plan. Choose it whenever the resource type offers it.',
    tags: ['Diagnostic settings', 'Log Analytics']
  },
  {
    id: 'azure-az305-fc-15',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure Monitor metrics vs logs: what is each, and how long are platform metrics kept?',
    hint: 'Numbers over time versus records.',
    back: '<strong>Metrics</strong> are lightweight numeric time series collected at regular intervals, stored in a time-series database, retained for <strong>93 days</strong>, and suited to near-real-time alerting and dashboards. <strong>Logs</strong> are structured or free-text records stored in a Log Analytics workspace and queried with KQL, supporting joins and rich analysis at higher latency. You can copy metrics into logs via diagnostic settings, but fast alerts should stay on the metric store.',
    tags: ['Azure Monitor', 'Metrics', 'Logs']
  },
  {
    id: 'azure-az305-fc-16',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Metric alert vs log search alert vs activity log alert: which one for which signal?',
    hint: 'Speed and cost point to the metric store.',
    back: '<strong>Metric alerts</strong> evaluate platform or custom metrics near real time, can watch many resources of one type in a single rule, and are the cheapest option when the signal exists as a metric. <strong>Log search alerts</strong> run a KQL query on a schedule (as often as every minute) for conditions needing joins, text matching or several tables. <strong>Activity log alerts</strong> fire on control-plane events, including Service Health and Resource Health. <strong>Smart detection</strong> in Application Insights adds automatic anomaly alerts without rules.',
    tags: ['Alerts', 'Azure Monitor']
  },
  {
    id: 'azure-az305-fc-17',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What is an action group, and what is the difference between its notifications and its actions?',
    hint: 'Who gets told versus what gets run.',
    back: 'An <strong>action group</strong> is a reusable collection of what to do when an alert fires. <strong>Notifications</strong> reach people: email, SMS, push to the Azure mobile app, voice call, and email to holders of an Azure RBAC role. <strong>Actions</strong> trigger automation: Automation runbook, Azure Function, Logic App, webhook or secure webhook, ITSM connector, and Event Hubs. Many alert rules reference the same group, so an on-call change is made once rather than per rule.',
    tags: ['Action groups', 'Alerts']
  },
  {
    id: 'azure-az305-fc-18',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'You must silence all alert notifications for a resource group during a weekend maintenance window without editing 40 alert rules. What do you use?',
    hint: 'It sits between the rule and the action group.',
    back: 'An <strong>alert processing rule</strong>. It applies at a scope (subscription, resource group or resource, with optional filters on severity, signal type or resource type) and either <strong>suppresses notifications</strong> on a schedule or <strong>adds action groups</strong> to every matching alert. The alerts still fire and remain visible in the portal; only the actions are affected. This is also how a central team attaches its action group to alerts that other teams created.',
    tags: ['Alert processing rules', 'Alerts']
  },
  {
    id: 'azure-az305-fc-19',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Why must a new Application Insights resource be workspace-based?',
    hint: 'Classic is gone, and the workspace brings features.',
    back: '<strong>Classic</strong> Application Insights was retired in February 2024; every resource now stores telemetry in a <strong>Log Analytics workspace</strong>. Workspace-based resources inherit the workspace <strong>commitment tier</strong> pricing, retention settings, customer-managed key encryption and private link through an Azure Monitor Private Link Scope, and let you join application telemetry with infrastructure logs in one KQL query. Point applications at the workspace that already holds their platform logs.',
    tags: ['Application Insights', 'Log Analytics']
  },
  {
    id: 'azure-az305-fc-20',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Adaptive, fixed-rate and ingestion sampling in Application Insights: where does each happen, and which one gets ignored?',
    hint: 'Only one runs after the data leaves the app.',
    back: '<strong>Adaptive</strong> (default in the ASP.NET and ASP.NET Core SDKs) and <strong>fixed-rate</strong> sampling happen <strong>in the SDK</strong>, reducing both network traffic and ingested volume while keeping correlated items together. <strong>Ingestion sampling</strong> is set in the portal and discards items at the Application Insights endpoint, so it lowers ingestion cost but not outbound traffic. If the SDK is already sampling, ingestion sampling does nothing. Pre-aggregated metrics are unaffected by sampling.',
    tags: ['Application Insights', 'Sampling', 'Cost']
  },
  {
    id: 'azure-az305-fc-21',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Standard availability test vs custom TrackAvailability test: when do you need the custom one?',
    hint: 'A single request versus a flow.',
    back: 'A <strong>standard test</strong> requests one URL from several Azure locations on a schedule, checking response code, content match, optional custom headers, HTTP verb and <strong>SSL certificate validity</strong>, with no code. Use a <strong>custom TrackAvailability</strong> test (typically an Azure Function on a timer) when the check needs authentication, a multi-step flow, or a private endpoint that public test agents cannot reach. Alert on failures from several locations at once to avoid noise from a single probe.',
    tags: ['Application Insights', 'Availability tests']
  },
  {
    id: 'azure-az305-fc-22',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Network Watcher Connection Monitor: what does it measure, and what must be installed?',
    hint: 'Latency and loss between endpoints, continuously.',
    back: '<strong>Connection Monitor</strong> runs continuous connectivity tests (TCP, ICMP, HTTP) between sources and destinations, reporting <strong>reachability, round-trip time and packet loss</strong> over time. Sources are Azure VMs or scale sets with the <strong>Network Watcher extension</strong>, or on-premises machines onboarded through Azure Arc with Azure Monitor Agent; destinations can be any IP, FQDN or Azure resource. Results land in Log Analytics for alerting. Use it for hybrid link health; use VNet flow logs to see actual traffic.',
    tags: ['Network Watcher', 'Connection Monitor']
  },
  {
    id: 'azure-az305-fc-23',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'VM insights vs Container insights: what does each add on top of plain Azure Monitor Agent?',
    hint: 'One draws a map; the other reads stdout.',
    back: '<strong>VM insights</strong> installs Azure Monitor Agent plus the <strong>Dependency agent</strong>, giving guest performance charts and the <strong>Map</strong> of discovered process-to-process connections across VMs, scale sets and Arc servers. <strong>Container insights</strong> runs the agent as a DaemonSet on AKS or Arc-enabled Kubernetes to collect container stdout and stderr into <code>ContainerLogV2</code>, plus inventory and node and pod performance. Prometheus metrics for Kubernetes go to Managed Prometheus instead.',
    tags: ['VM insights', 'Container insights', 'AKS']
  },
  {
    id: 'azure-az305-fc-24',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure Monitor managed service for Prometheus: where do the metrics go, and how do you alert on them?',
    hint: 'Not the Log Analytics workspace.',
    back: 'Prometheus metrics are stored in an <strong>Azure Monitor workspace</strong>, a separate resource from a Log Analytics workspace, and queried with PromQL. <strong>Azure Managed Grafana</strong> connects to it (and to Log Analytics) for dashboards, authenticating with managed identity rather than API keys. Alerting uses <strong>Prometheus rule groups</strong> (recording and alert rules), which route to Azure Monitor action groups. Recommend it for AKS teams that already speak Prometheus and Grafana instead of rebuilding dashboards in workbooks.',
    tags: ['Managed Prometheus', 'Managed Grafana', 'AKS']
  },
  {
    id: 'azure-az305-fc-25',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Service Health vs Resource Health: which one tells you a specific VM is down and whether Azure caused it?',
    hint: 'Platform-wide versus one resource.',
    back: '<strong>Service Health</strong> reports Azure platform events for the regions and services your subscriptions use: active incidents, planned maintenance, health advisories and security advisories, and it drives activity log alerts to notify teams. <strong>Resource Health</strong> reports the current and past health of one resource and distinguishes <strong>platform-initiated</strong> problems (an Azure fault) from <strong>user-initiated</strong> ones (you deallocated the VM). Both are free and both can raise alerts through action groups.',
    tags: ['Service Health', 'Resource Health']
  }
];

export default AZURE_AZ305_FLASHCARDS_1;
