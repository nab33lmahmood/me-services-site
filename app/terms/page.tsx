import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use | Mindful Engagement',
  description:
    'Terms that apply to your use of mindful-engagement.com, operated by Mindful Engagement Pty Ltd.',
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        These terms apply to your use of mindful-engagement.com, operated by
        Mindful Engagement Pty Ltd (ACN 700 286 460, ABN 88 700 286 460). By
        using this website, you agree to them.
      </p>

      <h2>1. General information only</h2>
      <p>
        Content on this website is general information about Mindful Engagement
        and its services. It is not professional advice for your circumstances.
        Advice is given only under a written engagement.
      </p>

      <h2>2. Our services</h2>
      <p>
        Consulting services are provided under a separate written agreement or,
        for the Technology Health Check, under our{' '}
        <Link href="/health-check-terms">Health Check Terms</Link>. If those
        terms conflict with these, those terms apply.
      </p>

      <h2>3. Intellectual property</h2>
      <p>
        The content, design, logos and the ME and Mindful Engagement names on
        this website belong to Mindful Engagement Pty Ltd or its licensors. You
        may view and share pages for personal or internal business use. You may
        not copy, republish or use them commercially without our written
        permission.
      </p>

      <h2>4. Acceptable use</h2>
      <p>
        Do not use this website unlawfully, attempt to gain unauthorised access
        to it, or interfere with how it works.
      </p>

      <h2>5. Third-party links</h2>
      <p>
        This website may link to other sites, such as LinkedIn. We are not
        responsible for their content or privacy practices.
      </p>

      <h2>6. Liability</h2>
      <p>
        We aim to keep this website accurate and available, but we do not
        guarantee that it is complete, current or free of errors. To the extent
        the law allows, we are not liable for any loss arising from your use of
        this website. Nothing in these terms excludes rights you have under the
        Australian Consumer Law that cannot be excluded.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle
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
