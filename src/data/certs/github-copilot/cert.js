/**
 * GitHub Copilot (GH-300) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of
 * August 7, 2026), verified 2026-09-23. 100 minutes, delivered through Pearson VUE,
 * scored 700 of 1000. The published outline lists "GitHub Copilot features (25-30%)" twice; it is treated as one domain here.
 *
 * Microsoft publishes the weights as ranges (15-20/25-30/10-15/10-15/10-15/10-15); the
 * midpoints below are normalised to sum to 100.
 */
export default {
  "id": "github-copilot",
  "provider": "GitHub",
  "code": "GH-300",
  "title": "GitHub Copilot",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Validates responsible, productive use of GitHub Copilot: IDE, CLI and agent features, data handling and architecture, prompt engineering and context, developer productivity, and privacy and content exclusions.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Use GitHub Copilot responsibly", "weight": 19 },
    { "id": "d2", "name": "Use GitHub Copilot features", "weight": 29 },
    { "id": "d3", "name": "Understand GitHub Copilot data and architecture", "weight": 13 },
    { "id": "d4", "name": "Apply prompt engineering and context crafting", "weight": 13 },
    { "id": "d5", "name": "Improve developer productivity with GitHub Copilot", "weight": 13 },
    { "id": "d6", "name": "Configure privacy, content exclusions, and safeguards", "weight": 13 }
  ]
};
