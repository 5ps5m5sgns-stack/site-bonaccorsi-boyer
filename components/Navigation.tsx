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

  const textColor = scrolled ? 'text-charcoal' : 'text-cream'
  const mutedColor = scrolled ? 'text-stone' : 'text-cream/60'

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
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20 lg:h-24">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="w-px h-7 bg-gold transition-all duration-500 group-hover:h-9" />
            <div>
              <p className="label text-gold leading-none mb-0.5">Cabinet</p>
              <p className={`font-cormorant text-[1.1rem] font-medium tracking-widest leading-none transition-colors duration-300 ${textColor}`}>
                Bonaccorsi‑Boyer
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.sub && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`hover-gold label transition-colors duration-200 pb-0.5 ${mutedColor} hover:text-gold`}
                >
                  {item.label}
                </Link>

                <AnimatePresence>
                  {item.sub && activeDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-5 bg-cream border border-parchment shadow-xl min-w-52 overflow-hidden"
                    >
                      <div className="h-px bg-gold opacity-60" />
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-3 label text-stone hover:text-burgundy hover:bg-parchment transition-colors duration-150"
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

          {/* Right: phone + RDV */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+33664736845"
              className={`label transition-colors duration-200 ${mutedColor} hover:text-gold`}
            >
              +33 664 736 845
            </a>
            <Link href="/contact" className="btn-primary py-2.5 px-5 text-[0.6rem]">
              Rendez-vous
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-full h-px origin-center transition-all duration-400 ${
                  scrolled ? 'bg-charcoal' : 'bg-cream'
                } ${
                  mobileOpen && i === 0 ? 'rotate-45 translate-y-[10px]' :
                  mobileOpen && i === 1 ? 'opacity-0' :
                  mobileOpen && i === 2 ? '-rotate-45 -translate-y-[14px]' : ''
                }`}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col"
          >
            {/* Gold top bar */}
            <div className="h-px bg-gold mt-20" />

            <div className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto">
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
                    className="block font-cormorant text-4xl text-cream/80 hover:text-gold py-4 border-b border-stone/10 transition-colors duration-200 leading-none"
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
              className="px-8 pb-10 flex flex-col gap-4"
            >
              <a href="tel:+33664736845" className="label text-gold">+33 664 736 845</a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary self-start">
                Prendre rendez-vous
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
