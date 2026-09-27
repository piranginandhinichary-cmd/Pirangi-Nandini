export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  materials: string[];
  typicalTimeline: string;
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Wardrobes' | 'Bedrooms' | 'TV Units' | 'Doors' | 'Custom Furniture';
  image: string;
  description: string;
  woodType: string;
  finish: string;
  highlight: string;
  dimensions?: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  durability: string;
  finishLook: string;
  bestUsedFor: string;
  colorSwatch: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  actionItem: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  rating: number;
  quote: string;
  date: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  furnitureType: string;
  location: string;
  budget: string;
  description: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
  referenceImageName?: string;
  referenceImagePreview?: string;
}
