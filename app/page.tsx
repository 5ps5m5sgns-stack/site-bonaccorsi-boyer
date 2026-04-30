import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection, { AnimatedStagger, StaggerItem } from '@/components/AnimatedSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'Maître Bonaccorsi-Boyer — Avocate Droit de la Famille Lyon',
  description: "Cabinet d'avocat spécialisé en droit de la famille à Lyon depuis 25 ans. Divorce amiable, contentieux, garde d'enfants, succession et patrimoine.",
}

const services = [
  {
    num: '01',
    title: 'Divorce Amiable',
    desc: 'Le divorce par consentement mutuel sans juge : rapide, économique et préservant la sérénité de chacun.',
    href: '/divorce-amiable',
  },
  {
    num: '02',
    title: 'Divorce Contentieux',
    desc: 'Défense de vos intérêts dans les situations conflictuelles, avec rigueur et humanité.',
    href: '/services#contentieux',
  },
  {
    num: '03',
    title: 'Enfants & Garde',
    desc: "Protection des droits de vos enfants : modalités de garde, pension alimentaire, autorité parentale.",
    href: '/services#enfants',
  },
  {
    num: '04',
    title: 'Patrimoine & Successions',
    desc: 'Liquidation du régime matrimonial, partage des biens, transmission et règlement successoral.',
    href: '/services#patrimoine',
  },
]

