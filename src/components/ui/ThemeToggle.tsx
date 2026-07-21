'use client';

import { useSyncExternalStore } from 'react';
import { motion } from 'motion/react';
import { applyThemesWithTransition, getThemeServerSnapshot, getThemeSnapshot, subscribeTheme, type Theme } from '@/lib/theme';

const TRACK_WIDTH = 40;
const KNOB_SIZE = 18;
const TRACK_PADDING = 3;

export function ThemeToggle() {
    const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
    
    function toggle(event: React.MouseEvent<HTMLButtonElement>) {
        const next: Theme = theme === 'light' ? 'dark' : 'light';
        const rect = event.currentTarget.getBoundingClientRect();
        applyThemesWithTransition(next, {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        });
    }

    const knobX = theme === 'dark' ? TRACK_WIDTH - KNOB_SIZE - TRACK_PADDING : TRACK_PADDING;

    return (
        <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label="Toggle theme"
            onClick={toggle}
            className="border-border rounded-pill relative inline-flex items-center border p-0.5"
            style={{ width: TRACK_WIDTH, height: KNOB_SIZE + TRACK_PADDING * 2 }}
        >
            <motion.span
                className="bg-accent absolute rounded-full"
                style={{ width: KNOB_SIZE, height: KNOB_SIZE, top: TRACK_PADDING }}
                initial={false}
                animate={{ x: knobX }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            />
        </button>
    );
}