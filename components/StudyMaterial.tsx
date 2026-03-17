import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, FileText, Download, ExternalLink } from 'lucide-react';

const class11Chapters = [
  "The Living World",
  "Biological Classification",
  "Plant Kingdom",
  "Animal Kingdom",
  "Morphology of Flowering Plants",
  "Anatomy of Flowering Plants",
  "Structural Organisation in Animals",
  "Cell: The Unit of Life",
  "Biomolecules",
  "Cell Cycle and Cell Division",
  "Photosynthesis in Higher Plants",
  "Respiration in Plants",
  "Plant Growth and Development",
  "Breathing and Exchange of Gases",
  "Body Fluids and Circulation",
  "Excretory Products and their Elimination",
  "Locomotion and Movement",
  "Neural Control and Coordination",
  "Chemical Coordination and Integration"
];

const class12Chapters = [
  "Sexual Reproduction in Flowering Plants",
  "Human Reproduction",
  "Reproductive Health",
  "Principles of Inheritance and Variation",
  "Molecular Basis of Inheritance",
  "Evolution",
  "Human Health and Diseases",
  "Microbes in Human Welfare",
  "Biotechnology - Principles and Processes",
  "Biotechnology and its Applications",
  "Organisms and Populations",
  "Ecosystem",
  "Biodiversity and its Conservation"
];

const pdfFiles = import.meta.glob('/public/CBSE Study Material/**/*.pdf');
const availableChapters = new Set(
  Object.keys(pdfFiles).map(path => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.pdf', '');
  })
);

const StudyMaterial: React.FC = () => {
  const navigate = useNavigate();
  const [grade, setGrade] = useState<'11' | '12'>('11');

  const currentChapters = grade === '11' ? class11Chapters : class12Chapters;

  const handleChapterClick = (chapterName: string) => {
    if (availableChapters.has(chapterName)) {
      const link = `/CBSE Study Material/${grade}/${chapterName}.pdf`;
      window.open(link, '_blank');
    } else {
      alert("Study material for this chapter is coming soon!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-slate-700" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">CBSE Study Material</h1>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Class Selection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm inline-flex">
            <button
              onClick={() => setGrade('11')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                grade === '11' 
                  ? 'bg-forest-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Class 11th
            </button>
            <button
              onClick={() => setGrade('12')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                grade === '12' 
                  ? 'bg-forest-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Class 12th
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar / Info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-forest-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Biology {grade === '11' ? 'XI' : 'XII'}</h3>
              <p className="text-sm text-slate-500 mb-4">
                Official CBSE curriculum compliant notes and study guides.
              </p>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-forest-500 transition-all duration-500" 
                  style={{ width: `${(currentChapters.filter(c => availableChapters.has(c)).length / currentChapters.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {currentChapters.filter(c => availableChapters.has(c)).length} of {currentChapters.length} Chapters Available
              </p>
            </div>
          </div>

          {/* Chapter List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                 <h2 className="font-bold text-lg text-slate-800">Chapter List</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {currentChapters.map((chapter, index) => {
                  const isAvailable = availableChapters.has(chapter);
                  return (
                    <div 
                      key={index} 
                      onClick={() => handleChapterClick(chapter)}
                      className={`p-6 transition-colors flex items-center justify-between group ${
                        isAvailable ? 'hover:bg-forest-50 cursor-pointer' : 'opacity-70 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                          isAvailable 
                            ? 'bg-forest-100 text-forest-700 group-hover:bg-forest-200' 
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className={`font-semibold transition-colors ${
                            isAvailable ? 'text-slate-800 group-hover:text-forest-700' : 'text-slate-600'
                          }`}>
                            {chapter}
                          </h4>
                          <p className="text-xs text-slate-400">
                            {isAvailable ? 'Available Now' : 'Coming soon'}
                          </p>
                        </div>
                      </div>
                      <button className={`p-2 transition-colors ${
                        isAvailable ? 'text-forest-600' : 'text-slate-300'
                      }`}>
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;