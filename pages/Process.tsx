import React from 'react';
import { ContactSection } from '../components/ContactSection';

const steps = [
    {
        id: "01",
        title: "Discover",
        desc: "This phase focuses on understanding the user and the problem space. Through research and observation, key insights emerge that reveal real needs, challenges, and opportunities to guide the design direction.",
        tags: ["User interviews", "Surveys & market research", "Competitive analysis", "Observing user journeys"]
    },
    {
        id: "02",
        title: "Define",
        desc: "Insights from discovery are organized into a clear design challenge. This phase brings alignment and clarity, shaping the problem statement and setting a focused direction for the solution.",
        tags: ["Affinity mapping", "Persona development", "Journey mapping", "Problem statement & design goals"]
    },
    {
        id: "03",
        title: "Develop",
        desc: "Multiple ideas are explored, prototyped, and tested. Feedback and iteration help refine concepts and reveal the strongest solution that best meets user needs.",
        tags: ["Sketching & ideation", "Wireframing", "Interactive prototyping", "Usability testing & iteration"]
    },
    {
        id: "04",
        title: "Deliver",
        desc: "Validated concepts are turned into polished, high-fidelity designs. Final refinement and testing ensure the solution is consistent, intuitive, and ready for implementation.",
        tags: ["High fidelity UI design", "Design system components", "Developer handoff", "Final QA & refinement"]
    }
];

export const Process: React.FC = () => {
  return (
    <div className="pt-10">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-8xl font-black uppercase text-white mb-6">The <span className="text-brand-green">Process</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                My process follows the Double Diamond framework, moving from understanding the problem to refining the solution. It starts with exploring user needs, defining the core challenge, then developing and delivering designs that are tested, thoughtful, and user-focused.
            </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-green to-transparent -translate-x-1/2 opacity-30"></div>

            <div className="flex flex-col gap-28 md:gap-40 relative">
                {steps.map((step, idx) => (
                    <div key={step.id} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Visual/Number Side */}
                        <div className="flex-1 flex justify-center md:justify-end items-center relative">
                            <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative z-10 group hover:border-brand-green transition-colors duration-500`}>
                                <span className="text-4xl md:text-6xl font-black text-white/20 group-hover:text-brand-green transition-colors">{step.id}</span>
                                {/* Glow */}
                                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                            {/* Connection dot for desktop timeline */}
                            <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-brand-green rounded-full shadow-[0_0_10px_#C6F975] z-20 ${idx % 2 === 0 ? 'right-[-3rem] translate-x-1/2' : 'left-[-3rem] -translate-x-1/2'}`}></div>
                        </div>

                        {/* Spacer for timeline */}
                        <div className="w-0 md:w-24"></div>

                        {/* Content Side */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-bold uppercase mb-4 text-white">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {step.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {step.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs border border-white/10 rounded-full text-brand-green uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <div className="mt-20">
         <ContactSection />
      </div>
    </div>
  );
};