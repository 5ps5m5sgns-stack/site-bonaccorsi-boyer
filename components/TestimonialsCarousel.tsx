'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Testimonial = {
  quote: string
  author: string
  context: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Maître Bonaccorsi-Boyer a su me guider avec bienveillance dans une période particulièrement difficile. Son professionnalisme et son empathie sont remarquables. Grâce à elle, nous avons finalisé notre divorce en quelques mois, dans la sérénité.",
    author: "Sophie L.",
    context: "Divorce amiable",
  },
  {
    quote: "Grâce à son expertise en droit du patrimoine, nous avons pu protéger notre famille efficacement lors du règlement successoral. Une avocate techniquement irréprochable, à l'écoute et humainement remarquable.",
    author: "Jean-Pierre M.",
    context: "Droit patrimonial & succession",
  },
  {
    quote: "Réactive, disponible et à l'écoute. Elle a su défendre mes intérêts avec fermeté tout en privilégiant une solution amiable pour nos enfants. Je la recommande sans aucune réserve.",
    author: "Marie-Claire D.",
    context: "Garde d'enfants",
  },
  {
    quote: "Un cabinet d'exception. La maîtrise des régimes matrimoniaux de Me Bonaccorsi-Boyer nous a permis de traverser cette épreuve avec clarté. Sa disponibilité, même le soir et le week-end, est rare et précieuse.",
    author: "François & Isabelle R.",
    context: "Divorce et partage de biens",
  },
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1)
    setIndex(next)
  }, [index])

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % testimonials.length
      setDirection(1)
      setIndex(next)
    }, 6000)
    return () => clearInterval(timer)
  }, [index])

  const current = testimonials[index]

  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Quote mark */}
      <div className="font-cormorant text-8xl text-gold/30 leading-none select-none mb-2" aria-hidden>
        "
      </div>

      <div className="overflow-hidden min-h-40 flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="font-cormorant text-xl lg:text-2xl font-light text-cream/85 leading-relaxed italic mb-8">
              {current.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-gold" />
              <cite className="not-italic">
                <span className="label text-gold">{current.author}</span>
                <span className="label text-stone/60 ml-2">· {current.context}</span>
              </cite>
              <span className="w-6 h-px bg-gold" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Témoignage ${i + 1}`}
            className={`transition-all duration-300 ${
              i === index
                ? 'w-6 h-px bg-gold'
                : 'w-2 h-px bg-stone/40 hover:bg-stone'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
