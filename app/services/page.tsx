import type { Metadata } from 'next'
import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Services | Mindful Engagement',
  description:
    'Technology advisory, digital transformation, and program delivery from senior principals. Fixed-fee health checks and principal-led engagements.',
}

type ServiceIconType = 'lightbulb' | 'cycle' | 'check'

type ServiceCard = {
  icon: ServiceIconType
  tag: string
  title: string
  body: string
  listItems: string[]
  suitedTo: string
}

const serviceCards: ServiceCard[] = [
  {
    icon: 'lightbulb',
    tag: 'Advisory',
    title: 'Technology Advisory',
    body: 'Director-level thinking for organisations that need senior perspective without a full-time hire.',
    listItems: [
      'Technology strategy and roadmap',
      'Architecture and vendor review',
      'AI readiness and governance',
    ],
    suitedTo: 'boards needing independent technology assurance.',
  },
  {
    icon: 'cycle',
    tag: 'Transformation',
    title: 'Digital Transformation',
    body: 'End-to-end delivery of digital programs, from business case through to live, adopted systems.',
    listItems: [
      'M365 and cloud migration',
      'Business application modernisation',
      'AI and automation implementation',
    ],
    suitedTo: 'mid-market organisations running legacy platforms.',
  },
  {
    icon: 'check',
    tag: 'Delivery',
    title: 'Program Delivery',
    body: 'Senior program and project leadership for complex initiatives that need to land.',
    listItems: [
      'Program rescue and recovery',
      'Governance and reporting frameworks',
      'AI program governance',
    ],
    suitedTo: 'stalled programs, or those with compliance requirements.',
  },
]

function ServiceIcon({ type }: { type: ServiceIconType }) {
  return (
    <svg
      className="services-card__icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {type === 'lightbulb' && (
        <>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-4 10.5c.5.5 1 1.2 1 2.5h6c0-1.3.5-2 1-2.5A6 6 0 0 0 12 3z" />
        </>
      )}
      {type === 'cycle' && (
        <>
          <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-7-3.3" />
          <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 7 3.3" />
          <path d="M19 3v4h-4" />
          <path d="M5 21v-4h4" />
        </>
      )}
      {type === 'check' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </>
      )}
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--light-gold">What we do</p>
          <h1 className="page-hero__heading">Three service lines.</h1>
          <p className="page-hero__subheading page-hero__subheading--services">
            All grounded in 20 years of senior technology delivery. We think
            strategically and we deliver practically.
          </p>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--about">
        <ContentWrapper>
          <div className="services-grid">
            {serviceCards.map((card) => (
              <article key={card.title} className="services-card">
                <div className="services-card__icon-tile">
                  <ServiceIcon type={card.icon} />
                </div>
                <p className="services-card__tag">{card.tag}</p>
                <h2 className="services-card__title">{card.title}</h2>
                <p className="services-card__body">{card.body}</p>
                <ul className="services-card__list">
                  {card.listItems.map((item) => (
                    <li key={item} className="services-card__list-item">
                      <span className="services-card__dash">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="services-card__suited">
                  <span className="services-card__suited-label">Suited to:</span>{' '}
                  {card.suitedTo}
                </p>
              </article>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section className="section--off-white health-check-section">
        <ContentWrapper>
          <div className="health-check-feature">
            <div className="health-check-feature__grid">
              <div>
                <span className="health-check-feature__pill">
                  Fixed fee entry point
                </span>
                <h2 className="health-check-feature__heading">
                  Technology Health Check
                </h2>
                <p className="health-check-feature__body">
                  A focused two-hour review of your current technology setup.
                  We tell you exactly what is working, what is at risk, and what
                  to fix first. Delivered as a written report within 48 hours.
                </p>
                <p className="health-check-feature__note">
                  Fee credited toward your first consulting engagement if you
                  proceed within 90 days of your report.
                </p>
              </div>

              <div className="health-check-feature__price-box">
                <p className="health-check-feature__price">$650</p>
                <p className="health-check-feature__price-label">
                  + <span className="health-check-feature__price-gst">GST</span>, fixed fee
                </p>
                <Link
                  href="/contact"
                  className="btn btn--gold-cta health-check-feature__button"
                >
                  Book a health check
                </Link>
                <p className="health-check-feature__terms">
                  Fixed fee,{' '}
                  <Link
                    href="/health-check-terms"
                    className="health-check-feature__terms-link"
                  >
                    terms apply
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="services-engagement">
        <ContentWrapper>
          <p className="eyebrow eyebrow--light-gold">How we work</p>
          <h2 className="services-engagement__heading">How engagements work.</h2>
          <p className="services-engagement__intro">
            We keep it simple. No large teams, no overhead, no hand-offs to
            juniors. You work with a principal from day one.
          </p>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
