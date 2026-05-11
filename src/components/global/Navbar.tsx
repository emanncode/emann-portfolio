import Button from "../ui/button"

const link = [
  {
    key: '1',
    name: 'about',
    href: '#about'
  },
  {
    key: '2',
    name: 'skills',
    href: '#skills'
  },
  {
    key: '3',
    name: 'project',
    href: '#project'
  },
  {
    key: '4',
    name: 'experience',
    href: '#experience'
  }
]

export default function Navbar() {
  return (
    <div className="nav">
      <a href="/" className="nav__brand">EmannCode</a>
      {link.map((linkItem) => (
        <div key={linkItem.key} className="nav__links">
          <a href={linkItem.href}>
            {linkItem.name}
          </a>
        </div>
      ))
      }
      <Button className="nav__cta" text="contact" />
    </div >
  )
}