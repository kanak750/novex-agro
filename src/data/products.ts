import type { Product } from '@/types';

export const products: Product[] = [
  {
    slug: 'novex-smart-motor-controller',
    name: 'Novex Smart Motor Controller',
    category: 'Motor Controllers',
    categorySlug: 'motor-controllers',
    shortDescription: 'Intelligent controller for automating agricultural motor pumps with remote operation capability.',
    longDescription: 'The Novex Smart Motor Controller is designed to bring automation and remote control to agricultural pump motors. It allows farmers to operate and monitor motor pumps without manual field visits, supporting more efficient irrigation and equipment management.',
    image: 'https://images.pexels.com/photos/34194564/pexels-photo-34194564.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/34194564/pexels-photo-34194564.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/163170/board-printed-circuit-board-computer-electronics-163170.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6792187/pexels-photo-6792187.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    price: 'Price on request',
    availability: 'In Stock',
    features: [
      'Remote motor start/stop operation',
      'Compatible with common agricultural pump configurations',
      'Status indication for operational feedback',
      'Enclosure designed for field environments',
    ],
    specifications: [
      { label: 'Product Code', value: 'NX-SMC-100' },
      { label: 'Enclosure', value: 'Field-rated housing' },
      { label: 'Mounting', value: 'Wall / Panel mount' },
      { label: 'Connectivity', value: 'Edit to specify' },
      { label: 'Power Input', value: 'Edit to specify' },
      { label: 'Dimensions', value: 'Edit to specify' },
    ],
    howItWorks: [
      'The controller connects to your existing motor pump wiring.',
      'Once configured, it enables remote start and stop commands.',
      'Operational status is communicated back through the connected interface.',
    ],
    installation: [
      'Mount the controller near the motor pump location.',
      'Connect to the motor wiring as per the installation guide.',
      'Complete the configuration through the Novex setup process.',
    ],
    whatsIncluded: ['1x Novex Smart Motor Controller', 'Installation guide', 'Mounting hardware'],
    warranty: 'Warranty information to be updated. Contact Novex Agro for current warranty terms.',
    faqs: [
      { question: 'Can this work with my existing pump motor?', answer: 'The controller is designed for common agricultural pump configurations. Please contact Novex Agro with your motor specifications for compatibility confirmation.' },
      { question: 'Does this require an internet connection?', answer: 'Connectivity requirements depend on the specific configuration. Please check the product documentation or contact support for details.' },
    ],
  },
  {
    slug: 'novex-mobile-auto-switch',
    name: 'Novex Mobile Auto Switch',
    category: 'Smart Switches',
    categorySlug: 'smart-switches',
    shortDescription: 'Automated switch module enabling mobile-based control of agricultural equipment on demand.',
    longDescription: 'The Novex Mobile Auto Switch provides a practical switching solution that allows agricultural equipment to be controlled through a mobile interface. It is designed for straightforward integration into existing farm electrical setups.',
    image: 'https://images.pexels.com/photos/29091470/pexels-photo-29091470.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/29091470/pexels-photo-29091470.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    price: 'Price on request',
    availability: 'In Stock',
    features: [
      'Mobile-triggered switching for connected equipment',
      'Simple wiring integration',
      'Compact form factor for flexible mounting',
      'Operational status feedback',
    ],
    specifications: [
      { label: 'Product Code', value: 'NX-MAS-200' },
      { label: 'Switch Type', value: 'Edit to specify' },
      { label: 'Mounting', value: 'DIN rail / Wall mount' },
      { label: 'Control Interface', value: 'Mobile' },
      { label: 'Dimensions', value: 'Edit to specify' },
    ],
    howItWorks: [
      'The switch is wired into the equipment control circuit.',
      'A mobile command triggers the switch to activate or deactivate the connected load.',
      'Status is relayed back to the user interface.',
    ],
    installation: [
      'Install the switch in the equipment control panel.',
      'Wire as per the provided diagram.',
      'Pair with the mobile control interface.',
    ],
    whatsIncluded: ['1x Novex Mobile Auto Switch', 'Wiring guide', 'Mounting accessories'],
    warranty: 'Warranty information to be updated. Contact Novex Agro for current warranty terms.',
    faqs: [
      { question: 'What equipment can I connect to this switch?', answer: 'The switch is designed for common agricultural electrical loads. Please verify compatibility with your specific equipment specifications.' },
    ],
  },
  {
    slug: 'novex-farm-monitor',
    name: 'Novex Farm Monitor',
    category: 'Farm Monitoring',
    categorySlug: 'farm-monitoring',
    shortDescription: 'Monitoring system for observing key farm and equipment parameters from a central interface.',
    longDescription: 'The Novex Farm Monitor brings visibility to farm operations by collecting and displaying relevant operational data. It is designed to help farmers keep track of equipment status and field conditions from one accessible location.',
    image: 'https://images.pexels.com/photos/5230957/pexels-photo-5230957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/5230957/pexels-photo-5230957.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/12558693/pexels-photo-12558693.png?auto=compress&cs=tinysrgb&w=1200',
    ],
    price: 'Price on request',
    availability: 'Pre-Order',
    features: [
      'Centralized monitoring dashboard',
      'Equipment status visibility',
      'Configurable monitoring parameters',
      'Accessible from mobile and desktop',
    ],
    specifications: [
      { label: 'Product Code', value: 'NX-FM-300' },
      { label: 'Display', value: 'Web / Mobile interface' },
      { label: 'Inputs', value: 'Edit to specify' },
      { label: 'Data Storage', value: 'Edit to specify' },
      { label: 'Dimensions', value: 'N/A — software + gateway' },
    ],
    howItWorks: [
      'Connected devices and sensors feed data to the monitoring system.',
      'Data is aggregated and presented on the farm monitor interface.',
      'Users can view status and relevant information from one dashboard.',
    ],
    installation: [
      'Set up the monitoring gateway at the farm location.',
      'Connect compatible Novex devices and sensors.',
      'Access the dashboard through the provided login.',
    ],
    whatsIncluded: ['1x Novex Farm Monitor Gateway', 'Setup guide', 'Dashboard access'],
    warranty: 'Warranty information to be updated. Contact Novex Agro for current warranty terms.',
    faqs: [
      { question: 'What can I monitor with this system?', answer: 'The system is designed to monitor connected Novex devices and compatible sensors. Specific monitoring capabilities depend on your configuration.' },
    ],
  },
  {
    slug: 'novex-agricultural-data-logger',
    name: 'Novex Agricultural Data Logger',
    category: 'Data Loggers',
    categorySlug: 'data-loggers',
    shortDescription: 'Data logging device for recording agricultural and equipment operational information over time.',
    longDescription: 'The Novex Agricultural Data Logger records operational data from connected agricultural equipment and sensors, providing a historical record that can support better decision-making for farm operations.',
    image: 'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/163073/raspberry-pi-computer-linux-163073.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    price: 'Price on request',
    availability: 'Made to Order',
    features: [
      'Time-stamped data recording',
      'Supports multiple input channels',
      'Data export capability',
      'Compact field-ready design',
    ],
    specifications: [
      { label: 'Product Code', value: 'NX-DL-400' },
      { label: 'Channels', value: 'Edit to specify' },
      { label: 'Storage', value: 'Edit to specify' },
      { label: 'Sampling Rate', value: 'Edit to specify' },
      { label: 'Power', value: 'Edit to specify' },
    ],
    howItWorks: [
      'The data logger connects to sensors or equipment outputs.',
      'It records data at configured intervals with timestamps.',
      'Recorded data can be exported for analysis.',
    ],
    installation: [
      'Mount the logger at a suitable location.',
      'Connect input channels to sensors or equipment.',
      'Configure logging parameters and export settings.',
    ],
    whatsIncluded: ['1x Novex Data Logger', 'Configuration guide', 'Connection cables'],
    warranty: 'Warranty information to be updated. Contact Novex Agro for current warranty terms.',
    faqs: [
      { question: 'How do I retrieve the logged data?', answer: 'Data can be exported through the provided interface. Specific export methods depend on the configuration.' },
    ],
  },
  {
    slug: 'novex-motor-starter-unit',
    name: 'Novex Motor Starter Unit',
    category: 'Motor Starters',
    categorySlug: 'motor-starters',
    shortDescription: 'Starter unit designed for reliable starting and protection of agricultural motor applications.',
    longDescription: 'The Novex Motor Starter Unit provides a dependable starting and protection solution for agricultural motors, designed to handle the demands of regular farm operations.',
    image: 'https://images.pexels.com/photos/10290625/pexels-photo-10290625.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/10290625/pexels-photo-10290625.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    price: 'Price on request',
    availability: 'In Stock',
    features: [
      'Motor start and stop control',
      'Overload protection',
      'Field-duty construction',
      'Compatible with common motor types',
    ],
    specifications: [
      { label: 'Product Code', value: 'NX-MS-500' },
      { label: 'Motor Range', value: 'Edit to specify' },
      { label: 'Protection', value: 'Overload' },
      { label: 'Mounting', value: 'Panel mount' },
      { label: 'Enclosure', value: 'Field-rated' },
    ],
    howItWorks: [
      'The starter is wired between the power supply and the motor.',
      'It manages the start cycle and provides ongoing protection.',
      'Protection circuit disconnects power on overload conditions.',
    ],
    installation: [
      'Install in the motor control panel.',
      'Wire per the motor specifications and starter diagram.',
      'Configure protection settings for the motor rating.',
    ],
    whatsIncluded: ['1x Novex Motor Starter Unit', 'Wiring diagram', 'Mounting hardware'],
    warranty: 'Warranty information to be updated. Contact Novex Agro for current warranty terms.',
    faqs: [
      { question: 'What motor sizes does this support?', answer: 'Please contact Novex Agro with your motor specifications for sizing and compatibility.' },
    ],
  },
  {
    slug: 'novex-field-sensor-module',
    name: 'Novex Field Sensor Module',
    category: 'Sensors',
    categorySlug: 'sensors',
    shortDescription: 'Field-deployable sensor module for collecting environmental and operational data.',
    longDescription: 'The Novex Field Sensor Module is designed for deployment in agricultural environments to collect relevant data that can support monitoring and decision-making.',
    image: 'https://images.pexels.com/photos/12558693/pexels-photo-12558693.png?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/12558693/pexels-photo-12558693.png?auto=compress&cs=tinysrgb&w=1200',
    ],
    price: 'Price on request',
    availability: 'Pre-Order',
    features: [
      'Environmental data collection',
      'Field-deployable enclosure',
      'Low-power operation',
      'Compatible with Novex monitoring system',
    ],
    specifications: [
      { label: 'Product Code', value: 'NX-FS-600' },
      { label: 'Parameters', value: 'Edit to specify' },
      { label: 'Power', value: 'Low power' },
      { label: 'Communication', value: 'Edit to specify' },
      { label: 'Enclosure', value: 'Weather-resistant' },
    ],
    howItWorks: [
      'The sensor module is placed at the desired field location.',
      'It collects data at configured intervals.',
      'Data is transmitted to the connected Novex monitoring system.',
    ],
    installation: [
      'Position the sensor at the monitoring location.',
      'Power on and pair with the Novex system.',
      'Configure data collection parameters.',
    ],
    whatsIncluded: ['1x Novex Field Sensor Module', 'Deployment guide', 'Mounting bracket'],
    warranty: 'Warranty information to be updated. Contact Novex Agro for current warranty terms.',
    faqs: [
      { question: 'What parameters can this sensor measure?', answer: 'The sensor module is designed to support various agricultural parameters. Contact Novex Agro for specific sensing capabilities.' },
    ],
  },
  {
    slug: 'novex-connectivity-accessory-kit',
    name: 'Novex Connectivity Accessory Kit',
    category: 'Accessories',
    categorySlug: 'accessories',
    shortDescription: 'Accessory kit with essential connectivity components for Novex system installations.',
    longDescription: 'The Novex Connectivity Accessory Kit includes the essential components needed for installing and connecting Novex devices, supporting clean and reliable system setup.',
    image: 'https://images.pexels.com/photos/32894980/pexels-photo-32894980.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/32894980/pexels-photo-32894980.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    price: 'Price on request',
    availability: 'In Stock',
    features: [
      'Connection accessories for Novex devices',
      'Standardized components',
      'Installation support materials',
      'Spare parts included',
    ],
    specifications: [
      { label: 'Product Code', value: 'NX-ACC-700' },
      { label: 'Contents', value: 'Edit to specify' },
      { label: 'Compatibility', value: 'Novex product range' },
    ],
    howItWorks: [
      'Use the included components during device installation.',
      'Components are selected to match Novex device requirements.',
    ],
    installation: [
      'Refer to individual device installation guides for component usage.',
    ],
    whatsIncluded: ['Connectivity components', 'Installation accessories', 'Spare parts'],
    warranty: 'Warranty information to be updated. Contact Novex Agro for current warranty terms.',
    faqs: [
      { question: 'Is this kit required for all Novex installations?', answer: 'The kit supports installation but may not be required for every setup. Check your product documentation for specific requirements.' },
    ],
  },
];

export const productCategories = [
  'Motor Controllers',
  'Smart Switches',
  'Motor Starters',
  'Farm Monitoring',
  'Sensors',
  'Data Loggers',
  'Accessories',
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return products.slice(0, limit);
  return products.filter((p) => p.slug !== slug && p.categorySlug === product.categorySlug).concat(
    products.filter((p) => p.slug !== slug && p.categorySlug !== product.categorySlug)
  ).slice(0, limit);
}
