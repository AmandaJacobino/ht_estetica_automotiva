export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
}) {
  const baseStyles = 'inline-flex items-center gap-2 font-medium rounded-badge'

  const variantStyles = {
    primary: 'bg-gradient-primary text-white',
    secondary: 'bg-gray-800 text-white',
    outline: 'border border-primary-from text-primary-from',
  }

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
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
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  )
}
