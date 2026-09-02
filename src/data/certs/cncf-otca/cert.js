/**
 * OpenTelemetry Certified Associate (OTCA) — exam blueprint.
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
  "description": "Validates knowledge of the OpenTelemetry standard, collectors, pipelines, instrumentation across traces, metrics, and logs, and vendor-neutral observability.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://www.cncf.io/certification/otca/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "OpenTelemetry Overview and Architecture",
      "weight": 25
    },
    {
      "id": "d2",
      "name": "OpenTelemetry Collector and Pipelines",
      "weight": 30
    },
    {
      "id": "d3",
      "name": "Instrumentation and Signals",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Operationalizing and Exporters",
      "weight": 20
    }
  ]
};
