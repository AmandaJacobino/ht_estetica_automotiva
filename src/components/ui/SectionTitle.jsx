export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div
      className={`
        ${center ? 'text-center' : ''}
        ${animationClass}
        ${className}
      `.trim()}
    >
      {eyebrow && (
        <div className="mb-4">
          <Badge variant="outline" size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}

      {title && (
        <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-muted bg-clip-text text-transparent mb-4">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-0 md:mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
