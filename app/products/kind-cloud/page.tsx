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

const galleryItems = [
  {
    filename: 'dashboard-multicurrency.png',
    featured: true,
    org: 'Sabeel Foundation',
    orgVariant: 'sabeel' as const,
    headline: 'One view across every chapter and currency',
    caption:
      'AU, GB, and PK chapters consolidate into a single converted total, with source and reach breakdowns updating live.',
  },
  {
    filename: 'home-modules.png',
    featured: false,
    org: 'ME. Kindwell',
    orgVariant: 'kindwell' as const,
    headline: 'Every module, one workspace',
    caption:
      'Appeals, donors, events, pledges, and AI reporting, all reachable from a single sidebar.',
  },
  {
    filename: 'appeals-list.png',
    featured: false,
    org: 'Sabeel Foundation',
    orgVariant: 'sabeel' as const,
    headline: 'Campaigns managed by chapter, visible from the centre',
    caption:
      'Each appeal shows progress, top donor, and recent activity, with an AI-generated performance summary on demand.',
  },
  {
    filename: 'donor-detail.png',
    featured: false,
    org: 'Sabeel Foundation',
    orgVariant: 'sabeel' as const,
    headline: 'A complete donor relationship, not just a transaction',
    caption:
      'Giving history, activity log, and AI-suggested next actions for every donor.',
  },
  {
    filename: 'ai-impact-report.png',
    featured: false,
    org: 'ME. Kindwell',
    orgVariant: 'kindwell' as const,
    headline: 'Board-ready reports generated in seconds',
    caption:
      'Select a chapter and date range. The narrative, key figures, and insights write themselves from live data.',
  },
  {
    filename: 'pledges.png',
    featured: false,
    org: 'ME. Kindwell',
    orgVariant: 'kindwell' as const,
    headline: 'Pledges tracked from commitment to fulfilment',
    caption:
      'See exactly what is outstanding, by donor, by appeal, by chapter, with fulfilment progress in real time.',
  },
  {
    filename: 'charity-settings.png',
    featured: true,
    org: 'ME. Kindwell',
    orgVariant: 'kindwell' as const,
    headline: 'Configured to how your charity actually runs',
    caption:
      'Chapters, accounting codes, interaction types, chapter roles, and exchange rates, all in one settings area. Built so any charity can adapt the platform to their own structure.',
  },
]

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

      <section className="product-gallery">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Product in action</p>
          <h2 className="product-gallery__heading">See it working</h2>
          <p className="product-gallery__subtitle">
            Real screens from the live platform. Two charities, different
            causes, one system.
          </p>

          <div className="product-gallery__grid">
            {galleryItems.map((item) => (
              <article
                key={item.filename}
                className={`product-gallery__card${item.featured ? ' product-gallery__card--featured' : ''}`}
              >
                <span
                  className={`product-gallery__org-tag product-gallery__org-tag--${item.orgVariant}`}
                >
                  {item.org}
                </span>
                <img
                  src={`/screenshots/kind-cloud/${item.filename}`}
                  alt={item.headline}
                  className="product-gallery__image"
                />
                <div className="product-gallery__caption">
                  <h3 className="product-gallery__caption-title">
                    {item.headline}
                  </h3>
                  <p className="product-gallery__caption-body">
                    {item.caption}
                  </p>
                </div>
              </article>
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
