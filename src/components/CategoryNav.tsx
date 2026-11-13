import { menuCategories } from '../data/menu'

type Props = {
  activeId: string
}

export function CategoryNav({ activeId }: Props) {
  return (
    <nav className="category-nav" aria-label="Menu categories">
      <div className="category-nav__track">
        {menuCategories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={
              activeId === category.id
                ? 'category-nav__link is-active'
                : 'category-nav__link'
            }
          >
            {category.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
