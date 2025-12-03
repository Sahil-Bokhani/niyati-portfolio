import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollToSection } from '../hooks/useScrollToSection';

function Pricing() {
  const { ref, isRevealed } = useScrollReveal();
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id="pricing"
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} border-t border-slate-800`}
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2
          id="pricing-heading"
          className="text-2xl sm:text-3xl font-semibold text-white mb-4"
        >
          Simple, Flexible Pricing
        </h2>
        <p className="text-slate-300 mb-8">
          Whether you need ongoing support or just a few creatives, we&apos;ll find a package
          that fits your goals and budget.
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft-lg">
          <p className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-2">
            Monthly Social Media Management
          </p>
          <p className="text-3xl font-semibold mb-2">
            ₹5,000<span className="text-base font-normal text-slate-300"> / month</span>
          </p>
          <p className="text-xs text-slate-400 mb-6">
            or priced per creative work depending on your needs.
          </p>

          <ul className="space-y-2 text-sm text-slate-200 mb-6">
            <li>• Instagram content planning and scheduling</li>
            <li>• Reels editing and optimization</li>
            <li>• Basic performance insights and suggestions</li>
            <li>• Profile aesthetic and bio optimization</li>
          </ul>

          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Book a Call / Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
