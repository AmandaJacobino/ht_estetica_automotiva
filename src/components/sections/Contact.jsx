export default function Contact() {
  return (
    <section id="contato">
      <form>
        <input type="text" name="name" placeholder="Nome" />
        <input type="tel" name="phone" placeholder="Telefone" />
        <textarea name="message" placeholder="Mensagem" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
