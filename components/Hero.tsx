import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ComingSoonPopup from './ComingSoonPopup';

const Hero: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="otherimages/landingimage1.png" 
          alt="Microscopic leaf cell structure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
          SOLT
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-forest-200 tracking-[0.2em] uppercase border-t border-white/20 pt-6 inline-block mb-10">
          Science of Living Things
        </h2>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Exploring the intersection of biology, education, and scientific discovery.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.open('career_map.html', '_blank')}
            className="px-8 py-3 rounded-full bg-forest-600 text-white font-medium hover:bg-forest-500 transition-all shadow-lg shadow-forest-900/50"
          >
            View Career Map
          </button>
          <button 
             onClick={() => document.getElementById('specimen')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
          >
            Go to Student Resources
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowDown className="h-6 w-6" />
      </div>

      <ComingSoonPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default Hero;