import React from 'react';
import { X, Hammer } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const ComingSoonPopup: React.FC<Props> = ({ 
  isOpen, 
  onClose,
  title = "Work in Progress",
  message = "We are currently crafting a comprehensive Career Roadmap to guide your scientific journey. Check back soon!"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 transform transition-all scale-100 opacity-100 animate-scale-in">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
            <Hammer className="h-6 w-6" />
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {message}
        </p>
        
        <button 
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-forest-600 text-white font-bold hover:bg-forest-700 transition-colors shadow-lg shadow-forest-200"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default ComingSoonPopup;