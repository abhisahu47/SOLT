import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Image as ImageIcon, Video, Folder, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Define the data structure based on the provided file tree
interface MediaItem {
  file: string;
  type: 'image' | 'video';
}

interface Album {
  id: string;
  title: string;
  items: MediaItem[];
}

const BASE_PATH = 'specimenroom';

const ALBUMS: Album[] = [
  {
    id: 'butterflyegg',
    title: 'Butterfly Egg',
    items: [
      { file: '1.jpg', type: 'image' },
      { file: '2.mp4', type: 'video' },
      { file: '3.jpg', type: 'image' },
    ]
  },
  {
    id: 'chrysalis',
    title: 'Chrysalis',
    items: [
      { file: '1.jpg', type: 'image' },
      { file: '2.jpg', type: 'image' },
      { file: '3.jpg', type: 'image' },
      { file: '4.jpg', type: 'image' },
    ]
  },
  {
    id: 'fungi',
    title: 'Fungi',
    items: [
      { file: 'fungusonhibiscus.jpg', type: 'image' },
    ]
  },
  {
    id: 'mosquito',
    title: 'Mosquito',
    items: [
      { file: 'mosquitolarva.jpg', type: 'image' },
    ]
  },
  {
    id: 'moss',
    title: 'Moss',
    items: [
      { file: '1.1.jpg', type: 'image' },
      { file: '1.3.jpg', type: 'image' },
      { file: '1.jpg', type: 'image' },
      { file: '2.1.jpg', type: 'image' },
      { file: '2.2.jpg', type: 'image' },
      { file: '3.jpg', type: 'image' },
    ]
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    items: [
      { file: '1.mp4', type: 'video' },
      { file: '2.mp4', type: 'video' },
      { file: '4.mp4', type: 'video' },
    ]
  },
  {
    id: 'silkworm',
    title: 'Silkworm',
    items: [
      { file: 'silkworm.jpg', type: 'image' },
      { file: 'silkwormegg.jpg', type: 'image' },
    ]
  },
  {
    id: 'stomata',
    title: 'Stomata',
    items: [
      { file: 'stomata1.jpg', type: 'image' },
      { file: 'stomata2.jpg', type: 'image' },
    ]
  },
];

const SpecimenGallery: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const selectedAlbum = ALBUMS.find(a => a.id === selectedAlbumId);

  // Helper to get full URL
  const getUrl = (albumId: string, file: string) => `${BASE_PATH}/${albumId}/${file}`;

  // Helper to get cover image (first image, or first video)
  const getCover = (album: Album) => {
    const firstImage = album.items.find(i => i.type === 'image');
    if (firstImage) return getUrl(album.id, firstImage.file);
    return null; // Fallback handled in UI
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % selectedAlbum.items.length);
    }
  };

  const prevLightboxItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + selectedAlbum.items.length) % selectedAlbum.items.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev! + 1) % selectedAlbum!.items.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev! - 1 + selectedAlbum!.items.length) % selectedAlbum!.items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, selectedAlbum]);

  if (selectedAlbum) {
    // Album View
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
            <button 
              onClick={() => setSelectedAlbumId(null)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-2 text-slate-600"
            >
              <ArrowLeft className="h-5 w-5" /> 
              <span className="font-medium">Back to Albums</span>
            </button>
            <div className="h-6 w-px bg-slate-300 mx-2"></div>
            <h1 className="text-xl font-bold text-slate-900">{selectedAlbum.title}</h1>
          </div>
        </div>

        {/* Media Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {selectedAlbum.items.map((item, idx) => (
               <div 
                 key={idx}
                 onClick={() => openLightbox(idx)}
                 className="group aspect-square relative rounded-xl overflow-hidden bg-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-all border border-slate-100"
               >
                 {item.type === 'image' ? (
                   <img 
                     src={getUrl(selectedAlbum.id, item.file)} 
                     alt={item.file}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center bg-slate-900 group-hover:bg-slate-800 transition-colors">
                      <video 
                        src={getUrl(selectedAlbum.id, item.file)}
                        className="w-full h-full object-cover opacity-60 pointer-events-none"
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                   </div>
                 )}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
               </div>
             ))}
           </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center">
            <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 text-white/70 hover:text-white z-50">
              <X className="h-8 w-8" />
            </button>
            
            <button onClick={prevLightboxItem} className="absolute left-4 p-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50">
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="max-w-5xl max-h-[85vh] w-full px-4 flex items-center justify-center">
               {selectedAlbum.items[lightboxIndex].type === 'image' ? (
                 <img 
                   src={getUrl(selectedAlbum.id, selectedAlbum.items[lightboxIndex].file)}
                   className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
                   alt="Full view"
                 />
               ) : (
                 <video 
                   src={getUrl(selectedAlbum.id, selectedAlbum.items[lightboxIndex].file)}
                   className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
                   controls
                   autoPlay
                 />
               )}
            </div>

            <button onClick={nextLightboxItem} className="absolute right-4 p-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50">
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-sm">
              {lightboxIndex + 1} / {selectedAlbum.items.length}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Albums Grid View (Default)
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ALBUMS.map((album) => {
            const coverUrl = getCover(album);
            const itemCount = album.items.length;
            const hasVideo = album.items.some(i => i.type === 'video');
            
            return (
              <div 
                key={album.id}
                onClick={() => setSelectedAlbumId(album.id)}
                className="group cursor-pointer flex flex-col gap-3"
              >
                {/* Folder/Cover */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200 group-hover:shadow-xl group-hover:border-forest-200 group-hover:-translate-y-1 transition-all duration-300">
                  {coverUrl ? (
                     <img 
                       src={coverUrl} 
                       alt={album.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                      {hasVideo ? <Video className="h-12 w-12 mb-2" /> : <ImageIcon className="h-12 w-12 mb-2" />}
                      <span className="text-xs font-medium">No Preview</span>
                    </div>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white/90">
                    <Folder className="h-4 w-4 fill-white/20" />
                    <span className="text-xs font-medium">{itemCount} items</span>
                  </div>

                  {hasVideo && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <Play className="h-3 w-3 fill-white" />
                    </div>
                  )}
                </div>

                {/* Title */}
                <div>
                   <h3 className="font-bold text-lg text-slate-800 group-hover:text-forest-700 transition-colors">
                     {album.title}
                   </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecimenGallery;