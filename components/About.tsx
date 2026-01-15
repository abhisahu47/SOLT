import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import ComingSoonPopup from './ComingSoonPopup';

// Using raw GitHub URLs for profile images
const profileImages = [
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic1.png?raw=true",
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic2.png?raw=true",
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic3.png?raw=true",
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic4.png?raw=true",
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic5.png?raw=true",
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic6.png?raw=true",
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic7.png?raw=true",
  "https://github.com/abhisahu47/SOLT.github.io/blob/main/public/profilepic/Profilepic8.png?raw=true",
];

const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showResumePopup, setShowResumePopup] = useState(false);

  // Auto-rotate every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % profileImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + profileImages.length) % profileImages.length);
  };

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left Column: Circular Profile Image with Carousel */}
          <div className="relative shrink-0 group">
             {/* Decorative subtle shadow/offset circle */}
             <div className="absolute inset-0 bg-forest-200 rounded-full blur-sm transform translate-x-4 translate-y-4"></div>
             
             <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full shadow-2xl border-4 border-white overflow-hidden bg-slate-200">
               <img 
                 src={profileImages[currentImage]} 
                 alt="Scientist Profile" 
                 className="w-full h-full object-cover transition-all duration-500"
               />

               {/* Navigation Controls (Visible on Hover) */}
               <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <button 
                   onClick={(e) => { e.preventDefault(); prevImage(); }}
                   className="p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all"
                   aria-label="Previous image"
                 >
                   <ChevronLeft className="h-6 w-6" />
                 </button>
                 <button 
                   onClick={(e) => { e.preventDefault(); nextImage(); }}
                   className="p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all"
                   aria-label="Next image"
                 >
                   <ChevronRight className="h-6 w-6" />
                 </button>
               </div>

               {/* Progress Dots */}
               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 {profileImages.map((_, idx) => (
                   <div 
                     key={idx} 
                     className={`h-1.5 rounded-full transition-all shadow-sm ${idx === currentImage ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`}
                   />
                 ))}
               </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tight">
              Hello
            </h1>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              A Bit About Me
            </h2>
            
            <div className="prose prose-slate text-slate-600 mb-10 mx-auto lg:mx-0 leading-relaxed">
              <p className="mb-4">
                I’m not the fastest, smartest, or any kind of “-est.” I’m just a regular fella trying to be useful and make a positive impact, however small.
              </p>
              <p className="mb-4">
                My fascination with how life actually works led me into Life Science-looking at the macro through the lens of the micro (and the physics and chemistry behind it). Currently, I’m deep-diving into how AI is going to reshape molecular design and structural biology.
              </p>
              <p>
                P.S. By day, I work as a teacher (so I’m used to explaining things).
              </p>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8">
               
               {/* Resume - Forest Green Accent */}
               <button 
                 onClick={() => setShowResumePopup(true)}
                 className="w-32 h-32 rounded-full bg-forest-300 hover:bg-forest-400 text-forest-900 font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-4 border-white"
               >
                 Resume
               </button>

               {/* Social Links */}
               <div className="flex flex-col justify-center gap-4">
                 <h3 className="text-slate-400 font-medium uppercase tracking-widest text-sm text-center sm:text-left">Connect</h3>
                 <div className="flex gap-4">
                   <a 
                     href="https://x.com/AbhinandanaSahu" 
                     target="_blank" 
                     rel="noreferrer"
                     className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-slate-600 hover:text-sky-500 transition-all border border-slate-100"
                     aria-label="Twitter"
                   >
                     <Twitter className="h-5 w-5" />
                   </a>
                   <a 
                     href="https://instagram.com" 
                     target="_blank" 
                     rel="noreferrer"
                     className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-slate-600 hover:text-pink-600 transition-all border border-slate-100"
                     aria-label="Instagram"
                   >
                     <Instagram className="h-5 w-5" />
                   </a>
                   <a 
                     href="https://www.linkedin.com/in/abhinandanasahu" 
                     target="_blank" 
                     rel="noreferrer"
                     className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-slate-600 hover:text-blue-700 transition-all border border-slate-100"
                     aria-label="LinkedIn"
                   >
                     <Linkedin className="h-5 w-5" />
                   </a>
                   <a 
                     href="https://github.com" 
                     target="_blank" 
                     rel="noreferrer"
                     className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-slate-600 hover:text-slate-900 transition-all border border-slate-100"
                     aria-label="GitHub"
                   >
                     <Github className="h-5 w-5" />
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <ComingSoonPopup 
        isOpen={showResumePopup} 
        onClose={() => setShowResumePopup(false)} 
        title="Resume"
        message="I am working on it"
      />
    </section>
  );
};

export default About;