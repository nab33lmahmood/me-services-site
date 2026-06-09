import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const principles = [
  'Intentionality over busyness.',
  'Awareness over reactivity.',
  'Outcomes over output.',
]

const nabeelTags = ['MSP Practitioner', 'PRINCE2', 'ITIL 4', 'Azure', 'M365']

const tayyabTags = ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL']

const groupItems = [
  {
    label: 'ME Services',
    text: 'Technology advisory, transformation, and program delivery.',
  },
  {
    label: 'ME Products',
    text: 'SaaS platforms built on the ME philosophy. ME Pulse and ME Kind Cloud.',
  },
  {
    label: 'ME Content',
    text: 'The book, the research, and the thought leadership.',
  },
]

function PlaceholderCard() {
  return (
    <div className="person-card person-card--placeholder">
      <div className="person-card__avatar">+</div>
      <p className="person-card__name">Principal</p>
      <p className="person-card__role">Joining 2026</p>
      <p className="person-card__bio">
        We are building a team of senior technology practitioners. If you have 15
        or more years of technology leadership experience and share our
        philosophy, we would like to talk.
      </p>
      <Link href="/contact" className="person-card__link">
        Get in touch
      </Link>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">About us</p>
          <h1 className="page-hero__heading">Built to do it differently.</h1>
          <p className="page-hero__subheading">
            Mindful Engagement is a technology group founded on a simple belief:
            the best technology leadership is deliberate, aware, and human-centred.
          </p>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad">
        <ContentWrapper>
          <div className="two-col two-col--55-40">
            <div className="two-col__content">
              <p className="eyebrow eyebrow--gold">Our story</p>
              <h2 className="section-heading">
                A different kind of technology firm.
              </h2>
              <p className="section-body">
                Mindful Engagement was founded by Nabeel Mahmood after 20 years
                leading technology programs across government, healthcare,
                insurance, and retail. The firm was built on a frustration with
                how technology leadership is typically delivered: high overhead,
                low accountability, and advice that stops at the strategy
                document.
              </p>
              <p className="section-body">
                ME Services exists to close that gap. We bring director-level
                technology leadership to organisations that need it, without the
                cost and inertia of a large firm. We think at board level and we
                deliver at the coalface.
              </p>
              <p className="section-body">
                Alongside the consultancy, we build products and publish
                thinking under the same philosophy. Intentionality over busyness.
                Awareness over reactivity. Outcomes over output.
              </p>
            </div>

            <div className="two-col__detail">
              <div className="info-card info-card--gold-top">
                <h3 className="info-card__heading">The ME philosophy</h3>
                <p className="info-card__body">
                  ME stands for Mindful Engagement. It is not a productivity
                  philosophy. It is a leadership one.
                </p>
                <ul className="info-card__principles">
                  {principles.map((principle) => (
                    <li key={principle} className="info-card__principle">
                      <span className="info-card__dash">-</span>
                      {principle}
                    </li>
                  ))}
                </ul>
                <p className="info-card__tagline">
                  Know what is healthy. Fix what is not.
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="section--white section-pad">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Our people</p>
          <h2 className="section-heading">Our principals.</h2>
          <p className="section-subheading">
            ME Services is built by practitioners, not theorists. Every principal
            has held senior technology leadership roles and delivered programs at
            scale.
          </p>

          <div className="people-grid">
            <div className="person-card">
              <div className="person-card__avatar">NM</div>
              <p className="person-card__name">Nabeel Mahmood</p>
              <p className="person-card__role">Founder and principal</p>
              <hr className="person-card__divider" />
              <p className="person-card__bio">
                I founded Mindful Engagement after 20 years leading technology
                programs across government, healthcare, insurance, and retail. I
                have governed portfolios of 150+ applications, managed $20M+
                budgets, and delivered programs that mattered. ME Services is the
                firm I always wanted to hire.
              </p>
              <div className="skill-tags">
                {nabeelTags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="person-card">
              <div className="person-card__avatar">TM</div>
              <p className="person-card__name">Tayyab Mahmood</p>
              <p className="person-card__role">Principal Consultant, Software Engineering</p>
              <hr className="person-card__divider" />
              <p className="person-card__bio">
                A software engineer and solution architect specialising in scalable web
                applications and modern technology stacks. Brings deep hands-on capability
                across full-stack development, system design, and digital product delivery,
                translating complex business requirements into reliable, high-performing
                solutions. Works within the Mindful Engagement delivery team to support
                clients through the full build lifecycle, from architecture and development
                through to deployment and optimisation.
              </p>
              <div className="skill-tags">
                {tayyabTags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <PlaceholderCard />
          </div>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--md">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">The ME group</p>
          <h2 className="section-heading section-heading--lg">
            More than a consultancy.
          </h2>
          <p className="section-subheading section-subheading--580">
            ME Services sits alongside ME Products and ME Content under the
            Mindful Engagement group. Each arm is built on the same philosophy and
            contributes to the same mission: helping organisations and leaders
            operate with clarity.
          </p>

          <div className="group-list">
            {groupItems.map((item) => (
              <div key={item.label} className="group-list__item">
                <p className="group-list__label">{item.label}</p>
                <p className="group-list__text">{item.text}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
