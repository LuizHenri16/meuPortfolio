import {
    SiOpenjdk,
    SiSpringboot,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiSupabase,
    SiDocker,
    SiGo,
} from "react-icons/si";

import { IconType } from "react-icons";

export interface Skill {
    name: string;
    icon: IconType;
    color: string;
    level: string;
}

export const SKILLS: Skill[] = [
    { name: "Java", icon: SiOpenjdk, color: "#ED8B00", level: "2 anos" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: "2 anos" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E", level: "1 ano" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "1 ano" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "5 anos" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "2 anos" },
    { name: "React", icon: SiReact, color: "#61DAFB", level: "2 anos" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "2 anos" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: "2 anos" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "2 anos" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: "1 ano" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: "1 ano" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", level: "1 ano" },
    { name: "Go", icon: SiGo, color: "#007D9C", level: "Iniciante" },
];
