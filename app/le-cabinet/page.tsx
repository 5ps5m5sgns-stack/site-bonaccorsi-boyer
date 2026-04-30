import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection, { AnimatedStagger, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Le Cabinet — Maître Vanessa Bonaccorsi-Boyer',
  description: "Découvrez le parcours et l'expertise de Maître Vanessa Bonaccorsi-Boyer, avocate au Barreau de Lyon depuis 25 ans, spécialisée en droit de la famille.",
}

const values = [
  {
    title: 'Écoute & Bienveillance',
    desc: 'Chaque situation familiale est unique. Maître Bonaccorsi-Boyer prend le temps de comprendre votre parcours, vos besoins et vos priorités avant toute démarche.',
  },
  {
    title: 'Excellence Technique',
    desc: "Formée en droit judiciaire et notarial, elle maîtrise les techniques liquidatives les plus complexes. Une expertise rare qui protège vos intérêts à chaque étape.",
  },
  {
    title: 'Disponibilité Réelle',
    desc: "Le cabinet reçoit du lundi au dimanche, de 9h à 20h, en présentiel, visioconférence ou par téléphone. Parce que les épreuves n'attendent pas les horaires de bureau.",
  },
]

const timeline = [
  { year: '1998', event: 'Admission au Barreau de Lyon' },
  { year: '2003', event: 'Spécialisation en droit de la famille et du patrimoine' },
  { year: '2010', event: 'Certification « Professionnel Qualifié Expert auprès des Tribunaux »' },
  { year: '2015', event: 'Adhésion à l\'AFPDC — Droit Collaboratif' },
  { year: '2017', event: 'Expertise reconnue dans les divorces de dirigeants d\'entreprise' },
  { year: '2024', event: '+25 ans d\'exercice, membre ANASPDFPP et ANAMJ' },
]

const memberships = [
  {
    abbr: 'AFPDC',
    full: 'Association Française des Praticiens du Droit Collaboratif',
    desc: 'Une approche de résolution amiable des conflits, préservant les relations familiales.',
  },
  {
    abbr: 'ANASPDFPP',
    full: 'Association Nationale des Avocats Spécialisés en Droit de la Famille',
    desc: 'Réseau d\'avocats de la famille engagés pour une pratique de qualité.',
  },
  {
    abbr: 'ANAMJ',
    full: 'Association Nationale des Avocats en Médiation et Justice',
    desc: 'Promotion de la médiation familiale comme alternative aux procédures judiciaires.',
  },
]

export default function CabinetPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-charcoal pt-40 pb-20 relative overflow-hidden">
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
              Le Cabinet
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="display-lg text-cream animate-clip-reveal" style={{ animationDelay: '0.35s' }}>
              Maître Vanessa<br />
              <span className="text-gold">Bonaccorsi-Boyer</span>
            </h1>
          </div>
          <p
            className="font-jost text-base text-stone font-light max-w-xl mt-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Avocate au Barreau de Lyon depuis plus de 25 ans, spécialisée en droit de la
            famille, du patrimoine et des successions. Une double formation judiciaire et
            notariale pour une expertise sans équivalent.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold opacity-20" />
      </section>

      {/* ── PORTRAIT + BIO ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Image */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
                  alt="Maître Vanessa Bonaccorsi-Boyer, avocate au Barreau de Lyon"
                  width={560}
                  height={700}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '4/5' }}
                  priority
                />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-gold/30" aria-hidden />
                <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm px-4 py-3">
                  <p className="label text-gold">+25 ans</p>
                  <p className="label text-cream/60">d'exercice</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <p className="label text-gold mb-6">Biographie</p>
              <div className="space-y-5 font-jost text-base text-charcoal-light font-light leading-relaxed">
                <p>
                  Maître Vanessa Bonaccorsi-Boyer est avocate au Barreau de Lyon depuis 1998.
                  Après une formation initiale croisant droit judiciaire et droit notarial,
                  elle a rapidement choisi de consacrer son exercice au droit de la famille,
                  du patrimoine et des successions.
                </p>
                <p>
                  Cette double culture — judiciaire et patrimoniale — lui confère une maîtrise
                  exceptionnelle des techniques liquidatives. Une compétence particulièrement
                  précieuse lors des divorces impliquant des entreprises, des SCI, des biens
                  immobiliers complexes ou des patrimoines importants.
                </p>
                <p>
                  Reconnue comme « Professionnel Qualifié Expert auprès des Tribunaux »,
                  elle intervient aussi bien dans des procédures amiables que dans des
                  contentieux familiaux délicats. Sa méthode : l'écoute d'abord, la
                  stratégie ensuite, l'excellence toujours.
                </p>
                <p>
                  Elle reçoit ses clients en présentiel au cœur de Lyon (8 Rue du Plat, 69002),
                  mais aussi en visioconférence ou par téléphone, du lundi au dimanche de 9h à 20h.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16">
            <p className="label text-gold mb-4">Valeurs</p>
            <h2 className="display-md text-charcoal max-w-xl">
              Une approche fondée sur trois engagements
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone/10">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="bg-parchment p-10 h-full">
                  <p className="label text-gold/50 mb-6">0{i + 1}</p>
                  <h3 className="font-cormorant text-2xl text-charcoal mb-4">{v.title}</h3>
                  <p className="font-jost text-base text-stone font-light leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16">
            <p className="label text-gold mb-4">Parcours</p>
            <h2 className="display-md text-cream">25 ans d'histoire</h2>
          </AnimatedSection>

          <div className="relative max-w-2xl">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-stone/20" />

            <AnimatedStagger className="space-y-10">
              {timeline.map((item) => (
                <StaggerItem key={item.year}>
                  <div className="flex gap-8 pl-8 relative">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-px h-full bg-transparent">
                      <div className="w-2 h-2 bg-gold rounded-full -translate-x-1/2 translate-y-0" />
                    </div>
                    <span className="label text-gold shrink-0 w-12">{item.year}</span>
                    <p className="font-cormorant text-xl text-cream/80">{item.event}</p>
                  </div>
                </StaggerItem>
              ))}
            </AnimatedStagger>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIPS ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16">
            <p className="label text-gold mb-4">Appartenances</p>
            <h2 className="display-md text-charcoal">Engagements professionnels</h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {memberships.map((m) => (
              <StaggerItem key={m.abbr}>
                <div className="border border-stone/15 p-8 h-full">
                  <p className="font-cormorant text-4xl text-gold font-light mb-3">{m.abbr}</p>
                  <p className="font-jost text-sm text-stone font-medium tracking-wide mb-4">{m.full}</p>
                  <p className="font-jost text-base text-stone/70 font-light leading-relaxed">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-burgundy py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="display-md text-cream mb-6">Rencontrons-nous</h2>
            <p className="font-jost text-base text-cream/70 font-light max-w-md mx-auto mb-10 leading-relaxed">
              Premier entretien confidentiel. En présentiel au cabinet, en visioconférence
              ou par téléphone — selon vos préférences.
            </p>
            <Link href="/contact" className="btn-primary bg-cream text-charcoal hover:bg-parchment">
              Prendre rendez-vous
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
