import serviceInstallation from '../assets/images/services/service-solar-installation.png';
import serviceInverter from '../assets/images/services/service-inverter-battery.png';
import serviceWaterHeater from '../assets/images/services/service-solar-water-heater.png';
import serviceStreetLight from '../assets/images/services/service-solar-street-light.png';
import serviceEpc from '../assets/images/services/service-solar-epc.png';
import serviceMaintenance from '../assets/images/services/service-solar-maintenance.png';

import productSolarPanel from '../assets/images/products/product-solar-panel.png';
import productDiyKit from '../assets/images/products/product-diy-kit.png';
import productSolarPump from '../assets/images/products/product-solar-pump.png';
import productStreetLight from '../assets/images/products/product-street-light.png';
import productOutdoorFan from '../assets/images/products/product-outdoor-fan.png';
import productCeilingFan from '../assets/images/products/product2-ceiling-fan.svg';
import productGardenLight from '../assets/images/products/product-garden-light.png';
import productMiniLight from '../assets/images/products/product-mini-light.png';

export const SERVICES = [
  {
    id: 'panel-installation',
    title: 'Solar Panel Installation',
    iconName: 'sun',
    image: serviceInstallation,
    description: 'We provide high-efficiency solar panels for residential, commercial, and industrial use. Our expert team ensures a seamless installation process, maximizing energy output and efficiency.',
    benefits: [
      'Tailored engineering designs for roof layouts',
      'High-efficiency monocrystalline/polycrystalline modules',
      'Maximum daily solar energy generation',
      'Weather-resistant, long-life structural mounts'
    ],
    process: [
      'Roof analysis and load capacity checking',
      'Angle orientation optimization for max sunlight',
      'Structure assembly and panel anchoring',
      'Electrical connection and inverter wiring'
    ],
    href: '/services#panel-installation'
  },
  {
    id: 'inverters-batteries',
    title: 'Inverters & Battery Backup',
    iconName: 'power',
    image: serviceInverter,
    description: 'Convert solar energy into usable electricity with our reliable solar inverters. Plus, enjoy uninterrupted power supply with long-lasting solar battery storage solutions.',
    benefits: [
      'High conversion efficiency inverters',
      'Smart power grid fallback switching',
      'High-capacity solar compatible batteries',
      'Long warranty profiles'
    ],
    process: [
      'Energy consumption assessment',
      'Inverter load capacity match checks',
      'Safe battery cabinet installation',
      'Testing backup switch response'
    ],
    href: '/services#inverters-batteries'
  },
  {
    id: 'water-heating',
    title: 'Solar Water Heating Solutions',
    iconName: 'droplet',
    image: serviceWaterHeater,
    description: 'Reduce your electricity costs with solar water heaters, perfect for homes, hotels, hospitals, and commercial spaces. Get hot water using solar energy and save on energy bills!',
    benefits: [
      'Up to 80% reduction in water heating bills',
      'Glass-lined inner tanks for rust protection',
      'Hot water availability even on cloudy days',
      'Safe, eco-friendly heating'
    ],
    process: [
      'Assessment of daily hot water demand',
      'Roof height & water pressure review',
      'Collector and storage tank integration',
      'Plumbing pipeline connections & safety tests'
    ],
    href: '/services#water-heating'
  },
  {
    id: 'street-lighting',
    title: 'Solar Street Lighting Systems',
    iconName: 'lightbulb',
    image: serviceStreetLight,
    description: 'Brighten up streets, public areas, and commercial spaces with solar-powered street lights. These automatic, energy-efficient, and cost-effective lighting solutions provide safety and sustainability.',
    benefits: [
      ' Dusk-to-dawn automatic sensory controllers',
      'Zero utility electricity cost',
      'No complex trenching or wiring required',
      'Integrated long-life lithium batteries'
    ],
    process: [
      'Lighting coverage design',
      'Pole installation and anchoring',
      'Solar light fixture mounting',
      'Sensitivity calibration'
    ],
    href: '/services#street-lighting'
  },
  {
    id: 'epc-services',
    title: 'Solar EPC Services',
    iconName: 'activity',
    image: serviceEpc,
    description: 'From design and procurement to installation and maintenance, we offer end-to-end EPC services for large-scale solar projects. Our expertise ensures optimal system performance and long-term savings.',
    benefits: [
      'Backed by Riyansh Solar Power Plus Pvt Ltd core engine',
      'End-to-end site approvals and coordination',
      'Highest safety and quality construction compliance',
      'Maximum return on investment (ROI)'
    ],
    process: [
      'Detailed engineering system layouts',
      'Procuring tier-1 equipment and components',
      'Executing onsite civils & electrical construction',
      'Commissioning & state board net metering activation'
    ],
    href: '/services#epc-services'
  },
  {
    id: 'maintenance-support',
    title: 'Solar Maintenance & Support',
    iconName: 'wrench',
    image: serviceMaintenance,
    description: 'We provide regular inspections, cleaning, and servicing to keep your solar power system running at peak efficiency. Our expert technicians ensure long-term reliability and maximum energy output.',
    benefits: [
      'Comprehensive dirt & dust cleaning protocols',
      'Preventive wiring & connector checks',
      'Performance reporting & yields verification',
      'Quick repair turnaround window'
    ],
    process: [
      'Site visual and electrical diagnostics',
      'Dust layer purging using soft water methods',
      'Tightening electrical terminations',
      'Inverter performance logging verify'
    ],
    href: '/services#maintenance-support'
  }
];

