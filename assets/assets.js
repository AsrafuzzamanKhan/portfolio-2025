import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import profile_img1 from "./profile-img1.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import azure_database from './Azure_Database.png';
import azure_AI from './Azure_AI_Fundamentals.png';
import python from './Python.png';
import full_stack_development from './full_stack.png'

export const assets = {

  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  profile_img1,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  azure_AI,
  azure_database,
  python,
  full_stack_development
};
export const certificateData = [
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "23 March 2026",
    description:
      "Learned core data concepts, relational and non-relational data, and Azure data services.",
    image: assets.azure_database,
    link: "/certificates/azure_database.pdf",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "25 March 2025",
    description:
      "Gained knowledge of AI concepts, machine learning, and Azure AI services.",
    image: assets.azure_AI,
    link: "/certificates/azure_ai_fundamentals.pdf",
  },
  {
    title: "Information Technology Specialist: Python Programming",
    issuer: "Certiport / Pearson",
    date: "4 February 2025",
    description:
      "Successfully completed Python certification covering programming fundamentals, problem solving, and real-world applications.",
    image: assets.python,
    link: "/certificates/python.pdf",
  },
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    date: "25 December 2021",
    description:
      "Completed a full web development course covering HTML, CSS, JavaScript, React, and project-based learning.",
    image: assets.full_stack_development,
    link: "/certificates/full_stack.pdf",
  },
];
export const workData = [
  {
    title: "Mum's Kitchen",
    description: "Restaurant ordering, booking & POS-synced platform",
    bgImage: "/mumskitchen.png",
    link: "https://mumskitchentranmere.com.au",
    tech: ["Next.js 15", "TypeScript", "MongoDB Atlas", "NextAuth", "Stripe", "Epos Now POS"],
  },
  {
    title: "MediQube",
    description: "Telehealth & GP appointment platform (Master's capstone)",
    bgImage: "/mediqube.png",
    link: "https://mediqube-phi.vercel.app/",
    tech: ["Next.js", "Node.js", "MongoDB", "ZegoCloud", "JWT", "AES-256", "bcrypt"],
  },
  {
    title: "Inkdrop Studio",
    description: "Custom DTF t-shirt e-commerce platform. Containerised with Docker and built in a GitHub Actions pipeline",
    bgImage: "/inkdrop.png",
    link: "https://inkdrop-frontend.vercel.app/",
    tech: ["Next.js", "Express.js", "MongoDB", "Passport.js", "JWT", "Docker", "GitHub Actions"],
  },
  {
    title: "Solar Energy Platform",
    description: "Solar marketplace with installments & referrals",
    bgImage: "/solar.png",
    link: "https://solar-frontend-six.vercel.app/",
    tech: ["Next.js", "Express.js", "MongoDB", "SSLCommerz"],
  },
  {
    title: "iLearning Solutions",
    description: "eLearning platform",
    bgImage: "/ilearning.png",
    link: "https://i-learning-solutions.vercel.app/",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full-Stack Web Development",
    description:
      "Build modern web applications from responsive frontend interfaces to scalable backend solutions.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Responsive UI/UX Design",
    description:
      "Design clean, mobile-friendly, and user-focused interfaces for better usability and engagement.",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "Website Optimisation & SEO",
    description:
      "Improve speed, performance, SEO, and overall user experience for better visibility and results.",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Web Application Maintenance",
    description:
      "Provide ongoing updates, bug fixes, and improvements to keep applications secure and reliable.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Technical skills",
    description: "TypeScript, JavaScript, React, Next.js, Tailwind CSS",
    description2: "Node.js, Express.js, PostgreSQL, MongoDB, Docker, GitHub Actions",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Master of ICT, University of the Sunshine Coast, Adelaide",
    description2: "Bachelor of Computer Science and Engineering, IST, Dhaka",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built 5 full-stack web applications, including a live restaurant ordering site",
    description2: "Focused on security, payments, and real-world use",
  },
];

export const toolsData = [
  { icon: assets.vscode, name: "VS Code" },
  { icon: assets.firebase, name: "Firebase" },
  { icon: assets.mongodb, name: "MongoDB" },
  { icon: assets.figma, name: "Figma" },
  { icon: assets.git, name: "Git" },
];

export const workExperience = [
  {
    company: "Mum's Kitchen, Tranmere SA",
    link: "https://mumskitchentranmere.com.au",
    linkLabel: "mumskitchentranmere.com.au",
    role: "Freelance Full Stack Developer",
    period: "July 2026 – Present",
    responsibilities: [
      "Planned, built and launched an online ordering and table-booking site, with 150+ orders since launch",
      "Integrated Stripe payments and Epos Now POS, so orders and menus sync automatically",
      "Built a role-based admin panel that 3 staff use to manage orders and bookings",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Stripe", "Epos Now"],
  },
  {
    company: "iLearning Solutions, Adelaide",
    role: "Full Stack Developer (Practicum)",
    period: "Aug 2025 – Dec 2025",
    responsibilities: [
      "Built UI pages and REST API endpoints in a team, from requirements to deployment",
      "Tested and deployed updates through a CI/CD pipeline on Vercel",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Vercel"],
  },
  {
    company: "MHB-A Digital Web Design Agency",
    role: "Full Stack Developer",
    period: "Oct 2023 – Sep 2024",
    responsibilities: [
      "Built responsive React apps for 10+ clients, with Node.js/Express APIs and MongoDB models",
      "Fixed faults and shipped improvements on live client sites, using Git and code reviews",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Git"],
  },
  {
    company: "Book Ocean BD",
    link: "https://bookoceanbd.com",
    linkLabel: "bookoceanbd.com",
    role: "Web Developer",
    period: "Aug 2021 – Sep 2023",
    responsibilities: [
      "Maintained a live e-commerce site with 1,200 products and 500 customer accounts",
      "Built stock sync and order tracking, and set up Google Analytics and Tag Manager",
      "Promoted twice, starting as a Web Developer Intern",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Google Analytics", "Tag Manager"],
  },
];
