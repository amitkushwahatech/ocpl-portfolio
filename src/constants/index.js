import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "timeline",
    title: "Work",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Computing Services",
    icon: web,
    cname: "card1",
  },
  {
    title: "Kubernetes, Docker and Microservices",
    icon: web,
    cname: "card2",
  },
  {
    title: "AI and Machine Learning",
    icon: web,
    cname: "card3",
  },
  {
    title: "Edge Computing",
    icon: mobile,
    cname: "card4",
  },
  {
    title: "Internet of Things (IoT)",
    icon: backend,
    cname: "card2",
  },
  {
    title: "Blockchain Development",
    icon: creator,
    cname: "card4",
  },
  {
    title: "Web and Mobile Development",
    icon: backend,
    cname: "card1",
  },
  {
    title: "DevSecOps",
    icon: creator,
    cname: "card3",
  },
  {
    title: "Predictive Analytics",
    icon: creator,
    cname: "card4",
  },
  {
    title: "No-code Development",
    icon: backend,
    cname: "card1",
  },
  {
    title: "Outsourcing Development",
    icon: creator,
    cname: "card3",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Requirement Gathering And Analysis",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "It involves identifying, analyzing, and documenting the needs and objectives of the stakeholders and users, and transforming them into a set of detailed requirements that the software must meet.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
     
    ],
  },
  {
    title: "Design",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Software requirements are analyzed and transformed into a detailed system design document that outlines how the software will be built.",
      "This document describes the technical specifications of the software system including information about the software's architecture, design patterns, data models, interfaces, and algorithms that will be used to build the system.",
     
    ],
  },
  {
    title: "Implementation",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "During this phase, the software is developed according to the requirements and specifications defined by the client.",
      "Then the actual code is written using a programming language that is suitable for the project.",
    ],
  },
  {
    title: "Testing",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "In this step, the test team identifies the scope of the testing, the objectives, the types of tests that will be performed, and the resources required for testing",
      "Then prepares a final report which includes the overall quality of the software, the effectiveness of the testing process, and any recommendations for improvement.",
    ],
  },
  {
    title: "Maintenance",
    company_name: "Tesla",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "The Maintenance phase is where the software is monitored, updated, and improved after deployment.",
      "It is a continuous process that aims to keep the software functioning correctly, meet new user requirements, and fix any issues that arise.",
    ],
  },
  {
    title: "Deployment",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "The deployment phase is the final stage of the Software Development Life Cycle (SDLC), where the software is released for use by the end-users",
      "It involves deploying the software to the production environment and making it available for use.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    backgroundCl: "aqua",
    
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    backgroundCl: "crimson",
    
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    backgroundCl: "navajowhite",
    
  },
];

const projects = [
  {
    name: "OCPL Foundation",
    description:
      "Introducing a web-based platform that offers transparency, security, and efficiency in the charity donation process, ensuring that beneficiaries receive funds... ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://ocpl.tech/assets/ocplfoundation-0b9304b6.webp",
    source_code_link: "https://demo1.ocpl.tech/",
    cname: "card1",
  },
  {
    name: "OCPL HealthCare",
    description:
      "Introducing OCPL Healthcare, an innovative blockchain-based solution transforming the healthcare industry. This cutting-edge platform enhances data security...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    image: "https://ocpl.tech/assets/ocplhealth-5eff5fed.webp",
    source_code_link: "https://demo2.ocpl.tech/",
    cname: "card2",
  },
  {
    name: "OCPL Real Estate",
    description:
      "Discover OCPL RealEstate, a pioneering solution that integrates blockchain technology into the real estate industry. OCPL RealEstate revolutionizes traditional ...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "	https://ocpl.tech/assets/ocplreal-823994d8.webp",
    // image: tripguide,
    source_code_link: "https://demo5.ocpl.tech/",
    cname: "card3",
  },
  {
    name: "OCPL Finance",
    description:
      "OCPL Finance, a blockchain-based solution, revolutionizes financial institutions' operations. Offering a secure, decentralized platform for seamless...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    // image: "	https://ocpl.tech/assets/ocplfinance-ae42597a.webp",
    image: tripguide,
    source_code_link: "https://demo3.ocpl.tech/",
    cname: "card3",
  },
  {
    name: "OCPL CRM Omega",
    description:
      "Experience the power of CRM Omega, a versatile platform for seamless contact management, sales automation, and robust reporting. Enhance team collaboration...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://ocpl.tech/assets/ocplcrm-31608eda.webp",
    source_code_link: "https://demo4.ocpl.tech/dashboard",
    cname: "card4",
  },
  {
    name: "OCPL CRM Alpha",
    description:
      "Boost your customer relations with CRM Alpha, an intuitive, feature-rich solution that streamlines lead management, sales tracking, and customer support...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "	https://ocpl.tech/assets/crm-1ad4ba74.webp",
    source_code_link: "https://demo7.ocpl.tech/",
    cname: "card2",
  },
  {
    name: "OCPL CRM Omega",
    description:
      "Experience the power of CRM Omega, a versatile platform for seamless contact management, sales automation, and robust reporting. Enhance team collaboration...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://ocpl.tech/assets/ocplgaming-46adc2c8.webp",
    source_code_link: "https://demo6.ocpl.tech/",
    cname: "card4",
  },
  {
    name: "OCPL CRM Alpha",
    description:
      "We use blockchain technology to provide a secure and transparent platform for buying, selling, and trading virtual assets. Each asset has a unique digital identity that is verified on the blockchain, making it impossible to duplicate or counterfeit.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "	https://ocpl.tech/assets/crm-1ad4ba74.webp",
    source_code_link: "https://demo7.ocpl.tech/",
    cname: "card2",
  },
];

export { services, technologies, experiences, testimonials, projects };
