import type { Metadata } from 'next'
import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Mindful Engagement | Technology advisory and products',
  description:
    'A technology group that advises leaders, delivers complex programs, and builds the software organisations run on. Board-level thinking, hands-on delivery.',
}

type ServiceIconType = 'lightbulb' | 'cycle' | 'check'

const serviceCards: {
  icon: ServiceIconType
  tag: string
  title: string
  body: string
}[] = [
  {
    icon: 'lightbulb',
    tag: 'Advisory',
    title: 'Technology Advisory',
    body: 'Director-level advisory for boards, executives, and senior leaders. Strategy, roadmaps, vendor governance, and architecture, without the overhead of a full-time hire.',
  },
  {
    icon: 'cycle',
    tag: 'Transformation',
    title: 'Digital Transformation',
    body: 'End-to-end delivery of complex digital programs. Business applications, enterprise platforms, M365, cloud migration, and operational uplift. From strategy through to working systems.',
  },
  {
    icon: 'check',
    tag: 'Delivery',
    title: 'Program Delivery',
    body: 'Senior program and project leadership for technology initiatives that need to land. Governance, stakeholder management, vendor oversight, and delivery discipline at scale.',
  },
]

const stats = [
  { number: '20', label: 'Years of experience' },
  { number: '$20M', label: 'Portfolio managed' },
  { number: '150', label: 'Enterprise apps governed' },
  { number: '2.3M', label: 'Files migrated' },
]

const principalCredentials = [
  'Master of Engineering (IT and Telecommunications)',
  'Graduate Certificate in Business Administration',
  'MSP Practitioner',
  'PRINCE2 Practitioner',
  'ITIL 4 Foundation and Leader',
  'Azure, M365, Power Platform',
]

const principalStats = [
  { figure: '20+', label: 'Years senior' },
  { figure: '$20M+', label: 'Portfolio' },
  { figure: '150+', label: 'Apps governed' },
]

