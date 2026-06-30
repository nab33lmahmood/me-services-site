'use client'

import { useState } from 'react'

type PrincipalCardProps = {
  name: string
  role: string
  avatarImage?: { src: string; alt: string }
  avatarInitials?: string
  accent?: 'navy'
  bio: string[]
  tags: string[]
}

export default function PrincipalCard({
  name,
  role,
  avatarImage,
  avatarInitials,
  accent,
  bio,
  tags,
}: PrincipalCardProps) {
  const [expanded, setExpanded] = useState(false)
  const accentClass = accent === 'navy' ? 'person-card--navy-accent' : ''

  return (
    <div
      className={`person-card ${accentClass}${expanded ? ' person-card--expanded' : ''}`}
    >
      {avatarImage ? (
        <img
          src={avatarImage.src}
          alt={avatarImage.alt}
          className="person-card__avatar"
        />
      ) : (
        <div className="person-card__avatar">{avatarInitials}</div>
      )}
      <p className="person-card__name">{name}</p>
      <p className="person-card__role">{role}</p>
      <hr className="person-card__divider" />
      <div className="person-card__bio-block">
        <div
          className={`person-card__bio-content${expanded ? '' : ' person-card__bio-content--clamped'}`}
        >
          {bio.map((paragraph, index) => (
            <p key={index} className="person-card__bio">
              {paragraph}
            </p>
          ))}
          {!expanded ? (
            <div className="person-card__bio-fade" aria-hidden="true" />
          ) : null}
        </div>
        <button
          type="button"
          className="person-card__bio-toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </div>
      <div className="skill-tags">
        {tags.map((tag) => (
          <span key={tag} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
