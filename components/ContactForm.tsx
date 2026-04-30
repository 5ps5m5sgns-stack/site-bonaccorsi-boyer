'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 text-center gap-6">
        <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-2xl text-charcoal mb-2">Message envoyé</p>
          <p className="label text-stone">Maître Bonaccorsi-Boyer vous répondra dans les plus brefs délais.</p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="label text-gold hover:text-gold-light transition-colors duration-200 underline underline-offset-4"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  const inputClass = `w-full bg-transparent border-b border-stone/30 focus:border-gold outline-none py-3.5 text-base font-light text-charcoal placeholder-stone/40 transition-colors duration-200`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-stone block mb-2 tracking-wide">Nom & Prénom *</label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Marie Dupont" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-stone block mb-2 tracking-wide">Adresse e-mail *</label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="marie@exemple.fr" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-stone block mb-2 tracking-wide">Téléphone</label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+33 6 00 00 00 00" />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm font-medium text-stone block mb-2 tracking-wide">Objet *</label>
          <select id="subject" name="subject" required className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Sélectionner...</option>
            <option value="divorce-amiable">Divorce amiable</option>
            <option value="divorce-contentieux">Divorce contentieux</option>
            <option value="garde-enfants">Garde d'enfants</option>
            <option value="patrimoine">Droit du patrimoine</option>
            <option value="succession">Succession</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-stone block mb-2 tracking-wide">Votre situation *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Décrivez brièvement votre situation..."
        />
      </div>

      <p className="text-sm text-stone/50 font-light">
        Ces informations sont strictement confidentielles et protégées par le secret professionnel.
      </p>

      {status === 'error' && (
        <p className="text-sm text-burgundy font-medium">
          Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
