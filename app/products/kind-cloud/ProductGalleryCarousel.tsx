'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type GalleryItem = {
  filename: string
  featured: boolean
  org: string
  orgVariant: 'kindwell' | 'sabeel'
  headline: string
  caption: string
}

type ProductGalleryCarouselProps = {
  items: GalleryItem[]
}

export default function ProductGalleryCarousel({
  items,
}: ProductGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplayStopped, setAutoplayStopped] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const currentItem = items[currentIndex]

  const openLightbox = () => {
    setIsLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false)
  }, [])

  const goToSlide = useCallback(
    (index: number, fromManual = false) => {
      setCurrentIndex((index + items.length) % items.length)
      if (fromManual) {
        setAutoplayStopped(true)
      }
    },
    [items.length],
  )

  const goNext = useCallback(
    (fromManual = false) => {
      setCurrentIndex((index) => (index + 1) % items.length)
      if (fromManual) {
        setAutoplayStopped(true)
      }
    },
    [items.length],
  )

  const goPrev = useCallback(
    (fromManual = false) => {
      setCurrentIndex((index) => (index - 1 + items.length) % items.length)
      if (fromManual) {
        setAutoplayStopped(true)
      }
    },
    [items.length],
  )

  useEffect(() => {
    if (autoplayStopped || isHovering || isLightboxOpen) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % items.length)
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [autoplayStopped, isHovering, isLightboxOpen, items.length])

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleLightboxKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeLightbox()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev(false)
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext(false)
      }
    }

    document.addEventListener('keydown', handleLightboxKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleLightboxKeyDown)
    }
  }, [isLightboxOpen, closeLightbox, goPrev, goNext])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isLightboxOpen) {
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev(true)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext(true)
    }
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return
    }

    const touchEndX = event.changedTouches[0]?.clientX
    if (touchEndX === undefined) {
      touchStartX.current = null
      return
    }

    const diff = touchEndX - touchStartX.current
    if (Math.abs(diff) >= 50) {
      if (diff > 0) {
        goPrev(true)
      } else {
        goNext(true)
      }
    }

    touchStartX.current = null
  }

  return (
    <div
      className="product-gallery__carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Product screenshots"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="product-gallery__viewport">
        <button
          type="button"
          className="product-gallery__arrow product-gallery__arrow--prev"
          aria-label="Previous screenshot"
          onClick={() => goPrev(true)}
        >
          ‹
        </button>

        <div className="product-gallery__slides">
          {items.map((item, index) => (
            <article
              key={item.filename}
              className={`product-gallery__card product-gallery__slide${index === currentIndex ? ' product-gallery__slide--active' : ''}`}
              aria-hidden={index !== currentIndex}
            >
              <span
                className={`product-gallery__org-tag product-gallery__org-tag--${item.orgVariant}`}
              >
                {item.org}
              </span>
              <button
                type="button"
                className="product-gallery__image-trigger"
                onClick={openLightbox}
                aria-label={`View larger: ${item.headline}`}
              >
                <img
                  src={`/screenshots/kind-cloud/${item.filename}`}
                  alt={item.headline}
                  className="product-gallery__image"
                />
              </button>
              <div className="product-gallery__caption">
                <h3 className="product-gallery__caption-title">
                  {item.headline}
                </h3>
                <p className="product-gallery__caption-body">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="product-gallery__arrow product-gallery__arrow--next"
          aria-label="Next screenshot"
          onClick={() => goNext(true)}
        >
          ›
        </button>
      </div>

      <div className="product-gallery__dots" role="tablist" aria-label="Screenshot slides">
        {items.map((item, index) => (
          <button
            key={item.filename}
            type="button"
            role="tab"
            className={`product-gallery__dot${index === currentIndex ? ' product-gallery__dot--active' : ''}`}
            aria-label={`Go to screenshot ${index + 1}: ${item.headline}`}
            aria-selected={index === currentIndex}
            onClick={() => goToSlide(index, true)}
          />
        ))}
      </div>

      {isLightboxOpen && currentItem ? (
        <div
          className="product-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.headline}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="product-gallery-lightbox__close"
            aria-label="Close enlarged screenshot"
            onClick={(event) => {
              event.stopPropagation()
              closeLightbox()
            }}
          >
            X
          </button>

          <div
            className="product-gallery-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="product-gallery-lightbox__image-wrap">
              <button
                type="button"
                className="product-gallery__arrow product-gallery-lightbox__arrow product-gallery-lightbox__arrow--prev"
                aria-label="Previous screenshot"
                onClick={() => goPrev(false)}
              >
                ‹
              </button>
              <img
                src={`/screenshots/kind-cloud/${currentItem.filename}`}
                alt={currentItem.headline}
                className="product-gallery-lightbox__image"
              />
              <button
                type="button"
                className="product-gallery__arrow product-gallery-lightbox__arrow product-gallery-lightbox__arrow--next"
                aria-label="Next screenshot"
                onClick={() => goNext(false)}
              >
                ›
              </button>
            </div>
            <div className="product-gallery-lightbox__caption">
              <span
                className={`product-gallery__org-tag product-gallery__org-tag--${currentItem.orgVariant}`}
              >
                {currentItem.org}
              </span>
              <p className="product-gallery-lightbox__headline">
                {currentItem.headline}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
