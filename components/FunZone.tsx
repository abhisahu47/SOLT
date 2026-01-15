import React from 'react';
import { ExternalLink, Scale, CheckSquare, Anchor, Activity, Clock, Lock, Rocket } from 'lucide-react';

const funLinks = [
  { title: "Size of Life", url: "https://neal.fun/size-of-life/", icon: Scale, color: "bg-emerald-500", desc: "Scale of the universe" },
  { title: "Life Checklist", url: "https://neal.fun/life-checklist/", icon: CheckSquare, color: "bg-teal-500", desc: "How many have you done?" },
  { title: "The Deep Sea", url: "https://neal.fun/deep-sea/", icon: Anchor, color: "bg-blue-600", desc: "Scroll to the bottom" },
  { title: "Your Life Stats", url: "https://neal.fun/life-stats/", icon: Activity, color: "bg-rose-500", desc: "You in numbers" },
  { title: "Where does the day go?", url: "https://neal.fun/where-does-the-day-go/", icon: Clock, color: "bg-violet-500", desc: "Visualizing time" },
  { title: "The Password Game", url: "https://neal.fun/password-game/", icon: Lock, color: "bg-slate-700", desc: "Good luck" },
  { title: "Space Elevator", url: "https://neal.fun/space-elevator/", icon: Rocket, color: "bg-indigo-600", desc: "Going up" },
];

const FunZone: React.FC = () => {
  return (
    <section id="funzone" className="py-10 bg-slate-50 border-t border-slate-200">
       <style>{`
         .funzone-scrollbar::-webkit-scrollbar {
           height: 8px;
         }
         .funzone-scrollbar::-webkit-scrollbar-track {
           background: transparent;
           margin: 0 4px;
         }
         .funzone-scrollbar::-webkit-scrollbar-thumb {
           background-color: #cbd5e1; /* slate-300 */
           border-radius: 20px;
           border: 2px solid #f8fafc; /* Matches bg-slate-50 for padding effect */
         }
         .funzone-scrollbar::-webkit-scrollbar-thumb:hover {
           background-color: #94a3b8; /* slate-400 */
         }
         /* Firefox Support */
         .funzone-scrollbar {
           scrollbar-width: thin;
           scrollbar-color: #cbd5e1 transparent;
         }
       `}</style>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-orange-100 p-2 rounded-lg">
                <Rocket className="h-5 w-5 text-orange-600" />
             </div>
             <h3 className="text-xl font-bold text-slate-800">Fun Zone</h3>
             <div className="h-px flex-grow bg-slate-200 ml-4"></div>
             <span className="text-xs text-slate-400 font-medium uppercase tracking-wider hidden sm:block">Curated from neal.fun</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 funzone-scrollbar">
            {funLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 group relative flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl ${item.color}`}></div>
                
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-sm ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                   <item.icon className="h-6 w-6" />
                </div>
                
                {/* Text */}
                <div className="min-w-0">
                   <h4 className="font-bold text-slate-800 text-sm truncate group-hover:text-slate-900">{item.title}</h4>
                   <p className="text-xs text-slate-500 truncate mb-1">{item.desc}</p>
                   <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide flex items-center gap-1 group-hover:text-slate-600">
                     Open <ExternalLink className="h-2.5 w-2.5" />
                   </span>
                </div>
              </a>
            ))}
          </div>
       </div>
    </section>
  );
};

export default FunZone;