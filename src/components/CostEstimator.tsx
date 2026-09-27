import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, HelpCircle } from 'lucide-react';

interface CostEstimatorProps {
  onApplyEstimate: (data: { furnitureType: string; budget: string; description: string }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<string>('Modular Kitchen');
  const [sizeScope, setSizeScope] = useState<string>('Standard (L-Shape / 12-14 running ft)');
  const [materialTier, setMaterialTier] = useState<string>('premium');

  const projectOptions: Record<
    string,
    {
      sizes: string[];
      tiers: {
        essential: { range: string; desc: string; days: string };
        premium: { range: string; desc: string; days: string };
        luxury: { range: string; desc: string; days: string };
      };
    }
  > = {
    'Modular Kitchen': {
      sizes: [
        'Compact / Straight (8-10 running ft)',
        'Standard (L-Shape / 12-14 running ft)',
        'Large / Parallel Island (16-20 running ft)'
      ],
      tiers: {
        essential: {
          range: '₹85,000 – ₹1,20,000',
          desc: 'MR Grade Core + 1mm Anti-Scratch Laminate + Ebco hardware',
          days: '10 – 12 Days'
        },
        premium: {
          range: '₹1,40,000 – ₹2,10,000',
          desc: 'BWP 710 Marine Ply + Acrylic / High-Gloss + Blum Tandembox',
          days: '14 – 16 Days'
        },
        luxury: {
          range: '₹2,40,000 – ₹3,60,000+',
          desc: '100% Marine Hardwood + Natural Walnut Veneer + Italian PU + Hafele servos',
          days: '18 – 22 Days'
        }
      }
    },
    'Wardrobe': {
      sizes: [
        '2-Door Hinged (6ft x 7ft)',
        '3-Door Sliding (8ft x 9ft Floor-to-Ceiling)',
        'Walk-in Wardrobe Suite (12ft+ with Vanity)'
      ],
      tiers: {
        essential: {
          range: '₹60,000 – ₹90,000',
          desc: 'Calibrated Commercial Ply + Textured Matte Laminate',
          days: '8 – 10 Days'
        },
        premium: {
          range: '₹1,10,000 – ₹1,75,000',
          desc: 'Marine Core + Floor-to-Ceiling Sliders + Soft-close + Profile LEDs',
          days: '12 – 15 Days'
        },
        luxury: {
          range: '₹1,90,000 – ₹2,90,000+',
          desc: 'Oak Veneer + Fluted Glass Shutters + Leather Trays + Sensor Lighting',
          days: '15 – 20 Days'
        }
      }
    },
    'TV & Entertainment Wall': {
      sizes: [
        'Minimal Floating Credenza (6ft)',
        'Full Wall Acoustic Slat Unit (10ft x 8ft)',
        'Grand Luxury Media Centre with Display Pillars'
      ],
      tiers: {
        essential: {
          range: '₹35,000 – ₹55,000',
          desc: 'MDF / Commercial Core with High-Pressure Woodgrain Laminate',
          days: '6 – 8 Days'
        },
        premium: {
          range: '₹65,000 – ₹1,10,000',
          desc: 'Solid Teak Trim + Acoustic Charcoal Backdrop + Warm LED Channel',
          days: '8 – 10 Days'
        },
        luxury: {
          range: '₹1,30,000 – ₹2,20,000',
          desc: 'Individual Solid Teak Slats + Bookmatched Marble/Veneer Feature Wall',
          days: '12 – 16 Days'
        }
      }
    },
    'Bedroom Furniture Set': {
      sizes: [
        'Queen Size Bed with Hydraulic Storage',
        'King Bed + 2 Bedside Tables + Headboard',
        'Complete Master Suite (Bed + Dresser + Mirror + Nightstands)'
      ],
      tiers: {
        essential: {
          range: '₹45,000 – ₹70,000',
          desc: 'Sturdy Engineered Frame with Heavy-duty Manual Lift Mechanism',
          days: '7 – 9 Days'
        },
        premium: {
          range: '₹80,000 – ₹1,35,000',
          desc: 'Marine Ply Frame + Hydraulic Gas Lift + Upholstered / Fluted Headboard',
          days: '10 – 14 Days'
        },
        luxury: {
          range: '₹1,50,000 – ₹2,60,000+',
          desc: '100% Solid Burma Teak Wood + Mortise-and-Tenon Joinery + Hand Oil Polish',
          days: '15 – 22 Days'
        }
      }
    }
  };

  const currentProject = projectOptions[projectType] || projectOptions['Modular Kitchen'];
  const currentTierData =
    materialTier === 'luxury'
      ? currentProject.tiers.luxury
      : materialTier === 'essential'
      ? currentProject.tiers.essential
      : currentProject.tiers.premium;

  const handleApplyToQuote = () => {
    onApplyEstimate({
      furnitureType: projectType,
      budget: currentTierData.range,
      description: `Estimated scope: ${sizeScope} with ${
        materialTier === 'luxury'
          ? 'Artisan Luxury Solid Timber/Veneer'
          : materialTier === 'premium'
          ? 'Premium BWP 710 Marine Grade'
          : 'Essential High-Durability'
      } specification (${currentTierData.desc}).`
    });
  };

  return (
    <section className="py-20 bg-[#161514] border-t border-[#2A2521] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1917] border border-[#332D27] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2A2521]">
            <div>
              <div className="inline-flex items-center gap-2 mb-1.5">
                <Calculator className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                  INSTANT BALLPARK CALCULATOR
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading">
                ESTIMATE YOUR CUSTOM WOODWORK
              </h3>
            </div>
            <p className="text-xs text-[#9E958A] max-w-sm">
              Get an immediate realistic estimate based on transparent material grades and direct workshop fabrication costs.
            </p>
          </div>

          {/* Interactive Calculator Inputs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Select Project Type */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#9E958A] block mb-2.5">
                  1. Select Furniture Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.keys(projectOptions).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setProjectType(type);
                        setSizeScope(projectOptions[type].sizes[0]);
                      }}
                      className={`p-3 rounded-lg text-xs font-medium text-left transition-all cursor-pointer border ${
                        projectType === type
                          ? 'bg-[#B45309] border-[#B45309] text-white shadow-md'
                          : 'bg-[#151312] border-[#2E2822] text-[#B8AF9F] hover:bg-[#24201C]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Select Dimensions / Size Scope */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#9E958A] block mb-2.5">
                  2. Room Size / Configuration
                </label>
                <div className="space-y-2">
                  {currentProject.sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => setSizeScope(size)}
                      className={`p-3 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center justify-between border ${
                        sizeScope === size
                          ? 'bg-[#221E1B] border-[#C5A059] text-white'
                          : 'bg-[#151312] border-[#28221D] text-[#A69E92] hover:border-[#383129]'
                      }`}
                    >
                      <span>{size}</span>
                      {sizeScope === size && <Check className="w-4 h-4 text-[#C5A059]" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Select Material Specification Tier */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#9E958A] block mb-2.5">
                  3. Material & Polish Tier
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { key: 'essential', label: 'Essential Grade', sub: 'Commercial Ply + Laminate' },
                    { key: 'premium', label: 'Premium Marine', sub: 'BWP 710 + Acrylic / Soft Close' },
                    { key: 'luxury', label: 'Artisan Hardwood', sub: 'Solid Teak / Veneer + Italian PU' }
                  ].map((tier) => (
                    <button
                      key={tier.key}
                      type="button"
                      onClick={() => setMaterialTier(tier.key)}
                      className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                        materialTier === tier.key
                          ? 'bg-[#25211D] border-[#C5A059] shadow-sm'
                          : 'bg-[#151312] border-[#2A241F] hover:bg-[#201C19]'
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold block ${
                          materialTier === tier.key ? 'text-[#E5C07B]' : 'text-white'
                        }`}
                      >
                        {tier.label}
                      </span>
                      <span className="text-[10px] text-[#8C8377] block mt-0.5 leading-tight">
                        {tier.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Summary Box */}
            <div className="lg:col-span-5 bg-[#141211] rounded-xl border border-[#3A332C] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold block mb-1">
                  Estimated Workshop Fabrication Cost
                </span>

                <div className="text-2xl sm:text-3xl font-bold text-white font-serif-heading tabular-nums my-2">
                  {currentTierData.range}
                </div>

                <div className="text-xs text-[#A89F93] pb-4 mb-4 border-b border-[#28231E]">
                  *Estimated range includes material cost, carpentry joinery fabrication, and standard site installation.
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div>
                    <span className="text-[#7F776B] block">Selected Project:</span>
                    <span className="font-semibold text-white">
                      {projectType} · {sizeScope}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#7F776B] block">Material Core & Finish:</span>
                    <span className="font-medium text-[#E5C07B]">{currentTierData.desc}</span>
                  </div>

                  <div>
                    <span className="text-[#7F776B] block">Typical Workshop Lead Time:</span>
                    <span className="font-medium text-white">{currentTierData.days}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyToQuote}
                className="w-full py-3.5 px-4 rounded-md bg-gradient-to-r from-[#B45309] to-[#92400E] hover:from-[#D97706] hover:to-[#B45309] text-xs font-semibold uppercase tracking-widest text-white transition-all shadow-xl shadow-[#B45309]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Apply Estimate to Free Quote Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
