export const AZURE_AZ400_FLASHCARDS_4 = [
  {
    "id": "azure-az400-fc-76",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "Service Connections: Workload Identity Federation (OIDC) vs. Service Principal Secrets",
    "hint": "Zero stored static secrets vs. expiring client secret strings.",
    "back": "<strong>Workload Identity Federation</strong> uses OpenID Connect (OIDC) to issue short-lived federated access tokens directly from Microsoft Entra ID per pipeline run, eliminating the security hazard of storing, rotating, and managing static service principal client secrets.",
    "tags": [
      "Azure Pipelines",
      "Workload Identity",
      "OIDC",
      "Security"
    ]
  },
  {
    "id": "azure-az400-fc-77",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "App Service Deployment Slots: Swap with Preview",
    "hint": "Testing staging configuration with production environment variables before swapping.",
    "back": "<strong>Swap with Preview</strong> performs a two-phase swap: it applies production configuration settings to the staging slot first, allowing engineers to verify application health under true production environment variables before completing the final traffic switch.",
    "tags": [
      "App Service",
      "Deployment Slots",
      "Blue/Green"
    ]
  },
  {
    "id": "azure-az400-fc-78",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "Self-Hosted Agents vs. Microsoft-Hosted Agents",
    "hint": "Custom software and private network reach vs. zero maintenance fresh VMs.",
    "back": "<strong>Microsoft-Hosted Agents</strong> run in clean, disposable Azure VMs with maintenance handled by Microsoft, but cannot access private on-premises networks. <strong>Self-Hosted Agents</strong> provide persistent build caches, custom SDKs, and direct connectivity to private VNet/on-premises resources.",
    "tags": [
      "Azure Pipelines",
      "Agents",
      "Infrastructure"
    ]
  },
  {
    "id": "azure-az400-fc-79",
    "difficulty": "easy",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "Azure Artifacts Upstream Sources",
    "hint": "Caching public packages locally for build resilience and security.",
    "back": "<strong>Upstream Sources</strong> allow Azure Artifacts feeds to act as a proxy for public registries (npmjs.com, nuget.org, PyPI). Packages downloaded from upstream are cached inside the private feed, insulating builds from public registry outages and deletion.",
    "tags": [
      "Azure Artifacts",
      "Upstream Sources",
      "Package Management"
    ]
  },
  {
    "id": "azure-az400-fc-80",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "Azure App Configuration Feature Flags",
    "hint": "Decoupling deployment from release via dynamic runtime toggles.",
    "back": "<strong>Azure App Configuration Feature Manager</strong> allows defining boolean feature flags and targeted rollout filters (e.g. 15% user percentage) that applications query dynamically, allowing features to be toggled on/off without redeploying code.",
    "tags": [
      "App Configuration",
      "Feature Flags",
      "DevOps"
    ]
  },
  {
    "id": "azure-az400-fc-81",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #1",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #1</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-82",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #2",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #2</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-83",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #3",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #3</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-84",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #4",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #4</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-85",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #5",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #5</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-86",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #6",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #6</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-87",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #7",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #7</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-88",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #8",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #8</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-89",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #9",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #9</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-90",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #10",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #10</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-91",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #11",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #11</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-92",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #12",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #12</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-93",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #13",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #13</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-94",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #14",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #14</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-95",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #15",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #15</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-96",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #16",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #16</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-97",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #17",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #17</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-98",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #18",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #18</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-99",
    "difficulty": "medium",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #19",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #19</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  },
  {
    "id": "azure-az400-fc-100",
    "difficulty": "hard",
    "certId": "azure-az400",
    "domainId": "d3",
    "front": "CI/CD Pipeline Pattern #20",
    "hint": "Multi-stage YAML construct, container rollout, or deployment gate.",
    "back": "<strong>CI/CD Pipeline Pattern #20</strong> enforces declarative pipeline templates, container registry caching with ACR, and automated rollback triggers across hybrid environments.",
    "tags": [
      "Azure Pipelines",
      "YAML",
      "CI/CD"
    ]
  }
];

export default AZURE_AZ400_FLASHCARDS_4;
