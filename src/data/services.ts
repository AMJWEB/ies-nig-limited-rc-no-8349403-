export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  priceEstimate: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  before: string;
  after: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Tip {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

export const services: Service[] = [
  {
    id: 'plumbing',
    title: 'Expert Plumbing',
    description: 'From leak repairs to full pipe replacements, our certified plumbers handle everything.',
    icon: 'Droplets',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/service-plumbing-48894a90-1782294373759.webp',
    priceEstimate: '$100 - $500',
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Safe and reliable electrical work including wiring, lighting, and panel upgrades.',
    icon: 'Zap',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/service-electrical-18414039-1782294374402.webp',
    priceEstimate: '$150 - $1000',
  },
  {
    id: 'hvac',
    title: 'HVAC Solutions',
    description: 'Stay comfortable year-round with our heating, ventilation, and air conditioning services.',
    icon: 'ThermometerSun',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/service-hvac-9212bebf-1782294376039.webp',
    priceEstimate: '$200 - $2500',
  },
  {
    id: 'roofing',
    title: 'Roofing & Siding',
    description: 'Protect your home with high-quality roofing repairs and full installations.',
    icon: 'Home',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/service-roofing-13004774-1782294375969.webp',
    priceEstimate: '$500 - $10000+',
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    description: 'Enhance your curb appeal with professional lawn care and garden design.',
    icon: 'TreePine',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/service-landscaping-758ee70c-1782294374119.webp',
    priceEstimate: '$50 - $2000',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Kitchen Remodel',
    before: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/gallery-kitchen-before-after-606a0d3d-1782294373744.webp',
    after: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/gallery-kitchen-before-after-606a0d3d-1782294373744.webp', // Using same for demo as generate_images_bulk gave a split screen
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The plumbing team was incredibly professional and fixed my leak within an hour. Highly recommend!',
    date: '2023-10-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'Great service on our HVAC system. They were on time and explained everything clearly.',
    date: '2023-10-10',
  },
  {
    id: '3',
    name: 'Emily Davis',
    rating: 4,
    comment: 'The landscaping team did a fantastic job on our garden. It looks brand new!',
    date: '2023-10-05',
  },
];

export const maintenanceTips: Tip[] = [
  {
    id: '1',
    title: 'HVAC Filter Maintenance',
    category: 'HVAC',
    excerpt: 'Change your air filters every 1-3 months to keep your system running efficiently.',
    content: 'Regular filter changes prevent dust buildup and improve air quality in your home...',
  },
  {
    id: '2',
    title: 'Spring Plumbing Checklist',
    category: 'Plumbing',
    excerpt: 'Check for leaks and clear your gutters to prevent water damage during spring showers.',
    content: 'Spring is the perfect time to inspect your plumbing fixtures for any winter damage...',
  },
  {
    id: '3',
    title: 'Electrical Safety Tips',
    category: 'Electrical',
    excerpt: 'Never overload your power strips and check for frayed wires regularly.',
    content: 'Electrical fires are often preventable with simple regular inspections...',
  },
];
