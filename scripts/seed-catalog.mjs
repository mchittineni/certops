#!/usr/bin/env node
/**
 * Seeds the certification catalogue from the 2026 Top-50 roadmap.
 *
 * Idempotent: existing certification folders are left untouched, so it is safe
 * to re-run after the list changes. New entries are created as
 * status: 'planned' with TODO domains — they appear on the roadmap panel but
 * cannot be launched until someone fills in the blueprint and adds content.
 *
 * Passing scores and durations for planned certifications are PLACEHOLDERS.
 * blueprintVerified stays false until a human checks each one against the
 * official exam guide; `npm run validate` warns while that is the case.
 *
 * Run: npm run seed:catalog
 */
import fs from 'fs';
import path from 'path';

const CATEGORIES = {
  cloud: 'Cloud Engineering',
  devops: 'DevOps & SRE',
  k8s: 'Kubernetes & Cloud Native',
  platform: 'Platform Engineering',
  finops: 'FinOps',
  security: 'DevSecOps & Security'
};

const PROVIDER_STYLE = {
  'AWS': ['badge-aws', 'aws', '#ff9900'],
  'Microsoft Azure': ['badge-azure', 'azure', '#0078D4'],
  'Google Cloud': ['badge-gcp', 'googlecloud', '#4285F4'],
  'Cloud Native (CNCF)': ['badge-k8s', 'kubernetes', '#326CE5'],
  'HashiCorp': ['badge-hashicorp', 'terraform', '#7B42BC'],
  'GitHub': ['badge-github', 'github', '#8b5cf6'],
  'Docker': ['badge-docker', 'docker', '#2496ED'],
  'DevOps Institute': ['badge-neutral', 'devops', '#14b8a6'],
  'FinOps Foundation': ['badge-finops', 'finops', '#10b981'],
  'ISC2': ['badge-security', 'shield', '#ef4444'],
  'OffSec': ['badge-security', 'shield', '#dc2626'],
  'Vendor Neutral': ['badge-neutral', 'cloud', '#64748b']
};

