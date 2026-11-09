import type { ReactNode } from 'react'
import ContentWrapper from './ContentWrapper'
import Footer from './Footer'
import Nav from './Nav'

type LegalPageProps = {
  title: string
  children: ReactNode
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <ContentWrapper>
          <article className="legal-page__article">
            <h1 className="legal-page__title">{title}</h1>
            <p className="legal-page__updated">Last updated: 9 November 2026</p>
            <hr className="legal-page__rule" />
            {children}
          </article>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  )
}
