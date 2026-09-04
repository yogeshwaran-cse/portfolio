import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Filter, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Quantum Machine Learning',
    'Agentic AI & RAG',
    'Computer Vision',
  ];

  const allProjects = [
    {
      title: 'Hybrid Quantum-Classical Image Classification (M.E. Final Year Project)',
      year: '2024 — 2026',
      category: 'Quantum Machine Learning',
      summary: 'Developed a hybrid quantum-classical machine learning pipeline for medical image classification. Used TensorFlow for feature extraction and AWS Braket / IonQ hardware for physical quantum execution.',
      techStack: ['TensorFlow', 'AWS Braket', 'IonQ', 'QSVM', 'QCNN', 'Modified QKNN'],
      featured: true,
      codeUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Autonomous Agentic AI & RAG Pipeline',
      year: '2024 — 2025',
      category: 'Agentic AI & RAG',
      summary: 'Engineered an autonomous multi-agent knowledge retrieval system with semantic document chunking, dynamic query routing, and self-correcting generation loops.',
      techStack: ['LangChain', 'LangGraph', 'Python', 'Vector Databases'],
      featured: true,
      codeUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Flood Image Segmentation (M.E. Mini Project)',
      year: '2024',
      category: 'Computer Vision',
      summary: 'Implemented a U-Net semantic segmentation network on aerial flood imagery to delineate inundated zones and extract spatial characteristics.',
      techStack: ['TensorFlow', 'U-Net', 'Computer Vision', 'Python'],
      featured: false,
      codeUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Medicinal Plant Image Classification (B.E. Final Year Project)',
      year: '2023 — 2024',
      category: 'Computer Vision',
      summary: 'Built a deep learning classification pipeline utilizing a VGG16 architecture with transfer learning and hyperparameter tuning to classify botanical leaf specimens.',
      techStack: ['TensorFlow', 'VGG16', 'CNN', 'Python'],
      featured: false,
      codeUrl: '#',
      demoUrl: '#',
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 border-b-2 border-black bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <FolderGit2 className="w-3.5 h-3.5 text-violentRed" />
            <span>Research &amp; Engineering Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#0A0A0A] leading-none mb-6">
            Featured Projects
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-neutral-700 font-light leading-relaxed">
            Quantum machine learning implementations, multi-agent RAG systems, and deep learning computer vision architectures.
          </p>
        </div>
      </section>

      {/* Filter Bar & Projects Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 pb-6 border-b-2 border-black">
          <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-black">
            <Filter className="w-4 h-4 text-violentRed" />
            <span>Filter By Domain:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-150 border-2 ${
                    isActive
                      ? 'bg-violentRed text-white border-violentRed shadow-[3px_3px_0px_0px_#0A0A0A]'
                      : 'bg-white text-black border-black hover:bg-black hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Counter */}
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-neutral-500 uppercase tracking-wider">
          <span>Showing {filteredProjects.length} of {allProjects.length} Projects</span>
          <span>Timeline: [2023 — 2026]</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Empty State Fallback (Safety) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border-2 border-dashed border-neutral-300">
            <p className="text-neutral-500 text-sm font-mono">No projects found for selected domain filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