// [id, provider, code, title, category, tier, pass, max, minutes, priority, sourceUrl]
const ROADMAP = [
  // ── Cloud Engineering ────────────────────────────────────────────────────
  ['aws-saa', 'AWS', 'SAA-C03', 'AWS Certified Solutions Architect - Associate', 'cloud', 'associate', 720, 1000, 130, null],
  ['aws-sap', 'AWS', 'SAP-C02', 'AWS Certified Solutions Architect - Professional', 'cloud', 'professional', 750, 1000, 180, null],
  ['aws-dva', 'AWS', 'DVA-C02', 'AWS Certified Developer - Associate', 'cloud', 'associate', 720, 1000, 130, null],
  ['aws-soa', 'AWS', 'SOA-C02', 'AWS Certified SysOps Administrator - Associate', 'cloud', 'associate', 720, 1000, 130, null],
  ['aws-dop', 'AWS', 'DOP-C02', 'AWS Certified DevOps Engineer - Professional', 'devops', 'professional', 750, 1000, 180, 1],
  ['aws-ans', 'AWS', 'ANS-C01', 'AWS Certified Advanced Networking - Specialty', 'cloud', 'specialty', 750, 1000, 170, null],
  ['aws-scs', 'AWS', 'SCS-C02', 'AWS Certified Security - Specialty', 'security', 'specialty', 750, 1000, 170, 11],
  ['azure-az104', 'Microsoft Azure', 'AZ-104', 'Microsoft Certified: Azure Administrator Associate', 'cloud', 'associate', 700, 1000, 120, null],
  ['azure-az204', 'Microsoft Azure', 'AZ-204', 'Microsoft Certified: Azure Developer Associate', 'cloud', 'associate', 700, 1000, 120, null],
  ['azure-az305', 'Microsoft Azure', 'AZ-305', 'Microsoft Certified: Azure Solutions Architect Expert', 'cloud', 'professional', 700, 1000, 120, null],
  ['gcp-ace', 'Google Cloud', 'GCP-ACE', 'Associate Cloud Engineer', 'cloud', 'associate', 70, 100, 120, null],
  ['gcp-pca', 'Google Cloud', 'GCP-PCA', 'Google Cloud Professional Cloud Architect', 'cloud', 'professional', 70, 100, 120, null],
  ['gcp-pcdoe', 'Google Cloud', 'GCP-PCDE', 'Google Cloud Professional Cloud DevOps Engineer', 'devops', 'professional', 70, 100, 120, 5],
  ['gcp-pcse', 'Google Cloud', 'GCP-PCSE', 'Google Cloud Professional Cloud Security Engineer', 'security', 'professional', 70, 100, 120, null],
  ['gcp-pmle', 'Google Cloud', 'GCP-PMLE', 'Google Cloud Professional Machine Learning Engineer', 'cloud', 'professional', 70, 100, 120, 15],

  // ── DevOps & SRE ─────────────────────────────────────────────────────────
  ['azure-az400', 'Microsoft Azure', 'AZ-400', 'Microsoft Certified: DevOps Engineer Expert', 'devops', 'professional', 700, 1000, 150, 6],
  ['hashicorp-tfa', 'HashiCorp', 'TA-003', 'HashiCorp Certified: Terraform Associate', 'devops', 'associate', 70, 100, 60, null],
  ['hashicorp-tfp', 'HashiCorp', 'TF-PRO', 'HashiCorp Certified: Terraform Authoring & Operations Professional', 'devops', 'professional', 70, 100, 180, 4],
  ['github-actions', 'GitHub', 'GH-200', 'GitHub Actions Certification', 'devops', 'associate', 70, 100, 120, null],
  ['github-ghas', 'GitHub', 'GH-500', 'GitHub Advanced Security Certification', 'security', 'associate', 70, 100, 120, null],
  ['docker-dca', 'Docker', 'DCA', 'Docker Certified Associate', 'devops', 'associate', 65, 100, 90, null],
  ['doi-devops-foundation', 'DevOps Institute', 'DOF', 'DevOps Institute DevOps Foundation', 'devops', 'foundational', 65, 100, 60, null],
  ['doi-devops-leader', 'DevOps Institute', 'DOL', 'DevOps Institute DevOps Leader', 'devops', 'professional', 65, 100, 60, null],
  ['doi-sre-foundation', 'DevOps Institute', 'SREF', 'DevOps Institute SRE Foundation', 'devops', 'foundational', 65, 100, 60, null],
  ['doi-sre-practitioner', 'DevOps Institute', 'SREP', 'DevOps Institute SRE Practitioner', 'devops', 'professional', 65, 100, 90, null],

  // ── Kubernetes & Cloud Native ────────────────────────────────────────────
  ['k8s-cka', 'Cloud Native (CNCF)', 'CKA', 'Certified Kubernetes Administrator', 'k8s', 'professional', 66, 100, 120, 2],
  ['k8s-ckad', 'Cloud Native (CNCF)', 'CKAD', 'Certified Kubernetes Application Developer', 'k8s', 'professional', 66, 100, 120, null],
  ['k8s-cks', 'Cloud Native (CNCF)', 'CKS', 'Certified Kubernetes Security Specialist', 'security', 'professional', 67, 100, 120, 3],
  ['cncf-kcna', 'Cloud Native (CNCF)', 'KCNA', 'Kubernetes and Cloud Native Associate', 'k8s', 'associate', 75, 100, 90, null],
  ['cncf-kcsa', 'Cloud Native (CNCF)', 'KCSA', 'Kubernetes and Cloud Native Security Associate', 'security', 'associate', 75, 100, 90, null],
  ['cncf-capa', 'Cloud Native (CNCF)', 'CAPA', 'Certified Argo Project Associate', 'k8s', 'associate', 75, 100, 90, null],
  ['cncf-cgoa', 'Cloud Native (CNCF)', 'CGOA', 'GitOps Certified Associate', 'k8s', 'associate', 75, 100, 90, 9],
  ['cncf-cba', 'Cloud Native (CNCF)', 'CBA', 'Certified Backstage Associate', 'platform', 'associate', 75, 100, 90, 14],
  ['cncf-otca', 'Cloud Native (CNCF)', 'OTCA', 'OpenTelemetry Certified Associate', 'k8s', 'associate', 75, 100, 90, 13],
  ['cncf-pca', 'Cloud Native (CNCF)', 'PCA', 'Prometheus Certified Associate', 'k8s', 'associate', 75, 100, 90, null],

  // ── Platform Engineering ─────────────────────────────────────────────────
  ['cncf-cnpa', 'Cloud Native (CNCF)', 'CNPA', 'Certified Cloud Native Platform Engineering Associate', 'platform', 'associate', 75, 100, 90, 7],
  ['cncf-cnpe', 'Cloud Native (CNCF)', 'CNPE', 'Certified Cloud Native Platform Engineer', 'platform', 'professional', 67, 100, 120, 8],
  ['cncf-cca', 'Cloud Native (CNCF)', 'CCA', 'Cilium Certified Associate', 'platform', 'associate', 75, 100, 90, null],
  ['cncf-ica', 'Cloud Native (CNCF)', 'ICA', 'Istio Certified Associate', 'platform', 'associate', 75, 100, 90, null],
  ['cncf-kca', 'Cloud Native (CNCF)', 'KCA', 'Kyverno Certified Associate', 'platform', 'associate', 75, 100, 90, null],

  // ── FinOps ───────────────────────────────────────────────────────────────
  ['finops-focp', 'FinOps Foundation', 'FOCP', 'FinOps Certified Practitioner', 'finops', 'foundational', 75, 100, 60, 10],
  ['finops-professional', 'FinOps Foundation', 'FOC-PRO', 'FinOps Certified Professional', 'finops', 'professional', 75, 100, 90, null],
  ['finops-engineer', 'FinOps Foundation', 'FOCE', 'FinOps Certified Engineer', 'finops', 'professional', 75, 100, 90, null],
  ['finops-csp', 'FinOps Foundation', 'FOC-CSP', 'FinOps Certified for Cloud Service Providers', 'finops', 'specialty', 75, 100, 60, null],
  ['cloud-economics', 'Vendor Neutral', 'CLOUD-ECON', 'Cloud Financial Management / Cloud Economics', 'finops', 'foundational', 70, 100, 60, null],

  // ── DevSecOps & Security ─────────────────────────────────────────────────
  ['doi-devsecops-foundation', 'DevOps Institute', 'DSOF', 'DevSecOps Foundation', 'security', 'foundational', 65, 100, 60, null],
  ['doi-devsecops-practitioner', 'DevOps Institute', 'DSOP', 'DevSecOps Practitioner', 'security', 'professional', 65, 100, 90, null],
  ['isc2-cissp', 'ISC2', 'CISSP', 'Certified Information Systems Security Professional', 'security', 'professional', 700, 1000, 240, null],
  ['isc2-ccsp', 'ISC2', 'CCSP', 'Certified Cloud Security Professional', 'security', 'professional', 700, 1000, 180, 12],
  ['offsec-oscp', 'OffSec', 'OSCP', 'Offensive Security Certified Professional', 'security', 'professional', 70, 100, 1440, null]
];

