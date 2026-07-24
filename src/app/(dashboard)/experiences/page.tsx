'use client';

import { useState } from "react";
import { motion } from "motion/react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { staggerContainer } from "@/lib/motion";
import { experiences } from "@/lib/content";

export default function ExperiencesPage() {
    const [openId, setOpenId] = useState<string | null>(null);
    
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 md:gap-6"
        >
            {experiences.map((experience) => (
                <ExperienceCard 
                    key={experience.id} 
                    experience={experience}
                    isOpen={openId == experience.id}
                    onToggle={() => setOpenId(openId === experience.id ? null: experience.id)} 
                />
            ))}
        </motion.div>
    );
}