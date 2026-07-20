export type Theme = 'light' | 'dark';

type Listener = () => void;
const listeners = new Set<Listener>();

export function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
    listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export function getThemeSnapshot(): Theme {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function getThemeServerSnapshot(): Theme {
    return 'light';
}