export const PRODUCTS = [
  {
    id: 'solar-panel-epc',
    name: 'Solar Panel System (EPC Setup)',
    category: 'Solar Panels',
    iconName: 'sun',
    image: productSolarPanel,
    description: 'Engineered, procured, and installed by Riyansh Solar Power Plus Pvt Ltd. High performance solar output for years to come.',
    warranties: [
      'Panel -- 25 Years of Performance Warranty',
      'Inverter -- 5 Years + Extended Warranty Package'
    ]
  },
  {
    id: 'solar-diy-package',
    name: 'DIY Grid Solar System Package',
    category: 'Grid DIY',
    iconName: 'settings',
    image: productDiyKit,
    description: 'Ready-to-assemble DIY package containing all matching materials to setup a grid connected solar station on your own terms. Installation is not included.',
    warranties: [
      'Panel -- 25 Years of Performance Warranty',
      'Inverter -- 2 Years + Extended Warranty Package',
      'Battery -- 2 Years DIY Ready Package'
    ]
  },
  {
    id: 'water-pump-system',
    name: 'Solar Water Pump System',
    category: 'Water Pump',
    iconName: 'droplet',
    image: productSolarPump,
    description: 'Solar powered pumps ideal for farming, irrigation, and deep-borewells. Includes controller. Mount structure, pipes and installation can be provided at additional cost by Riyansh Solar.',
    warranties: [
      'Panel -- 25 Years of Performance Warranty',
      'Pump -- 1 Year + Extended Warranty',
      'Controller -- 1 Year + Extended Warranty'
    ]
  },
  {
    id: 'solar-street-light-premium',
    name: 'Solar Street Lights',
    category: 'Street Light',
    iconName: 'lightbulb',
    image: productStreetLight,
    description: 'All-in-one automatically controlled solar street lights with integrated lithium batteries, sensors and dusk-to-dawn modules.',
    warranties: [
      'Solar Street Light -- Up to 5 Years of Product Warranty',
      'Add-On Protection -- 1 Year Extended Warranty'
    ]
  },
  {
    id: 'solar-fans-outdoor',
    name: 'Solar Outdoor Fans',
    category: 'Outdoor',
    iconName: 'fan',
    image: productOutdoorFan,
    description: 'Highly efficient solar fans engineered for outdoor operations, agricultural sheds, garages and public spaces with robust protection.',
    warranties: [
      'Solar Fans -- Up to 15 Years of Product Warranty',
      'Add-On Protection -- 1 Year Extended Warranty'
    ]
  },
  {
    id: 'solar-fans-premium',
    name: 'Solar Home & Ceiling Fans',
    category: 'Fans',
    iconName: 'fan',
    image: productCeilingFan,
    description: 'Energy-saving solar fans optimized for residential rooms and indoor setups, offering cooling with minimal energy draw.',
    warranties: [
      'Solar Fans -- Up to 15 Years of Product Warranty',
      'Add-On Protection -- 5 Years Extended Warranty'
    ]
  },
  {
    id: 'solar-wall-lights',
    name: 'Solar Wall & Garden Lights',
    category: 'Wall Lights',
    iconName: 'lightbulb',
    image: productGardenLight,
    description: 'Weatherproof accent wall lights and garden pathway lights providing safety, ambient illumination and ease of operation.',
    warranties: [
      'Outdoor Light -- 1 Year of Product Warranty',
      'Add-On Protection -- 1 Year Extended Warranty'
    ]
  },
  {
    id: 'solar-mini-lights',
    name: 'Solar Mini Utility Lights',
    category: 'Mini Light',
    iconName: 'sparkles',
    image: productMiniLight,
    description: 'Portable solar powered utility lights for emergencies, study, camping, or small cabins and closets.',
    warranties: [
      'Solar Mini Light -- Up to 1 Year of Product Warranty'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Authorized Franchise',
    description: 'Backed by Riyansh Solar Power Plus Pvt Ltd',
    details: 'Our affiliation guarantees access to certified tier-1 accessories, experienced design software engines, and original hardware backing.'
  },
  {
    title: 'Premium Quality',
    description: 'Industry-leading solar technology with warranties',
    details: 'Every item we source meets stringent MNRE guidelines, offering performance assurances like 25-years solar panel lifecycle warranty.'
  },
  {
    title: 'Customized Solutions',
    description: 'Designed to meet your specific energy needs',
    details: 'Unlike cookie-cutter vendors, we map your historical energy curves and shading analysis to configure optimal output sizes.'
  },
  {
    title: 'Affordable Pricing & Financing',
    description: 'Cost-effective solar investment',
    details: 'We offer fair upfront layouts, net metering integration to recover costs, and guidance on financing options.'
  },
  {
    title: 'Expert Installation & Maintenance',
    description: 'Hassle-free and professional service',
    details: 'From structure fixing, secure electrical routing tests, and net metering handovers, to post-install cleans, we do it all.'
  }
];

export const BENEFITS = [
  {
    title: 'Reduced Electricity Costs',
    description: 'Installing solar panels can slash your monthly electricity bills by up to 80-90% by producing your own clean power.',
    iconName: 'power'
  },
  {
    title: 'Clean Renewable Energy',
    description: 'Reduce your carbon footprint. Solar energy is 100% clean and generates zero greenhouse emissions during operation.',
    iconName: 'sun'
  },
  {
    title: 'Long-Term Savings',
    description: 'With a lifecycle of 25+ years, solar setups recover their initial cost within 3-4 years and produce free energy for decades.',
    iconName: 'activity'
  },
  {
    title: 'Energy Independence',
    description: 'Protect your family or facility from unpredictable grid power cuts, fuel price hikes, and utility inflation.',
    iconName: 'settings'
  },
  {
    title: 'Low Maintenance',
    description: 'Solar panels have no moving parts, meaning minimal wears. Standard washing and annual diagnostic checks are sufficient.',
    iconName: 'wrench'
  },
  {
    title: 'Increased Property Value',
    description: 'Residences and commercial structures equipped with solar networks enjoy higher real-estate demand and market premiums.',
    iconName: 'droplet'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Discuss your power bills and energy goals. Our solar consultants explain setups, sizing, and subsidy applications.'
  },
  {
    step: '02',
    title: 'Site Assessment',
    description: 'Technicians inspect your roof structure, shadow blocks, orientation profile, and connection nodes for system layout.'
  },
  {
    step: '03',
    title: 'System Design & Installation',
    description: 'We draft structural schematics, source approved materials, and execute a code-compliant installation.'
  },
  {
    step: '04',
    title: 'Support & Maintenance',
    description: 'We verify net metering, activate monitoring software, and provide washing guides and cleaning services.'
  }
];
