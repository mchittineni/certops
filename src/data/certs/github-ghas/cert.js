/**
 * GitHub Advanced Security Certification (GH-500) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert github-ghas --kind questions --count 50
 */
export default {
  "id": "github-ghas",
  "provider": "GitHub",
  "code": "GH-500",
  "title": "GitHub Advanced Security Certification",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "live",
  "priority": 17,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Validates expertise in secret scanning, Dependabot supply chain security, CodeQL static code analysis, and enterprise security governance on GitHub.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://resources.github.com/learn/certifications/advanced-security/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Secret Scanning & Push Protection",
      "weight": 25
    },
    {
      "id": "d2",
      "name": "Dependabot & Supply Chain Security",
      "weight": 25
    },
    {
      "id": "d3",
      "name": "Code Scanning & CodeQL Analysis",
      "weight": 35
    },
    {
      "id": "d4",
      "name": "Security Policies, Compliance & Governance",
      "weight": 15
    }
  ]
};
