/**
 * GitHub Actions (GH-200) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of January
 * 2026), verified 2026-09-23. 100 minutes, delivered through Pearson VUE, scored
 * 700 of 1000. "Secure and optimize automation" is a domain of its own in this
 * version of the exam.
 *
 * Microsoft publishes the weights as ranges (20-25/15-20/15-20/20-25/10-15); the
 * midpoints below are normalised to sum to 100.
 */
export default {
  "id": "github-actions",
  "provider": "GitHub",
  "code": "GH-200",
  "title": "GitHub Actions",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "live",
  "priority": 16,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Validates authoring and managing workflows, consuming and troubleshooting runs, building actions, managing GitHub Actions for the enterprise, and securing and optimising automation.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Author and manage workflows", "weight": 24 },
    { "id": "d2", "name": "Consume and troubleshoot workflows", "weight": 19 },
    { "id": "d3", "name": "Author and maintain actions", "weight": 19 },
    { "id": "d4", "name": "Manage GitHub Actions for the enterprise", "weight": 24 },
    { "id": "d5", "name": "Secure and optimize automation", "weight": 14 }
  ]
};
