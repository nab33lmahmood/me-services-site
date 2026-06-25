'use client'

import { useSearchParams } from 'next/navigation'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const subjectParam = searchParams.get('subject')
  const subjectValue = subjectParam ?? 'New enquiry via ME Services'
  const isProductEnquiry = Boolean(subjectParam)

  return (
    <form action="https://formspree.io/f/mrevboep" method="POST">
      <input type="hidden" name="_subject" value={subjectValue} />

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
        <label htmlFor="organisation" className="contact-form__label">
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
          <option value="transformation">Digital Transformation</option>
          <option value="delivery">Program Delivery</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      {isProductEnquiry ? (
        <div className="contact-form__group">
          <label htmlFor="organisation-name" className="contact-form__label">
            Organisation name
          </label>
          <input
            type="text"
            id="organisation-name"
            name="organisation_name"
            className="contact-form__input"
            placeholder="Your organisation name (optional)"
          />
        </div>
      ) : null}

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
  )
}