const CERTS_DIR = 'src/data/certs';
let created = 0;
let skipped = 0;

for (const [id, provider, code, title, category, tier, passingScore, maxScore, minutes, priority] of ROADMAP) {
  const dir = path.join(CERTS_DIR, id);
  if (fs.existsSync(dir)) { skipped++; continue; }

  const [badgeClass, icon, color] = PROVIDER_STYLE[provider] || PROVIDER_STYLE['Vendor Neutral'];
  const blueprint = {
    id, provider, code, title,
    category: CATEGORIES[category],
    tier,
    status: 'planned',
    priority,
    badgeClass, icon, color,
    description: `TODO one-sentence description of what ${code} validates.`,
    passingScore, maxScore,
    defaultTimeMinutes: minutes,
    blueprintSource: 'https://TODO-official-exam-guide',
    blueprintVerified: false,
    domains: [
      { id: 'd1', name: 'TODO Domain 1', weight: 34 },
      { id: 'd2', name: 'TODO Domain 2', weight: 33 },
      { id: 'd3', name: 'TODO Domain 3', weight: 33 }
    ]
  };

  fs.mkdirSync(path.join(dir, 'questions'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'flashcards'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'cert.js'), `/**
 * ${title} (${code}) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert ${id} --kind questions --count 50
 */
export default ${JSON.stringify(blueprint, null, 2)};
`);
  created++;
}

console.log(`seeded ${created} new certification folder(s), left ${skipped} existing one(s) untouched`);
console.log('next: npm run build:content && npm run validate');
