import React from 'react';
import { SectionId } from '../types';

const Node: React.FC<{ x: number; y: number; label: string; active?: boolean; type: 'input' | 'major' | 'job' | 'future' }> = ({ x, y, label, active, type }) => {
  const colors = {
    input: '#ffffff',
    major: '#3b82f6', // blue
    job: '#8b5cf6',   // purple
    future: '#ec4899' // pink
  };
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle r="6" fill={colors[type]} className={active ? 'animate-pulse' : 'opacity-50'} />
      <circle r="12" stroke={colors[type]} strokeWidth="1" fill="none" className={active ? 'animate-ping opacity-20' : 'hidden'} />
      <text 
        x="0" 
        y="25" 
        textAnchor="middle" 
        fill="white" 
        className="text-[10px] uppercase font-mono tracking-wider"
        style={{ textShadow: `0 0 10px ${colors[type]}` }}
      >
        {label}
      </text>
    </g>
  );
};

const Connection: React.FC<{ x1: number; y1: number; x2: number; y2: number }> = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
);

const TechArchitecture: React.FC = () => {
  return (
    <section id={SectionId.TECH} className="py-24 bg-orienta-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Technical <span className="text-gradient-accent">Depth</span></h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 border-l-2 border-blue-500 pl-4">Interoperability & Reasoning</h3>
                <p className="text-gray-400">Our unique Tree-of-Thoughts architecture enables deep logical connections. We don't just predict; we simulate parallel futures.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2 border-l-2 border-purple-500 pl-4">Multi-Agent Coordination</h3>
                <p className="text-gray-400">
                  <strong className="text-white">Orchestrator:</strong> Analyzes user query.<br/>
                  <strong className="text-blue-400">Agent 1 (Major):</strong> Generates academic paths.<br/>
                  <strong className="text-purple-400">Agent 2 (Career):</strong> Maps majors to concrete roles.<br/>
                  <strong className="text-pink-400">Agent 3 (Future):</strong> Projects long-term development.
                </p>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-white mb-2 border-l-2 border-pink-500 pl-4">Memory & Planning</h3>
                 <p className="text-gray-400">A persistent database acts as a memory warehouse, recording every agent's output log to ensure consistent planning across the timeline.</p>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="relative h-[400px] w-full bg-orienta-card border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/10">
            <div className="absolute top-4 left-4 text-xs font-mono text-gray-500">
              LIVE_INFERENCE_VISUALIZATION // LAYER_0 -> LAYER_3
            </div>
            
            <svg className="w-full h-full" viewBox="0 0 400 300">
               {/* Layer 0: Input */}
               <Connection x1={40} y1={150} x2={120} y2={80} />
               <Connection x1={40} y1={150} x2={120} y2={150} />
               <Connection x1={40} y1={150} x2={120} y2={220} />

               {/* Layer 1 to 2 */}
               <Connection x1={120} y1={80} x2={240} y2={60} />
               <Connection x1={120} y1={80} x2={240} y2={100} />
               
               <Connection x1={120} y1={150} x2={240} y2={150} />
               
               <Connection x1={120} y1={220} x2={240} y2={200} />
               <Connection x1={120} y1={220} x2={240} y2={240} />

               {/* Layer 2 to 3 */}
               <Connection x1={240} y1={60} x2={350} y2={60} />
               <Connection x1={240} y1={100} x2={350} y2={100} />
               <Connection x1={240} y1={150} x2={350} y2={150} />
               <Connection x1={240} y1={200} x2={350} y2={200} />
               <Connection x1={240} y1={240} x2={350} y2={240} />


               {/* Nodes */}
               <Node x={40} y={150} label="User Query" type="input" active />
               
               <Node x={120} y={80} label="CS" type="major" active />
               <Node x={120} y={150} label="Art" type="major" />
               <Node x={120} y={220} label="Econ" type="major" />

               <Node x={240} y={60} label="AI Eng" type="job" active />
               <Node x={240} y={100} label="UX Dev" type="job" />
               <Node x={240} y={150} label="Designer" type="job" />
               <Node x={240} y={200} label="Analyst" type="job" />
               <Node x={240} y={240} label="Trader" type="job" />

               <Node x={350} y={60} label="CTO" type="future" active />
               <Node x={350} y={100} label="Lead" type="future" />
               <Node x={350} y={150} label="Director" type="future" />
               <Node x={350} y={200} label="VP" type="future" />
               <Node x={350} y={240} label="Fund Mgr" type="future" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;