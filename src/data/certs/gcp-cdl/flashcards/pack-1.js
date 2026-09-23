export const GCP_CDL_FLASHCARDS_1 = [
  {
    id: 'gcp-cdl-fc-1',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is the core distinction between Regions, Zones, and Multi-Regions in Google Cloud?',
    hint: 'Geographic fault boundaries.',
    back: 'A <strong>Zone</strong> is a single failure domain with high-speed connectivity; a <strong>Region</strong> is a distinct geographic location containing three or more zones; a <strong>Multi-Region</strong> spans two or more geographic regions (e.g. US or EU) providing continental geo-redundancy.',
    tags: ['Google Cloud', 'Regions', 'Zones']
  },
  {
    id: 'gcp-cdl-fc-2',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd2',
    front: 'When would you select Cloud Bigtable over Cloud Spanner?',
    hint: 'NoSQL high-throughput time-series vs globally consistent relational SQL.',
    back: 'Choose <strong>Cloud Bigtable</strong> for ultra-high throughput, single-digit millisecond NoSQL analytical data (IoT, time-series, financial ticker telemetry); choose <strong>Cloud Spanner</strong> for mission-critical relational transactions requiring strict ACID consistency at global scale.',
    tags: ['Bigtable', 'Spanner', 'Databases']
  },
  {
    id: 'gcp-cdl-fc-3',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is Google Kubernetes Engine (GKE) Autopilot mode?',
    hint: 'Hands-off cluster and node management.',
    back: '<strong>GKE Autopilot</strong> is an automated mode of operation where Google Cloud provisions, optimizes, and manages the entire cluster infrastructure, including worker nodes, control plane, scaling, and security hardening, charging only for requested pod resources.',
    tags: ['GKE', 'Kubernetes', 'Autopilot']
  },
  {
    id: 'gcp-cdl-fc-4',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd6',
    front: 'What is Google Cloud Resource Hierarchy and how do permissions inherit?',
    hint: 'Organization > Folders > Projects > Resources.',
    back: 'The hierarchy consists of <strong>Organization &gt; Folders &gt; Projects &gt; Resources</strong>. IAM permissions inherit downward strictly: granting an IAM role at a folder or organization level propagates to all descendant projects and resources and cannot be stripped away at a lower child scope.',
    tags: ['Resource Hierarchy', 'IAM', 'Governance']
  }
];

export default GCP_CDL_FLASHCARDS_1;
