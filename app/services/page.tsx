import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection, { AnimatedStagger, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Nos Services — Cabinet Bonaccorsi-Boyer',
  description: "Divorce amiable, contentieux, garde d'enfants, droit du patrimoine et successions à Lyon. Cabinet Bonaccorsi-Boyer, expert en droit de la famille depuis 25 ans.",
}

const sections = [
  {
    id: 'divorce',
    label: 'Divorce & Séparation',
    title: 'Mettre fin à l\'union conjugale',
    intro: "Qu'il soit amiable ou contentieux, le divorce est une étape majeure qui engage l'avenir de chacun. Maître Bonaccorsi-Boyer vous accompagne avec précision et humanité, quelle que soit la voie choisie.",
    services: [
      {
        title: 'Divorce amiable (consentement mutuel)',
        desc: "Depuis la réforme de 2017, le divorce par consentement mutuel est dé-judiciarisé. Sans passage devant le juge, la procédure est plus rapide et moins coûteuse. Chaque époux doit être représenté par son propre avocat.",
        href: '/divorce-amiable',
      },
      {
        title: 'Divorce pour faute',
        desc: "La violation grave ou renouvelée des devoirs du mariage peut constituer une cause de divorce pour faute. Cette procédure nécessite la preuve des manquements reprochés — une mission qui requiert expertise et rigueur.",
        href: '/services',
      },
      {
        title: 'Divorce pour acceptation du principe',
        desc: "Les époux s'accordent sur le principe du divorce mais non sur ses conséquences. Le juge statue alors sur les modalités : prestation compensatoire, garde, partage. Une procédure hybride qui requiert une stratégie adaptée.",
        href: '/services',
      },
      {
        title: "Divorce pour altération du lien conjugal",
        desc: "Après deux années de séparation de fait, l'un des époux peut demander le divorce en raison de l'altération définitive du lien conjugal. Une procédure unilatérale qui protège les droits du demandeur.",
        href: '/services',
      },
      {
        title: 'Séparation de corps',
        desc: "Alternative au divorce, la séparation de corps met fin à la vie commune sans rompre le lien matrimonial. Elle maintient certains droits successoraux et peut précéder un divorce ultérieur.",
        href: '/services',
      },
      {
        title: 'Dissolution de PACS',
        desc: "La dissolution du PACS peut être amiable (par déclaration conjointe) ou unilatérale. Elle engage des conséquences patrimoniales à analyser avec soin, notamment en présence de biens communs.",
        href: '/services',
      },
    ],
  },
  {
    id: 'enfants',
    label: 'Enfants & Garde',
    title: "Protéger l'intérêt des enfants",
    intro: "La séparation des parents ne doit pas se faire au détriment des enfants. Maître Bonaccorsi-Boyer défend leurs droits avec fermeté, en privilégiant toujours les solutions qui préservent leur équilibre.",
    services: [
      {
        title: 'Modalités de garde',
        desc: "Garde exclusive ou alternée, résidence habituelle, droits de visite et d'hébergement : chaque situation familiale mérite une solution adaptée à l'intérêt supérieur de l'enfant.",
        href: '/services',
      },
      {
        title: 'Pension alimentaire',
        desc: "Le calcul de la pension alimentaire repose sur les revenus de chaque parent et les besoins de l'enfant. Maître Bonaccorsi-Boyer défend un montant juste, équitable et pérenne.",
        href: '/services',
      },
      {
        title: 'Autorité parentale',
        desc: "L'autorité parentale conjointe est le principe. En cas de désaccord persistant sur les décisions importantes, le juge aux affaires familiales peut être saisi pour trancher.",
        href: '/services',
      },
      {
        title: 'Modification des dispositions',
        desc: "Un changement de situation (déménagement, nouvelle union, changement professionnel) peut justifier une révision des modalités de garde ou de la pension. Nous accompagnons ces procédures de révision.",
        href: '/services',
      },
      {
        title: 'Filiation & Reconnaissance',
        desc: "Questions de paternité, adoption simple ou plénière, action en recherche de paternité, désaveu de paternité : le droit de la filiation requiert une expertise pointue.",
        href: '/services',
      },
    ],
  },
  {
    id: 'patrimoine',
    label: 'Droit du patrimoine',
    title: 'Protéger et transmettre votre patrimoine',
    intro: "La liquidation du régime matrimonial est souvent l'aspect le plus complexe d'un divorce. Forte de sa double formation judiciaire et notariale, Maître Bonaccorsi-Boyer maîtrise les mécanismes les plus sophistiqués.",
    services: [
      {
        title: 'Liquidation du régime matrimonial',
        desc: "Le partage des biens à l'issue d'un divorce dépend du régime matrimonial choisi (communauté légale, séparation de biens, participation aux acquêts). Une analyse précise est indispensable pour protéger vos intérêts.",
        href: '/services',
      },
      {
        title: 'Prestation compensatoire',
        desc: "Destinée à compenser la disparité de niveau de vie créée par le divorce, la prestation compensatoire doit être calculée avec précision, en tenant compte de tous les éléments patrimoniaux et professionnels.",
        href: '/services',
      },
      {
        title: 'Sort du logement familial',
        desc: "Qui reste dans le logement familial ? Qui rembourse le crédit immobilier ? La gestion du bien commun ou du droit au bail est une question centrale qui requiert une stratégie claire dès le début.",
        href: '/services',
      },
      {
        title: "Partage des biens professionnels",
        desc: "Dirigeants d'entreprise, entrepreneurs, professions libérales : la valorisation et le partage des actifs professionnels sont une spécialité du cabinet, reconnue par les tribunaux lyonnais.",
        href: '/services',
      },
    ],
  },
  {
    id: 'successions',
    label: 'Successions',
    title: "Régler une succession sereinement",
    intro: "Le règlement d'une succession peut être source de conflits familiaux importants. Maître Bonaccorsi-Boyer intervient pour trouver les solutions les plus équitables, en privilégiant l'accord amiable quand c'est possible.",
    services: [
      {
        title: 'Règlement successoral',
        desc: "Inventaire, évaluation des actifs, calcul des droits de chacun : le règlement d'une succession requiert méthode et rigueur. Nous guidons les héritiers à chaque étape.",
        href: '/services',
      },
      {
        title: 'Contestation de testament',
        desc: "Un testament peut être contesté pour vice du consentement, dépassement de la quotité disponible, ou fraude. Nous défendons vos droits héréditaires avec fermeté.",
        href: '/services',
      },
      {
        title: 'Partage successoral',
        desc: "Le partage de la succession, qu'il soit amiable ou judiciaire, nécessite une évaluation précise des biens et une négociation équilibrée entre les héritiers.",
        href: '/services',
      },
      {
        title: 'Donation et transmission',
        desc: "Anticiper la transmission de son patrimoine permet d'optimiser la situation fiscale et de protéger ses proches. Donations simples, donations-partages, assurance-vie : nous vous conseillons.",
        href: '/services',
      },
    ],
  },
]

