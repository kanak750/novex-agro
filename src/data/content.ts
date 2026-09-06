import type { BlogPost, FAQItem, Testimonial, GalleryItem } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-smart-irrigation-systems',
    title: 'Understanding Smart Irrigation Systems',
    category: 'Smart Irrigation',
    date: '2025-08-15',
    excerpt: 'A practical overview of how smart irrigation systems work and the role of automation in modern farm water management.',
    image: 'https://images.pexels.com/photos/31231189/pexels-photo-31231189.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Smart irrigation systems use automation and remote control to manage water delivery more efficiently than traditional manual methods. This article provides a general overview of how these systems work.',
      'At their core, smart irrigation systems connect pumps, valves and sensors to a control interface that allows farmers to operate and monitor water delivery without being physically present at each point.',
      'The key components of a smart irrigation system typically include a controller for the pump or valve, a communication link, and a user interface — often accessible from a mobile device.',
      'By reducing manual intervention, smart irrigation can help farmers save time and manage water resources more deliberately. The actual benefits depend on the specific configuration and farm conditions.',
    ],
    featured: true,
  },
  {
    slug: 'how-connected-farm-equipment-works',
    title: 'How Connected Farm Equipment Works',
    category: 'Technology',
    date: '2025-07-28',
    excerpt: 'An introduction to the technology behind connected agricultural equipment and how devices communicate in a farm environment.',
    image: 'https://images.pexels.com/photos/6792187/pexels-photo-6792187.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Connected farm equipment uses communication technology to send and receive operational data between devices in the field and a central interface accessible to the farmer.',
      'The basic architecture involves a device (such as a motor controller or sensor), a communication link, and a software layer that presents the data to the user.',
      'This connectivity enables remote monitoring, remote control and automation — three capabilities that form the foundation of modern smart farming.',
      'Understanding how these pieces fit together can help farmers make informed decisions about which technologies are relevant to their operations.',
    ],
  },
  {
    slug: 'technology-trends-shaping-modern-agriculture',
    title: 'Technology Trends Shaping Modern Agriculture',
    category: 'Industry',
    date: '2025-06-10',
    excerpt: 'An overview of key technology trends that are influencing how farms operate and how agricultural equipment is evolving.',
    image: 'https://images.pexels.com/photos/26730197/pexels-photo-26730197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Agriculture is seeing increased adoption of connected devices, automation and data-driven management approaches. This article explores some of the general trends shaping the industry.',
      'Remote monitoring and control are becoming more accessible, allowing farmers to manage equipment without physical visits to each location.',
      'Data collection and logging are enabling more informed decision-making, as farmers can access historical operational data rather than relying solely on observation.',
      'These trends point toward a future where farm operations are increasingly connected, automated and informed by real-time and historical data.',
    ],
  },
  {
    slug: 'benefits-of-remote-motor-control',
    title: 'Benefits of Remote Motor Control for Farms',
    category: 'Remote Control',
    date: '2025-05-22',
    excerpt: 'How remote motor control can reduce manual field visits and improve operational convenience for farmers.',
    image: 'https://images.pexels.com/photos/34194564/pexels-photo-34194564.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Remote motor control allows farmers to start and stop agricultural pumps from a distance, reducing the need to travel to equipment locations for every operation.',
      'This capability is particularly valuable for farms with pumps spread across large areas, where each manual visit consumes significant time.',
      'By integrating remote control with monitoring, farmers can also confirm motor status without being on-site, adding a layer of operational confidence.',
      'The specific benefits depend on the farm layout, equipment configuration and the control solution implemented.',
    ],
  },
  {
    slug: 'introduction-to-farm-monitoring',
    title: 'Introduction to Farm Monitoring Systems',
    category: 'Monitoring',
    date: '2025-04-15',
    excerpt: 'A beginner-friendly look at what farm monitoring systems do and how they bring visibility to agricultural operations.',
    image: 'https://images.pexels.com/photos/5230957/pexels-photo-5230957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Farm monitoring systems collect and display data from agricultural equipment and field sensors, giving farmers a centralized view of their operations.',
      'A typical monitoring setup includes sensors or devices in the field, a communication layer, and a dashboard that presents the collected information.',
      'Monitoring can cover equipment status, environmental conditions and operational parameters, depending on what is connected.',
      'For farmers considering a monitoring system, the first step is identifying which information would be most valuable to track.',
    ],
  },
  {
    slug: 'automation-in-agriculture-an-overview',
    title: 'Automation in Agriculture: An Overview',
    category: 'Automation',
    date: '2025-03-08',
    excerpt: 'A general introduction to how automation is being applied in agricultural operations and what it means for farmers.',
    image: 'https://images.pexels.com/photos/18135422/pexels-photo-18135422.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Automation in agriculture involves using technology to perform tasks that would otherwise require manual operation, such as starting pumps or switching equipment.',
      'The goal of automation is not to replace the farmer but to reduce repetitive manual work and free up time for higher-value activities.',
      'Common automation applications include scheduled irrigation, timed equipment operation and sequential control of multiple devices.',
      'As with any technology adoption, the value of automation depends on how well it fits the specific needs and conditions of the farm.',
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'What does Novex Agro do?',
    answer: 'Novex Agro develops practical agricultural technology, including smart motor controllers, monitoring systems, automation devices and connected solutions designed to simplify farm operations.',
  },
  {
    question: 'What types of agricultural technology does Novex Agro provide?',
    answer: 'Our product range includes motor controllers, smart switches, motor starters, farm monitoring systems, sensors, data loggers and related accessories — all designed for agricultural applications.',
  },
  {
    question: 'How do smart farming systems work?',
    answer: 'Smart farming systems connect agricultural equipment to control and monitoring interfaces, allowing farmers to operate, automate and monitor devices remotely. The specific setup depends on the products and configuration chosen.',
  },
  {
    question: 'Can Novex solutions be used with existing farm equipment?',
    answer: 'Many Novex products are designed to integrate with common agricultural equipment configurations. We recommend contacting us with your specific equipment details so we can advise on compatibility.',
  },
  {
    question: 'How can I purchase a Novex product?',
    answer: 'You can browse products on our Products page and add items to your cart. For pricing and availability, please use the contact form or reach out to our sales team.',
  },
  {
    question: 'How can I contact Novex Agro support?',
    answer: 'You can reach us through the Contact page on this website. Select the relevant inquiry type and our team will respond to your request.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Customer testimonial placeholder. Replace this section with verified customer feedback before launch.',
    name: 'Customer Name',
    role: 'Farmer',
    location: 'Location, India',
    placeholder: true,
  },
  {
    quote: 'Customer testimonial placeholder. Replace this section with verified customer feedback before launch.',
    name: 'Customer Name',
    role: 'Farm Owner',
    location: 'Location, India',
    placeholder: true,
  },
  {
    quote: 'Customer testimonial placeholder. Replace this section with verified customer feedback before launch.',
    name: 'Customer Name',
    role: 'Agricultural Operator',
    location: 'Location, India',
    placeholder: true,
  },
];

