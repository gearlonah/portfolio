import React from 'react';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/ProjectCard';
import { Marquee } from '../components/ui/Marquee';
import { useNavigate } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { projectsList, Project } from '../data/projects';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full text-left z-10">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.9] mb-8">
              UI/UX <span className="text-white">Designer</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12">
                <p className="text-gray-400 font-bold tracking-[0.2em] text-sm md:text-base uppercase text-left">
                    Empathy | Strategy | Usability | Impact | Clarity
                </p>
            </div>

            <div className="flex justify-start gap-4">
                <Button variant="primary" icon onClick={() => navigate('/contact')}>Start Conversation</Button>
            </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-green/20 blur-[150px] rounded-full pointer-events-none -z-10 opacity-30 animate-pulse"></div>
      </section>

      {/* Certification Badges Belt */}
      <div className="w-full border-y border-white/10 bg-white/5 backdrop-blur-md z-20 relative">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            
            {/* Badge 1 - UX Design */}
            <div className="flex items-center gap-4 group w-full md:w-auto justify-start">
                <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-brand-green/50 transition-colors relative overflow-hidden shrink-0">
                    <img 
                      src="https://i.ibb.co/XrFtpCHL/GOOGLE-UIUX-DESIGN-PROFESSIONAL-CERTIFICATE.png" 
                      alt="Google UX Design Certificate" 
                      className="w-full h-full object-cover p-1.5"
                    />
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-white font-bold uppercase tracking-wider text-sm md:text-base">UI/UX Design</span>
                    <span className="text-brand-green text-[10px] md:text-xs uppercase tracking-widest opacity-80">Professional Certificate</span>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-white/10"></div>

            {/* Badge 2 - AI Essentials */}
            <div className="flex items-center gap-4 group w-full md:w-auto justify-start">
                <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-brand-green/50 transition-colors relative overflow-hidden shrink-0">
                     <img 
                      src="https://i.ibb.co/ycGmZnX9/GOOGLE-AI-ESSENTIALS-BADGE.png" 
                      alt="Google AI Essentials Certificate" 
                      className="w-full h-full object-cover p-1.5"
                    />
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-white font-bold uppercase tracking-wider text-sm md:text-base">AI Essentials</span>
                    <span className="text-brand-green text-[10px] md:text-xs uppercase tracking-widest opacity-80">Certified</span>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-white/10"></div>

            {/* Badge 3 - Project Management */}
            <div className="flex items-center gap-4 group w-full md:w-auto justify-start">
                <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-brand-green/50 transition-colors relative overflow-hidden shrink-0">
                    <img 
                      src="https://i.ibb.co/QvRWS80d/PROJECT-MANAGEMENT-BADGE.png" 
                      alt="PMI Kickoff Certificate" 
                      className="w-full h-full object-contain rounded-full p-1"
                    />
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-white font-bold uppercase tracking-wider text-sm md:text-base">Project Management</span>
                    <span className="text-brand-green text-[10px] md:text-xs uppercase tracking-widest opacity-80">Professional Certificate</span>
                </div>
            </div>

        </div>
      </div>

      {/* Intro Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-gray-400">Design Experiences <br/> You Can See And Feel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
                <div className="absolute -inset-1 bg-brand-green/30 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <img 
                    src="https://i.ibb.co/mCYR3Xd4/Gearlonah-s-Image.jpg" 
                    alt="Gearlonah" 
                    className="relative rounded-[2rem] w-full object-cover object-top aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>
            
            <div className="flex flex-col gap-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                    I help brands share their story clearly. By combining <strong className="text-white">empathy</strong> for the user with <strong className="text-white">strategy</strong> for the client, I create experiences that are not only <strong className="text-white">usable</strong> but leave a lasting <strong className="text-white">impact</strong>.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                    From first click to last scroll, I simplify complexity with <strong className="text-white">clarity</strong>, making every interaction feel effortless. Whether we're launching something new or refining what already exists, I design experiences that connect people to your brand.
                </p>
                <div className="pt-4">
                     <Button variant="primary" icon onClick={() => navigate('/process')}>Our Process</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-400">Projects</h2>
            <Button variant="outline" className="hidden md:flex" onClick={() => navigate('/projects')}>View All Work</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
            {projectsList.map((project: Project) => (
                <ProjectCard 
                    key={project.id}
                    id={project.id}
                    title={project.title} 
                    category={project.category} 
                    image={project.heroImage}
                    imageClassName={project.imageClassName}
                    desktopPrototypeUrl={project.desktopPrototypeUrl}
                    mobilePrototypeUrl={project.mobilePrototypeUrl}
                    liveSiteUrl={project.liveSiteUrl}
                />
            ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
            <Button variant="outline" onClick={() => navigate('/projects')}>View All Work</Button>
        </div>
      </section>

      {/* Design Strip (Marquee) */}
      <Marquee items={["Empathy", "Strategy", "Usability", "Impact", "Clarity"]} />

      <ContactSection />
    </div>
  );
};