'use client';

import { motion } from "motion/react";
import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { staggerContainer } from "@/lib/motion";

export default function ProjectsPage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
        >
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </motion.div>
    );
}