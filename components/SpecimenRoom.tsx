import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Microscope, BookOpen, Sparkles, ArrowRight, Map } from 'lucide-react';
import ComingSoonPopup from './ComingSoonPopup';

const SpecimenRoom: React.FC = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="specimen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-forest-600 font-semibold tracking-wide uppercase text-sm mb-2">Knowledge Hub</h2>
          <h3 className="text-4xl font-bold text-slate-900">Student Resources</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Access curated materials, digital specimens, and career guidance designed to boost your biology journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Specimen & Slides */}
          <div 
            onClick={() => navigate('/gallery')}
            className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-forest-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-forest-100 flex items-center justify-center mb-6 group-hover:bg-forest-200 transition-colors">
              <Microscope className="h-10 w-10 text-forest-700" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Specimens & Slides</h4>
            <p className="text-slate-600 text-sm mb-8 flex-grow">
              Explore our digital archive of microscopic slides and biological specimens.
            </p>
            <span className="text-forest-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Enter Gallery <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          {/* Card 2: Study Material */}
          <div 
            onClick={() => navigate('/study')}
            className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-forest-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
              <BookOpen className="h-10 w-10 text-teal-700" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">CBSE Study Material</h4>
            <p className="text-slate-600 text-sm mb-8 flex-grow">
              Comprehensive resources for Class 11th and 12th students.
            </p>
            <span className="text-teal-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Start Studying <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          {/* Card 3: Career Map */}
          <div 
            onClick={() => window.open('career_map.html', '_blank')}
            className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-forest-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
              <Map className="h-10 w-10 text-orange-700" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Career Roadmap</h4>
            <p className="text-slate-600 text-sm mb-8 flex-grow">
              Visualize your future pathways in science and beyond.
            </p>
            <span className="text-orange-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Explore Paths <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          {/* Card 4: Something Interesting */}
          <div 
            onClick={() => navigate('/interesting')}
            className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-forest-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <Sparkles className="h-10 w-10 text-indigo-700" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">Something Interesting</h4>
            <p className="text-slate-600 text-sm mb-8 flex-grow">
              Discover weird facts, recent breakthroughs, and scientific wonders.
            </p>
            <span className="text-indigo-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Surprise Me <ArrowRight className="h-4 w-4" />
            </span>
          </div>

        </div>
      </div>
      
      <ComingSoonPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default SpecimenRoom;