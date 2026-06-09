import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

type EngagementItem = {
  label: string
  body: string
}

type ServiceEngagement = {
  label: string
  body: string
}

type ServiceSection = {
  eyebrow: string
  pill: string
  heading: string
  body: string
  bodySecondary?: string
  suited?: string
  price?: string
  feeNote?: string
  cardHeading: string
  engagements: ServiceEngagement[]
  tags: string[]
  reversed?: boolean
  bgWhite?: boolean
  cardAccent: 'gold' | 'navy'
}

const services: ServiceSection[] = [
  {
    eyebrow: 'Service one',
    pill: 'Advisory',
    heading: 'Technology Advisory',
    body: 'Director-level technology advisory for organisations that need senior thinking without full-time headcount. Our principals engage at board and executive level, providing independent perspective on technology strategy, architecture decisions, vendor governance, and investment priorities.',
    bodySecondary:
      'AI readiness is now a core element of every technology advisory engagement. We assess organisational readiness for AI adoption, define governance frameworks for responsible AI use, and translate AI strategy into practical roadmaps that boards and executives can act on. Microsoft Copilot, Azure AI, and Power Platform are central to how we approach this work.',
    suited:
      'Suited to: boards that need independent technology assurance, organisations in mid-transformation that need strategic oversight, or technology functions that need senior lift without a permanent hire.',
    cardHeading: 'Typical engagements',
    engagements: [
      {
        label: 'Technology strategy and roadmap',
        body: 'Multi-year technology direction aligned to organisational strategy.',
      },
      {
        label: 'Architecture and vendor review',
        body: 'Independent assessment of current platforms, gaps, and investment priorities.',
      },
      {
        label: 'Board-level technology reporting',
        body: 'Translating technical complexity into board-ready language and governance frameworks.',
      },
      {
        label: 'AI readiness and governance',
        body: 'Assessing organisational readiness for AI adoption, defining responsible use frameworks, and building board-ready AI investment roadmaps.',
      },
    ],
    tags: [
      'Azure',
      'M365',
      'Dynamics 365',
      'SharePoint',
      'Power Platform',
      'Microsoft Copilot',
      'Azure AI',
      'AI readiness',
      'ITIL 4',
      'APRA/GDPR',
    ],
    cardAccent: 'navy',
  },
  {
    eyebrow: 'Service two',
    pill: 'Transformation',
    heading: 'Digital Transformation',
    body: 'End-to-end delivery of digital transformation programs. Business applications, enterprise platform modernisation, M365 rollouts, cloud migration, and operational uplift. From business case through to live systems and adopted workflows.',
    bodySecondary:
      'AI-enabled transformation is a growing part of this work. We design and deliver automation and intelligence capabilities using Microsoft Copilot, Power Automate, and Azure-native AI services, embedded into business workflows rather than bolted on as separate tools.',
    suited:
      'Suited to: mid-market organisations running legacy platforms, technology teams under-resourced for program scale, or boards with transformation mandates and no delivery confidence.',
    cardHeading: 'Typical engagements',
    engagements: [
      {
        label: 'M365 and cloud migration',
        body: 'Modern Workspace transformation, SharePoint, Teams, and Azure platform uplift.',
      },
      {
        label: 'Business application modernisation',
        body: 'Legacy platform replacement, API-first architecture, and integration design.',
      },
      {
        label: 'Operational uplift',
        body: 'Service management, governance frameworks, and capability uplift across technology functions.',
      },
      {
        label: 'AI and automation implementation',
        body: 'Delivering Microsoft Copilot, Power Automate, and Azure AI capabilities embedded into existing business processes and platforms.',
      },
    ],
    tags: [
      '.NET',
      'CI/CD',
      'API-first',
      'Power BI',
      'Dataverse',
      'Dynamics 365',
      'Microsoft Copilot',
      'Power Automate',
      'Azure AI',
      'K2',
      'Event-driven architecture',
    ],
    reversed: true,
    bgWhite: true,
    cardAccent: 'navy',
  },
  {
    eyebrow: 'Service three',
    pill: 'Delivery',
    heading: 'Program Delivery',
    body: 'Senior program and project leadership for complex technology initiatives. Governance frameworks, stakeholder and vendor management, delivery discipline, and reporting to executive and board level. Delivered to MSP, PRINCE2, and PMBOK standards.',
    bodySecondary:
      'AI programs require the same delivery discipline as any complex technology initiative, and often more. We provide governance, vendor management, and stakeholder oversight for AI adoption programs, ensuring delivery accountability from pilot through to scaled deployment.',
    suited:
      'Suited to: programs that have stalled, organisations without internal PM capability at the required seniority, or initiatives with regulatory or compliance requirements.',
    cardHeading: 'Typical engagements',
    engagements: [
      {
        label: 'Program rescue and recovery',
        body: 'Stabilising programs that have lost momentum, confidence, or direction.',
      },
      {
        label: 'Governance and reporting frameworks',
        body: 'Establishing the structures that give boards and executives confidence in delivery.',
      },
      {
        label: 'Vendor and commercial management',
        body: 'Managing technology vendors, contracts, and performance at the principal level.',
      },
      {
        label: 'AI program governance',
        body: 'Providing delivery leadership, governance frameworks, and executive reporting for AI adoption programs from pilot through to scaled deployment.',
      },
    ],
    tags: [
      'MSP',
      'PRINCE2',
      'PMBOK',
      'Agile',
      'ITIL 4',
      'Azure DevOps',
      'MS Project',
    ],
    cardAccent: 'navy',
  },
  {
    eyebrow: 'Service four',
    pill: 'Fixed fee service',
    heading: 'Technology Health Check',
    body: 'A focused two-hour review of your current technology setup. We tell you exactly what is working, what is at risk, and what to fix first. Delivered as a written report within 48 hours.',
    price: '$650 fixed fee',
    feeNote:
      'Fee credited toward your first consulting engagement if you proceed.',
    cardHeading: 'What is included',
    engagements: [
      {
        label: 'Current technology stack assessment',
        body: '',
      },
      {
        label: 'Security and access risk review',
        body: '',
      },
      {
        label: 'Operational health: licences, renewals, vendor risks',
        body: '',
      },
      {
        label: 'Top three priorities ranked by risk and impact',
        body: '',
      },
      {
        label: 'Clear implementation path and next steps',
        body: '',
      },
    ],
    tags: [],
    reversed: true,
    bgWhite: true,
    cardAccent: 'navy',
  },
]

