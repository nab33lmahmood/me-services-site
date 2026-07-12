'use client'

import { useState } from 'react'

type DirectorAvatarProps = {
  initials: string
  avatarImage?: { src: string; alt: string }
}

export default function DirectorAvatar({
  initials,
  avatarImage,
}: DirectorAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false)

  if (avatarImage && !imageFailed) {
    return (
      <img
        src={avatarImage.src}
        alt={avatarImage.alt}
        className="director-card__avatar"
        width={80}
        height={80}
        onError={() => setImageFailed(true)}
      />
    )
  }

  return <div className="director-card__avatar">{initials}</div>
}
