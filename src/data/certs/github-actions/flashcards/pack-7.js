export const GITHUB_ACTIONS_FLASHCARDS_7 = [
  {
    id: "github-actions-fc-151",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub-Hosted Runners vs. Self-Hosted Runners",
    hint: "Managed cloud VMs by GitHub vs. customer-owned and maintained infrastructure.",
    back: "<strong>GitHub-hosted runners</strong> are fully managed, ephemeral virtual machines patched and maintained by GitHub. <strong>Self-hosted runners</strong> are VMs or physical servers you provision, secure, and manage yourself.",
    tags: ["Runners", "GitHub-Hosted", "Self-Hosted", "Infrastructure"]
  },
  {
    id: "github-actions-fc-152",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub-Hosted Runner Specifications (Standard)",
    hint: "2-core vCPU, 7 GB RAM, 14 GB SSD storage for standard Linux runners.",
    back: "Standard GitHub-hosted Linux runners provide <strong>2 vCPUs, 7 GB of RAM, and 14 GB of SSD storage</strong> on fresh virtual machines running the latest Ubuntu LTS.",
    tags: ["Runners", "Specifications", "GitHub-Hosted"]
  },
  {
    id: "github-actions-fc-153",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub-Hosted Larger Runners",
    hint: "High-performance compute instances up to 64 vCPUs with static IP ranges.",
    back: "Organizations on Team/Enterprise plans can configure <strong>Larger Runners</strong> (up to 64 vCPUs, 256 GB RAM, GPUs) with dedicated static IP address ranges suitable for IP allowlisting.",
    tags: ["Larger Runners", "Enterprise", "Static IPs", "Compute"]
  },
  {
    id: "github-actions-fc-154",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Self-Hosted Runner Network Architecture",
    hint: "Outbound-only HTTPS polling connection to GitHub on port 443.",
    back: "The self-hosted runner application establishes an <strong>outbound-only HTTPS long-poll connection on port 443</strong> to GitHub. It requires <strong>no inbound firewall rules or open listening ports</strong>.",
    tags: ["Self-Hosted", "Networking", "Security", "Firewall"]
  },
  {
    id: "github-actions-fc-155",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "Security Risk of Self-Hosted Runners on Public Repositories",
    hint: "Untrusted fork pull requests executing arbitrary malicious code on private networks.",
    back: "GitHub strongly advises <strong>NEVER using self-hosted runners on public repositories</strong>. Anyone can open a fork PR with malicious code that executes directly on your internal network host.",
    tags: ["Security", "Self-Hosted", "Public Repos", "Vulnerability"]
  },
  {
    id: "github-actions-fc-156",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Ephemeral Self-Hosted Runners: --ephemeral Flag",
    hint: "Runners that accept exactly one job and de-register immediately.",
    back: "Configuring runners with <strong><code>./config.sh --ephemeral</code></strong> ensures the runner processes exactly one job before terminating and unregistering, guaranteeing clean, untampered state for subsequent builds.",
    tags: ["Self-Hosted", "Ephemeral", "Security"]
  },
  {
    id: "github-actions-fc-157",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Actions Runner Controller (ARC): Kubernetes Autoscaling",
    hint: "Kubernetes operator dynamically scaling runner pods based on queue demand.",
    back: "<strong>Actions Runner Controller (ARC)</strong> is an open-source Kubernetes operator that automatically scales ephemeral self-hosted runner pods up or down based on incoming workflow job demand.",
    tags: ["ARC", "Kubernetes", "Autoscaling", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-158",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    front: "Self-Hosted Runner Scopes: Repository vs. Organization vs. Enterprise",
    hint: "Registering runners at specific levels in the management hierarchy.",
    back: "Self-hosted runners can be registered at the <strong>Repository level</strong> (used by that repo only), <strong>Organization level</strong> (shared across repos in the org), or <strong>Enterprise level</strong> (shared across multiple orgs).",
    tags: ["Self-Hosted", "Hierarchy", "Governance"]
  },
  {
    id: "github-actions-fc-159",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Groups: Controlling Access to Self-Hosted Runners",
    hint: "Organizing runners into logical pools and restricting which repositories can use them.",
    back: "<strong>Runner Groups</strong> allow organization and enterprise administrators to collect runners into pools and restrict which specific repositories or workflows are authorized to dispatch jobs to them.",
    tags: ["Runner Groups", "Governance", "Security", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-160",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Targeting Runners with Custom Labels",
    hint: "Matching job runs-on tags with runner capabilities.",
    back: "Runners can be tagged with custom labels (e.g. <code>gpu</code>, <code>arm64</code>). In workflows, specify <strong><code>runs-on: [self-hosted, linux, gpu]</code></strong> to require that all listed labels match the runner.",
    tags: ["Labels", "runs-on", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-161",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Default Runner Labels: self-hosted, OS, Architecture",
    hint: "Built-in labels automatically assigned when registering a runner.",
    back: "Every self-hosted runner is automatically assigned three default labels upon registration: <strong><code>self-hosted</code></strong>, the operating system (<code>linux</code>, <code>windows</code>, <code>macos</code>), and the architecture (<code>x64</code>, <code>arm64</code>).",
    tags: ["Labels", "Self-Hosted", "Defaults"]
  },
  {
    id: "github-actions-fc-162",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Communication Security: TLS and Webhook Verification",
    hint: "Cryptographic verification of runner job assignments from GitHub.",
    back: "Communication between self-hosted runners and GitHub is encrypted using TLS 1.2/1.3. Job assignments and tokens are cryptographically verified to prevent unauthorized command execution.",
    tags: ["Security", "TLS", "Encryption", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-163",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Just-In-Time (JIT) Runner Registration",
    hint: "Pre-authenticated ephemeral runner configuration without long-lived tokens.",
    back: "<strong>JIT runner registration</strong> uses the GitHub API (<code>POST /actions/runners/generate-jitconfig</code>) to create an ephemeral, single-use configuration string that expires in minutes, enhancing security in auto-scaled fleets.",
    tags: ["JIT", "Security", "Autoscaling", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-164",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    front: "Installing the Runner as a System Service",
    hint: "Ensuring the self-hosted runner restarts automatically on host reboot.",
    back: "Run <strong><code>sudo ./svc.sh install</code></strong> and <code>sudo ./svc.sh start</code> to register the runner application as a <code>systemd</code> service on Linux, ensuring it restarts automatically on host reboots.",
    tags: ["Self-Hosted", "systemd", "Service", "Operations"]
  },
  {
    id: "github-actions-fc-165",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Software Requirements: Operating Systems Supported",
    hint: "Supported platforms for running the GitHub Actions runner agent.",
    back: "The runner application supports <strong>Ubuntu Linux (x64/ARM64)</strong>, <strong>Red Hat / CentOS</strong>, <strong>Windows Server (x64/ARM64)</strong>, and <strong>macOS (Intel/Apple Silicon)</strong>.",
    tags: ["Runners", "Operating Systems", "Compatibility"]
  },
  {
    id: "github-actions-fc-166",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "Self-Hosted Runner Isolation and Hardening",
    hint: "Preventing one job from leaving persistent backdoors for subsequent jobs.",
    back: "To harden self-hosted runners: use ephemeral VMs/containers, avoid running as root/Administrator, isolate runners in dedicated DMZ network segments, and disallow access to cloud instance metadata APIs.",
    tags: ["Security", "Hardening", "Isolation", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-167",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Automatic Updates and Disabling Updates",
    hint: "Configuring the runner application auto-update behavior.",
    back: "By default, self-hosted runners automatically download and install runner application updates. Pass <strong><code>--disableupdate</code></strong> to prevent automatic updates in strictly controlled enterprise environments.",
    tags: ["Self-Hosted", "Updates", "Operations"]
  },
  {
    id: "github-actions-fc-168",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Status Monitoring in GitHub UI",
    hint: "Idle, Active, and Offline indicators in organization settings.",
    back: "The GitHub UI displays real-time runner status: <strong>Idle</strong> (waiting for jobs), <strong>Active</strong> (executing a job), or <strong>Offline</strong> (not communicating with GitHub for over 14 days).",
    tags: ["Monitoring", "Runners", "Operations"]
  },
  {
    id: "github-actions-fc-169",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Job Queuing Behavior When No Runners Are Available",
    hint: "Queued state timeout limits and behavior.",
    back: "When a job is queued and no matching runners are available, it remains in a <strong>queued</strong> state for up to <strong>24 hours</strong> before GitHub automatically times out and cancels the job.",
    tags: ["Queues", "Timeouts", "Runners"]
  },
  {
    id: "github-actions-fc-170",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Routing Jobs to Selected Runner Groups",
    hint: "Enforcing that specific workflows run exclusively on authorized hardware pools.",
    back: "Runner groups can be configured to allow only specific private repositories or public repositories with authorized labels, preventing unauthorized workloads from utilizing high-cost GPU runners.",
    tags: ["Runner Groups", "Security", "Governance"]
  },
  {
    id: "github-actions-fc-171",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Runner Work Folder: Cleaning the Workspace",
    hint: "Purging workspace directories between jobs.",
    back: "Non-ephemeral runners persist the <code>_work</code> directory. Workflows should include cleanup steps, or runners must be configured with custom hooks (<code>ACTIONS_RUNNER_HOOK_JOB_STARTED</code>) to clean the workspace.",
    tags: ["Workspace", "Cleanup", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-172",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "Self-Hosted Runner Proxy Configuration",
    hint: "Routing runner communication through an HTTP/HTTPS corporate proxy.",
    back: "Configure corporate proxy settings by creating a <strong><code>.proxy</code></strong> file containing the proxy URL (e.g. <code>http://proxy.corp.com:8080</code>) inside the runner installation directory.",
    tags: ["Proxy", "Networking", "Enterprise", "Self-Hosted"]
  },
  {
    id: "github-actions-fc-173",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    front: "GitHub-Hosted Runner IP Address Ranges",
    hint: "CIDR ranges published in the meta API endpoint.",
    back: "GitHub publishes all IP address ranges used by GitHub-hosted runners via the <strong><code>GET https://api.github.com/meta</code></strong> endpoint under the <code>actions</code> key for firewall allowlisting.",
    tags: ["IP Addresses", "Firewall", "Networking", "API"]
  },
  {
    id: "github-actions-fc-174",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    front: "Restricting Self-Hosted Runner Network Egress",
    hint: "Preventing compromised runners from exfiltrating data to arbitrary internet hosts.",
    back: "Place self-hosted runners in a private VPC subnet with strict outbound firewall/security group rules allowing egress only to essential GitHub domains and required internal deployment targets.",
    tags: ["Security", "Firewall", "Egress", "Networking"]
  },
  {
    id: "github-actions-fc-175",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    front: "De-Registering a Self-Hosted Runner",
    hint: "Removing a retired runner from the repository or organization pool.",
    back: "Execute <strong><code>./config.sh remove --token &lt;TOKEN&gt;</code></strong> on the runner machine, or click 'Remove' in the GitHub UI to cleanly de-register a runner from the pool.",
    tags: ["Self-Hosted", "De-registration", "Operations"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_7;
