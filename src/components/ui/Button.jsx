/**
 * Button Component
 * A versatile button component supporting multiple variants, sizes and states
 * Can function as <button>, <a> or custom element
 */

export default function Button({
  children,           // Button content
  variant = 'primary',     // 'primary' | 'outline' | 'ghost'
  size = 'md',             // 'sm' | 'md' | 'lg'
  disabled = false,        // Disables the button
  loading = false,         // Shows animated spinner
  href,                    // If set, renders as <a> instead of <button>
  as: As = 'button',       // Custom HTML tag (default: button)
  className = '',          // Additional custom classes
  ...props                 // Extra props (onClick, etc)
}) {

  // Base styles for all buttons - flexbox, smooth transition, and rounded borders
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-btn'

  // Defines visual variations of the button
  const variantStyles = {
    // Primary: orange gradient with bright shadow on hover
    primary:
      'bg-gradient-primary text-white hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed',
    // Outline: border only, fill on hover
    outline:
      'border-2 border-primary-from text-primary-from hover:bg-primary-from hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    // Ghost: no fill, subtle hover effect
    ghost:
      'text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed',
  }

  // Defines button sizes (padding and text size)
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',       // Small
    md: 'px-6 py-3 text-base',     // Medium (default)
    lg: 'px-8 py-4 text-lg',       // Large
  }

  // Combines all styles and adds loading effect if necessary
  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${loading ? 'opacity-70 pointer-events-none' : ''}
    ${className}
  `.trim()

  // Button content with animated spinner in loading state
  const content = (
    <>
      {/* Spinner SVG - loading icon that rotates continuously */}
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </>
  )

  // If 'href' was provided, render as a link instead of button
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    )
  }

  // Otherwise, render as a customizable element (default: <button>)
  return (
    <As className={combinedClassName} disabled={disabled} {...props}>
      {content}
    </As>
  )
}
