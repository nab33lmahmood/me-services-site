import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const features = [
  {
    eyebrow: 'Donors',
    title: 'Donor management and interaction history',
    body: 'A single record for every donor across chapters, with full interaction history, contact details, and giving context in one place.',
    accent: 'gold' as const,
  },
  {
    eyebrow: 'Pledges',
    title: 'Pledges and fulfilment tracking',
    body: 'Track pledges from commitment through fulfilment, with visibility for chapter teams and central leadership on what is outstanding.',
    accent: 'navy' as const,
  },
  {
    eyebrow: 'Chapters',
    title: 'Multi-chapter and multi-currency operations',
    body: 'Run operations across country chapters with different currencies and teams, without losing a consolidated view of activity and performance.',
    accent: 'gold' as const,
  },
  {
    eyebrow: 'Reporting',
    title: 'AI-assisted reporting',
    body: 'Generate board-ready reports and operational summaries from live data, reducing manual reconciliation across chapters and currencies.',
    accent: 'navy' as const,
  },
]

const contactHref = '/contact?subject=ME+Kind+Cloud+enquiry'

export default function KindCloudPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">ME Kind Cloud</p>
          <h1 className="page-hero__heading">
            One platform. Every chapter. Every donor.
          </h1>
          <p className="page-hero__subheading">
            ME Kind Cloud gives multi-chapter charities a single, real-time view
            of donors, pledges, and operations, in every country they work in.
          </p>
          <div className="hero__buttons">
            <Link href={contactHref} className="btn btn--gold-cta">
              Get in touch
            </Link>
          </div>
        </ContentWrapper>
      </section>

      <section
        className="section--off-white section-pad--md"
        style={{
          paddingTop: 'var(--me-space-10)',
          paddingBottom: 'var(--me-space-6)',
        }}
      >
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">The problem</p>
          <h2 className="section-heading">
            Growth fractures donor visibility
          </h2>
          <p className="section-body">
            When a charity grows from a single operation into multiple country
            chapters, donor visibility starts to fracture. Teams work in separate
            spreadsheets, currencies differ, and nobody has a reliable picture of
            who gave what, where, and when.
          </p>
          <p className="section-body">
            Coordination breaks down at the seams. Pledges go unfulfilled because
            fulfilment tracking lives in one chapter but the donor relationship
            lives in another. Leadership ends up reconciling reports instead of
            running programmes.
          </p>
        </ContentWrapper>
      </section>

      <section
        className="section--white section-pad--md"
        style={{ paddingTop: 'var(--me-space-2)' }}
      >
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">What it does</p>
          <h2 className="section-heading">
            Built for how charities actually operate.
          </h2>

          <div className="pillars__grid pillars__grid--2col">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`pillar-card pillar-card--${feature.accent}-accent`}
              >
                <p className="eyebrow eyebrow--card">{feature.eyebrow}</p>
                <h3 className="pillar-card__title">{feature.title}</h3>
                <p className="pillar-card__body">{feature.body}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section
        className="section--off-white section-pad--md"
        style={{ paddingBottom: 'var(--me-space-4)' }}
      >
        <ContentWrapper>
          <div className="group-card group-card--gold-accent">
            <p className="group-card__body">
              Currently in active pilot with a UK-headquartered welfare
              organisation operating chapters across Australia, the UK, and
              Pakistan.
            </p>
          </div>
        </ContentWrapper>
      </section>

      <section
        className="closing-cta"
        style={{ paddingTop: 'var(--me-space-4)' }}
      >
        <ContentWrapper>
          <div className="closing-cta__inner">
            <h2 className="closing-cta__heading">
              Interested in a walkthrough for your organisation?
            </h2>
            <div className="closing-cta__button">
              <Link href={contactHref} className="btn btn--gold-cta">
                Get in touch
              </Link>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
