import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default function ProductsPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
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

      <section className="me-group">
        <ContentWrapper>
          <div className="me-group__grid">
            <div className="group-card group-card--navy-accent">
              <p className="eyebrow eyebrow--card">Charity operations</p>
              <h3 className="group-card__title">ME Kind Cloud</h3>
              <p className="group-card__body">
                Operations software for multi-chapter charities and welfare
                organisations.
              </p>
              <span className="status-pill status-pill--green">Live pilot</span>
              <Link href="/products/kind-cloud" className="pillar-card__link">
                Learn more &rarr;
              </Link>
            </div>

            <div className="group-card group-card--gold-accent">
              <p className="eyebrow eyebrow--card">Operational health</p>
              <h3 className="group-card__title">ME Pulse</h3>
              <p className="group-card__body">
                Operational health dashboard for senior leaders.
              </p>
              <span className="status-pill status-pill--amber">
                In development
              </span>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
