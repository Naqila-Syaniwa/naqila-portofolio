'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { contactContent } from '@/data/contact';
import { socialIconMap } from '@/lib/social-icons';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { contactFormSchema, type ContactFormValues } from '@/lib/contact-schema';

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });
    
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function onSubmit(values: ContactFormValues) {
        setSubmitStatus('idle');
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            reset();
            setSubmitStatus('success');
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        }
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
                
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-text-primary w-24 shrink-0 text-sm">Name :</span>
                        <div className="flex w-full flex-col gap-1">
                            <input 
                                type="text"
                                placeholder="Your name"
                                {...register('name')}
                                aria-invalid={!!errors.name}
                                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-accent focus-visible:ring-offset-background w-full rounded-card border px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:outline-none aria-invalid:border-danger"
                            />
                            {errors.name && (
                                <span className="text-danger text-xs">{errors.name.message}</span>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-text-primary w-24 shrink-0 text-sm">Email :</span>
                        <div className="flex w-full flex-col gap-1">
                            <input 
                                type="email"
                                placeholder="your@email.com"
                                {...register('email')}
                                aria-invalid={!!errors.email}
                                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-accent focus-visible:ring-offset-background w-full rounded-card border px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:outline-none aria-invalid:border-danger"
                            />
                            {errors.email && (
                                <span className="text-danger text-xs">{errors.email.message}</span>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-text-primary w-24 shrink-0 text-sm">Message :</span>
                        <div className="flex w-full flex-col gap-1">
                            <textarea 
                                rows={5}
                                placeholder="Hi, I'd like to discuss about a project, collaboration, or opportunity."
                                {...register('message')}
                                aria-invalid={!!errors.message}
                                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-accent focus-visible:ring-offset-background w-full resize-none rounded-card border px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:outline-none aria-invalid:border-danger"
                            />
                            {errors.message && (
                                <span className="text-danger text-xs">{errors.message.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <AnimatePresence mode="wait">
                            {submitStatus === 'success' && (
                                <motion.p
                                    key="success"
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-accent text-sm"
                                >
                                    Message sent! Thanks for reaching out - I&apos;ll get back to you soon.
                                </motion.p>
                            )}
                            {submitStatus === 'error' && (
                                <motion.p
                                    key="error"
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-danger text-sm"
                                >
                                    Something went wrong. Please try again in a moment.
                                </motion.p>
                            )}
                        </AnimatePresence>
                        
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                            className="border-border bg-surface text-text-primary hover:border-accent self-end rounded-pill border px-6 py-2.5 text0sm font-medium transition-colors"
                        >
                            {isSubmitting ? 'sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
}