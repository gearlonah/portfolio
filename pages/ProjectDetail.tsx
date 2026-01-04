import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Smartphone, PenTool, Layers, LayoutGrid, MousePointer2 } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { projectDatabase, Project, GalleryItem, ProcessStep } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Get specific project or fallback to default
  const project: Project = (id && projectDatabase[id]) ? projectDatabase[id] : projectDatabase["default"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const openLink = (url?: string, type?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert(`${type} prototype coming soon!`);
    }
  };

  // Gallery View for "Other Works"
  if (project.isGallery) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="pt-24 px-6 max-w-7xl mx-auto w-full mb-8">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors uppercase text-sm font-bold tracking-widest"
            >
                <ArrowLeft size={16} /> Back to Projects
            </button>
        </div>

        <section className="px-6 pb-12 max-w-7xl mx-auto w-full">
             <div className="mb-16 border-b border-white/10 pb-12">
                <h1 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6">{project.title}</h1>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">{project.description}</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery?.map((item: GalleryItem, idx: number) => (
                    <div key={idx} className="glass-card p-2 rounded-2xl group hover:border-brand-green/30 transition-colors">
                        <div className="pb-3 px-2 pt-1">
                             <p className="text-white font-bold uppercase tracking-wider text-sm">{item.title}</p>
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full object-cover hover:scale-[1.02] transition-transform duration-500" 
                            />
                        </div>
                    </div>
                ))}
             </div>
        </section>
        <ContactSection />
      </div>
    );
  }

  // Standard Case Study View
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Back Navigation */}
      <div className="pt-24 px-6 max-w-7xl mx-auto w-full">
        <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors uppercase text-sm font-bold tracking-widest"
        >
            <ArrowLeft size={16} /> Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-white/10 pb-12">
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-5xl md:text-8xl font-black uppercase leading-none">
                    {project.displayTitle || project.title}
                </h1>
                <span className="text-brand-green text-xl md:text-2xl font-medium">{project.category} — {project.year}</span>
            </div>
            
            <div className="flex flex-col gap-2 text-right shrink-0">
                <span className="text-gray-400 text-sm uppercase tracking-widest">Role</span>
                <span className="font-bold text-xl md:text-2xl">{project.role}</span>
            </div>
         </div>

         <div className="w-full h-[50vh] md:h-[85vh] rounded-[2rem] overflow-hidden relative group">
            <img 
                src={project.heroImage} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-[center_15%] md:object-[center_28%]" 
            />
            <div className="absolute inset-0 bg-black/20"></div>
         </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
         <div className="md:col-span-2">
            <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <LayoutGrid className="text-brand-green" /> Overview
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
                {project.description}
            </p>
         </div>
         <div className="glass-card p-8 rounded-2xl h-fit">
            <h3 className="text-brand-green uppercase font-bold mb-4 tracking-wider text-sm">Project Brief</h3>
            <div className="flex flex-col gap-6">
                <div>
                    <strong className="block text-white mb-2">The Challenge</strong>
                    <p className="text-sm text-gray-400">{project.challenge}</p>
                </div>
                <div>
                    <strong className="block text-white mb-2">The Solution</strong>
                    <p className="text-sm text-gray-400">{project.solution}</p>
                </div>
            </div>
         </div>
      </section>

      {/* Design Process */}
      {project.process && project.process.length > 0 && (
          <section className="px-6 py-20 bg-white/5 border-y border-white/5">
             <div className="max-w-7xl mx-auto">
                 <h2 className="text-4xl font-black uppercase mb-16 flex items-center gap-4">
                    <Layers className="text-brand-green" /> The Process
                 </h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {project.process.map((step: ProcessStep, idx: number) => (
                        <div key={idx} className="relative p-6 border-l border-brand-green/30 hover:border-brand-green transition-colors">
                            <span className="text-6xl font-black text-white/5 absolute -top-4 -left-4 select-none">0{idx + 1}</span>
                            <h3 className="text-xl font-bold uppercase mb-2 relative z-10">{step.title}</h3>
                            <p className="text-sm text-gray-400 relative z-10">{step.desc}</p>
                        </div>
                    ))}
                 </div>
             </div>
          </section>
      )}

      {/* Tools Section */}
      {project.tools && project.tools.length > 0 && (
          <section className="px-6 py-20 max-w-7xl mx-auto w-full">
             <h2 className="text-3xl font-black uppercase mb-12 flex items-center gap-3">
                <MousePointer2 className="text-brand-green" /> Tools
             </h2>
             <div className="flex flex-wrap gap-16 md:gap-24 items-center">
                {project.tools.map((tool: string, idx: number) => (
                    <div key={idx} className="relative group flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-green/50 group-hover:bg-white/10 transition-all duration-300 shadow-lg cursor-pointer overflow-hidden">
                            {tool === 'Figma' && (
                                <img 
                                    src="https://i.ibb.co/5gQXqFF5/Figma-logo.jpg" 
                                    alt="Figma" 
                                    className="w-full h-full object-cover" 
                                />
                            )}
                            {tool === 'Notion' && (
                                <img 
                                    src="https://i.ibb.co/x9Zn6ZY/Notion-logo.jpg" 
                                    alt="Notion" 
                                    className="w-full h-full object-cover" 
                                />
                            )}
                            {tool === 'Midjourney' && (
                                <img 
                                    src="https://i.ibb.co/4ZVzzcY1/Mid-Journey-logo.jpg" 
                                    alt="Midjourney" 
                                    className="w-full h-full object-cover" 
                                />
                            )}
                            {tool !== 'Figma' && tool !== 'Notion' && tool !== 'Midjourney' && (
                                <PenTool className="w-8 h-8 text-white" />
                            )}
                        </div>
                        <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-300 text-brand-green font-bold uppercase tracking-wider text-sm whitespace-nowrap transform translate-y-2 group-hover:translate-y-0">
                            {tool}
                        </span>
                    </div>
                ))}
             </div>
          </section>
      )}

      {/* Wireframes */}
      {project.wireframes && (
          <section className="px-6 py-20 max-w-7xl mx-auto w-full">
            <div className="mb-12">
                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                    <PenTool className="text-brand-green" /> Wireframes
                </h2>
                <p className="text-gray-400 max-w-2xl">
                    Low-fidelity sketches allowed us to iterate rapidly on the information architecture before committing to pixels.
                </p>
            </div>
            
            <div className="p-4 border border-brand-green/20 rounded-[2rem] bg-brand-green/5">
                <img 
                    src={project.wireframes} 
                    alt="Wireframes" 
                    className="w-full rounded-3xl opacity-80 hover:opacity-100 transition-opacity invert-[.85]" 
                />
            </div>
          </section>
      )}

      {/* High Fidelity Mockups */}
      {project.mockups && project.mockups.length > 0 && (
          <section className="px-6 py-20 max-w-7xl mx-auto w-full">
             <h2 className="text-3xl font-black uppercase mb-12">{project.visualDesignTitle || "Visual Design"}</h2>
             <div className="grid grid-cols-1 gap-8">
                {project.mockups.map((img: string, idx: number) => (
                    <div key={idx} className="glass-card p-2 rounded-3xl">
                        <img src={img} alt={`Mockup ${idx}`} className="w-full rounded-2xl" />
                    </div>
                ))}
             </div>
          </section>
      )}

      {/* Prototype/Live Site CTA */}
      <section className="px-6 py-20 max-w-7xl mx-auto w-full text-center">
         <div className="bg-gradient-to-r from-brand-gray to-black border border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-green/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="bg-brand-green text-black p-4 rounded-full mb-4">
                    <Smartphone size={40} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase">Experience the <br/> {project.liveSiteUrl ? "Live Site" : "Prototype"}</h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-8">
                    {project.liveSiteUrl 
                        ? "Visit the live website to experience the final implementation and user journey in a real-world environment."
                        : "Interact with the live prototype to feel the transitions, micro-interactions, and user flow in real-time."
                    }
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                    {project.liveSiteUrl ? (
                         <Button 
                            variant="primary" 
                            icon 
                            onClick={() => window.open(project.liveSiteUrl, '_blank')}
                        >
                            Visit Website
                        </Button>
                    ) : (
                        <>
                            <Button 
                                variant="primary" 
                                icon 
                                onClick={() => openLink(project.desktopPrototypeUrl, 'Desktop')}
                            >
                                Launch Desk Prototype
                            </Button>
                            <Button 
                                variant="outline"
                                onClick={() => openLink(project.mobilePrototypeUrl, 'Mobile')}
                            >
                                Launch Mob Prototype
                            </Button>
                        </>
                    )}
                </div>
            </div>
         </div>
      </section>

      <ContactSection />
    </div>
  );
};