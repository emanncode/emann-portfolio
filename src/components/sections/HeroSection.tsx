import Button from "../ui/button";

const stats = [
  {
    number: 3,
    text: 'years exp.'
  }
]

export default function HeroSection() {
  return (
    <div className="hero__inner">
      <div>
        <div className="hero__status">
          <div className="hero__status-dot"></div>
          <p>Available for work</p>
        </div>
        <div className="hero__heading">
          Ifeoluwa
          <div className="italic-word">
            Olajubaje
          </div>
        </div>
        <div className="hero__sub">
          (Web & Mobile)Frontend & PHP Developer
          <div className="blink-cursor"></div>
        </div>
        <div className="hero__desc">
          <p>
            I build fast, thoughtful digital products — from pixel-perfect
            interfaces to robust backend systems. Based anywhere, working
            everywhere.
          </p>
        </div>
        <div className="hero-actions">
          <Button className="" text="View my work" />
          <Button className="" text="Let's talk" />
        </div>
        <div className="">
          {stats.map((statsItem) => (
            <div key={statsItem.number} className="hero__stats">
              <div className="hero__stat-number">{statsItem.number}+</div>
              <div className="hero__stat-label">{statsItem.text}+</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}