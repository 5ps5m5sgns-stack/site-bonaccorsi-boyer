import Link from 'next/link'

const links = {
  services: [
    { label: 'Divorce amiable', href: '/divorce-amiable' },
    { label: 'Divorce contentieux', href: '/services#contentieux' },
    { label: 'Enfants & Garde', href: '/services#enfants' },
    { label: 'Droit du patrimoine', href: '/services#patrimoine' },
    { label: 'Successions', href: '/services#successions' },
  ],
  cabinet: [
    { label: 'Le Cabinet', href: '/le-cabinet' },
    { label: 'Contact', href: '/contact' },
    { label: 'Prendre rendez-vous', href: '/contact' },
    { label: 'Mentions légales', href: '/mentions-legales' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Gold top border */}
      <div className="h-px bg-gold opacity-40" />

      {/* Decorative oversized text */}
      <div
        className="absolute bottom-0 right-0 font-cormorant text-[18vw] font-thin leading-none text-cream/[0.025] pointer-events-none select-none"
        aria-hidden
      >
        BB
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-px h-8 bg-gold" />
              <div>
                <p className="label text-gold mb-0.5">Cabinet</p>
                <p className="font-cormorant text-xl font-medium tracking-widest text-cream">Bonaccorsi‑Boyer</p>
              </div>
            </div>
            <p className="font-cormorant text-xl text-cream/70 font-light leading-relaxed mb-6 max-w-sm italic">
              « La technique au service de vos intérêts — depuis 25 ans. »
            </p>
            <div className="space-y-2">
              <p className="label text-stone">Avocate au Barreau de Lyon</p>
              <p className="label text-stone">Droit de la famille & du patrimoine</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="label text-gold mb-6">Expertises</p>
            <ul className="space-y-3">
              {links.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="label text-stone/80 hover:text-gold transition-colors duration-200 hover-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label text-gold mb-6">Coordonnées</p>
            <address className="not-italic space-y-3">
              <div>
                <p className="label text-stone/80">8 Rue Du Plat</p>
                <p className="label text-stone/80">69002 Lyon</p>
              </div>
              <a
                href="tel:+33664736845"
                className="block label text-stone/80 hover:text-gold transition-colors duration-200"
              >
                +33 664 736 845
              </a>
              <a
                href="mailto:bonaccorsi-boyer-avocat@outlook.com"
                className="block label text-stone/80 hover:text-gold transition-colors duration-200 break-all"
              >
                bonaccorsi-boyer-avocat@outlook.com
              </a>
              <p className="label text-stone/60 pt-1">Lun–Dim · 9h–20h</p>
            </address>

            <div className="mt-6 space-y-3">
              {links.cabinet.map((l) => (
                <div key={l.href}>
                  <Link href={l.href} className="label text-stone/80 hover:text-gold transition-colors duration-200 hover-gold">
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-stone/20 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="label text-stone/50">
            © {new Date().getFullYear()} Cabinet Bonaccorsi-Boyer · Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            <p className="label text-stone/40">Membre AFPDC · ANASPDFPP · ANAMJ</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
