import type { Solution } from '@/types';

export const solutions: Solution[] = [
  {
    slug: 'smart-irrigation',
    name: 'Smart Irrigation',
    icon: 'Droplets',
    shortDescription: 'Automated and remotely controllable irrigation systems that reduce manual intervention and improve water management.',
    longDescription: 'Novex Smart Irrigation solutions bring automation and remote control to farm irrigation, allowing water flow to be managed more precisely and with less manual effort.',
    image: 'https://images.pexels.com/photos/17765487/pexels-photo-17765487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    problem: 'Traditional irrigation often requires manual valve operation and regular field visits, making it time-consuming and difficult to manage efficiently.',
    approach: 'Novex enables remote and scheduled control of irrigation equipment, allowing farmers to manage water delivery without being physically present at each point.',
    howItWorks: [
      'Connect irrigation pumps and valves to Novex control devices.',
      'Configure schedules or operate remotely through the control interface.',
      'Monitor irrigation status from a centralized dashboard.',
    ],
    capabilities: [
      'Remote pump start/stop',
      'Scheduling for irrigation cycles',
      'Status monitoring and feedback',
      'Integration with Novex monitoring system',
    ],
    useCases: [
      'Drip and sprinkler irrigation management',
      'Multi-pump field operations',
      'Scheduled watering cycles',
    ],
    technology: ['Novex Smart Motor Controller', 'Novex Mobile Auto Switch', 'Novex Farm Monitor'],
    faqs: [
      { question: 'Can I automate my existing irrigation pump?', answer: 'Novex controllers are designed for common pump configurations. Contact us with your equipment details for compatibility confirmation.' },
    ],
    featured: true,
  },
  {
    slug: 'remote-motor-control',
    name: 'Remote Motor Control',
    icon: 'Radio',
    shortDescription: 'Operate agricultural motor pumps and equipment remotely without manual field visits.',
    longDescription: 'Remote Motor Control solutions from Novex allow farmers to start, stop and monitor motors from anywhere, reducing the need for physical travel to equipment locations.',
    image: 'https://images.pexels.com/photos/34194564/pexels-photo-34194564.jpeg?auto=compress&cs=tinysrgb&w=1200',
    problem: 'Operating agricultural motors typically requires being physically present at the pump location, which is time-consuming and inconvenient, especially across large farms.',
    approach: 'Novex provides remote control capability for motor pumps, enabling operation through a mobile or centralized interface without visiting the equipment site.',
    howItWorks: [
      'Install a Novex motor controller at the pump location.',
      'Connect the controller to the motor wiring.',
      'Operate the motor remotely through the Novex control interface.',
    ],
    capabilities: [
      'Remote start/stop for motor pumps',
      'Operational status feedback',
      'Mobile-based control',
      'Multi-device management',
    ],
    useCases: [
      'Remote pump operation across large farms',
      'After-hours motor control',
      'Multi-pump management from one interface',
    ],
    technology: ['Novex Smart Motor Controller', 'Novex Mobile Auto Switch'],
    faqs: [
      { question: 'Do I need internet at the pump location?', answer: 'Connectivity requirements depend on the specific product configuration. Please check product documentation or contact support.' },
    ],
    featured: true,
  },
  {
    slug: 'farm-monitoring',
    name: 'Farm Monitoring',
    icon: 'Activity',
    shortDescription: 'Centralized monitoring of equipment status, field conditions and operational data.',
    longDescription: 'Novex Farm Monitoring brings visibility to farm operations by collecting and displaying equipment and field data in one accessible interface.',
    image: 'https://images.pexels.com/photos/5230957/pexels-photo-5230957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    problem: 'Without monitoring, farmers have limited visibility into equipment status and field conditions, making it hard to identify issues early.',
    approach: 'Novex provides a monitoring platform that aggregates data from connected devices, giving farmers a single view of their operations.',
    howItWorks: [
      'Deploy Novex sensors and monitoring devices across the farm.',
      'Data is collected and sent to the Novex monitoring platform.',
      'View equipment status and field data from a centralized dashboard.',
    ],
    capabilities: [
      'Equipment status monitoring',
      'Field data collection',
      'Historical data access',
      'Dashboard accessible from mobile and desktop',
    ],
    useCases: [
      'Pump and motor status monitoring',
      'Multi-location farm visibility',
      'Equipment uptime tracking',
    ],
    technology: ['Novex Farm Monitor', 'Novex Field Sensor Module'],
    faqs: [
      { question: 'What devices can I monitor?', answer: 'The system monitors connected Novex devices and compatible sensors. Contact us for specific monitoring requirements.' },
    ],
  },
  {
    slug: 'agricultural-automation',
    name: 'Agricultural Automation',
    icon: 'Cpu',
    shortDescription: 'Automate repetitive farm operations with scheduling and intelligent device control.',
    longDescription: 'Novex Agricultural Automation solutions reduce manual workload by automating repetitive tasks such as pump operation and equipment switching.',
    image: 'https://images.pexels.com/photos/18135422/pexels-photo-18135422.jpeg?auto=compress&cs=tinysrgb&w=1200',
    problem: 'Many farm operations involve repetitive manual tasks that consume significant time and labor.',
    approach: 'Novex enables automation of equipment operation through scheduling and rule-based control, reducing the need for constant manual intervention.',
    howItWorks: [
      'Connect equipment to Novex control devices.',
      'Configure automation schedules and rules.',
      'Equipment operates automatically based on the configured logic.',
    ],
    capabilities: [
      'Scheduled equipment operation',
      'Automated start/stop sequences',
      'Rule-based control logic',
      'Integration with monitoring system',
    ],
    useCases: [
      'Automated irrigation scheduling',
      'Timed equipment operation',
      'Sequential pump management',
    ],
    technology: ['Novex Smart Motor Controller', 'Novex Mobile Auto Switch', 'Novex Farm Monitor'],
    faqs: [
      { question: 'Can I set custom automation schedules?', answer: 'Yes, the Novex system supports configurable schedules for connected devices. Specific scheduling capabilities depend on your product configuration.' },
    ],
  },
  {
    slug: 'precision-agriculture',
    name: 'Precision Agriculture',
    icon: 'Target',
    shortDescription: 'Data-driven approach to farm management using collected field and operational data.',
    longDescription: 'Novex Precision Agriculture solutions use data collected from field sensors and equipment to support more informed decision-making.',
    image: 'https://images.pexels.com/photos/20286981/pexels-photo-20286981.jpeg?auto=compress&cs=tinysrgb&w=1200',
    problem: 'Without accurate data, farm management decisions rely on estimates and routine rather than actual conditions.',
    approach: 'Novex collects operational and field data over time, providing a foundation for more precise and informed farm management.',
    howItWorks: [
      'Deploy Novex sensors to collect field data.',
      'Data is logged and aggregated over time.',
      'Use collected data to inform operational decisions.',
    ],
    capabilities: [
      'Field data collection',
      'Historical data logging',
      'Data export for analysis',
      'Integration with monitoring dashboard',
    ],
    useCases: [
      'Irrigation optimization',
      'Equipment performance tracking',
      'Operational data analysis',
    ],
    technology: ['Novex Field Sensor Module', 'Novex Agricultural Data Logger', 'Novex Farm Monitor'],
    faqs: [
      { question: 'What kind of data can I collect?', answer: 'The system collects data from connected Novex sensors and devices. Specific data types depend on your sensor configuration.' },
    ],
  },
  {
    slug: 'energy-resource-management',
    name: 'Energy & Resource Management',
    icon: 'Gauge',
    shortDescription: 'Monitor and optimize energy use and resource consumption across farm operations.',
    longDescription: 'Novex Energy & Resource Management solutions help farmers understand and manage energy consumption and resource use across their operations.',
    image: 'https://images.pexels.com/photos/12032543/pexels-photo-12032543.jpeg?auto=compress&cs=tinysrgb&w=1200',
    problem: 'Energy and resource consumption across farm operations is often difficult to track, making optimization challenging.',
    approach: 'Novex provides monitoring and data logging that can help farmers understand consumption patterns and identify opportunities for efficiency.',
    howItWorks: [
      'Connect Novex monitoring devices to relevant equipment.',
      'Operational data is collected and logged over time.',
      'Analyze data to understand resource usage patterns.',
    ],
    capabilities: [
      'Equipment runtime tracking',
      'Operational data logging',
      'Usage pattern analysis',
      'Dashboard-based visibility',
    ],
    useCases: [
      'Pump energy usage monitoring',
      'Equipment runtime optimization',
      'Resource consumption tracking',
    ],
    technology: ['Novex Farm Monitor', 'Novex Agricultural Data Logger'],
    faqs: [
      { question: 'Can this track my electricity consumption?', answer: 'The system tracks operational data from connected equipment. Specific energy monitoring capabilities depend on your device configuration.' },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
