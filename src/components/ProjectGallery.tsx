'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { SmartImage } from './SmartImage';
import { microTransition } from '@/lib/motion';

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const close = () => setOpenIndex(null);
    const showPrev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    const showNext = () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));

    useEffect(() => {
        if (openIndex === null) return;

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [openIndex, images.length]);

    return (
        <>
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
                {images.map((src, i) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setOpenIndex(i)}
                        aria-label={`Perbesar galeri ${title} ${i + 1}`}
                        className="border-border bg-surface focus-visible:ring-accent focus-visible:ring-offset-background relative aspect-video w-[85%] shrink-0 snap-center overflow-hidden rounded-card border transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none sm:w-auto sm:shrink sm:snap-none"
                    >
                        <SmartImage
                            src={src}
                            alt={`Galeri ${title} ${i + 1}`}
                            fill
                            sizes="(min-width: 640px) 33vw, 85vw"
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {openIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={microTransition}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Galeri ${title} — gambar ${openIndex + 1} dari ${images.length}`}
                        onClick={close}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-10"
                    >
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Close gallery"
                            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                        >
                            <FiX size={22} />
                        </button>

                        {images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        showPrev();
                                    }}
                                    aria-label="Previous image"
                                    className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:left-4"
                                >
                                    <FiChevronLeft size={24} />
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        showNext();
                                    }}
                                    aria-label="Next image"
                                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:right-4"
                                >
                                    <FiChevronRight size={24} />
                                </button>
                            </>
                        )}

                        <div onClick={(e) => e.stopPropagation()} className="relative aspect-video w-full max-w-5xl">
                            <SmartImage
                                src={images[openIndex]}
                                alt={`Galeri ${title} ${openIndex + 1} — diperbesar`}
                                fill
                                sizes="90vw"
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}