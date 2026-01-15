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
          src="https://drive.google.com/uc?export=view&id=1r3zqYg6aDupnrRQYTbl3DJSn09Mlv4oC" 
          alt="Microscopic leaf cell structure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-forest-300 font-medium tracking-widest text-sm md:text-base mb-4 uppercase">
          Explore the Micro, Understand the Macro
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Science of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-teal-200">
            Living Things
          </span>
        </h1>
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