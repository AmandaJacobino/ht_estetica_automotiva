/**
 * ServiceCard Component
 * A versatile card component for displaying services, products or featured content
 * Includes icon, title, description, badge and call-to-action link
 */
export default function ServiceCard({
  icon: Icon,              // Icon component (React Icon)
  title,                   // Service/product title
  description,             // Brief description
  badge,                   // Badge text (e.g., "Popular", "New")
  href,                    // URL for the "Learn more" link
  className = '',          // Additional custom classes
  highlighted = false,     // If true, adds a highlight ring
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
      {/* Icon Container - Box with gradient for the icon */}
      {Icon && (
        <div className="mb-6 inline-flex p-4 rounded-icon bg-gradient-to-br from-primary-from/20 to-primary-to/10">
          <Icon className="w-8 h-8 text-primary-from" />
        </div>
      )}

      {/* Badge - Colorful label to highlight service status */}
      {badge && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-from bg-primary-from/10 rounded-badge">
            {badge}
          </span>
        </div>
      )}

      {/* Card Title - Main heading for the card */}
      {title && (
        <h3 className="font-display text-2xl font-bold text-white mb-3">
          {title}
        </h3>
      )}

      {/* Description - Descriptive text about the service */}
      {description && (
        <p className="text-muted mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {/* CTA Link - "Learn more" button with animated arrow */}
      {href && (
        <a
          href={href}
          className="inline-flex items-center text-primary-from font-semibold hover:gap-2 transition-all duration-200"
        >
          Learn more
          <span className="ml-2">→</span>
        </a>
      )}
    </div>
  )

  return cardContent
}