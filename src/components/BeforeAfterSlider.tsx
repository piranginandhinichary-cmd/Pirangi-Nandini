import React, { useState, useRef, useCallback } from 'react';
import { ASSETS } from '../data/furnituresData';
import { Sliders, MoveHorizontal, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-[#141211] border-t border-[#26221E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              TRANSFORMATION SPOTLIGHT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
            FROM IDEA TO FINISHED SPACE
          </h2>
          <p className="text-sm sm:text-base text-[#ADA59B] leading-relaxed font-light">
            Slide horizontally to see how an empty living room wall is transformed into a custom architectural acoustic wood slat entertainment suite.
          </p>
        </div>

        {/* Comparison Viewer Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[500px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-[#352F29] shadow-2xl bg-[#0D0C0B]"
          >
            {/* "After" Image Layer (Full view underneath) */}
            <div className="absolute inset-0">
              <img
                src={ASSETS.tvUnit}
                alt="After: Bespoke living room wall TV unit with acoustic wood slats and ambient lighting"
                className="w-full h-full object-cover filter brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded border border-[#3E3832] text-xs font-semibold uppercase tracking-wider text-[#E5C07B]">
                After: Finished Woodwork
              </div>
            </div>

            {/* "Before" Image Layer (Clipped to left side) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={ASSETS.tvUnit}
                alt="Before: Bare wall space before custom carpentry installation"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none'
                }}
                referrerPolicy="no-referrer"
              />
              {/* Construction grid line overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded border border-[#3E3832] text-xs font-semibold uppercase tracking-wider text-[#D1C9BE]">
                Before: Bare Wall Shell
              </div>
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-[#C5A059] via-white to-[#C5A059] shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#181614] border-2 border-[#C5A059] text-white flex items-center justify-center shadow-xl">
                <MoveHorizontal className="w-5 h-5 text-[#C5A059]" />
              </div>
            </div>
          </div>

          {/* Quick preset controls below slider */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E958A]">
            <div className="flex items-center gap-2">
              <span className="text-[#C5A059] font-medium">Interactive Demo:</span>
              <span>Click or drag the gold handle to compare before and after</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSliderPosition(10)}
                className="px-3 py-1 rounded bg-[#1C1A18] hover:bg-[#282420] border border-[#2F2923] text-white transition-colors cursor-pointer"
              >
                Full After
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className="px-3 py-1 rounded bg-[#1C1A18] hover:bg-[#282420] border border-[#2F2923] text-white transition-colors cursor-pointer"
              >
                50 / 50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(90)}
                className="px-3 py-1 rounded bg-[#1C1A18] hover:bg-[#282420] border border-[#2F2923] text-white transition-colors cursor-pointer"
              >
                Full Before
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
