import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import WhySection from './components/WhySection';
import TechArchitecture from './components/TechArchitecture';
import ProductDemo from './components/ProductDemo';
import InteractiveAgent from './components/InteractiveAgent';
import Team from './components/Team';

function App() {
  return (
    <div className="bg-orienta-black min-h-screen text-white selection:bg-orienta-accent selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <WhySection />
        <TechArchitecture />
        <ProductDemo />
        <InteractiveAgent />
        <Team />
      </main>
    </div>
  );
}

export default App;