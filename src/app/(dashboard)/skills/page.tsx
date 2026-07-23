'use client';

import { motion } from 'motion/react';
import { skillCategories } from '@/lib/content';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
            {skillCategories.map((category) => (
                <motion.div
                    key={category.id}
                    variants={fadeUp}
                    className="border-border bg-surface flex items-center justify-between gap-4 rounded-card border p-6"
                >
                    <div className="flex flex-col gap-1">
                        <h2 className="text-text-primary text-lg font-medium">
                            {category.title}
                        </h2>
                        <p className="text-text-muted text-sm">
                            {category.skills.map((skill) => skill.name).join(', ')}
                        </p>
                    </div>

                    <span aria-hidden className="text-accent text-2xl shrink-0">
                        ✦
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}