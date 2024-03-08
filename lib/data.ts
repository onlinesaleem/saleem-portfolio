import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Programmer",
    location: "Chennai, India",
    description:
      "after master degree. I immediately found a job as a programmer.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Full-Stack Developer",
    location: "Najran,Saudi Arabia",
    description:
      "I worked as a full-stack developer for 5 years . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Riyadh, Saudi Arabia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes Java, Spring Boot, React, Next.js, TypeScript, Tailwind, Prisma,Mysql  and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ticketing System",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Hospital industry.",
    tags: ["Java", "Jsp", "mysql", "java -spring"],
    imageUrl: corpcommentImg,
  },
  {
    title: "OVR system",
    description:
      "full functional OVR system Hospital compilance with the JCI",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Quality Management System",
    description:
      "fully functional quality management system for healthcare industry ",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;