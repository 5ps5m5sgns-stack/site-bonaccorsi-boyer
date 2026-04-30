import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection, { AnimatedStagger, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Divorce Amiable à Lyon — Cabinet Bonaccorsi-Boyer',
  description: "Tout savoir sur le divorce amiable (par consentement mutuel) avec Maître Bonaccorsi-Boyer à Lyon. Procédure, avantages et accompagnement personnalisé depuis 25 ans.",
}

const steps = [
  {
    n: '01',
    title: 'La décision commune',
    detail: "Les deux époux décident ensemble de divorcer par consentement mutuel et s'accordent sur toutes les conséquences : partage des biens, garde des enfants, prestation compensatoire, logement familial.",
  },
  {
    n: '02',
    title: "Désignation de deux avocats",
    detail: "Chaque époux doit être représenté par son propre avocat — cette règle est impérative depuis la réforme de 2017. Le rôle de chaque avocat est de défendre les intérêts de son client tout en facilitant l'accord.",
  },
  {
    n: '03',
    title: 'Rédaction de la convention',
    detail: "Les deux avocats rédigent ensemble une convention de divorce détaillée qui règle l'ensemble des effets du divorce : autorité parentale, résidence habituelle, pension alimentaire, prestation compensatoire, partage des biens.",
  },
  {
    n: '04',
    title: 'Délai de réflexion',
    detail: "Une fois la convention transmise à chaque époux, la loi impose un délai de réflexion de 15 jours. Ce délai est incompressible et garantit le consentement libre et éclairé de chacun.",
  },
  {
    n: '05',
    title: "Signature de la convention",
    detail: "À l'issue du délai, les deux époux et leurs avocats signent la convention. Aucune des parties ne peut être contrainte — la procédure est entièrement fondée sur l'accord mutuel.",
  },
  {
    n: '06',
    title: 'Dépôt chez le notaire',
    detail: "La convention est déposée au rang des minutes d'un notaire, ce qui lui confère force exécutoire. Le divorce est alors officiellement prononcé et l'état civil est mis à jour.",
  },
]

const avantages = [
  {
    title: 'Plus rapide',
    desc: 'Entre 2 et 4 mois en moyenne, contre 18 à 36 mois pour un divorce contentieux.',
    icon: '⏱',
  },
  {
    title: 'Moins coûteux',
    desc: 'Des honoraires maîtrisés grâce à une procédure simplifiée et sans audience judiciaire.',
    icon: '€',
  },
  {
    title: 'Préserve la famille',
    desc: "Une procédure apaisée qui préserve les relations entre les époux, essentielle lorsqu'il y a des enfants.",
    icon: '❤',
  },
  {
    title: 'Confidentiel',
    desc: "Sans passage devant le juge, la convention reste confidentielle et ne fait pas l'objet d'une audience publique.",
    icon: '🔒',
  },
]

const faq = [
  {
    q: "Peut-on divorcer amiablement en présence d'enfants mineurs ?",
    a: "Oui, depuis 2017, le divorce amiable est accessible aux couples avec enfants mineurs. L'unique exception est l'hypothèse où l'enfant lui-même demande à être auditionné par le juge — dans ce cas, la procédure amiable n'est pas possible.",
  },
  {
    q: "Quels documents sont nécessaires pour commencer la procédure ?",
    a: "Il faut notamment : l'acte de mariage, les actes de naissance des époux et des enfants, les documents relatifs aux biens (titres de propriété, relevés bancaires, documents patrimoniaux) et les derniers avis d'imposition.",
  },
  {
    q: "Combien de temps dure un divorce amiable ?",
    a: "En général entre 2 et 4 mois à partir du moment où les deux avocats commencent à travailler. Le délai de réflexion de 15 jours est incompressible. La durée réelle dépend de la complexité du patrimoine et de la réactivité des parties.",
  },
  {
    q: "Est-ce possible si l'un des époux est à l'étranger ?",
    a: "Oui, la procédure est possible si l'un ou les deux époux résident à l'étranger, notamment grâce aux consultations en visioconférence. Le droit international privé peut toutefois introduire des spécificités à analyser au cas par cas.",
  },
  {
    q: "Peut-on changer d'avis pendant la procédure ?",
    a: "Oui. Jusqu'à la signature de la convention, chaque époux peut décider de ne pas poursuivre la procédure amiable. C'est justement l'une des garanties du consentement mutuel : personne ne peut être contraint.",
  },
]

