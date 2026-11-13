# /nabeel handoff

## Files created
- `app/nabeel/page.tsx`
- `content/founder.ts`
- `.handoff/report.md`

## Files modified
- `app/about/page.tsx`
- `app/globals.css`
- `next.config.ts`

## Components reused
- `Nav`, `Footer`, `ContentWrapper`
- Hero section (`.hero`, `.hero__heading`, `.hero__subheading`, `.hero__buttons`)
- Buttons (`.btn--gold-cta`, `.btn--ghost`)
- About story body (`.section-body`) and philosophy card (`.philosophy-card`)
- Stat tiles (`.services-grid`, `.services-card`)
- Focus cards (`.pillars__grid`, `.service-card`), each linking to `/services`
- About call to action (`.about-cta`)
- Contact link style (`.contact-info-card__link`)

No new React component. New CSS is limited to the hero role line, hero portrait, creed and book tagline in Arial, and the LinkedIn icon size. Existing stat number classes use DM Serif Display, which this page may use only on the hero heading.

## Founder statement
The two Our story paragraphs and the creed live in `content/founder.ts`. `/about` and `/nabeel` both import them. The text is not copied into the page files. The three ME principles are in the same module and are imported by both pages.

## Redirect config
Added to `redirects()` in `next.config.ts`. `permanent: true` is a 308. No other host is matched.

```ts
{
  source: '/:path*',
  has: [{ type: 'host', value: 'mahmoods.com.au' }],
  destination: 'https://www.mindful-engagement.com/nabeel',
  permanent: true,
},
{
  source: '/:path*',
  has: [{ type: 'host', value: 'www.mahmoods.com.au' }],
  destination: 'https://www.mindful-engagement.com/nabeel',
  permanent: true,
},
```

## Sitemap
The repo does not generate a sitemap, so `/nabeel` was not added to one.

## Navigation
`/nabeel` is not in the main nav or footer. `/about` links to it with "More about Nabeel" in the founder story.

## Build and lint
- `npx next build`: pass. `/nabeel` prerendered.
- `npm run lint`: fail. `next lint` has no ESLint config and stopped on the interactive setup prompt. No ESLint config was added.

## Layout check
- 375px: hero, stat tiles, and focus cards are one column. No horizontal scroll.
- 768px: stats are three columns, focus cards are two columns, hero stacks. No horizontal scroll.
- 1280px: hero is two columns, stats are three columns, focus cards are two columns. No horizontal scroll.

## Missing
- `PERSONAL_LINKEDIN_URL` in `content/founder.ts` is an empty string, with `// TODO: Nabeel to supply`. The LinkedIn icon is not rendered. JSON-LD `sameAs` includes `https://mahmoods.com.au` only.
