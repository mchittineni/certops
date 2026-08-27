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
  return `<span class="brand-mark" style="${brandStyle(brand.hex, size, tone)}" role="img" aria-label="${label}">
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
 * Discipline icons. Kubernetes & Cloud Native uses the official Kubernetes
 * mark because the track is named after it; the rest are neutral glyphs,
 * since a discipline is not a brand.
 */
const DISCIPLINE_GLYPHS = {
  'Cloud Engineering': '<path d="M17.5 19a4.5 4.5 0 0 0 .3-8.99A6 6 0 0 0 6.1 11.2A3.9 3.9 0 0 0 6.5 19z"></path>',
  'DevOps & SRE': '<path d="M8 12a4 4 0 1 1 4 4 6 6 0 0 0-8 0 4 4 0 0 1 4-4z"></path><path d="M16 12a4 4 0 1 0-4-4 6 6 0 0 1 8 0 4 4 0 0 0-4 4z"></path>',
  'Platform Engineering': '<path d="M12 3l9 5-9 5-9-5 9-5z"></path><path d="M3 13l9 5 9-5"></path>',
  'FinOps': '<ellipse cx="12" cy="6.5" rx="7" ry="3"></ellipse><path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"></path><path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"></path>',
  'DevSecOps & Security': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9.5 12.5l1.8 1.8 3.4-3.6"></path>'
};

export function disciplineIcon(category, { size = 22 } = {}) {
  if (category === 'Kubernetes & Cloud Native') return brandMark('kubernetes', { size });
  const glyph = DISCIPLINE_GLYPHS[category];
  if (!glyph) return '';
  return `<span class="brand-mark discipline-glyph" style="width:${size}px;height:${size}px" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${glyph}</svg>
  </span>`;
}