const divorceSteps = [
  { n: '01', title: 'Décision commune', desc: 'Les deux époux décident ensemble de divorcer par consentement mutuel.' },
  { n: '02', title: 'Choix des avocats', desc: 'Chaque époux mandate son propre avocat, indispensable à la validité de la procédure.' },
  { n: '03', title: 'Convention', desc: "L'ensemble des effets du divorce est négocié et formalisé dans une convention détaillée." },
  { n: '04', title: 'Signature', desc: 'Les époux et leurs avocats signent la convention après un délai de réflexion de 15 jours.' },
  { n: '05', title: 'Dépôt notarié', desc: "La convention est déposée chez un notaire, lui conférant force exécutoire." },
  { n: '06', title: 'Transcription', desc: "L'état civil est mis à jour : le divorce est officiellement prononcé." },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Cabinet Bonaccorsi-Boyer',
            description: "Avocate au Barreau de Lyon spécialisée en droit de la famille et du patrimoine depuis 25 ans.",
            url: 'https://www.bonaccorsi-boyer-avocat.fr',
            telephone: '+33664736845',
            email: 'bonaccorsi-boyer-avocat@outlook.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '8 Rue Du Plat',
              addressLocality: 'Lyon',
              postalCode: '69002',
              addressCountry: 'FR',
            },
            openingHours: 'Mo-Su 09:00-20:00',
          }),
        }}
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
          aria-hidden
        />

        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 40%, #2C221C 0%, #16110E 80%)' }}
          aria-hidden
        />

        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold opacity-30" aria-hidden />

        {/* Oversized ghost text */}
        <div
          className="absolute right-0 bottom-0 font-cormorant font-thin text-[28vw] leading-none text-cream/[0.02] pointer-events-none select-none translate-y-1/4"
          aria-hidden
        >
          25
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
          {/* Label */}
          <div className="overflow-hidden mb-8">
            <p
              className="label text-gold animate-clip-reveal"
              style={{ animationDelay: '0.2s' }}
            >
              Cabinet d'Avocat · Lyon 2e · Barreau de Lyon
            </p>
          </div>

          {/* Main heading — clip reveal */}
          <div className="overflow-hidden mb-1">
            <h1
              className="display-xl text-cream animate-clip-reveal"
              style={{ animationDelay: '0.35s' }}
            >
              Bonaccorsi
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <p
              className="display-xl text-gold animate-clip-reveal"
              style={{ animationDelay: '0.5s' }}
            >
              Boyer
            </p>
          </div>

          {/* Gold rule */}
          <div
            className="h-px bg-gold opacity-50 w-24 mb-10 animate-line-expand origin-left"
            style={{ animationDelay: '0.75s' }}
            aria-hidden
          />

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <p className="font-cormorant text-2xl lg:text-3xl font-light text-cream/70 mb-3">
              Maître Vanessa Bonaccorsi-Boyer
            </p>
            <p className="font-jost text-base font-light text-stone max-w-lg leading-relaxed">
              Avocate au Barreau de Lyon depuis plus de 25 ans, spécialisée en droit
              de la famille, du patrimoine et des successions. Une expertise technique
              au service d'une approche profondément humaine.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up flex flex-wrap gap-4 mt-10" style={{ animationDelay: '1.1s' }}>
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/le-cabinet" className="btn-outline text-cream border-cream/30 hover:bg-cream/5">
              Découvrir le cabinet
            </Link>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up"
            style={{ animationDelay: '1.5s' }}
            aria-hidden
          >
            <div className="w-px h-8 bg-gold/40 animate-scroll-bounce" />
            <p className="label text-stone/50">Défiler</p>
          </div>
        </div>
      </section>

      {/* ── CITATION ─────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="flex items-start gap-6 max-w-3xl mx-auto">
              <span className="w-px h-16 bg-gold shrink-0 mt-1" aria-hidden />
              <div>
                <blockquote className="font-cormorant text-3xl lg:text-4xl font-light text-charcoal italic leading-snug mb-6">
                  « La technique au service de vos intérêts — depuis 25 ans. »
                </blockquote>
                <p className="font-jost text-base text-stone font-light leading-relaxed">
                  Le cabinet Bonaccorsi-Boyer s'est forgé une réputation d'excellence dans
                  le droit de la famille et du patrimoine. Formée à la fois en droit notarial
                  et judiciaire, Maître Bonaccorsi-Boyer apporte une double expertise rare,
                  particulièrement précieuse lors des divorces impliquant un patrimoine complexe
                  ou une entreprise.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="label text-gold mb-4">01 — Expertises</p>
              <h2 className="display-md text-charcoal max-w-lg">
                Des solutions adaptées à chaque situation
              </h2>
            </div>
            <Link href="/services" className="label text-stone hover:text-burgundy transition-colors duration-200 hover-gold">
              Voir tous les services →
            </Link>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/10">
            {services.map((s) => (
              <StaggerItem key={s.num}>
                <Link
                  href={s.href}
                  className="group block bg-parchment hover:bg-cream p-8 lg:p-10 transition-colors duration-300 h-full"
                >
                  <span className="label text-gold/60 mb-6 block">{s.num}</span>
                  <h3 className="font-cormorant text-2xl text-charcoal mb-4 group-hover:text-burgundy transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="font-jost text-base text-stone font-light leading-relaxed mb-8">{s.desc}</p>
                  <span className="label text-gold/60 group-hover:text-gold transition-colors duration-200">
                    En savoir plus →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="bg-charcoal-mid py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="label text-gold mb-4">02 — En chiffres</p>
            <h2 className="display-md text-cream">Une expertise reconnue</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <StatsCounter />
          </AnimatedSection>
        </div>
      </section>

      {/* ── DIVORCE AMIABLE FEATURE ───────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Text side */}
            <div>
              <AnimatedSection>
                <p className="label text-gold mb-4">03 — Spécialité phare</p>
                <h2 className="display-md text-charcoal mb-6">
                  Le Divorce<br />Amiable
                </h2>
                <p className="font-jost text-base text-stone font-light leading-relaxed mb-10 max-w-sm">
                  Depuis la réforme de 2017, le divorce par consentement mutuel se conclut
                  sans passer devant un juge. Un processus plus rapide, moins coûteux,
                  et préservant la sérénité de toute la famille.
                </p>
                <Link href="/divorce-amiable" className="btn-primary">
                  Découvrir la procédure
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </AnimatedSection>
            </div>

            {/* Steps side */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-0">
                {divorceSteps.map((step, i) => (
                  <div
                    key={step.n}
                    className="flex gap-6 py-6 border-b border-stone/10 group"
                  >
                    <span className="label text-gold/50 shrink-0 w-8">{step.n}</span>
                    <div>
                      <p className="font-cormorant text-lg text-charcoal mb-1 group-hover:text-burgundy transition-colors duration-200">
                        {step.title}
                      </p>
                      <p className="font-jost text-base text-stone font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="label text-gold mb-4">04 — Témoignages</p>
            <h2 className="display-md text-cream">Ils nous font confiance</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <TestimonialsCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────── */}
      <section className="bg-parchment py-24 lg:py-32 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=900&q=80"
                  alt="Bibliothèque juridique du cabinet Bonaccorsi-Boyer"
                  width={600}
                  height={750}
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/5' }}
                />
                {/* Gold frame accent */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/40 pointer-events-none"
                  aria-hidden
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <p className="label text-gold mb-6">05 — Le Cabinet</p>
              <h2 className="display-md text-charcoal mb-6">
                Maître Vanessa<br />Bonaccorsi-Boyer
              </h2>
              <div className="h-px w-12 bg-gold mb-8" />
              <p className="font-jost text-base text-stone font-light leading-relaxed mb-6">
                Avocate au Barreau de Lyon depuis plus de 25 ans, Maître Bonaccorsi-Boyer
                a développé une expertise rare à la croisée du droit judiciaire et notarial.
                <br /><br />
                Reconnue comme « Professionnel Qualifié Expert auprès des Tribunaux »,
                elle maîtrise les techniques liquidatives les plus complexes, notamment
                dans les divorces impliquant des dirigeants d'entreprise.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                {['AFPDC', 'ANASPDFPP', 'ANAMJ'].map((m) => (
                  <span key={m} className="label text-stone/70 border border-stone/20 px-3 py-1.5">
                    {m}
                  </span>
                ))}
              </div>
              <Link href="/le-cabinet" className="btn-outline text-charcoal border-charcoal/20 hover:bg-charcoal hover:text-cream">
                Découvrir le cabinet →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-burgundy py-20 lg:py-28 relative overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <p className="label text-cream/60 mb-6">Consultations · Présentiel · Visio · Téléphone</p>
            <h2 className="display-lg text-cream mb-6">
              Parlons de votre situation
            </h2>
            <p className="font-jost text-base text-cream/70 font-light max-w-lg mx-auto mb-10 leading-relaxed">
              Maître Bonaccorsi-Boyer reçoit du lundi au dimanche, de 9h à 20h.
              Prenez rendez-vous pour un premier entretien confidentiel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary bg-cream text-charcoal hover:bg-parchment">
                Prendre rendez-vous
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+33664736845" className="btn-outline text-cream border-cream/40 hover:bg-cream/10">
                +33 664 736 845
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
