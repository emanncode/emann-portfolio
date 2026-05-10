import Button from "../ui/button"

const link = [
  {
    name: 'about',
    href: '#about'
  },
  {
    name: 'skills',
    href: '#skills'
  },
  {
    name: 'project',
    href: '#project'
  },
  {
    name: 'experience',
    href: '#experience'
  }
]

export default function Navbar() {
  return (
    <div className="nav">
      <a href="/" className="nav__brand">EmannCode</a>
      {link.map((linkItem) => (
        <div className="nav__links">
          <a key={linkItem.name} href={linkItem.href}>
            {linkItem.name}
          </a>
        </div>
      ))
      }
      <Button className="nav__cta" text="contact" />
    </div >
  )
}