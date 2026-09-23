export const AZURE_AZ500_FLASHCARDS_1 = [
  {
    id: 'azure-az500-fc-1',
    difficulty: 'easy',
    certId: 'azure-az500',
    domainId: 'd1',
    front: 'What is Microsoft Entra Privileged Identity Management (PIM)?',
    hint: 'Just-in-time privileged access.',
    back: '<strong>Entra ID PIM</strong> manages, controls, and monitors access to critical resources. It provides just-in-time role activation, time-bound access, approval requirements, multi-factor authentication enforcement, and access reviews for privileged roles.',
    tags: ['Entra ID', 'PIM', 'Identity']
  },
  {
    id: 'azure-az500-fc-2',
    difficulty: 'medium',
    certId: 'azure-az500',
    domainId: 'd2',
    front: 'How does an Azure Private Endpoint differ from a Service Endpoint?',
    hint: 'Private IP inside VNet vs routing optimization over public IP.',
    back: 'A <strong>Private Endpoint</strong> injects a network interface with a private IP address into your VNet subnet via Azure Private Link. A <strong>Service Endpoint</strong> provides optimized routing over the Azure backbone to the public IP of the PaaS service without creating a private IP in your VNet.',
    tags: ['Private Link', 'Service Endpoints', 'Networking']
  },
  {
    id: 'azure-az500-fc-3',
    difficulty: 'medium',
    certId: 'azure-az500',
    domainId: 'd3',
    front: 'What security feature protects secrets in Azure Key Vault from accidental or malicious deletion?',
    hint: 'Soft delete and purge protection.',
    back: '<strong>Soft Delete</strong> retains deleted vaults and cryptographic keys for a configurable retention window (default 90 days), while <strong>Purge Protection</strong> enforces a mandatory retention period during which no one (including subscription owners) can permanently destroy the vault.',
    tags: ['Key Vault', 'Soft Delete', 'Purge Protection']
  },
  {
    id: 'azure-az500-fc-4',
    difficulty: 'hard',
    certId: 'azure-az500',
    domainId: 'd4',
    front: 'What is the relationship between Microsoft Defender for Cloud and Microsoft Sentinel?',
    hint: 'Cloud security posture / XDR vs cloud SIEM / SOAR.',
    back: '<strong>Microsoft Defender for Cloud</strong> acts as a Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platform (CWPP/XDR) tool. <strong>Microsoft Sentinel</strong> is a cloud-native SIEM and SOAR solution that ingests telemetry across all clouds, firewalls, and endpoints (including Defender) for deep correlation and automated playbooks.',
    tags: ['Defender for Cloud', 'Microsoft Sentinel', 'SIEM']
  }
];

export default AZURE_AZ500_FLASHCARDS_1;
