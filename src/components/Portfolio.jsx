import React from 'react';
import { portfolioItems } from '../data/portfolioData';
import PortfolioItem from './PortfolioItem.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Portfolio() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} border-t border-slate-800`}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2
              id="portfolio-heading"
              className="text-2xl sm:text-3xl font-semibold text-white mb-2"
            >
              Portfolio Highlights
            </h2>
            <p className="text-slate-300 max-w-xl">
              A selection of reels, feed designs, and content pieces that helped clients
              show up consistently and attract the right audience.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
