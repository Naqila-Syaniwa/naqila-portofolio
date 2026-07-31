import type { IconType } from 'react-icons';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiVercel,
    SiHtml5,
    SiCss,
    SiMysql,
    SiMongodb,
    SiGit,
    SiDocker,
    SiMqtt,
    SiAndroidstudio,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const techIconMap: Record<string, IconType> = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: SiReact,
    'next.js': SiNextdotjs,
    'node.js': SiNodedotjs,
    'express.js': SiExpress,
    'tailwind css': SiTailwindcss,
    vercel: SiVercel,
    html: SiHtml5,
    css: SiCss,
    mysql: SiMysql,
    mongodb: SiMongodb,
    git: SiGit,
    docker: SiDocker,
    mqtt: SiMqtt,
    java: DiJava,
    'android studio': SiAndroidstudio,

};

export function getTechIcon(name: string): IconType | undefined {
    return techIconMap[name.toLowerCase()];
}