const engagementModel: EngagementItem[] = [
  {
    label: 'Retained advisory',
    body: 'Monthly retainer for ongoing strategic support. Typically two to four days per month. Suits organisations that need a standing technology principal.',
  },
  {
    label: 'Project-based',
    body: 'Fixed scope, fixed outcome. Suited to transformation programs and platform implementations where delivery accountability matters.',
  },
  {
    label: 'Interim leadership',
    body: 'Short-term placement into a technology leadership role during transition, growth, or crisis. Principal-level, from day one.',
  },
]

function ServiceDetailCard({
  heading,
  engagements,
  tags,
  accent,
}: {
  heading: string
  engagements: ServiceEngagement[]
  tags: string[]
  accent: 'gold' | 'navy'
}) {
  return (
    <div
      className={`info-card info-card--${accent === 'gold' ? 'gold' : 'navy'}-top`}
    >
      <h3 className="info-card__heading">{heading}</h3>
      {engagements.map((item) => (
        <div key={item.label} className="info-card__item">
          <p className="info-card__item-label">
            <span className="info-card__dash">-</span>
            {item.label}
          </p>
          {item.body ? (
            <p className="info-card__item-body">{item.body}</p>
          ) : null}
        </div>
      ))}
      {tags.length > 0 ? (
        <>
          <hr className="info-card__divider" />
          <div className="skill-tags">
            {tags.map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">What we do</p>
          <h1 className="page-hero__heading">Three service lines.</h1>
          <p className="page-hero__subheading">
            All grounded in 20 years of senior technology delivery. We think
            strategically and we deliver practically.
          </p>
        </ContentWrapper>
      </section>

      {services.map((service) => (
        <section
          key={service.heading}
          className={`section-pad ${service.bgWhite ? 'section--white' : 'section--off-white'}`}
        >
          <ContentWrapper>
            <div
              className={`two-col two-col--45-50${service.reversed ? ' two-col--reversed' : ''}`}
            >
              <div className="two-col__content">
                <p className="eyebrow eyebrow--gold">{service.eyebrow}</p>
                <span className="label-pill">{service.pill}</span>
                <h2 className="service-heading">{service.heading}</h2>
                <p className="section-body">{service.body}</p>
                {service.bodySecondary ? (
                  <p className="section-body">{service.bodySecondary}</p>
                ) : null}
                {service.price ? (
                  <p className="section-body section-body--price">
                    {service.price}
                  </p>
                ) : null}
                {service.feeNote ? (
                  <p className="section-body--muted">{service.feeNote}</p>
                ) : null}
                {service.suited ? (
                  <p className="section-body--muted">{service.suited}</p>
                ) : null}
              </div>
              <div className="two-col__detail">
                <ServiceDetailCard
                  heading={service.cardHeading}
                  engagements={service.engagements}
                  tags={service.tags}
                  accent={service.cardAccent}
                />
              </div>
            </div>
          </ContentWrapper>
        </section>
      ))}

      <section className="section--navy section-pad--md">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">How we work</p>
          <h2 className="section-heading section-heading--lg section-heading--white">
            How engagements work.
          </h2>
          <p className="section-subheading section-subheading--white">
            We keep it simple. No large teams, no overhead, no hand-offs to
            juniors. You work with a principal from day one.
          </p>

          <div className="engagement-grid">
            {engagementModel.map((item) => (
              <div key={item.label} className="engagement-item">
                <p className="engagement-item__title">{item.label}</p>
                <p className="engagement-item__body">{item.body}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '40px',
              borderTop: '1px solid var(--me-white-10)',
              paddingTop: '24px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--me-font)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--me-brand-gold)',
                margin: '0 0 10px',
              }}
            >
              Delivery partners
            </p>
            <p
              style={{
                fontFamily: 'var(--me-font)',
                fontSize: '14px',
                color: 'var(--me-white-70)',
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Where engagements require specialist platform capability, we draw on
              an established network of delivery partners including Microsoft,
              Azure AI, and Salesforce ecosystem specialists. For AI adoption
              programs, we work with Microsoft-certified AI and Copilot partners
              to ensure implementations are delivered to the standard that the
              technology requires.
            </p>
          </div>

          <div className="engagement-cta">
            <Link href="/contact" className="btn btn--gold-cta">
              Start a conversation
            </Link>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
