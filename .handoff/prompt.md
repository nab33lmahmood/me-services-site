# ME Services: /nabeel v2 redesign (editorial, signature page)

## Decision
- v1 reads as a template: the /about page restacked, equal-weight boxed sections, empty cards, a small boxed photo and a flat book block. v2 makes /nabeel a distinctive editorial page with rhythm, scale and one signature element.
- Keep: route, metadata, JSON-LD, redirect config, content/founder.ts as the single source of copy, /about link. Do not touch /about or next.config.ts.
- Brand rules stand: ME Brand System v1.1 tokens, Arial 400 and 700 only, DM Serif Display on the hero name only, no em dashes, Australian English.
- No new dependencies. Motion is CSS plus one small client component using IntersectionObserver.
- No invented claims: no testimonials, client logos, case studies or dates.

## Steps
1. Scope new styles to the page: create `app/nabeel/nabeel.module.css` (or a `.nabeel-*` block in globals.css if the repo does not use CSS modules). Do not change shared classes used by other pages.
2. Add to `content/founder.ts` (keep existing exports):
   - `FOUNDER_SECTORS = ['Government', 'Healthcare', 'Insurance', 'Retail']`
   - `FOUNDER_STANDARDS` (array of strings) with a `// DRAFT: Nabeel to confirm` comment:
     1. Strategy and delivery are led by the same senior people.
     2. Every engagement is measured by outcomes, not activity.
     3. Standards are visible and checked every week.
     4. The board hears the truth early.
     5. Teams stay small and senior.
   - `FOUNDER_FOCUS` (array of { title, line }): read /services and take a one-line descriptor for each of Fractional CTO and technology leadership, Digital transformation, Program and portfolio delivery, Building from scratch. If /services has no matching line, use an empty string and render the title only. Report which lines were sourced.
3. Rebuild `app/nabeel/page.tsx` as these sections, alternating backgrounds for rhythm:
   1. HERO (min-height 88vh, hero gradient):
      - Two columns at 1024px and up. Left: gold kicker in caps with letter-spacing, "Founder and Managing Director, Mindful Engagement". Name in DM Serif Display at clamp(3.5rem, 8vw, 7rem), tight line-height. Below it the creed "Know what is healthy. Fix what is not." in Arial 700 at clamp(1.25rem, 2vw, 1.75rem), white. Then the twenty-years line in white at 80% opacity. Buttons unchanged.
      - Right: portrait full column height, flush to the right edge and bottom of the hero, object-fit cover, no rounded box, no border. A 4px gold vertical rule on its left edge. Soft navy gradient overlay at the bottom 20% so it sinks into the section.
      - Mobile: portrait first, 60vh, then text.
      - Small "Scroll" cue at the bottom centre: a 1px gold line that animates down. Hidden under prefers-reduced-motion.
   2. MANIFESTO (Off White, generous padding, 160px top and bottom on desktop):
      - The quote alone, centred, max-width 20ch per line block, Arial 700 at clamp(2rem, 4.5vw, 3.75rem), Ink Navy. A large gold opening quote mark above it (Arial 700, 6rem, gold). Nothing else in the section.
   3. STORY (White):
      - Grid 5/7 at 1024px and up. Left column sticky (top 120px): "20" in Arial 700 gold at clamp(6rem, 14vw, 11rem) with "years leading technology" beneath in small caps. Right column: the two story paragraphs at 1.25rem, line-height 1.7, max-width 60ch.
   4. TRACK RECORD (Ink Navy band, full bleed):
      - Remove the boxed tiles. Three columns separated by 1px gold rules at 30% opacity. Each: number in Arial 700 gold at clamp(3rem, 6vw, 5rem), label in white at 80% opacity.
      - Numbers count up once when scrolled into view (client component `CountUp`, about 1.2s ease-out, keeps prefixes and suffixes such as "$", "M+", "+"). Under prefers-reduced-motion render the final value with no animation.
   5. SECTORS (Off White):
      - Small gold kicker "Where I have led". The four sectors from FOUNDER_SECTORS as large words in one row (Arial 700, clamp(1.75rem, 4vw, 3rem), Ink Navy) separated by gold dots. They wrap naturally on mobile. No links.
   6. SIGNATURE: WHAT MUST ALWAYS BE TRUE (White):
      - Kicker "How I work". Heading "What must always be true".
      - A Pulse-style standards board: one card (white, 1px #D0D0D0 border, 12px radius, subtle shadow), max-width 880px. Each FOUNDER_STANDARDS item is a row: 12px status dot in Status Green #1A7F4B, the standard in Arial 700 at 1.125rem, and a right-aligned muted label "Checked weekly". Rows separated by 1px rules.
      - Rows fade up in sequence (80ms stagger) on first view. Reduced motion: no animation.
      - Line under the card: "This is the practice behind PULSE." linking to the book section anchor #book.
   7. FOCUS AREAS (Off White):
      - Replace the empty cards with a numbered list. Each row: "01" to "04" in gold Arial 700, title in Arial 700 at clamp(1.5rem, 3vw, 2.25rem), the line beneath when present, and a right arrow on the far right. The whole row links to /services. Hover: the gold rule under the row extends from 0 to full width and the arrow moves 6px right. Visible focus state matches hover.
   8. BOOK (id="book", hero gradient):
      - Two columns. Left: a CSS-only book cover, aspect ratio 2:3, width about 260px, Ink Navy with a 1px inset gold frame, "PULSE" in Arial 700 gold, letter-spaced, "What Must Always Be True" beneath in white, "Nabeel Mahmood" at the foot in small caps. Rotate -4deg with a deep shadow. Straighten on hover. Reduced motion: no rotation change.
      - Right: gold kicker "The book", heading "PULSE: What Must Always Be True" in white, the positioning line, the creed in gold, then "Coming soon" as a small gold-outline pill. No purchase link.
   9. CTA AND CONTACT (Brand Gold band, full bleed):
      - Heading "Ready to work together?" in Ink Navy Arial 700 at clamp(2rem, 4vw, 3rem). Primary button in Ink Navy with white text: Book a conversation (/contact). Beneath it the email link and the LinkedIn icon (hidden while the constant is empty) in Ink Navy.
      - Remove the separate Contact section from v1.
4. Motion component: `components/Reveal.tsx` (client) wrapping sections for a 16px fade-up on first view with IntersectionObserver, threshold 0.15, once only. With prefers-reduced-motion or no IntersectionObserver, content renders visible. The server-rendered HTML must be readable with JavaScript disabled: start hidden only after hydration, by adding a class on mount.
5. Contrast: confirm every text and background pair meets WCAG AA (gold text on navy, navy on gold, muted labels). Darken a muted label within brand tokens if it fails, and report it.
6. Responsive check at 375px, 768px, 1024px and 1440px. No horizontal scroll. Hero name never wraps mid-word.

## Tests
- npx next build must pass.
- Skip lint (no ESLint config in this repo).
- No e2e tests.

## Report
Write .handoff/report.md with:
- Files created and modified.
- Sections built, and any deviation from this spec with the reason.
- FOCUS descriptor lines sourced from /services, or marked empty.
- Contrast results, including any adjustments.
- Build result.
- Screenshots are not required.

Do not print .env contents. Do not run any git commands.
