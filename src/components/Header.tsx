import { cafe } from '../data/cafe'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top">
        <span className="brand-mark__icon" aria-hidden="true" />
        <span className="brand-mark__text">{cafe.name}</span>
      </a>
      <nav className="site-header__nav" aria-label="Primary">
        <a href="#menu">Menu</a>
        <a href="#visit">Visit</a>
        <a
          className="site-header__social"
          href={cafe.facebook}
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </nav>
    </header>
  )
}
