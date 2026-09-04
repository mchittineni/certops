export const AZURE_AZ400_QUESTIONS_16 = [
  {
    id: "azure-az400-376",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Service Connections and Workload Identity Federation: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Service Connections to authenticate an Azure DevOps pipeline to deploy resources into an Azure subscription without managing or rotating client secret passwords.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Configuring Azure Resource Manager service connections with Workload Identity Federation is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID." },
      { id: 'B', text: "Create a Service Principal with a permanent client secret and never rotate the password." },
      { id: 'C', text: "Hardcode Azure global administrator credentials inside the pipeline YAML file." },
      { id: 'D', text: "Disable authentication on the Azure Resource Manager API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID. Azure DevOps supports Workload Identity Federation for Azure Resource Manager service connections. Using OpenID Connect (OIDC), Azure DevOps trades short-lived tokens with Microsoft Entra ID, eliminating the operational risk and maintenance overhead of long-lived service principal secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-with-workload-identity-federation",
    tags: ["Service Connections", "Workload Identity", "Dr Failover"]
  },
  {
    id: "azure-az400-377",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Service Connections and Workload Identity Federation: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Service Connections to authenticate an Azure DevOps pipeline to deploy resources into an Azure subscription without managing or rotating client secret passwords.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Configuring Azure Resource Manager service connections with Workload Identity Federation is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID." },
      { id: 'B', text: "Create a Service Principal with a permanent client secret and never rotate the password." },
      { id: 'C', text: "Hardcode Azure global administrator credentials inside the pipeline YAML file." },
      { id: 'D', text: "Disable authentication on the Azure Resource Manager API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID. Azure DevOps supports Workload Identity Federation for Azure Resource Manager service connections. Using OpenID Connect (OIDC), Azure DevOps trades short-lived tokens with Microsoft Entra ID, eliminating the operational risk and maintenance overhead of long-lived service principal secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-with-workload-identity-federation",
    tags: ["Service Connections", "Workload Identity", "High Load Scale"]
  },
  {
    id: "azure-az400-378",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Service Connections and Workload Identity Federation: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Service Connections to authenticate an Azure DevOps pipeline to deploy resources into an Azure subscription without managing or rotating client secret passwords.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Configuring Azure Resource Manager service connections with Workload Identity Federation is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID." },
      { id: 'B', text: "Create a Service Principal with a permanent client secret and never rotate the password." },
      { id: 'C', text: "Hardcode Azure global administrator credentials inside the pipeline YAML file." },
      { id: 'D', text: "Disable authentication on the Azure Resource Manager API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID. Azure DevOps supports Workload Identity Federation for Azure Resource Manager service connections. Using OpenID Connect (OIDC), Azure DevOps trades short-lived tokens with Microsoft Entra ID, eliminating the operational risk and maintenance overhead of long-lived service principal secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-with-workload-identity-federation",
    tags: ["Service Connections", "Workload Identity", "Security Compliance"]
  },
  {
    id: "azure-az400-379",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Service Connections and Workload Identity Federation: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Service Connections to authenticate an Azure DevOps pipeline to deploy resources into an Azure subscription without managing or rotating client secret passwords.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Configuring Azure Resource Manager service connections with Workload Identity Federation is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID." },
      { id: 'B', text: "Create a Service Principal with a permanent client secret and never rotate the password." },
      { id: 'C', text: "Hardcode Azure global administrator credentials inside the pipeline YAML file." },
      { id: 'D', text: "Disable authentication on the Azure Resource Manager API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID. Azure DevOps supports Workload Identity Federation for Azure Resource Manager service connections. Using OpenID Connect (OIDC), Azure DevOps trades short-lived tokens with Microsoft Entra ID, eliminating the operational risk and maintenance overhead of long-lived service principal secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-with-workload-identity-federation",
    tags: ["Service Connections", "Workload Identity", "Hybrid Migration"]
  },
  {
    id: "azure-az400-380",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Service Connections and Workload Identity Federation: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Service Connections to authenticate an Azure DevOps pipeline to deploy resources into an Azure subscription without managing or rotating client secret passwords.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring Azure Resource Manager service connections with Workload Identity Federation is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID." },
      { id: 'B', text: "Create a Service Principal with a permanent client secret and never rotate the password." },
      { id: 'C', text: "Hardcode Azure global administrator credentials inside the pipeline YAML file." },
      { id: 'D', text: "Disable authentication on the Azure Resource Manager API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Resource Manager Service Connection using Workload Identity Federation (OIDC) with Microsoft Entra ID. Azure DevOps supports Workload Identity Federation for Azure Resource Manager service connections. Using OpenID Connect (OIDC), Azure DevOps trades short-lived tokens with Microsoft Entra ID, eliminating the operational risk and maintenance overhead of long-lived service principal secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-with-workload-identity-federation",
    tags: ["Service Connections", "Workload Identity", "Resilience Failure"]
  },
  {
    id: "azure-az400-381",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts Feeds and Upstream Sources: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Azure Artifacts to manage internal NuGet and npm packages securely while caching public dependencies to protect builds from upstream outages.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Creating package feeds with upstream sources (NuGet, npm, PyPI) and views is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release)." },
      { id: 'B', text: "Instruct developers to commit compiled NuGet DLLs directly to Git repositories." },
      { id: 'C', text: "Host packages on an unauthenticated FTP server on the public internet." },
      { id: 'D', text: "Disable package management and compile all dependencies from raw source every time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release). Azure Artifacts allows hosting private NuGet, npm, Maven, and Python feeds. Enabling upstream sources automatically caches consumed public packages in the private feed, ensuring build reproducibility and immunity against external public registry outages or malicious package retractions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources",
    tags: ["Azure Artifacts", "Azure Artifacts", "Dr Failover"]
  },
  {
    id: "azure-az400-382",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts Feeds and Upstream Sources: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Azure Artifacts to manage internal NuGet and npm packages securely while caching public dependencies to protect builds from upstream outages.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Creating package feeds with upstream sources (NuGet, npm, PyPI) and views is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release)." },
      { id: 'B', text: "Instruct developers to commit compiled NuGet DLLs directly to Git repositories." },
      { id: 'C', text: "Host packages on an unauthenticated FTP server on the public internet." },
      { id: 'D', text: "Disable package management and compile all dependencies from raw source every time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release). Azure Artifacts allows hosting private NuGet, npm, Maven, and Python feeds. Enabling upstream sources automatically caches consumed public packages in the private feed, ensuring build reproducibility and immunity against external public registry outages or malicious package retractions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources",
    tags: ["Azure Artifacts", "Azure Artifacts", "High Load Scale"]
  },
  {
    id: "azure-az400-383",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts Feeds and Upstream Sources: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Azure Artifacts to manage internal NuGet and npm packages securely while caching public dependencies to protect builds from upstream outages.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Creating package feeds with upstream sources (NuGet, npm, PyPI) and views is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release)." },
      { id: 'B', text: "Instruct developers to commit compiled NuGet DLLs directly to Git repositories." },
      { id: 'C', text: "Host packages on an unauthenticated FTP server on the public internet." },
      { id: 'D', text: "Disable package management and compile all dependencies from raw source every time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release). Azure Artifacts allows hosting private NuGet, npm, Maven, and Python feeds. Enabling upstream sources automatically caches consumed public packages in the private feed, ensuring build reproducibility and immunity against external public registry outages or malicious package retractions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources",
    tags: ["Azure Artifacts", "Azure Artifacts", "Security Compliance"]
  },
  {
    id: "azure-az400-384",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts Feeds and Upstream Sources: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Azure Artifacts to manage internal NuGet and npm packages securely while caching public dependencies to protect builds from upstream outages.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Creating package feeds with upstream sources (NuGet, npm, PyPI) and views is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release)." },
      { id: 'B', text: "Instruct developers to commit compiled NuGet DLLs directly to Git repositories." },
      { id: 'C', text: "Host packages on an unauthenticated FTP server on the public internet." },
      { id: 'D', text: "Disable package management and compile all dependencies from raw source every time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release). Azure Artifacts allows hosting private NuGet, npm, Maven, and Python feeds. Enabling upstream sources automatically caches consumed public packages in the private feed, ensuring build reproducibility and immunity against external public registry outages or malicious package retractions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources",
    tags: ["Azure Artifacts", "Azure Artifacts", "Hybrid Migration"]
  },
  {
    id: "azure-az400-385",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts Feeds and Upstream Sources: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Azure Artifacts to manage internal NuGet and npm packages securely while caching public dependencies to protect builds from upstream outages.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Creating package feeds with upstream sources (NuGet, npm, PyPI) and views is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release)." },
      { id: 'B', text: "Instruct developers to commit compiled NuGet DLLs directly to Git repositories." },
      { id: 'C', text: "Host packages on an unauthenticated FTP server on the public internet." },
      { id: 'D', text: "Disable package management and compile all dependencies from raw source every time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Artifacts feed, configure upstream sources to public registries, and publish packages using feed views (e.g., Release). Azure Artifacts allows hosting private NuGet, npm, Maven, and Python feeds. Enabling upstream sources automatically caches consumed public packages in the private feed, ensuring build reproducibility and immunity against external public registry outages or malicious package retractions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources",
    tags: ["Azure Artifacts", "Azure Artifacts", "Resilience Failure"]
  },
  {
    id: "azure-az400-386",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Matrix Strategies and Slicing in Azure Pipelines: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Matrix Builds to test a cross-platform application across Ubuntu, Windows, and macOS agents and multiple Node.js versions concurrently.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Running parallel matrix configurations across OS platforms and language versions is under consideration.",
    options: [
      { id: 'A', text: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`." },
      { id: 'B', text: "Write three completely separate 1,000-line pipeline YAML files." },
      { id: 'C', text: "Run tests sequentially on a single slow virtual machine over 12 hours." },
      { id: 'D', text: "Skip cross-platform testing and only test on a developer laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`. A matrix strategy generates multiple parallel job dispatches from a single job specification. Each combination of matrix variables (e.g., OS: Ubuntu/Windows/macOS, Node: 18/20) executes on a separate agent concurrently, accelerating cross-platform test cycles.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/jobs-job-strategy",
    tags: ["Matrix Builds", "Matrix Strategy", "Dr Failover"]
  },
  {
    id: "azure-az400-387",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Matrix Strategies and Slicing in Azure Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Matrix Builds to test a cross-platform application across Ubuntu, Windows, and macOS agents and multiple Node.js versions concurrently.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Running parallel matrix configurations across OS platforms and language versions is under consideration.",
    options: [
      { id: 'A', text: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`." },
      { id: 'B', text: "Write three completely separate 1,000-line pipeline YAML files." },
      { id: 'C', text: "Run tests sequentially on a single slow virtual machine over 12 hours." },
      { id: 'D', text: "Skip cross-platform testing and only test on a developer laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`. A matrix strategy generates multiple parallel job dispatches from a single job specification. Each combination of matrix variables (e.g., OS: Ubuntu/Windows/macOS, Node: 18/20) executes on a separate agent concurrently, accelerating cross-platform test cycles.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/jobs-job-strategy",
    tags: ["Matrix Builds", "Matrix Strategy", "High Load Scale"]
  },
  {
    id: "azure-az400-388",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Matrix Strategies and Slicing in Azure Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Matrix Builds to test a cross-platform application across Ubuntu, Windows, and macOS agents and multiple Node.js versions concurrently.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Running parallel matrix configurations across OS platforms and language versions is under consideration.",
    options: [
      { id: 'A', text: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`." },
      { id: 'B', text: "Write three completely separate 1,000-line pipeline YAML files." },
      { id: 'C', text: "Run tests sequentially on a single slow virtual machine over 12 hours." },
      { id: 'D', text: "Skip cross-platform testing and only test on a developer laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`. A matrix strategy generates multiple parallel job dispatches from a single job specification. Each combination of matrix variables (e.g., OS: Ubuntu/Windows/macOS, Node: 18/20) executes on a separate agent concurrently, accelerating cross-platform test cycles.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/jobs-job-strategy",
    tags: ["Matrix Builds", "Matrix Strategy", "Security Compliance"]
  },
  {
    id: "azure-az400-389",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Matrix Strategies and Slicing in Azure Pipelines: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Matrix Builds to test a cross-platform application across Ubuntu, Windows, and macOS agents and multiple Node.js versions concurrently.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Running parallel matrix configurations across OS platforms and language versions is under consideration.",
    options: [
      { id: 'A', text: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`." },
      { id: 'B', text: "Write three completely separate 1,000-line pipeline YAML files." },
      { id: 'C', text: "Run tests sequentially on a single slow virtual machine over 12 hours." },
      { id: 'D', text: "Skip cross-platform testing and only test on a developer laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`. A matrix strategy generates multiple parallel job dispatches from a single job specification. Each combination of matrix variables (e.g., OS: Ubuntu/Windows/macOS, Node: 18/20) executes on a separate agent concurrently, accelerating cross-platform test cycles.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/jobs-job-strategy",
    tags: ["Matrix Builds", "Matrix Strategy", "Hybrid Migration"]
  },
  {
    id: "azure-az400-390",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Matrix Strategies and Slicing in Azure Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Matrix Builds to test a cross-platform application across Ubuntu, Windows, and macOS agents and multiple Node.js versions concurrently.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Running parallel matrix configurations across OS platforms and language versions is under consideration.",
    options: [
      { id: 'A', text: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`." },
      { id: 'B', text: "Write three completely separate 1,000-line pipeline YAML files." },
      { id: 'C', text: "Run tests sequentially on a single slow virtual machine over 12 hours." },
      { id: 'D', text: "Skip cross-platform testing and only test on a developer laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `strategy: matrix:` in the YAML job definition, specifying combinations of OS images and runtime versions with `maxParallel`. A matrix strategy generates multiple parallel job dispatches from a single job specification. Each combination of matrix variables (e.g., OS: Ubuntu/Windows/macOS, Node: 18/20) executes on a separate agent concurrently, accelerating cross-platform test cycles.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/jobs-job-strategy",
    tags: ["Matrix Builds", "Matrix Strategy", "Resilience Failure"]
  },
  {
    id: "azure-az400-391",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Caching with the Cache Task: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Build Optimization to shorten continuous integration build times by caching `node_modules` or `~/.m2` dependencies between pipeline runs.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Accelerating build pipelines with Cache@2 task for npm, NuGet, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`." },
      { id: 'B', text: "Download all dependencies afresh over the internet on every single build commit." },
      { id: 'C', text: "Run builds on a single physical server without wiping workspaces between unrelated builds." },
      { id: 'D', text: "Store dependencies on an external public file-sharing website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`. The `Cache@2` task stores and restores dependency directories between pipeline runs. By hashing package lockfiles as the cache key, the task restores dependencies from Azure DevOps cache storage in seconds if dependencies have not changed, reducing build durations drastically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/caching",
    tags: ["Build Optimization", "Pipeline Caching", "Dr Failover"]
  },
  {
    id: "azure-az400-392",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Caching with the Cache Task: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Build Optimization to shorten continuous integration build times by caching `node_modules` or `~/.m2` dependencies between pipeline runs.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Accelerating build pipelines with Cache@2 task for npm, NuGet, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`." },
      { id: 'B', text: "Download all dependencies afresh over the internet on every single build commit." },
      { id: 'C', text: "Run builds on a single physical server without wiping workspaces between unrelated builds." },
      { id: 'D', text: "Store dependencies on an external public file-sharing website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`. The `Cache@2` task stores and restores dependency directories between pipeline runs. By hashing package lockfiles as the cache key, the task restores dependencies from Azure DevOps cache storage in seconds if dependencies have not changed, reducing build durations drastically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/caching",
    tags: ["Build Optimization", "Pipeline Caching", "High Load Scale"]
  },
  {
    id: "azure-az400-393",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Caching with the Cache Task: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Build Optimization to shorten continuous integration build times by caching `node_modules` or `~/.m2` dependencies between pipeline runs.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Accelerating build pipelines with Cache@2 task for npm, NuGet, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`." },
      { id: 'B', text: "Download all dependencies afresh over the internet on every single build commit." },
      { id: 'C', text: "Run builds on a single physical server without wiping workspaces between unrelated builds." },
      { id: 'D', text: "Store dependencies on an external public file-sharing website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`. The `Cache@2` task stores and restores dependency directories between pipeline runs. By hashing package lockfiles as the cache key, the task restores dependencies from Azure DevOps cache storage in seconds if dependencies have not changed, reducing build durations drastically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/caching",
    tags: ["Build Optimization", "Pipeline Caching", "Security Compliance"]
  },
  {
    id: "azure-az400-394",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Caching with the Cache Task: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Build Optimization to shorten continuous integration build times by caching `node_modules` or `~/.m2` dependencies between pipeline runs.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Accelerating build pipelines with Cache@2 task for npm, NuGet, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`." },
      { id: 'B', text: "Download all dependencies afresh over the internet on every single build commit." },
      { id: 'C', text: "Run builds on a single physical server without wiping workspaces between unrelated builds." },
      { id: 'D', text: "Store dependencies on an external public file-sharing website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`. The `Cache@2` task stores and restores dependency directories between pipeline runs. By hashing package lockfiles as the cache key, the task restores dependencies from Azure DevOps cache storage in seconds if dependencies have not changed, reducing build durations drastically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/caching",
    tags: ["Build Optimization", "Pipeline Caching", "Hybrid Migration"]
  },
  {
    id: "azure-az400-395",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Caching with the Cache Task: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Build Optimization to shorten continuous integration build times by caching `node_modules` or `~/.m2` dependencies between pipeline runs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Accelerating build pipelines with Cache@2 task for npm, NuGet, and Maven dependencies is under consideration.",
    options: [
      { id: 'A', text: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`." },
      { id: 'B', text: "Download all dependencies afresh over the internet on every single build commit." },
      { id: 'C', text: "Run builds on a single physical server without wiping workspaces between unrelated builds." },
      { id: 'D', text: "Store dependencies on an external public file-sharing website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the `Cache@2` task in the pipeline specifying a cache `key` based on lockfiles (`package-lock.json`) and cache `path`. The `Cache@2` task stores and restores dependency directories between pipeline runs. By hashing package lockfiles as the cache key, the task restores dependencies from Azure DevOps cache storage in seconds if dependencies have not changed, reducing build durations drastically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/caching",
    tags: ["Build Optimization", "Pipeline Caching", "Resilience Failure"]
  },
  {
    id: "azure-az400-396",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Slots for Zero-Downtime App Service Releases: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates App Service Slots to deploy a new release of a critical web application to Azure App Service without dropping user connections or incurring cold start latency.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Staging deployment slots with slot swapping and auto-swap in Azure App Service is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production." },
      { id: 'B', text: "Deploy directly into the active production slot during peak business traffic." },
      { id: 'C', text: "Stop the production App Service for 30 minutes while deploying new code." },
      { id: 'D', text: "Delete the App Service instance and recreate it using ARM templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production. Azure App Service deployment slots allow deploying to a non-production staging slot. The application warms up in staging without user impact. Swapping slots re-routes traffic instantly at the load balancer level with zero downtime and eliminates cold start delays.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["App Service Slots", "Deployment Slots", "Dr Failover"]
  },
  {
    id: "azure-az400-397",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Slots for Zero-Downtime App Service Releases: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates App Service Slots to deploy a new release of a critical web application to Azure App Service without dropping user connections or incurring cold start latency.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Staging deployment slots with slot swapping and auto-swap in Azure App Service is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production." },
      { id: 'B', text: "Deploy directly into the active production slot during peak business traffic." },
      { id: 'C', text: "Stop the production App Service for 30 minutes while deploying new code." },
      { id: 'D', text: "Delete the App Service instance and recreate it using ARM templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production. Azure App Service deployment slots allow deploying to a non-production staging slot. The application warms up in staging without user impact. Swapping slots re-routes traffic instantly at the load balancer level with zero downtime and eliminates cold start delays.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["App Service Slots", "Deployment Slots", "High Load Scale"]
  },
  {
    id: "azure-az400-398",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Slots for Zero-Downtime App Service Releases: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates App Service Slots to deploy a new release of a critical web application to Azure App Service without dropping user connections or incurring cold start latency.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Staging deployment slots with slot swapping and auto-swap in Azure App Service is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production." },
      { id: 'B', text: "Deploy directly into the active production slot during peak business traffic." },
      { id: 'C', text: "Stop the production App Service for 30 minutes while deploying new code." },
      { id: 'D', text: "Delete the App Service instance and recreate it using ARM templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production. Azure App Service deployment slots allow deploying to a non-production staging slot. The application warms up in staging without user impact. Swapping slots re-routes traffic instantly at the load balancer level with zero downtime and eliminates cold start delays.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["App Service Slots", "Deployment Slots", "Security Compliance"]
  },
  {
    id: "azure-az400-399",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Slots for Zero-Downtime App Service Releases: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates App Service Slots to deploy a new release of a critical web application to Azure App Service without dropping user connections or incurring cold start latency.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Staging deployment slots with slot swapping and auto-swap in Azure App Service is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production." },
      { id: 'B', text: "Deploy directly into the active production slot during peak business traffic." },
      { id: 'C', text: "Stop the production App Service for 30 minutes while deploying new code." },
      { id: 'D', text: "Delete the App Service instance and recreate it using ARM templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production. Azure App Service deployment slots allow deploying to a non-production staging slot. The application warms up in staging without user impact. Swapping slots re-routes traffic instantly at the load balancer level with zero downtime and eliminates cold start delays.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["App Service Slots", "Deployment Slots", "Hybrid Migration"]
  },
  {
    id: "azure-az400-400",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Slots for Zero-Downtime App Service Releases: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates App Service Slots to deploy a new release of a critical web application to Azure App Service without dropping user connections or incurring cold start latency.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Staging deployment slots with slot swapping and auto-swap in Azure App Service is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production." },
      { id: 'B', text: "Deploy directly into the active production slot during peak business traffic." },
      { id: 'C', text: "Stop the production App Service for 30 minutes while deploying new code." },
      { id: 'D', text: "Delete the App Service instance and recreate it using ARM templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version to a staging deployment slot, warm up the application, and execute a slot swap to swap staging and production. Azure App Service deployment slots allow deploying to a non-production staging slot. The application warms up in staging without user impact. Swapping slots re-routes traffic instantly at the load balancer level with zero downtime and eliminates cold start delays.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["App Service Slots", "Deployment Slots", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_16;
