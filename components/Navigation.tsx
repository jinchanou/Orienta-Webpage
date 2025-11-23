import React, { useState, useEffect } from 'react';
import { NavItem, SectionId } from '../types';
import { Menu, X, Compass } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Mission', id: SectionId.MISSION },
  { label: 'Why Orienta', id: SectionId.WHY },
  { label: 'Technology', id: SectionId.TECH },
  { label: 'Demo', id: SectionId.DEMO },
  { label: 'Team', id: SectionId.TEAM },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-orienta-black/80 backdrop-blur-md border-orienta-border py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo(SectionId.HERO)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative">
             <Compass className="w-8 h-8 text-white group-hover:text-orienta-accent transition-colors" />
             <div className="absolute inset-0 bg-orienta-accent blur-lg opacity-20 group-hover:opacity-50 transition-opacity"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ORIENTA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.label}
            </button>
          ))}
          <button 
             onClick={() => scrollTo(SectionId.TRY)}
             className="px-5 py-2 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            Try Prototype
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-orienta-black border-b border-orienta-border p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-lg text-gray-300 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;