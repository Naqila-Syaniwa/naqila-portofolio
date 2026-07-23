'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { skillCategories } from '@/lib/content';
import { fadeUp, microTransition, staggerContainer } from '@/lib/motion';
import { skillIconMap, skillLevelLabel } from '@/lib/skill-icons';

export default function SkillsPage() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-6"
        >
            {skillCategories.map((category) => {
                const isOpen = openId === category.id;
                return (
                    <motion.div
                        key={category.id}
                        variants={fadeUp}
                        layout
                        className="border-border bg-surface rounded-card border p-4 md:p-6"
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
                            className="-m-4 flex w-[calc(100%+2rem)] items-center justify-between gap-4 rounded-card p-4 text-left md:-m-6 md:w-[calc(100%+3rem]] md:p-6"
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

                            <motion.span 
                                aria-hidden
                                animate={{ rotate: isOpen ? 360 : 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className={`inline-block text-3xl shrink-0 transition-colors ${
                                    isOpen ? 'text-background' : 'text-accent'
                                }`}
                            >
                                ✦
                            </motion.span>
                        </motion.button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={microTransition}
                                    className="overflow-hidden"
                                >
                                    <div className="border-border mt-4 flex flex-wrap gap-2 border-t pt-4 md:gap-3">
                                        {category.skills.map((skill) => {
                                            const Icon = skillIconMap[skill.icon];
                                            return (
                                            <div 
                                                key={skill.name} 
                                                className="border-border bg-background flex items-center gap-2 rounded-card border px-3 py-2 md:px-4 md:py-2.5"
                                            >
                                                {Icon && (
                                                    <Icon aria-hidden className="text-accent shrink-0 text-lg" />
                                                )}
                                                <span className="text-text-primary text-sm whitespace-nowrap">
                                                    {skill.name}{' '}
                                                    <span className="text-text-muted">
                                                        ({skillLevelLabel[skill.level]})
                                                    </span>
                                                </span>
                                            </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}