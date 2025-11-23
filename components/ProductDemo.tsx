import React from 'react';
import { SectionId } from '../types';
import { Check, X, GitBranch, List, Zap, BrainCircuit, Target, Layers } from 'lucide-react';

const ProductDemo: React.FC = () => {
  return (
    <section id={SectionId.DEMO} className="py-24 bg-orienta-dark relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond <span className="text-gradient-accent">Playful Exploration</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Standard tools like <em>Google Career Dreamer</em> offer a playful start. 
            <strong> Orienta</strong> offers a strategic roadmap. We don't just match keywords; we simulate futures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Competitor Card (The Standard) */}
          <div className="relative group p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent">
            <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-2xl"></div>
            <div className="relative h-full bg-orienta-card border border-white/5 rounded-xl p-8 flex flex-col grayscale transition-all duration-500 hover:grayscale-0">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gray-800 rounded-lg">
                   <List className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-300">Standard Career AI</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500">e.g. Career Dreamer</p>
                </div>
              </div>

              {/* Visual Metaphor: Flat List */}
              <div className="mb-8 space-y-3 opacity-50">
                 <div className="h-12 w-full bg-gray-800 rounded border border-gray-700 flex items-center px-4">
                    <span className="w-2 h-2 rounded-full bg-gray-500 mr-3"></span>
                    <div className="h-2 w-24 bg-gray-600 rounded"></div>
                 </div>
                 <div className="h-12 w-full bg-gray-800 rounded border border-gray-700 flex items-center px-4">
                    <span className="w-2 h-2 rounded-full bg-gray-500 mr-3"></span>
                    <div className="h-2 w-32 bg-gray-600 rounded"></div>
                 </div>
                 <div className="h-12 w-full bg-gray-800 rounded border border-gray-700 flex items-center px-4">
                    <span className="w-2 h-2 rounded-full bg-gray-500 mr-3"></span>
                    <div className="h-2 w-20 bg-gray-600 rounded"></div>
                 </div>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex items-start gap-3 text-gray-400">
                   <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
                   <p className="text-sm"><strong>Surface Level:</strong> Relies on simple keyword matching (e.g., "Art" = "Painter").</p>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                   <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
                   <p className="text-sm"><strong>Static Snapshots:</strong> Provides job titles without context or growth paths.</p>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                   <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
                   <p className="text-sm"><strong>Single-Step:</strong> Input → Output. No intermediate reasoning.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Orienta Card (The Advantage) */}
          <div className="relative group p-1 rounded-2xl bg-gradient-to-b from-blue-500 to-purple-600 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
            <div className="relative h-full bg-orienta-black rounded-xl p-8 flex flex-col overflow-hidden">
              
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                   <GitBranch className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Orienta Engine</h3>
                  <p className="text-xs uppercase tracking-widest text-blue-400">Multi-Agent System</p>
                </div>
              </div>

              {/* Visual Metaphor: Tree/Graph */}
              <div className="relative z-10 mb-8 h-48 flex items-center justify-center">
                 <div className="absolute w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-500 left-8 top-12 rounded-full opacity-20"></div>
                 
                 {/* Node 1 */}
                 <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border border-blue-500 bg-blue-900/20 flex items-center justify-center animate-pulse">
                        <Target className="w-5 h-5 text-blue-400" />
                    </div>
                 </div>
                 
                 {/* Connecting Line */}
                 <div className="absolute left-12 top-1/2 w-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>

                 {/* Node 2 */}
                 <div className="absolute left-28 top-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border border-purple-500 bg-purple-900/20 flex items-center justify-center">
                        <BrainCircuit className="w-5 h-5 text-purple-400" />
                    </div>
                 </div>

                 {/* Branches */}
                 <div className="absolute left-40 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                         <div className="w-8 h-[1px] bg-purple-500"></div>
                         <div className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] text-white">Future A</div>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-8 h-[1px] bg-purple-500"></div>
                         <div className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] text-white">Future B</div>
                    </div>
                 </div>
              </div>

              <div className="relative z-10 space-y-4 mt-auto">
                <div className="flex items-start gap-3">
                   <div className="mt-0.5 p-0.5 bg-green-500/20 rounded-full">
                     <Check className="w-4 h-4 text-green-400" />
                   </div>
                   <p className="text-sm text-gray-300"><strong>Deep Reasoning:</strong> Uses Chain-of-Thought to understand <em>why</em> an interest matters (e.g., "Art" + "Logic" = "UX Architecture").</p>
                </div>
                <div className="flex items-start gap-3">
                   <div className="mt-0.5 p-0.5 bg-green-500/20 rounded-full">
                     <Check className="w-4 h-4 text-green-400" />
                   </div>
                   <p className="text-sm text-gray-300"><strong>Temporal Mapping:</strong> We don't just show the job; we show the <em>trajectory</em> (Major → Career → Industry Leader).</p>
                </div>
                <div className="flex items-start gap-3">
                   <div className="mt-0.5 p-0.5 bg-green-500/20 rounded-full">
                     <Check className="w-4 h-4 text-green-400" />
                   </div>
                   <p className="text-sm text-gray-300"><strong>Agentic Interoperability:</strong> Three specialized agents debate and refine the best path for you.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
             <div className="relative z-10">
                 <h4 className="text-2xl font-bold text-white mb-2">Stop guessing. Start mapping.</h4>
                 <p className="text-gray-400 mb-6">See why 94% of students prefer a roadmap over a list.</p>
                 <button 
                    onClick={() => document.getElementById(SectionId.TRY)?.scrollIntoView({behavior: 'smooth'})}
                    className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                 >
                    Try the Orienta Difference
                 </button>
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12"></div>
        </div>

      </div>
    </section>
  );
};

export default ProductDemo;
