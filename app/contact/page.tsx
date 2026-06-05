import ContentWrapper from '@/components/ContentWrapper'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

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

                <form
                  action="https://formspree.io/f/mrevboep"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New enquiry via ME Services"
                  />

                  <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="contact-form__input"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="contact-form__group">
                    <label
                      htmlFor="organisation"
                      className="contact-form__label"
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      className="contact-form__input"
                      placeholder="Your organisation (optional)"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact-form__input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="service" className="contact-form__label">
                      Area of interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="contact-form__select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an area (optional)
                      </option>
                      <option value="advisory">Technology Advisory</option>
                      <option value="transformation">
                        Digital Transformation
                      </option>
                      <option value="delivery">Program Delivery</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="message" className="contact-form__label">
                      What are you working on?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="contact-form__textarea"
                      rows={5}
                      placeholder="Briefly describe the challenge or initiative. The more context you give us, the more useful our first conversation will be."
                      required
                    />
                  </div>

                  <button type="submit" className="contact-form__submit">
                    Send message
                  </button>
                </form>
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
