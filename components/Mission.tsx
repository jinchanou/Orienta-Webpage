import React from 'react';
import { SectionId } from '../types';

const Mission: React.FC = () => {
  return (
    <section id={SectionId.MISSION} className="py-24 bg-orienta-black relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-l-2 border-orienta-accent pl-8 md:pl-12 py-4">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-400 leading-relaxed mb-8">
            "What separates a wandering path from a legendary journey? Not just talent, but <span className="text-white">direction</span>."
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            <p>
              We saw the blank stares of brilliant minds standing at the precipice of adulthood. 
              Hundreds of high school students, overflowing with potential, yet paralyzed by the "major" decision.
              A lack of planning leads to misaligned choices, which can severely discount a young person's social experience and career satisfaction.
            </p>
            
            <p>
              Data does for AI what life does for humans — but without structure, it is just noise.
              We asked ourselves: Which future do we choose for the next generation?
              One where they stumble in the dark, hoping to find a fit? Or one where they have a readable map before they make the critical choice?
            </p>

            <p className="text-white font-medium">
              Our mission is to raise AI that understands the richness of human aspiration. 
              Orienta is not just advice; it is the cartography of ambition.
              We map the invisible territory between who you are today and who you could become.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;