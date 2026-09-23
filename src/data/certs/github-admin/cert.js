/**
 * GitHub Administration (GH-100) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of
 * July 2026), verified 2026-09-23. 100 minutes, delivered through Pearson VUE,
 * scored 700 of 1000. The exam itself is titled "GitHub Enterprise Administrator".
 *
 * Microsoft publishes the weights as ranges (15-20/10-15/25-30/20-25/10-15); the
 * midpoints below are normalised to sum to 100.
 */
export default {
  "id": "github-admin",
  "provider": "GitHub",
  "code": "GH-100",
  "title": "GitHub Administration",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Validates GitHub Enterprise administration: identities and access, enterprise environment and licensing, secure development and compliance, GitHub Actions governance, and monitoring usage across GHEC and GHES.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-100",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Manage GitHub identities and access", "weight": 19 },
    { "id": "d2", "name": "Administer GitHub Enterprise environment", "weight": 14 },
    { "id": "d3", "name": "Implement secure software development and compliance", "weight": 30 },
    { "id": "d4", "name": "Manage GitHub Actions", "weight": 24 },
    { "id": "d5", "name": "Monitor and optimize GitHub usage", "weight": 13 }
  ]
};
