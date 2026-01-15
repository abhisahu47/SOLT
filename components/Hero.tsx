import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ComingSoonPopup from './ComingSoonPopup';

const Hero: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="otherimages/landingimage1.png" 
          alt="Microscopic leaf cell structure" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter mb-2 drop-shadow-2xl">
            SOLT
          </h1>
          <p className="text-2xl md:text-3xl font-light text-forest-100 tracking-[0.2em] uppercase border-t border-white/10 pt-6 inline-block">
            Science of Living Things
          </p>
        </div>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Exploring the intersection of biology, education, and scientific discovery.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button 
            onClick={() => window.open('career_map.html', '_blank')}
            className="px-8 py-4 rounded-full bg-forest-600 text-white font-bold hover:bg-forest-500 transition-all shadow-[0_0_20px_rgba(37,140,78,0.3)] hover:shadow-[0_0_30px_rgba(37,140,78,0.5)] hover:-translate-y-1"
          >
            View Career Map
          </button>
          <button 
             onClick={() => document.getElementById('specimen')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-1"
          >
            Student Resources
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown className="h-6 w-6" />
      </div>

      <ComingSoonPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default Hero;