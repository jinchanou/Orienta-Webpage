import React, { useState } from 'react';
import { SectionId, CareerPathData } from '../types';
import { Sparkles, ArrowRight, RefreshCw, Loader2 } from 'lucide-react';
import { generateCareerMap } from '../services/geminiService';

const InteractiveAgent: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CareerPathData | null>(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setError(false);
    setData(null);

    const result = await generateCareerMap(input);
    
    if (result) {
      setData(result);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const reset = () => {
    setData(null);
    setInput('');
    setError(false);
  };

  return (
    <section id={SectionId.TRY} className="min-h-screen py-24 bg-orienta-black flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
            
            {/* Header */}
            {!data && (
              <div className="text-center mb-16 animate-fade-in-up">
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    ORIENTA
                  </h2>
                  <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                    Type a vague interest. We will map your future.
                  </p>
              </div>
            )}

            {/* Input Form */}
            {!data && (
              <div className="w-full max-w-2xl animate-fade-in-up delay-100">
                  <form onSubmit={handleSubmit} className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                      <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="e.g. 'I love video games and storytelling'"
                          className="relative w-full bg-orienta-card/90 backdrop-blur-xl text-white text-lg md:text-xl rounded-2xl px-8 py-6 border border-white/10 focus:outline-none focus:border-white/20 transition-all placeholder:text-gray-600"
                          disabled={loading}
                      />
                      <button 
                          type="submit"
                          disabled={loading || !input.trim()} 
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white text-black rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white transition-all"
                      >
                          {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                      </button>
                  </form>
                  {error && (
                    <p className="text-red-400 mt-4 text-center">System busy. Please try again.</p>
                  )}
              </div>
            )}

            {/* Bubble Visualization */}
            {data && (
              <div className="w-full h-[600px] md:h-[700px] relative animate-fade-in flex items-center justify-center">
                  
                  {/* Reset Button */}
                  <button 
                    onClick={reset}
                    className="absolute top-0 right-0 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 transition-all"
                  >
                    <RefreshCw className="w-4 h-4" /> Reset Map
                  </button>

                  <div className="relative w-full h-full">
                      {/* Connecting Lines (SVG) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#4b5563" fillOpacity="0.5" />
                          </marker>
                        </defs>
                         {/* We will draw lines from center to careers, and careers to futures */}
                         {/* Note: Positions are calculated to match the CSS positioning below */}
                         {/* Center is roughly 50% 50% */}
                      </svg>

                      {/* Major Bubble (Center) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group cursor-default">
                          <div className="relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/30 shadow-[0_0_60px_rgba(37,99,235,0.3)] animate-float">
                              <div className="text-center p-4">
                                <span className="block text-xs uppercase tracking-widest text-blue-200 mb-1">Major</span>
                                <span className="text-xl md:text-2xl font-bold text-white leading-tight">{data.major}</span>
                              </div>
                              {/* Orbit rings */}
                              <div className="absolute inset-0 border border-blue-400/20 rounded-full animate-ping-slow"></div>
                          </div>
                      </div>

                      {/* Career Bubbles (Orbit 1) */}
                      {data.careers.map((career, idx) => {
                          // Calculate angle for positioning
                          const angle = (idx * (360 / data.careers.length)) - 90; // Start from top
                          const radius = 35; // % from center
                          
                          // Convert polar to cartesian for CSS percentage
                          // x = 50 + r * cos(a)
                          // y = 50 + r * sin(a)
                          const rad = angle * (Math.PI / 180);
                          const left = 50 + radius * Math.cos(rad);
                          const top = 50 + radius * Math.sin(rad);

                          return (
                            <div 
                              key={idx}
                              className="absolute z-10 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                              style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
                            >
                                <div className="relative w-full h-full rounded-full bg-orienta-card/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-center p-4 shadow-xl hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                                   <div>
                                      <span className="block text-[10px] uppercase tracking-wider text-purple-400 mb-1">Career</span>
                                      <span className="text-sm md:text-base font-bold text-gray-100">{career.title}</span>
                                   </div>
                                   {/* Line to center (Visual trick using pseudo element or just implied by proximity) */}
                                   <div className="absolute inset-0 border border-purple-500/10 rounded-full"></div>
                                </div>

                                {/* Future Bubbles (Orbit 2 - Relative to Career) */}
                                {career.futures.map((future, fIdx) => {
                                   const fAngle = (fIdx === 0 ? -45 : 45) + (angle + 90); // Offset slightly from the career angle
                                   const fDist = 130; // Distance from career bubble center in px
                                   
                                   // We can't easily use % for nested absolute without knowing parent size perfectly in all viewports, 
                                   // so we position them absolute relative to the career bubble container
                                   const fx = 50 + (fIdx === 0 ? -70 : 70); // simplistic L/R offset
                                   const fy = (fIdx % 2 === 0 ? -70 : -70); // Top
                                   
                                   // Let's try a different approach: Position them around the career bubble
                                   // Just simpler: Place them above and below or side by side
                                   const isLeft = left < 50;
                                   const fLeft = isLeft ? -20 : 120;
                                   const fTop = fIdx === 0 ? 0 : 60;

                                   return (
                                     <div 
                                      key={fIdx}
                                      className={`absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center p-2 text-center text-xs text-gray-300 animate-pulse-slow`}
                                      style={{ 
                                        left: isLeft ? (fIdx === 0 ? '-60%' : '-20%') : (fIdx === 0 ? '120%' : '80%'), 
                                        top: fIdx === 0 ? '-20%' : '80%',
                                        animationDelay: `${(idx + fIdx) * 0.3}s` 
                                      }}
                                     >
                                       {future}
                                     </div>
                                   )
                                })}
                            </div>
                          );
                      })}
                  </div>
                  
                  <div className="absolute bottom-0 text-center text-gray-500 text-sm animate-fade-in delay-1000">
                     <Sparkles className="w-4 h-4 inline mr-2 text-orienta-accent" />
                     AI generated roadmap based on your interests
                  </div>
              </div>
            )}

        </div>
    </section>
  );
};

export default InteractiveAgent;
