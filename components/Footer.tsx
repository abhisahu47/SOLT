import React from 'react';
import { Microscope, Mail, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Microscope className="h-6 w-6" />
              <span className="font-bold text-xl tracking-tight">SOLT</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Science of Living Things is an educational initiative dedicated to making biology accessible, engaging, and beautiful.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-forest-400 transition-colors">About</a></li>
              <li><a href="#wisdom" className="hover:text-forest-400 transition-colors">Wisdom Lab</a></li>
              <li><a href="#specimen" className="hover:text-forest-400 transition-colors">Student Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              © {new Date().getFullYear()} SOLT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;