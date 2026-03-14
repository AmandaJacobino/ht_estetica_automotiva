export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  // TODO: implementar variantes e estilos

  if (href) return <a href={href} className={className}>{children}</a>
  return <button onClick={onClick} className={className}>{children}</button>
}
