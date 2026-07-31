'use client';

import { motion } from 'motion/react';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import type { Project } from '@/types/content';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { getTechIcon } from '@/lib/tech-icons';
import { SmartImage } from './SmartImage';
import { ProjectGallery } from './ProjectGallery';

interface ProjectDetailProps {
    project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
    const { title, category, duration, description, gallery, techStack, websiteUrl, githubUrl } = project;

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
        >
            <motion.h1 variants={fadeUp} className="text-text-primary text-3xl font-semibold">
                {title}
            </motion.h1>

            <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-between gap-4"
            >
                <p className="text-text-muted text-sm">{category}</p>
                
                {(websiteUrl || githubUrl) && (
                    <div className="flex flex-wrap gap-3">
                        {websiteUrl && (
                            <a
                                href={websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-border bg-surface text-text-primary hover:border-accent flex items-center gap-2 rounded-pill border px-4 py-2 text-sm font-medium transition-colors"
                            >
                                <FiExternalLink aria-hidden />
                                Website
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-border bg-surface text-text-primary hover:border-accent flex items-center gap-2 rounded-pill border px-4 py-2 text-sm font-medium transition-colors"
                            >
                                <SiGithub aria-hidden />
                                Github
                            </a>
                        )}
                    </div>
                )}
            </motion.div>


            <motion.div variants={fadeUp}>
                <ProjectGallery images={gallery} title={title} />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <h2 className="text-text-primary text-base font-semibold">Description :</h2>
                <p className="text-text-primary text-sm leading-relaxed">{description}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <h2 className="text-text-primary text-base font-semibold">Tech Stack :</h2>
                <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => {
                        const Icon = getTechIcon(tech);
                        return (
                            <div
                                key={tech}
                                className="border-border bg-background flex items-center gap-2 rounded-card border px-4 py-2.5"
                            >
                                {Icon && <Icon aria-hidden className="text-accent shrink-0 text-lg" />}
                                <span className="text-text-primary text-sm whitespace-nowrap">
                                    {tech}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <h2 className="text-text-primary text-base font-semibold">Duration :</h2>
                <p className="text-text-muted text-sm">{duration}</p>
            </motion.div>
        </motion.div>
    );
}   