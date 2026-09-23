/**
 * GitHub Certified: Agentic AI Developer (GH-600) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of
 * September 2026), verified 2026-09-23. 120 minutes, delivered through Pearson VUE,
 * scored 700 of 1000. New exam, intermediate level, English only.
 *
 * Microsoft publishes the weights as ranges (15-20/20-25/10-15/15-20/15-20/10-15); the
 * midpoints below are normalised to sum to 100.
 */
export default {
  "id": "github-agentic-ai",
  "provider": "GitHub",
  "code": "GH-600",
  "title": "GitHub Certified: Agentic AI Developer",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-github",
  "icon": "github",
  "color": "#8b5cf6",
  "description": "Validates operating, integrating and governing AI agents in production SDLC workflows with GitHub as the control plane: agent architecture, tools and MCP, memory and state, evaluation and tuning, multi-agent orchestration, and guardrails.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Prepare agent architecture and SDLC processes", "weight": 18 },
    { "id": "d2", "name": "Implement tool use and environment interaction", "weight": 22 },
    { "id": "d3", "name": "Manage memory, state, and execution", "weight": 12 },
    { "id": "d4", "name": "Perform evaluation, error analysis, and tuning", "weight": 18 },
    { "id": "d5", "name": "Orchestrate multi-agent coordination", "weight": 18 },
    { "id": "d6", "name": "Implement guardrails and accountability", "weight": 12 }
  ]
};
