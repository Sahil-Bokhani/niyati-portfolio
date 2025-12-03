import React from 'react';
import { services } from '../data/servicesData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Services() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} border-t border-slate-800`}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl font-semibold text-white mb-2"
            >
              Services
            </h2>
            <p className="text-slate-300 max-w-xl">
              Done-for-you social media services that keep your feed consistent, your reels
              engaging, and your profile on-brand.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-lg">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-sm text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
