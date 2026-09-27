import React, { useState, ChangeEvent } from 'react';
import { QuoteFormData } from '../types';
import { BUSINESS_INFO } from '../data/furnituresData';
import { Upload, X, CheckCircle, MessageSquare, Phone, Send, ArrowRight, Shield } from 'lucide-react';

interface QuoteSectionProps {
  initialData?: Partial<QuoteFormData>;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: initialData?.fullName || '',
    phone: initialData?.phone || '',
    email: initialData?.email || '',
    furnitureType: initialData?.furnitureType || 'Modular Kitchen',
    location: initialData?.location || '',
    budget: initialData?.budget || '₹1 Lakh – ₹2 Lakhs',
    description: initialData?.description || '',
    preferredContact: initialData?.preferredContact || 'WhatsApp',
    referenceImageName: initialData?.referenceImageName || '',
    referenceImagePreview: initialData?.referenceImagePreview || ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState<string>('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Sync when initialData changes
  React.useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData
      }));
    }
  }, [initialData]);

  const furnitureTypes = [
    'Modular Kitchen',
    'Custom Built-in Wardrobes',
    'TV & Entertainment Units',
    'Bedroom Furniture (Bed/Cots/Vanity)',
    'Solid Wood Dining Table & Chairs',
    'Main Entrance / Interior Wooden Doors',
    'Office Workstations & Desks',
    'Space-Saving Storage & Lofts',
    'Complete Home Carpentry (2BHK / 3BHK / Villa)'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 – ₹1 Lakh',
    '₹1 Lakh – ₹2 Lakhs',
    '₹2 Lakhs – ₹3.5 Lakhs',
    '₹3.5 Lakhs – ₹5 Lakhs',
    '₹5 Lakhs+ (Luxury Bespoke)'
  ];

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        setFormErrors((prev) => ({ ...prev, image: 'File size must be under 8MB' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          referenceImageName: file.name,
          referenceImagePreview: reader.result as string
        }));
        setFormErrors((prev) => {
          const updated = { ...prev };
          delete updated.image;
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      referenceImageName: '',
      referenceImagePreview: ''
    }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 9) {
      errors.phone = 'Please provide a valid contact phone number';
    }
    if (!formData.location.trim()) errors.location = 'Please state your city / area';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    const refId = `MF-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteReferenceId(refId);
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const message = `*MANIKANTA FURNITURES - QUOTE REQUEST*
Ref ID: ${quoteReferenceId || 'NEW'}
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Furniture Type: ${formData.furnitureType}
Location: ${formData.location}
Approx Budget: ${formData.budget}
Preferred Contact: ${formData.preferredContact}
Requirement Details: ${formData.description || 'Custom dimensions consultation'}`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="quote" className="py-24 bg-[#141211] border-t border-[#292420] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                FREE SITE VISIT & CONSULTATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
              LET’S BUILD SOMETHING BEAUTIFUL
            </h2>
            <p className="text-sm sm:text-base text-[#ADA59B] leading-relaxed max-w-2xl mx-auto font-light">
              Tell us what you need. We’ll help turn your furniture idea into reality with millimeter-accurate measurements, honest pricing, and genuine timber materials.
            </p>
          </div>

          {/* Submission Success Screen */}
          {submitted ? (
            <div className="bg-[#1A1816] rounded-2xl border border-[#3E352B] p-8 sm:p-12 shadow-2xl text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                Quote Request Registered · Ref #{quoteReferenceId}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading mb-3">
                Thank You, {formData.fullName}!
              </h3>

              <p className="text-sm text-[#CDC4B8] max-w-lg mx-auto mb-8 font-light">
                Our master carpenter will review your specifications ({formData.furnitureType} in {formData.location}) and reach out within 4–6 business hours via {formData.preferredContact}.
              </p>

              {/* Instant WhatsApp Handshake Button */}
              <div className="p-6 bg-[#211E1B] rounded-xl border border-[#352F29] max-w-lg mx-auto mb-8 text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-white">Fast-Track On WhatsApp</span>
                  <span className="text-[10px] text-[#25D366] font-mono">Instant Priority</span>
                </div>
                <p className="text-xs text-[#A89F93] mb-4">
                  Send your requirements directly to our senior carpenter’s WhatsApp for immediate drawing review and ballpark pricing.
                </p>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Requirements on WhatsApp Now</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-medium text-[#9E958A] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                Submit another request or edit details
              </button>
            </div>
          ) : (
            /* Main Quotation Form */
            <form
              onSubmit={handleSubmit}
              className="bg-[#1A1816] rounded-2xl border border-[#332D27] p-6 sm:p-10 shadow-2xl space-y-6"
            >
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                    Full Name <span className="text-[#D97706]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-4 py-3 bg-[#131110] border border-[#2F2923] rounded-lg text-sm text-white placeholder-[#686054] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                  {formErrors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                    Phone / WhatsApp Number <span className="text-[#D97706]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 bg-[#131110] border border-[#2F2923] rounded-lg text-sm text-white placeholder-[#686054] focus:outline-none focus:border-[#C5A059] transition-colors tabular-nums"
                  />
                  {formErrors.phone && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                    Email Address <span className="text-[#776F64]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@example.com"
                    className="w-full px-4 py-3 bg-[#131110] border border-[#2F2923] rounded-lg text-sm text-white placeholder-[#686054] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                {/* Location / City */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                    Site Location / City Area <span className="text-[#D97706]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Banjara Hills, Hyderabad"
                    className="w-full px-4 py-3 bg-[#131110] border border-[#2F2923] rounded-lg text-sm text-white placeholder-[#686054] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                  {formErrors.location && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {formErrors.location}
                    </span>
                  )}
                </div>

                {/* Furniture Type */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                    Furniture Category
                  </label>
                  <select
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#131110] border border-[#2F2923] rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                  >
                    {furnitureTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#1A1816] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#131110] border border-[#2F2923] rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#1A1816] text-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                  Project Description & Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your room dimensions, storage needs, preferred timber/finish (e.g. solid teak, walnut veneer, acrylic), or any architectural ideas..."
                  className="w-full px-4 py-3 bg-[#131110] border border-[#2F2923] rounded-lg text-sm text-white placeholder-[#686054] focus:outline-none focus:border-[#C5A059] transition-colors resize-y"
                />
              </div>

              {/* Reference Image Upload */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                  Upload Reference Drawing / Photo <span className="text-[#776F64]">(Optional)</span>
                </label>

                {formData.referenceImagePreview ? (
                  <div className="flex items-center gap-4 p-3 bg-[#131110] border border-[#3E3831] rounded-lg">
                    <img
                      src={formData.referenceImagePreview}
                      alt="Uploaded reference"
                      className="w-16 h-16 object-cover rounded border border-[#443C34]"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-white truncate block">
                        {formData.referenceImageName}
                      </span>
                      <span className="text-[11px] text-[#8C8377]">Reference image attached</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="p-1.5 text-[#9E958A] hover:text-white rounded hover:bg-[#25221F] cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-[#332C26] hover:border-[#C5A059] rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#131110]/50 group">
                    <Upload className="w-5 h-5 text-[#8C8377] group-hover:text-[#C5A059] mb-1.5 transition-colors" />
                    <span className="text-xs text-[#CDC4B8] font-medium">
                      Click to upload CAD sketch, Pinterest photo, or floor plan
                    </span>
                    <span className="text-[10px] text-[#71695F] mt-0.5">
                      JPG, PNG, WebP up to 8MB
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
                {formErrors.image && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {formErrors.image}
                  </span>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#A69E92] block mb-2">
                  Preferred Contact Channel
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: method })}
                      className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                        formData.preferredContact === method
                          ? 'bg-[#221F1C] border-[#C5A059] text-[#E5C07B]'
                          : 'bg-[#131110] border-[#292420] text-[#9A9184] hover:bg-[#1E1B18]'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#292420]">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-md bg-gradient-to-r from-[#B45309] to-[#92400E] hover:from-[#D97706] hover:to-[#B45309] text-xs sm:text-sm font-semibold uppercase tracking-widest text-white transition-all shadow-xl shadow-[#B45309]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST A FREE QUOTE & SITE MEASUREMENT</span>
                </button>

                <p className="text-[11px] text-center text-[#7F776B] mt-3">
                  Zero obligation · Free in-person laser measurement · Direct master carpenter response
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
