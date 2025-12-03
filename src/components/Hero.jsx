import React from 'react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Hero() {
  const { scrollToSection } = useScrollToSection();
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} relative overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
            Social Media Manager & Video Editor
          </p>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-50"
          >
            Hi, I&apos;m{' '}
            <span className="text-primary-400">Niyati Maheshwari</span>.
            <br />
            Let&apos;s reach high together and make your profile look more attractive.
          </h1>

          <p className="max-w-xl text-slate-300">
            Social Media Manager & Video Editor with 1 year of experience, currently studying
            BDS and Digital Marketing. I help brands and creators grow with engaging reels,
            consistent content, and aesthetic Instagram profiles.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft-lg hover:bg-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-primary-500 hover:text-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              See Portfolio
            </button>

            <div className="ml-2 text-xs text-slate-400">
              <p>Starting at ₹5,000 / month</p>
              <p className="text-[11px]">or priced per creative work</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-primary-500/40 via-accent/20 to-slate-500/10 blur-3xl" />
            <div className="relative w-56 h-72 rounded-3xl bg-slate-900/80 border border-slate-700 shadow-soft-lg flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-2xl font-bold text-slate-950">
                NM
              </div>
              <div className="text-center px-4">
                <p className="text-sm font-semibold">Social Media Manager</p>
                <p className="text-xs text-slate-400">Reels · Feed Design · Strategy</p>
              </div>
              <div className="flex gap-2 text-[11px] text-slate-300">
                <span className="rounded-full border border-slate-600 px-2 py-1">
                  Reels
                </span>
                <span className="rounded-full border border-slate-600 px-2 py-1">
                  Aesthetic Feed
                </span>
                <span className="rounded-full border border-slate-600 px-2 py-1">
                  Strategy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
