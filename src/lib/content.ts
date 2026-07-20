import skillsData from '@/data/skills.json';
import experiencesData from '@/data/experiences.json';
import projectData from '@/data/projects.json';
import type { SkillCategory, Experience, Project } from '@/types/content';

export const skillCategories = skillsData as SkillCategory[];
export const experiences = experiencesData as Experience[];
export const projects = projectData as Project[];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}