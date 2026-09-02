/**
 * Microsoft Certified: Cloud and AI Security Engineer Associate (SC-500) — exam blueprint.
 */
export default {
  "id": "azure-sc500",
  "provider": "Microsoft Azure",
  "code": "SC-500",
  "title": "Microsoft Certified: Cloud and AI Security Engineer Associate",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates expertise in securing cloud infrastructure, generative AI pipelines, prompt injection defense, Defender for Cloud, and Entra ID governance.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Implement identity, access, and Entra ID governance",
      "weight": 25
    },
    {
      "id": "d2",
      "name": "Secure cloud infrastructure, networking, and compute",
      "weight": 30
    },
    {
      "id": "d3",
      "name": "Secure AI workloads, models, data pipelines, and prompt boundaries",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Manage security posture, compliance, and threat detection with Defender",
      "weight": 20
    }
  ]
};
