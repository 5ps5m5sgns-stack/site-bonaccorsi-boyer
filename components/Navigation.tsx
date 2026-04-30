'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type SubItem = { label: string; href: string }
type NavItem = { label: string; href: string; sub?: SubItem[] }

const nav: NavItem[] = [
  {
    label: 'Divorce & Séparation',
    href: '/services',
    sub: [
      { label: 'Divorce amiable', href: '/divorce-amiable' },
      { label: 'Divorce contentieux', href: '/services#contentieux' },
      { label: 'Séparation de corps', href: '/services#separation' },
      { label: 'Dissolution PACS', href: '/services#pacs' },
    ],
  },
  { label: 'Enfants & Garde', href: '/services#enfants' },
  { label: 'Patrimoine', href: '/services#patrimoine' },
  { label: 'Successions', href: '/services#successions' },
  { label: 'Le Cabinet', href: '/le-cabinet' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinkClass = `
    relative text-[0.78rem] font-medium tracking-[0.14em] uppercase
    transition-colors duration-200 whitespace-nowrap
    after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
    after:bg-gold after:transition-all after:duration-300 hover:after:w-full
  `

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/96 backdrop-blur-md border-b border-stone-light/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* 3-column layout: logo fixe | nav centré | phone+cta */}
        <div className="max-w-screen-xl mx-auto px-6 xl:px-10 h-20 xl:h-24 grid grid-cols-[240px_1fr_240px] items-center gap-4">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="w-px h-7 bg-gold transition-all duration-500 group-hover:h-9 shrink-0" />
            <div className="leading-none">
              <p className="label text-gold mb-1" style={{ fontSize: '0.65rem' }}>Cabinet</p>
              <p className={`font-cormorant text-[1.05rem] font-medium tracking-[0.15em] leading-none transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-cream'
              }`}>
                Bonaccorsi‑Boyer
              </p>
            </div>
          </Link>

          {/* ── Desktop nav — centré ── */}
          <nav className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8">
            {nav.map((item) => (
              <div
                key={item.href}
                className="relative pb-1"
                onMouseEnter={() => item.sub && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`${navLinkClass} ${
                    scrolled
                      ? 'text-charcoal-light hover:text-burgundy'
                      : 'text-cream/75 hover:text-cream'
                  }`}
                >
                  {item.label}
                </Link>

                <AnimatePresence>
                  {item.sub && activeDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-cream border border-parchment shadow-xl min-w-56 overflow-hidden z-50"
                    >
                      <div className="h-0.5 bg-gold opacity-70" />
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-3.5 text-sm text-stone hover:text-burgundy hover:bg-parchment transition-colors duration-150 tracking-wide"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ── Right : téléphone + bouton ── */}
          <div className="hidden xl:flex items-center justify-end gap-5">
            <a
              href="tel:+33664736845"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap ${
                scrolled ? 'text-charcoal-light hover:text-gold' : 'text-cream/75 hover:text-cream'
              }`}
            >
              +33 664 736 845
            </a>
            <Link href="/contact" className="btn-primary py-3 px-5">
              Rendez-vous
            </Link>
          </div>

          {/* ── Hamburger (mobile / lg) ── */}
          <div className="xl:hidden flex items-center justify-end">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="w-8 h-6 flex flex-col justify-between"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-full h-px origin-center transition-all duration-300 ${
                    scrolled ? 'bg-charcoal' : 'bg-cream'
                  } ${
                    mobileOpen && i === 0 ? 'rotate-45 translate-y-[10px]' :
                    mobileOpen && i === 1 ? 'opacity-0 scale-x-0' :
                    mobileOpen && i === 2 ? '-rotate-45 -translate-y-[14px]' : ''
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Menu mobile fullscreen ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col"
          >
            <div className="h-px bg-gold mt-20 opacity-40" />

            <div className="flex-1 flex flex-col justify-center px-8 gap-0 overflow-y-auto">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-cormorant text-4xl text-cream/80 hover:text-gold py-5 border-b border-stone/10 transition-colors duration-200 leading-none"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-12 flex flex-col gap-5"
            >
              <a href="tel:+33664736845" className="text-base font-medium text-gold tracking-wide">
                +33 664 736 845
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary self-start"
              >
                Prendre rendez-vous
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
