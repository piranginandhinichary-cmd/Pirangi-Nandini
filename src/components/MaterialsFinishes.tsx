import React, { useState } from 'react';
import { MATERIALS } from '../data/furnituresData';
import { Check, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { MaterialItem } from '../types';

export const MaterialsFinishes: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIALS[0]);

  return (
    <section id="materials" className="py-24 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                TRANSPARENT SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
              MATERIALS & FINISHES
            </h2>
            <p className="text-sm sm:text-base text-[#ADA59B] mt-3 font-light">
              We never compromise on substrates. We use certified marine plywood, seasoned solid timber, and European fittings so your furniture remains structurally flawless for decades.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#1A1816] rounded-lg border border-[#2D2824] text-xs text-[#CDC4B8]">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
            <span>Anti-Termite, Borer-Resistant & Moisture-Sealed Guaranteed</span>
          </div>
        </div>

        {/* 2-Column Interactive Material Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Material Selector List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {MATERIALS.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#201D1A] border-[#B45309] shadow-lg shadow-[#B45309]/10'
                      : 'bg-[#171514] border-[#2A2622] hover:border-[#38332D]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Color/Texture Swatch Indicator */}
                    <div
                      className="w-10 h-10 rounded-lg border border-[#3E3831] shrink-0 shadow-inner"
                      style={{ backgroundColor: mat.colorSwatch }}
                    />
                    <div>
                      <h4
                        className={`text-sm font-semibold ${
                          isSelected ? 'text-white' : 'text-[#CDC4B8]'
                        }`}
                      >
                        {mat.name}
                      </h4>
                      <span className="text-[11px] text-[#8A8276] uppercase tracking-wider block">
                        {mat.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-medium uppercase tracking-wider ${
                      isSelected ? 'text-[#C5A059]' : 'text-[#676054]'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Inspect'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Material Profile Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1A1816] rounded-xl border border-[#352F29] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Header info */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                  {selectedMaterial.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading mt-1">
                  {selectedMaterial.name}
                </h3>
              </div>
              <div
                className="w-14 h-14 rounded-xl border border-[#443B33] shadow-md shrink-0"
                style={{ backgroundColor: selectedMaterial.colorSwatch }}
              />
            </div>

            <p className="text-sm text-[#CDC4B8] font-light leading-relaxed mb-6">
              {selectedMaterial.description}
            </p>

            {/* Key Advantages */}
            <div className="mb-6">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9E958A] mb-3">
                Key Performance Attributes
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedMaterial.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#E3DDD5]">
                    <div className="w-4 h-4 rounded-full bg-[#B45309]/20 border border-[#B45309]/50 flex items-center justify-center text-[#D97706] shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application & Durability Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#292420] text-xs">
              <div className="p-3 bg-[#221F1C] rounded-lg border border-[#332D27]">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block mb-1">
                  Durability
                </span>
                <span className="font-semibold text-[#E5C07B]">{selectedMaterial.durability}</span>
              </div>

              <div className="p-3 bg-[#221F1C] rounded-lg border border-[#332D27]">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block mb-1">
                  Surface Feel
                </span>
                <span className="font-semibold text-white">{selectedMaterial.finishLook}</span>
              </div>

              <div className="p-3 bg-[#221F1C] rounded-lg border border-[#332D27]">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block mb-1">
                  Ideal Application
                </span>
                <span className="font-semibold text-[#CDC4B8]">{selectedMaterial.bestUsedFor}</span>
              </div>
            </div>

            {/* Carpenter Guarantee Note */}
            <div className="mt-6 pt-4 border-t border-[#292420] flex items-center justify-between text-xs text-[#8A8276]">
              <span>Sample swatches can be inspected in person during site measurement.</span>
              <a href="#quote" className="text-[#C5A059] font-medium hover:underline whitespace-nowrap">
                Request Sample Kit →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
