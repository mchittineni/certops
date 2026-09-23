/**
 * GitHub Advanced Security (GH-500) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of July
 * 2026), verified 2026-09-23. 100 minutes, delivered through Pearson VUE, scored
 * 700 of 1000. The guide uses GitHub's current product names: Secret Protection
 * (formerly secret scanning), supply chain security (formerly Dependabot and
 * dependency review) and Code Security (formerly code scanning with CodeQL).
 *
 * Microsoft publishes the weights as ranges (15-20/15-20/15-20/10-15/15-20/10-15);
 * the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "github-ghas",
  "provider": "GitHub",
  "code": "GH-500",
  "title": "GitHub Advanced Security",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "live",
  "priority": 17,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Validates securing code, secrets and dependencies with GitHub Secret Protection, supply chain security and Code Security, triaging and remediating alerts, and administering GitHub's security suites.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-500",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Describe GitHub Security suites, features, and ecosystem", "weight": 19 },
    { "id": "d2", "name": "Configure and use Secret Protection", "weight": 19 },
    { "id": "d3", "name": "Configure and use supply chain security", "weight": 18 },
    { "id": "d4", "name": "Configure and use Code Security", "weight": 13 },
    { "id": "d5", "name": "Security operations: best practices, prioritization, and remediation", "weight": 18 },
    { "id": "d6", "name": "GitHub Security suites administration", "weight": 13 }
  ]
};
