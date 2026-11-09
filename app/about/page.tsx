import type { Metadata } from 'next'
import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import DirectorAvatar from './DirectorAvatar'

export const metadata: Metadata = {
  title: 'About us | Mindful Engagement',
  description:
    'Meet the founder, directors, and principals behind Mindful Engagement. A technology group built by practitioners who think at board level and deliver at the coalface.',
}

const principles = [
  'Intentionality over busyness',
  'Awareness over reactivity',
  'Outcomes over output',
]

const directors = [
  {
    initials: 'NM',
    name: 'Nabeel Mahmood',
    role: 'Founder and Managing Director',
    bio: 'Twenty years in senior technology leadership. In previous roles, managed $20M+ portfolios and governed 150+ enterprise applications. Sets the strategy and standard of the group.',
    avatarImage: {
      src: '/images/team/nabeel-mahmood.jpg',
      alt: 'Nabeel Mahmood',
    },
  },
  {
    initials: 'FM',
    name: 'Farrukh Mahmood',
    role: 'Finance / Operations Director',
    bio: 'Thirty years in international finance, built across two decades with the UN Refugee Agency leading finance and payroll for humanitarian operations from Angola and Bosnia to Myanmar and Pakistan. MBA. Provides the financial governance behind the group.',
    avatarImage: {
      src: '/images/team/farrukh-mahmood.png',
      alt: 'Farrukh Mahmood, Finance / Operations Director',
    },
  },
]

const principals = [
  {
    initials: 'TM',
    name: 'Tayyab Mahmood',
    role: 'Principal, Software Engineering',
    bio: 'Software engineer and solution architect specialising in scalable web applications and modern technology stacks.',
    avatarImage: {
      src: '/images/team/tayyab-mahmood.jpg',
      alt: 'Tayyab Mahmood',
    },
  },
  {
    initials: 'SA',
    name: 'Shayan Amer',
    role: 'Principal, Business Relationships',
    bio: 'Relationship-first B2B professional across telecommunications, technology, and real estate. Builds lasting client partnerships.',
  },
  {
    initials: 'UB',
    name: 'Umer Inam Butt',
    role: 'Principal, Program Delivery',
    bio: 'Senior program manager with a Master of Engineering, spanning telecommunications and large infrastructure delivery at national scale.',
  },
]

/*
 * Hidden pending real advisor and partner names.
const advisors = [
  { name: 'Business Advisor', role: 'Advisory board' },
  { name: 'Delivery Partner', role: 'Commercial partner' },
]
*/

