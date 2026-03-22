export default function ServiceCard({
  icon: Icon,
  title,
  description,
  badge,
  href,
  className = '',
  highlighted = false,
}) {
  const cardContent = (
    <div
      className={`
        card-gradient-border p-8 rounded-card bg-gradient-card
        backdrop-blur-sm
        hover:shadow-glow-primary-sm transition-all duration-300
        ${highlighted ? 'ring-2 ring-primary-from' : ''}
        ${className}
      `.trim()}
    >
      {/* Icon Container */}
      {Icon && (
        <div className="mb-6 inline-flex p-4 rounded-icon bg-gradient-to-br from-primary-from/20 to-primary-to/10">
          <Icon className="w-8 h-8 text-primary-from" />
        </div>
      )}

      {/* Badge */}
      {badge && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-from bg-primary-from/10 rounded-badge">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="font-display text-2xl font-bold text-white mb-3">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-muted mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {/* CTA Link */}
      {href && (
        <a
          href={href}
          className="inline-flex items-center text-primary-from font-semibold hover:gap-2 transition-all duration-200"
        >
          Saiba mais
          <span className="ml-2">→</span>
        </a>
      )}
    </div>
  )

  return cardContent
}