export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  href,
  as: As = 'button',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-btn'

  const variantStyles = {
    primary:
      'bg-gradient-primary text-white hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed',
    outline:
      'border-2 border-primary-from text-primary-from hover:bg-primary-from hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    ghost:
      'text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${loading ? 'opacity-70 pointer-events-none' : ''}
    ${className}
  `.trim()

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    )
  }

  return (
    <As className={combinedClassName} disabled={disabled} {...props}>
      {content}
    </As>
  )
}