function PrincipalAvatar({
  initials,
  avatarImage,
}: {
  initials: string
  avatarImage?: { src: string; alt: string }
}) {
  if (avatarImage) {
    return (
      <img
        src={avatarImage.src}
        alt={avatarImage.alt}
        className="principal-tier-card__avatar"
      />
    )
  }

  return <div className="principal-tier-card__avatar">{initials}</div>
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--light-gold">About us</p>
          <h1 className="page-hero__heading">Built to do it differently.</h1>
          <p className="page-hero__subheading page-hero__subheading--about">
            A technology group founded on a simple belief: the best technology
            leadership is deliberate, aware, and human-centred.
          </p>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--about section-pad--about-first">
        <ContentWrapper>
          <div className="two-col two-col--55-40">
            <div className="two-col__content">
              <p className="eyebrow eyebrow--gold">Our story</p>

              <div className="founder-story__identity">
                <img
                  src="/images/team/nabeel-mahmood.jpg"
                  alt="Nabeel Mahmood"
                  className="founder-story__portrait"
                />
                <div>
                  <p className="founder-story__identity-name">Nabeel Mahmood</p>
                  <p className="founder-story__identity-role">
                    Founder and Managing Director
                  </p>
                </div>
              </div>

              <p className="section-body">
                I spent twenty years leading technology inside other
                people&apos;s organisations, across government, healthcare,
                insurance, and retail. I learned that the work that endures is
                rarely the work that looks busiest. It is the work done with
                intention, by senior people who stay close to it from strategy
                through to delivery.
              </p>
              <p className="section-body">
                Mindful Engagement exists to work that way on purpose. We keep
                teams small and senior. We think at board level and we deliver at
                the coalface. Alongside the consultancy, we build products and
                publish thinking under the same philosophy.
              </p>
              <p className="founder-story__creed">
                Know what is healthy. Fix what is not.
              </p>
            </div>

            <div className="two-col__detail">
              <div className="philosophy-card">
                <p className="eyebrow eyebrow--light-gold">The ME philosophy</p>
                <p className="philosophy-card__body">
                  ME stands for Mindful Engagement. It is not a productivity
                  philosophy. It is a leadership one.
                </p>
                <ul className="philosophy-card__list">
                  {principles.map((principle) => (
                    <li key={principle} className="philosophy-card__item">
                      <span className="philosophy-card__dash">-</span>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <section className="section--white section-pad--about">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Board and direction</p>
          <h2 className="section-heading">Our directors.</h2>
          <p className="section-subheading about-tier__intro">
            Accountable for the group, its governance, and its direction.
          </p>

          <div className="director-grid about-tier-grid">
            {directors.map((director) => (
              <article key={director.name} className="director-card">
                <DirectorAvatar
                  initials={director.initials}
                  avatarImage={director.avatarImage}
                />
                <div>
                  <h3 className="director-card__name">{director.name}</h3>
                  <p className="director-card__role">{director.role}</p>
                  <p className="director-card__bio">{director.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section className="section--off-white section-pad--about">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Delivery leadership</p>
          <h2 className="section-heading">Our principals.</h2>
          <p className="section-subheading about-tier__intro">
            Built by practitioners, not theorists. Every principal has delivered
            at scale.
          </p>

          <div className="principal-tier-grid about-principal-grid">
            {principals.map((principal) => (
              <article key={principal.name} className="principal-tier-card">
                <PrincipalAvatar
                  initials={principal.initials}
                  avatarImage={principal.avatarImage}
                />
                <h3 className="principal-tier-card__name">{principal.name}</h3>
                <p className="principal-tier-card__role">{principal.role}</p>
                <p className="principal-tier-card__bio">{principal.bio}</p>
              </article>
            ))}
          </div>
        </ContentWrapper>
      </section>

      {/*
        Hidden pending real advisor and partner names.
      <section className="section--white section-pad--about">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Advisors and partners</p>
          <h2 className="section-heading">The circle around us.</h2>
          <p className="section-subheading about-tier__intro">
            A small group of senior advisors and commercial partners who
            strengthen how we think and who we serve.
          </p>

          <div className="advisor-grid about-advisor-grid">
            {advisors.map((advisor) => (
              <article key={advisor.name} className="advisor-card">
                <div className="advisor-card__avatar" aria-hidden="true">
                  ?
                </div>
                <div>
                  <p className="advisor-card__name">{advisor.name}</p>
                  <p className="advisor-card__role">{advisor.role}</p>
                </div>
              </article>
            ))}
          </div>
        </ContentWrapper>
      </section>
      */}

      <section className="about-cta">
        <ContentWrapper>
          <div className="about-cta__inner">
            <p className="eyebrow eyebrow--light-gold">Ready to talk</p>
            <h2 className="about-cta__heading">
              Ready to work with a firm that delivers?
            </h2>
            <p className="about-cta__body">
              No large teams, no overhead, no advice that stops at the strategy
              document. A 30-minute conversation to see if there is a fit.
            </p>
            <div className="about-cta__button">
              <Link href="/contact" className="btn btn--gold-cta">
                Book a conversation
              </Link>
            </div>
            <p className="about-cta__values">
              The principles behind how we work:{' '}
              <Link href="/values" className="about-cta__values-link">
                Read our values &rarr;
              </Link>
            </p>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