export const galleryItems: GalleryItem[] = [
  { image: 'https://images.pexels.com/photos/11276073/pexels-photo-11276073.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Agriculture', caption: 'Rice fields in rural India' },
  { image: 'https://images.pexels.com/photos/34194564/pexels-photo-34194564.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Products', caption: 'Novex motor controller hardware' },
  { image: 'https://images.pexels.com/photos/17765487/pexels-photo-17765487.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Field Applications', caption: 'Sprinkler irrigation in operation' },
  { image: 'https://images.pexels.com/photos/163170/board-printed-circuit-board-computer-electronics-163170.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Technology', caption: 'Electronic control circuitry' },
  { image: 'https://images.pexels.com/photos/20445181/pexels-photo-20445181.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Agriculture', caption: 'Farmer tending to wheat field' },
  { image: 'https://images.pexels.com/photos/5230957/pexels-photo-5230957.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Technology', caption: 'Digital monitoring in agriculture' },
  { image: 'https://images.pexels.com/photos/18135422/pexels-photo-18135422.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Field Applications', caption: 'Tractor working in rural field' },
  { image: 'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Products', caption: 'Data logging device' },
  { image: 'https://images.pexels.com/photos/13801039/pexels-photo-13801039.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Agriculture', caption: 'Close-up of healthy crops' },
  { image: 'https://images.pexels.com/photos/26730197/pexels-photo-26730197.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Field Applications', caption: 'Aerial view of farm operations' },
  { image: 'https://images.pexels.com/photos/12558693/pexels-photo-12558693.png?auto=compress&cs=tinysrgb&w=1200', category: 'Technology', caption: 'Field sensor module' },
  { image: 'https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg?auto=compress&cs=tinysrgb&w=1200', category: 'Agriculture', caption: 'Harvesting in green fields' },
];

export const galleryCategories = ['All', 'Products', 'Field Applications', 'Technology', 'Agriculture', 'Events'];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
}
