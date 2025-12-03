import React from 'react';

function PortfolioItem({ item }) {
  return (
    <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
        <p className="text-xs text-slate-300 mb-3 flex-1">{item.description}</p>
        <a
          href={item.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary-400 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full"
        >
          View on Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default PortfolioItem;
