'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { fadeUp, microTransition, pillTap, staggerContainer } from '@/lib/motion';

const roles = [
  { label: 'Software Engineer', position: 'top-[13%] sm:top-[19%] left-[6%] sm:left-[12%]' },
  { label: 'Game Developer', position: 'top-[13%] sm:top-[19%] right-[6%] sm:right-[12%]' },
  { label: 'UI/UX Designer', position: 'top-[66%] sm:top-[72%] left-[5%] sm:left-[10%]' },
  { label: 'Full Stack Engineer', position: 'top-[66%] sm:top-[72%] right-[5%] sm:right-[10%]' },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-background relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden px-6">
      {roles.map((role) => (
        <div key={role.label} className={`absolute ${role.position} -translate-y-1/2`}>
          <motion.div
            className="flex cursor-grab items-center justify-center active:cursor-grabbing"
            drag
            dragSnapToOrigin
            dragElastic={0.15}
            whileHover={{ scale: 1.08, y: -4 }}
            whileDrag={{ scale: 1.5 }}
            transition={microTransition}
          >
            <span className="bg-accent/60 absolute h-20 w-36 rounded-full blur-2xl sm:h-32 sm:w-52" />
            <span className="text-text-primary relative w-max max-w-[38vw] text-center text-base font-normal text-balance sm:max-w-none sm:text-xl">
              {role.label}
            </span>
          </motion.div>
        </div>
      ))}

      <div className="-translate-y-6 sm:translate-y-12">
        <div className="hero-reveal relative z-10 flex flex-col items-center gap-2 text-center">
          <h1 className="text-text-primary flex flex-wrap justify-center text-4xl font-medium tracking-normal sm:text-6xl">
            {'Naqila Syaniwa'.split(' ').map((word, wi) => (
              <span key={wi} className="flex">
                {wi > 0 && <span className="w-[0.25em]" aria-hidden />}
                {word.split('').map((letter, li) => (
                  <span
                    key={li}
                    className={`hover:text-accent inline-block cursor-default transition-transform duration-150 hover:scale-125 hover:-translate-y-1.5 ${li === 0 ? 'font-serif italic' : 'font-sans'}`}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hover:text-accent hover:scale-[1.03] font-serif text-2xl italic text-text-primary transition-transform duration-150 sm:text-4xl cursor-default">
            Portofolio
          </p>
        </div>
      </div>

      <div className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 z-20 sm:right-8">
        <ThemeToggle />
      </div>

      <div className="absolute bottom-[calc(3.5rem+env(safe-area-inset-bottom))] left-0 flex w-full items-center justify-center px-8 sm:px-16">
        <motion.button
          type="button"
          onClick={() => router.push('/about')}
          className="border-border rounded-pill text-text-primary flex items-center gap-2 border px-10 py-3.5 text-base font-medium transition-colors hover:bg-surface"
          {...pillTap}
        >
          Start <span aria-hidden className="text-accent">✦</span>
        </motion.button>
      </div>
    </div>
  )
}