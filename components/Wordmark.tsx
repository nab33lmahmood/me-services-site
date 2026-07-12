import Link from 'next/link'

type WordmarkProps = {
  variant?: 'nav' | 'footer'
}

export default function Wordmark({ variant = 'nav' }: WordmarkProps) {
  return (
    <Link href="/" className={`wordmark wordmark--${variant}`}>
      <span className="wordmark__line1">
        ME<span className="wordmark__period">.</span>
      </span>
      <span className="wordmark__line2">Mindful Engagement</span>
    </Link>
  )
}
