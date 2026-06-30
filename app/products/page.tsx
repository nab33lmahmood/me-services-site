import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const trustItems = [
  { label: 'Governance', title: 'Trustees always free' },
  { label: 'Transparency', title: 'No per-donor fees' },
  { label: 'Speed', title: 'Live today' },
  { label: 'Efficiency', title: 'Time saved every month' },
]

export default function ProductsPage() {
  return (
    <>
      <Nav />

      <section className="page-hero page-hero--compact">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Products</p>
          <h1 className="page-hero__heading">
            Software built on the same philosophy.
          </h1>
          <p className="page-hero__subheading">
            The ME philosophy does not stop at consultancy. We build software
            with the same intentionality over busyness, awareness over
            reactivity, and outcomes over output that guides our advisory work.
          </p>
        </ContentWrapper>
      </section>

      <section
        className="section--off-white"
        style={{
          paddingTop: 'var(--me-space-6)',
          paddingBottom: 'var(--me-space-4)',
        }}
      >
        <ContentWrapper>
          <div className="products-stack">
            <div className="pillar-card pillar-card--navy-accent">
              <img
                src="/screenshots/kind-cloud/dashboard-multicurrency.png"
                alt="ME Kind Cloud dashboard showing multi-currency chapter totals"
                className="kind-cloud-feature__image"
                style={{ marginBottom: 'var(--me-space-4)' }}
              />
              <p className="eyebrow eyebrow--card">Charity operations</p>
              <h3 className="pillar-card__title">ME Kind Cloud</h3>
              <p className="pillar-card__body">
                Operations software for multi-chapter charities and welfare
                organisations.
              </p>
              <span className="status-pill status-pill--green">Live</span>
              <Link href="/products/kind-cloud" className="pillar-card__link">
                Learn more &rarr;
              </Link>
            </div>

            <div className="product-listing product-listing--compact product-listing--gold-accent">
              <div className="product-listing__header">
                <p className="eyebrow eyebrow--card">Operational health</p>
                <h3 className="product-listing__title">ME Pulse</h3>
                <span className="status-pill status-pill--amber">
                  Early Access Soon
                </span>
              </div>
              <div className="product-listing__detail">
                <p className="product-listing__body">
                  Most tools ask what you need to do. ME Pulse asks what must
                  always be true.
                </p>
                <p className="product-listing__body">
                  A weekly fifteen-minute check across the domains that matter,
                  so the things that quietly degrade get caught while they&apos;re
                  still small.
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="kind-cloud-trust-strip" aria-label="Product philosophy">
        <ContentWrapper>
          <div className="kind-cloud-trust-strip__grid">
            {trustItems.map((item) => (
              <div key={item.title} className="kind-cloud-trust-strip__item">
                <p className="kind-cloud-trust-strip__label">{item.label}</p>
                <p className="kind-cloud-trust-strip__value">{item.title}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
