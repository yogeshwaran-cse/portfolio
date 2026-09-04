import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub Profile', href: '#', icon: Github, isExternal: false },
    { name: 'LinkedIn Profile', href: '#', icon: Linkedin, isExternal: false },
    { name: 'ka.yogeshwaran@gmail.com', href: 'mailto:ka.yogeshwaran@gmail.com', icon: Mail, isExternal: true },
    { name: '+91 6382437292', href: 'tel:+916382437292', icon: Phone, isExternal: true },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white border-t-4 border-violentRed">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Identity & Ethos */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-violentRed inline-block"></span>
              <span className="font-extrabold text-xl tracking-tight uppercase">Yogeshwaran K</span>
            </div>
            <p className="text-neutral-400 text-sm max-w-lg font-light leading-relaxed">
              Computer Science postgraduate specializing in deep learning, computer vision, and quantum machine learning. Actively engineering Agentic AI and Retrieval-Augmented Generation (RAG) systems.
            </p>
            <div className="space-y-1.5 pt-2 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-violentRed shrink-0" />
                <span>Thiruvarur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-violentRed font-bold">[Status:</span>
                <span>Open for AI/ML Engineering &amp; Research Roles]</span>
              </div>
            </div>
          </div>

          {/* Column 2: Connect & Contact */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
              Contact &amp; Profiles
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-violentRed transition-colors shrink-0" />
                      <span className="font-medium group-hover:underline truncate">{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:text-violentRed transition-all -translate-x-1 group-hover:translate-x-0 shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-light">
          <p>© {currentYear} Yogeshwaran K • Thiruvarur, Tamil Nadu, India</p>
          <div className="flex items-center gap-2">
            <span>High-Contrast Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violentRed animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
