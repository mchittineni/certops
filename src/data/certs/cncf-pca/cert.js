/**
 * Prometheus Certified Associate (PCA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 */
export default {
  "id": "cncf-pca",
  "provider": "Cloud Native (CNCF)",
  "code": "PCA",
  "title": "Prometheus Certified Associate",
  "category": "Kubernetes & Cloud Native",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates Prometheus knowledge: observability concepts, Prometheus fundamentals, PromQL, instrumentation and exporters, and alerting and dashboarding.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/prometheus-certified-associate/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Observability Concepts", "weight": 18 },
    { "id": "d2", "name": "Prometheus Fundamentals", "weight": 20 },
    { "id": "d3", "name": "PromQL", "weight": 28 },
    { "id": "d4", "name": "Instrumentation and Exporters", "weight": 16 },
    { "id": "d5", "name": "Alerting & Dashboarding", "weight": 18 }
  ]
};
