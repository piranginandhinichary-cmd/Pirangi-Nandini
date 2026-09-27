import React, { useState } from 'react';
import { Layers, Ruler, Hammer, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { ASSETS } from '../data/furnituresData';

export const WoodcraftInteraction: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to finished furniture (stage 3)

  const stages = [
    {
      id: 0,
      badge: 'STAGE 01',
      title: 'Raw Timber & Grain Selection',
      tagline: 'Harvested & Seasoned Hardwood',
      description:
        'We hand-select mature 30+ year-old logs of Burma Teak, Rosewood, and European Oak. Timber is kiln-dried to an optimal 8–10% moisture content to prevent seasonal warping, cracking, or expansion in Indian climatic conditions.',
      carpenterNotes: 'Moisture Tested: 9.2% · Zero internal knots · Straight vertical grain alignment',
      accentColor: '#9A5B32',
      specs: [
        { label: 'Wood Origin', value: 'Burma & Central Province Teak' },
        { label: 'Moisture Level', value: '8% - 10% Kiln Stabilized' },
        { label: 'Density', value: '650 - 750 kg/m³' }
      ]
    },
    {
      id: 1,
      badge: 'STAGE 02',
      title: 'Architectural Blueprint & Laser Measure',
      tagline: 'Precision 3D Engineering',
      description:
        'Using digital laser distance meters, our craftsmen document every contour of your walls, ceiling drops, and electrical access channels. We translate room dimensions into millimeter-accurate cut-lists and joinery schematics.',
      carpenterNotes: 'CAD Elevation 1:20 · Laser Level Accuracy ±1.0mm · Custom hardware recesses',
      accentColor: '#C5A059',
      specs: [
        { label: 'Tolerance', value: '±0.5 mm Millimeter Fit' },
        { label: 'Software Drafting', value: '3D Elevation & Cut Optimization' },
        { label: 'Layout Scheme', value: 'Ergonomic Anthropometric Sizing' }
      ]
    },
    {
      id: 2,
      badge: 'STAGE 03',
      title: 'Artisanal Joinery & Hand Crafting',
      tagline: 'Traditional Woodworking in Motion',
      description:
        'In our dedicated workshop, seasoned woodworkers chisel interlocking mortise-and-tenon joints, hand-plane timber edges to glass smoothness, and pre-assemble carcass frames to stress-test every drawer glide and hinge.',
      carpenterNotes: 'Hand-planed smoothing · Zero mechanical nails in load joints · Heavy-duty dowels',
      accentColor: '#D97706',
      specs: [
        { label: 'Joinery Type', value: 'Mortise & Tenon + English Dovetails' },
        { label: 'Sanding Grits', value: 'Progressive 80 → 120 → 240 → 400' },
        { label: 'Hardware Prep', value: 'German 35mm Hinge Boring' }
      ]
    },
    {
      id: 3,
      badge: 'STAGE 04',
      title: 'Finished Bespoke Masterpiece',
      tagline: 'Multi-Coat Italian Finish & Home Installation',
      description:
        'The timber undergoes a 5-step finishing ritual: grain filling, stain matching, sealer coats, and a protective Italian Polyurethane (PU) satin finish. Installed seamlessly into your residence with zero visible gaps.',
      carpenterNotes: 'Italian PU 20% Satin Sheen · Water & Heat Resistant · Lifetime structural stability',
      accentColor: '#E5C07B',
      specs: [
        { label: 'Protective Polish', value: 'Italian Polyurethane (PU) Satin' },
        { label: 'Warranty', value: '10-Year Carpentry Structural Warranty' },
        { label: 'Maintenance', value: 'Effortless wipe-clean microfiber care' }
      ]
    }
  ];

  const current = stages[activeStage];

  return (
    <section className="py-24 bg-[#161514] border-t border-b border-[#2A2622] relative overflow-hidden wood-grain-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              THE ARTISANAL JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
            FROM RAW WOOD TO BESPOKE LUXURY
          </h2>
          <p className="text-sm sm:text-base text-[#B3ABA0] leading-relaxed">
            Witness how a raw timber trunk evolves through precision measurement, master hand joinery, and artisanal finishing into furniture that enriches your home for generations.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stages.map((stg) => {
            const isActive = activeStage === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg.id)}
                className={`p-4 rounded-lg text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#221F1C] border-[#B45309] shadow-lg shadow-[#B45309]/10'
                    : 'bg-[#1A1816]/70 border-[#2A2622] hover:border-[#3D3730] text-[#9A9287]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-[#C5A059]' : 'text-[#776F65]'
                    }`}
                  >
                    {stg.badge}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B45309] animate-ping" />
                  )}
                </div>
                <h4
                  className={`text-xs sm:text-sm font-semibold truncate ${
                    isActive ? 'text-white' : 'text-[#BFB6AA]'
                  }`}
                >
                  {stg.title.split('&')[0]}
                </h4>
                <p className="text-[11px] text-[#7E7569] mt-0.5 truncate">{stg.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Interactive Transformation Stage Viewport */}
        <div className="bg-[#1C1A18] rounded-xl border border-[#332D27] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Visual Canvas (Left 7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full flex items-center justify-center overflow-hidden bg-[#0F0E0D]">
              {/* Dynamic Image & Filter according to stage */}
              {activeStage === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={ASSETS.hero}
                    alt="Raw timber trunk and wood grain"
                    className="w-full h-full object-cover filter contrast-125 sepia-[0.35] brightness-75 scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Raw wood texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#181614]/90 border border-[#44382E] text-[#D97706] rounded">
                      Raw Teak Log · Timber Yard Inspection
                    </span>
                  </div>
                </div>
              )}

              {activeStage === 1 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={ASSETS.tvUnit}
                    alt="Laser architectural schematics"
                    className="w-full h-full object-cover filter grayscale contrast-150 brightness-50 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* CAD grid & blueprint lines simulation */}
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/50" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#181614]/90 border border-[#C5A059]/50 text-[#C5A059] rounded">
                      Digital CAD Layout · 1:1 Millimeter Grid
                    </span>
                  </div>
                </div>
              )}

              {activeStage === 2 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={ASSETS.hero}
                    alt="Master woodworker planing and chiseling"
                    className="w-full h-full object-cover filter brightness-90 contrast-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-black/20 to-black/40" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#181614]/90 border border-[#D97706]/50 text-[#D97706] rounded">
                      Hand Joinery · Mortise, Tenon & Hand Plane
                    </span>
                  </div>
                </div>
              )}

              {activeStage === 3 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={ASSETS.about}
                    alt="Finished bespoke luxury credenza furniture"
                    className="w-full h-full object-cover filter brightness-100 contrast-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/30" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#181614]/90 border border-[#C5A059] text-[#E5C07B] rounded">
                      Completed Solid Teak Credenza · Hand Rubbed Satin Finish
                    </span>
                  </div>
                </div>
              )}

              {/* Floating Stage Stepper Control on Canvas */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                <span className="px-3 py-1 bg-black/75 backdrop-blur-md rounded border border-[#3E3832] text-xs font-semibold uppercase tracking-wider text-white">
                  Step {activeStage + 1} of 4
                </span>
              </div>
            </div>

            {/* Informational Panel (Right 5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#191715]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#C5A059] tracking-widest uppercase">
                    {current.badge}
                  </span>
                  <span className="text-[#5E564D]">/</span>
                  <span className="text-xs text-[#9E958A]">{current.tagline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading mb-4">
                  {current.title}
                </h3>

                <p className="text-sm text-[#CDC4B8] leading-relaxed mb-6 font-light">
                  {current.description}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-3 pt-4 border-t border-[#2C2723] mb-6">
                  {current.specs.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1">
                      <span className="text-[#968E83]">{item.label}</span>
                      <span className="font-medium text-[#EBE7E1]">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Carpenter's Verified Inspection Callout */}
                <div className="p-3.5 rounded-lg bg-[#211E1B] border border-[#352F29] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Carpenter Guild Standard</span>
                    <span className="text-[#9E958A]">{current.carpenterNotes}</span>
                  </div>
                </div>
              </div>

              {/* Interaction Stepper Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-[#2C2723] mt-8">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#BDB5AB] hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  ← Previous Step
                </button>

                <div className="flex items-center gap-1.5">
                  {stages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStage(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeStage === i ? 'w-6 bg-[#C5A059]' : 'w-2 bg-[#3A342E]'
                      }`}
                      aria-label={`Jump to stage ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage((prev) => Math.min(stages.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
