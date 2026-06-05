import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const workCards = [
  {
    sector: 'Government / health',
    title: 'Enterprise M365 Transformation',
    description:
      'Directed enterprise M365 Modern Workspace transformation across 30+ organisational units within a large government health network. Migrated 2.3M+ files, established statewide adoption benchmarks, and delivered device programs for two consecutive years. Microsoft contract negotiations managed at the principal level.',
    outcome: '2.3M+ files migrated',
  },
  {
    sector: 'Health insurance',
    title: 'Application Portfolio Governance',
    description:
      'Governed a portfolio of 150+ enterprise applications for a major health insurer, embedding cloud-native, API-first, and event-driven architecture patterns. Built the technology function from a single resource to a full multidisciplinary team. Achieved 95% SLA compliance and reduced MTTR by 30%. Microsoft Dynamics 365 formed a core part of the application portfolio, with governance and roadmap ownership across the platform.',
    outcome: '150+ apps governed',
  },
  {
    sector: 'Retail / enterprise',
    title: 'Enterprise Workflow Automation',
    description:
      'Delivered a large-scale workflow automation platform enabling millions of automated transactions annually across national retail operations. Led a multi-million-dollar commercial agreement transformation across nine business departments, delivering governance and operational transition models for enterprise-wide adoption.',
    outcome: 'Millions of transactions automated',
  },
  {
    sector: 'Technology / law enforcement',
    title: 'Law Enforcement Platform Delivery',
    description:
      'Delivered NetRMS law enforcement systems across multiple US states for a global blue-chip technology organisation. Led cross-border Australian and US delivery teams, managing complex stakeholder environments across government agencies and achieving 95% stakeholder satisfaction on program delivery.',
    outcome: '95% stakeholder satisfaction',
  },
  {
    sector: 'CRM / enterprise platforms',
    title: 'Dynamics 365 CRM and model-driven apps',
    description:
      'Delivered Microsoft Dynamics 365 CRM implementation and model-driven application development for an enterprise client. Covered platform architecture, data modelling, business process automation, and stakeholder adoption. Integrated with existing enterprise systems to create a unified operational platform across the organisation.',
    outcome: 'Enterprise CRM delivered',
  },
]

const stats = [
  { number: '20+', label: 'Years of experience' },
  { number: '$20M+', label: 'Portfolio managed' },
  { number: '150+', label: 'Enterprise apps governed' },
  { number: '2.3M+', label: 'Files migrated' },
]

export default function WorkPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Our work</p>
          <h1 className="page-hero__heading">Selected engagements.</h1>
          <p className="page-hero__subheading">
            A selection of programs and initiatives delivered by our principals
            across government, healthcare, and enterprise.
          </p>
        </ContentWrapper>
      </section>

      <section className="confidentiality-banner">
        <ContentWrapper>
          <p className="confidentiality-banner__text">
            Client confidentiality is respected in all cases. Organisations and
            outcomes are described at the level appropriate for public
            disclosure.
          </p>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--sm">
        <ContentWrapper>
          <div className="work-grid md:grid-cols-2 lg:grid-cols-3">
            {workCards.map((card) => (
              <div key={card.title} className="work-card">
                <p className="work-card__sector">{card.sector}</p>
                <h2 className="work-card__title">{card.title}</h2>
                <p className="work-card__description">{card.description}</p>
                <hr className="work-card__divider" />
                <span className="outcome-pill">{card.outcome}</span>
              </div>
            ))}
          </div>

          <div className="work-footer">
            <p className="work-footer__note">
              Additional case studies in preparation. Speak with us directly for
              sector-specific references.
            </p>
            <Link href="/contact" className="work-footer__link">
              Get in touch
            </Link>
          </div>
        </ContentWrapper>
      </section>

      <section className="proof">
        <ContentWrapper>
          <div className="proof__grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="proof__number">{stat.number}</p>
                <p className="proof__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
