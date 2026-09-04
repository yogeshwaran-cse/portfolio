import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <Link 
          to="/" 
          className="group flex items-center gap-3 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="w-4 h-4 bg-violentRed inline-block group-hover:scale-125 transition-transform duration-200"></span>
          <span className="font-extrabold text-lg md:text-xl tracking-tight text-[#0A0A0A] uppercase">
            Yogeshwaran K
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-neutral-400 font-semibold border-l border-neutral-300 pl-3">
            Dev &amp; Researcher
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
                  isActive
                    ? 'text-violentRed'
                    : 'text-[#0A0A0A] hover:text-violentRed'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-violentRed" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Direct CTA link */}
          <Link
            to="/about"
            className="flex items-center gap-1.5 px-4 py-2 border-2 border-black text-xs font-extrabold uppercase tracking-wider text-black hover:bg-[#0A0A0A] hover:text-white transition-all duration-200"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-violentRed" />
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-violentRed focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-black px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-2 text-base font-extrabold uppercase tracking-wider border-b border-neutral-200 ${
                    isActive ? 'text-violentRed border-violentRed' : 'text-black'
                  }`
                }
              >
                <span>{item.name}</span>
                <span className="text-xs text-neutral-400">0{navItems.indexOf(item) + 1}</span>
              </NavLink>
            ))}
            <Link
              to="/about"
              className="mt-4 flex items-center justify-center gap-2 py-3 bg-[#0A0A0A] text-white font-bold text-sm uppercase tracking-wider hover:bg-violentRed transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
