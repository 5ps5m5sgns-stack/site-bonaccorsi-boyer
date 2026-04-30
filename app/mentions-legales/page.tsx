import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Cabinet Bonaccorsi-Boyer',
  description: 'Mentions légales et politique de confidentialité du Cabinet Bonaccorsi-Boyer, avocate au Barreau de Lyon.',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-cream min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <p className="label text-gold mb-4">Information légale</p>
          <h1 className="display-md text-charcoal mb-4">Mentions légales</h1>
          <div className="h-px w-12 bg-gold" />
        </div>

        <div className="space-y-12 font-jost text-sm text-charcoal-light font-light leading-relaxed">
          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Éditeur du site</h2>
            <p>Le présent site est édité par :</p>
            <address className="not-italic mt-3 space-y-1">
              <p><strong className="font-medium">Maître Vanessa Bonaccorsi-Boyer</strong></p>
              <p>Avocate au Barreau de Lyon</p>
              <p>8 Rue Du Plat, 69002 Lyon</p>
              <p>Tél. : +33 664 736 845</p>
              <p>E-mail : bonaccorsi-boyer-avocat@outlook.com</p>
            </address>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Réglementation professionnelle</h2>
            <p>
              Maître Vanessa Bonaccorsi-Boyer est avocate inscrite au Barreau de Lyon.
              Elle est soumise aux règles déontologiques de la profession d'avocat définies
              par le Règlement Intérieur National (RIN) du Conseil National des Barreaux
              et par le règlement intérieur du Barreau de Lyon.
            </p>
            <p className="mt-3">
              Titre professionnel : Avocat au Barreau de Lyon (France).<br />
              Règles professionnelles applicables disponibles sur : <a href="https://www.cnb.avocat.fr" className="text-gold hover:text-gold-light underline underline-offset-2" target="_blank" rel="noopener noreferrer">www.cnb.avocat.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701,
              San Francisco, California 94104, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, structure) est protégé
              par le droit de la propriété intellectuelle. Toute reproduction, représentation
              ou diffusion, en tout ou partie, sans autorisation expresse est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Politique de confidentialité</h2>
            <p>
              Les données personnelles collectées via le formulaire de contact (nom, e-mail,
              téléphone, message) sont utilisées exclusivement pour répondre à vos demandes.
              Elles ne sont ni cédées, ni vendues à des tiers.
            </p>
            <p className="mt-3">
              Conformément au RGPD (Règlement Général sur la Protection des Données) et
              à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données. Pour exercer ces droits,
              contactez-nous à : bonaccorsi-boyer-avocat@outlook.com
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Secret professionnel</h2>
            <p>
              Toutes les informations que vous nous communiquez dans le cadre d'une
              consultation — quelle que soit la forme (présentiel, téléphone, visioconférence,
              e-mail ou formulaire) — sont couvertes par le secret professionnel de l'avocat,
              conformément à l'article 66-5 de la loi du 31 décembre 1971.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de traçage ou de publicité.
              Des cookies techniques peuvent être utilisés pour le bon fonctionnement du site.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-charcoal mb-4">Médiation de la consommation</h2>
            <p>
              En cas de litige non résolu, vous pouvez recourir à la médiation de la
              consommation. Le Médiateur du Conseil National des Barreaux peut être contacté via :
              <a href="https://www.mediateur-consommation-avocat.fr" className="text-gold hover:text-gold-light underline underline-offset-2 ml-1" target="_blank" rel="noopener noreferrer">
                www.mediateur-consommation-avocat.fr
              </a>
            </p>
          </section>

          <p className="label text-stone/50 pt-4 border-t border-stone/10">
            Dernière mise à jour : Avril 2026
          </p>
        </div>
      </div>
    </div>
  )
}
