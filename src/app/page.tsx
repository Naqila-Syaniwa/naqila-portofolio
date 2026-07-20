'use client';

import { DropCap } from '@/components/DropCap';
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const roles = [
  { label: 'Software Engineer', position: 'top-16 left-8 sm:left-16' },
  { label: 'Game Developer', position: 'top-16 right-8 sm:right-16' },
  { label: 'UI/UX Designer', position: 'bottom-32 left-8 sm:left-16' },
  { label: 'Full Stack Engineer', position: 'bottom-32 right-8 sm:right-16' },
];

export default function Home() {
  return (
    <div className="bg-background relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden px-6">
      {roles.map((role) => (
        <div key={role.label} className={`absolute ${role.position} flex items-center justify-center`}>
          <span className="bg-accent/40 absolute h-24 w-40 rounded-full blur-3xl" />
          <span className="text-text-primary relative text-lg font-medium sm:text-x1">
            {role.label}
          </span>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <DropCap 
          as="h1" 
          className="text-text-primary text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Naqila Syaniwa
        </DropCap>
        <p className="font-serif text-2xl italic text-text-primary sm:text-3xl">
          Portofolio
        </p>
      </div>

      <div className="absolute bottom-12 left-0 flex w-full items-center justify-center px-8 sm:justify-between sm:px-16">
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
        <button
          type="button"
          className="border-border rounded-pill text-text-primary flex items-center gap-2 border px-8 py-3 text-base font-medium"
        >
          Start <span aria-hidden>✦</span>
        </button>
      </div>
    </div>
  )
}