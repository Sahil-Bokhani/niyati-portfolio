import React from 'react';
import { testimonials } from '../data/testimonialsData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Testimonials() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} border-t border-slate-800`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl font-semibold text-white mb-6"
        >
          What Clients Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 h-full flex flex-col"
            >
              <blockquote className="text-sm text-slate-200 mb-4 grow">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-xs text-slate-400">
                <span className="font-semibold text-slate-200">{t.name}</span>
                <span className="text-slate-500"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
