import project from '../../components/images/project.png';
import projectDetail from '../../components/images/project-detail.png'; 
import projectShowcase from '../../components/images/project-showcase.png';
import projectShowcase1 from '../../components/images/project-showcase-1.png';
import projectShowcase2 from '../../components/images/project-showcase-2.png';
import project1 from '../../components/images/project-1.png';
import project1Detail from '../../components/images/project-1-detail.png';
import project1Showcase from '../../components/images/project-1-showcase.png'; 
import project1Showcase2 from '../../components/images/project-1-showcase-2.png'; 
import project2 from '../../components/images/project-2.png';
import project2Detail from '../../components/images/project-2-detail.png'; 
import project3 from '../../components/images/project-3.png';
import project3Detail from '../../components/images/project-3-detail.png'; 
import project3Showcase from '../../components/images/project-3-showcase.png'; 
import project4Showcase from '../../components/images/project-4-showcase.png'; 
import landingPageImage from '../../components/images/lpage.png';

export const projectsData = [
  {
    id: 'Magic Matrimony',
    image: project,
    detailImage: projectDetail,
    galleryVariant: 'full-image-gallery',
    showcaseImages: [ 
      projectShowcase,
      projectShowcase1,
      projectShowcase2
    ],
    category: 'Web Application · Websites',
    title: 'Magic Matrimony',
    description: 'Customizable Matrimony Website Builder',
    tags: ['UX Research', 'Mobile Design', 'Website Templates'],
    client: 'Lively Works',
    duration: '4 months',
    role: 'UI/UX Designer & Frontend Developer',
    year: '2026',
    overview: "A scalable matrimony platform that enables individuals, businesses, or communities to launch their own fully customized matrimony websites based on their specific requirements. The system provides a flexible, user-friendly solution for creating personalized matchmaking platforms without complex technical setup.",
    challenge: "Designing and developing the matrimony platform involved balancing complex user needs with a simple and intuitive experience, as the system had to support different communities, customizable matchmaking criteria, and flexible website configurations without overwhelming users.",
    solution: "To address these challenges, we designed a modular and scalable system with reusable UI components and flexible design patterns that allow easy customization without increasing complexity",  
  },
  {
    id: 'Website Templates',
    image: project1,
    detailImage: project1Detail,
    galleryVariant: 'template-gallery',
    showcaseImages: [ 
      project1Showcase,
      project1Showcase2
    ],
    category: 'Templates · Websites',
    title: 'Website Templates',
    description: 'P-Card lets users quickly launch customizable websites using ready-made templates.',
    tags: ['Desktop Design', 'Mobile Design', 'Website Templates'],
    client: 'P-Card',
    duration: '2 months',
    role: 'Web Designer',
    year: '2025',
    overview: "P-Card is a ready-to-use website template platform designed to help individuals, startups, and businesses quickly create and launch their websites without complex development. It provides professionally designed, responsive templates and pre-built UI components that users can easily customize based on their branding and content needs.",
    challenge: "Creating the P-Card website template platform involved designing templates that are flexible enough to suit different industries while still maintaining a consistent and simple user experience. Balancing customization with ease of use was challenging, as the interface needed to allow users to modify content, layout, and branding without confusion.",
    solution: "To solve these challenges, we built a modular and scalable design system with reusable components that allow easy customization while maintaining consistency across templates. We simplified the editing experience with intuitive layouts and structured content sections so users can quickly update branding, content, and design without technical complexity.",  
  },
  {
    id: 'AI-PY Console',
    image: project2,
    detailImage: project2Detail,
    galleryVariant: 'full-image-gallery',
    showcaseImages: [ 
      project3Showcase
    ],
    category: 'Dashboard · Console',
    title: 'AI-PY Console',
    description: 'An AI-powered Python console dashboard for real-time insights and intelligent workflows.',
    tags: ['Dashboard Design', 'Realtime COnsole', 'Design System'],
    client: 'Lighthouse',
    duration: '1 months',
    role: 'Lead UI/UX Designer',
    year: '2025',
    overview: "An AI Python Console Dashboard is an intelligent monitoring platform that tracks, manages, and provides insights about all ongoing Python projects in one centralized interface. It allows users to monitor project status, execution progress, performance metrics, and system activities in real time while providing AI-powered insights, error detection, and optimization suggestions.",
    challenge: "Building the AI Python Console Dashboard involved handling complex real-time data tracking while keeping the interface simple and easy to understand. Designing a system that can monitor multiple Python projects simultaneously, display accurate execution status, and manage large volumes of logs and performance data without slowing down the dashboard was challenging.",
    solution: "To address these challenges, we developed a scalable and modular dashboard architecture that efficiently handles real-time data processing and monitoring for multiple Python projects. We designed a clean and intuitive interface with structured data visualization to simplify complex logs, execution status, and performance metrics",
    results: [
      { metric: '85%', label: 'Faster Decision Making', description: 'Reduction in analysis time' },
      { metric: '+95%', label: 'User Adoption', description: 'Within first month' },
      { metric: '80%', label: 'Fast Problem Solving', description: 'Fast with the problem solving' },
      { metric: '40%', label: 'Efficiency Gain', description: 'In workflow completion' }
    ],
  },
  {
    id: 'GridMeta-Layout Builder',
    image: project3,
    detailImage: project3Detail,
    galleryVariant: 'full-image-gallery',
    showcaseImages: [ 
      project4Showcase
    ],
    category: 'Layout Builder · Dashboard',
    title: 'GridMeta-Layout Builder',
    description: 'Complete redesign of shopping experience with personalized AI recommendations',
    tags: ['E-commerce', 'Conversion', 'Personalization'],
    client: 'ShopSmart Inc.',
    duration: '5 months',
    role: 'Lead UI/UX Designer',
    year: '2024',
    overview: "A Layout Builder is an interactive platform that allows users to design and manage layouts for warehouses, factories, or large storage facilities through a structured visual interface. Users can create different sections, organize storage areas, and map operational spaces based on their requirements. The system integrates with SQL databases to display real-time data related to each layout section, such as stored inventory, capacity, and operational details.",
    challenge: "Designing the layout builder in Figma was challenging because it required creating a highly flexible and scalable design that could represent complex warehouse or factory structures while still being easy to use. Visualizing large spaces, multiple sections, and detailed storage areas without making the interface cluttered was difficult. Creating interactive layout components like grids, drag-and-drop sections, and clear spatial hierarchy needed careful planning.",
    solution: "To solve these challenges, we created a structured and scalable design system with reusable layout components, grids, and predefined section modules to simplify the creation of complex warehouse and factory structures. We designed an intuitive drag-and-drop interaction pattern and clear visual hierarchy to help users easily organize large spaces without confusion. Data visualization elements were standardized to clearly represent SQL-driven information like inventory and capacity for each section.",
  },
  {
    id: 'Landing Pages',
    image: landingPageImage,
    category: 'Landing Pages Â· Websites',
    title: 'Landing Pages',
    description: 'High-conversion landing page designs built to highlight products, offers, and brand messaging with clarity.',
    tags: ['Landing Page Design', 'Responsive Design', 'Conversion Focused'],
    client: 'Various Brands',
    duration: 'Ongoing',
    role: 'Web Designer',
    year: '2026',
    overview: "A landing page design project focuses on building visually strong, conversion-oriented web pages that clearly communicate a product, service, or campaign. These pages are designed to guide visitors toward a focused action while keeping the layout polished, responsive, and easy to scan.",
    challenge: "Creating effective landing pages required balancing strong visual appeal with clear messaging hierarchy and conversion flow. The challenge was to make every section feel engaging without distracting users from the main call to action, while still keeping the designs adaptable to different brands and offers.",
    solution: "To solve this, we designed modular landing page sections with clear content flow, strong visual hierarchy, and flexible responsive layouts. This made it easier to create pages that feel brand-specific while still following proven structure for readability, trust, and conversion.",
  }
];
