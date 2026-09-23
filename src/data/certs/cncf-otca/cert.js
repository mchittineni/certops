/**
 * OpenTelemetry Certified Associate (OTCA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * The earlier domains in this file were not the published ones; the bank was
 * reclassified onto these in the same change.
 */
export default {
  "id": "cncf-otca",
  "provider": "Cloud Native (CNCF)",
  "code": "OTCA",
  "title": "OpenTelemetry Certified Associate",
  "category": "Kubernetes & Cloud Native",
  "tier": "associate",
  "status": "live",
  "priority": 13,
  "badgeClass": "badge-k8s",
  "icon": "cncf",
  "color": "#231F20",
  "description": "Validates OpenTelemetry knowledge: observability fundamentals, the OpenTelemetry API and SDK, the Collector, and maintaining and debugging observability pipelines.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/opentelemetry-certified-associate-otca/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Fundamentals of Observability", "weight": 18 },
    { "id": "d2", "name": "The OpenTelemetry API and SDK", "weight": 46 },
    { "id": "d3", "name": "The OpenTelemetry Collector", "weight": 26 },
    { "id": "d4", "name": "Maintaining and Debugging Observability Pipelines", "weight": 10 }
  ]
};
