import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pb-10 overflow-hidden">
        <div className="px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto">
          {/* Bottom Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-t border-white/10 pt-8">
            <div className="flex gap-4">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gearlonah.phakoago@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded hover:bg-brand-green transition-colors"><Mail size={20}/></a>
                <a href="https://www.linkedin.com/in/gearlonah-phakoago-774309241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded hover:bg-brand-green transition-colors"><Linkedin size={20}/></a>
            </div>
            
            <div className="flex flex-col gap-1 text-xs text-gray-400">
                <strong className="text-white uppercase tracking-wider mb-2">Reach Out</strong>
                <span>gearlonah.phakoago@gmail.com</span>
                <span>071 453 9380</span>
            </div>

            <div className="flex flex-col gap-1 text-xs text-gray-400">
                <strong className="text-white uppercase tracking-wider mb-2">Quick Links</strong>
                <Link to="/" className="hover:text-brand-green">Home</Link>
                <Link to="/projects" className="hover:text-brand-green">Projects</Link>
                <Link to="/contact" className="hover:text-brand-green">Contact</Link>
            </div>

            <div className="text-xs text-gray-500">
                © 2025 GEARLONAH. All Rights Reserved
            </div>
          </div>
      </div>

      {/* Massive Name Logo */}
      <div className="w-full overflow-hidden leading-none mt-10">
        <h1 className="text-[16vw] font-black text-center text-white tracking-tighter select-none whitespace-nowrap">
            GEARLONAH
        </h1>
      </div>
    </footer>
  );
};