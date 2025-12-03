import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>© {year} Niyati Maheshwari. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:niyatimaheshwari28@gmail.com"
            className="hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full px-2 py-1"
          >
            Email
          </a>
          <a
            href="#hero"
            className="hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full px-2 py-1"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
