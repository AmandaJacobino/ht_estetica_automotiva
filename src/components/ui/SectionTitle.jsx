export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
