import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import inderact from "@/public/inderact.jpg";
import indesk from "@/public/indesk.png";
import biopage from "@/public/bio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Engineering",
    location: "Madurai, TN",
    description:
      "Completed my engineering degree and started my career as a Front-End Developer intern.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Madurai, TN",
    description:
      "Worked as a Front-End Developer for two years, gaining expertise in building responsive and dynamic user interfaces. During this time, I also expanded my skill set to full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Software Developer",
    location: "Madurai, TN",
    description:
      "Currently working as a Software Developer with three years of experience in cross-platform app development for Android and iOS. I have also gained knowledge in system design and scalable application architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Whatsapp Chatbot",
    description:
      "Sending Whatsapp Campaigns and Templates. It has features like Chatbot, Scheduler, Real-time Communication ",
    tags: ["Flutter", "GETX", "API integration", "Socket IO"],
    imageUrl: inderact,
  },
  {
    title: "Task Management",
    description:
      "Task Management Application. I was the front-end developer. It has features like Filtering, sorting and Kanban Board.",
    tags: ["Flutter", "API Intergration", "GETX"],
    imageUrl: indesk,
  },

  {
    title: "Bio Page",
    description:
      "Unique bio for users who can add their links and social medias. ",
    tags: ["Flutter", "API Intergration", "GETX", "Random Color Scheme"],
    imageUrl: biopage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "JAVA",
  "Next.js",
  "Node.js",
  "Git & Github",
  "Tailwind",
  "MongoDB",
  "Flutter",
  "Firebase",
  "Firebase Functions",
  "System Design",
  "DSA",
  "LLD & HLD",
  "Linux",
  "XCode",
  "IOS",
] as const;
