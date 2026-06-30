import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const pillars = [
  {
    eyebrow: 'Advisory',
    title: 'Technology Advisory',
    body: 'Director-level technology advisory for boards, executives, and senior leadership teams. Strategy, roadmaps, vendor governance, and architecture decisions without the overhead of a full-time hire.',
    accent: 'gold' as const,
  },
  {
    eyebrow: 'Transformation',
    title: 'Digital Transformation',
    body: 'End-to-end delivery of complex digital programs. Business applications, enterprise platforms, M365, cloud migration, and operational uplift. From strategy through to working systems.',
    accent: 'navy' as const,
  },
  {
    eyebrow: 'Delivery',
    title: 'Program Delivery',
    body: 'Senior program and project leadership for technology initiatives that need to land. Governance, stakeholder management, vendor oversight, and delivery discipline at scale.',
    accent: 'gold' as const,
  },
]

const stats = [
  { number: '20', label: 'Years of experience' },
  { number: '$20M', label: 'Portfolio managed' },
  { number: '150', label: 'Enterprise apps governed' },
  { number: '2.3M', label: 'Files migrated' },
]

const credentials = [
  'Master of Engineering',
  '(IT and Telecommunications)',
  'Graduate Certificate in Business Administration',
  'MSP Practitioner',
  'PRINCE2 Practitioner',
  'ITIL 4 Foundation and Leader',
  'Azure, M365, Power Platform',
]

export default function HomePage() {
  return (
    <>
      <Nav />

      <section className="hero">
        <ContentWrapper>
          <div className="hero__inner">
            <p className="eyebrow eyebrow--gold">Technology consultancy</p>
            <h1 className="hero__heading">
              Senior technology leadership, without the large-firm overhead.
            </h1>
            <p className="hero__subheading">
              Mindful Engagement brings director-level thinking and hands-on
              delivery to organisations that need it done right. Strategy
              through to working systems. No hand-offs. No juniors.
            </p>
            <div className="hero__buttons">
              <Link href="/services" className="btn btn--gold-cta">
                See our services
              </Link>
              <a
                href="https://outlook.office.com/bookwithme/user/25c56a4fa3284335a44e6074818ec6b2@mindful-engagement.com/meetingtype/919g0__r40qOZkbF6AvhhA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-gold"
              >
                Book a discovery call
              </a>
              <Link href="/contact" className="btn btn--outline-gold">
                Get in touch
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
        </ContentWrapper>
      </section>

      <section className="pillars pillars--compact">
        <ContentWrapper>
          <div className="pillars__header">
            <p className="eyebrow eyebrow--navy">What we do</p>
            <h2 className="pillars__heading">Three ways we help</h2>
            <hr className="pillars__rule" />
            <p className="pillars__subheading">
              Three service lines. All grounded in 20 years of senior technology
              delivery.
            </p>
          </div>

          <div className="pillars__grid">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`pillar-card pillar-card--${pillar.accent}-accent`}
              >
                <p className="eyebrow eyebrow--card">{pillar.eyebrow}</p>
                <h3 className="pillar-card__title">{pillar.title}</h3>
                <p className="pillar-card__body">{pillar.body}</p>
                <Link href="/services" className="pillar-card__link">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
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
                Operations software for multi-chapter charities and welfare
                organisations.
              </p>
              <p className="kind-cloud-feature__body">
                Built for how charities actually operate: donor management,
                pledges, multi-currency chapters, and AI-assisted reporting in
                one platform. Currently in active pilot with a UK-headquartered
                welfare organisation operating chapters across Australia, the
                UK, and Pakistan.
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

      <section className="about-teaser about-teaser--tight-cta">
        <ContentWrapper>
          <div className="about-teaser__grid">
            <div>
              <p className="eyebrow eyebrow--gold">About{'\u00A0'}us</p>
              <h2 className="about-teaser__heading">
                A different kind of technology firm.
              </h2>
              <p className="about-teaser__body">
                Mindful Engagement is a technology group built by practitioners.
                We bring director-level technology leadership to mid-market
                organisations without the overhead of a large firm. We think at
                board level and we deliver at the coalface.
              </p>
              <p className="about-teaser__body">
                Built on 20 years of senior technology leadership across
                government, healthcare, insurance, and retail. $20M+ portfolios
                managed. 150+ enterprise applications governed.
              </p>
              <Link href="/about" className="btn btn--secondary about-teaser__cta">
                Meet our people
              </Link>
            </div>

            <div className="about-teaser__credentials">
              <h3 className="about-teaser__credentials-heading">What our principals bring</h3>
              <ul className="about-teaser__credentials-list">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className={`about-teaser__credentials-item${item.startsWith('(') ? ' about-teaser__credentials-item--continuation' : ''}`}
                  >
                    {!item.startsWith('(') && (
                      <span className="about-teaser__credentials-dash">-</span>
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="closing-cta closing-cta--tight-top">
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

      <section className="me-group">
        <ContentWrapper>
          <p className="eyebrow eyebrow--navy">The ME group</p>
          <h2 className="me-group__heading">
            Mindful Engagement is more than a consultancy.
          </h2>
          <p className="me-group__body">
            We build the services, products, and thinking that help organisations
            and leaders operate with clarity. ME Services is one part of a broader
            group built on a single philosophy: intentionality over busyness.
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
                Operations software for multi-chapter charities and welfare
                organisations. ME Kind Cloud is in active pilot. ME Pulse is in
                development.
              </p>
              <span className="status-pill status-pill--amber">In development</span>
            </div>

            <div className="group-card group-card--navy-accent">
              <p className="eyebrow eyebrow--card">Thought leadership</p>
              <h3 className="group-card__title">ME Content</h3>
              <p className="group-card__body">
                The book, the thinking, and the LinkedIn content that sits behind
                everything we build.
              </p>
              <span className="status-pill status-pill--neutral">In progress</span>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
