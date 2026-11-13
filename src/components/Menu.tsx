import { formatPrice, menuCategories } from '../data/menu'

export function Menu() {
  return (
    <section id="menu" className="menu" aria-labelledby="menu-heading">
      <div className="section-head">
        <h2 id="menu-heading">Menu</h2>
        <p>Craft drinks, sticky rice, cookies, and rice meals — priced for everyday Binondo stops.</p>
      </div>

      {menuCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="menu-category"
          aria-labelledby={`${category.id}-title`}
        >
          <div className="menu-category__head">
            <h3 id={`${category.id}-title`}>{category.label}</h3>
            {category.intro ? <p>{category.intro}</p> : null}
          </div>
          <ul className="menu-list">
            {category.items.map((item) => (
              <li key={item.name} className="menu-item">
                <div className="menu-item__copy">
                  <span className="menu-item__name">{item.name}</span>
                  {item.description ? (
                    <span className="menu-item__desc">{item.description}</span>
                  ) : null}
                </div>
                <span className="menu-item__rule" aria-hidden="true" />
                <span className="menu-item__price">{formatPrice(item.price)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}
