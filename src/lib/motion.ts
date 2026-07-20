import type { Transition, Variants } from 'motion/react';

export const duration = {
    microFast: 0.15,
    microSlow: 0.3,
    section: 0.5,
    theme: 0.35,
} as const;

export const easing = {
    enter: [0.16, 1, 0.3, 1],
    exit: [0.7, 0, 0.84, 0],
} as const;

export const microTransition: Transition = {
    duration: duration.microFast,
    ease: easing.enter,
};

export const sectionTransition: Transition = {
    duration: duration.section,
    ease: easing.enter,
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: sectionTransition,
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const gentleFloat: Variants = {
    animate: {
        y: [0, -4, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export const pillTap = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.98 },
    transition: microTransition,
};