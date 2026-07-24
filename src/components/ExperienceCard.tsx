'use client';

import { AnimatePresence, motion } from "motion/react";
import type { Experience } from "@/types/content";
import { fadeUp, microTransition } from "@/lib/motion";

interface ExperienceCardProps {
    experience: Experience;
    isOpen: boolean;
    onToggle: () => void;
}

export function ExperienceCard({ experience, isOpen, onToggle }: ExperienceCardProps) {
    const { title, organization, year, skills, source } = experience;

    return (
        <motion.div
            variants={fadeUp}
            layout
            className="border-border bg-surface rounded-card border p-4 md:p-6"
        >
            <motion.button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                layout
                animate={{
                    backgroundColor: isOpen ? 'var(--color-accent)' : 'rgba(0,0,0,0)',
                }}
                transition={microTransition}
                className={`-m-4 flex w-[calc(100%+2rem)] items-center justify-between gap-4 p-4 text-left transition-[border-radius] md:-m-6 md:w-[calc(100%+3rem)] md:p-6 ${
                    isOpen ? 'rounded-t-card' : 'rounded-card'
                }`}
                
            >
                <div className="flex flex-col gap-1">
                    <h2 
                        className={`text-lg font-semibold transition-color ${
                            isOpen ? 'text-background' : 'text-text-primary'
                        }`}
                    >
                        {title}
                    </h2>
                    <p
                        className={`text-sm transition-colors ${
                            isOpen ? 'text-background/80' : 'text-text-muted'
                        }`}
                    >
                        {year}
                    </p>
                </div>

                <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 360 : 0}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`inline-block shrink-0 text-2xl transition-colors ${
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
                            <div className="border-border mt-4 flex flex-col gap-4 border-t pt-4 md:flex-row">
                                <div className="bg-background border-border h-40 w-full shrink-0 rounded-card border md:w-56" />

                                <div className="flex flex-col gap-3">
                                    {skills.length > 0 && (
                                        <div>
                                            <p className="text-text-muted text-sm">Skills:</p>
                                            <div className="mt-1 flex flex-wrap gap-2">
                                                {skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="border-border bg-background text-text-primary rounded-pill border px-3 py-1 text-xs"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <p className="text-text-primary text-sm">
                                        <span className="text-text-muted">From: </span>
                                        {source ? (
                                            <a
                                                href={source}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-accent underline underline-offset-2"
                                            >
                                                {organization}
                                            </a>
                                        ) : (
                                            organization
                                        )}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
            </AnimatePresence>
        </motion.div>
    )
}