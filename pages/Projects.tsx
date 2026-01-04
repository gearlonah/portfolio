import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ContactSection } from '../components/ContactSection';
import { allProjectsList, Project } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className="pt-10">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="mb-20">
            <h1 className="text-5xl md:text-8xl font-black uppercase text-brand-green mb-6">Portfolio</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                A curation of my best work in product design, showing the journey from chaotic problems to clean, elegant solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {allProjectsList.map((project: Project, idx: number) => (
                <div key={project.id} className={`${idx % 2 === 1 ? 'md:mt-20' : ''}`}>
                    <ProjectCard 
                        id={project.id}
                        title={project.title}
                        category={project.category}
                        image={project.heroImage}
                        imageClassName={project.imageClassName}
                        desktopPrototypeUrl={project.desktopPrototypeUrl}
                        mobilePrototypeUrl={project.mobilePrototypeUrl}
                        liveSiteUrl={project.liveSiteUrl}
                    />
                </div>
            ))}
        </div>
      </div>
      <div className="mt-20">
         <ContactSection />
      </div>
    </div>
  );
};