export default function ServicesPage() {
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
              Nos Expertises
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="display-lg text-cream animate-clip-reveal" style={{ animationDelay: '0.35s' }}>
              Services &<br />
              <span className="text-gold">Domaines d'intervention</span>
            </h1>
          </div>
          <p
            className="font-jost text-sm text-stone font-light max-w-xl mt-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Le cabinet Bonaccorsi-Boyer couvre l'ensemble des matières du droit de la famille,
            du patrimoine et des successions, avec une expertise reconnue depuis 25 ans
            au Barreau de Lyon.
          </p>

          {/* Quick links */}
          <div
            className="animate-fade-in-up flex flex-wrap gap-4 mt-10"
            style={{ animationDelay: '0.8s' }}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="label text-stone/70 border border-stone/20 px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold opacity-20" />
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {sections.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-24 lg:py-32 ${si % 2 === 0 ? 'bg-cream' : 'bg-parchment'}`}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <AnimatedSection className="mb-16">
              <p className="label text-gold mb-4">
                {String(si + 1).padStart(2, '0')} — {section.label}
              </p>
              <h2 className="display-md text-charcoal mb-6 max-w-xl">{section.title}</h2>
              <p className="font-jost text-sm text-stone font-light max-w-2xl leading-relaxed">
                {section.intro}
              </p>
            </AnimatedSection>

            <AnimatedStagger className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone/10">
              {section.services.map((srv) => (
                <StaggerItem key={srv.title}>
                  <div className={`p-10 h-full group ${si % 2 === 0 ? 'bg-cream hover:bg-parchment' : 'bg-parchment hover:bg-cream'} transition-colors duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className="w-px h-6 bg-gold mt-1 shrink-0 group-hover:h-full transition-all duration-500" />
                      <div>
                        <h3 className="font-cormorant text-xl text-charcoal mb-3 group-hover:text-burgundy transition-colors duration-200">
                          {srv.title}
                        </h3>
                        <p className="font-jost text-xs text-stone font-light leading-relaxed">{srv.desc}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-burgundy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="display-md text-cream mb-6">Une question sur votre situation ?</h2>
            <p className="font-jost text-sm text-cream/70 font-light max-w-md mx-auto mb-10">
              Maître Bonaccorsi-Boyer vous reçoit en consultation pour analyser votre dossier
              et vous orienter vers la meilleure stratégie.
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
