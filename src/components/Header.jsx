import React, { useState } from 'react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Contact', id: 'contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3"
        aria-label="Main navigation"
        role="navigation"
      >
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-sm font-bold">
            NM
          </span>
          <span className="hidden sm:inline-block">Niyati Maheshwari</span>
        </button>

        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Hire Me
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-slate-300 hover:text-white py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-2 w-full rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
