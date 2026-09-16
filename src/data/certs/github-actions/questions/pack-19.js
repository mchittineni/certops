export const GITHUB_ACTIONS_QUESTIONS_19 = [
  {
    id: "gh-200-451",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Run all workflows on public shared web servers." },
      { id: 'B', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'C', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." },
      { id: 'D', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture","Runner Types","Dr Failover"]
  },
  {
    id: "gh-200-452",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." },
      { id: 'B', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'C', text: "Run all workflows on public shared web servers." },
      { id: 'D', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture","Runner Types","High Load Scale"]
  },
  {
    id: "gh-200-453",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Disable workflows and execute builds manually on developer workstations." },
      { id: 'B', text: "Run all workflows on public shared web servers." },
      { id: 'C', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." },
      { id: 'D', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture","Runner Types","Security Compliance"]
  },
  {
    id: "gh-200-454",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." },
      { id: 'B', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." },
      { id: 'C', text: "Run all workflows on public shared web servers." },
      { id: 'D', text: "Disable workflows and execute builds manually on developer workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture","Runner Types","Hybrid Migration"]
  },
  {
    id: "gh-200-455",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runners vs GitHub-Hosted Runners: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to select a runner architecture for workloads requiring specialized GPU hardware and direct connectivity to internal private on-premises networks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network." },
      { id: 'B', text: "Use GitHub-hosted Ubuntu runners which run in public cloud environments without private network peering." },
      { id: 'C', text: "Run all workflows on public shared web servers." },
      { id: 'D', text: "Disable workflows and execute builds manually on developer workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Self-Hosted Runners on customer-managed virtual machines inside the private network. GitHub-hosted runners provide clean, ephemeral virtual machines managed by GitHub with pre-installed software. Self-hosted runners run on customer infrastructure, offering custom hardware (GPUs, ARM), persistent caching, direct private network connectivity, and zero per-minute billing fees.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners",
    tags: ["Runner Architecture","Runner Types","Resilience Failure"]
  },
  {
    id: "gh-200-456",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Keep a static pool of ten persistent runner VMs registered to the group." },
      { id: 'B', text: "Run Actions Runner Controller with an `AutoScalingRunnerSet`." },
      { id: 'C', text: "Move the jobs to GitHub-hosted larger runners and retire the self-hosted pool." },
      { id: 'D', text: "Add runner VMs by hand whenever the queue depth grows beyond a threshold." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners","Actions Runner Controller","Dr Failover"]
  },
  {
    id: "gh-200-457",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Move the jobs to GitHub-hosted larger runners and retire the self-hosted pool." },
      { id: 'B', text: "Add runner VMs by hand whenever the queue depth grows beyond a threshold." },
      { id: 'C', text: "Keep a static pool of ten persistent runner VMs registered to the group." },
      { id: 'D', text: "Run Actions Runner Controller with an `AutoScalingRunnerSet`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners","Actions Runner Controller","High Load Scale"]
  },
  {
    id: "gh-200-458",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Add runner VMs by hand whenever the queue depth grows beyond a threshold." },
      { id: 'B', text: "Keep a static pool of ten persistent runner VMs registered to the group." },
      { id: 'C', text: "Move the jobs to GitHub-hosted larger runners and retire the self-hosted pool." },
      { id: 'D', text: "Run Actions Runner Controller with an `AutoScalingRunnerSet`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners","Actions Runner Controller","Security Compliance"]
  },
  {
    id: "gh-200-459",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Move the jobs to GitHub-hosted larger runners and retire the self-hosted pool." },
      { id: 'B', text: "Add runner VMs by hand whenever the queue depth grows beyond a threshold." },
      { id: 'C', text: "Keep a static pool of ten persistent runner VMs registered to the group." },
      { id: 'D', text: "Run Actions Runner Controller with an `AutoScalingRunnerSet`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners","Actions Runner Controller","Hybrid Migration"]
  },
  {
    id: "gh-200-460",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Ephemeral Self-Hosted Runners with Autoscaling (ARC): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to scale self-hosted runner capacity dynamically on Kubernetes based on workflow queue demand while ensuring clean, ephemeral runner environments.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Run Actions Runner Controller with an `AutoScalingRunnerSet`." },
      { id: 'B', text: "Keep a static pool of ten persistent runner VMs registered to the group." },
      { id: 'C', text: "Add runner VMs by hand whenever the queue depth grows beyond a threshold." },
      { id: 'D', text: "Move the jobs to GitHub-hosted larger runners and retire the self-hosted pool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Actions Runner Controller (ARC) on Kubernetes configured with `AutoScalingRunnerSet` and ephemeral runner pods. Actions Runner Controller (ARC) is a Kubernetes operator that orchestrates self-hosted runners. It monitors GitHub Actions workflow queues and spins up ephemeral runner pods on-demand, terminating each pod immediately after a single job completes to prevent cross-job contamination.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["Autoscaling Runners","Actions Runner Controller","Resilience Failure"]
  },
  {
    id: "gh-200-461",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Put the runners in a runner group limited to the approved repos." },
      { id: 'B', text: "Put the runners at organization level, available to every repository in it." },
      { id: 'C', text: "Register the runners per repository so only that repository can use them." },
      { id: 'D', text: "Put the runners in a runner group open to all repositories, audited after use." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance","Runner Groups","Dr Failover"]
  },
  {
    id: "gh-200-462",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Register the runners per repository so only that repository can use them." },
      { id: 'B', text: "Put the runners in a runner group open to all repositories, audited after use." },
      { id: 'C', text: "Put the runners in a runner group limited to the approved repos." },
      { id: 'D', text: "Put the runners at organization level, available to every repository in it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance","Runner Groups","High Load Scale"]
  },
  {
    id: "gh-200-463",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Put the runners in a runner group open to all repositories, audited after use." },
      { id: 'B', text: "Put the runners at organization level, available to every repository in it." },
      { id: 'C', text: "Put the runners in a runner group limited to the approved repos." },
      { id: 'D', text: "Register the runners per repository so only that repository can use them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance","Runner Groups","Security Compliance"]
  },
  {
    id: "gh-200-464",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Put the runners in a runner group limited to the approved repos." },
      { id: 'B', text: "Put the runners at organization level, available to every repository in it." },
      { id: 'C', text: "Register the runners per repository so only that repository can use them." },
      { id: 'D', text: "Put the runners in a runner group open to all repositories, audited after use." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance","Runner Groups","Hybrid Migration"]
  },
  {
    id: "gh-200-465",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Self-Hosted Runner Groups and Access Control: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to prevent untrusted public or external repositories from executing workflows on internal enterprise self-hosted runners.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Put the runners in a runner group limited to the approved repos." },
      { id: 'B', text: "Put the runners at organization level, available to every repository in it." },
      { id: 'C', text: "Register the runners per repository so only that repository can use them." },
      { id: 'D', text: "Put the runners in a runner group open to all repositories, audited after use." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize self-hosted runners into a Runner Group at the organization or enterprise level and restrict access to approved private repositories. Runner Groups govern access to self-hosted runners. Organization administrators organize runners into groups and grant access only to designated private repositories, preventing untrusted code (such as pull requests on public repositories) from running on internal infrastructure.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups",
    tags: ["Runner Governance","Runner Groups","Resilience Failure"]
  },
  {
    id: "gh-200-466",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Store a long-lived IAM access key in the repository's secrets and configure it for each job." },
      { id: 'B', text: "Store the IAM access key in an organization secret scoped to the deploy repos." },
      { id: 'C', text: "Trust GitHub's OIDC provider in the IAM role and use `role-to-assume` in the workflow." },
      { id: 'D', text: "Create an IAM user with the deploy policy and rotate its keys on a schedule." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication","OIDC Keyless Auth","Dr Failover"]
  },
  {
    id: "gh-200-467",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Trust GitHub's OIDC provider in the IAM role and use `role-to-assume` in the workflow." },
      { id: 'B', text: "Store a long-lived IAM access key in the repository's secrets and configure it for each job." },
      { id: 'C', text: "Store the IAM access key in an organization secret scoped to the deploy repos." },
      { id: 'D', text: "Create an IAM user with the deploy policy and rotate its keys on a schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication","OIDC Keyless Auth","High Load Scale"]
  },
  {
    id: "gh-200-468",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Store the IAM access key in an organization secret scoped to the deploy repos." },
      { id: 'B', text: "Store a long-lived IAM access key in the repository's secrets and configure it for each job." },
      { id: 'C', text: "Create an IAM user with the deploy policy and rotate its keys on a schedule." },
      { id: 'D', text: "Trust GitHub's OIDC provider in the IAM role and use `role-to-assume` in the workflow." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication","OIDC Keyless Auth","Security Compliance"]
  },
  {
    id: "gh-200-469",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Trust GitHub's OIDC provider in the IAM role and use `role-to-assume` in the workflow." },
      { id: 'B', text: "Create an IAM user with the deploy policy and rotate its keys on a schedule." },
      { id: 'C', text: "Store a long-lived IAM access key in the repository's secrets and configure it for each job." },
      { id: 'D', text: "Store the IAM access key in an organization secret scoped to the deploy repos." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication","OIDC Keyless Auth","Hybrid Migration"]
  },
  {
    id: "gh-200-470",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "OpenID Connect (OIDC) Keyless Cloud Authentication: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to authenticate a GitHub Actions deployment workflow to AWS without storing long-lived IAM user access keys in repository secrets.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Trust GitHub's OIDC provider in the IAM role and use `role-to-assume` in the workflow." },
      { id: 'B', text: "Create an IAM user with the deploy policy and rotate its keys on a schedule." },
      { id: 'C', text: "Store a long-lived IAM access key in the repository's secrets and configure it for each job." },
      { id: 'D', text: "Store the IAM access key in an organization secret scoped to the deploy repos." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an OpenID Connect (OIDC) identity provider in AWS IAM trust policy and use `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub Actions OIDC allows workflows to exchange short-lived OIDC tokens for temporary cloud credentials (AWS IAM roles, Azure Managed Identities, GCP service accounts). This eliminates the need to create, rotate, and manage risky permanent secret access keys.",
    referenceUrl: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
    tags: ["OIDC Authentication","OIDC Keyless Auth","Resilience Failure"]
  },
  {
    id: "gh-200-471",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'B', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across every one of the workflows." },
      { id: 'C', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." },
      { id: 'D', text: "Disable permissions entirely in the repository's settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions","GITHUB_TOKEN Permissions","Dr Failover"]
  },
  {
    id: "gh-200-472",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'B', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." },
      { id: 'C', text: "Disable permissions entirely in the repository's settings." },
      { id: 'D', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across every one of the workflows." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions","GITHUB_TOKEN Permissions","High Load Scale"]
  },
  {
    id: "gh-200-473",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." },
      { id: 'B', text: "Disable permissions entirely in the repository's settings." },
      { id: 'C', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'D', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across every one of the workflows." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions","GITHUB_TOKEN Permissions","Security Compliance"]
  },
  {
    id: "gh-200-474",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." },
      { id: 'B', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across every one of the workflows." },
      { id: 'C', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." },
      { id: 'D', text: "Disable permissions entirely in the repository's settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions","GITHUB_TOKEN Permissions","Hybrid Migration"]
  },
  {
    id: "gh-200-475",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d4",
    domainName: "Manage enterprise runners, secrets, and governance",
    title: "Least-Privilege GITHUB_TOKEN Permissions (permissions:): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to enforce the principle of least privilege on the automatic `GITHUB_TOKEN` so a workflow can only read repository contents and request OIDC tokens.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Disable permissions entirely in the repository's settings." },
      { id: 'B', text: "Use a personal access token with admin privileges instead of GITHUB_TOKEN." },
      { id: 'C', text: "Grant full `write-all` permissions to the GITHUB_TOKEN across every one of the workflows." },
      { id: 'D', text: "Specify `permissions: contents: read, id-token: write` at the workflow or job level." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `permissions: contents: read, id-token: write` at the workflow or job level. The `permissions:` block controls the API privileges granted to the automatic `GITHUB_TOKEN`. By setting strict granular permissions (e.g., `contents: read`, `pull-requests: write`, `id-token: write`), an attacker who exploits a compromised build step cannot alter repository settings or write to unauthorized branches.",
    referenceUrl: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs",
    tags: ["Token Permissions","GITHUB_TOKEN Permissions","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_19;
