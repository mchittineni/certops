/**
 * FinOps Certified AI Value (FO-AI) — exam blueprint.
 */
export default {
  "id": "finops-ai-value",
  "provider": "FinOps Foundation",
  "code": "FO-AI",
  "title": "FinOps Certified AI Value",
  "category": "FinOps",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-finops",
  "icon": "finops",
  "color": "#10b981",
  "description": "Validates specialized knowledge in governing, measuring unit economics, and optimizing GPU, LLM inference token costs, and AI training infrastructure.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://www.finops.org/certification/ai-value/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "AI/ML Infrastructure Cost Drivers (GPUs, Clusters, Storage)",
      "weight": 35
    },
    {
      "id": "d2",
      "name": "Token Economics, LLM Inference Optimization, and RAG Sizing",
      "weight": 35
    },
    {
      "id": "d3",
      "name": "Value Metrics, Forecasting, and Business ROI for Generative AI",
      "weight": 30
    }
  ]
};
