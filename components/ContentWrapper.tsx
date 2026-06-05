type ContentWrapperProps = {
  children: React.ReactNode
  className?: string
}

export default function ContentWrapper({
  children,
  className = '',
}: ContentWrapperProps) {
  return (
    <div className={`content-wrapper ${className}`.trim()}>{children}</div>
  )
}
