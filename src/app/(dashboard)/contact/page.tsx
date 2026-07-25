'use client';

import { motion } from 'motion/react';
import { contactContent } from '@/data/contact';
import { socialIconMap } from '@/lib/social-icons';
import { fadeUp, staggerContainer } from '@/lib/motion';
import React from 'react';

export default function ContactPage() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <h1 className="text-text-primary text-lg font-semibold">Contact Me</h1>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={`mailto:${contactContent.email}`}
                        className="border-border bg-surface text-text-primary hover:border-accent flex items-center gap-2 rounded-pill border px-4 py-2.5 text-sm font-medium transition-colors"
                    >
                        <socialIconMap.gmail className="shrink-0 text-lg" aria-hidden />
                        Gmail
                    </a>
                    {contactContent.socials.map((social) => {
                        const Icon = socialIconMap[social.icon];
                        return (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-border bg-surface text-text-primary hover:border-accent flex items-center gap-2 rounded-pill border px-4 py-2.5 text-sm font-mdium transition-colors"
                            >
                                {Icon && <Icon className="shrink-0 text-lg" aria-hidden />}
                                {social.label}
                            </a>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-text-primary text-lg font-semibold">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-text-primary w-24 shrink-0 text-sm">Name :</span>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-accent focus-visible:ring-offset-background w-full rounded-card border px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:outline-none"
                        />
                    </label>

                    <label className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-text-primary w-24 shrink-0 text-sm">Email :</span>
                        <input 
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-accent focus-visible:ring-offset-background w-full rounded-card border px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:outline-none"
                        />
                    </label>

                    <label className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-text-primary w-24 shrink-0 text-sm">Message :</span>
                        <textarea 
                            name="message"
                            rows={5}
                            placeholder="Hi, I'd like to discuss about a project, collaboration, or opportunity"
                            className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-accent focus-visible:ring-offset-background w-full rounded-card border px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:outline-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="border-border bg-surface text-text-primary hover:border-accent self-end rounded-pill border px-6 py-2.5 text0sm font-medium transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}