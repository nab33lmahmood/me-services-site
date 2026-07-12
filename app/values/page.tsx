import type { Metadata } from 'next'
import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Our values | Mindful Engagement',
  description:
    'Five principles that govern how Mindful Engagement advises, delivers, and chooses partners. Trust, human-centred design, and senior hands-on work.',
}

const values = [
  {
    id: '02',
    name: 'Human before system.',
    punch: 'We build for the person under pressure, never for the demo.',
    variant: 'white' as const,
  },
  {
    id: '03',
    name: ["Know what's healthy.", 'Fix what\'s not.'],
    punch: 'See what is drifting. Act once, early, before it becomes a crisis.',
    variant: 'gold' as const,
  },
  {
    id: '04',
    name: 'Senior hands on the work.',
    punch: 'Whoever scopes it, delivers it. No hand-offs. No juniors.',
    variant: 'white' as const,
  },
  {
    id: '05',
    name: 'Intentionality over busyness.',
    punch: 'The few things that matter, done properly. We decline the rest.',
    variant: 'gold' as const,
  },
]

function EcgPulse() {
  return (
    <svg
      className="values-bento__ecg"
      viewBox="0 0 230 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 30 H70 L82 30 L92 10 L104 50 L116 20 L126 30 H230"
        stroke="var(--me-light-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ValuesPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--light-gold">Values</p>
          <h1 className="page-hero__heading">
            How we work, and who we build with.
          </h1>
          <p className="page-hero__subheading page-hero__subheading--values">
            Five principles that govern how we advise a boardroom and how we
            ship a release. They are also how we choose the people and partners
            we work with, wherever in the world they sit.
          </p>
          <hr className="values-hero__rule" />
        </ContentWrapper>
      </section>

      <section className="section--off-white values-section">
        <ContentWrapper>
          <p className="values-lead">
            <span className="values-lead__emphasis">These are not slogans.</span>{' '}
            They are how we decide what to take on, how we build it, and what we
            walk away from.
          </p>

          <div className="values-bento">
            <article className="values-bento__cell values-bento__cell--trust">
              <p className="values-bento__tag">Value 01</p>
              <h2 className="values-bento__trust-heading">
                Trust is the whole job.
              </h2>
              <p className="values-bento__trust-punch">
                It is what clients buy before anything else. We earn it in the
                parts no one sees.
              </p>
              <EcgPulse />
            </article>

            {values.map((value) => (
              <article
                key={value.id}
                className={`values-bento__cell values-bento__cell--${value.variant}`}
              >
                <span className="values-bento__number">{value.id}</span>
                <div className="values-bento__body">
                  <h3 className="values-bento__name">
                    {Array.isArray(value.name)
                      ? value.name.map((line) => (
                          <span key={line} className="values-bento__name-line">
                            {line}
                          </span>
                        ))
                      : value.name}
                  </h3>
                  <p className="values-bento__punch">{value.punch}</p>
                </div>
              </article>
            ))}
          </div>
        </ContentWrapper>
      </section>

      <section className="values-cta-band">
        <ContentWrapper>
          <div className="values-cta-band__inner">
            <div className="values-cta-band__copy">
              <h2 className="values-cta-band__heading">
                Build the next decade with people who work this way.
              </h2>
              <p className="values-cta-band__subline">
                Whether you are a leader who needs it done right or a
                practitioner who wants to build like this, we would like to
                talk.
              </p>
            </div>
            <div className="values-cta-band__action">
              <Link href="/contact" className="btn btn--gold-cta">
                Start a conversation
              </Link>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
