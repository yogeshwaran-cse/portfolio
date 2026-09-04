import React from 'react';
import { BookOpen, Award, CheckCircle2, ArrowUpRight, Download, Mail, Phone, MapPin, GraduationCap, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript (React)'],
    },
    {
      category: 'Core AI & Machine Learning',
      skills: ['TensorFlow', 'Deep Learning (CNN, VGG16, U-Net)', 'Quantum Machine Learning (QSVM, QCNN)', 'Computer Vision'],
    },
    {
      category: 'Generative & Agentic AI',
      skills: ['LangChain', 'LangGraph', 'RAG (Retrieval-Augmented Generation)', 'Vector Databases', 'Multi-Agent Systems'],
    },
    {
      category: 'Cloud & Platforms',
      skills: ['AWS (S3, Braket / IonQ)', 'Git', 'HTML / CSS', 'Bootstrap'],
    },
  ];

  const educationMilestones = [
    {
      period: '2024 — 2026',
      degree: 'M.E. in Computer Science and Engineering',
      institution: 'Annamalai University',
      score: 'CGPA: 9.7',
      highlights: 'Specializing in deep learning, computer vision, and quantum machine learning. Developing hybrid quantum-classical algorithms on physical quantum hardware (AWS Braket / IonQ).',
    },
    {
      period: '2020 — 2024',
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Anjalai Ammal Mahalingam Engineering College',
      score: 'CGPA: 8.24',
      highlights: 'Strong grounding in algorithm design, object-oriented programming, and computer vision. Developed a deep learning classification pipeline with transfer learning for botanical image analysis.',
    },
    {
      period: '2018 — 2020',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'New Bharath Matric. Hr. Sec. School',
      score: 'Score: 72.1%',
      highlights: 'Higher secondary education with core mathematics and physical sciences curriculum.',
    },
    {
      period: '2017 — 2018',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'New Bharath Matric. Hr. Sec. School',
      score: 'Score: 86.2%',
      highlights: 'Graduated with high first-class distinction in general sciences and mathematics.',
    },
  ];

  const certifications = [
    'Data Analytics using Python — NPTEL by IIT Madras',
    'AI and ML (Summer Workshop) — IIT Madras',
    'Python Zero to Hero — Guvi',
  ];

  const researchThemes = [
    'Quantum Machine Learning (QSVM, QCNN & Modified QKNN on AWS Braket / IonQ)',
    'Autonomous Multi-Agent AI & Self-Correcting RAG Pipelines (LangChain, LangGraph)',
    'Deep Learning Semantic Segmentation & Architecture Design (U-Net)',
    'Transfer Learning & Convolutional Neural Networks (VGG16, CNN)',
  ];

  const profileMetrics = [
    { label: 'M.E. CGPA', value: '9.7', note: 'Annamalai Univ' },
    { label: 'B.E. CGPA', value: '8.24', note: 'AAMEC' },
    { label: 'Core Focus', value: 'Quantum & AI', note: 'AWS Braket / RAG' },
    { label: 'Location', value: 'Tamil Nadu', note: 'India' },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-14 md:py-20 px-6 border-b-2 border-black bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase mb-5">
            <span className="w-2 h-2 bg-violentRed"></span>
            <span>Profile &amp; Technical Dossier</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#0A0A0A] leading-none mb-4">
            About Yogeshwaran K
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
            Computer Science postgraduate specializing in deep learning, computer vision, and quantum machine learning, actively engineering Agentic AI and Retrieval-Augmented Generation (RAG) systems.
          </p>
        </div>
      </section>

      {/* Main Profile Module: Cohesive Side-by-Side Photo & Ethos Presentation */}
      <section className="py-14 md:py-18 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Photo Module (Sticky on desktop, glides down with Summary & Engineering Ethos until reaching the bottom) */}
          <div className="lg:col-span-5 relative h-full">
            <div className="lg:sticky lg:top-24 xl:top-28">
              <div className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_#FF0033] overflow-hidden">
                
                {/* Photo Header Bar */}
                <div className="px-4 py-3 bg-[#0A0A0A] text-white flex items-center justify-between border-b-2 border-black">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violentRed animate-ping"></span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300">
                      Researcher Profile
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-violentRed text-white font-black">
                    Active
                  </span>
                </div>

                {/* Portrait Image Container (Natural Color, Crisp Framing) */}
                <div className="p-3 bg-neutral-100 flex items-center justify-center">
                  <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[350px] border border-neutral-300 bg-white overflow-hidden shadow-inner">
                    <img
                      src="./profile.jpg"
                      alt="Yogeshwaran K — Computer Science Researcher"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle red corner markers */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-violentRed"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-violentRed"></div>
                  </div>
                </div>

                {/* Portrait Identity Footer Strip */}
                <div className="p-4 bg-white border-t-2 border-black space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-base uppercase text-[#0A0A0A] tracking-tight">
                        Yogeshwaran K
                      </h3>
                      <p className="text-xs font-mono text-neutral-600 font-medium">
                        M.E. Computer Science &amp; Engineering
                      </p>
                    </div>
                    <span className="text-xs font-mono font-black px-2.5 py-1 bg-black text-white">
                      CGPA 9.7
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5 pt-1 border-t border-neutral-200">
                    <MapPin className="w-3 text-violentRed shrink-0" />
                    <span>Thiruvarur, Tamil Nadu, India</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Summary & Engineering Ethos Card (Harmonized directly alongside the photo) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white p-7 sm:p-9 border-2 border-black shadow-[8px_8px_0px_0px_#0A0A0A]">
            <div>
              {/* Category & Title */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-violentRed flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Engineering Ethos &amp; Biography</span>
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Ref: 2024–2026
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0A0A] mb-5">
                Summary &amp; Engineering Ethos
              </h2>

              {/* Bio Narrative */}
              <div className="space-y-4 text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Computer Science postgraduate specializing in deep learning, computer vision, and quantum machine learning, actively engineering Agentic AI and Retrieval-Augmented Generation (RAG) systems using LangChain and LangGraph. Focused on solving complex technical challenges and delivering robust, production-grade intelligent systems.
                </p>
                <p>
                  With a strong foundation in convolutional neural networks, transfer learning architectures, and semantic segmentation, I have researched and built solutions ranging from aerial flood disaster mapping using U-Net to botanical species classification with VGG16.
                </p>
                <p>
                  My current research explores the frontiers of quantum computing—designing hybrid quantum-classical machine learning pipelines and executing quantum circuits on physical hardware via AWS Braket and IonQ.
                </p>
              </div>

              {/* Key Competency Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-black">
                  TensorFlow &amp; CNNs
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-black">
                  Quantum ML (AWS Braket / IonQ)
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-black">
                  LangChain &amp; LangGraph
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-black">
                  U-Net Segmentation
                </span>
              </div>
            </div>

            {/* Quick Metrics & Actions */}
            <div className="pt-6 mt-6 border-t border-neutral-200 space-y-6">
              {/* 4-Stat Metric Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {profileMetrics.map((metric) => (
                  <div key={metric.label} className="p-3 bg-neutral-50 border border-neutral-200">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">
                      {metric.label}
                    </div>
                    <div className="text-base font-black text-[#0A0A0A] tracking-tight mt-0.5">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-mono text-violentRed font-bold">
                      {metric.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contact Coordinates */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-800">
                <a
                  href="mailto:ka.yogeshwaran@gmail.com"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 border border-neutral-300 hover:border-violentRed transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-violentRed shrink-0" />
                  <span className="font-semibold">ka.yogeshwaran@gmail.com</span>
                </a>
                <a
                  href="tel:+916382437292"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 border border-neutral-300 hover:border-violentRed transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-violentRed shrink-0" />
                  <span className="font-semibold">+91 6382437292</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="#/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0A0A0A] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-violentRed transition-colors shadow-[3px_3px_0px_0px_#FF0033]"
                >
                  <span>View Selected Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="./Yogeshwaran_K_Resume.pdf"
                  download="Yogeshwaran_K_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-black text-xs font-extrabold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0px_0px_#0A0A0A]"
                >
                  <Download className="w-3.5 h-3.5 text-violentRed" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Specialized Research Themes & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
          {/* Specialized Research Themes */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 border-2 border-black shadow-[4px_4px_0px_0px_#0A0A0A]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violentRed mb-4 pb-2 border-b border-neutral-200">
              <BookOpen className="w-4 h-4" />
              <span>Specialized Research Focus</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-800">
              {researchThemes.map((theme, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-violentRed font-mono font-bold mt-0.5">›</span>
                  <span className="font-medium leading-relaxed">{theme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="md:col-span-5 bg-white p-6 sm:p-8 border-2 border-black shadow-[4px_4px_0px_0px_#0A0A0A] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violentRed mb-4 pb-2 border-b border-neutral-200">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-800">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violentRed shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-neutral-200 mt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Verified Academic &amp; Workshop Credentials
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies with Stark Borders */}
      <section className="py-20 px-6 bg-neutral-100 border-t-2 border-b-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 pb-4 border-b-2 border-black flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-violentRed">
                Technical Arsenal
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] mt-1">
                Skills Matrix
              </h2>
            </div>
            <p className="text-xs font-mono uppercase text-neutral-500">
              [TensorFlow • Agentic AI • Quantum ML • Cloud]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="bg-white p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_#0A0A0A]"
              >
                <h3 className="text-base font-extrabold uppercase tracking-tight text-black mb-4 pb-2 border-b border-neutral-200 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-2 h-2 bg-violentRed"></span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white text-xs font-bold tracking-wide text-black border-2 border-black hover:bg-[#0A0A0A] hover:text-white hover:border-violentRed transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Academic Milestones */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-12 pb-4 border-b-2 border-black flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-violentRed">
              Academic Background
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] mt-1">
              Education &amp; Qualifications
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 uppercase">
            <GraduationCap className="w-4 h-4 text-violentRed" />
            <span>Master &amp; Bachelor Degrees</span>
          </div>
        </div>

        <div className="space-y-6">
          {educationMilestones.map((item, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 border-2 border-black hover:border-violentRed bg-white transition-colors duration-200 relative shadow-[4px_4px_0px_0px_#0A0A0A]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-violentRed transition-colors">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-semibold text-neutral-600 uppercase tracking-wider mt-0.5">
                    {item.institution}
                  </div>
                </div>
                <div className="flex items-center gap-3 self-start md:self-auto">
                  <span className="text-xs font-mono font-black px-3 py-1 bg-violentRed text-white">
                    {item.score}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-black text-white">
                    {item.period}
                  </span>
                </div>
              </div>
              <p className="text-neutral-700 text-sm md:text-base font-light leading-relaxed max-w-4xl mt-3">
                {item.highlights}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
