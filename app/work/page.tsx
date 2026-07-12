import type { Metadata } from 'next'
import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Our work | Mindful Engagement',
  description:
    'Two decades of enterprise transformation, portfolio governance, AI automation, and delivery leadership across government, healthcare, insurance, and retail.',
}

const capabilityPillars = [
  {
    label: 'Capability one',
    heading: 'Enterprise transformation at scale',
    body: "Led Modern Workspace and platform transformation across 30+ organisational units within one of Australia's largest public networks, migrating millions of files and setting adoption benchmarks that held across clinical and administrative environments.",
    chips: ['2.3M+ files migrated', '30+ units'],
  },
  {
    label: 'Capability two',
    heading: 'Portfolio and vendor governance',
    body: 'Governed enterprise application estates of 150+ systems, embedding cloud-native, API-first, and event-driven architecture. Managed multimillion-dollar technology budgets across major vendor relationships, lifting service performance and commercial discipline.',
    chips: ['150+ apps governed', '95% SLA compliance', 'MTTR reduced 30%'],
  },
  {
    label: 'Capability three',
    heading: 'AI and intelligent automation',
    body: 'Co-designed enterprise AI frameworks and guardrails, deploying agents across contact centre, service desk, and customer journey platforms. Delivered workflow automation processing millions of transactions a year, and built two AI-native SaaS products end to end.',
    chips: [
      'Enterprise AI framework',
      'Millions of transactions automated',
      '2 SaaS products built',
    ],
  },
  {
    label: 'Capability four',
    heading: 'Delivery and team leadership',
    body: 'Delivered mission-critical programs under urgent timeframes, including national health response systems, across complex cross-border environments. Grew technology functions from a single resource to structured multidisciplinary teams.',
    chips: [
      '0% voluntary attrition',
      '+20% delivery capacity',
      '95% stakeholder satisfaction',
    ],
  },
]

const metrics = [
  { figure: '20+', label: 'Years of experience' },
  { figure: '$20M+', label: 'Portfolio managed' },
  { figure: '150+', label: 'Enterprise apps governed' },
  { figure: '2.3M+', label: 'Files migrated' },
  { figure: '95%', label: 'SLA compliance' },
  { figure: '0%', label: 'Voluntary attrition' },
]

const sectors = [
  'Government',
  'Healthcare',
  'Insurance',
  'Telecommunications',
  'Retail',
  'Law enforcement',
  'Not-for-profit',
]

export default function WorkPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--light-gold">Our work</p>
          <h1 className="page-hero__heading">Two decades of delivery.</h1>
          <p className="page-hero__subheading page-hero__subheading--work">
            The programs and platforms our principals have led across
            government, healthcare, insurance, telecommunications, and retail.
            Described by capability and outcome.
          </p>
        </ContentWrapper>
      </section>

      <section className="confidentiality-banner">
        <ContentWrapper>
          <p className="confidentiality-banner__text">
            Client confidentiality is respected in all cases. Work is described
            at the level appropriate for public disclosure.
          </p>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--about">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">The track record</p>
          <p className="work-intro__body">
            For twenty years, our principals have led the work that decides
            whether an organisation&apos;s technology becomes an asset or a
            liability. Enterprise transformation, $20M+ program portfolios,
            application estates of 150+ systems, and mission-critical platforms
            delivered when failure was not an option.
          </p>
          <p className="work-intro__sub">
            The engagements below are grouped by capability. Client identities
            and specific program names are held in confidence.
          </p>

          <div className="work-pillars-grid">
            {capabilityPillars.map((pillar) => (
              <article key={pillar.label} className="work-pillar-card">
                <p className="work-pillar-card__label">{pillar.label}</p>
                <h2 className="work-pillar-card__heading">{pillar.heading}</h2>
                <p className="work-pillar-card__body">{pillar.body}</p>
                <div className="work-pillar-card__chips">
                  {pillar.chips.map((chip) => (
                    <span key={chip} className="work-proof-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section className="work-metrics" aria-label="Key metrics">
        <ContentWrapper>
          <div className="work-metrics__grid">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="work-metrics__figure">{metric.figure}</p>
                <p className="work-metrics__label">{metric.label}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--about work-sectors">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Sectors served</p>
          <div className="work-sectors__chips">
            {sectors.map((sector) => (
              <span key={sector} className="work-sector-chip">
                {sector}
              </span>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section className="work-cta">
        <ContentWrapper>
          <p className="work-cta__text">
            Sector-specific references and deeper case detail available on
            request under confidentiality.
          </p>
          <div className="work-cta__button">
            <Link href="/contact" className="btn btn--primary">
              Speak with us
            </Link>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
