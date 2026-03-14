import { services } from '../../constants'

export default function Services() {
  return (
    <section id="servicos">
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  )
}
