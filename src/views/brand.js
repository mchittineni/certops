/**
 * Provider and discipline iconography.
 *
 * Official marks come from Simple Icons (CC0) via brand-icons.generated.js.
 * Providers with no freely licensed mark render a lettermark in their official
 * brand colour; supply real path data in brand-icons.local.js to override.
 */
import { BRAND_ICONS, PROVIDER_ICON_SLUGS } from './brand-icons.generated.js';
import { LOCAL_BRAND_ICONS } from './brand-icons.local.js';
import { escapeHtml } from './ui.js';

/**
 * Some official brand colours are near-black (GitHub #181717, HashiCorp and
 * OpenTelemetry #000000), which disappears on a dark ground. Every mark
 * therefore ships two colours and the stylesheet picks per theme, so the brand
 * hue is kept wherever it is legible and lifted only where it is not.
 */
function relativeLuminance(rgb) {
  const channel = c => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
}

function toRgb(hex) {
  const n = parseInt(hex, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function toHex(rgb) {
  return '#' + rgb.map(c => Math.round(c).toString(16).padStart(2, '0')).join('');
}

function contrast(a, b) {
  const [hi, lo] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const DARK_GROUND = toRgb('0b0f19');   // --bg-primary in the dark theme
const MIN_CONTRAST = 4.5;              // a logo should read as clearly as body text

/**
 * Keep the brand colour if it clears 3:1 on the dark ground — Google Cloud blue
 * and Docker blue do. Only blend toward white for marks that do not (GitHub,
 * HashiCorp, CNCF, OpenTelemetry are near-black), and blend the least amount
 * that passes so the hue survives.
 */
function onDark(hex) {
  const base = toRgb(hex);
  if (contrast(base, DARK_GROUND) >= MIN_CONTRAST) return `#${hex}`;
  for (let mix = 0.1; mix <= 1; mix += 0.1) {
    const lifted = base.map(c => c + (255 - c) * mix);
    if (contrast(lifted, DARK_GROUND) >= MIN_CONTRAST) return toHex(lifted);
  }
  return '#ffffff';
}

/** provider → [initials, official brand hex] used when no licensed mark exists */
const LETTERMARKS = {
  'AWS': ['aws', 'FF9900'],
  'Microsoft Azure': ['Az', '0078D4'],
  'FinOps Foundation': ['FO', '0E9F6E'],
  'DevOps Institute': ['DOI', '14B8A6'],
  'OffSec': ['OS', 'DC2626'],
  'Vendor Neutral': ['\u2601', '64748B']
};

export function providerBrand(provider) {
  const local = LOCAL_BRAND_ICONS[provider];
  if (local) return { kind: 'mark', ...local };

  const slug = PROVIDER_ICON_SLUGS[provider];
  const official = slug && BRAND_ICONS[slug];
  if (official) return { kind: 'mark', ...official };

  const [initials, hex] = LETTERMARKS[provider] || ['☁', '64748B'];
  return { kind: 'lettermark', title: provider, initials, hex };
}

/**
 * A square provider mark. `tone: 'brand'` paints it in the brand colour;
 * 'inherit' takes the surrounding text colour (for use inside coloured chips).
 */
function brandStyle(hex, size, tone) {
  if (tone === 'inherit') return `--brand:currentColor;--brand-dark:currentColor;width:${size}px;height:${size}px`;
  return `--brand:#${hex};--brand-dark:${onDark(hex)};width:${size}px;height:${size}px`;
}

export function providerIcon(provider, { size = 20, tone = 'brand' } = {}) {
  const brand = providerBrand(provider);
  const label = escapeHtml(brand.title || provider);

  if (brand.kind === 'lettermark') {
    return `<span class="brand-mark brand-lettermark" style="${brandStyle(brand.hex, size, tone)};font-size:${Math.round(size * 0.42)}px" role="img" aria-label="${label}">${escapeHtml(brand.initials)}</span>`;
  }
  const isFallbackProvider = provider === 'AWS' || provider === 'Microsoft Azure';
  const extraClass = isFallbackProvider ? ' brand-lettermark' : '';
  if (brand.renderSvg) {
    return `<span class="brand-mark${extraClass}" style="${brandStyle(brand.hex, size, tone)}" role="img" aria-label="${label}">${brand.renderSvg(size, tone)}</span>`;
  }
  return `<span class="brand-mark${extraClass}" style="${brandStyle(brand.hex, size, tone)}" role="img" aria-label="${label}">
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true" focusable="false"><path d="${brand.path}"></path></svg>
  </span>`;
}

/** Brand mark for a slug, used where a specific technology is the subject. */
export function brandMark(slug, { size = 20, tone = 'brand' } = {}) {
  if (slug === 'googlecloud' && LOCAL_BRAND_ICONS['Google Cloud']) {
    return providerIcon('Google Cloud', { size, tone });
  }
  const icon = BRAND_ICONS[slug];
  if (!icon) return '';
  return `<span class="brand-mark" style="${brandStyle(icon.hex, size, tone)}" role="img" aria-label="${escapeHtml(icon.title)}">
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true" focusable="false"><path d="${icon.path}"></path></svg>
  </span>`;
}

/**
 * Official technology or provider mark for a specific certification.
 * If the cert has a recognized technology slug in BRAND_ICONS (e.g., terraform,
 * kubernetes, argo, opentelemetry, backstage, github, docker, databricks),
 * that official technology mark is prioritized over the broad provider mark.
 */
export function certIcon(cert, { size = 20, tone = 'brand' } = {}) {
  if (!cert) return '';
  if (cert.icon === 'googlecloud' || cert.provider === 'Google Cloud') {
    return providerIcon('Google Cloud', { size, tone });
  }
  if (cert.icon === 'aws' || cert.provider === 'AWS') {
    return providerIcon('AWS', { size, tone });
  }
  if (cert.icon === 'azure' || cert.provider === 'Microsoft Azure') {
    return providerIcon('Microsoft Azure', { size, tone });
  }
  if (cert.icon === 'finops' || cert.provider === 'FinOps Foundation') {
    return providerIcon('FinOps Foundation', { size, tone });
  }
  if (cert.icon && BRAND_ICONS[cert.icon]) {
    return brandMark(cert.icon, { size, tone });
  }
  return providerIcon(cert.provider, { size, tone });
}

/**
 * Discipline icons and branding as requested:
 * ☁️ Cloud Engineering · 🚀 DevOps & SRE · 🏗️ Platform Engineering · 💰 FinOps · 🔐 DevSecOps & Security
 */
export const DISCIPLINE_ICONS = {
  'Cloud Engineering': '☁️',
  'DevOps & SRE': '🚀',
  'Platform Engineering': '🏗️',
  'FinOps': '💰',
  'DevSecOps & Security': '🔐'
};

const DISCIPLINE_CONFIG = {
  'Cloud Engineering': { color: '#0284c7' },
  'DevOps & SRE': { color: '#8b5cf6' },
  'Platform Engineering': { color: '#6366f1' },
  'FinOps': { color: '#10b981' },
  'DevSecOps & Security': { color: '#ef4444' }
};

/**
 * Role interactive icons and theme styling colors.
 */
export const ROLE_ICONS = {
  'cloud-engineer': '☁️',
  'devops-engineer': '🚀',
  'platform-engineer': '🏗️',
  'sre': '⚡',
  'security-engineer': '🔐',
  'finops': '💰',
  'solutions-architect': '🏛️'
};

const ROLE_CONFIG = {
  'cloud-engineer': { color: '#0284c7' },
  'devops-engineer': { color: '#8b5cf6' },
  'platform-engineer': { color: '#6366f1' },
  'sre': { color: '#10b981' },
  'security-engineer': { color: '#ef4444' },
  'finops': { color: '#f59e0b' },
  'solutions-architect': { color: '#3b82f6' }
};

export function roleIcon(roleId, { size = 22 } = {}) {
  const conf = ROLE_CONFIG[roleId];
  const emoji = ROLE_ICONS[roleId];
  if (!conf) return '';
  return `<span class="brand-mark role-glyph role-glyph-${roleId}" style="--role-color:${conf.color};width:${size}px;height:${size}px;font-size:${Math.round(size * 0.95)}px;line-height:1;display:inline-flex;align-items:center;justify-content:center" aria-hidden="true">${emoji || ''}</span>`;
}

export function disciplineIcon(category, { size = 22 } = {}) {
  const emoji = DISCIPLINE_ICONS[category];
  if (emoji) {
    return `<span class="discipline-emoji" style="font-size:${Math.round(size * 0.95)}px;line-height:1;display:inline-flex;align-items:center;justify-content:center" aria-hidden="true">${emoji}</span>`;
  }
  if (category === 'Kubernetes & Cloud Native') return brandMark('kubernetes', { size });
  return '';
}
