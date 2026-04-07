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
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "March 23, 2026",
    description:
      "Learned core data concepts, relational and non-relational data, and Azure data services.",
    image: assets.azure_database,
    link: "/certificates/azure_database.pdf",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "March 25, 2025",
    description:
      "Gained knowledge of AI concepts, machine learning, and Azure AI services.",
    image: assets.azure_AI,
    link: "/certificates/azure_ai_fundamentals.pdf",
  },
  {
    title: "Information Technology Specialist - Python",
    issuer: "Certiport / Pearson",
    date: "February 4, 2025",
    description:
      "Successfully completed Python certification covering programming fundamentals, problem solving, and real-world applications.",
    image: assets.python,
    link: "/certificates/python.pdf",
  },
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    date: "December 25, 2021",
    description:
      "Completed a full web development course covering HTML, CSS, JavaScript, React, and project-based learning.",
    image: assets.full_stack_development,
    link: "/certificates/full_stack.pdf",
  },
];
export const workData = [
  {
    title: "iLearning Solutions",
    description: "eLearning platform",
    bgImage: "/ilearning.png",
    link: "https://i-learning-solutions.vercel.app/",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Food Club",
    description: "Online food ordering website",
    bgImage: "/food.png",
    link: "https://food-club-f9921.web.app/",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "Car Vault",
    description: "Car selling website",
    bgImage: "/car.png",
    link: "https://car-vault.web.app/",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "InfoStark",
    description: "Digital marketing website",
    bgImage: "/infostark.png",
    link: "https://infostark.com/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Nike Store",
    description: "E-commerce frontend",
    bgImage: "/nike.png",
    link: "https://nike-shoe-ecommerce.netlify.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Interior Design",
    description: "Interior design website",
    bgImage: "/interio.png",
    link: "https://bd-interio.netlify.app/",
    tech: ["React", "CSS"],
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
    title: "Website Optimization & SEO",
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
    description: "JavaScript (ES6+), Python, React.js, Next.js, HTML, CSS",
    description2: "Tailwind CSS, Bootstrap, Node.js, Express.js, MongoDB",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Master of Information and Communications Technology. ",
    description2: "University of the Sunshine Coast, Adelaide, Australia",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built 5+ responsive and user-focused web applications",
    description2: "Including full-stack, e-commerce, and business websites",

  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const workExperience = [
  {
    company: "Americold Logistics",
    role: "Forklift Operator",
    period: "Jan 2026 – Present",
    responsibilities: [
      "Operate forklifts safely to move and organize stock",
      "Load, unload, and store goods in designated locations",
      "Support warehouse operations while maintaining safety standards",
    ],
  },
  {
    company: "iLearning Solutions",
    role: "Full Stack Developer",
    period: "Aug 2025 – Dec 2025",
    responsibilities: [
      "Developing scalable applications with Next.js & React",
      "Designing responsive UIs and managing APIs",
      "Optimizing performance, SEO, and deployments",
    ],
  },


  {
    company: "Climate Logistics",
    role: "Casual Warehouse Worker",
    period: "Nov 2024 – Aug 2025",
    responsibilities: [
      "Pick, pack, and prepare customer orders for dispatch",
      "Assist with ambient stock management and inventory handling",
      "Maintain warehouse cleanliness and support daily operations",
    ],
  },
  {
    company: "MHB-A Digital Web Design Agency",
    role: "Full Stack Developer",
    period: "Oct 2023 – Sep 2024",
    responsibilities: [
      "Developed MERN stack applications",
      "Built responsive UIs with React",
      "Managed APIs and databases",
      "Collaborated on secure client solutions",
    ],
  },
  {
    company: "Bookoceanbd.com",
    role: "Web Developer",
    period: "Aug 2021 – Sep 2023",
    responsibilities: [
      "Designed responsive websites",
      "Wrote clean, efficient code",
      "Optimized performance and SEO",
    ],
  },
];