export default function DivorceAmiablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Divorce Amiable — Cabinet Bonaccorsi-Boyer',
            description: 'Accompagnement dans la procédure de divorce par consentement mutuel sans juge à Lyon.',
            url: 'https://www.bonaccorsi-boyer-avocat.fr/divorce-amiable',
            telephone: '+33664736845',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '8 Rue Du Plat',
              addressLocality: 'Lyon',
              postalCode: '69002',
              addressCountry: 'FR',
            },
          }),
        }}
      />

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
              Nos expertises
            </p>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="display-lg text-cream animate-clip-reveal" style={{ animationDelay: '0.35s' }}>
              Le Divorce<br />
              <span className="text-gold">Amiable</span>
            </h1>
          </div>
          <p
            className="font-jost text-lg text-stone font-light max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Depuis la réforme de 2017, le divorce par consentement mutuel se déroule sans passage
            devant le juge. Une procédure plus rapide, moins coûteuse et préservant
            la sérénité de la famille — à condition d'être bien accompagné.
          </p>
          <div
            className="animate-fade-in-up flex flex-wrap gap-4 mt-10"
            style={{ animationDelay: '0.8s' }}
          >
            <Link href="/contact" className="btn-primary">
              Consulter Maître Bonaccorsi-Boyer
            </Link>
            <a href="tel:+33664736845" className="btn-outline text-cream border-cream/30 hover:bg-cream/5">
              +33 664 736 845
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold opacity-20" />
      </section>

      {/* ── QU'EST-CE QUE ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 max-w-3xl">
          <AnimatedSection>
            <p className="label text-gold mb-6">Définition</p>
            <h2 className="display-md text-charcoal mb-8">
              Qu'est-ce que le divorce amiable ?
            </h2>
            <div className="h-px w-12 bg-gold mb-8" />
            <div className="space-y-5 font-jost text-lg text-charcoal-light font-light leading-relaxed">
              <p>
                Le divorce amiable — ou divorce par consentement mutuel — est la procédure
                par laquelle deux époux s'accordent ensemble sur le principe du divorce
                et sur l'ensemble de ses conséquences, sans nécessiter l'intervention d'un juge.
              </p>
              <p>
                Depuis la loi du 18 novembre 2016 (réforme entrée en vigueur le 1er janvier 2017),
                cette procédure est entièrement dé-judiciarisée. Elle repose sur la signature
                d'une convention par les deux époux et leurs avocats respectifs, puis sur
                son dépôt chez un notaire.
              </p>
              <p>
                Cette réforme a considérablement simplifié la procédure, tout en renforçant
                les garanties pour chaque époux grâce à l'obligation d'un avocat par partie.
                Chez Bonaccorsi-Boyer, nous accompagnons nos clients à chaque étape pour
                que cette procédure se déroule dans les meilleures conditions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16">
            <p className="label text-gold mb-4">Pourquoi choisir cette voie ?</p>
            <h2 className="display-md text-charcoal">Les avantages du divorce amiable</h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/10">
            {avantages.map((a) => (
              <StaggerItem key={a.title}>
                <div className="bg-parchment p-10 h-full">
                  <p className="text-3xl mb-6" aria-hidden>{a.icon}</p>
                  <h3 className="font-cormorant text-xl text-charcoal mb-3">{a.title}</h3>
                  <p className="font-jost text-lg text-stone font-light leading-relaxed">{a.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16">
            <p className="label text-gold mb-4">La procédure</p>
            <h2 className="display-md text-cream">Les 6 étapes du divorce amiable</h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone/10">
            {steps.map((step) => (
              <StaggerItem key={step.n}>
                <div className="bg-charcoal-mid p-10 h-full group hover:bg-charcoal-light transition-colors duration-300">
                  <div className="flex items-start gap-6">
                    <span className="label text-gold/50 shrink-0 mt-1">{step.n}</span>
                    <div>
                      <h3 className="font-cormorant text-2xl text-cream mb-3 group-hover:text-gold transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="font-jost text-lg text-stone font-light leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16">
            <p className="label text-gold mb-4">Questions fréquentes</p>
            <h2 className="display-md text-charcoal">Vos interrogations, nos réponses</h2>
          </AnimatedSection>

          <AnimatedStagger className="max-w-3xl space-y-0 divide-y divide-stone/10">
            {faq.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-8">
                  <h3 className="font-cormorant text-xl text-charcoal mb-3">{item.q}</h3>
                  <p className="font-jost text-lg text-stone font-light leading-relaxed">{item.a}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-burgundy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="display-md text-cream mb-6">Votre situation est unique</h2>
            <p className="font-jost text-lg text-cream/70 font-light max-w-lg mx-auto mb-10 leading-relaxed">
              Avant de vous engager dans une procédure, rencontrez Maître Bonaccorsi-Boyer
              pour une analyse précise de votre situation et de vos droits.
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
