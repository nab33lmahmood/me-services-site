import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Technology Health Check Terms | Mindful Engagement',
  description:
    'Fee, payment, rescheduling, and refund terms for the Technology Health Check from Mindful Engagement Pty Ltd.',
}

export default function HealthCheckTermsPage() {
  return (
    <LegalPage title="Technology Health Check Terms">
      <p>
        These terms apply when you book a Technology Health Check with Mindful
        Engagement Pty Ltd (ACN 700 286 460, ABN 88 700 286 460).
      </p>

      <h2>1. What is included</h2>
      <p>
        A two-hour review of your current technology setup with a Mindful
        Engagement principal, held online or in person in Melbourne, followed
        by a written report within 2 business days. The report covers what is
        working, what is at risk, and what to fix first.
      </p>

      <h2>2. Fee and payment</h2>
      <p>
        The fee is $650 AUD plus GST, fixed. We send a tax invoice when you
        book. Payment is due before the session.
      </p>

      <h2>3. Credit toward a consulting engagement</h2>
      <p>
        If you engage Mindful Engagement for consulting within 90 days of
        receiving your report, we credit the full $650 (excluding GST) against
        that engagement.
      </p>

      <h2>4. Rescheduling and cancellation</h2>
      <ul>
        <li>
          You can reschedule once at no cost with at least 2 business days&apos;
          notice.
        </li>
        <li>
          If you cancel with at least 2 business days&apos; notice, we refund
          the fee in full.
        </li>
        <li>
          If you cancel with less notice, or do not attend, we may keep the
          fee. We will usually offer one rescheduled session instead.
        </li>
        <li>
          If we need to reschedule, you can choose a new time or a full refund.
        </li>
      </ul>

      <h2>5. Refunds after delivery</h2>
      <p>
        Once the session and report are delivered, we do not give refunds for a
        change of mind. If you believe the service was not delivered with due
        care and skill, contact us and we will work with you to fix it. Our
        services come with guarantees that cannot be excluded under the
        Australian Consumer Law.
      </p>

      <h2>6. Scope and responsibility</h2>
      <p>
        The Health Check gives recommendations based on the information and
        access you provide during the session. It is not an audit, a
        penetration test or a guarantee of security. Decisions about acting on
        the report are yours. To the extent the law allows, our total liability
        for the Health Check is limited to the fee you paid.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        We treat information you share during the Health Check as confidential
        and use it only to deliver the review and report. Our{' '}
        <Link href="/privacy">Privacy Policy</Link> explains how we handle
        personal information.
      </p>

      <h2>8. Governing law</h2>
      <p>These terms are governed by the laws of Victoria, Australia.</p>

      <h2>9. Contact</h2>
      <p>
        <a href="mailto:nabeel@mindful-engagement.com">
          nabeel@mindful-engagement.com
        </a>
      </p>
    </LegalPage>
  )
}
