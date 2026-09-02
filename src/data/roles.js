/**
 * Role-based certification paths.
 *
 * Each role is an *ordered* route, not a bag of certifications: step one should be
 * genuinely startable by someone new to the role, and each later step should assume
 * the ones before it. `why` explains what that step adds to the role — it is the whole
 * reason a path beats a filter, so keep it concrete and avoid restating the cert title.
 *
 * certId values must exist in the catalog. A step naming a `planned` certification is
 * fine and is rendered as a roadmap step; the path still reads as a complete route.
 *
 * Icons are not stored here: `roleIcon(role.id)` in views/brand.js keeps the markup
 * out of the data and the glyph consistent with the discipline marks.
 */
export const ROLES = [
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    blurb: 'Build and run workloads on a public cloud, day to day.',
    path: [
      { certId: 'aws-clf', why: 'Shared responsibility, core services and pricing vocabulary before anything else.' },
      { certId: 'aws-saa', why: 'The design trade-offs you will be asked to defend in review: availability, storage class, network placement.' },
      { certId: 'azure-az104', why: 'A second cloud stops you mistaking one provider’s conventions for how cloud works.' },
      { certId: 'hashicorp-tfp', why: 'State, modules and drift — the difference between clicking in a console and operating infrastructure.' }
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    blurb: 'Own the path from commit to production.',
    path: [
      { certId: 'github-actions', why: 'Workflow authoring, runners and the secret handling that most pipeline incidents come back to.' },
      { certId: 'hashicorp-tfp', why: 'Infrastructure as code with a real state model, so environments are reproducible rather than remembered.' },
      { certId: 'k8s-cka', why: 'Almost every delivery pipeline now terminates in a cluster; you need to debug the thing you deploy to.' },
      { certId: 'aws-dop', why: 'Ties delivery, monitoring and incident response together at professional depth.' }
    ]
  },
  {
    id: 'platform-engineer',
    title: 'Platform Engineer',
    blurb: 'Build the internal platform other engineers ship on.',
    path: [
      { certId: 'k8s-cka', why: 'The substrate. Scheduling, RBAC and networking are the primitives your abstractions will hide.' },
      { certId: 'hashicorp-tfp', why: 'Module design and composition — how a platform offers a paved road without hiding the road.' },
      { certId: 'cncf-capa', why: 'Argo and GitOps: declarative delivery as the platform’s public interface.' },
      { certId: 'cncf-cnpe', why: 'Platform engineering as a discipline: golden paths, self-service, and where abstractions leak.' }
    ]
  },
  {
    id: 'sre',
    title: 'Site Reliability Engineer',
    blurb: 'Keep it up, and know why when it isn’t.',
    path: [
      { certId: 'k8s-cka', why: 'Cluster troubleshooting under time pressure is the closest exam analogue to an incident.' },
      { certId: 'cncf-otca', why: 'Traces, metrics and logs as one model, so you can answer questions you did not instrument for.' },
      { certId: 'doi-sre-foundation', why: 'SLOs, error budgets and toil — the vocabulary for arguing about reliability with product.' },
      { certId: 'doi-sre-practitioner', why: 'Applying that model to real service ownership rather than describing it.' }
    ]
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    blurb: 'Shift security left without stopping delivery.',
    path: [
      { certId: 'github-ghas', why: 'Secret scanning, dependency review and code scanning where developers actually work.' },
      { certId: 'aws-scs', why: 'Identity, key management and detection in the cloud you are defending.' },
      { certId: 'k8s-cks', why: 'Cluster hardening, admission control and supply chain — attacks that assume the platform.' },
      { certId: 'isc2-ccsp', why: 'The governance and architecture framing you need to be heard outside engineering.' }
    ]
  },
  {
    id: 'finops',
    title: 'FinOps Practitioner',
    blurb: 'Make cloud spend legible, then make it smaller.',
    path: [
      { certId: 'finops-focp', why: 'The framework, its lifecycle phases, and the vocabulary shared with finance.' },
      { certId: 'aws-clf', why: 'Enough service and pricing-model literacy to read a bill and know what changed.' },
      { certId: 'cloud-economics', why: 'Unit economics: cost per customer or per transaction, rather than cost per month.' },
      { certId: 'finops-professional', why: 'Running the practice — allocation, forecasting and the organisational side.' }
    ]
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect',
    blurb: 'Design systems you will have to justify to other architects.',
    path: [
      { certId: 'aws-clf', why: 'Service breadth first, so later trade-offs are between options you can actually name.' },
      { certId: 'aws-saa', why: 'The core discipline: matching a requirement to the cheapest design that still meets it.' },
      { certId: 'azure-az305', why: 'Designing on a second platform exposes which of your instincts were provider-specific.' },
      { certId: 'aws-sap', why: 'Multi-account, migration and organisational constraints at professional scope.' }
    ]
  }
];

export const ROLE_BY_ID = Object.fromEntries(ROLES.map(r => [r.id, r]));

/** Certification ids on a role's path, in order. */
export function roleCertIds(roleId) {
  return ROLE_BY_ID[roleId]?.path.map(step => step.certId) || [];
}
