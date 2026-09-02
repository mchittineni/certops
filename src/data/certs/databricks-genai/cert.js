/**
 * Databricks Certified Generative AI Engineer Associate (DB-GENAI) — exam blueprint.
 */
export default {
  "id": "databricks-genai",
  "provider": "Databricks",
  "code": "DB-GENAI",
  "title": "Databricks Certified Generative AI Engineer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-vendor-neutral",
  "icon": "databricks",
  "color": "#FF3621",
  "description": "Demonstrates technical proficiency in building production generative AI applications, vector search, RAG pipelines, and model evaluation on Databricks.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://www.databricks.com/learn/certification/generative-ai-engineer-associate",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Data Preparation, Chunking, and Embeddings for GenAI",
      "weight": 25
    },
    {
      "id": "d2",
      "name": "Retrieval Augmented Generation (RAG) and Vector Search",
      "weight": 35
    },
    {
      "id": "d3",
      "name": "Model Serving, MLflow Evaluation, and LLM Governance",
      "weight": 40
    }
  ]
};
