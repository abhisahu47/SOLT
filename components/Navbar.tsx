import React, { useState } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About Me' },
    { id: 'specimen', label: 'Resources' },
    { id: 'wisdom', label: 'Wisdom Lab' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-2 group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="p-2 bg-forest-100 rounded-full group-hover:bg-forest-200 transition-colors">
              <Microscope className="h-6 w-6 text-forest-700" />
            </div>
            <span className="font-bold text-xl tracking-tight text-forest-900">SOLT</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-forest-700 bg-forest-50'
                      : 'text-slate-600 hover:text-forest-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-forest-700 hover:text-forest-900 hover:bg-forest-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'text-forest-800 bg-forest-50'
                    : 'text-slate-600 hover:text-forest-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;