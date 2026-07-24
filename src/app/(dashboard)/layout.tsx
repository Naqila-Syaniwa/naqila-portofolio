import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-background mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pt-24 pb-10 sm:flex-row sm:items-start sm:px-10 sm:pt-10">
            <MobileNav />
            <Sidebar />
            <main className="min-w-0 flex-1">{children}</main>
        </div>
    );
}