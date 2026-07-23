'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { navItems } from '@/lib/nav-items';

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        function handlePointerDown(event: PointerEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        
        document.addEventListener('pointerdown', handlePointerDown);
        return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [open])

    return (
        <div 
            ref={containerRef}
            className="fixed top-[calc(1rem+env(safe-area-inset-top))] left-[calc(1rem+env(safe-area-inset-left))] z-50 sm:hidden"
        >
            <motion.div
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                className="border-border bg-surface flex flex-col items-center overflow-hidden rounded-[2rem] border shadow-lg"
            >
                <motion.button
                    layout="position"
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
                    className="text-accent flex h-12 w-12 shrink-0 items-center justify-center font-serif text-xl italic"
                >
                    N
                </motion.button>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.45, 0, 0.55, 1] }}
                            className="flex w-40 flex-col items-center gap-1 px-2 pb-3"
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`rounded-pill w-full px-4 py-2 text-center text-sm font-medium transition-colors ${
                                            isActive
                                                ? 'text-accent'
                                                : 'text-text-primary hover:text-accent'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <div className="border-border mt-1 w-full border-t pt-2">
                                <div className="flex justify-center">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}