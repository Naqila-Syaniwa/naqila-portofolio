import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-background mx-auto flex min-h-screen w-full max-w-6x1 flex-col gap-10 px-6 py-10 sm:flex-row sm:px-10">
            <Sidebar />
            <main className="min-w-0 flex-1">{children}</main>
        </div>
    );
}