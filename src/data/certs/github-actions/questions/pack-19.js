export const GITHUB_ACTIONS_QUESTIONS_19 = [
  {
    id: "gh-200-451",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Runner Architecture to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Comparing ephemeral GitHub-hosted runners against customer-managed self-hosted runners is under consideration.",
    options: [
      { id: 'A', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." },
      { id: 'B', text: "Run all workflows on public shared web servers." },
      { id: 'C', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'D', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture", "Runner Types", "Dr Failover"]
  },
  {
    id: "gh-200-452",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Runner Architecture to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Comparing ephemeral GitHub-hosted runners against customer-managed self-hosted runners is under consideration.",
    options: [
      { id: 'A', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'B', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." },
      { id: 'C', text: "Run all workflows on public shared web servers." },
      { id: 'D', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture", "Runner Types", "High Load Scale"]
  },
  {
    id: "gh-200-453",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Runner Architecture to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Comparing ephemeral GitHub-hosted runners against customer-managed self-hosted runners is under consideration.",
    options: [
      { id: 'A', text: "Run all workflows on public shared web servers." },
      { id: 'B', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." },
      { id: 'C', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'D', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture", "Runner Types", "Security Compliance"]
  },
  {
    id: "gh-200-454",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Runner Architecture to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Comparing ephemeral GitHub-hosted runners against customer-managed self-hosted runners is under consideration.",
    options: [
      { id: 'A', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." },
      { id: 'B', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." },
      { id: 'C', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'D', text: "Run all workflows on public shared web servers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture", "Runner Types", "Hybrid Migration"]
  },
  {
    id: "gh-200-455",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Runner Architecture to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Comparing ephemeral GitHub-hosted runners against customer-managed self-hosted runners is under consideration.",
    options: [
      { id: 'A', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." },
      { id: 'B', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." },
      { id: 'C', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'D', text: "Run all workflows on public shared web servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture", "Runner Types", "Resilience Failure"]
  },
  {
    id: "gh-200-456",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Autoscaling Runners to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Deploying ephemeral auto-scaling runners on Kubernetes using Actions Runner Controller (ARC) is under consideration.",
    options: [
      { id: 'A', text: "Manually boot and configure new VMs whenever build queues back up." },
      { id: 'B', text: "Disable self-hosted runners and use public runners exclusively." },
      { id: 'C', text: "Maintain a static pool of 10 persistent virtual machines with shared state." },
      { id: 'D', text: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners", "Actions Runner Controller", "Dr Failover"]
  },
  {
    id: "gh-200-457",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Autoscaling Runners to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Deploying ephemeral auto-scaling runners on Kubernetes using Actions Runner Controller (ARC) is under consideration.",
    options: [
      { id: 'A', text: "Manually boot and configure new VMs whenever build queues back up." },
      { id: 'B', text: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods." },
      { id: 'C', text: "Disable self-hosted runners and use public runners exclusively." },
      { id: 'D', text: "Maintain a static pool of 10 persistent virtual machines with shared state." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners", "Actions Runner Controller", "High Load Scale"]
  },
  {
    id: "gh-200-458",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Autoscaling Runners to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Deploying ephemeral auto-scaling runners on Kubernetes using Actions Runner Controller (ARC) is under consideration.",
    options: [
      { id: 'A', text: "Disable self-hosted runners and use public runners exclusively." },
      { id: 'B', text: "Maintain a static pool of 10 persistent virtual machines with shared state." },
      { id: 'C', text: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods." },
      { id: 'D', text: "Manually boot and configure new VMs whenever build queues back up." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners", "Actions Runner Controller", "Security Compliance"]
  },
  {
    id: "gh-200-459",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Autoscaling Runners to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Deploying ephemeral auto-scaling runners on Kubernetes using Actions Runner Controller (ARC) is under consideration.",
    options: [
      { id: 'A', text: "Manually boot and configure new VMs whenever build queues back up." },
      { id: 'B', text: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods." },
      { id: 'C', text: "Disable self-hosted runners and use public runners exclusively." },
      { id: 'D', text: "Maintain a static pool of 10 persistent virtual machines with shared state." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners", "Actions Runner Controller", "Hybrid Migration"]
  },
  {
    id: "gh-200-460",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Autoscaling Runners to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Deploying ephemeral auto-scaling runners on Kubernetes using Actions Runner Controller (ARC) is under consideration.",
    options: [
      { id: 'A', text: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods." },
      { id: 'B', text: "Disable self-hosted runners and use public runners exclusively." },
      { id: 'C', text: "Manually boot and configure new VMs whenever build queues back up." },
      { id: 'D', text: "Maintain a static pool of 10 persistent virtual machines with shared state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners", "Actions Runner Controller", "Resilience Failure"]
  },
  {
    id: "gh-200-461",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Runner Governance to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Restricting runner pools to specific organizations and private repositories using Runner Groups is under consideration.",
    options: [
      { id: 'A', text: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories." },
      { id: 'B', text: "Make self-hosted runners available to all public repositories in the enterprise." },
      { id: 'C', text: "Allow any repository to use any runner without authorization." },
      { id: 'D', text: "Share the runner registration token on public wikis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance", "Runner Groups", "Dr Failover"]
  },
  {
    id: "gh-200-462",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Runner Governance to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Restricting runner pools to specific organizations and private repositories using Runner Groups is under consideration.",
    options: [
      { id: 'A', text: "Allow any repository to use any runner without authorization." },
      { id: 'B', text: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories." },
      { id: 'C', text: "Make self-hosted runners available to all public repositories in the enterprise." },
      { id: 'D', text: "Share the runner registration token on public wikis." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance", "Runner Groups", "High Load Scale"]
  },
  {
    id: "gh-200-463",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Runner Governance to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Restricting runner pools to specific organizations and private repositories using Runner Groups is under consideration.",
    options: [
      { id: 'A', text: "Share the runner registration token on public wikis." },
      { id: 'B', text: "Make self-hosted runners available to all public repositories in the enterprise." },
      { id: 'C', text: "Allow any repository to use any runner without authorization." },
      { id: 'D', text: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance", "Runner Groups", "Security Compliance"]
  },
  {
    id: "gh-200-464",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Runner Governance to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Restricting runner pools to specific organizations and private repositories using Runner Groups is under consideration.",
    options: [
      { id: 'A', text: "Allow any repository to use any runner without authorization." },
      { id: 'B', text: "Make self-hosted runners available to all public repositories in the enterprise." },
      { id: 'C', text: "Share the runner registration token on public wikis." },
      { id: 'D', text: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance", "Runner Groups", "Hybrid Migration"]
  },
  {
    id: "gh-200-465",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Runner Governance to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Restricting runner pools to specific organizations and private repositories using Runner Groups is under consideration.",
    options: [
      { id: 'A', text: "Allow any repository to use any runner without authorization." },
      { id: 'B', text: "Share the runner registration token on public wikis." },
      { id: 'C', text: "Make self-hosted runners available to all public repositories in the enterprise." },
      { id: 'D', text: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance", "Runner Groups", "Resilience Failure"]
  },
  {
    id: "gh-200-466",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates OIDC Authentication to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Authenticating to AWS, Azure, and GCP using OIDC tokens without static credentials is under consideration.",
    options: [
      { id: 'A', text: "Create a permanent IAM user with AdministratorAccess and paste access keys in repository secrets." },
      { id: 'B', text: "Commit AWS access key IDs directly to the workflow YAML file." },
      { id: 'C', text: "Disable authentication on AWS APIs." },
      { id: 'D', text: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication", "OIDC Keyless Auth", "Dr Failover"]
  },
  {
    id: "gh-200-467",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates OIDC Authentication to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Authenticating to AWS, Azure, and GCP using OIDC tokens without static credentials is under consideration.",
    options: [
      { id: 'A', text: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`." },
      { id: 'B', text: "Disable authentication on AWS APIs." },
      { id: 'C', text: "Create a permanent IAM user with AdministratorAccess and paste access keys in repository secrets." },
      { id: 'D', text: "Commit AWS access key IDs directly to the workflow YAML file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication", "OIDC Keyless Auth", "High Load Scale"]
  },
  {
    id: "gh-200-468",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates OIDC Authentication to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Authenticating to AWS, Azure, and GCP using OIDC tokens without static credentials is under consideration.",
    options: [
      { id: 'A', text: "Create a permanent IAM user with AdministratorAccess and paste access keys in repository secrets." },
      { id: 'B', text: "Disable authentication on AWS APIs." },
      { id: 'C', text: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`." },
      { id: 'D', text: "Commit AWS access key IDs directly to the workflow YAML file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication", "OIDC Keyless Auth", "Security Compliance"]
  },
  {
    id: "gh-200-469",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates OIDC Authentication to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Authenticating to AWS, Azure, and GCP using OIDC tokens without static credentials is under consideration.",
    options: [
      { id: 'A', text: "Create a permanent IAM user with AdministratorAccess and paste access keys in repository secrets." },
      { id: 'B', text: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`." },
      { id: 'C', text: "Disable authentication on AWS APIs." },
      { id: 'D', text: "Commit AWS access key IDs directly to the workflow YAML file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication", "OIDC Keyless Auth", "Hybrid Migration"]
  },
  {
    id: "gh-200-470",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates OIDC Authentication to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Authenticating to AWS, Azure, and GCP using OIDC tokens without static credentials is under consideration.",
    options: [
      { id: 'A', text: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`." },
      { id: 'B', text: "Commit AWS access key IDs directly to the workflow YAML file." },
      { id: 'C', text: "Create a permanent IAM user with AdministratorAccess and paste access keys in repository secrets." },
      { id: 'D', text: "Disable authentication on AWS APIs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication", "OIDC Keyless Auth", "Resilience Failure"]
  },
  {
    id: "gh-200-471",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer evaluates Token Permissions to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives? Configuring fine-grained permissions block in workflows (contents: read, id-token: write) is under consideration.",
    options: [
      { id: 'A', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'B', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across all workflows." },
      { id: 'C', text: "Disable permissions entirely in repository settings." },
      { id: 'D', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions", "GITHUB_TOKEN Permissions", "Dr Failover"]
  },
  {
    id: "gh-200-472",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer evaluates Token Permissions to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency? Configuring fine-grained permissions block in workflows (contents: read, id-token: write) is under consideration.",
    options: [
      { id: 'A', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'B', text: "Disable permissions entirely in repository settings." },
      { id: 'C', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across all workflows." },
      { id: 'D', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions", "GITHUB_TOKEN Permissions", "High Load Scale"]
  },
  {
    id: "gh-200-473",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer evaluates Token Permissions to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls? Configuring fine-grained permissions block in workflows (contents: read, id-token: write) is under consideration.",
    options: [
      { id: 'A', text: "Disable permissions entirely in repository settings." },
      { id: 'B', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'C', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across all workflows." },
      { id: 'D', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions", "GITHUB_TOKEN Permissions", "Security Compliance"]
  },
  {
    id: "gh-200-474",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer evaluates Token Permissions to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction? Configuring fine-grained permissions block in workflows (contents: read, id-token: write) is under consideration.",
    options: [
      { id: 'A', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'B', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across all workflows." },
      { id: 'C', text: "Disable permissions entirely in repository settings." },
      { id: 'D', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions", "GITHUB_TOKEN Permissions", "Hybrid Migration"]
  },
  {
    id: "gh-200-475",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer evaluates Token Permissions to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability? Configuring fine-grained permissions block in workflows (contents: read, id-token: write) is under consideration.",
    options: [
      { id: 'A', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." },
      { id: 'B', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'C', text: "Disable permissions entirely in repository settings." },
      { id: 'D', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across all workflows." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions", "GITHUB_TOKEN Permissions", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_19;
