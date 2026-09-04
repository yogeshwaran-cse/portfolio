import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({
  title,
  year,
  summary,
  techStack = [],
  codeUrl = '#',
  demoUrl = '#',
  category = 'Engineering',
  featured = false,
}) {
  const hasCode = Boolean(codeUrl && codeUrl !== '#' && codeUrl.trim() !== '');
  const hasDemo = Boolean(demoUrl && demoUrl !== '#' && demoUrl.trim() !== '');

  return (
    <div
      className={`group relative flex flex-col justify-between p-6 md:p-8 border-2 transition-all duration-300 bg-white ${
        featured
          ? 'border-black shadow-[6px_6px_0px_0px_#0A0A0A] hover:shadow-[8px_8px_0px_0px_#FF0033] hover:border-violentRed'
          : 'border-neutral-200 hover:border-black hover:shadow-[6px_6px_0px_0px_#0A0A0A]'
      }`}
    >
      {/* Top red accent line indicator on hover */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-violentRed transition-all duration-300 group-hover:w-full" />

      <div>
        {/* Header: Category & Year */}
        <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-neutral-100">
          <span className="text-xs uppercase font-extrabold tracking-widest text-violentRed">
            {category}
          </span>
          <span className="text-xs font-mono font-bold text-neutral-400">
            {year}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#0A0A0A] mb-3 group-hover:text-violentRed transition-colors">
          {title}
        </h3>

        {/* One-sentence summary */}
        <p className="text-neutral-600 text-sm md:text-base font-light leading-relaxed mb-6">
          {summary}
        </p>
      </div>

      <div>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 text-[#0A0A0A] border border-neutral-300 group-hover:border-black transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions / Links */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          {hasCode ? (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-violentRed transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Code</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 cursor-not-allowed select-none"
              title="Code repository unavailable"
            >
              <Github className="w-3.5 h-3.5 text-neutral-300" />
              <span>View Code</span>
            </span>
          )}

          {hasDemo ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider hover:bg-violentRed transition-colors cursor-pointer"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 border border-neutral-200 text-neutral-400 text-xs font-bold uppercase tracking-wider cursor-not-allowed select-none"
              title="Live demo unavailable"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-300" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
