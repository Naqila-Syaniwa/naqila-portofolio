export interface AboutContent {
    name: string;
    initials: string;
    roles: string[];
    bioByRole: Record<string, string[]>;
    cvUrl: string;
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
    name: string;
    icon: string;
    level: SkillLevel;
}

export interface SkillCategory {
    id: string;
    title: string;
    skills: Skill[];
}

export interface Experience {
    id: string;
    title: string;
    organization: string;
    year: string;
    description: string;
    image?: string;
    skills: string[];
    source?: string;
    highlighted?: boolean;
}

export interface Project {
    slug: string;
    title: string;
    category: string;
    thumbnail: string;
    gallery: string[];
    description: string;
    techStack: string[];
    websiteUrl?: string;
    githubUrl?: string;
    duration: string;
}