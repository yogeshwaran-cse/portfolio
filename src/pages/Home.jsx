import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  // Featured projects from portfolio
  const featuredProjects = [
    {
      title: 'Hybrid Quantum-Classical Image Classification',
      year: '2024 — 2026',
      summary: 'Hybrid quantum-classical machine learning pipeline for medical image classification utilizing TensorFlow and physical quantum execution via AWS Braket / IonQ.',
      techStack: ['TensorFlow', 'AWS Braket', 'IonQ', 'QSVM', 'QCNN'],
      category: 'Quantum ML',
      featured: true,
      codeUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Autonomous Agentic AI & RAG Pipeline',
      year: '2024 — 2025',
      summary: 'Autonomous multi-agent knowledge retrieval system with semantic document chunking, dynamic query routing, and self-correcting generation loops.',
      techStack: ['LangChain', 'LangGraph', 'Python', 'Vector DB'],
      category: 'Agentic AI',
      featured: true,
      codeUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Flood Image Segmentation (U-Net)',
      year: '2024',
      summary: 'U-Net semantic segmentation network on aerial flood imagery to delineate inundated zones and extract high-precision spatial characteristics.',
      techStack: ['TensorFlow', 'U-Net', 'Computer Vision'],
      category: 'Computer Vision',
      featured: true,
      codeUrl: '#',
      demoUrl: '#',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative border-b-2 border-black overflow-hidden py-20 md:py-32 px-6">
        {/* Background geometric accents */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-neutral-100 -z-10 -mr-20 -mt-20 border-l border-b border-neutral-200" />
        <div className="absolute left-8 bottom-4 w-32 h-1 bg-violentRed" />

        <div className="max-w-6xl mx-auto">
          {/* Subtitle / Status tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-violentRed animate-ping"></span>
            <span>Developer &amp; Researcher Portfolio</span>
          </div>

          {/* High-Impact Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0A0A0A] leading-[0.95] mb-8">
            Yogeshwaran K
            <span className="block text-violentRed font-extrabold text-2xl sm:text-4xl md:text-5xl mt-3 tracking-normal normal-case font-mono">
              // Deep Learning &amp; Quantum ML Researcher
            </span>
          </h1>

          {/* Short 2-sentence positioning summary */}
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-neutral-800 font-light leading-relaxed mb-10 text-balance">
            Computer Science postgraduate specializing in deep learning, computer vision, and quantum machine learning. Actively engineering Agentic AI and Retrieval-Augmented Generation (RAG) systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white text-sm font-extrabold uppercase tracking-wider hover:bg-violentRed transition-all duration-200 shadow-[4px_4px_0px_0px_#FF0033] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0A0A] border-2 border-black text-sm font-extrabold uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-white transition-all duration-200"
            >
              <span>About &amp; Background</span>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-violentRed transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="bg-neutral-50 py-20 px-6 border-b-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-violentRed">
                Portfolio Preview
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] mt-1">
                Featured Work
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-black hover:text-violentRed transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
