import React from 'react';
import ParticleBackground from './ParticleBackground';
import { SectionId } from '../types';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-orienta-black">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-20">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">System Operational</span>
        </div>

        {/* Main Title */}
        <h1 className="text-[16vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-800 mb-8 select-none mt-4">
          ORIENTA
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-xl font-light text-gray-500 mb-6 tracking-wide max-w-2xl mx-auto">
          Mapping the Future for Students with <span className="text-gray-300">Interoperable AI</span>
        </h2>

        {/* Description */}
        <p className="max-w-lg mx-auto text-sm text-gray-700 mb-16 leading-relaxed">
          The AI Career Compass that transforms vague interests into concrete, navigable roadmaps using advanced multi-agent reasoning.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          
          {/* Start Mapping: 纯白实心，高对比度 */}
          <button 
             onClick={() => document.getElementById(SectionId.TRY)?.scrollIntoView({behavior: 'smooth'})}
             className="group px-8 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            Start Mapping <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Architecture: 暗色实心，带边框，无透明度干扰 */}
          <button 
             onClick={() => document.getElementById(SectionId.TECH)?.scrollIntoView({behavior: 'smooth'})}
             className="px-8 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-sm tracking-wide hover:bg-zinc-800 hover:border-zinc-600 transition-colors"
          >
            Architecture
          </button>

        </div>
      </div>
      
      {/* Decorative gradient glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-orienta-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;