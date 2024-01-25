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
    title: "Graduated Engineering",
    location: "Madurai, TN",
    description:
      "I graduated after Engineering. I immediately found a job as a front-end developer intern.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Madurai, TN",
    description:
      "I worked as a front-end developer for 1 years of experience. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },

] as const;

export const projectsData = [
  {
    title: "Whatsapp Chatbot",
    description:
      "Sending Whatsapp Campaigns and Templates. It has features like Chatbot, Scheduler, Real-time Communication ",
    tags: ["Flutter", "GETX", "API integration", "Socket IO", ],
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
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GETX",
  "MongoDB",
  "Flutter",
  "Express",
  "Framer Motion",
] as const;
