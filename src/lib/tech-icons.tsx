import type { IconType } from 'react-icons';
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
    SiDocker,
    SiMqtt,
} from 'react-icons/si';

const techIconMap: Record<string, IconType> = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: SiReact,
    'next.js': SiNextdotjs,
    'node.js': SiNodedotjs,
    'tailwind css': SiTailwindcss,
    html: SiHtml5,
    css: SiCss,
    mysql: SiMysql,
    mongodb: SiMongodb,
    git: SiGit,
    docker: SiDocker,
    mqtt: SiMqtt,
};

export function getTechIcon(name: string): IconType | undefined {
    return techIconMap[name.toLowerCase()];
}