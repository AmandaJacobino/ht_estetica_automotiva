
/**
 * Badge Component
 * A reusable badge component for highlighting important information such as status or categories
 * Supports visual variants (primary, secondary, outline) and sizes (sm, md)
 * Can include an optional icon to reinforce the badge's meaning
 */
export default function Badge({
  children,      // Badge text content
  variant = 'primary',
  size = 'md',
  icon: Icon,           // Icon component (React Icon)
  className = '',       // Additional custom classes
}) {
  // Base badge styles - flexbox layout, smooth transitions, and rounded borders
  const baseStyles = 'inline-flex items-center gap-2 font-medium rounded-badge'

  // Defines visual variations of the badge
  const variantStyles = {
    // Primary: vibrant orange gradient with white text (default)
    primary: 'bg-gradient-primary text-white',
    // Secondary: dark gray background with white text
    secondary: 'bg-gray-800 text-white',
    // Outline: only borders with primary gradient, no fill
    outline: 'border border-primary-from text-primary-from',
  }

  // Defines badge sizes (padding and text size)
  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',      // Small
    md: 'px-4 py-2 text-sm',      // Medium (default)
  }

  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `.trim()}
    >
      {/* Renders icon if provided */}
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  )
}
