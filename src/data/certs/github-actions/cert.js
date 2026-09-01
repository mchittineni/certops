/**
 * GitHub Actions Certification (GH-200) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert github-actions --kind questions --count 50
 */
export default {
  "id": "github-actions",
  "provider": "GitHub",
  "code": "GH-200",
  "title": "GitHub Actions Certification",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "live",
  "priority": 16,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Demonstrates comprehensive expertise in automating CI/CD workflows, authoring custom actions, and governing secure GitHub Actions deployments.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://resources.github.com/learn/certifications/actions/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Author and maintain workflows",
      "weight": 40
    },
    {
      "id": "d2",
      "name": "Consume workflows and manage GitHub Actions",
      "weight": 25
    },
    {
      "id": "d3",
      "name": "Author and maintain actions",
      "weight": 15
    },
    {
      "id": "d4",
      "name": "Manage enterprise runners, secrets, and governance",
      "weight": 20
    }
  ]
};
