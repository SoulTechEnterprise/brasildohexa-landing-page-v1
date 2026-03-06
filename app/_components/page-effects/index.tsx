'use client'

import { useEffect, useState } from 'react'

const sections = ['hero', 'emotion', 'specs', 'history', 'testimonials', 'cart']

export function PageEffects() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    // Animate on scroll observer
    const animElements = main.querySelectorAll('[data-animate]')
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { root: main, threshold: 0.15 }
    )
    animElements.forEach((el) => animObserver.observe(el))

    // Section indicator observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id)
            if (index !== -1) setActive(index)
          }
        })
      },
      { root: main, threshold: 0.5 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    return () => {
      animObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const handleClick = (index: number) => {
    document.getElementById(sections[index])?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed right-2 md:right-4 lg:right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 md:gap-3 hidden sm:flex">
      {sections.map((name, i) => (
        <button
          key={name}
          onClick={() => handleClick(i)}
          className={`rounded-full transition-all duration-300 cursor-pointer ${
            active === i
              ? 'size-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'
              : 'size-2 bg-white/30 hover:bg-white/60'
          }`}
          aria-label={`Ir para seção ${name}`}
        />
      ))}
    </div>
  )
}
