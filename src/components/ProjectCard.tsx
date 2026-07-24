'use client';

import Link from 'next/link'
import { motion } from 'motion/react';
import type { Project } from '@/types/content';
import { fadeUp } from '@/lib/motion';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { slug, title, category } = project;

    return (
        <motion.div variants={fadeUp}>
            <Link
                href={`/projects/${slug}`}
                className="group border-border bg-surface rounded-card focus-visible:ring-accent focus-visible:ring-offset-background block overflow-hidden border transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
                <div className="bg-background relative aspect-video overflow-hidden">
                    <div className="from-surface to-background absolute inset-0 bg-gradient-to-br transition-transform duration-200 group-hover:scale-105" />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="border-border bg-background text-text-primary rounded-pill border px-5 py-2 text-sm font-medium">
                            See Details
                        </span>
                    </div>
                </div>

                <div className="p-4 md:p-5">
                    <h2 className="text-text-primary font-semibold">{title}</h2>
                    <p className="text-text-muted text-sm">{category}</p>
                </div>
            </Link>
        </motion.div>
    );
}