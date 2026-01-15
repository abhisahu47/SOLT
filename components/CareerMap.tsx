import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CareerMap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 z-10 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-slate-700" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Career Roadmap</h1>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-grow w-full h-full bg-slate-50">
        <iframe 
          src="/career_map.html" 
          title="Career Roadmap Visualization"
          width="100%"
          height="100%"
          style={{ border: 'none' }} 
        />
      </div>
    </div>
  );
};

export default CareerMap;