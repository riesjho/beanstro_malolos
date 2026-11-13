import { cafe } from '../data/cafe'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=80'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-brand">
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Fresh coffee being poured into a cup"
      />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__kicker">Binondo · Manila</p>
        <h1 id="hero-brand" className="hero__brand">
          {cafe.name}
        </h1>
        <p className="hero__lede">{cafe.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#menu">
            View menu
          </a>
          <a className="btn btn--ghost" href="#visit">
            Plan a visit
          </a>
        </div>
      </div>
    </section>
  )
}
