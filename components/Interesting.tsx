import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

const Interesting: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full mb-8 shadow-2xl border border-white/10">
          <Clock className="h-12 w-12 text-forest-300" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Coming Soon
        </h1>
        
        <p className="text-slate-400 text-xl max-w-lg mx-auto mb-12 font-light">
          We are brewing something fascinating in the lab. Stay tuned for mind-bending facts and scientific wonders.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 rounded-full bg-forest-600 hover:bg-forest-500 text-white font-medium transition-all flex items-center gap-2 mx-auto"
        >
          <ArrowLeft className="h-5 w-5" /> Return to Base
        </button>
      </div>
    </div>
  );
};

export default Interesting;