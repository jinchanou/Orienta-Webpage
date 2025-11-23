import React from 'react';
import { SectionId } from '../types';
import { Clock, Users, BrainCircuit, GraduationCap, Zap, TrendingUp } from 'lucide-react';

const Card: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="glass-card p-8 rounded-none hover:bg-white/5 transition-all duration-300 border-l border-t border-white/5 group">
    <div className="mb-6 text-gray-500 group-hover:text-orienta-accent transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const WhySection: React.FC = () => {
  return (
    <section id={SectionId.WHY} className="py-32 relative bg-orienta-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Why Now */}
        <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
                <span className="h-[1px] w-12 bg-orienta-accent"></span>
                <h2 className="text-2xl font-mono uppercase tracking-widest text-white">Why Now?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
                <Card 
                    icon={<BrainCircuit className="w-8 h-8"/>}
                    title="From Search to Reasoning" 
                    desc="Modern LLMs have evolved beyond keyword search. They now possess Reasoning capabilities to understand the deep logical connections between a student's abstract 'personality' and concrete 'career paths.'"
                />
                <Card 
                    icon={<Zap className="w-8 h-8"/>}
                    title="AI Era Necessity" 
                    desc="The job market is being reshaped by AI. Static advice books are obsolete; students need dynamic, predictive guidance that evolves with the market."
                />
                 <Card 
                    icon={<TrendingUp className="w-8 h-8"/>}
                    title="Technological Readiness" 
                    desc="We leverage the latest breakthroughs in agent orchestration to simulate millions of potential career trajectories in seconds."
                />
            </div>
        </div>

        {/* Why Us */}
        <div>
            <div className="flex items-center gap-4 mb-10">
                <span className="h-[1px] w-12 bg-blue-500"></span>
                <h2 className="text-2xl font-mono uppercase tracking-widest text-white">Why Us?</h2>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
                <Card 
                    icon={<GraduationCap className="w-8 h-8"/>}
                    title="Origin Fit" 
                    desc="We are recent students who have lived through this problem. We understand the 'Admissions Booth' blank stare better than anyone because we were there."
                />
                <Card 
                    icon={<Users className="w-8 h-8"/>}
                    title="Passion for Education" 
                    desc="We are dedicated to solving the massive information asymmetry in education, democratizing career counseling for everyone."
                />
                 <Card 
                    icon={<BrainCircuit className="w-8 h-8"/>}
                    title="Technical Expertise" 
                    desc="Specialized expertise in building LLM Applications, Agent Orchestration, and System Design specifically for reasoning tasks."
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;