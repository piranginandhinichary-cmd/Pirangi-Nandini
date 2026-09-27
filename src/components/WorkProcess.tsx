import React, { useState } from 'react';
import { WORK_PROCESS } from '../data/furnituresData';
import { CheckCircle2, ArrowRight, Clock, ChevronDown } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#141211] border-t border-[#26221E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              HOW WE WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
            OUR CARPENTRY PROCESS
          </h2>
          <p className="text-sm sm:text-base text-[#ADA59B] leading-relaxed font-light">
            A structured, transparent six-stage workflow ensuring your custom woodwork is delivered with zero surprises, flawless measurements, and heirloom finishing.
          </p>
        </div>

        {/* Timeline Grid (Desktop & Tablet) */}
        <div className="relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B45309]/20 via-[#B45309]/50 to-[#B45309]/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {WORK_PROCESS.map((proc, index) => {
              const isSelected = activeStepIndex === index;
              return (
                <div
                  key={proc.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1F1C19] border-[#B45309] shadow-xl shadow-[#B45309]/15 -translate-y-2'
                      : 'bg-[#181614] border-[#2C2723] hover:border-[#3D3730]'
                  }`}
                >
                  <div>
                    {/* Header: Step Number & Dot */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest ${
                          isSelected ? 'text-[#E5C07B]' : 'text-[#7D756A]'
                        }`}
                      >
                        {proc.step}
                      </span>
                      <div
                        className={`w-3 h-3 rounded-full border transition-colors ${
                          isSelected
                            ? 'bg-[#B45309] border-[#E5C07B]'
                            : 'bg-[#292521] border-[#3E3832]'
                        }`}
                      />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-white font-serif-heading mb-1">
                      {proc.title}
                    </h3>
                    <span className="text-[11px] font-medium text-[#C5A059] block mb-2.5">
                      {proc.subtitle}
                    </span>

                    {/* Description */}
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed mb-4">
                      {proc.description}
                    </p>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-3 border-t border-[#292420] text-[11px] space-y-1">
                    <div className="text-[#877F74]">
                      <span className="text-white font-medium block">{proc.actionItem}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#C5A059] font-mono text-[10px] pt-1">
                      <Clock className="w-3 h-3" />
                      <span>{proc.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Feature Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#1C1917] border border-[#352F28] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#B45309]/20 border border-[#B45309]/40 flex items-center justify-center text-[#E5C07B] shrink-0 font-serif-heading font-bold text-xl">
              {WORK_PROCESS[activeStepIndex].step}
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold">
                Current Focus: {WORK_PROCESS[activeStepIndex].title} ({WORK_PROCESS[activeStepIndex].subtitle})
              </span>
              <p className="text-sm text-[#CDC4B8] font-light mt-0.5">
                {WORK_PROCESS[activeStepIndex].actionItem} · Deliverable time: {WORK_PROCESS[activeStepIndex].duration}
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="px-5 py-2.5 rounded-md bg-[#25221F] border border-[#443B33] hover:border-[#C5A059] text-xs font-semibold uppercase tracking-wider text-white transition-all whitespace-nowrap cursor-pointer"
          >
            Start with Step 01: Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
