/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { WoodcraftInteraction } from './components/WoodcraftInteraction';
import { ServicesSection } from './components/ServicesSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WorkProcess } from './components/WorkProcess';
import { MaterialsFinishes } from './components/MaterialsFinishes';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CostEstimator } from './components/CostEstimator';
import { Testimonials } from './components/Testimonials';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { QuoteFormData } from './types';

export default function App() {
  const [quotePrefill, setQuotePrefill] = useState<Partial<QuoteFormData>>({});

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.querySelector('#work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuotePrefill((prev) => ({
      ...prev,
      furnitureType: serviceTitle,
      description: `Inquiring specifically about custom ${serviceTitle} carpentry.`
    }));
    scrollToQuote();
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    setQuotePrefill((prev) => ({
      ...prev,
      description: `Inquiring about a similar custom carpentry design to: "${projectTitle}". Please advise on feasibility and dimension options.`
    }));
    scrollToQuote();
  };

  const handleApplyEstimate = (data: { furnitureType: string; budget: string; description: string }) => {
    setQuotePrefill({
      furnitureType: data.furnitureType,
      budget: data.budget,
      description: data.description
    });
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#E8E4DF] flex flex-col selection:bg-[#B45309] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenQuote={scrollToQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={scrollToQuote} onExploreWork={scrollToWork} />

        {/* 2. About Us */}
        <AboutUs onOpenQuote={scrollToQuote} />

        {/* Special Feature: Wood to Furniture Interaction */}
        <WoodcraftInteraction />

        {/* 3. Our Services */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 4. Project Showcase */}
        <ProjectShowcase onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Work Process */}
        <WorkProcess />

        {/* 7. Materials & Finishes */}
        <MaterialsFinishes />

        {/* 8. Before & After Slider */}
        <BeforeAfterSlider />

        {/* Interactive Cost Estimator */}
        <CostEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 9. Customer Testimonials */}
        <Testimonials />

        {/* 10. Request a Free Quote */}
        <QuoteSection initialData={quotePrefill} />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingContact />
    </div>
  );
}
