import React, { useState, useEffect } from 'react';
import { Menu, X, Waves } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-teal-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Waves className={`h-8 w-8 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              BlueChoice Pool
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Pool Comparison', id: 'comparison' },
              { name: 'Services', id: 'services' },
              { name: 'Gallery', id: 'gallery' },
              { name: 'Reviews', id: 'reviews' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-teal-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
          >
            Get Quote
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md mt-4 rounded-lg shadow-lg border border-teal-100">
            <nav className="flex flex-col space-y-4 p-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Pool Comparison', id: 'comparison' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Reviews', id: 'reviews' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-700 hover:text-teal-600 transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}