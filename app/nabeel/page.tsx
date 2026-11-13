import type { Metadata } from 'next'
import Link from 'next/link'
import ContentWrapper from '@/components/ContentWrapper'
import CountUp from '@/components/CountUp'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Reveal from '@/components/Reveal'
import {
  FOUNDER_FOCUS,
  FOUNDER_SECTORS,
  FOUNDER_STANDARDS,
  PERSONAL_LINKEDIN_URL,
  founderCreed,
  founderQuote,
  founderStoryParagraphs,
} from '@/content/founder'

const pageTitle = 'Nabeel Mahmood | Founder, Mindful Engagement'
const pageDescription =
  'Nabeel Mahmood is Founder and Managing Director of Mindful Engagement, with twenty years leading technology across government, healthcare, insurance, and retail.'
const pageUrl = 'https://www.mindful-engagement.com/nabeel'
const photoPath = '/images/team/nabeel-mahmood.jpg'
const photoUrl = `https://www.mindful-engagement.com${photoPath}`
const photoAlt =
  'Nabeel Mahmood, Founder and Managing Director, Mindful Engagement'

const trackRecord = [
  { value: 20, prefix: '', suffix: '', unit: 'years', label: 'Technology leadership' },
  { value: 20, prefix: '$', suffix: 'M+', unit: '', label: 'Portfolios managed' },
  { value: 150, prefix: '', suffix: '+', unit: '', label: 'Enterprise applications governed' },
]

const sameAs = [
  'https://mahmoods.com.au',
  ...(PERSONAL_LINKEDIN_URL ? [PERSONAL_LINKEDIN_URL] : []),
]

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nabeel Mahmood',
  jobTitle: 'Founder and Managing Director',
  worksFor: {
    '@type': 'Organization',
    name: 'Mindful Engagement Pty Ltd',
    url: 'https://www.mindful-engagement.com',
  },
  url: pageUrl,
  image: photoUrl,
  sameAs,
}

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: [{ url: photoUrl, alt: photoAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [photoUrl],
  },
}

