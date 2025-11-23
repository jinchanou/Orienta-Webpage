import React from 'react';
import { SectionId } from '../types';

const ProductDemo: React.FC = () => {
  return (
    <section id={SectionId.DEMO} className="py-24 bg-orienta-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Intuitive <span className="text-gradient-accent">Workflow</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From a conversational ice-breaker to a dynamic "Career Path Tree". We reduce anxiety through clarity.
          </p>
        </div>

        {/* Abstract representation of UI screens using CSS shapes to keep it code-only but pretty */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            
            {/* Screen 1: Chat */}
            <div className="w-full max-w-sm h-[500px] bg-orienta-card border border-white/10 rounded-2xl p-4 flex flex-col shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-500 ml-auto">Onboarding</span>
                </div>
                <div className="space-y-3 flex-1 overflow-hidden">
                    <div className="bg-white/5 p-3 rounded-lg rounded-tl-none max-w-[80%] text-xs text-gray-300">
                        Hi! I'm Orienta. What interests you lately?
                    </div>
                    <div className="bg-orienta-accent/20 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-xs text-white">
                        I like drawing but I also love math...
                    </div>
                     <div className="bg-white/5 p-3 rounded-lg rounded-tl-none max-w-[80%] text-xs text-gray-300">
                        Interesting combination. Let's explore Creative Coding or Architecture.
                    </div>
                </div>
                <div className="mt-4 h-10 bg-white/5 rounded-full"></div>
            </div>

            {/* Screen 2: Tree Result */}
            <div className="w-full max-w-md h-[550px] bg-orienta-black border border-orienta-accent/30 rounded-2xl p-4 flex flex-col shadow-2xl shadow-orienta-accent/10 z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                     <span className="text-xs font-mono text-orienta-accent">ANALYSIS_COMPLETE</span>
                </div>
                <div className="flex-1 relative">
                    {/* Fake Tree UI */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/10 rounded border border-white/20 flex items-center justify-center text-xs">Interest: Math + Art</div>
                    <div className="absolute top-20 left-1/2 w-[1px] h-10 bg-white/10"></div>
                    
                    <div className="absolute top-32 left-10 w-24 h-24 bg-blue-900/20 rounded border border-blue-500/50 flex flex-col items-center justify-center text-xs p-2 text-center">
                        <span className="text-blue-400 font-bold mb-1">Architecture</span>
                        <span className="text-[10px] text-gray-500">Structural Design</span>
                    </div>
                     <div className="absolute top-32 right-10 w-24 h-24 bg-purple-900/20 rounded border border-purple-500/50 flex flex-col items-center justify-center text-xs p-2 text-center">
                        <span className="text-purple-400 font-bold mb-1">Creative Tech</span>
                        <span className="text-[10px] text-gray-500">WebGL Developer</span>
                    </div>
                </div>
            </div>

             {/* Screen 3: Details */}
             <div className="w-full max-w-sm h-[500px] bg-orienta-card border border-white/10 rounded-2xl p-4 flex flex-col shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                     <span className="text-xs text-gray-500">Detailed Roadmap</span>
                </div>
                <div className="space-y-4">
                    <div className="h-40 bg-white/5 rounded-lg w-full"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-white/10 rounded w-3/4"></div>
                        <div className="h-4 bg-white/10 rounded w-1/2"></div>
                    </div>
                     <div className="h-20 bg-orienta-accent/10 border border-orienta-accent/20 rounded-lg w-full flex items-center justify-center">
                        <span className="text-orienta-accent text-sm">Future Projection: +15% Growth</span>
                     </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDemo;