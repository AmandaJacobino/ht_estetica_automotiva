import { navLinks } from '../../constants'

export default function Footer() {
  return (
    <footer>
      <nav>
        {navLinks.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </footer>
  )
}
