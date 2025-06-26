import {
  logo,
  backend,
  creator,
  mobile,
  web,
  dsa,
  github,
  menu,
  close,
  css,
  
  project2,
  project3,
  project4,
  mysql,
  express,
  aws,
  mui,
  supabase,
  stock,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structures and Algorithms",
    icon: dsa,
  }
  
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
    name: "React JS",
    icon: reactjs,
  },

 
  {
    name: "Three JS",
    icon: threejs,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
 
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "supabase",
    icon: supabase,
  }
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Vaibhav proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vaibhav does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Vaibhav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Rusticle",
    description:
      "A Custom Language Interpreter in Rust for new Lin Language, designed to enhance the development experience with features like syntax highlighting, error checking, and code completion.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "white-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/vaibhav-123-4/rusticle",
  },
  {
    name: "StockForesight",
    description:
      " Multiple linear regression AI stock price prediction system. It predicts stock prices using historical data and provides insights for informed investment decisions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/vaibhav-123-4/stockforesight",
  },
  {
    name: " HackThePlots",
    description:
      " Custom CTFplatform for Technical Fest’s flagship event- TechHunt. It is a Capture The Flag (CTF) platform that allows users to solve challenges and earn points.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/vaibhav-123-4/HackThePlots",
  },
  {
    name: " f1GPT",
    description:
      " f1GPT is a Formula 1 chatbot built with Next.js, React, and Together AI, designed to answer F1-related queries in real time. It integrates Astra DB for storing chat history and supports interactive conversations with AI-powered responses.",
    tags: [
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "white-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Astra DB",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/vaibhav-123-4/f1GPT",
  },
];

export { services, technologies, experiences, testimonials, projects, stock };
