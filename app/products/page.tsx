import type { Metadata } from 'next'
import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Products | Mindful Engagement',
  description:
    'ME Kind Cloud for multi-chapter charity operations, and ME Pulse for operational health. Software built with the same philosophy as our advisory work.',
}

const kindCloudBenefits = [
  'Donors, appeals, events, pledges, and phone donations in one platform',
  'Multi-currency chapters across countries, no fake conversions',
  'AI-assisted reporting that turns data into board-ready insight',
  'Built for how charities actually operate, not a generic CRM',
]

const proofChips = [
  'In pilot today',
  'Trustees always free',
  'No per-donor fees',
  'Multi-currency',
  'AI reporting',
]

function BenefitCheck() {
  return (
    <svg
      className="products-flagship__check"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--light-gold">Products</p>
          <h1 className="page-hero__heading">
            Software built on the same philosophy.
          </h1>
          <p className="page-hero__subheading page-hero__subheading--products">
            The ME philosophy does not stop at consultancy. We build software
            with the same intent: tools that take the load off the people who
            run mission-driven organisations.
          </p>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--about">
        <ContentWrapper>
          <div className="products-flagship__grid">
            <div>
              <div className="products-flagship__eyebrow-row">
                <p className="eyebrow eyebrow--gold">Charity operations</p>
                <span className="products-flagship__live-badge">In pilot</span>
              </div>
              <h2 className="products-flagship__heading">ME Kind Cloud</h2>
              <p className="products-flagship__value">
                Everything a multi-chapter charity needs to run fundraising,
                donors, and reporting. In one place.
              </p>
              <ul className="products-flagship__benefits">
                {kindCloudBenefits.map((benefit) => (
                  <li key={benefit} className="products-flagship__benefit">
                    <BenefitCheck />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="products-flagship__chips">
                {proofChips.map((chip) => (
                  <span key={chip} className="products-proof-chip">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="products-flagship__buttons">
                <a
                  href="https://kindcloud.mindful-engagement.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold-cta"
                >
                  See it in action
                </a>
                <Link href="/contact" className="btn btn--secondary">
                  Book a walkthrough
                </Link>
              </div>
            </div>

            <div>
              <img
                src="/screenshots/kind-cloud/dashboard-multicurrency.png"
                alt="ME Kind Cloud dashboard showing multi-currency chapter totals"
                className="products-flagship__screenshot"
              />
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="section--off-white products-pulse-section">
        <ContentWrapper>
          <div className="products-pulse-card">
            <div className="products-pulse-card__grid">
              <div>
                <p className="eyebrow eyebrow--gold">Operational health</p>
                <h2 className="products-pulse-card__heading">ME Pulse</h2>
                <span className="products-pulse-card__status">
                  Early access soon
                </span>
              </div>

              <div>
                <p className="products-pulse-card__hook">
                  Most tools ask what you need to do.{' '}
                  <span className="products-pulse-card__hook-accent">
                    ME Pulse asks what must always be true.
                  </span>
                </p>
                <p className="products-pulse-card__body">
                  A weekly fifteen-minute check across the domains that matter,
                  so the things that quietly degrade get caught while they are
                  still small.
                </p>
                <Link
                  href="/contact"
                  className="btn btn--primary products-pulse-card__cta"
                >
                  Join the early access list &rarr;
                </Link>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="products-closing">
        <ContentWrapper>
          <p className="products-closing__line">
            Two products, one belief:{' '}
            <span className="products-closing__tagline">
              know what is healthy, fix what is not.
            </span>
          </p>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
