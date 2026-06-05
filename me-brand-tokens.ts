/**
 * ME BRAND SYSTEM — Design Tokens (JavaScript / TypeScript)
 * Version: 1.0 | Owner: Nabeel Mahmood | May 2026
 * Applies to: ME Pulse, ME Kind Cloud, all future ME products
 *
 * Usage:
 *   import { colors, typography, spacing } from './me-brand-tokens'
 *   import meTheme from './me-brand-tokens'  // Tailwind / full theme
 */

// ── COLOURS ────────────────────────────────────────────────────────────────

export const colors = {

  // Navy ramp
  inkNavy:     '#0F2447',   // Hero backgrounds, deep headers
  brandNavy:   '#1B3A6B',   // Primary brand colour, nav, key UI
  activeNavy:  '#2A5298',   // Hover states, interactive elements

  // Gold ramp
  brandGold:   '#C9A84C',   // Primary accent — use sparingly
  lightGold:   '#E8C96A',   // Hover fills on gold elements
  goldWash:    '#FBF5E6',   // Subtle fills, alt table rows, callouts

  // Neutral + surface
  white:       '#FFFFFF',   // Primary card surface
  offWhite:    '#F7F7F5',   // Page background — never pure white
  border:      '#EBEBEB',   // All dividers and borders
  charcoal:    '#1C1C1E',   // Body text, headings, primary content
  midGrey:     '#4A4A4A',   // Subtext, metadata, dates
  muted:       '#8A8A8A',   // Placeholder, disabled, tertiary

  // Status colours — locked, do not repurpose
  status: {
    green:       '#1A7F4B',
    greenLight:  '#E6F4ED',
    amber:       '#E8A020',
    amberLight:  '#FEF3DC',
    red:         '#C0392B',
    redLight:    '#FAEAEA',
    unset:       '#D0D0D0',
  },

  // Back end / admin surface
  admin: {
    bg:     '#1C1C1E',
    card:   '#2A2A2E',
    border: '#3A3A3E',
  },

} as const;

// ── TYPOGRAPHY ─────────────────────────────────────────────────────────────

export const typography = {
  font:    "'Arial', sans-serif",   // Single typeface — no exceptions

  size: {
    display: '4.5rem',    // Logo / hero
    h1:      '1.375rem',  // Page title — all caps
    h2:      '1.125rem',  // Section title
    h3:      '1rem',      // Subsection
    body:    '1rem',      // Body standard
    small:   '0.875rem',  // Body small
    label:   '0.6875rem', // Tag / label — uppercase
    meta:    '0.8125rem', // Date / meta — italic
    caption: '0.75rem',   // Caption
  },

  weight: {
    regular: 400,
    bold:    700,
  },

  lineHeight: {
    body:    1.6,
    heading: 1.3,
  },

  letterSpacing: {
    label: '0.1em',    // Uppercase labels
    hero:  '-0.02em',  // Display / hero text
  },

} as const;

// ── SPACING ─────────────────────────────────────────────────────────────────

export const spacing = {
  1:  '0.25rem',   //  4px
  2:  '0.5rem',    //  8px
  3:  '0.75rem',   // 12px
  4:  '1rem',      // 16px
  5:  '1.25rem',   // 20px
  6:  '1.5rem',    // 24px
  8:  '2rem',      // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
} as const;

// ── BORDER + RADIUS ─────────────────────────────────────────────────────────

export const radius = {
  sm:   '6px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  full: '9999px',
} as const;

export const borders = {
  thin:   `0.5px solid ${colors.border}`,
  medium: `1px solid ${colors.border}`,
  gold:   `1px solid ${colors.brandGold}`,
} as const;

// ── SHADOWS ─────────────────────────────────────────────────────────────────

export const shadows = {
  card: '0 1px 3px rgba(15, 36, 71, 0.08)',
  focus: `0 0 0 2px ${colors.brandGold}`,
} as const;

// ── STATUS HELPERS ──────────────────────────────────────────────────────────

export type StatusType = 'green' | 'amber' | 'red' | 'unset';

export const statusConfig: Record<StatusType, {
  color: string;
  background: string;
  label: string;
}> = {
  green: {
    color:      colors.status.green,
    background: colors.status.greenLight,
    label:      'Maintained',
  },
  amber: {
    color:      colors.status.amber,
    background: colors.status.amberLight,
    label:      'Needs Attention',
  },
  red: {
    color:      colors.status.red,
    background: colors.status.redLight,
    label:      'Action Required',
  },
  unset: {
    color:      colors.midGrey,
    background: colors.border,
    label:      'Not Reviewed',
  },
};

// ── TAILWIND CONFIG EXTENSION ───────────────────────────────────────────────
// Add to tailwind.config.js: theme: { extend: meTheme }

const meTheme = {
  colors: {
    me: {
      'ink-navy':    colors.inkNavy,
      'brand-navy':  colors.brandNavy,
      'active-navy': colors.activeNavy,
      'brand-gold':  colors.brandGold,
      'light-gold':  colors.lightGold,
      'gold-wash':   colors.goldWash,
      white:         colors.white,
      'off-white':   colors.offWhite,
      border:        colors.border,
      charcoal:      colors.charcoal,
      'mid-grey':    colors.midGrey,
      muted:         colors.muted,
      green:         colors.status.green,
      'green-light': colors.status.greenLight,
      amber:         colors.status.amber,
      'amber-light': colors.status.amberLight,
      red:           colors.status.red,
      'red-light':   colors.status.redLight,
      unset:         colors.status.unset,
    },
  },
  fontFamily: {
    me: ['Arial', 'sans-serif'],
  },
  borderRadius: {
    'me-sm': radius.sm,
    'me-md': radius.md,
    'me-lg': radius.lg,
    'me-xl': radius.xl,
  },
  spacing: {
    'me-1':  spacing[1],
    'me-2':  spacing[2],
    'me-3':  spacing[3],
    'me-4':  spacing[4],
    'me-6':  spacing[6],
    'me-8':  spacing[8],
    'me-12': spacing[12],
    'me-16': spacing[16],
  },
  boxShadow: {
    'me-card':  shadows.card,
    'me-focus': shadows.focus,
  },
};

export default meTheme;
