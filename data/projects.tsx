import React from 'react';

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface GalleryItem {
  title: string;
  img: string;
}

export interface Project {
  id: string;
  title: string;
  displayTitle?: React.ReactNode;
  category: string;
  role: string;
  year: string;
  description: string;
  heroImage: string;
  imageClassName?: string;
  challenge?: string;
  solution?: string;
  process?: ProcessStep[];
  tools?: string[];
  wireframes?: string;
  visualDesignTitle?: string;
  mockups?: string[];
  desktopPrototypeUrl?: string;
  mobilePrototypeUrl?: string;
  liveSiteUrl?: string;
  isGallery?: boolean;
  gallery?: GalleryItem[];
}

export const projectDatabase: Record<string, Project> = {
  "nona": {
    id: "nona",
    title: "Nona",
    category: "Food & Bev",
    role: "Lead UI/UX Designer",
    year: "2025",
    description: "Nona is a high-end culinary experience that needed a digital presence matching its physical elegance. The goal was to create a reservation and menu exploration interface that felt as curated as the ingredients used in the kitchen.",
    heroImage: "https://i.ibb.co/chWQJfPg/NONA.png",
    imageClassName: "object-center md:object-[center_35%]",
    challenge: "The restaurant industry often suffers from cluttered, template-based websites. Nona needed to stand out by offering an immersive storytelling experience while maintaining seamless functionality for table bookings.",
    solution: "We designed a dark-themed, image-heavy interface with sophisticated typography. The booking flow was simplified to 3 steps, reducing drop-off rates by 40%.",
    process: [
      { title: "Discover", desc: "Analyzed competitor fine-dining digital experiences to identify gaps in the market." },
      { title: "Define", desc: "Mapped out user flows from 'Hungry' to 'Reserved' and established the visual direction." },
      { title: "Develop", desc: "Created low-fidelity wireframes and iterated on the booking flow hierarchy." },
      { title: "Deliver", desc: "Finalized the 'Noir & Gold' aesthetic into high-fidelity, developer-ready designs." }
    ],
    tools: ["Figma", "Midjourney", "Notion"],
    wireframes: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    visualDesignTitle: "High-fidelity UI Design",
    mockups: [
      "https://i.ibb.co/BKdrXmSJ/Nona-Restaurant-Hi-Fi-UI.png"
    ],
    desktopPrototypeUrl: "",
    mobilePrototypeUrl: ""
  },
  "lap-of-luxury": {
    id: "lap-of-luxury",
    title: "Lap of Luxury",
    category: "Spa & Beauty",
    role: "Product Designer",
    year: "2025",
    description: "A premier destination for luxurious massages, facials, and wellness treatments. The digital platform needed to evoke relaxation before the user even stepped into the spa.",
    heroImage: "https://i.ibb.co/Kp62hLKd/LAP-OF-LUXURY-2.png",
    imageClassName: "object-center md:object-[center_35%]",
    challenge: "Users found the existing booking menu overwhelming due to the sheer number of treatments available.",
    solution: "Implemented a 'Mood-based' filtering system, allowing users to choose treatments based on how they wanted to feel (e.g., 'Rejuvenated', 'Calm', 'Energized').",
    process: [
      { title: "Discover", desc: "Interviewed spa-goers to understand booking anxieties and pain points." },
      { title: "Define", desc: "Organized treatments into intuitive categories using card sorting methods." },
      { title: "Develop", desc: "Prototyped interactions using soft palettes and fluid animations." },
      { title: "Deliver", desc: "Launched a mood-based booking system with a refined visual interface." }
    ],
    tools: ["Figma", "Notion"],
    wireframes: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    visualDesignTitle: "High-fidelity UI Design",
    mockups: [
      "https://i.ibb.co/G39h8QBd/Lap-of-Luxury-Hi-Fi-UI.png"
    ],
    desktopPrototypeUrl: "",
    mobilePrototypeUrl: ""
  },
  "brightbuddies": {
    id: "brightbuddies",
    title: "BrightBuddies",
    displayTitle: <React.Fragment>Bright<span className="inline md:hidden"> </span>Buddies</React.Fragment>,
    category: "EdTech",
    role: "UI Designer",
    year: "2025",
    description: "An engaging educational platform designed to help children master core subjects through gamified learning. The focus was on creating a safe, vibrant, and accessible digital environment.",
    heroImage: "https://i.ibb.co/6GW2q6M/BRIGHTBUDDIES.png",
    imageClassName: "object-center md:object-[center_35%]",
    challenge: "Keeping young learners engaged without overstimulating them, while ensuring parents could easily track progress.",
    solution: "We utilized large touch targets, playful character animations, and a simplified navigation structure. A dedicated parent dashboard was created with clear data visualization.",
    process: [
      { title: "Discover", desc: "Conducted user testing sessions with children aged 6-10." },
      { title: "Define", desc: "Established accessibility standards and character personality requirements." },
      { title: "Develop", desc: "Designed 'Buddy' mascots and gamification systems through iterative sketching." },
      { title: "Deliver", desc: "Polished the high-contrast UI and character animations for final handoff." }
    ],
    tools: ["Figma", "Notion"],
    wireframes: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    visualDesignTitle: "High-fidelity UI Design",
    mockups: [
      "https://i.ibb.co/Kz6h7QYh/Brightbuddies-Hi-Fi-UI.png"
    ],
    desktopPrototypeUrl: "",
    mobilePrototypeUrl: ""
  },
  "ctn-projects": {
    id: "ctn-projects",
    title: "CTN PROJECTS",
    category: "E-commerce",
    role: "UX Researcher",
    year: "2025",
    description: "A comprehensive e-commerce platform designed to offer a seamless shopping experience for a diverse range of products. The redesign focused on optimizing the user journey from discovery to checkout, increasing sales and customer satisfaction.",
    heroImage: "https://i.ibb.co/S48zjCz8/CTN-PROJECTS.png",
    imageClassName: "object-center md:object-[center_35%]",
    challenge: "The previous platform suffered from high cart abandonment rates and poor product discoverability due to a cluttered interface and complex navigation.",
    solution: "We implemented a streamlined checkout process, smart search functionality, and a robust filtering system. A clean, product-first visual design was adopted to build trust and clarity.",
    process: [
      { title: "Discover", desc: "Audited user drop-off points and analyzed behavior in the existing funnel." },
      { title: "Define", desc: "Restructured information architecture and product categories for intuitive browsing." },
      { title: "Develop", desc: "Prototyped the new one-page checkout flow and tested for friction." },
      { title: "Deliver", desc: "Implemented the final modern e-commerce aesthetic and visual design system." }
    ],
    tools: ["Figma", "Notion"],
    wireframes: "https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?q=80&w=2070&auto=format&fit=crop",
    visualDesignTitle: "High-fidelity UI Design",
    mockups: [
      "https://i.ibb.co/pjZYWVz3/CTN-Projects-Hi-Fi-UI.png"
    ],
    desktopPrototypeUrl: "",
    mobilePrototypeUrl: "",
    liveSiteUrl: "https://www.ctnprojects.co.za/"
  },
  "other-works": {
    id: "other-works",
    title: "Other Works",
    category: "Experiments",
    role: "Visual Designer",
    year: "Ongoing",
    description: "A curation of one-off designs, brave experiments, and visual concepts. This collection showcases UI explorations, graphic experiments, and conceptual designs that demonstrate creativity beyond structured case studies.",
    heroImage: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop",
    imageClassName: "object-center",
    isGallery: true,
    gallery: [
        { title: "Email Campaign", img: "https://i.ibb.co/9kjSxXQ9/Email-campaign.png" },
        { title: "Ratings and Reviews", img: "https://i.ibb.co/v4w0CKrS/Ratings-and-reviews.png" },
        { title: "Weather App", img: "https://i.ibb.co/39wbxDqb/Weather-app.png" },
        { title: "Music Player App", img: "https://i.ibb.co/p6LbL7h2/Music-Player-App.png" },
        { title: "Restaurant Website", img: "https://i.ibb.co/mC0pPrqf/Resraurant-website.png" },
        { title: "Order Tracker", img: "https://i.ibb.co/LzmcXk8B/Order-tracker.png" },
        { title: "Online Bookstore", img: "https://i.ibb.co/zhLhyjyZ/Online-bookstore.png" }
    ]
  },
  "default": {
    id: "default",
    title: "Project Showcase",
    category: "UI/UX Design",
    role: "Designer",
    year: "2025",
    description: "This project represents a deep dive into user-centric problem solving. From initial sketches to the final polished interface, every pixel serves a purpose.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    challenge: "Identifying the core user pain points in a saturated market and creating a unique value proposition.",
    solution: "A streamlined, minimal interface that prioritizes content and reduces cognitive load.",
    process: [
      { title: "Discover", desc: "Understanding the user needs through research." },
      { title: "Define", desc: "Structuring the problem statement and core challenge." },
      { title: "Develop", desc: "Brainstorming and prototyping creative solutions." },
      { title: "Deliver", desc: "Finalizing the polished interface for implementation." }
    ],
    tools: ["Figma", "Notion"],
    wireframes: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
    mockups: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    ],
    desktopPrototypeUrl: "",
    mobilePrototypeUrl: ""
  }
};

export const projectsList: Project[] = [
    projectDatabase["nona"],
    projectDatabase["lap-of-luxury"],
    projectDatabase["brightbuddies"],
    projectDatabase["ctn-projects"]
];

export const allProjectsList: Project[] = [
    ...projectsList,
    projectDatabase["other-works"]
];