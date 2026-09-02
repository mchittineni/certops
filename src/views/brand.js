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
  return `<span class="brand-mark${extraClass}" style="${brandStyle(brand.hex, size, tone)}" role="img" aria-label="${label}">
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true" focusable="false"><path d="${brand.path}"></path></svg>
  </span>`;
}

/** Brand mark for a slug, used where a specific technology is the subject. */
export function brandMark(slug, { size = 20, tone = 'brand' } = {}) {
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
  if (cert.icon && BRAND_ICONS[cert.icon]) {
    return brandMark(cert.icon, { size, tone });
  }
  if (cert.icon === 'aws' && LOCAL_BRAND_ICONS['AWS']) {
    return providerIcon('AWS', { size, tone });
  }
  if (cert.icon === 'azure' && LOCAL_BRAND_ICONS['Microsoft Azure']) {
    return providerIcon('Microsoft Azure', { size, tone });
  }
  if (cert.icon === 'finops' && LOCAL_BRAND_ICONS['FinOps Foundation']) {
    return providerIcon('FinOps Foundation', { size, tone });
  }
  return providerIcon(cert.provider, { size, tone });
}

/**
 * Discipline icons and branding. Kubernetes & Cloud Native uses the official
 * Kubernetes mark because the track is named after it; the rest have curated
 * discipline glyphs styled in their track colors.
 */
const DISCIPLINE_CONFIG = {
  'Cloud Engineering': {
    color: '#0284c7',
    glyph: '<path d="M6.5 19a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.8 8.1 4.5 4.5 0 0 1 17.5 19z"></path><path d="M12 13v5m-2.5-2.5 2.5 2.5 2.5-2.5"></path>'
  },
  'DevOps & SRE': {
    color: '#8b5cf6',
    glyph: '<path d="M8 12a4 4 0 1 1 4 4 6 6 0 0 0-8 0 4 4 0 0 1 4-4z"></path><path d="M16 12a4 4 0 1 0-4-4 6 6 0 0 1 8 0 4 4 0 0 0-4 4z"></path>'
  },
  'Platform Engineering': {
    color: '#6366f1',
    glyph: '<path d="m12 2 9 4.9v10.2L12 22 3 17.1V6.9zm0 0v10m9-5.1-9 5.1m-9-5.1 9 5.1"></path>'
  },
  'FinOps': {
    color: '#10b981',
    glyph: '<circle cx="12" cy="12" r="9"></circle><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"></path><path d="M12 6v2m0 8v2"></path>'
  },
  'DevSecOps & Security': {
    color: '#ef4444',
    glyph: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>'
  }
};

/**
 * Role glyphs and theme styling colors.
 */
const ROLE_CONFIG = {
  'cloud-engineer': {
    color: '#0284c7',
    glyph: '<path d="M6.5 19a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.8 8.1 4.5 4.5 0 0 1 17.5 19z"></path><path d="M12 13v5m-2.5-2.5 2.5 2.5 2.5-2.5"></path>'
  },
  'devops-engineer': {
    color: '#8b5cf6',
    glyph: '<path d="M4.5 16.5c-1.5-1.5-1.5-4 0-5.5l5.5-5.5a4 4 0 0 1 5.5 0c1.5 1.5 1.5 4 0 5.5l-5.5 5.5a4 4 0 0 1-5.5 0z"></path><path d="M12 12l2.5 2.5m-5-5L12 12"></path><circle cx="8" cy="8" r="1.5"></circle><circle cx="16" cy="16" r="1.5"></circle>'
  },
  'platform-engineer': {
    color: '#6366f1',
    glyph: '<path d="m12 2 9 4.9v10.2L12 22 3 17.1V6.9zm0 0v10m9-5.1-9 5.1m-9-5.1 9 5.1"></path>'
  },
  'sre': {
    color: '#10b981',
    glyph: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>'
  },
  'security-engineer': {
    color: '#ef4444',
    glyph: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>'
  },
  'finops': {
    color: '#f59e0b',
    glyph: '<circle cx="12" cy="12" r="9"></circle><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"></path><path d="M12 6v2m0 8v2"></path>'
  },
  'solutions-architect': {
    color: '#3b82f6',
    glyph: '<rect width="7" height="7" x="3" y="3" rx="1.5"></rect><rect width="7" height="7" x="14" y="3" rx="1.5"></rect><rect width="7" height="7" x="14" y="14" rx="1.5"></rect><rect width="7" height="7" x="3" y="14" rx="1.5"></rect><path d="M10 6.5h4M6.5 10v4m11 0v-4m-4 7.5H10"></path>'
  }
};

export function roleIcon(roleId, { size = 22 } = {}) {
  const conf = ROLE_CONFIG[roleId];
  if (!conf) return '';
  return `<span class="brand-mark role-glyph role-glyph-${roleId}" style="--role-color:${conf.color};width:${size}px;height:${size}px" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${conf.glyph}</svg>
  </span>`;
}

export function disciplineIcon(category, { size = 22 } = {}) {
  if (category === 'Kubernetes & Cloud Native') return brandMark('kubernetes', { size });
  const conf = DISCIPLINE_CONFIG[category];
  if (!conf) return '';
  return `<span class="brand-mark discipline-glyph" style="--disc-color:${conf.color};color:${conf.color};width:${size}px;height:${size}px" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${conf.glyph}</svg>
  </span>`;
}
