import { ServiceItem, ProjectItem, MaterialItem, ProcessStep, Testimonial } from '../types';

import heroImg from '../assets/images/hero_carpenter_workshop_1790484533535.jpg';
import aboutImg from '../assets/images/about_craftsmanship_teak_1790484551849.jpg';
import kitchenImg from '../assets/images/showcase_modular_kitchen_1790484568160.jpg';
import wardrobeImg from '../assets/images/showcase_luxury_wardrobe_1790484582490.jpg';
import tvUnitImg from '../assets/images/before_after_completed_1790484596753.jpg';

export const ASSETS = {
  hero: heroImg,
  about: aboutImg,
  kitchen: kitchenImg,
  wardrobe: wardrobeImg,
  tvUnit: tvUnitImg,
};

export const BUSINESS_INFO = {
  name: 'MANIKANTA FURNITURES',
  proprietor: 'Pirangi Bhaskarachary',
  tagline: 'Custom Carpentry & Furniture Works',
  phone: '+91 93470 78421',
  phoneDisplay: '+91 93470 78421',
  whatsappNumber: '919347078421',
  email: 'piranginandhinichary@gmail.com',
  address: 'Plot no. 4-88/A/1, Marrikunta, Kurnool Road, near Anjaneyaswamy Temple, Wanaparthy, Telangana',
  city: 'Wanaparthy, Telangana',
  landmark: 'Near Anjaneyaswamy Temple, Kurnool Road',
  hours: 'Monday – Saturday: 10:00 AM – 8:00 PM',
  experienceYears: '10+',
  completedProjects: '100+',
  satisfactionRate: '100%',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    shortDesc: 'Custom kitchen cabinets, storage solutions, and modern kitchen furniture built with waterproof marine-grade materials.',
    fullDesc: 'We build ergonomic, moisture-resistant modular kitchens tailored to your cooking workflow. Featuring BWP 710 marine plywood, anti-termite treatment, acrylic or veneer shutters, and heavy-duty soft-close hardware.',
    image: kitchenImg,
    features: [
      'BWP 710 Marine Grade Plywood core',
      'Hydraulic lift-ups and tandem drawer boxes',
      'Heat & moisture resistant PU or acrylic shutters',
      'Custom spice pull-outs, pantry towers & corner carousels'
    ],
    materials: ['Boiling Waterproof Plywood', 'Natural Veneer', 'Acrylic Laminate', 'Blum/Hafele Hardware'],
    typicalTimeline: '12 – 18 Working Days',
    idealFor: 'Apartments, Villas & Kitchen Renovations'
  },
  {
    id: 'wardrobes',
    title: 'Wardrobes',
    shortDesc: 'Customized wardrobes designed according to room size, ceiling height, and personalized storage requirements.',
    fullDesc: 'From seamless floor-to-ceiling sliding wardrobes to classic hinged doors with fluted glass accents, our custom wardrobes optimize every vertical inch of your bedroom.',
    image: wardrobeImg,
    features: [
      'Floor-to-ceiling built-in carcass framework',
      'Concealed warm LED sensory profile illumination',
      'Specialized accessory drawers, tie racks & valet rods',
      'Choice of fluted glass, textured veneer, or matte laminate'
    ],
    materials: ['Calibrated Marine Ply', 'Natural Oak/Walnut Veneer', 'Tinted Fluted Glass', 'Soft-Close Sliders'],
    typicalTimeline: '10 – 15 Working Days',
    idealFor: 'Master Bedrooms, Walk-in Closets & Guest Rooms'
  },
  {
    id: 'tv-units',
    title: 'TV Units',
    shortDesc: 'Modern wooden TV units with elegant storage, seamless acoustic wooden slat backdrops, and concealed cable channels.',
    fullDesc: 'Architectural entertainment walls that serve as the visual centerpiece of your living room. We integrate floating credenzas, acoustic wooden wall paneling, and indirect lighting.',
    image: tvUnitImg,
    features: [
      'Hidden cable raceways for zero visible wires',
      'Floating wall-hung storage console with bevelled edges',
      'Solid wood slat or fluted panelling backdrop',
      'Integrated soundbar shelf and gaming console ventilation'
    ],
    materials: ['Solid Teak Wood Accents', 'HDHMR Board', 'Natural Charcoal Veneer', 'Warm 3000K LED Strips'],
    typicalTimeline: '7 – 10 Working Days',
    idealFor: 'Living Rooms, Home Theatres & Lounge Spaces'
  },
  {
    id: 'bedroom-furniture',
    title: 'Bedroom Furniture',
    shortDesc: 'Custom beds, hydraulic storage cot frames, matching bedside tables, and minimalist dressing consoles.',
    fullDesc: 'Handcrafted solid wood and upholstered cots constructed with mortise-and-tenon structural stability. Enjoy squeak-free joinery, ergonomic headboards, and ample under-bed hydraulic storage.',
    image: aboutImg,
    features: [
      'Heavy-duty hydraulic lift bed storage frames',
      'Solid Burma Teak or Sheesham framework',
      'Matching nightstands with concealed wire grommets',
      'Custom dressing tables with full-length vanity mirrors'
    ],
    materials: ['Solid Teak Wood', 'Marine Plywood Core', 'Italian Matte PU Finish', 'Heavy Hydraulic Gas Springs'],
    typicalTimeline: '10 – 14 Working Days',
    idealFor: 'Complete Master & Guest Bedroom Suites'
  },
  {
    id: 'office-furniture',
    title: 'Office Furniture',
    shortDesc: 'Custom workstations, conference tables, ergonomic executive desks, and organized file storage systems.',
    fullDesc: 'Custom crafted office desks designed for focus and productivity. Built to withstand commercial wear while showcasing warm natural wood aesthetics that elevate any workplace.',
    image: heroImg,
    features: [
      'Built-in wire management conduit and power box grommets',
      'Solid wood edge-banding and scratch-resistant surfaces',
      'Lockable storage pedestals and client presentation credenzas',
      'Sturdy steel or solid timber support understructures'
    ],
    materials: ['Commercial Grade Plywood', 'High-Pressure Laminate', 'Teak Wood Trim', 'Central Lock Mechanisms'],
    typicalTimeline: '8 – 14 Working Days',
    idealFor: 'Corporate Offices, Home Studios & Coworking Hubs'
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    shortDesc: 'Furniture designed and built according to the customer’s exact dimensions, material preferences, and architectural sketches.',
    fullDesc: 'Have an exact reference image, Pinterest board, or architect drawing? Our master carpenters fabricate bespoke dining tables, display cabinets, bar counters, and prayer units with millimeter precision.',
    image: aboutImg,
    features: [
      'Exact dimensional customization to your room contours',
      'One-on-one wood grain and veneer sheet selection',
      'Traditional hand-carved details or clean Scandinavian lines',
      'Multiple rounds of finish sample approval before polishing'
    ],
    materials: ['Solid Teak / Rosewood', 'Imported Oak Veneer', 'Brass Inlay Strips', 'Polyurethane Polish'],
    typicalTimeline: '12 – 20 Working Days',
    idealFor: 'Distinctive Living Spaces, Mandirs & Custom Dining'
  },
  {
    id: 'wooden-doors',
    title: 'Wooden Doors',
    shortDesc: 'Handcrafted main entrance doors, pooja room carved doors, and sound-insulating flush interior doors.',
    fullDesc: 'A grand entrance begins with a solid timber door. We build heavy solid teak doors with traditional CNC carvings, modern vertical grooving, and robust multipoint lock reinforcements.',
    image: tvUnitImg,
    features: [
      '100% Seasoned Solid Burma Teak or Honne wood',
      'Weather-resistant exterior UV protective coating',
      'Traditional Indian motifs, brass studs, or fluted panels',
      'Precision door frame chaukhat fabrication with rebate seals'
    ],
    materials: ['Seasoned Solid Teak', 'Solid Brass Handles & Hinges', 'Exterior Melamine Polish', 'Acoustic Drop Seals'],
    typicalTimeline: '8 – 12 Working Days',
    idealFor: 'Villa Entrances, Pooja Mandir Doors & Master Bedrooms'
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    shortDesc: 'Smart cabinets, loft storage, bookshelf room dividers, and space-saving under-stair organizers.',
    fullDesc: 'Transform awkward nooks, unutilized lofts, and empty hallway walls into organized storage masterpieces that blend invisibly into your room architecture.',
    image: wardrobeImg,
    features: [
      'Custom under-stair pull-out shoe and luggage pantries',
      'Seamless ceiling loft shutters with push-to-open latches',
      'Floor-to-ceiling library shelving with reinforced span strength',
      'Utility room storage built with waterproof resin substrates'
    ],
    materials: ['Moisture Resistant Ply', 'Textured Laminates', 'Push-to-Open Hardware', 'Concealed Heavy Brackets'],
    typicalTimeline: '6 – 10 Working Days',
    idealFor: 'Apartment Lofts, Foyer Spaces & Utility Balconies'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Walnut & Fluted Marble Modular Kitchen',
    category: 'Kitchens',
    image: kitchenImg,
    description: 'Bespoke parallel kitchen featuring natural walnut wood veneer cabinetry, fluted island details, and seamless quartz surface integration.',
    woodType: 'Natural American Walnut & Marine Ply (BWP 710)',
    finish: 'Natural Matte Polyurethane (PU)',
    highlight: 'Zero-seam handleless profiles with Blum motion servos',
    dimensions: '14ft x 11ft parallel layout'
  },
  {
    id: 'proj-2',
    title: 'Smoked Oak & Fluted Glass Master Wardrobe',
    category: 'Wardrobes',
    image: wardrobeImg,
    description: 'Floor-to-ceiling built-in wardrobe with dark bronze aluminium framed tinted fluted glass and interior warm LED illumination.',
    woodType: 'Calibrated Marine Core with Smoked Oak Veneer',
    finish: 'Ultra-Matte Italian Polycoat',
    highlight: 'Touch-sensitive sensory LED profiles & velvet jewellery trays',
    dimensions: '16ft Width x 9.5ft Height'
  },
  {
    id: 'proj-3',
    title: 'Acoustic Wood Slat Wall & Floating Entertainment Console',
    category: 'TV Units',
    image: tvUnitImg,
    description: 'Architectural living room media wall composed of individual solid teak slats mounted over acoustic charcoal backing with a 10ft floating walnut credenza.',
    woodType: 'Solid Teak Wood & Natural Walnut',
    finish: 'Satin Teak Oil & Clear Polyurethane',
    highlight: 'Zero visible cables with integrated ambient perimeter lighting',
    dimensions: '12ft x 9ft Wall Coverage'
  },
  {
    id: 'proj-4',
    title: 'Handcrafted Teak Credenza with Traditional Dovetail Joinery',
    category: 'Custom Furniture',
    image: aboutImg,
    description: 'Bespoke 6-door dining credenza built entirely from 40-year aged Burma teak logs using classic mortise-and-tenon craftsmanship with brushed brass pulls.',
    woodType: 'Solid Burma Teak',
    finish: 'Hand-rubbed Linseed Oil & Beeswax Sealant',
    highlight: 'Hand-planed book-matched timber grain across all front panels',
    dimensions: '7.5ft x 2.8ft x 1.6ft'
  },
  {
    id: 'proj-5',
    title: 'Bespoke King Platform Bed with Fluted Wood Headboard',
    category: 'Bedrooms',
    image: aboutImg,
    description: 'King-size platform bed featuring heavy hydraulic storage mechanism, integrated floating nightstands, and a floor-to-ceiling fluted wood headboard.',
    woodType: 'Solid White Ash & Seasoned Plywood Frame',
    finish: 'Natural Ash Matte PU',
    highlight: 'Hydraulic lift deck supporting up to 180kg mattress weight',
    dimensions: 'King Size (78" x 72" Mattress Frame)'
  },
  {
    id: 'proj-6',
    title: 'Grand Solid Teak Main Entrance Door with Brass Inlays',
    category: 'Doors',
    image: tvUnitImg,
    description: 'Double-leaf 45mm thick solid teak main door featuring geometric brass inlay strips, heavy solid brass knocker, and high-security multi-lock mortise.',
    woodType: '100% Solid CP Teak (Grade A)',
    finish: 'Weather-Shield Exterior PU Polish',
    highlight: '45mm solid core with acoustic perimeter compression seals',
    dimensions: '8.5ft Height x 5ft Double Width'
  },
  {
    id: 'proj-7',
    title: 'Island Breakfast Bar & Island Storage Extension',
    category: 'Kitchens',
    image: kitchenImg,
    description: 'Freestanding kitchen island with integrated wine rack, waterfall solid wood breakfast counter, and deep pantry storage drawers.',
    woodType: 'BWP Marine Ply with Teak Edge Lip',
    finish: 'Heat-Resistant Polyurethane',
    highlight: 'Waterfall edge with recessed bar stool legroom',
    dimensions: '8ft x 4ft Central Island'
  },
  {
    id: 'proj-8',
    title: 'Walk-In Wardrobe with Central Island Vanity',
    category: 'Wardrobes',
    image: wardrobeImg,
    description: 'Custom walk-in wardrobe system with open display shelves, glass-top accessory island, and dedicated shoe display galleries with angled racks.',
    woodType: 'High-Density Moisture Resistant Core',
    finish: 'Anti-Fingerprint Matte Laminate',
    highlight: 'Custom leather-lined pullout organizer trays',
    dimensions: '14ft x 10ft Dedicated Room'
  }
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'CUSTOM DESIGNS',
    subtitle: 'Tailored to your space',
    description: 'Every piece is engineered to fit your exact room dimensions, ceiling heights, and personal lifestyle requirements. No awkward filler gaps or cookie-cutter dimensions.'
  },
  {
    number: '02',
    title: 'QUALITY MATERIALS',
    subtitle: 'Certified genuine substrates',
    description: 'We source only certified BWP 710 marine plywood, seasoned solid teak, premium natural veneers, and certified non-toxic adhesive formulations.'
  },
  {
    number: '03',
    title: 'PRECISION WORK',
    subtitle: 'Millimeter-accurate execution',
    description: 'From digital laser spatial measurements to precision mitred corners and seamless edge-banding, our carpentry is calibrated down to the millimeter.'
  },
  {
    number: '04',
    title: 'MODERN & TRADITIONAL',
    subtitle: 'Heritage meets contemporary aesthetics',
    description: 'We combine traditional Indian solid wood carving and joinery techniques with sleek contemporary European hardware and minimalist forms.'
  },
  {
    number: '05',
    title: 'PROFESSIONAL SERVICE',
    subtitle: 'Direct carpenter communication',
    description: 'Deal directly with master carpenters and project supervisors. Enjoy transparent material cost breakdowns, realistic timelines, and respectful clean installation.'
  },
  {
    number: '06',
    title: 'BUILT TO LAST',
    subtitle: 'Heirloom durability',
    description: 'Our furniture is constructed with heavy mortise-and-tenon joints, anti-sag carcass stiffeners, and water-resistant sealing designed to endure for decades.'
  }
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'CONSULTATION',
    subtitle: 'Requirement Discovery',
    description: 'We listen carefully to your lifestyle needs, preferred aesthetics, storage issues, and design inspirations via phone, WhatsApp, or in-person workshop visit.',
    actionItem: 'Initial brief & ballpark scope discussion',
    duration: 'Day 1'
  },
  {
    step: '02',
    title: 'MEASUREMENT',
    subtitle: 'Laser Site Inspection',
    description: 'Our senior carpenter visits your home with precision laser distance meters to record exact wall contours, ceiling drops, electrical points, and plumbing lines.',
    actionItem: 'On-site millimeter measurement recording',
    duration: 'Day 2 – 3'
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Detailed Concept & Layout',
    description: 'We draft detailed 2D elevation diagrams, internal partition schematics, and functional drawer layouts for your review and iterative refinement.',
    actionItem: 'Concept schematics & dimension sign-off',
    duration: 'Day 4 – 6'
  },
  {
    step: '04',
    title: 'MATERIAL SELECTION',
    subtitle: 'Tactile Swatch Approval',
    description: 'Choose hands-on from our physical wood samples, natural veneer leaves, acrylic swatches, edge trims, and branded hardware (Blum, Hafele, Ebco).',
    actionItem: 'Final material & hardware approval',
    duration: 'Day 7'
  },
  {
    step: '05',
    title: 'CRAFTING',
    subtitle: 'Workshop Woodworking',
    description: 'In our dedicated carpentry workshop, seasoned carpenters cut, join, sand, and edge-band every carcass module while testing all drawer slides and hinges.',
    actionItem: 'Precision joinery & multi-coat finishing',
    duration: 'Day 8 – 20'
  },
  {
    step: '06',
    title: 'INSTALLATION',
    subtitle: 'Clean On-Site Fitting',
    description: 'Our uniformed installation team arrives on schedule to securely anchor modules, adjust hinges, connect LED channels, and perform complete post-installation cleanup.',
    actionItem: 'Final alignment, quality check & handover',
    duration: 'Day 21 – 24'
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'marine-ply',
    name: 'BWP 710 Marine Plywood',
    category: 'Core Substrate',
    description: 'Boiling Waterproof (BWP) grade plywood manufactured with 100% hardwood timber and bonded with synthetic phenol formaldehyde resin.',
    features: ['72-hour boiling water resistant', 'Anti-termite & borer proof', 'Zero delamination risk in moisture zones', 'High screw holding capacity'],
    durability: '25+ Years Lifespan',
    finishLook: 'Smooth calibrated core ready for laminate or veneer',
    bestUsedFor: 'Modular Kitchens, Bathroom Vanities, Wet Balcony Cabinets',
    colorSwatch: '#8A5A36'
  },
  {
    id: 'solid-teak',
    name: 'Seasoned Solid Burma / CP Teak',
    category: 'Solid Timber',
    description: 'King of hardwoods with high natural oil content, exceptional tensile strength, and striking golden-brown wood grain that ages with deep luster.',
    features: ['Natural weather & insect resistance', 'Immune to moisture rotting', 'Can be carved and profiled with crisp detail', 'Can be re-polished every generation'],
    durability: 'Lifetime / Heirloom grade (50+ Years)',
    finishLook: 'Warm golden amber to rich honey brown grain',
    bestUsedFor: 'Main Entrance Doors, Dining Tables, Cot Frames, Temple Mandirs',
    colorSwatch: '#A0522D'
  },
  {
    id: 'natural-veneer',
    name: 'Natural Architectural Veneers',
    category: 'Surface Finish',
    description: 'Paper-thin slices of real timber (Oak, Walnut, Teak, Ash) bonded to moisture-resistant backing, delivering authentic organic wood grain textures.',
    features: ['Unique one-of-a-kind natural grain pattern', 'Can be stained to custom tints (smoked, bleached, walnut)', 'Book-matched and slip-matched layouts available'],
    durability: '15 – 20 Years with PU Polish',
    finishLook: 'Authentic tactile wood grain depth',
    bestUsedFor: 'Living Room TV Walls, Master Wardrobe Shutters, Executive Desks',
    colorSwatch: '#5C3826'
  },
  {
    id: 'acrylic-laminate',
    name: 'High-Gloss & Anti-Scratch Acrylics',
    category: 'Laminate & Acrylic',
    description: 'Seamless solid surface sheets offering glass-like mirror reflections or velvety ultra-matte anti-fingerprint finishes.',
    features: ['Scratch and UV fade resistant', 'Seamless zero-joint laser edge banding', 'Effortless to wipe clean with a microfiber cloth', 'Zero bubble or peeling issues'],
    durability: '15+ Years',
    finishLook: 'Mirror high-gloss or silk ultra-matte',
    bestUsedFor: 'Kitchen Upper Shutters, Wardrobe Sliding Panels, Modern Consoles',
    colorSwatch: '#2B2B2B'
  },
  {
    id: 'pu-finishes',
    name: 'Polyurethane (PU) Italian Coating',
    category: 'Protective Polish',
    description: 'Multi-stage Italian liquid polyurethane spray coating providing an impenetrable seal against stains, tea spills, and thermal shock.',
    features: ['Non-yellowing clear coat formula', 'Available in 5% dead matte up to 100% wet-look gloss', 'Silky velvety surface touch', 'Superior chemical & heat resistance'],
    durability: '12 – 18 Years without fading',
    finishLook: 'Liquid glass luxury feel or powdery dead matte',
    bestUsedFor: 'Dining Table Tops, Fluted Panels, Entrance Doors',
    colorSwatch: '#C5A059'
  },
  {
    id: 'soft-hardware',
    name: 'Soft-Close Architectural Hardware',
    category: 'Mechanisms & Fittings',
    description: 'Heavy-duty German and Austrian tested hardware fittings ensuring silent, effortless gliding motion across all drawers and cabinet doors.',
    features: ['Tested for 100,000+ cycle open-close durability', 'Concealed 3D clip-on adjustable hinges', 'Tandembox soft-close drawer slides up to 50kg load', 'Hydraulic stay lifts for overhead cabinets'],
    durability: '10 – 15 Year Manufacturer Warranty',
    finishLook: 'Brushed Anthracite, Titanium Gray & Stainless Steel',
    bestUsedFor: 'Every Kitchen Drawer, Wardrobe Door, Vanity Lift-Up',
    colorSwatch: '#4A5568'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajesh & Sunita Varma',
    location: 'Jubilee Hills, Hyderabad',
    project: 'Modular Kitchen & Full Home Wardrobes',
    rating: 5,
    quote: 'Manikanta Furnitures transformed our entire 3BHK flat with impeccable woodwork. Their attention to marine ply quality, seamless edge-banding, and soft-close fitting exceeded what large factory brands offered us at nearly 40% less cost. The carpenter team was polite, prompt, and finished on schedule.',
    date: 'February 2026'
  },
  {
    id: 't-2',
    name: 'Arunachalam M.',
    location: 'Whitefield, Bangalore',
    project: 'Bespoke Solid Teak Dining Table & Main Door',
    rating: 5,
    quote: 'We wanted an heirloom 8-seater dining table with traditional dovetail joinery. Manikanta Furnitures personally brought wood grain samples to our apartment and hand-rubbed the finish until the teak wood glowed naturally. You simply cannot find this caliber of real carpenter pride in flatpack stores.',
    date: 'January 2026'
  },
  {
    id: 't-3',
    name: 'Pooja Reddy',
    location: 'Gachibowli, Hyderabad',
    project: 'Acoustic Wood Slat TV Unit & Master Wardrobe',
    rating: 5,
    quote: 'I showed them a reference photo from Pinterest for a fluted wooden TV wall with hidden wiring. They executed it down to the exact millimeter! The ambient warm lighting they integrated makes our living room look like a five-star luxury hotel lobby. Highly recommended!',
    date: 'March 2026'
  },
  {
    id: 't-4',
    name: 'Suresh Kumar',
    location: 'Kukatpally, Hyderabad',
    project: 'Custom Bedroom Cots & Space-Saving Lofts',
    rating: 5,
    quote: 'Honest pricing, no hidden charges, and genuine boiling waterproof plywood used throughout. The hydraulic lift on our bed frame is butter smooth. Manikanta Furnitures is our go-to carpentry team for all our family properties.',
    date: 'November 2025'
  }
];
