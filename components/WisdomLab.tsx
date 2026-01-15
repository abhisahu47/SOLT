import React, { useState, useEffect } from 'react';
import { Quote as QuoteIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const quotesData = [
  { 
    id: '1', 
    text: "What you do makes a difference. You have to decide what kind of difference you want to make.", 
    author: "Jane Goodall",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop" // Nature
  },
  { 
    id: '2', 
    text: "Show me what makes you a M/SF/T, and I will show you what makes you necessary.", 
    author: "Jenny Lawson",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=2000" // Unique/Abstract
  },
  { 
    id: '3', 
    text: "Go to bed smarter than when you woke up.", 
    author: "Charlie Munger",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000" // Books/Library
  },
  { 
    id: '4', 
    text: "Knowledge is identifying eggplant as a fruit. Wisdom is not using it in fruit salad.", 
    author: "Author Unknown",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=2000" // Eggplant
  },
  { 
    id: '5', 
    text: "Somewhere, something incredible is waiting to be known.", 
    author: "Carl Sagan",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" // Space
  },
  { 
    id: '6', 
    text: "Your height of aspirations should match with the depth of humiliation and nonsense you are willing to deal.", 
    author: "Author Unknown",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000" // Mountains
  },
  { 
    id: '7', 
    text: 'The most powerful productivity tool ever invented is simply the word "NO"', 
    author: "Author Unknown",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=2000" // Minimal/Focus
  },
  { 
    id: '8', 
    text: "If I were to try to read, much less answer, all the attacks made on me, this shop might as well be closed for any other business. I do the very best I know how, the very best I can; and I mean to keep doing so until the end.", 
    author: "Abraham Lincoln",
    image: "https://images.unsplash.com/photo-1525026198548-4baa812f1183?auto=format&fit=crop&q=80&w=2000" // History
  },
  { 
    id: '9', 
    text: "In my whole life I've never been good at something I wasn't very interested in. It just doesn't work. There's no substitute for strong interest.", 
    author: "Charlie Munger",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000" // Interest/Craft
  },
  { 
    id: '10', 
    text: "Tact is not the quality by which you often please, but by which you seldom offend.", 
    author: "Alice Wellington Rollins",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=2000" // Water/Gentle
  },
  { 
    id: '11', 
    text: "Without courage we cannot practice any other virtue with consistency. We can't be kind, true, merciful, generous, or honest.", 
    author: "Maya Angelou",
    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2000&auto=format&fit=crop" // Nature/Tree/Strength
  },
];

const WisdomLab: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 28 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotesData.length);
    }, 28000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextQuote = () => {
    setActiveIndex((prev) => (prev + 1) % quotesData.length);
  };

  const prevQuote = () => {
    setActiveIndex((prev) => (prev - 1 + quotesData.length) % quotesData.length);
  };

  const currentQuote = quotesData[activeIndex];

  return (
    <section id="wisdom" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        @keyframes zoomSlow {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-zoom-slow {
          animation: zoomSlow 20s infinite alternate linear;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-teal-400 font-semibold tracking-wide uppercase text-xs mb-1">The Wisdom Lab</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Reflections on Life & Science</h3>
        </div>

        {/* Card Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-slate-800">
          
          {/* Background Image Layer */}
          <div key={currentQuote.id + '-bg'} className="absolute inset-0 overflow-hidden">
             <div 
               className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
               style={{ backgroundImage: `url(${currentQuote.image})` }}
             />
             {/* Overlay for text readability */}
             <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-20 text-center z-20">
            <QuoteIcon className="h-12 w-12 text-teal-400 mb-8 opacity-80" />
            
            <div key={currentQuote.id} className="max-w-4xl animate-fade-up">
              <p className="text-2xl md:text-4xl lg:text-5xl font-serif italic leading-relaxed mb-8 text-slate-100 drop-shadow-lg">
                "{currentQuote.text}"
              </p>
              <cite className="text-lg md:text-xl text-teal-300 font-medium not-italic tracking-wide block">
                — {currentQuote.author}
              </cite>
            </div>
          </div>

          {/* Navigation Arrows - Reduced size by ~25% */}
          <button 
            onClick={prevQuote}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all z-30 group-hover:scale-110 hover:border-teal-400/50"
            aria-label="Previous quote"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          
          <button 
            onClick={nextQuote}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all z-30 group-hover:scale-110 hover:border-teal-400/50"
            aria-label="Next quote"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Bottom Dots */}
          <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center z-30">
            <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm overflow-x-auto max-w-[80vw]">
              {quotesData.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 rounded-full shadow-sm flex-shrink-0 ${activeIndex === idx ? 'bg-teal-400 w-6 h-1.5' : 'bg-white/40 w-1.5 h-1.5 hover:bg-white/70'}`}
                  aria-label={`Go to quote ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomLab;