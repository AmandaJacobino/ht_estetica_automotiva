const faqs = []

export default function FAQ() {
  return (
    <section id="faq">
      {faqs.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  )
}
