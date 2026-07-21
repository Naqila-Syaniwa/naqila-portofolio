'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DropCap } from '@/components/DropCap';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { navItems } from '@/lib/nav-items';

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="border-border bg-surface flex h-fit w-64 shrink-0 flex-col items-center gap-10 rounded-card border px-6 py-10">
            <nav className="flex flex-col items-center gap-8">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive ? 'page' : undefined}
                            className={`relative rounded-pill px-2 py-1 text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                                isActive 
                                    ? 'text-accent underline underline-offset-4' 
                                    : 'text-text-primary hover:text-accent'
                            }`}
                        >
                            {isActive && (
                                <span 
                                    aria-hidden="true"
                                    className="bg-accent/40 pointer-events-none absolute -inset-x-6 -inset-y-3 z-0 rounded-full blur-xl"
                                />
                            )}
                            <span className="relative z-10">
                                <DropCap>{item.label}</DropCap>
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <ThemeToggle />
        </aside>
    );
}