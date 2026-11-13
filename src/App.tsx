import { useEffect, useState } from 'react'
import { CategoryNav } from './components/CategoryNav'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Visit } from './components/Visit'
import { cafe } from './data/cafe'
import { menuCategories } from './data/menu'
import './App.css'

function App() {
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? '')

  useEffect(() => {
    const sections = menuCategories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="top" className="page">
      <Header />
      <Hero />
      <CategoryNav activeId={activeId} />
      <main>
        <Menu />
        <Visit />
      </main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {cafe.name}
        </p>
        <p>Edit prices anytime in <code>src/data/menu.ts</code></p>
      </footer>
    </div>
  )
}

export default App
