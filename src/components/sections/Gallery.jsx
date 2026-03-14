import { galleryImages } from '../../constants'

export default function Gallery() {
  return (
    <section id="galeria">
      {galleryImages.map(img => (
        <img key={img.id} src={img.src} alt={img.alt} />
      ))}
    </section>
  )
}
