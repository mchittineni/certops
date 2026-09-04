export const CNCF_CNPA_QUESTIONS_15 = [
  {
    id: "cncf-cnpa-351",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Experience (DevEx) and Cognitive Load Reduction: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Developer Experience to enable application software engineers to focus on delivering business features rather than troubleshooting infrastructure plumbing.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Minimizing extraneous cognitive load, eliminating friction, and optimizing flow state is under consideration.",
    options: [
      { id: 'A', text: "Introduce multiple redundant manual approval gates before developers can view test log files." },
      { id: 'B', text: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces." },
      { id: 'C', text: "Treat developer cognitive load as a non-issue that engineers should overcome individually." },
      { id: 'D', text: "Force application engineers to manage physical data center racking and BGP routing protocols." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces. A core tenet of platform engineering is optimizing DevEx by minimizing extraneous cognitive load. By providing curated abstractions and self-healing defaults, platforms allow developers to remain in a productive flow state delivering product features.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Developer Experience", "DevEx", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-352",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Experience (DevEx) and Cognitive Load Reduction: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Developer Experience to enable application software engineers to focus on delivering business features rather than troubleshooting infrastructure plumbing.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Minimizing extraneous cognitive load, eliminating friction, and optimizing flow state is under consideration.",
    options: [
      { id: 'A', text: "Treat developer cognitive load as a non-issue that engineers should overcome individually." },
      { id: 'B', text: "Introduce multiple redundant manual approval gates before developers can view test log files." },
      { id: 'C', text: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces." },
      { id: 'D', text: "Force application engineers to manage physical data center racking and BGP routing protocols." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces. A core tenet of platform engineering is optimizing DevEx by minimizing extraneous cognitive load. By providing curated abstractions and self-healing defaults, platforms allow developers to remain in a productive flow state delivering product features.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Developer Experience", "DevEx", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-353",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Experience (DevEx) and Cognitive Load Reduction: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Developer Experience to enable application software engineers to focus on delivering business features rather than troubleshooting infrastructure plumbing.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Minimizing extraneous cognitive load, eliminating friction, and optimizing flow state is under consideration.",
    options: [
      { id: 'A', text: "Introduce multiple redundant manual approval gates before developers can view test log files." },
      { id: 'B', text: "Force application engineers to manage physical data center racking and BGP routing protocols." },
      { id: 'C', text: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces." },
      { id: 'D', text: "Treat developer cognitive load as a non-issue that engineers should overcome individually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces. A core tenet of platform engineering is optimizing DevEx by minimizing extraneous cognitive load. By providing curated abstractions and self-healing defaults, platforms allow developers to remain in a productive flow state delivering product features.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Developer Experience", "DevEx", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-354",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Experience (DevEx) and Cognitive Load Reduction: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Developer Experience to enable application software engineers to focus on delivering business features rather than troubleshooting infrastructure plumbing.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Minimizing extraneous cognitive load, eliminating friction, and optimizing flow state is under consideration.",
    options: [
      { id: 'A', text: "Treat developer cognitive load as a non-issue that engineers should overcome individually." },
      { id: 'B', text: "Force application engineers to manage physical data center racking and BGP routing protocols." },
      { id: 'C', text: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces." },
      { id: 'D', text: "Introduce multiple redundant manual approval gates before developers can view test log files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces. A core tenet of platform engineering is optimizing DevEx by minimizing extraneous cognitive load. By providing curated abstractions and self-healing defaults, platforms allow developers to remain in a productive flow state delivering product features.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Developer Experience", "DevEx", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-355",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Experience (DevEx) and Cognitive Load Reduction: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Developer Experience to enable application software engineers to focus on delivering business features rather than troubleshooting infrastructure plumbing.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Minimizing extraneous cognitive load, eliminating friction, and optimizing flow state is under consideration.",
    options: [
      { id: 'A', text: "Force application engineers to manage physical data center racking and BGP routing protocols." },
      { id: 'B', text: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces." },
      { id: 'C', text: "Treat developer cognitive load as a non-issue that engineers should overcome individually." },
      { id: 'D', text: "Introduce multiple redundant manual approval gates before developers can view test log files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Optimize Developer Experience (DevEx) by abstracting extraneous infrastructure cognitive load and providing intuitive self-service interfaces. A core tenet of platform engineering is optimizing DevEx by minimizing extraneous cognitive load. By providing curated abstractions and self-healing defaults, platforms allow developers to remain in a productive flow state delivering product features.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Developer Experience", "DevEx", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-356",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Access Management and Single Sign-On (SSO) in Portals: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Portal IAM to ensure developers automatically receive appropriate portal access and cluster namespaces based on their corporate team membership.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Integrating corporate Identity Providers (IdPs) with portal RBAC for unified access governance is under consideration.",
    options: [
      { id: 'A', text: "Disable multi-factor authentication to simplify login forms." },
      { id: 'B', text: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions." },
      { id: 'C', text: "Allow all internal employees unrestricted administrative access to all production databases." },
      { id: 'D', text: "Create static local passwords on every individual server with no centralized identity federation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions. Enterprise developer platforms integrate with corporate Identity Providers (IdPs) via OIDC/SAML. Portal RBAC maps directory group memberships to platform roles, automatically provisioning namespace access, template permissions, and cloud roles upon login.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Portal IAM", "Portal IAM", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-357",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Access Management and Single Sign-On (SSO) in Portals: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Portal IAM to ensure developers automatically receive appropriate portal access and cluster namespaces based on their corporate team membership.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Integrating corporate Identity Providers (IdPs) with portal RBAC for unified access governance is under consideration.",
    options: [
      { id: 'A', text: "Allow all internal employees unrestricted administrative access to all production databases." },
      { id: 'B', text: "Disable multi-factor authentication to simplify login forms." },
      { id: 'C', text: "Create static local passwords on every individual server with no centralized identity federation." },
      { id: 'D', text: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions. Enterprise developer platforms integrate with corporate Identity Providers (IdPs) via OIDC/SAML. Portal RBAC maps directory group memberships to platform roles, automatically provisioning namespace access, template permissions, and cloud roles upon login.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Portal IAM", "Portal IAM", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-358",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Access Management and Single Sign-On (SSO) in Portals: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Portal IAM to ensure developers automatically receive appropriate portal access and cluster namespaces based on their corporate team membership.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Integrating corporate Identity Providers (IdPs) with portal RBAC for unified access governance is under consideration.",
    options: [
      { id: 'A', text: "Disable multi-factor authentication to simplify login forms." },
      { id: 'B', text: "Create static local passwords on every individual server with no centralized identity federation." },
      { id: 'C', text: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions." },
      { id: 'D', text: "Allow all internal employees unrestricted administrative access to all production databases." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions. Enterprise developer platforms integrate with corporate Identity Providers (IdPs) via OIDC/SAML. Portal RBAC maps directory group memberships to platform roles, automatically provisioning namespace access, template permissions, and cloud roles upon login.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Portal IAM", "Portal IAM", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-359",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Access Management and Single Sign-On (SSO) in Portals: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Portal IAM to ensure developers automatically receive appropriate portal access and cluster namespaces based on their corporate team membership.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Integrating corporate Identity Providers (IdPs) with portal RBAC for unified access governance is under consideration.",
    options: [
      { id: 'A', text: "Create static local passwords on every individual server with no centralized identity federation." },
      { id: 'B', text: "Allow all internal employees unrestricted administrative access to all production databases." },
      { id: 'C', text: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions." },
      { id: 'D', text: "Disable multi-factor authentication to simplify login forms." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions. Enterprise developer platforms integrate with corporate Identity Providers (IdPs) via OIDC/SAML. Portal RBAC maps directory group memberships to platform roles, automatically provisioning namespace access, template permissions, and cloud roles upon login.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Portal IAM", "Portal IAM", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-360",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Access Management and Single Sign-On (SSO) in Portals: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Portal IAM to ensure developers automatically receive appropriate portal access and cluster namespaces based on their corporate team membership.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Integrating corporate Identity Providers (IdPs) with portal RBAC for unified access governance is under consideration.",
    options: [
      { id: 'A', text: "Create static local passwords on every individual server with no centralized identity federation." },
      { id: 'B', text: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions." },
      { id: 'C', text: "Disable multi-factor authentication to simplify login forms." },
      { id: 'D', text: "Allow all internal employees unrestricted administrative access to all production databases." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Federate the developer portal with corporate SSO (Okta, Azure AD) and map group claims to portal roles and namespace permissions. Enterprise developer platforms integrate with corporate Identity Providers (IdPs) via OIDC/SAML. Portal RBAC maps directory group memberships to platform roles, automatically provisioning namespace access, template permissions, and cloud roles upon login.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Portal IAM", "Portal IAM", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-361",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Dynamic Configuration Management: Kustomize vs Helm: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Configuration Management to manage base application manifests across multiple deployment environments (dev, staging, prod) without duplication.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Overlay-based patching with Kustomize vs parameterized templating with Helm is under consideration.",
    options: [
      { id: 'A', text: "Manually edit production YAML files using terminal text editors during active deployments." },
      { id: 'B', text: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests." },
      { id: 'C', text: "Maintain completely separate, unlinked copies of raw Kubernetes YAML files for every single environment." },
      { id: 'D', text: "Prohibit configuration parameterization across deployment environments." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests. Cloud-native platforms leverage Helm for packaging reusable parameterized applications and Kustomize for overlay-based declarative patching without templates. Combining both allows platform teams to maintain clean base manifests patched for each environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Configuration Management", "Config Management", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-362",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Dynamic Configuration Management: Kustomize vs Helm: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Configuration Management to manage base application manifests across multiple deployment environments (dev, staging, prod) without duplication.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Overlay-based patching with Kustomize vs parameterized templating with Helm is under consideration.",
    options: [
      { id: 'A', text: "Maintain completely separate, unlinked copies of raw Kubernetes YAML files for every single environment." },
      { id: 'B', text: "Prohibit configuration parameterization across deployment environments." },
      { id: 'C', text: "Manually edit production YAML files using terminal text editors during active deployments." },
      { id: 'D', text: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests. Cloud-native platforms leverage Helm for packaging reusable parameterized applications and Kustomize for overlay-based declarative patching without templates. Combining both allows platform teams to maintain clean base manifests patched for each environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Configuration Management", "Config Management", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-363",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Dynamic Configuration Management: Kustomize vs Helm: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Configuration Management to manage base application manifests across multiple deployment environments (dev, staging, prod) without duplication.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Overlay-based patching with Kustomize vs parameterized templating with Helm is under consideration.",
    options: [
      { id: 'A', text: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests." },
      { id: 'B', text: "Maintain completely separate, unlinked copies of raw Kubernetes YAML files for every single environment." },
      { id: 'C', text: "Manually edit production YAML files using terminal text editors during active deployments." },
      { id: 'D', text: "Prohibit configuration parameterization across deployment environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests. Cloud-native platforms leverage Helm for packaging reusable parameterized applications and Kustomize for overlay-based declarative patching without templates. Combining both allows platform teams to maintain clean base manifests patched for each environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Configuration Management", "Config Management", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-364",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Dynamic Configuration Management: Kustomize vs Helm: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Configuration Management to manage base application manifests across multiple deployment environments (dev, staging, prod) without duplication.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Overlay-based patching with Kustomize vs parameterized templating with Helm is under consideration.",
    options: [
      { id: 'A', text: "Prohibit configuration parameterization across deployment environments." },
      { id: 'B', text: "Maintain completely separate, unlinked copies of raw Kubernetes YAML files for every single environment." },
      { id: 'C', text: "Manually edit production YAML files using terminal text editors during active deployments." },
      { id: 'D', text: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests. Cloud-native platforms leverage Helm for packaging reusable parameterized applications and Kustomize for overlay-based declarative patching without templates. Combining both allows platform teams to maintain clean base manifests patched for each environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Configuration Management", "Config Management", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-365",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Dynamic Configuration Management: Kustomize vs Helm: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Configuration Management to manage base application manifests across multiple deployment environments (dev, staging, prod) without duplication.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Overlay-based patching with Kustomize vs parameterized templating with Helm is under consideration.",
    options: [
      { id: 'A', text: "Maintain completely separate, unlinked copies of raw Kubernetes YAML files for every single environment." },
      { id: 'B', text: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests." },
      { id: 'C', text: "Prohibit configuration parameterization across deployment environments." },
      { id: 'D', text: "Manually edit production YAML files using terminal text editors during active deployments." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Combine Helm for packaging third-party platform components with Kustomize overlays for patching environment-specific application manifests. Cloud-native platforms leverage Helm for packaging reusable parameterized applications and Kustomize for overlay-based declarative patching without templates. Combining both allows platform teams to maintain clean base manifests patched for each environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Configuration Management", "Config Management", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-366",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Onboarding Experience: Zero to First Commit: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Developer Onboarding to enable a newly hired software engineer to run and test their team's microservices locally on day one without manual setup.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Pre-configured Dev Containers and automated workspace provisioning to accelerate onboarding is under consideration.",
    options: [
      { id: 'A', text: "Prohibit new engineers from accessing code repositories during their probationary period." },
      { id: 'B', text: "Require new hires to spend their first month configuring operating system environment variables." },
      { id: 'C', text: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed." },
      { id: 'D', text: "Hand the new engineer a 40-page outdated wiki guide instructing them to install 20 incompatible CLI binaries manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed. Platform engineering measures onboarding efficiency through 'Time to First Commit'. By leveraging Development Containers (Dev Containers) or cloud-hosted workspaces, new developers launch fully configured, reproducible development environments with one click.",
    referenceUrl: "https://containers.dev/",
    tags: ["Developer Onboarding", "Developer Onboarding", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-367",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Onboarding Experience: Zero to First Commit: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Developer Onboarding to enable a newly hired software engineer to run and test their team's microservices locally on day one without manual setup.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Pre-configured Dev Containers and automated workspace provisioning to accelerate onboarding is under consideration.",
    options: [
      { id: 'A', text: "Hand the new engineer a 40-page outdated wiki guide instructing them to install 20 incompatible CLI binaries manually." },
      { id: 'B', text: "Require new hires to spend their first month configuring operating system environment variables." },
      { id: 'C', text: "Prohibit new engineers from accessing code repositories during their probationary period." },
      { id: 'D', text: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed. Platform engineering measures onboarding efficiency through 'Time to First Commit'. By leveraging Development Containers (Dev Containers) or cloud-hosted workspaces, new developers launch fully configured, reproducible development environments with one click.",
    referenceUrl: "https://containers.dev/",
    tags: ["Developer Onboarding", "Developer Onboarding", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-368",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Onboarding Experience: Zero to First Commit: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Developer Onboarding to enable a newly hired software engineer to run and test their team's microservices locally on day one without manual setup.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Pre-configured Dev Containers and automated workspace provisioning to accelerate onboarding is under consideration.",
    options: [
      { id: 'A', text: "Hand the new engineer a 40-page outdated wiki guide instructing them to install 20 incompatible CLI binaries manually." },
      { id: 'B', text: "Require new hires to spend their first month configuring operating system environment variables." },
      { id: 'C', text: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed." },
      { id: 'D', text: "Prohibit new engineers from accessing code repositories during their probationary period." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed. Platform engineering measures onboarding efficiency through 'Time to First Commit'. By leveraging Development Containers (Dev Containers) or cloud-hosted workspaces, new developers launch fully configured, reproducible development environments with one click.",
    referenceUrl: "https://containers.dev/",
    tags: ["Developer Onboarding", "Developer Onboarding", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-369",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Onboarding Experience: Zero to First Commit: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Developer Onboarding to enable a newly hired software engineer to run and test their team's microservices locally on day one without manual setup.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Pre-configured Dev Containers and automated workspace provisioning to accelerate onboarding is under consideration.",
    options: [
      { id: 'A', text: "Require new hires to spend their first month configuring operating system environment variables." },
      { id: 'B', text: "Prohibit new engineers from accessing code repositories during their probationary period." },
      { id: 'C', text: "Hand the new engineer a 40-page outdated wiki guide instructing them to install 20 incompatible CLI binaries manually." },
      { id: 'D', text: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed. Platform engineering measures onboarding efficiency through 'Time to First Commit'. By leveraging Development Containers (Dev Containers) or cloud-hosted workspaces, new developers launch fully configured, reproducible development environments with one click.",
    referenceUrl: "https://containers.dev/",
    tags: ["Developer Onboarding", "Developer Onboarding", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-370",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Onboarding Experience: Zero to First Commit: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Developer Onboarding to enable a newly hired software engineer to run and test their team's microservices locally on day one without manual setup.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Pre-configured Dev Containers and automated workspace provisioning to accelerate onboarding is under consideration.",
    options: [
      { id: 'A', text: "Prohibit new engineers from accessing code repositories during their probationary period." },
      { id: 'B', text: "Hand the new engineer a 40-page outdated wiki guide instructing them to install 20 incompatible CLI binaries manually." },
      { id: 'C', text: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed." },
      { id: 'D', text: "Require new hires to spend their first month configuring operating system environment variables." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provide pre-configured Dev Containers or cloud development environments (e.g., Gitpod, GitHub Codespaces) with all dependencies pre-installed. Platform engineering measures onboarding efficiency through 'Time to First Commit'. By leveraging Development Containers (Dev Containers) or cloud-hosted workspaces, new developers launch fully configured, reproducible development environments with one click.",
    referenceUrl: "https://containers.dev/",
    tags: ["Developer Onboarding", "Developer Onboarding", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-371",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Service Level Objectives (SLOs) for Internal Platforms: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Platform SLOs to guarantee that internal platform services (CI/CD runners, cluster APIs, registries) meet agreed reliability standards for engineering teams.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Measuring platform availability, pipeline duration, and deployment failure rates as service metrics is under consideration.",
    options: [
      { id: 'A', text: "Refuse to monitor internal deployment pipeline failures." },
      { id: 'B', text: "Blame application developers whenever internal platform infrastructure crashes." },
      { id: 'C', text: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes." },
      { id: 'D', text: "Ignore internal platform outages as long as customer-facing websites remain online." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes. A high-performing platform team establishes Service Level Objectives (SLOs) for platform services (e.g., 99.9% CI runner availability, &lt;5 min deployment time). These metrics ensure the platform remains reliable and accountable to its internal engineering customers.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["Platform SLOs", "Platform SLOs", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-372",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Service Level Objectives (SLOs) for Internal Platforms: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Platform SLOs to guarantee that internal platform services (CI/CD runners, cluster APIs, registries) meet agreed reliability standards for engineering teams.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Measuring platform availability, pipeline duration, and deployment failure rates as service metrics is under consideration.",
    options: [
      { id: 'A', text: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes." },
      { id: 'B', text: "Refuse to monitor internal deployment pipeline failures." },
      { id: 'C', text: "Blame application developers whenever internal platform infrastructure crashes." },
      { id: 'D', text: "Ignore internal platform outages as long as customer-facing websites remain online." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes. A high-performing platform team establishes Service Level Objectives (SLOs) for platform services (e.g., 99.9% CI runner availability, &lt;5 min deployment time). These metrics ensure the platform remains reliable and accountable to its internal engineering customers.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["Platform SLOs", "Platform SLOs", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-373",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Service Level Objectives (SLOs) for Internal Platforms: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Platform SLOs to guarantee that internal platform services (CI/CD runners, cluster APIs, registries) meet agreed reliability standards for engineering teams.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Measuring platform availability, pipeline duration, and deployment failure rates as service metrics is under consideration.",
    options: [
      { id: 'A', text: "Blame application developers whenever internal platform infrastructure crashes." },
      { id: 'B', text: "Refuse to monitor internal deployment pipeline failures." },
      { id: 'C', text: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes." },
      { id: 'D', text: "Ignore internal platform outages as long as customer-facing websites remain online." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes. A high-performing platform team establishes Service Level Objectives (SLOs) for platform services (e.g., 99.9% CI runner availability, &lt;5 min deployment time). These metrics ensure the platform remains reliable and accountable to its internal engineering customers.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["Platform SLOs", "Platform SLOs", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-374",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Service Level Objectives (SLOs) for Internal Platforms: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Platform SLOs to guarantee that internal platform services (CI/CD runners, cluster APIs, registries) meet agreed reliability standards for engineering teams.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Measuring platform availability, pipeline duration, and deployment failure rates as service metrics is under consideration.",
    options: [
      { id: 'A', text: "Blame application developers whenever internal platform infrastructure crashes." },
      { id: 'B', text: "Refuse to monitor internal deployment pipeline failures." },
      { id: 'C', text: "Ignore internal platform outages as long as customer-facing websites remain online." },
      { id: 'D', text: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes. A high-performing platform team establishes Service Level Objectives (SLOs) for platform services (e.g., 99.9% CI runner availability, &lt;5 min deployment time). These metrics ensure the platform remains reliable and accountable to its internal engineering customers.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["Platform SLOs", "Platform SLOs", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-375",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Service Level Objectives (SLOs) for Internal Platforms: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Platform SLOs to guarantee that internal platform services (CI/CD runners, cluster APIs, registries) meet agreed reliability standards for engineering teams.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Measuring platform availability, pipeline duration, and deployment failure rates as service metrics is under consideration.",
    options: [
      { id: 'A', text: "Ignore internal platform outages as long as customer-facing websites remain online." },
      { id: 'B', text: "Blame application developers whenever internal platform infrastructure crashes." },
      { id: 'C', text: "Refuse to monitor internal deployment pipeline failures." },
      { id: 'D', text: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Establish formal Service Level Objectives (SLOs) and error budgets for platform capabilities, measuring availability and pipeline runtimes. A high-performing platform team establishes Service Level Objectives (SLOs) for platform services (e.g., 99.9% CI runner availability, &lt;5 min deployment time). These metrics ensure the platform remains reliable and accountable to its internal engineering customers.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["Platform SLOs", "Platform SLOs", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_15;
