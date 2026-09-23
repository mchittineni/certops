/**
 * GitHub Foundations (GH-900) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of
 * January 2026), verified 2026-09-23. 100 minutes, delivered through Pearson VUE,
 * scored 700 of 1000. Beginner level. Under Microsoft policy for fundamentals exams it does not expire.
 *
 * Microsoft publishes the weights as ranges (25-30/10-15/10-15/10-15/5-10/10-15/5-10); the
 * midpoints below are normalised to sum to 100.
 */
export default {
  "id": "github-foundations",
  "provider": "GitHub",
  "code": "GH-900",
  "title": "GitHub Foundations",
  "category": "DevOps & SRE",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Validates foundational knowledge of Git and GitHub: repositories, collaboration, modern development practices including Actions, Copilot and Codespaces, project management, security and administration basics, and the GitHub community.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-900",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Understand Git and GitHub basics", "weight": 30 },
    { "id": "d2", "name": "Work with GitHub repositories", "weight": 14 },
    { "id": "d3", "name": "Collaborate using GitHub", "weight": 14 },
    { "id": "d4", "name": "Apply modern development practices", "weight": 13 },
    { "id": "d5", "name": "Manage projects with GitHub", "weight": 8 },
    { "id": "d6", "name": "Understand privacy, security, and administration", "weight": 13 },
    { "id": "d7", "name": "Explore the GitHub community", "weight": 8 }
  ]
};
