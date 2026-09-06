export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  gallery: string[];
  price: string;
  availability: 'In Stock' | 'Pre-Order' | 'Made to Order';
  features: string[];
  specifications: { label: string; value: string }[];
  howItWorks: string[];
  installation: string[];
  whatsIncluded: string[];
  warranty: string;
  faqs: { question: string; answer: string }[];
}

export interface Solution {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  problem: string;
  approach: string;
  howItWorks: string[];
  capabilities: string[];
  useCases: string[];
  technology: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  placeholder: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string; description?: string }[];
}

export interface GalleryItem {
  image: string;
  category: string;
  caption: string;
}
