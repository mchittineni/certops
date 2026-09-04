export const CNCF_CGOA_QUESTIONS_20 = [
  {
    id: "cncf-cgoa-476",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Git Repository Access Authentication: SSH Keys vs Deploy Keys: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Repo Authentication to grant an in-cluster GitOps controller access to clone a private GitHub repository while enforcing strict least privilege.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Authenticating GitOps controllers to private repositories using read-only Deploy Keys and PATs is under consideration.",
    options: [
      { id: 'A', text: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository." },
      { id: 'B', text: "Generate a personal access token with organization-wide administrator privileges on a developer account." },
      { id: 'C', text: "Make the private company repository public to avoid authentication." },
      { id: 'D', text: "Share the corporate GitHub organization owner account credentials with the controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository. GitOps controllers authenticate to private repositories using SSH keys or HTTPS tokens. Best practice enforces least privilege by using repository-specific read-only Deploy Keys. This ensures that even if the cluster controller is compromised, an attacker cannot write to Git or access other repositories.",
    referenceUrl: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys",
    tags: ["Repo Authentication", "Deploy Keys", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-477",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Git Repository Access Authentication: SSH Keys vs Deploy Keys: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Repo Authentication to grant an in-cluster GitOps controller access to clone a private GitHub repository while enforcing strict least privilege.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Authenticating GitOps controllers to private repositories using read-only Deploy Keys and PATs is under consideration.",
    options: [
      { id: 'A', text: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository." },
      { id: 'B', text: "Generate a personal access token with organization-wide administrator privileges on a developer account." },
      { id: 'C', text: "Make the private company repository public to avoid authentication." },
      { id: 'D', text: "Share the corporate GitHub organization owner account credentials with the controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository. GitOps controllers authenticate to private repositories using SSH keys or HTTPS tokens. Best practice enforces least privilege by using repository-specific read-only Deploy Keys. This ensures that even if the cluster controller is compromised, an attacker cannot write to Git or access other repositories.",
    referenceUrl: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys",
    tags: ["Repo Authentication", "Deploy Keys", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-478",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Git Repository Access Authentication: SSH Keys vs Deploy Keys: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Repo Authentication to grant an in-cluster GitOps controller access to clone a private GitHub repository while enforcing strict least privilege.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Authenticating GitOps controllers to private repositories using read-only Deploy Keys and PATs is under consideration.",
    options: [
      { id: 'A', text: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository." },
      { id: 'B', text: "Generate a personal access token with organization-wide administrator privileges on a developer account." },
      { id: 'C', text: "Make the private company repository public to avoid authentication." },
      { id: 'D', text: "Share the corporate GitHub organization owner account credentials with the controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository. GitOps controllers authenticate to private repositories using SSH keys or HTTPS tokens. Best practice enforces least privilege by using repository-specific read-only Deploy Keys. This ensures that even if the cluster controller is compromised, an attacker cannot write to Git or access other repositories.",
    referenceUrl: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys",
    tags: ["Repo Authentication", "Deploy Keys", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-479",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Git Repository Access Authentication: SSH Keys vs Deploy Keys: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Repo Authentication to grant an in-cluster GitOps controller access to clone a private GitHub repository while enforcing strict least privilege.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Authenticating GitOps controllers to private repositories using read-only Deploy Keys and PATs is under consideration.",
    options: [
      { id: 'A', text: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository." },
      { id: 'B', text: "Generate a personal access token with organization-wide administrator privileges on a developer account." },
      { id: 'C', text: "Make the private company repository public to avoid authentication." },
      { id: 'D', text: "Share the corporate GitHub organization owner account credentials with the controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository. GitOps controllers authenticate to private repositories using SSH keys or HTTPS tokens. Best practice enforces least privilege by using repository-specific read-only Deploy Keys. This ensures that even if the cluster controller is compromised, an attacker cannot write to Git or access other repositories.",
    referenceUrl: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys",
    tags: ["Repo Authentication", "Deploy Keys", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-480",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Git Repository Access Authentication: SSH Keys vs Deploy Keys: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Repo Authentication to grant an in-cluster GitOps controller access to clone a private GitHub repository while enforcing strict least privilege.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Authenticating GitOps controllers to private repositories using read-only Deploy Keys and PATs is under consideration.",
    options: [
      { id: 'A', text: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository." },
      { id: 'B', text: "Generate a personal access token with organization-wide administrator privileges on a developer account." },
      { id: 'C', text: "Make the private company repository public to avoid authentication." },
      { id: 'D', text: "Share the corporate GitHub organization owner account credentials with the controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a repository-specific, read-only SSH Deploy Key (or fine-grained Personal Access Token) with access restricted strictly to that repository. GitOps controllers authenticate to private repositories using SSH keys or HTTPS tokens. Best practice enforces least privilege by using repository-specific read-only Deploy Keys. This ensures that even if the cluster controller is compromised, an attacker cannot write to Git or access other repositories.",
    referenceUrl: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys",
    tags: ["Repo Authentication", "Deploy Keys", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-481",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "RBAC for GitOps Engines: In-Cluster Controller Permissions: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Controller RBAC to prevent an in-cluster GitOps controller from accidentally or maliciously modifying cluster-wide security policies or kube-system resources.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Configuring scoped ServiceAccounts and ClusterRoles for GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces." },
      { id: 'B', text: "Grant `cluster-admin` wildcard (`*`) access to all resources and API groups across the entire cluster unconditionally." },
      { id: 'C', text: "Run the controller under the default namespace ServiceAccount with no restrictions." },
      { id: 'D', text: "Disable Kubernetes RBAC authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces. By default, GitOps controllers often request broad `cluster-admin` privileges. Hardening the platform requires scoping controller permissions: restricting management to designated application namespaces and denying permissions to mutate sensitive security infrastructure (e.g., PSPs, admission webhooks, kube-system).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Controller RBAC", "Controller RBAC", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-482",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "RBAC for GitOps Engines: In-Cluster Controller Permissions: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Controller RBAC to prevent an in-cluster GitOps controller from accidentally or maliciously modifying cluster-wide security policies or kube-system resources.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Configuring scoped ServiceAccounts and ClusterRoles for GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces." },
      { id: 'B', text: "Grant `cluster-admin` wildcard (`*`) access to all resources and API groups across the entire cluster unconditionally." },
      { id: 'C', text: "Run the controller under the default namespace ServiceAccount with no restrictions." },
      { id: 'D', text: "Disable Kubernetes RBAC authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces. By default, GitOps controllers often request broad `cluster-admin` privileges. Hardening the platform requires scoping controller permissions: restricting management to designated application namespaces and denying permissions to mutate sensitive security infrastructure (e.g., PSPs, admission webhooks, kube-system).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Controller RBAC", "Controller RBAC", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-483",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "RBAC for GitOps Engines: In-Cluster Controller Permissions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Controller RBAC to prevent an in-cluster GitOps controller from accidentally or maliciously modifying cluster-wide security policies or kube-system resources.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Configuring scoped ServiceAccounts and ClusterRoles for GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces." },
      { id: 'B', text: "Grant `cluster-admin` wildcard (`*`) access to all resources and API groups across the entire cluster unconditionally." },
      { id: 'C', text: "Run the controller under the default namespace ServiceAccount with no restrictions." },
      { id: 'D', text: "Disable Kubernetes RBAC authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces. By default, GitOps controllers often request broad `cluster-admin` privileges. Hardening the platform requires scoping controller permissions: restricting management to designated application namespaces and denying permissions to mutate sensitive security infrastructure (e.g., PSPs, admission webhooks, kube-system).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Controller RBAC", "Controller RBAC", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-484",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "RBAC for GitOps Engines: In-Cluster Controller Permissions: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Controller RBAC to prevent an in-cluster GitOps controller from accidentally or maliciously modifying cluster-wide security policies or kube-system resources.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Configuring scoped ServiceAccounts and ClusterRoles for GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces." },
      { id: 'B', text: "Grant `cluster-admin` wildcard (`*`) access to all resources and API groups across the entire cluster unconditionally." },
      { id: 'C', text: "Run the controller under the default namespace ServiceAccount with no restrictions." },
      { id: 'D', text: "Disable Kubernetes RBAC authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces. By default, GitOps controllers often request broad `cluster-admin` privileges. Hardening the platform requires scoping controller permissions: restricting management to designated application namespaces and denying permissions to mutate sensitive security infrastructure (e.g., PSPs, admission webhooks, kube-system).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Controller RBAC", "Controller RBAC", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-485",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "RBAC for GitOps Engines: In-Cluster Controller Permissions: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Controller RBAC to prevent an in-cluster GitOps controller from accidentally or maliciously modifying cluster-wide security policies or kube-system resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Configuring scoped ServiceAccounts and ClusterRoles for GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces." },
      { id: 'B', text: "Grant `cluster-admin` wildcard (`*`) access to all resources and API groups across the entire cluster unconditionally." },
      { id: 'C', text: "Run the controller under the default namespace ServiceAccount with no restrictions." },
      { id: 'D', text: "Disable Kubernetes RBAC authorization entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bind the GitOps controller ServiceAccount to namespace-scoped Roles or restricted ClusterRoles that prohibit modifying cluster-admin bindings or core namespaces. By default, GitOps controllers often request broad `cluster-admin` privileges. Hardening the platform requires scoping controller permissions: restricting management to designated application namespaces and denying permissions to mutate sensitive security infrastructure (e.g., PSPs, admission webhooks, kube-system).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Controller RBAC", "Controller RBAC", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-486",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Validating Manifests in Pre-Commit with Policy Engines: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Pre-Commit Validation to catch syntax errors, deprecated Kubernetes API versions, and security violations in GitOps manifests before pull requests are merged.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Auditing manifests pre-merge using OPA Conftest, Kyverno CLI, and Kubeconform is under consideration.",
    options: [
      { id: 'A', text: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge." },
      { id: 'B', text: "Rely on the in-cluster GitOps controller to fail after changes are merged to production." },
      { id: 'C', text: "Wait for pods to crash in production before diagnosing manifest errors." },
      { id: 'D', text: "Disable CI validation checks to speed up developer pull requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge. Shifting security left in GitOps requires validating manifests before they are merged into the source of truth. Running schema validators (`kubeconform`) and policy checkers (`conftest`, `checkov`) in CI ensures invalid YAML, deprecated APIs, or privileged security contexts are rejected before hitting the cluster.",
    referenceUrl: "https://www.openpolicyagent.org/docs/latest/conftest/",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-487",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Validating Manifests in Pre-Commit with Policy Engines: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Pre-Commit Validation to catch syntax errors, deprecated Kubernetes API versions, and security violations in GitOps manifests before pull requests are merged.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Auditing manifests pre-merge using OPA Conftest, Kyverno CLI, and Kubeconform is under consideration.",
    options: [
      { id: 'A', text: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge." },
      { id: 'B', text: "Rely on the in-cluster GitOps controller to fail after changes are merged to production." },
      { id: 'C', text: "Wait for pods to crash in production before diagnosing manifest errors." },
      { id: 'D', text: "Disable CI validation checks to speed up developer pull requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge. Shifting security left in GitOps requires validating manifests before they are merged into the source of truth. Running schema validators (`kubeconform`) and policy checkers (`conftest`, `checkov`) in CI ensures invalid YAML, deprecated APIs, or privileged security contexts are rejected before hitting the cluster.",
    referenceUrl: "https://www.openpolicyagent.org/docs/latest/conftest/",
    tags: ["Pre-Commit Validation", "Conftest Validation", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-488",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Validating Manifests in Pre-Commit with Policy Engines: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Pre-Commit Validation to catch syntax errors, deprecated Kubernetes API versions, and security violations in GitOps manifests before pull requests are merged.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Auditing manifests pre-merge using OPA Conftest, Kyverno CLI, and Kubeconform is under consideration.",
    options: [
      { id: 'A', text: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge." },
      { id: 'B', text: "Rely on the in-cluster GitOps controller to fail after changes are merged to production." },
      { id: 'C', text: "Wait for pods to crash in production before diagnosing manifest errors." },
      { id: 'D', text: "Disable CI validation checks to speed up developer pull requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge. Shifting security left in GitOps requires validating manifests before they are merged into the source of truth. Running schema validators (`kubeconform`) and policy checkers (`conftest`, `checkov`) in CI ensures invalid YAML, deprecated APIs, or privileged security contexts are rejected before hitting the cluster.",
    referenceUrl: "https://www.openpolicyagent.org/docs/latest/conftest/",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-489",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Validating Manifests in Pre-Commit with Policy Engines: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Pre-Commit Validation to catch syntax errors, deprecated Kubernetes API versions, and security violations in GitOps manifests before pull requests are merged.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Auditing manifests pre-merge using OPA Conftest, Kyverno CLI, and Kubeconform is under consideration.",
    options: [
      { id: 'A', text: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge." },
      { id: 'B', text: "Rely on the in-cluster GitOps controller to fail after changes are merged to production." },
      { id: 'C', text: "Wait for pods to crash in production before diagnosing manifest errors." },
      { id: 'D', text: "Disable CI validation checks to speed up developer pull requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge. Shifting security left in GitOps requires validating manifests before they are merged into the source of truth. Running schema validators (`kubeconform`) and policy checkers (`conftest`, `checkov`) in CI ensures invalid YAML, deprecated APIs, or privileged security contexts are rejected before hitting the cluster.",
    referenceUrl: "https://www.openpolicyagent.org/docs/latest/conftest/",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-490",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Validating Manifests in Pre-Commit with Policy Engines: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Pre-Commit Validation to catch syntax errors, deprecated Kubernetes API versions, and security violations in GitOps manifests before pull requests are merged.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Auditing manifests pre-merge using OPA Conftest, Kyverno CLI, and Kubeconform is under consideration.",
    options: [
      { id: 'A', text: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge." },
      { id: 'B', text: "Rely on the in-cluster GitOps controller to fail after changes are merged to production." },
      { id: 'C', text: "Wait for pods to crash in production before diagnosing manifest errors." },
      { id: 'D', text: "Disable CI validation checks to speed up developer pull requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeconform` (schema validation) and `conftest` (OPA policy checks) in the pull request CI pipeline before merge. Shifting security left in GitOps requires validating manifests before they are merged into the source of truth. Running schema validators (`kubeconform`) and policy checkers (`conftest`, `checkov`) in CI ensures invalid YAML, deprecated APIs, or privileged security contexts are rejected before hitting the cluster.",
    referenceUrl: "https://www.openpolicyagent.org/docs/latest/conftest/",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-491",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Argo CD User Management and SSO Integration: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Argo CD SSO to enable enterprise developers to log into the Argo CD Web UI using corporate Single Sign-On (SSO) with team-based permissions.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Integrating Argo CD with OIDC/OAuth2 providers (Okta, Entra ID, GitHub) and RBAC mapping is under consideration.",
    options: [
      { id: 'A', text: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles." },
      { id: 'B', text: "Create local admin user accounts in Argo CD with shared passwords for all developers." },
      { id: 'C', text: "Disable authentication on the Argo CD web server." },
      { id: 'D', text: "Share the root `admin` password on an internal Slack channel." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles. Argo CD supports OpenID Connect (OIDC) and OAuth2 (via bundled Dex or native OIDC). Integrating with enterprise identity providers (Okta, Entra ID, GitHub) enables multi-factor authentication and maps corporate group memberships directly to granular Argo CD RBAC permissions.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Argo CD SSO", "Argo CD SSO", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-492",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Argo CD User Management and SSO Integration: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Argo CD SSO to enable enterprise developers to log into the Argo CD Web UI using corporate Single Sign-On (SSO) with team-based permissions.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Integrating Argo CD with OIDC/OAuth2 providers (Okta, Entra ID, GitHub) and RBAC mapping is under consideration.",
    options: [
      { id: 'A', text: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles." },
      { id: 'B', text: "Create local admin user accounts in Argo CD with shared passwords for all developers." },
      { id: 'C', text: "Disable authentication on the Argo CD web server." },
      { id: 'D', text: "Share the root `admin` password on an internal Slack channel." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles. Argo CD supports OpenID Connect (OIDC) and OAuth2 (via bundled Dex or native OIDC). Integrating with enterprise identity providers (Okta, Entra ID, GitHub) enables multi-factor authentication and maps corporate group memberships directly to granular Argo CD RBAC permissions.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Argo CD SSO", "Argo CD SSO", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-493",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Argo CD User Management and SSO Integration: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Argo CD SSO to enable enterprise developers to log into the Argo CD Web UI using corporate Single Sign-On (SSO) with team-based permissions.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Integrating Argo CD with OIDC/OAuth2 providers (Okta, Entra ID, GitHub) and RBAC mapping is under consideration.",
    options: [
      { id: 'A', text: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles." },
      { id: 'B', text: "Create local admin user accounts in Argo CD with shared passwords for all developers." },
      { id: 'C', text: "Disable authentication on the Argo CD web server." },
      { id: 'D', text: "Share the root `admin` password on an internal Slack channel." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles. Argo CD supports OpenID Connect (OIDC) and OAuth2 (via bundled Dex or native OIDC). Integrating with enterprise identity providers (Okta, Entra ID, GitHub) enables multi-factor authentication and maps corporate group memberships directly to granular Argo CD RBAC permissions.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Argo CD SSO", "Argo CD SSO", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-494",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Argo CD User Management and SSO Integration: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Argo CD SSO to enable enterprise developers to log into the Argo CD Web UI using corporate Single Sign-On (SSO) with team-based permissions.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Integrating Argo CD with OIDC/OAuth2 providers (Okta, Entra ID, GitHub) and RBAC mapping is under consideration.",
    options: [
      { id: 'A', text: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles." },
      { id: 'B', text: "Create local admin user accounts in Argo CD with shared passwords for all developers." },
      { id: 'C', text: "Disable authentication on the Argo CD web server." },
      { id: 'D', text: "Share the root `admin` password on an internal Slack channel." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles. Argo CD supports OpenID Connect (OIDC) and OAuth2 (via bundled Dex or native OIDC). Integrating with enterprise identity providers (Okta, Entra ID, GitHub) enables multi-factor authentication and maps corporate group memberships directly to granular Argo CD RBAC permissions.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Argo CD SSO", "Argo CD SSO", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-495",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Argo CD User Management and SSO Integration: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Argo CD SSO to enable enterprise developers to log into the Argo CD Web UI using corporate Single Sign-On (SSO) with team-based permissions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Integrating Argo CD with OIDC/OAuth2 providers (Okta, Entra ID, GitHub) and RBAC mapping is under consideration.",
    options: [
      { id: 'A', text: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles." },
      { id: 'B', text: "Create local admin user accounts in Argo CD with shared passwords for all developers." },
      { id: 'C', text: "Disable authentication on the Argo CD web server." },
      { id: 'D', text: "Share the root `admin` password on an internal Slack channel." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dex or native OIDC integration in Argo CD with Microsoft Entra ID or Okta, mapping OIDC groups to Argo CD RBAC roles. Argo CD supports OpenID Connect (OIDC) and OAuth2 (via bundled Dex or native OIDC). Integrating with enterprise identity providers (Okta, Entra ID, GitHub) enables multi-factor authentication and maps corporate group memberships directly to granular Argo CD RBAC permissions.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/",
    tags: ["Argo CD SSO", "Argo CD SSO", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-496",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Cryptographic Verification of Manifests in GitOps (Cosign): Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Manifest Signing to guarantee that the GitOps controller only deploys manifests and container images that carry verified cryptographic signatures from approved build engineers.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Cryptographically signing and verifying Git commits and OCI manifest artifacts with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation." },
      { id: 'B', text: "Trust all commits and image tags blindly without cryptographic verification." },
      { id: 'C', text: "Allow anonymous developers to push unsigned commits to deployment branches." },
      { id: 'D', text: "Disable commit signing checks to reduce developer friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation. Supply chain security in GitOps requires verifying integrity at both levels: the container images (verified via Cosign/Sigstore) and the manifests themselves (verified via GPG/SSH signed Git commits). This ensures that unauthorized commits or tampered artifacts cannot be reconciled into production.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Manifest Signing", "Manifest Verification", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-497",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Cryptographic Verification of Manifests in GitOps (Cosign): High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Manifest Signing to guarantee that the GitOps controller only deploys manifests and container images that carry verified cryptographic signatures from approved build engineers.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Cryptographically signing and verifying Git commits and OCI manifest artifacts with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation." },
      { id: 'B', text: "Trust all commits and image tags blindly without cryptographic verification." },
      { id: 'C', text: "Allow anonymous developers to push unsigned commits to deployment branches." },
      { id: 'D', text: "Disable commit signing checks to reduce developer friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation. Supply chain security in GitOps requires verifying integrity at both levels: the container images (verified via Cosign/Sigstore) and the manifests themselves (verified via GPG/SSH signed Git commits). This ensures that unauthorized commits or tampered artifacts cannot be reconciled into production.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Manifest Signing", "Manifest Verification", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-498",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Cryptographic Verification of Manifests in GitOps (Cosign): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Manifest Signing to guarantee that the GitOps controller only deploys manifests and container images that carry verified cryptographic signatures from approved build engineers.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Cryptographically signing and verifying Git commits and OCI manifest artifacts with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation." },
      { id: 'B', text: "Trust all commits and image tags blindly without cryptographic verification." },
      { id: 'C', text: "Allow anonymous developers to push unsigned commits to deployment branches." },
      { id: 'D', text: "Disable commit signing checks to reduce developer friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation. Supply chain security in GitOps requires verifying integrity at both levels: the container images (verified via Cosign/Sigstore) and the manifests themselves (verified via GPG/SSH signed Git commits). This ensures that unauthorized commits or tampered artifacts cannot be reconciled into production.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Manifest Signing", "Manifest Verification", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-499",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Cryptographic Verification of Manifests in GitOps (Cosign): Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Manifest Signing to guarantee that the GitOps controller only deploys manifests and container images that carry verified cryptographic signatures from approved build engineers.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Cryptographically signing and verifying Git commits and OCI manifest artifacts with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation." },
      { id: 'B', text: "Trust all commits and image tags blindly without cryptographic verification." },
      { id: 'C', text: "Allow anonymous developers to push unsigned commits to deployment branches." },
      { id: 'D', text: "Disable commit signing checks to reduce developer friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation. Supply chain security in GitOps requires verifying integrity at both levels: the container images (verified via Cosign/Sigstore) and the manifests themselves (verified via GPG/SSH signed Git commits). This ensures that unauthorized commits or tampered artifacts cannot be reconciled into production.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Manifest Signing", "Manifest Verification", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-500",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Cryptographic Verification of Manifests in GitOps (Cosign): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Manifest Signing to guarantee that the GitOps controller only deploys manifests and container images that carry verified cryptographic signatures from approved build engineers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Cryptographically signing and verifying Git commits and OCI manifest artifacts with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation." },
      { id: 'B', text: "Trust all commits and image tags blindly without cryptographic verification." },
      { id: 'C', text: "Allow anonymous developers to push unsigned commits to deployment branches." },
      { id: 'D', text: "Disable commit signing checks to reduce developer friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce GPG commit signature verification on the Git repository and verify container image signatures using Cosign before reconciliation. Supply chain security in GitOps requires verifying integrity at both levels: the container images (verified via Cosign/Sigstore) and the manifests themselves (verified via GPG/SSH signed Git commits). This ensures that unauthorized commits or tampered artifacts cannot be reconciled into production.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Manifest Signing", "Manifest Verification", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_20;
