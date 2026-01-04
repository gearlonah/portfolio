import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-green selection:text-black relative overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-50"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="text-2xl md:text-3xl font-black tracking-tighter uppercase z-50 relative text-white" onClick={closeMenu}>
            GEARLONAH
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-2 py-2">
            {[
              { path: '/projects', label: 'Projects' },
              { path: '/process', label: 'Process' },
            ].map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => `px-6 py-2 rounded-full text-sm font-medium transition-all ${isActive ? 'bg-white text-black' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                {link.label}
              </NavLink>
            ))}
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              Resume
            </a>

            <NavLink to="/contact" className={({ isActive }) => `ml-2 px-6 py-2 rounded-full border border-white text-sm font-medium transition-colors ${isActive ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>
              CONTACT
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden z-50 p-2 bg-white/10 rounded-full backdrop-blur-md">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {[
           { path: '/', label: 'Home' },
           { path: '/projects', label: 'Projects' },
           { path: '/process', label: 'Process' },
        ].map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            onClick={closeMenu}
            className="text-2xl font-black uppercase tracking-widest text-white hover:text-brand-green transition-colors"
          >
            {link.label}
          </NavLink>
        ))}

        {/* Resume Link */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="text-2xl font-black uppercase tracking-widest text-white hover:text-brand-green transition-colors"
        >
          Resume
        </a>

        <NavLink to="/contact" onClick={closeMenu} className="mt-8 px-8 py-3 bg-brand-green text-black rounded-full font-bold uppercase">
          Start Conversation
        </NavLink>
      </div>

      {/* Main Content */}
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>

      {/* Global Footer Section */}
      <Footer />
    </div>
  );
};