import type { IconType } from "react-icons";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiMysql,
    SiMongodb,
    SiGit,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import type { SkillLevel } from "@/types/content";

export const skillIconMap: Record<string, IconType> = {
    javascript: SiJavascript,
    typeScript: SiTypescript,
    java: DiJava,
    react: SiReact,
    nextjs: SiNextdotjs,
    nodejs: SiNodedotjs,
    tailwindcss: SiTailwindcss,
    html: SiHtml5,
    css: SiCss,
    mysql: SiMysql,
    mongodb: SiMongodb,
    git: SiGit,
};

export const skillLevelLabel: Record<SkillLevel, string> = {
    1: 'Beginner',
    2: 'Beginner',
    3: 'Intermediate',
    4: 'Advanced',
    5: 'Expert',
};