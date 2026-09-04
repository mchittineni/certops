export const CNCF_CGOA_QUESTIONS_17 = [
  {
    id: "cncf-cgoa-401",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Automated Image Update and Git Commits: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Automated Image Updates to automatically detect when a new container image is published to a container registry and commit the updated image tag back into the GitOps repository.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Automating image scanning and writing new tags back to Git with Flux image-automation-controller is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs." },
      { id: 'B', text: "Require developers to manually edit image tags in Git for every single container build." },
      { id: 'C', text: "Configure the container registry to execute `kubectl apply` directly on the cluster." },
      { id: 'D', text: "Run a local cron job on an engineer's laptop that commits tag updates to Git." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs. Flux image automation monitors container registries (`ImageRepository`), calculates the latest version matching a semver range (`ImagePolicy`), and automatically creates a Git commit or pull request (`ImageUpdateAutomation`) updating the image tag in Git, closing the automation loop.",
    referenceUrl: "https://fluxcd.io/flux/guides/image-update/",
    tags: ["Automated Image Updates", "Flux Image Automation", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-402",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Automated Image Update and Git Commits: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Automated Image Updates to automatically detect when a new container image is published to a container registry and commit the updated image tag back into the GitOps repository.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Automating image scanning and writing new tags back to Git with Flux image-automation-controller is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs." },
      { id: 'B', text: "Require developers to manually edit image tags in Git for every single container build." },
      { id: 'C', text: "Configure the container registry to execute `kubectl apply` directly on the cluster." },
      { id: 'D', text: "Run a local cron job on an engineer's laptop that commits tag updates to Git." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs. Flux image automation monitors container registries (`ImageRepository`), calculates the latest version matching a semver range (`ImagePolicy`), and automatically creates a Git commit or pull request (`ImageUpdateAutomation`) updating the image tag in Git, closing the automation loop.",
    referenceUrl: "https://fluxcd.io/flux/guides/image-update/",
    tags: ["Automated Image Updates", "Flux Image Automation", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-403",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Automated Image Update and Git Commits: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Automated Image Updates to automatically detect when a new container image is published to a container registry and commit the updated image tag back into the GitOps repository.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Automating image scanning and writing new tags back to Git with Flux image-automation-controller is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs." },
      { id: 'B', text: "Require developers to manually edit image tags in Git for every single container build." },
      { id: 'C', text: "Configure the container registry to execute `kubectl apply` directly on the cluster." },
      { id: 'D', text: "Run a local cron job on an engineer's laptop that commits tag updates to Git." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs. Flux image automation monitors container registries (`ImageRepository`), calculates the latest version matching a semver range (`ImagePolicy`), and automatically creates a Git commit or pull request (`ImageUpdateAutomation`) updating the image tag in Git, closing the automation loop.",
    referenceUrl: "https://fluxcd.io/flux/guides/image-update/",
    tags: ["Automated Image Updates", "Flux Image Automation", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-404",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Automated Image Update and Git Commits: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Automated Image Updates to automatically detect when a new container image is published to a container registry and commit the updated image tag back into the GitOps repository.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Automating image scanning and writing new tags back to Git with Flux image-automation-controller is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs." },
      { id: 'B', text: "Require developers to manually edit image tags in Git for every single container build." },
      { id: 'C', text: "Configure the container registry to execute `kubectl apply` directly on the cluster." },
      { id: 'D', text: "Run a local cron job on an engineer's laptop that commits tag updates to Git." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs. Flux image automation monitors container registries (`ImageRepository`), calculates the latest version matching a semver range (`ImagePolicy`), and automatically creates a Git commit or pull request (`ImageUpdateAutomation`) updating the image tag in Git, closing the automation loop.",
    referenceUrl: "https://fluxcd.io/flux/guides/image-update/",
    tags: ["Automated Image Updates", "Flux Image Automation", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-405",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Automated Image Update and Git Commits: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Automated Image Updates to automatically detect when a new container image is published to a container registry and commit the updated image tag back into the GitOps repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Automating image scanning and writing new tags back to Git with Flux image-automation-controller is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs." },
      { id: 'B', text: "Require developers to manually edit image tags in Git for every single container build." },
      { id: 'C', text: "Configure the container registry to execute `kubectl apply` directly on the cluster." },
      { id: 'D', text: "Run a local cron job on an engineer's laptop that commits tag updates to Git." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Flux `image-reflector-controller` and `image-automation-controller`, configuring `ImagePolicy` and `ImageUpdateAutomation` CRDs. Flux image automation monitors container registries (`ImageRepository`), calculates the latest version matching a semver range (`ImagePolicy`), and automatically creates a Git commit or pull request (`ImageUpdateAutomation`) updating the image tag in Git, closing the automation loop.",
    referenceUrl: "https://fluxcd.io/flux/guides/image-update/",
    tags: ["Automated Image Updates", "Flux Image Automation", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-406",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Notification Controller and Webhook Receivers: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Event Notifications to eliminate Git polling delays so that Flux reconciles cluster state within seconds of a commit push, and notify a Slack channel of deployment status.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Receiving Git push webhooks and dispatching deployment alerts to Slack/Teams with Flux is under consideration.",
    options: [
      { id: 'A', text: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`." },
      { id: 'B', text: "Increase the Flux Git polling interval to once every second, overloading the Git server." },
      { id: 'C', text: "Rely on developers manually checking pod logs to know when deployments finish." },
      { id: 'D', text: "Disable notifications to reduce cluster CPU consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`. The Flux `notification-controller` handles inbound and outbound events. Webhook `Receiver` resources allow GitHub/GitLab to notify Flux of new commits instantly (eliminating polling intervals), while `Provider` and `Alert` resources send real-time deployment status updates to Slack, Teams, or Discord.",
    referenceUrl: "https://fluxcd.io/flux/components/notification/",
    tags: ["Event Notifications", "Flux Notifications", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-407",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Notification Controller and Webhook Receivers: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Event Notifications to eliminate Git polling delays so that Flux reconciles cluster state within seconds of a commit push, and notify a Slack channel of deployment status.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Receiving Git push webhooks and dispatching deployment alerts to Slack/Teams with Flux is under consideration.",
    options: [
      { id: 'A', text: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`." },
      { id: 'B', text: "Increase the Flux Git polling interval to once every second, overloading the Git server." },
      { id: 'C', text: "Rely on developers manually checking pod logs to know when deployments finish." },
      { id: 'D', text: "Disable notifications to reduce cluster CPU consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`. The Flux `notification-controller` handles inbound and outbound events. Webhook `Receiver` resources allow GitHub/GitLab to notify Flux of new commits instantly (eliminating polling intervals), while `Provider` and `Alert` resources send real-time deployment status updates to Slack, Teams, or Discord.",
    referenceUrl: "https://fluxcd.io/flux/components/notification/",
    tags: ["Event Notifications", "Flux Notifications", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-408",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Notification Controller and Webhook Receivers: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Event Notifications to eliminate Git polling delays so that Flux reconciles cluster state within seconds of a commit push, and notify a Slack channel of deployment status.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Receiving Git push webhooks and dispatching deployment alerts to Slack/Teams with Flux is under consideration.",
    options: [
      { id: 'A', text: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`." },
      { id: 'B', text: "Increase the Flux Git polling interval to once every second, overloading the Git server." },
      { id: 'C', text: "Rely on developers manually checking pod logs to know when deployments finish." },
      { id: 'D', text: "Disable notifications to reduce cluster CPU consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`. The Flux `notification-controller` handles inbound and outbound events. Webhook `Receiver` resources allow GitHub/GitLab to notify Flux of new commits instantly (eliminating polling intervals), while `Provider` and `Alert` resources send real-time deployment status updates to Slack, Teams, or Discord.",
    referenceUrl: "https://fluxcd.io/flux/components/notification/",
    tags: ["Event Notifications", "Flux Notifications", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-409",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Notification Controller and Webhook Receivers: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Event Notifications to eliminate Git polling delays so that Flux reconciles cluster state within seconds of a commit push, and notify a Slack channel of deployment status.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Receiving Git push webhooks and dispatching deployment alerts to Slack/Teams with Flux is under consideration.",
    options: [
      { id: 'A', text: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`." },
      { id: 'B', text: "Increase the Flux Git polling interval to once every second, overloading the Git server." },
      { id: 'C', text: "Rely on developers manually checking pod logs to know when deployments finish." },
      { id: 'D', text: "Disable notifications to reduce cluster CPU consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`. The Flux `notification-controller` handles inbound and outbound events. Webhook `Receiver` resources allow GitHub/GitLab to notify Flux of new commits instantly (eliminating polling intervals), while `Provider` and `Alert` resources send real-time deployment status updates to Slack, Teams, or Discord.",
    referenceUrl: "https://fluxcd.io/flux/components/notification/",
    tags: ["Event Notifications", "Flux Notifications", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-410",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Notification Controller and Webhook Receivers: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Event Notifications to eliminate Git polling delays so that Flux reconciles cluster state within seconds of a commit push, and notify a Slack channel of deployment status.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Receiving Git push webhooks and dispatching deployment alerts to Slack/Teams with Flux is under consideration.",
    options: [
      { id: 'A', text: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`." },
      { id: 'B', text: "Increase the Flux Git polling interval to once every second, overloading the Git server." },
      { id: 'C', text: "Rely on developers manually checking pod logs to know when deployments finish." },
      { id: 'D', text: "Disable notifications to reduce cluster CPU consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Flux `Receiver` webhook endpoint in notification-controller and an `Alert` resource targeting a Slack `Provider`. The Flux `notification-controller` handles inbound and outbound events. Webhook `Receiver` resources allow GitHub/GitLab to notify Flux of new commits instantly (eliminating polling intervals), while `Provider` and `Alert` resources send real-time deployment status updates to Slack, Teams, or Discord.",
    referenceUrl: "https://fluxcd.io/flux/components/notification/",
    tags: ["Event Notifications", "Flux Notifications", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-411",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Tracking and Diffing Strategies: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Diffing Strategies to prevent Argo CD from reporting false-positive out-of-sync status caused by Kubernetes mutating admission webhooks modifying pod specifications.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? How Argo CD tracks resources and calculates diffs using annotations and server-side apply is under consideration.",
    options: [
      { id: 'A', text: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations)." },
      { id: 'B', text: "Disable all mutating webhooks in the cluster." },
      { id: 'C', text: "Reinstall Argo CD with a fresh database." },
      { id: 'D', text: "Ignore all out-of-sync warnings across all applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations). Mutating webhooks or cloud controllers can inject fields (like default tolerations, annotations, or sidecars) that do not exist in Git, causing GitOps engines to detect permanent drift. Configuring `ignoreDifferences` instructs Argo CD to omit those specific fields during diffing calculations.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/",
    tags: ["Diffing Strategies", "ignoreDifferences", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-412",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Tracking and Diffing Strategies: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Diffing Strategies to prevent Argo CD from reporting false-positive out-of-sync status caused by Kubernetes mutating admission webhooks modifying pod specifications.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? How Argo CD tracks resources and calculates diffs using annotations and server-side apply is under consideration.",
    options: [
      { id: 'A', text: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations)." },
      { id: 'B', text: "Disable all mutating webhooks in the cluster." },
      { id: 'C', text: "Reinstall Argo CD with a fresh database." },
      { id: 'D', text: "Ignore all out-of-sync warnings across all applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations). Mutating webhooks or cloud controllers can inject fields (like default tolerations, annotations, or sidecars) that do not exist in Git, causing GitOps engines to detect permanent drift. Configuring `ignoreDifferences` instructs Argo CD to omit those specific fields during diffing calculations.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/",
    tags: ["Diffing Strategies", "ignoreDifferences", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-413",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Tracking and Diffing Strategies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Diffing Strategies to prevent Argo CD from reporting false-positive out-of-sync status caused by Kubernetes mutating admission webhooks modifying pod specifications.",
    question: "Which solution implements these mandatory GitOps security and governance controls? How Argo CD tracks resources and calculates diffs using annotations and server-side apply is under consideration.",
    options: [
      { id: 'A', text: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations)." },
      { id: 'B', text: "Disable all mutating webhooks in the cluster." },
      { id: 'C', text: "Reinstall Argo CD with a fresh database." },
      { id: 'D', text: "Ignore all out-of-sync warnings across all applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations). Mutating webhooks or cloud controllers can inject fields (like default tolerations, annotations, or sidecars) that do not exist in Git, causing GitOps engines to detect permanent drift. Configuring `ignoreDifferences` instructs Argo CD to omit those specific fields during diffing calculations.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/",
    tags: ["Diffing Strategies", "ignoreDifferences", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-414",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Tracking and Diffing Strategies: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Diffing Strategies to prevent Argo CD from reporting false-positive out-of-sync status caused by Kubernetes mutating admission webhooks modifying pod specifications.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? How Argo CD tracks resources and calculates diffs using annotations and server-side apply is under consideration.",
    options: [
      { id: 'A', text: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations)." },
      { id: 'B', text: "Disable all mutating webhooks in the cluster." },
      { id: 'C', text: "Reinstall Argo CD with a fresh database." },
      { id: 'D', text: "Ignore all out-of-sync warnings across all applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations). Mutating webhooks or cloud controllers can inject fields (like default tolerations, annotations, or sidecars) that do not exist in Git, causing GitOps engines to detect permanent drift. Configuring `ignoreDifferences` instructs Argo CD to omit those specific fields during diffing calculations.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/",
    tags: ["Diffing Strategies", "ignoreDifferences", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-415",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Tracking and Diffing Strategies: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Diffing Strategies to prevent Argo CD from reporting false-positive out-of-sync status caused by Kubernetes mutating admission webhooks modifying pod specifications.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? How Argo CD tracks resources and calculates diffs using annotations and server-side apply is under consideration.",
    options: [
      { id: 'A', text: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations)." },
      { id: 'B', text: "Disable all mutating webhooks in the cluster." },
      { id: 'C', text: "Reinstall Argo CD with a fresh database." },
      { id: 'D', text: "Ignore all out-of-sync warnings across all applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `ignoreDifferences` in the Application manifest targeting specific JSON pointers or fields (e.g., mutating annotations). Mutating webhooks or cloud controllers can inject fields (like default tolerations, annotations, or sidecars) that do not exist in Git, causing GitOps engines to detect permanent drift. Configuring `ignoreDifferences` instructs Argo CD to omit those specific fields during diffing calculations.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/",
    tags: ["Diffing Strategies", "ignoreDifferences", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-416",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Server-Side Apply vs Client-Side Apply: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Server-Side Apply to deploy massive CustomResourceDefinitions (like Prometheus or Istio CRDs) exceeding the 262KB `kubectl.kubernetes.io/last-applied-configuration` annotation limit.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Managing large CRDs and field ownership using Server-Side Apply in Argo CD is under consideration.",
    options: [
      { id: 'A', text: "Enable `ServerSideApply=true` in the Argo CD application sync options." },
      { id: 'B', text: "Split the single CRD into 10 smaller invalid partial YAML files." },
      { id: 'C', text: "Compress the CRD using gzip before committing to Git." },
      { id: 'D', text: "Server-side apply is not supported in modern Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `ServerSideApply=true` in the Argo CD application sync options. Traditional client-side apply records the entire last-applied manifest in a single annotation (`last-applied-configuration`), which fails on massive CRDs exceeding the 262KB annotation limit. Enabling Server-Side Apply delegates merging to the Kubernetes API server and tracks granular field ownership.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/#server-side-apply",
    tags: ["Server-Side Apply", "Server-Side Apply", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-417",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Server-Side Apply vs Client-Side Apply: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Server-Side Apply to deploy massive CustomResourceDefinitions (like Prometheus or Istio CRDs) exceeding the 262KB `kubectl.kubernetes.io/last-applied-configuration` annotation limit.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Managing large CRDs and field ownership using Server-Side Apply in Argo CD is under consideration.",
    options: [
      { id: 'A', text: "Enable `ServerSideApply=true` in the Argo CD application sync options." },
      { id: 'B', text: "Split the single CRD into 10 smaller invalid partial YAML files." },
      { id: 'C', text: "Compress the CRD using gzip before committing to Git." },
      { id: 'D', text: "Server-side apply is not supported in modern Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `ServerSideApply=true` in the Argo CD application sync options. Traditional client-side apply records the entire last-applied manifest in a single annotation (`last-applied-configuration`), which fails on massive CRDs exceeding the 262KB annotation limit. Enabling Server-Side Apply delegates merging to the Kubernetes API server and tracks granular field ownership.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/#server-side-apply",
    tags: ["Server-Side Apply", "Server-Side Apply", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-418",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Server-Side Apply vs Client-Side Apply: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Server-Side Apply to deploy massive CustomResourceDefinitions (like Prometheus or Istio CRDs) exceeding the 262KB `kubectl.kubernetes.io/last-applied-configuration` annotation limit.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Managing large CRDs and field ownership using Server-Side Apply in Argo CD is under consideration.",
    options: [
      { id: 'A', text: "Enable `ServerSideApply=true` in the Argo CD application sync options." },
      { id: 'B', text: "Split the single CRD into 10 smaller invalid partial YAML files." },
      { id: 'C', text: "Compress the CRD using gzip before committing to Git." },
      { id: 'D', text: "Server-side apply is not supported in modern Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `ServerSideApply=true` in the Argo CD application sync options. Traditional client-side apply records the entire last-applied manifest in a single annotation (`last-applied-configuration`), which fails on massive CRDs exceeding the 262KB annotation limit. Enabling Server-Side Apply delegates merging to the Kubernetes API server and tracks granular field ownership.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/#server-side-apply",
    tags: ["Server-Side Apply", "Server-Side Apply", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-419",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Server-Side Apply vs Client-Side Apply: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Server-Side Apply to deploy massive CustomResourceDefinitions (like Prometheus or Istio CRDs) exceeding the 262KB `kubectl.kubernetes.io/last-applied-configuration` annotation limit.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Managing large CRDs and field ownership using Server-Side Apply in Argo CD is under consideration.",
    options: [
      { id: 'A', text: "Enable `ServerSideApply=true` in the Argo CD application sync options." },
      { id: 'B', text: "Split the single CRD into 10 smaller invalid partial YAML files." },
      { id: 'C', text: "Compress the CRD using gzip before committing to Git." },
      { id: 'D', text: "Server-side apply is not supported in modern Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `ServerSideApply=true` in the Argo CD application sync options. Traditional client-side apply records the entire last-applied manifest in a single annotation (`last-applied-configuration`), which fails on massive CRDs exceeding the 262KB annotation limit. Enabling Server-Side Apply delegates merging to the Kubernetes API server and tracks granular field ownership.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/#server-side-apply",
    tags: ["Server-Side Apply", "Server-Side Apply", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-420",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Server-Side Apply vs Client-Side Apply: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Server-Side Apply to deploy massive CustomResourceDefinitions (like Prometheus or Istio CRDs) exceeding the 262KB `kubectl.kubernetes.io/last-applied-configuration` annotation limit.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Managing large CRDs and field ownership using Server-Side Apply in Argo CD is under consideration.",
    options: [
      { id: 'A', text: "Enable `ServerSideApply=true` in the Argo CD application sync options." },
      { id: 'B', text: "Split the single CRD into 10 smaller invalid partial YAML files." },
      { id: 'C', text: "Compress the CRD using gzip before committing to Git." },
      { id: 'D', text: "Server-side apply is not supported in modern Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `ServerSideApply=true` in the Argo CD application sync options. Traditional client-side apply records the entire last-applied manifest in a single annotation (`last-applied-configuration`), which fails on massive CRDs exceeding the 262KB annotation limit. Enabling Server-Side Apply delegates merging to the Kubernetes API server and tracks granular field ownership.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/#server-side-apply",
    tags: ["Server-Side Apply", "Server-Side Apply", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-421",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Automating Rollbacks in GitOps via git revert: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates GitOps Rollbacks to revert a defective production application release that was deployed via GitOps and restore the previous stable version.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Rolling back releases by reverting commits in Git rather than imperatively rolling back clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback." },
      { id: 'B', text: "Run `kubectl rollout undo` on the production cluster pods directly." },
      { id: 'C', text: "Click 'Rollback' in the cloud console and let the GitOps controller overwrite it 3 minutes later." },
      { id: 'D', text: "Delete the Git repository branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback. In GitOps, manual in-cluster rollbacks (`kubectl rollout undo`) are anti-patterns because the GitOps engine will detect the drift and re-apply the defective Git state. The proper GitOps rollback is creating a `git revert` commit in Git, which preserves audit history while driving automated cluster rollback.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Rollbacks", "GitOps Rollback", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-422",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Automating Rollbacks in GitOps via git revert: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates GitOps Rollbacks to revert a defective production application release that was deployed via GitOps and restore the previous stable version.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Rolling back releases by reverting commits in Git rather than imperatively rolling back clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback." },
      { id: 'B', text: "Run `kubectl rollout undo` on the production cluster pods directly." },
      { id: 'C', text: "Click 'Rollback' in the cloud console and let the GitOps controller overwrite it 3 minutes later." },
      { id: 'D', text: "Delete the Git repository branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback. In GitOps, manual in-cluster rollbacks (`kubectl rollout undo`) are anti-patterns because the GitOps engine will detect the drift and re-apply the defective Git state. The proper GitOps rollback is creating a `git revert` commit in Git, which preserves audit history while driving automated cluster rollback.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Rollbacks", "GitOps Rollback", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-423",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Automating Rollbacks in GitOps via git revert: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates GitOps Rollbacks to revert a defective production application release that was deployed via GitOps and restore the previous stable version.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Rolling back releases by reverting commits in Git rather than imperatively rolling back clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback." },
      { id: 'B', text: "Run `kubectl rollout undo` on the production cluster pods directly." },
      { id: 'C', text: "Click 'Rollback' in the cloud console and let the GitOps controller overwrite it 3 minutes later." },
      { id: 'D', text: "Delete the Git repository branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback. In GitOps, manual in-cluster rollbacks (`kubectl rollout undo`) are anti-patterns because the GitOps engine will detect the drift and re-apply the defective Git state. The proper GitOps rollback is creating a `git revert` commit in Git, which preserves audit history while driving automated cluster rollback.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Rollbacks", "GitOps Rollback", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-424",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Automating Rollbacks in GitOps via git revert: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates GitOps Rollbacks to revert a defective production application release that was deployed via GitOps and restore the previous stable version.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Rolling back releases by reverting commits in Git rather than imperatively rolling back clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback." },
      { id: 'B', text: "Run `kubectl rollout undo` on the production cluster pods directly." },
      { id: 'C', text: "Click 'Rollback' in the cloud console and let the GitOps controller overwrite it 3 minutes later." },
      { id: 'D', text: "Delete the Git repository branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback. In GitOps, manual in-cluster rollbacks (`kubectl rollout undo`) are anti-patterns because the GitOps engine will detect the drift and re-apply the defective Git state. The proper GitOps rollback is creating a `git revert` commit in Git, which preserves audit history while driving automated cluster rollback.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Rollbacks", "GitOps Rollback", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-425",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Automating Rollbacks in GitOps via git revert: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates GitOps Rollbacks to revert a defective production application release that was deployed via GitOps and restore the previous stable version.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Rolling back releases by reverting commits in Git rather than imperatively rolling back clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback." },
      { id: 'B', text: "Run `kubectl rollout undo` on the production cluster pods directly." },
      { id: 'C', text: "Click 'Rollback' in the cloud console and let the GitOps controller overwrite it 3 minutes later." },
      { id: 'D', text: "Delete the Git repository branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `git revert &lt;commit-sha&gt;` on the deployment branch and push the revert commit to Git; the GitOps controller reconciles the rollback. In GitOps, manual in-cluster rollbacks (`kubectl rollout undo`) are anti-patterns because the GitOps engine will detect the drift and re-apply the defective Git state. The proper GitOps rollback is creating a `git revert` commit in Git, which preserves audit history while driving automated cluster rollback.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Rollbacks", "GitOps Rollback", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_17;
