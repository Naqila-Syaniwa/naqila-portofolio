'use client';

import { DropCap } from '@/components/DropCap';
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const roles = [
  { label: 'Software Engineer', position: 'top-[6%] sm:top[10%] left-[6%] sm:left-[12%]' },
  { label: 'Game Developer', position: 'top-[6%] sm:top[10%] right-[6%] sm:right-[12%]' },
  { label: 'UI/UX Designer', position: 'bottom-[20%] sm:bottom-[24%] left-[4%] sm:left-[10%]' },
  { label: 'Full Stack Engineer', position: 'bottom-[20%] sm:bottom-[24%] right-[4%] sm:right-[10%]' },
];

export default function Home() {
  return (
    <div className="bg-background relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden px-6">
      {roles.map((role) => (
        <div key={role.label} className={`absolute ${role.position} flex items-center justify-center`}>
          <span className="bg-accent/30 absolute h-28 w-48 rounded-full blur-3xl" />
          <span className="text-text-primary relative w-max max-w-[38vw] text-cente text-base font-normal text-balance sm:max-w-none sm:text-xl">
            {role.label}
          </span>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        <DropCap 
          as="h1" 
          className="text-text-primary text-4xl font-medium tracking-normal sm:text-6xl"
        >
          Naqila Syaniwa
        </DropCap>
        <p className="font-serif text-2xl italic text-text-primary sm:text-4xl">
          Portofolio
        </p>
      </div>

      <div className="absolute bottom-[calc(3.5rem+env(safe-area-inset-bottom))] left-0 flex w-full items-center justify-center px-8 sm:justify-between sm:px-16">
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
        <button
          type="button"
          className="border-border rounded-pill text-text-primary flex items-center gap-2 border px-10 py-3.5 text-base font-medium transition-colors hovering:bg-surface"
        >
          Start <span aria-hidden className="text-accent">✦</span>
        </button>
      </div>
    </div>
  )
}