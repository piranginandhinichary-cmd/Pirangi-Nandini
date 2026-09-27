import React, { useState } from 'react';
import { PROJECTS } from '../data/furnituresData';
import { ProjectItem } from '../types';
import { X, ZoomIn, ArrowRight, Layers, Sparkles, Ruler } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProjectForQuote: (projectTitle: string) => void;
}

type CategoryFilter = 'All' | 'Kitchens' | 'Wardrobes' | 'Bedrooms' | 'TV Units' | 'Doors' | 'Custom Furniture';

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Kitchens',
    'Wardrobes',
    'Bedrooms',
    'TV Units',
    'Doors',
    'Custom Furniture'
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((proj) => proj.category === activeCategory);

  const handleInquireFromModal = (project: ProjectItem) => {
    setActiveModalProject(null);
    onSelectProjectForQuote(project.title);
  };

  return (
    <section id="work" className="py-24 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              PORTFOLIO OF CARPENTRY WORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
            OUR CRAFT. YOUR SPACE.
          </h2>
          <p className="text-sm sm:text-base text-[#B3ABA0] leading-relaxed font-light">
            Explore authentic completed carpentry commissions. From seamless architectural wardrobes to heirloom solid wood credenzas, built with unwavering dedication.
          </p>
        </div>

        {/* Category Filter Tabs (Functional segmented controls with clean active state) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#B45309] text-white shadow-lg shadow-[#B45309]/20'
                    : 'bg-[#1C1A18] text-[#9E958A] hover:text-white hover:bg-[#282420] border border-[#2A2622]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative bg-[#181614] rounded-xl overflow-hidden border border-[#2B2723] hover:border-[#B45309]/70 cursor-pointer shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0F0E0D]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom-hover filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-black/20 to-transparent" />

                {/* Category kicker */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-sm border border-[#3E3832] text-[#E5C07B] rounded">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-[#3E3832] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-bold text-white font-serif-heading group-hover:text-[#E5C07B] transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-[#A1998E] line-clamp-2 leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-[#26221E] flex items-center justify-between text-[11px] text-[#8C8377]">
                  <span className="truncate max-w-[190px]">{project.woodType}</span>
                  <span className="text-[#C5A059] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Project Lightbox Viewer Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl bg-[#181614] border border-[#3D352C] rounded-xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col lg:flex-row"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 border border-[#3A342E] text-white hover:bg-black transition-colors focus:outline-none cursor-pointer"
              aria-label="Close project viewer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: High-Res Image Area */}
            <div className="lg:w-7/12 relative min-h-[300px] lg:min-h-full bg-black flex items-center justify-center">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full max-h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Right: Detailed Project Spec Sheet */}
            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#1A1816]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                    {activeModalProject.category}
                  </span>
                  <span className="text-[#4E473E]">·</span>
                  <span className="text-xs text-[#8C8377]">Custom Carpentry</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-serif-heading mb-4 leading-snug">
                  {activeModalProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CDC4B8] leading-relaxed mb-6 font-light">
                  {activeModalProject.description}
                </p>

                {/* Technical Specs Box */}
                <div className="space-y-3 p-4 bg-[#201D1A] rounded-lg border border-[#332D27] mb-6 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Timber & Substrate
                    </span>
                    <span className="font-medium text-white">{activeModalProject.woodType}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Finish & Polish
                    </span>
                    <span className="font-medium text-[#E5C07B]">{activeModalProject.finish}</span>
                  </div>

                  {activeModalProject.dimensions && (
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                        Dimensions / Layout
                      </span>
                      <span className="font-medium text-white">{activeModalProject.dimensions}</span>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Key Engineering Highlight
                    </span>
                    <span className="font-medium text-[#CDC4B8]">{activeModalProject.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Direct CTA Button */}
              <div className="pt-4 border-t border-[#292420] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleInquireFromModal(activeModalProject)}
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#B45309] to-[#92400E] hover:from-[#D97706] hover:to-[#B45309] rounded-md transition-all shadow-lg shadow-[#B45309]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Similar Design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-[#787167]">
                  Dimensions and finishes fully customizable to your residence
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
