import { BiLogoTypescript } from "react-icons/bi";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiPostman, SiPrisma, SiShadcnui } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Skill } from "../types/interfaces";

export const frontEnd: Skill[] = [
    { name: "HTML", icon: FaHtml5, color: "text-red-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },
    { name: "React.js", icon: FaReact, color: "text-blue-500" },
    { name: "Next.js", icon: RiNextjsFill, color: "text-blue-500" },
]

export const backEnd: Skill[] = [
    { name: "Php", icon: FaPhp, color: "text-purple-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Typescript", icon: BiLogoTypescript, color: "text-blue-500" },
    { name: "Prisma", icon: SiPrisma, color: "text-blue-800" },
    { name: "MySql", icon: DiMysql, color: "text-blue-500" },
    { name: "PostgreSql", icon: DiPostgresql, color: "text-blue-500" },
]

export const others: Skill[] = [
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "Vscode", icon: VscVscode, color: "text-blue-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "Figma", icon: FaFigma, color: "text-white" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    { name: "Material UI", icon: SiMui, color: "text-blue-500" },
    { name: "Shadcn", icon: SiShadcnui, color: "text-white" },
]

export const intern: Skill[] = [
    { name: "HTML", icon: FaHtml5, color: "text-red-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },
    { name: "React.js", icon: FaReact, color: "text-blue-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "Figma", icon: FaFigma, color: "text-white" },
    { name: "Material UI", icon: SiMui, color: "text-blue-500" },
]

export const capstone: Skill[] = [
    { name: "HTML", icon: FaHtml5, color: "text-red-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Typescript", icon: BiLogoTypescript, color: "text-blue-500" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-500" },
    { name: "React.js", icon: FaReact, color: "text-blue-500" },
    { name: "Next.js", icon: RiNextjsFill, color: "text-blue-500" },
    { name: "Prisma", icon: SiPrisma, color: "text-blue-800" },
    { name: "PostgreSql", icon: DiPostgresql, color: "text-blue-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "Figma", icon: FaFigma, color: "text-white" },
    { name: "Shadcn", icon: SiShadcnui, color: "text-white" },
]