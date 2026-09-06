import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Motor Controllers', path: '/products?category=motor-controllers', description: 'Smart control for agricultural pumps' },
      { label: 'Smart Switches', path: '/products?category=smart-switches', description: 'Mobile-operated equipment switching' },
      { label: 'Motor Starters', path: '/products?category=motor-starters', description: 'Reliable motor starting and protection' },
      { label: 'Farm Monitoring', path: '/products?category=farm-monitoring', description: 'Centralized operational visibility' },
      { label: 'Sensors', path: '/products?category=sensors', description: 'Field data collection modules' },
      { label: 'Data Loggers', path: '/products?category=data-loggers', description: 'Operational data recording' },
      { label: 'Accessories', path: '/products?category=accessories', description: 'Installation and connectivity kits' },
    ],
  },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'Smart Irrigation', path: '/solutions/smart-irrigation', description: 'Automated and remote irrigation control' },
      { label: 'Remote Motor Control', path: '/solutions/remote-motor-control', description: 'Operate pumps without field visits' },
      { label: 'Farm Monitoring', path: '/solutions/farm-monitoring', description: 'Visibility across farm operations' },
      { label: 'Agricultural Automation', path: '/solutions/agricultural-automation', description: 'Reduce manual workload with scheduling' },
      { label: 'Precision Agriculture', path: '/solutions/precision-agriculture', description: 'Data-driven farm management' },
      { label: 'Energy & Resource Management', path: '/solutions/energy-resource-management', description: 'Track and optimize resource usage' },
    ],
  },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About', path: '/about' },
    { label: 'Our Story', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  products: [
    { label: 'All Products', path: '/products' },
    { label: 'Motor Controllers', path: '/products?category=motor-controllers' },
    { label: 'Farm Monitoring', path: '/products?category=farm-monitoring' },
    { label: 'Smart Devices', path: '/products?category=smart-switches' },
  ],
  solutions: [
    { label: 'Smart Irrigation', path: '/solutions/smart-irrigation' },
    { label: 'Remote Control', path: '/solutions/remote-motor-control' },
    { label: 'Farm Monitoring', path: '/solutions/farm-monitoring' },
    { label: 'Agricultural Automation', path: '/solutions/agricultural-automation' },
  ],
  resources: [
    { label: 'Blog', path: '/resources' },
    { label: 'FAQs', path: '/#faq' },
    { label: 'Gallery', path: '/gallery' },
  ],
  support: [
    { label: 'Contact', path: '/contact' },
    { label: 'Shipping', path: '/shipping-policy' },
    { label: 'Returns', path: '/return-policy' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
  ],
};
