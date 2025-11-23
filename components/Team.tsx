import React from 'react';
import { SectionId } from '../types';

const Team: React.FC = () => {
  const contributors = [
    { name: 'Yanning Zhang', email: 'ynzhang@berkeley.edu' },
    { name: 'Hao Deng', email: 'dhmath2023@gmail.com' },
    { name: 'Jincheng Ou', email: 'jch3ngou@berkeley.edu' },
  ];

  return (
    <section id={SectionId.TEAM} className="py-20 bg-orienta-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-mono uppercase tracking-widest text-gray-500 mb-10">Key Contributors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributors.map((member, idx) => (
            <div key={idx} className="group cursor-default">
              <h3 className="text-xl font-bold text-white group-hover:text-orienta-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-500 font-mono text-sm mt-1">{member.email}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2025 Orienta AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
