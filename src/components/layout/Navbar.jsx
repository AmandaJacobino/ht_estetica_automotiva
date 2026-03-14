import { navLinks } from '../../constants'

export default function Navbar() {
  return (
    <header>
      <nav>
        {navLinks.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  )
}
