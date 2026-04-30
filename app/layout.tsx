import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-var',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Maître Bonaccorsi-Boyer — Avocate Droit de la Famille Lyon',
    template: '%s | Cabinet Bonaccorsi-Boyer',
  },
  description: "Cabinet d'avocat spécialisé en droit de la famille à Lyon depuis 25 ans. Divorce amiable, contentieux, garde d'enfants, succession et patrimoine. Me Vanessa Bonaccorsi-Boyer.",
  keywords: ['avocat droit famille Lyon', 'divorce Lyon', 'divorce amiable Lyon', 'garde enfants Lyon', 'succession Lyon', 'Bonaccorsi-Boyer'],
  authors: [{ name: 'Cabinet Bonaccorsi-Boyer' }],
  metadataBase: new URL('https://www.bonaccorsi-boyer-avocat.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.bonaccorsi-boyer-avocat.fr',
    siteName: 'Cabinet Bonaccorsi-Boyer',
    title: 'Maître Bonaccorsi-Boyer — Avocate au Barreau de Lyon',
    description: "Avocate spécialisée en droit de la famille depuis 25 ans. Divorce, garde d'enfants, patrimoine et successions à Lyon.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
