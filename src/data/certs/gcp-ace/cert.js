/**
 * Associate Cloud Engineer (GCP-ACE) — exam blueprint.
 *
 * Everything about this certification lives in this folder: the blueprint here,
 * question packs in ./questions/, flashcard packs in ./flashcards/. Nothing
 * outside the folder needs editing — the content index is generated from it.
 *
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource. `npm run validate` warns while it is false.
 */
export default {
  "id": "gcp-ace",
  "provider": "Google Cloud",
  "code": "GCP-ACE",
  "title": "Associate Cloud Engineer",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "live",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Deploys applications, monitors operations, and manages enterprise solutions across Compute Engine, GKE, Cloud Storage, and IAM.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://cloud.google.com/learn/certification/guides/cloud-engineer",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Setting up a cloud solution environment",
      "weight": 20
    },
    {
      "id": "d2",
      "name": "Planning and configuring a cloud solution",
      "weight": 18
    },
    {
      "id": "d3",
      "name": "Deploying and implementing a cloud solution",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Ensuring successful operation of a cloud solution",
      "weight": 20
    },
    {
      "id": "d5",
      "name": "Configuring access and security",
      "weight": 17
    }
  ]
};
