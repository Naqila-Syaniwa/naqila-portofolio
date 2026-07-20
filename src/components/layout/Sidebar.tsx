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
                            className={`text-lg font-medium transition-colors ${
                                isActive 
                                    ? 'text-accent underline underline-offset-4' 
                                    : 'text-text-primary hover:text-accent'
                            }`}
                        >
                            <DropCap>{item.label}</DropCap>
                        </Link>
                    );
                })}
            </nav>

            <ThemeToggle />
        </aside>
    );
}