/**
 * Fingerprints of the template generators that produced earlier content, shared by
 * lint-pack.mjs (rejects them in a new pack), audit-filler.mjs and audit-repeats.mjs,
 * so the three cannot disagree about what counts.
 *
 * Two generators ran, and they failed differently. Keeping them apart matters,
 * because the remedies differ:
 *
 *   BOILERPLATE  interpolated a topic into fixed prose ("Deploy native automation
 *                for <topic>"). The item asserts nothing a candidate could know, so
 *                its answer cannot be verified and rewriting its options cannot
 *                rescue it. It has to be written again from the blueprint.
 *
 *   FRAMING      wrote one real item, then reissued it four more times behind
 *                different framing sentences, tagging each copy in the title or card
 *                front ("…: Dr Failover", "… (High Load Scale)"). Each copy is
 *                individually sound; the defect is that five of them share one option
 *                set or one card back, so a learner meets the same fact five times and
 *                a spaced-repetition deck schedules five copies of it. The remedy is
 *                to keep one and write four new items.
 */

/** The labels the reissuing generator appended to each copy. */
export const FRAMING_LABELS = [
  'Dr Failover', 'High Load Scale', 'Security Compliance', 'Hybrid Migration', 'Resilience Failure',
  'Security And Governance', 'Enterprise Platform', 'Enterprise Observability', 'High Throughput Scale',
  'Microservice Migration', 'Resilience And Reliability', 'Enterprise Portal', 'High Scale Catalog',
  'Developer Onboarding', 'Resilience And Operations', 'High Scale Delivery', 'Developer Experience',
  'Resilience And Observability', 'High Scale Orchestration', 'Zero Trust Governance', 'Workload Automation',
  'Resilience And Sre', 'Enterprise Architecture', 'Data Protection And Privacy', 'Platform Hardening',
  'Application Secops', 'Compliance And Risk'
];

/** A question title ending ": <label>", or a card front ending " (<label>)". */
export const FRAMING = new RegExp(`(?::\\s*|\\(\\s*)(${FRAMING_LABELS.join('|')})\\)?\\s*$`);

/** The framing sentences themselves, which survive even when the label is stripped. */
export const FRAMING_PROSE = [
  /needs to understand the fundamental/i,
  /team is establishing (?:high-availability|multi-cloud|enterprise|zero-downtime)/i,
  /\b(?:evaluates|is evaluating) [A-Z][^.]{2,70} to (?:apply|architect|prevent|reduce|design|implement|build|configure|migrate|ensure|establish)\b/,
  /satisfies these (?:\w+ ){2,}(?:objectives|controls)\?$/i
];

/** Content-free questions: the topic interpolated into boilerplate. */
export const BOILERPLATE = [
  /is evaluating .+ practices specifically regarding/i,
  /Operational Strategy \(Part \d+\)/i,
  /^Deploy native automation for /im,
  /^Implementing declarative automation and native policy guardrails/im,
  /best addresses requirement #\d+/i,
  /Comprehensive .*explanation for .*topic #\d+/i,
  /Optimal recommended solution/i,
  /^Option [A-F]:/m,
  /requirement #\d+/i
];

/** Content-free flashcards: one sentence with the topic dropped into it. */
export const CARD_TEMPLATE = [
  /^In [A-Z0-9-]+ \(.+\), how does .+ function and what architectural trade-offs/i,
  /establishes automated declarative workflows within/i,
  /(?:Topic|Concept|card) #\d+/i,
  /^(?:Detailed explanation|Mastery definition) for /i
];

/** Everything a new pack must not contain. */
export const ALL_SIGNALS = [...BOILERPLATE, ...FRAMING_PROSE, ...CARD_TEMPLATE];

/** Strip a trailing framing label, so five reissues of one card compare equal. */
export const stripFraming = s => String(s || '').replace(FRAMING, '').trim();
