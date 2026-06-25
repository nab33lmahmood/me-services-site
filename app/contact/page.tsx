import { Suspense } from 'react'
import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import ContactForm from './ContactForm'

const contactSteps = [
  {
    title: 'We review your message',
    body: 'We read every enquiry personally and respond within one business day.',
  },
  {
    title: 'A 30-minute conversation',
    body: 'No pitch, no pressure. We want to understand your situation and see if there is a genuine fit.',
  },
  {
    title: 'A clear next step',
    body: 'If there is a fit, we agree on a clear scope and next step. If there is not, we will say so directly.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <ContentWrapper>
          <p className="eyebrow eyebrow--gold">Get in touch</p>
          <h1 className="page-hero__heading">Let us talk.</h1>
          <p className="page-hero__subheading contact-hero__subheading">
            Tell us what you are working on. We will respond within one business
            day.
          </p>
        </ContentWrapper>
      </section>

      <section className="section--off-white contact-main">
        <ContentWrapper>
          <div className="contact-layout">
            <div className="contact-layout__form">
              <div className="contact-form-card">
                <h2 className="contact-form-card__heading">
                  Start a conversation
                </h2>

                <a
                  href="https://outlook.office.com/bookwithme/user/25c56a4fa3284335a44e6074818ec6b2@mindful-engagement.com/meetingtype/sbLQPEl_bkC5_gWRxkILXw2?anonymous&ismsaljsauthenabled&ep=mcard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold-cta contact-form-card__book"
                >
                  Book a discovery call
                </a>

                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            <div className="contact-layout__sidebar">
              <div className="contact-sidebar">
                <div className="contact-info-card contact-info-card--gold-top">
                  <p className="contact-info-card__label">Direct contact</p>
                  <div className="contact-info-card__items">
                    <div>
                      <p className="contact-info-card__item-label">Email</p>
                      <a
                        href="mailto:nabeel@mindful-engagement.com"
                        className="contact-info-card__link"
                      >
                        nabeel@mindful-engagement.com
                      </a>
                    </div>
                    <div>
                      <p className="contact-info-card__item-label">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/mahmoodnabeel"
                        className="contact-info-card__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/mahmoodnabeel
                      </a>
                    </div>
                    <div>
                      <p className="contact-info-card__item-label">Location</p>
                      <p className="contact-info-card__item-value">
                        Melbourne, VIC, Australia
                      </p>
                    </div>
                    <div>
                      <p className="contact-info-card__item-label">
                        Response time
                      </p>
                      <p className="contact-info-card__item-value">
                        Within one business day
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card contact-info-card--navy-top">
                  <p className="contact-info-card__label">What happens next</p>
                  <div className="contact-steps">
                    {contactSteps.map((step, index) => (
                      <div key={step.title} className="contact-step">
                        <span className="contact-step__number">
                          {index + 1}
                        </span>
                        <div>
                          <p className="contact-step__title">{step.title}</p>
                          <p className="contact-step__body">{step.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>

      <Footer />
    </>
  )
}