function ServiceIcon({ type }: { type: ServiceIconType }) {
  return (
    <svg
      className="service-card__icon-svg"
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

export default function HomePage() {
  return (
    <>
      <Nav />

      <section className="hero">
        <ContentWrapper>
          <div className="hero__inner">
            <p className="eyebrow eyebrow--light-gold">
              Know what&apos;s healthy. Fix what&apos;s not.
            </p>
            <h1 className="hero__heading">
              We think at board level. We build at the coalface.
            </h1>
            <p className="hero__subheading">
              A technology group. We advise leaders, deliver complex programs,
              and build the software organisations run on. Board-level thinking,
              hands-on delivery, no large-firm overhead.
            </p>
            <div className="hero__buttons">
              <Link href="/about" className="btn btn--gold-cta">
                Explore the group
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Book a conversation
              </Link>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="kind-cloud-trust-strip" aria-label="Key stats">
        <ContentWrapper>
          <div className="kind-cloud-trust-strip__grid">
            {stats.map((stat) => (
              <div key={stat.label} className="kind-cloud-trust-strip__item">
                <p className="proof__number">{stat.number}+</p>
                <p className="proof__label">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="kind-cloud-trust-strip__tagline">
            Figures reflect our principals&apos; experience across previous
            senior roles.
          </p>
        </ContentWrapper>
      </section>

      <section id="me-group" className="me-group">
        <ContentWrapper>
          <p className="eyebrow eyebrow--navy">The ME group</p>
          <h2 className="me-group__heading">More than a consultancy.</h2>
          <hr className="me-group__rule" />
          <p className="me-group__body">
            Three divisions, one philosophy: intentionality over busyness. We
            build the services, products, and thinking that help organisations
            operate with clarity.
          </p>

          <div className="me-group__grid">
            <div className="group-card group-card--navy-accent">
              <p className="eyebrow eyebrow--card">Consultancy</p>
              <h3 className="group-card__title">ME Services</h3>
              <p className="group-card__body">
                Technology advisory, digital transformation, and program delivery
                for mid-market organisations.
              </p>
              <span className="status-pill status-pill--green">Now open</span>
            </div>

            <div className="group-card group-card--gold-accent">
              <p className="eyebrow eyebrow--card">SaaS products</p>
              <h3 className="group-card__title">ME Products</h3>
              <p className="group-card__body">
                Operations software for charities and welfare organisations. ME
                Kind Cloud is in pilot. ME Pulse in development.
              </p>
              <span className="status-pill status-pill--green">In pilot</span>
            </div>

            <div className="group-card group-card--navy-accent">
              <p className="eyebrow eyebrow--card">Thought leadership</p>
              <h3 className="group-card__title">ME Content</h3>
              <p className="group-card__body">
                The book, the thinking, and the LinkedIn content that sits behind
                everything we build.
              </p>
              <span className="status-pill status-pill--neutral">
                In progress
              </span>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="kind-cloud-feature kind-cloud-feature--prominent">
        <ContentWrapper>
          <div className="two-col two-col--40-60">
            <div className="two-col__content">
              <p className="eyebrow eyebrow--gold">Featured product</p>
              <h2 className="kind-cloud-feature__heading">ME Kind Cloud</h2>
              <hr className="kind-cloud-feature__rule" />
              <p className="kind-cloud-feature__subheading">
                Operations software for multi-chapter charities.
              </p>
              <p className="kind-cloud-feature__body">
                Donors, pledges, multi-currency chapters, and AI-assisted
                reporting in one platform. Built for how charities actually
                operate.
              </p>
              <p className="kind-cloud-feature__highlight">
                Now in pilot, with growing interest from charities using AI to
                cut the load of admin and reporting.
              </p>
              <div className="kind-cloud-feature__buttons">
                <Link href="/products/kind-cloud" className="btn btn--gold-cta">
                  See it in action
                </Link>
                <Link href="/contact" className="btn btn--secondary">
                  Book a walkthrough
                </Link>
              </div>
            </div>

            <div className="two-col__detail">
              <img
                src="/screenshots/kind-cloud/dashboard-multicurrency.png"
                alt="ME Kind Cloud dashboard showing multi-currency chapter totals"
                className="kind-cloud-feature__image"
              />
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="pillars pillars--compact">
        <ContentWrapper>
          <div className="pillars__header">
            <p className="eyebrow eyebrow--navy">What we do</p>
            <h2 className="pillars__heading">Three ways we help</h2>
            <hr className="pillars__rule" />
            <p className="pillars__subheading">
              Three service lines, all grounded in 20 years of senior technology
              delivery.
            </p>
          </div>

          <div className="pillars__grid">
            {serviceCards.map((card) => (
              <article key={card.title} className="service-card">
                <div className="service-card__icon-tile">
                  <ServiceIcon type={card.icon} />
                </div>
                <p className="service-card__tag">{card.tag}</p>
                <h3 className="service-card__title">{card.title}</h3>
                <p className="service-card__body">{card.body}</p>
                <Link href="/services" className="service-card__link">
                  Learn more &rarr;
                </Link>
              </article>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section className="about-teaser about-teaser--compact">
        <ContentWrapper>
          <div className="about-teaser__grid">
            <div>
              <p className="eyebrow eyebrow--gold">About{'\u00A0'}us</p>
              <h2 className="about-teaser__heading">
                A different kind of technology firm.
              </h2>
              <p className="about-teaser__body">
                Mindful Engagement is a technology group built by practitioners.
                We bring director-level leadership to mid-market organisations
                without the overhead of a large firm. We think at board level
                and we deliver at the coalface.
              </p>
              <p className="about-teaser__body">
                Built on 20 years of senior technology leadership across
                government, healthcare, insurance, and retail.
              </p>
              <Link href="/about" className="btn btn--secondary about-teaser__cta">
                Meet our people
              </Link>
            </div>

            <div className="about-teaser__credentials">
              <h3 className="about-teaser__credentials-heading">
                What our principals bring
              </h3>
              <ul className="about-teaser__credentials-grid">
                {principalCredentials.map((item) => (
                  <li key={item} className="about-teaser__credentials-item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="about-teaser__credentials-stats">
                {principalStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="about-teaser__credentials-stat"
                  >
                    <p className="about-teaser__credentials-figure">
                      {stat.figure}
                    </p>
                    <p className="about-teaser__credentials-label">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="work-intro__sub">
                Figures reflect our principals&apos; experience across previous
                senior roles.
              </p>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="closing-cta closing-cta--compact">
        <ContentWrapper>
          <div className="closing-cta__inner">
            <p className="eyebrow eyebrow--navy">Ready to talk</p>
            <h2 className="closing-cta__heading">
              Ready to work with a firm that delivers?
            </h2>
            <p className="closing-cta__body">
              No large teams, no overhead, no advice that stops at the strategy
              document. A 30-minute conversation to see if there is a fit.
            </p>
            <div className="closing-cta__button">
              <Link href="/contact" className="btn btn--primary">
                Book a conversation
              </Link>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
