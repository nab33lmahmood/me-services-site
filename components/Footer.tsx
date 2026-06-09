import Link from 'next/link'
import ContentWrapper from './ContentWrapper'
import Wordmark from './Wordmark'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="footer__columns">
          <div>
            <Wordmark variant="footer" />
            <p className="footer__brand-tagline">Mindful Engagement</p>
            <p className="footer__brand-tagline">
              ABN 65 882 498 703. Melbourne, Australia.
            </p>
          </div>

          <div>
            <h2 className="footer__heading">Navigation</h2>
            <ul className="footer__nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Contact</h2>
            <ul className="footer__contact-list">
              <li>
                <a
                  href="mailto:nabeel@mindful-engagement.com"
                  className="footer__contact-link"
                >
                  nabeel@mindful-engagement.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mahmoodnabeel"
                  className="footer__contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mahmoodnabeel
                </a>
              </li>
              <li>
                <span className="footer__contact-muted">
                  Melbourne, VIC, Australia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer__divider" />

        <p className="footer__bottom">
          2026 Mindful Engagement. All rights reserved.
        </p>
      </ContentWrapper>
    </footer>
  )
}
