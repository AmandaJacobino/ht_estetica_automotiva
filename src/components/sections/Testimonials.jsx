import { testimonials } from '../../constants'

export default function Testimonials() {
  return (
    <section id="depoimentos">
      {testimonials.map(t => (
        <div key={t.id}>
          <p>{t.text}</p>
          <span>{t.name}</span>
        </div>
      ))}
    </section>
  )
}
