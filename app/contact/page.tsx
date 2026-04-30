import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Rendez-vous — Cabinet Bonaccorsi-Boyer',
  description: "Contactez Maître Bonaccorsi-Boyer à Lyon. Rendez-vous en présentiel au 8 Rue du Plat (Lyon 2e), en visioconférence ou par téléphone. Disponible 7j/7 de 9h à 20h.",
}

const infos = [
  {
    label: 'Adresse',
    lines: ['8 Rue Du Plat', '69002 Lyon'],
    sub: 'Métro Bellecour (lignes A & D)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Téléphone',
    lines: ['+33 664 736 845'],
    sub: 'Du lundi au dimanche, 9h–20h',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    lines: ['bonaccorsi-boyer-avocat@outlook.com'],
    sub: 'Réponse sous 24h ouvrées',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Horaires',
    lines: ['Lun – Dim · 9h00 – 20h00'],
    sub: 'Y compris le week-end',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const consultations = [
  { mode: 'Présentiel', desc: 'Au cabinet, 8 Rue du Plat, Lyon 2e', icon: '🏛' },
  { mode: 'Visioconférence', desc: 'Via Zoom, Teams ou Meet', icon: '💻' },
  { mode: 'Téléphone', desc: 'Consultation téléphonique directe', icon: '📞' },
]

const access = [
  { label: 'Métro', detail: 'Bellecour — Lignes A & D' },
  { label: 'Parking', detail: 'République · Antonin Poncet · Indigo' },
  { label: 'Bus', detail: 'Lignes C14, S6, arrêt Bellecour' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-charcoal pt-40 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden
        />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="overflow-hidden mb-4">
            <p className="label text-gold animate-clip-reveal" style={{ animationDelay: '0.2s' }}>
              Prenez Contact
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="display-lg text-cream animate-clip-reveal" style={{ animationDelay: '0.35s' }}>
              Rencontrons-<br />
              <span className="text-gold">nous</span>
            </h1>
          </div>
          <p
            className="font-jost text-lg text-stone font-light max-w-md mt-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Premier entretien confidentiel. En présentiel au cœur de Lyon,
            en visioconférence ou par téléphone — selon vos préférences.
            Disponible 7 jours sur 7, de 9h à 20h.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold opacity-20" />
      </section>

      {/* ── MAIN GRID ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <p className="label text-gold mb-8">Coordonnées</p>
                <div className="space-y-8">
                  {infos.map((info) => (
                    <div key={info.label} className="flex gap-5">
                      <div className="text-gold shrink-0 mt-0.5">{info.icon}</div>
                      <div>
                        <p className="label text-stone/60 mb-1">{info.label}</p>
                        {info.lines.map((l) => (
                          <p key={l} className="font-cormorant text-xl text-charcoal">{l}</p>
                        ))}
                        <p className="label text-stone/50 mt-1">{info.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Consultation modes */}
              <AnimatedSection delay={0.15}>
                <p className="label text-gold mb-6">Modes de consultation</p>
                <div className="space-y-4">
                  {consultations.map((c) => (
                    <div key={c.mode} className="flex items-center gap-4 py-4 border-b border-stone/10">
                      <span className="text-xl" aria-hidden>{c.icon}</span>
                      <div>
                        <p className="font-cormorant text-lg text-charcoal">{c.mode}</p>
                        <p className="label text-stone/60">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Access */}
              <AnimatedSection delay={0.25}>
                <p className="label text-gold mb-6">Accès au cabinet</p>
                <div className="space-y-3">
                  {access.map((a) => (
                    <div key={a.label} className="flex gap-4">
                      <span className="label text-stone/50 w-16 shrink-0">{a.label}</span>
                      <span className="label text-charcoal-light">{a.detail}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <p className="label text-gold mb-4">Formulaire de contact</p>
                <h2 className="display-sm text-charcoal mb-2">Écrivez-nous</h2>
                <p className="font-jost text-lg text-stone font-light mb-10 leading-relaxed">
                  Toutes les informations que vous nous transmettez sont strictement
                  confidentielles et protégées par le secret professionnel de l'avocat.
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="bg-parchment py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="aspect-[21/6] bg-stone/10 flex items-center justify-center border border-stone/10 relative overflow-hidden">
              <div className="text-center">
                <p className="font-cormorant text-2xl text-charcoal mb-2">8 Rue Du Plat</p>
                <p className="label text-stone">69002 Lyon — Métro Bellecour</p>
                <a
                  href="https://maps.google.com/?q=8+Rue+Du+Plat+69002+Lyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 label text-gold hover:text-gold-light transition-colors duration-200 underline underline-offset-4"
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
              {/* Decorative cross */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
                <div className="relative w-4 h-4">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/40" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/40" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-gold rounded-full" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
