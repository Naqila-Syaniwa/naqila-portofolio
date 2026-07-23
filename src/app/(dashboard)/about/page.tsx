'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { aboutContent } from "@/data/about";
import { RoleFilter } from "@/components/RoleFilter";
import { microTransition } from "@/lib/motion";

export default function AboutPage() {
    const [activeRole, setActiveRole] = useState(aboutContent.roles[0]);
    const bio = aboutContent.bioByRole[activeRole];

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="w-full">
                <RoleFilter roles={aboutContent.roles} active={activeRole} onChange={setActiveRole} />
            </div>

            <div className="border-border bg-surface h-64 w-64 rounded-card border sm:h-72 sm:w-72" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeRole}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={microTransition}
                    className="text-text-primary max-w-xl text-center text-base leading-relaxed"
                >
                    {bio.map((paragraph, i) => (
                        <p key={i} className="mt-4 first:mt-0">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>
            </AnimatePresence>

            <a
                href={aboutContent.cvUrl}
                download
                className="border-border rounded-pill text-text-primary hover:bg-surface inline-flex items-center gap-2 border px-8 py-3 text-sm font-medium transition-colors"
            >
                Download CV
            </a>
        </div>
    );
}