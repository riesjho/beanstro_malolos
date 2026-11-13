import { cafe } from '../data/cafe'

export function Visit() {
  return (
    <section id="visit" className="visit" aria-labelledby="visit-heading">
      <div className="visit__panel">
        <div className="section-head section-head--light">
          <h2 id="visit-heading">Visit</h2>
          <p>{cafe.blurb}</p>
        </div>
        <dl className="visit__facts">
          <div>
            <dt>Where</dt>
            <dd>{cafe.address}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>{cafe.hours}</dd>
          </div>
          <div>
            <dt>Say hello</dt>
            <dd>
              <a href={cafe.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <span className="visit__sep" aria-hidden="true">
                ·
              </span>
              <a href={cafe.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
