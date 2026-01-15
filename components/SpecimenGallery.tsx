import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { SpecimenModule } from '../types';

const specimens: SpecimenModule[] = [
  {
    id: '1',
    title: 'Plant Cell Architecture',
    description: 'Examining the rigid cell wall, chloroplasts, and large central vacuole typical of plant cells. Note the geometric arrangement.',
    imageUrl: 'https://picsum.photos/seed/plantcell/600/600',
    type: 'Slide'
  },
  {
    id: '2',
    title: 'Mitosis in Onion Root',
    description: 'Stages of cell division arrested and stained for high-contrast visibility of chromosomes. Can you spot Anaphase?',
    imageUrl: 'https://picsum.photos/seed/mitosis/600/600',
    type: 'Slide'
  },
  {
    id: '3',
    title: 'Pond Water Microcosm',
    description: 'A look at the diverse protozoa and algae found in a single drop of freshwater. A bustling ecosystem in miniature.',
    imageUrl: 'https://picsum.photos/seed/pond/600/600',
    type: 'Slide'
  },
  {
    id: '4',
    title: 'Muscle Tissue Striations',
    description: 'Skeletal muscle fibers showing characteristic striations formed by actin and myosin filaments.',
    imageUrl: 'https://picsum.photos/seed/muscle/600/600',
    type: 'Slide'
  },
  {
    id: '5',
    title: 'Nerve Neuron Network',
    description: 'A complex web of neurons showing dendrites and axons responsible for signal transmission.',
    imageUrl: 'https://picsum.photos/seed/neuron/600/600',
    type: 'Slide'
  },
  {
    id: '6',
    title: 'Stomata on Leaf Surface',
    description: 'Microscopic pores on the leaf epidermis that regulate gas exchange and transpiration.',
    imageUrl: 'https://picsum.photos/seed/leaf/600/600',
    type: 'Slide'
  }
];

const SpecimenGallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-slate-700" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Specimen & Slide Gallery</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specimens.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group">
              <div className="relative aspect-square overflow-hidden bg-slate-200">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                    <ZoomIn className="h-4 w-4" /> View Detail
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecimenGallery;