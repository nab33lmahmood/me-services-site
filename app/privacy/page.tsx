import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mindful Engagement',
  description:
    'How Mindful Engagement Pty Ltd handles personal information collected through mindful-engagement.com and in the course of consulting work.',
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Mindful Engagement Pty Ltd (ACN 700 286 460, ABN 88 700 286 460)
        (&quot;Mindful Engagement&quot;, &quot;we&quot;, &quot;us&quot;) respects
        your privacy. This policy explains how we handle personal information
        collected through mindful-engagement.com and in the course of our
        consulting work. We handle personal information in line with the
        Australian Privacy Principles in the Privacy Act 1988 (Cth).
      </p>

      <h2>1. What we collect</h2>
      <p>
        We collect only what we need to respond to you and deliver our
        services. This may include your name, organisation, role, email
        address, phone number, the content of your enquiry, and information you
        give us during an engagement or Technology Health Check.
      </p>

      <h2>2. How we collect it</h2>
      <p>
        We collect personal information when you contact us by email, enquiry
        form or LinkedIn, book a conversation or Technology Health Check, or
        work with us on an engagement. We collect it directly from you wherever
        possible.
      </p>

      <h2>3. Why we collect it</h2>
      <p>
        We use personal information to respond to enquiries, schedule and
        deliver services, send invoices, keep business records, and meet our
        legal obligations. We do not sell personal information, and we do not
        send marketing without your consent. You can opt out of any marketing
        at any time.
      </p>

      <h2>4. How we assess enquiries</h2>
      <p>
        We may use AI tools to help summarise and prioritise incoming enquiries
        so that we can respond quickly. A person at Mindful Engagement reviews
        every enquiry and makes every decision about how we respond.
      </p>

      <h2>5. Who we share it with</h2>
      <p>
        We share personal information only with service providers who help us
        run our business, and only as needed. These include our email and
        document platform (Microsoft 365), website hosting (Vercel), our
        enquiry form provider, our AI assistance provider (Anthropic) and our
        database provider. Some of these providers store or process information
        outside Australia, including in the United States. We take reasonable
        steps to make sure they protect personal information appropriately. We
        may also disclose information where the law requires it.
      </p>

      <h2>6. Our software products</h2>
      <p>
        When organisations use our software products, such as ME Kind Cloud, we
        handle the data they store in those products on their behalf, under our
        written agreement with that organisation. Those agreements include data
        processing terms covering where data is stored, how it is secured, and
        the safeguards that apply when it is transferred between countries.
        Questions about that data should go first to the organisation that
        collected it.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website uses only the cookies needed for it to work. We also use
        Vercel Analytics to understand how visitors use the site, in aggregate.
      </p>

      <h2>8. Security and retention</h2>
      <p>
        We take reasonable steps to protect personal information from misuse,
        loss and unauthorised access. We keep it only for as long as we need
        it for the purposes above or as the law requires, then delete or
        de-identify it.
      </p>

      <h2>9. Access, correction and complaints</h2>
      <p>
        You can ask to access or correct the personal information we hold about
        you, or raise a privacy concern, by emailing{' '}
        <a href="mailto:nabeel@mindful-engagement.com">nabeel@mindful-engagement.com</a>.
        We will respond within 30 days. If you are not satisfied with our
        response, you can contact the Office of the Australian Information
        Commissioner at <a href="https://www.oaic.gov.au">oaic.gov.au</a>.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy from time to time. The current version is
        always on this page.
      </p>
    </LegalPage>
  )
}
