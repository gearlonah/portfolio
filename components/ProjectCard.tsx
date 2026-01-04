import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id: string; // Added ID prop for consistent navigation
  title: string;
  category: string;
  image: string;
  imageClassName?: string;
  desktopPrototypeUrl?: string;
  mobilePrototypeUrl?: string;
  liveSiteUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id,
  title, 
  category, 
  image, 
  imageClassName = '',
  desktopPrototypeUrl,
  mobilePrototypeUrl,
  liveSiteUrl
}) => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/projects/${id}`);
  };

  const openLink = (url?: string, type?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert(`${type} prototype coming soon!`);
    }
  };

  return (
    <div 
      className="glass-card rounded-[2rem] p-3 flex flex-col gap-4 group hover:border-brand-green/50 focus:border-brand-green/50 active:border-brand-green/50 transition-colors duration-500 outline-none"
      tabIndex={0}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-2">
        <h3 className="text-white font-bold tracking-wider uppercase">{title}</h3>
        <span className="text-gray-400 text-xs uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">{category}</span>
      </div>

      {/* Image Area */}
      <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/50">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105 ${imageClassName}`}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        {/* Content Container */}
        <div className="absolute inset-x-0 bottom-0 p-2 flex flex-col items-start justify-end h-full pointer-events-none">
             
             {/* Text that moves up */}
             <div className="transform transition-transform duration-500 group-hover:-translate-y-32 will-change-transform z-10 w-full px-2">
                <h4 className="text-white font-bold tracking-wider uppercase text-left">Experience Design</h4>
             </div>

             {/* Buttons that appear at the bottom */}
             <div className="absolute bottom-4 left-0 w-full px-2 grid grid-cols-2 gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 pointer-events-auto">
                {liveSiteUrl ? (
                  <button 
                    onClick={() => window.open(liveSiteUrl, '_blank')}
                    className="col-span-2 w-full py-3 px-1 rounded-full bg-brand-green text-black text-[10px] uppercase font-bold tracking-wider hover:bg-white transition-colors shadow-[0_0_15px_rgba(198,249,117,0.3)] whitespace-nowrap"
                  >
                    View Live Site
                  </button>
                ) : (
                  <>
                    <button 
                      onClick={() => openLink(desktopPrototypeUrl, 'Desktop')}
                      className="w-full py-3 px-1 rounded-full bg-brand-green text-black text-[10px] uppercase font-bold tracking-wider hover:bg-white transition-colors shadow-[0_0_15px_rgba(198,249,117,0.3)] whitespace-nowrap"
                    >
                      Desk Prototype
                    </button>
                    <button 
                      onClick={() => openLink(mobilePrototypeUrl, 'Mobile')}
                      className="w-full py-3 px-1 rounded-full bg-brand-green text-black text-[10px] uppercase font-bold tracking-wider hover:bg-white transition-colors shadow-[0_0_15px_rgba(198,249,117,0.3)] whitespace-nowrap"
                    >
                      Mob Prototype
                    </button>
                  </>
                )}
                <button 
                  onClick={handleViewProject}
                  className="col-span-2 w-full py-3 rounded-full border border-white/20 text-[10px] uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md whitespace-nowrap"
                >
                  View Project
                </button>
             </div>
        </div>
      </div>
    </div>
  );
};