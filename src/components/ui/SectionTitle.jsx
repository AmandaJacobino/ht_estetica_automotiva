/**
 * SectionTitle Component
 * Component for section titles with support for "eyebrow" badge, main title and subtitle
 * Commonly used on pages to highlight new sections
 */
import Badge from './Badge'

export default function SectionTitle({
  eyebrow,           // Decorative badge/label above the title (e.g., "Our Services")
  title,             // Main title of the section
  subtitle,          // Subtitle or description
  center = false,    // If true, centers the text
  animated = true,   // If true, adds fade-up animation
  className = '',    // Additional custom classes
}) {
  // Applies fade-up animation if enabled
  const animationClass = animated ? 'animate-fade-up' : ''

  return (
    <div
      className={`
        ${center ? 'text-center' : ''}
        ${animationClass}
        ${className}
      `.trim()}
    >
      {/* Badge/Eyebrow - Small decorative label above the title */}
      {eyebrow && (
        <div className="mb-4">
          <Badge variant="outline" size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}

      {/* Main Title - With gradient from white to gray */}
      {title && (
        <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-muted bg-clip-text text-transparent mb-4">
          {title}
        </h2>
      )}

      {/* Subtitle - Descriptive text in medium size */}
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-0 md:mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
