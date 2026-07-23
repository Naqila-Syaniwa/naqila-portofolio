'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { skillCategories } from '@/lib/content';
import { fadeUp, microTransition, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
            {skillCategories.map((category) => {
                const isOpen = openId === category.id;
                return (
                    <motion.div
                        key={category.id}
                        variants={fadeUp}
                        layout
                        className="border-border bg-surface rounded-card border p-6"
                    >
                        <motion.button
                            type="button"
                            onClick={() => setOpenId(isOpen ? null : category.id)}
                            aria-expanded={isOpen}
                            layout
                            animate={{
                                backgroundColor: isOpen ? 'var(--color-accent)' : 'rgba(0,0,0,0)',
                            }}
                            transition={microTransition}
                            className="-m-6 flex w-[calc(100%+3rem)] items-center justify-between gap-4 rounded-card p-6 text-left"
                        >
                            <div className="flex flex-col gap-1">
                                <h2 
                                    className={`text-lg font-semibold transition-colors ${
                                        isOpen ? 'text-background' : 'text-text-primary'
                                    }`}
                                >
                                    {category.title}
                                </h2>
                                <p 
                                    className={`text-sm transition-colors ${
                                        isOpen ? 'text-background/80' : 'text-text-muted'
                                    }`}
                                >
                                    {category.skills.map((skill) => skill.name).join(', ')}
                                </p>
                            </div>

                            <span 
                                aria-hidden 
                                className={`text-2xl shrink-0 transition-colors ${
                                    isOpen ? 'text-background' : 'text-accent'
                                }`}
                            >
                                ✦
                            </span>
                        </motion.button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 0, opacity: 0 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={microTransition}
                                    className="overflow-hidden"
                                >
                                    <ul className="border-border mt-4 flex flex-col gap-2 border-t pt-4">
                                        {category.skills.map((skill) => (
                                            <li key={skill.name} className="text-text-primary text-sm">
                                                {skill.name}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}