export default function NabeelPage() {
  return (
    <div className="nabeel">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />

      <section className="nabeel-hero">
        <div className="nabeel-hero__layout">
          <div className="nabeel-hero__copy">
            <p className="nabeel-kicker">
              Founder and Managing Director, Mindful Engagement
            </p>
            <h1 className="nabeel-hero__name">
              <span>Nabeel</span> <span>Mahmood</span>
            </h1>
            <p className="nabeel-hero__creed">{founderCreed}</p>
            <p className="nabeel-hero__lead">
              Twenty years leading technology inside client organisations across
              government, healthcare, insurance, and retail.
            </p>
            <div className="hero__buttons">
              <Link href="/contact" className="btn btn--gold-cta">
                Book a conversation
              </Link>
              <Link href="/services" className="btn btn--ghost">
                Services
              </Link>
            </div>
          </div>
          <div className="nabeel-hero__media">
            <img src={photoPath} alt={photoAlt} className="nabeel-hero__photo" />
          </div>
        </div>
        <div className="nabeel-scroll" aria-hidden="true" />
      </section>

      <section className="nabeel-manifesto">
        <ContentWrapper>
          <Reveal className="nabeel-manifesto__inner">
            <p className="nabeel-manifesto__mark" aria-hidden="true">
              &ldquo;
            </p>
            <p className="nabeel-manifesto__quote">{founderQuote}</p>
          </Reveal>
        </ContentWrapper>
      </section>

      <section className="nabeel-story">
        <ContentWrapper>
          <div className="nabeel-story__grid">
            <div className="nabeel-story__figure">
              <p className="nabeel-story__years">20</p>
              <p className="nabeel-story__caption">years leading technology</p>
            </div>
            <Reveal>
              {founderStoryParagraphs.map((paragraph) => (
                <p key={paragraph} className="nabeel-story__body">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </ContentWrapper>
      </section>

      <section className="nabeel-record">
        <ContentWrapper>
          <Reveal>
            <div className="nabeel-record__list">
              {trackRecord.map((item) => (
                <div key={item.label} className="nabeel-record__item">
                  <p className="nabeel-record__value">
                    <CountUp
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                    {item.unit ? (
                      <span className="nabeel-record__unit">{` ${item.unit}`}</span>
                    ) : null}
                  </p>
                  <p className="nabeel-record__label">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </ContentWrapper>
      </section>

      <section className="nabeel-sectors">
        <ContentWrapper>
          <Reveal>
            <p className="nabeel-kicker nabeel-kicker--navy">Where I have led</p>
            <ul className="nabeel-sectors__list">
              {FOUNDER_SECTORS.map((sector) => (
                <li key={sector} className="nabeel-sectors__item">
                  {sector}
                </li>
              ))}
            </ul>
          </Reveal>
        </ContentWrapper>
      </section>

      <section className="nabeel-signature">
        <ContentWrapper>
          <Reveal stagger>
            <p className="nabeel-kicker nabeel-kicker--navy">How I work</p>
            <h2 className="nabeel-heading">What must always be true</h2>
            <div className="nabeel-board">
              <ul className="nabeel-board__list">
                {FOUNDER_STANDARDS.map((standard) => (
                  <li key={standard} className="nabeel-standard">
                    <span className="nabeel-standard__dot" aria-hidden="true" />
                    <span className="nabeel-standard__text">{standard}</span>
                    <span className="nabeel-standard__meta">Checked weekly</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="nabeel-practice">
              <Link href="#book">This is the practice behind PULSE.</Link>
            </p>
          </Reveal>
        </ContentWrapper>
      </section>

      <section className="nabeel-focus">
        <ContentWrapper>
          <Reveal>
            <ol className="nabeel-focus__list">
              {FOUNDER_FOCUS.map((area, index) => (
                <li key={area.title} className="nabeel-focus__item">
                  <Link href="/services" className="nabeel-focus__link">
                    <span className="nabeel-focus__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="nabeel-focus__copy">
                      <span className="nabeel-focus__title">{area.title}</span>
                      {area.line ? (
                        <span className="nabeel-focus__line">{area.line}</span>
                      ) : null}
                    </span>
                    <svg
                      className="nabeel-focus__arrow"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </ContentWrapper>
      </section>

      <section className="nabeel-book" id="book">
        <ContentWrapper>
          <Reveal className="nabeel-book__grid">
            <div className="nabeel-book__cover" aria-hidden="true">
              <p className="nabeel-book__pulse">PULSE</p>
              <p className="nabeel-book__cover-title">What Must Always Be True</p>
              <p className="nabeel-book__author">Nabeel Mahmood</p>
            </div>
            <div>
              <p className="nabeel-kicker">The book</p>
              <h2 className="nabeel-heading nabeel-heading--light">
                PULSE: What Must Always Be True
              </h2>
              <p className="nabeel-book__line">
                A new philosophy of living and leading.
              </p>
              <p className="nabeel-book__creed">{founderCreed}</p>
              <p className="nabeel-book__pill">Coming soon</p>
            </div>
          </Reveal>
        </ContentWrapper>
      </section>

      <section className="nabeel-close">
        <ContentWrapper>
          <Reveal className="nabeel-close__inner">
            <h2 className="nabeel-close__heading">Ready to work together?</h2>
            <Link href="/contact" className="nabeel-close__btn">
              Book a conversation
            </Link>
            <div className="nabeel-close__links">
              <a
                href="mailto:nabeel@mindful-engagement.com"
                className="nabeel-close__mail"
              >
                nabeel@mindful-engagement.com
              </a>
              {PERSONAL_LINKEDIN_URL ? (
                <a
                  href={PERSONAL_LINKEDIN_URL}
                  className="nabeel-close__linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nabeel Mahmood on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6.1V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z"
                    />
                  </svg>
                </a>
              ) : null}
            </div>
          </Reveal>
        </ContentWrapper>
      </section>

      <Footer />
    </div>
  )
}
