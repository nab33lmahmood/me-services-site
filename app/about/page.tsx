import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PrincipalCard from './PrincipalCard'

const principles = [
  'Intentionality over busyness.',
  'Awareness over reactivity.',
  'Outcomes over output.',
]

const nabeelTags = ['MSP Practitioner', 'PRINCE2', 'ITIL 4', 'Azure', 'M365']

const tayyabTags = ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL']

const shayanTags = [
  'B2B Relationships',
  'Account Management',
  'Client Engagement',
  'Commerce',
]

const principals = [
  {
    name: 'Nabeel Mahmood',
    role: 'Founder and principal',
    avatarImage: {
      src: '/images/team/nabeel-mahmood.jpg',
      alt: 'Nabeel Mahmood',
    },
    bio: [
      "Twenty years in technology leadership taught me something most career paths never make explicit: the best work isn't the work that looks busiest, it's the work that's done with intention. I led programs across government, healthcare, insurance, and retail, including blue-chip experience at Motorola Software Group, governing portfolios of 150+ applications and budgets exceeding $20M. But the number that matters more is this: every team I led, I tried to leave more capable than I found it.",
      "I founded Mindful Engagement because I kept seeing the same gap. Organisations don't fail from a lack of talent or effort, they fail when busyness quietly replaces clarity. ME Services exists to bring senior, hands-on technology leadership to organisations that need it done right, without the overhead, the hand-offs, or the junior delivery teams that large firms default to. This is the firm I always wanted to hire. So I built it.",
    ],
    tags: nabeelTags,
  },
  {
    name: 'Tayyab Mahmood',
    role: 'Principal Consultant, Software Engineering',
    avatarImage: {
      src: '/images/team/tayyab-mahmood.jpg',
      alt: 'Tayyab Mahmood',
    },
    bio: [
      'A software engineer and solution architect specialising in scalable web applications and modern technology stacks. Brings deep hands-on capability across full-stack development, system design, and digital product delivery, translating complex business requirements into reliable, high-performing solutions. Works within the Mindful Engagement delivery team to support clients through the full build lifecycle, from architecture and development through to deployment and optimisation.',
    ],
    tags: tayyabTags,
  },
  {
    name: 'Shayan Amer',
    role: 'Business relationship consultant, principal',
    avatarInitials: 'SA',
    accent: 'navy' as const,
    bio: [
      'A dynamic, relationship-first B2B professional with a track record across telecommunications, technology, and real estate. I focus on building genuine client relationships, understanding what organisations actually need, and making sure every engagement starts on the right footing. At Mindful Engagement, I lead client relationships and business development, bringing energy and a fresh commercial perspective to how we connect with the people we work for.',
    ],
    tags: shayanTags,
  },
]

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

      <section className="section--off-white section-pad section-pad--tight-bottom">
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

      <section className="section--white section-pad section-pad--tight-top">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Our people</p>
          <h2 className="section-heading">Our principals.</h2>
          <p className="section-subheading">
            ME Services is built by practitioners, not theorists. Every principal
            has held senior technology leadership roles and delivered programs at
            scale.
          </p>

          <div className="people-grid">
            {principals.map((principal) => (
              <PrincipalCard key={principal.name} {...principal} />
            ))}
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
