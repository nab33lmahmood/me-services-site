import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import ProductGalleryCarousel from './ProductGalleryCarousel'

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

const valueItems = [
  { label: 'Governance', title: 'Trustees always free' },
  { label: 'Transparency', title: 'No per-donor fees' },
  { label: 'Speed', title: 'In pilot today' },
  { label: 'Efficiency', title: 'Time saved every month' },
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

      <section className="page-hero page-hero--kind-cloud">
        <ContentWrapper>
          <div className="kind-cloud-hero__grid">
            <div className="kind-cloud-hero__content">
              <p className="eyebrow eyebrow--gold">ME Kind Cloud</p>
              <h1 className="page-hero__heading">
                One platform. Every chapter. Every donor.
              </h1>
              <p className="page-hero__subheading">
                ME Kind Cloud gives multi-chapter charities a single, real-time
                view of donors, pledges, and operations, in every country they
                work in.
              </p>
              <div className="hero__buttons">
                <Link href={contactHref} className="btn btn--gold-cta">
                  Get in touch
                </Link>
              </div>
              <a href="#product-gallery" className="kind-cloud-hero__scroll-link">
                See it in action
              </a>
            </div>

            <div className="kind-cloud-hero__visual">
              <div className="kind-cloud-browser-frame">
                <div className="kind-cloud-browser-frame__chrome" aria-hidden="true">
                  <span className="kind-cloud-browser-frame__dot" />
                  <span className="kind-cloud-browser-frame__dot" />
                  <span className="kind-cloud-browser-frame__dot" />
                </div>
                <img
                  src="/screenshots/kind-cloud/dashboard-multicurrency.png"
                  alt="ME Kind Cloud dashboard showing multi-currency chapter totals"
                  className="kind-cloud-browser-frame__image"
                />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="kind-cloud-trust-strip" aria-label="Why charities choose us">
        <ContentWrapper>
          <p className="kind-cloud-trust-strip__tagline">
            Built different. Platform pricing that respects how charities
            actually operate.
          </p>
          <div className="kind-cloud-trust-strip__grid">
            {valueItems.map((item) => (
              <div key={item.title} className="kind-cloud-trust-strip__item">
                <p className="kind-cloud-trust-strip__label">{item.label}</p>
                <p className="kind-cloud-trust-strip__value">{item.title}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section
        className="section--off-white kind-cloud-combined"
        style={{
          paddingTop: 'var(--me-space-6)',
          paddingBottom: 'var(--me-space-6)',
        }}
      >
        <ContentWrapper>
          <div className="two-col two-col--35-65">
            <div className="two-col__content">
              <p className="eyebrow eyebrow--gold">The problem</p>
              <h2 className="kind-cloud-section-heading">
                Growth fractures donor visibility
              </h2>
              <p className="kind-cloud-problem__body">
                When a charity grows from a single operation into multiple
                country chapters, donor visibility starts to fracture. Teams work
                in separate spreadsheets, currencies differ, and nobody has a
                reliable picture of who gave what, where, and when.
              </p>
              <p className="kind-cloud-problem__body">
                Coordination breaks down at the seams. Pledges go unfulfilled
                because fulfilment tracking lives in one chapter but the donor
                relationship lives in another. Leadership ends up reconciling
                reports instead of running programmes.
              </p>
            </div>

            <div className="two-col__detail">
              <p className="eyebrow eyebrow--gold">What it does</p>
              <h2 className="kind-cloud-section-heading">
                Built for how charities actually operate.
              </h2>

              <div className="kind-cloud-features-grid">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className={`kind-cloud-feature-item kind-cloud-feature-item--${feature.accent}`}
                  >
                    <p className="kind-cloud-feature-item__eyebrow">
                      {feature.eyebrow}
                    </p>
                    <h3 className="kind-cloud-feature-item__title">
                      {feature.title}
                    </h3>
                    <p className="kind-cloud-feature-item__body">
                      {feature.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section
        id="product-gallery"
        className="product-gallery product-gallery--compact"
      >
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Product in action</p>
          <h2 className="product-gallery__heading">See it working</h2>
          <p className="product-gallery__subtitle">
            Real screens from the live platform. Two charities, different causes,
            one system.
          </p>

          <ProductGalleryCarousel items={galleryItems} />
        </ContentWrapper>
      </section>

      <section
        className="section--off-white section-pad--md"
        style={{ paddingBottom: 'var(--me-space-4)' }}
      >
        <ContentWrapper>
          <div className="group-card group-card--gold-accent">
            <p className="group-card__body">
              Built alongside a UK-headquartered welfare charity running
              chapters across Australia, the UK and Pakistan. Going live
              November 2026.
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
            <p className="closing-cta__body">
              Founding partner places are open for a small number of
              multi-chapter charities.
            </p>
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
